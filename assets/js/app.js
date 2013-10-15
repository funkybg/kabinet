//================= GOOGLE MAPS SCRIPS ==================//

function initialize() {
    var myLatlng = new google.maps.LatLng(42.7370990, 23.3019066);

    var mapOptions = {
        zoom: 18,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var map2 = new google.maps.Map(document.getElementById("map-canvas2"), mapOptions);

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h2 id="firstHeading" class="firstHeading">Дентален център - КМ Дент</h2>' +
        '<div id="bodyContent">' +
        '<p>д-р Елияна  Мартева <strong class="color__text--green">0888 54 56 81</strong><br>д-р Любен  Костов <strong class="color__text--green">0887 392 082</strong></p>' +
        '<p>ж.к. Свобода, ул. Ген.Никола Жеков 22,<br>бл. Бриз Север 2, партер</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var infowindow2 = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Дентален център - КМ Дент"
    });
    var marker2 = new google.maps.Marker({
        position: myLatlng,
        map: map2,
        title: "Дентален център - КМ Дент"
    });

    infowindow.open(map, marker);
    infowindow2.open(map2, marker2);
}

function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCJwdQYGbR3y3N8iCGVB0fRIqmhsOb3OGI&sensor=false&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;