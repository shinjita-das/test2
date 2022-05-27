var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HHRI_ThreeIndex_1 = new ol.format.GeoJSON();
var features_HHRI_ThreeIndex_1 = format_HHRI_ThreeIndex_1.readFeatures(json_HHRI_ThreeIndex_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HHRI_ThreeIndex_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HHRI_ThreeIndex_1.addFeatures(features_HHRI_ThreeIndex_1);
var lyr_HHRI_ThreeIndex_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HHRI_ThreeIndex_1, 
                style: style_HHRI_ThreeIndex_1,
                interactive: true,
    title: 'HHRI_ThreeIndex<br />\
    <img src="styles/legend/HHRI_ThreeIndex_1_0.png" /> 0 - 10<br />\
    <img src="styles/legend/HHRI_ThreeIndex_1_1.png" /> 10 - 20<br />\
    <img src="styles/legend/HHRI_ThreeIndex_1_2.png" /> 20 - 30<br />\
    <img src="styles/legend/HHRI_ThreeIndex_1_3.png" /> 30 - 40<br />\
    <img src="styles/legend/HHRI_ThreeIndex_1_4.png" /> 40 - 50<br />\
    <img src="styles/legend/HHRI_ThreeIndex_1_5.png" /> 50 - 60<br />\
    <img src="styles/legend/HHRI_ThreeIndex_1_6.png" /> 60 - 70<br />\
    <img src="styles/legend/HHRI_ThreeIndex_1_7.png" /> 70 - 80<br />\
    <img src="styles/legend/HHRI_ThreeIndex_1_8.png" /> 80 - 90<br />\
    <img src="styles/legend/HHRI_ThreeIndex_1_9.png" /> 90 - 100<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_HHRI_ThreeIndex_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_HHRI_ThreeIndex_1];
lyr_HHRI_ThreeIndex_1.set('fieldAliases', {'SA1_MAIN16': 'SA1_MAIN16', 'SA1_7DIG16': 'SA1_7DIG16', 'SA2_MAIN16': 'SA2_MAIN16', 'SA2_5DIG16': 'SA2_5DIG16', 'SA2_NAME16': 'SA2_NAME16', 'SA3_CODE16': 'SA3_CODE16', 'SA3_NAME16': 'SA3_NAME16', 'SA4_CODE16': 'SA4_CODE16', 'SA4_NAME16': 'SA4_NAME16', 'GCC_CODE16': 'GCC_CODE16', 'GCC_NAME16': 'GCC_NAME16', 'STE_CODE16': 'STE_CODE16', 'STE_NAME16': 'STE_NAME16', 'AREASQKM16': 'AREASQKM16', 'SA1_J': 'SA1_J', 'SA1': 'SA1', 'SA2': 'SA2', 'SA2NAME': 'SA2NAME', 'SA3': 'SA3', 'SA3NAME': 'SA3NAME', 'SA4': 'SA4', 'SA4NAME': 'SA4NAME', 'GSSD': 'GSSD', 'GSSDNAME': 'GSSDNAME', 'STATE': 'STATE', 'STATENAME': 'STATENAME', 'LST': 'LST', 'VI': 'VI', 'EXPOSURE': 'EXPOSURE', 'HHRI': 'HHRI', 'HHRIclass': 'HHRIclass', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HHRI_ThreeIndex_1.set('fieldImages', {'SA1_MAIN16': 'TextEdit', 'SA1_7DIG16': 'TextEdit', 'SA2_MAIN16': 'TextEdit', 'SA2_5DIG16': 'TextEdit', 'SA2_NAME16': 'TextEdit', 'SA3_CODE16': 'TextEdit', 'SA3_NAME16': 'TextEdit', 'SA4_CODE16': 'TextEdit', 'SA4_NAME16': 'TextEdit', 'GCC_CODE16': 'TextEdit', 'GCC_NAME16': 'TextEdit', 'STE_CODE16': 'TextEdit', 'STE_NAME16': 'TextEdit', 'AREASQKM16': 'TextEdit', 'SA1_J': 'TextEdit', 'SA1': 'TextEdit', 'SA2': 'TextEdit', 'SA2NAME': 'TextEdit', 'SA3': 'TextEdit', 'SA3NAME': 'TextEdit', 'SA4': 'TextEdit', 'SA4NAME': 'TextEdit', 'GSSD': 'TextEdit', 'GSSDNAME': 'TextEdit', 'STATE': 'TextEdit', 'STATENAME': 'TextEdit', 'LST': 'TextEdit', 'VI': 'TextEdit', 'EXPOSURE': 'TextEdit', 'HHRI': 'TextEdit', 'HHRIclass': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HHRI_ThreeIndex_1.set('fieldLabels', {'SA1_MAIN16': 'no label', 'SA1_7DIG16': 'no label', 'SA2_MAIN16': 'no label', 'SA2_5DIG16': 'no label', 'SA2_NAME16': 'no label', 'SA3_CODE16': 'no label', 'SA3_NAME16': 'no label', 'SA4_CODE16': 'no label', 'SA4_NAME16': 'no label', 'GCC_CODE16': 'no label', 'GCC_NAME16': 'no label', 'STE_CODE16': 'no label', 'STE_NAME16': 'no label', 'AREASQKM16': 'no label', 'SA1_J': 'no label', 'SA1': 'no label', 'SA2': 'no label', 'SA2NAME': 'no label', 'SA3': 'no label', 'SA3NAME': 'no label', 'SA4': 'no label', 'SA4NAME': 'no label', 'GSSD': 'no label', 'GSSDNAME': 'no label', 'STATE': 'no label', 'STATENAME': 'no label', 'LST': 'no label', 'VI': 'inline label', 'EXPOSURE': 'no label', 'HHRI': 'no label', 'HHRIclass': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_HHRI_ThreeIndex_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});