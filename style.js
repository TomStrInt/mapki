let map = L.map('map').setView([52.40780, 16.91289 ], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let marker1 = L.marker([52.407776185156074, 16.912494529471573]).addTo(map);
let marker2 = L.marker([52.395666248005670, 16.950385570087022]).addTo(map);
let marker3 = L.marker([52.410047430065504, 16.956812649409343]).addTo(map);

let polygon = L.polygon([
    [52.401406076691046, 16.8999987275857],
    [52.398647779027804, 16.900768654034515],
    [52.3980568160714, 16.902790450130734],
    [52.39867733090537, 16.903532729195653],
    [52.399422165639194, 16.902821963319493],
    [52.40159703278949, 16.902047786213316]
], {color: 'purple'}
).addTo(map);


polygon.on('mouseover', function(){
    L.polygon([
        [52.401406076691046, 16.8999987275857],
        [52.398647779027804, 16.900768654034515],
        [52.3980568160714, 16.902790450130734],
        [52.39867733090537, 16.903532729195653],
        [52.399422165639194, 16.902821963319493],
        [52.40159703278949, 16.902047786213316]
    ], {color: 'green'}
    ).addTo(map);
});


polygon.bindPopup("<b>Park Wilsona</b>");


marker1.bindPopup("<b>Rondo Kaponiera</b><br><button class='button'>Zobacz więcej</button>", {closeButton: false}).openPopup();
marker2.bindPopup("<b>Rondo Rataje</b><br><button class='button'>Zobacz więcej</button>", {closeButton: false}).openPopup();
marker3.bindPopup("<b>Rondo Śródka</b><br><button class='button'>Zobacz więcej</button>", {closeButton: false}).openPopup();

map.on('click', function(e){
    let coord = e.latlng.lat + ',' + e.latlng.lng;
    console.log(coord);
    navigator.clipboard.writeText(coord);
})