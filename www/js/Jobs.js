var jobs = {



    getJobs: function () {


        /*
        var jobs = [];
        var term = {};
        jQuery.support.cors = true;

        alert('a');
        jQuery.getJSON("http://www.c4logistics.com/userdata/CurrentLiveForCarrier.aspx?callback=?",
        null,function (data) {
        alert("dd");
        });
        alert('a');



 
        return jobs;
        }
        }



        alert('a');
        downloadUrl("http://www.c4logistics.com/userdata/CurrentLiveForCarrier.aspx", function (doc) {
        alert('b');
        var xml = xmlParse(doc);
        var movements = xml.documentElement.getElementsByTagName("movement");


        for (var i = 0; i < movements.length; i++) {
        job = new Object();
        job.MovementNumber = movements[i].getAttribute("MovementNumber");
        jobs.push(job);
        }
        });
        */

    }
}

var lat = 0;
var lng = 0;
//A button click will call this function
function getLocation() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });
}

// onSuccess Geolocation
//
function onSuccess(position) {
    //Lat long will be fetched and stored in session variables
    //These variables will be used while storing data in local database 
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    alert('Lattitude: ' + lat + ' Longitude: ' + long);
    sessionStorage.setItem('lattitude', lat);
    sessionStorage.setItem('longitude', lng);
}
// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
}
 