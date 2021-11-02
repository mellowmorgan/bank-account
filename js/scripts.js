function Places(){
    this.places={};
    this.currentId = 0;
}
function Place(location,landmarks, timeOfYear, notes){
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}
Places.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};
  
Places.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.places[place.id] = place;
  };
  

let newObjCounter=0;

function displayPlace(objName){
    newObjCounter +=1
    let newObj = "newObj"
    newObj = newObj+ newObjCounter;
    $("#place").append("<a id="+newObj+">" + objName.location + "</a>" + "</br>");
    $("#"+newObj).append("<p class="+newObj+">" + "Landmarks: " + objName.landmarks.join(", ") + "</p>");
    $("#"+newObj).append("<p class="+newObj+">"+ "Time visited: " + objName.timeOfYear + "</p>");
    $("#"+newObj).append("<p class="+newObj+">" + "Notes: " +objName.notes + "</p>");
    $("."+newObj).css("display","none");
    $("#"+newObj).click(function(){
        $("."+newObj).toggle();
    });
};

function displayPlaces(placeStore){
    looper=Object.keys(placeStore.places);
    looper.forEach(function(key){
        place = placeStore.places[key];
        const props=Object.keys(place);
        props.forEach(function(key){
       
    let newObj = "newObj";

    $("#place").append("<p>" + key + ": " + place[key] + "</p>");
        });

    });
    
}

let places = new Places(); 
$(document).ready(function(){

 
    
    let obj1 = new Place("London, England", ["Regents Park", "Hampstead Heath", "Tate's Museum"], "2019-10", "My favorite city so far!");

    let obj2 = new Place("Seattle, Washington", ["Pikes Place", "Space needle"], "2021-07", "One of my favorite close in places to visit!");
    
    let obj3 = new Place("Amsterdam, Netherlands", ["Canals", "Van Gogh Museum"], "2019-10", "A magical fun-filled city. Try the Dutch apple pie!");
    
    // displayPlace(obj1);
    // displayPlace(obj2);
    // displayPlace(obj3);
    places.addPlace(obj1);
    places.addPlace(obj2);
    places.addPlace(obj3);
    $("#formOne").submit(function(event){
        event.preventDefault();
        const loc = $("#location").val();
        const landmarks = $("#landmarks").val();
        const arrayLandmarks = landmarks.split(", ");
        const time= $("#time").val();
        const notes= $("#notes").val();
        let obj4 = new Place(loc, arrayLandmarks, time, notes);
        places.addPlace(obj4);
        // displayPlace(obj4);
        displayPlaces(places);
    });
});