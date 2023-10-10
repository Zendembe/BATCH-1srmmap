var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ACnoisyRoom_1 = new ol.format.GeoJSON();
var features_ACnoisyRoom_1 = format_ACnoisyRoom_1.readFeatures(json_ACnoisyRoom_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACnoisyRoom_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACnoisyRoom_1.addFeatures(features_ACnoisyRoom_1);
var lyr_ACnoisyRoom_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACnoisyRoom_1, 
                style: style_ACnoisyRoom_1,
                interactive: true,
                title: '<img src="styles/legend/ACnoisyRoom_1.png" /> AC noisy Room'
            });
var format_Basketballcourt_2 = new ol.format.GeoJSON();
var features_Basketballcourt_2 = format_Basketballcourt_2.readFeatures(json_Basketballcourt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basketballcourt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basketballcourt_2.addFeatures(features_Basketballcourt_2);
var lyr_Basketballcourt_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Basketballcourt_2, 
                style: style_Basketballcourt_2,
                interactive: true,
                title: '<img src="styles/legend/Basketballcourt_2.png" /> Basketball court'
            });
var format_BoysHostel_3 = new ol.format.GeoJSON();
var features_BoysHostel_3 = format_BoysHostel_3.readFeatures(json_BoysHostel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoysHostel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoysHostel_3.addFeatures(features_BoysHostel_3);
var lyr_BoysHostel_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoysHostel_3, 
                style: style_BoysHostel_3,
                interactive: true,
                title: '<img src="styles/legend/BoysHostel_3.png" /> Boys Hostel'
            });
var format_Building1_4 = new ol.format.GeoJSON();
var features_Building1_4 = format_Building1_4.readFeatures(json_Building1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1_4.addFeatures(features_Building1_4);
var lyr_Building1_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Building1_4, 
                style: style_Building1_4,
                interactive: true,
                title: '<img src="styles/legend/Building1_4.png" /> Building 1'
            });
var format_Building2_5 = new ol.format.GeoJSON();
var features_Building2_5 = format_Building2_5.readFeatures(json_Building2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building2_5.addFeatures(features_Building2_5);
var lyr_Building2_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Building2_5, 
                style: style_Building2_5,
                interactive: true,
                title: '<img src="styles/legend/Building2_5.png" /> Building 2'
            });
var format_Cblock_6 = new ol.format.GeoJSON();
var features_Cblock_6 = format_Cblock_6.readFeatures(json_Cblock_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cblock_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cblock_6.addFeatures(features_Cblock_6);
var lyr_Cblock_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cblock_6, 
                style: style_Cblock_6,
                interactive: true,
                title: '<img src="styles/legend/Cblock_6.png" /> C block'
            });
var format_Cafe_7 = new ol.format.GeoJSON();
var features_Cafe_7 = format_Cafe_7.readFeatures(json_Cafe_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cafe_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cafe_7.addFeatures(features_Cafe_7);
var lyr_Cafe_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cafe_7, 
                style: style_Cafe_7,
                interactive: true,
                title: '<img src="styles/legend/Cafe_7.png" /> Cafe'
            });
var format_Cafeteria_8 = new ol.format.GeoJSON();
var features_Cafeteria_8 = format_Cafeteria_8.readFeatures(json_Cafeteria_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cafeteria_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cafeteria_8.addFeatures(features_Cafeteria_8);
var lyr_Cafeteria_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cafeteria_8, 
                style: style_Cafeteria_8,
                interactive: true,
                title: '<img src="styles/legend/Cafeteria_8.png" /> Cafeteria'
            });
var format_Container_9 = new ol.format.GeoJSON();
var features_Container_9 = format_Container_9.readFeatures(json_Container_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Container_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Container_9.addFeatures(features_Container_9);
var lyr_Container_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Container_9, 
                style: style_Container_9,
                interactive: true,
                title: '<img src="styles/legend/Container_9.png" /> Container'
            });
var format_Court_10 = new ol.format.GeoJSON();
var features_Court_10 = format_Court_10.readFeatures(json_Court_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Court_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Court_10.addFeatures(features_Court_10);
var lyr_Court_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Court_10, 
                style: style_Court_10,
                interactive: true,
                title: '<img src="styles/legend/Court_10.png" /> Court'
            });
var format_CricketField_11 = new ol.format.GeoJSON();
var features_CricketField_11 = format_CricketField_11.readFeatures(json_CricketField_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CricketField_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CricketField_11.addFeatures(features_CricketField_11);
var lyr_CricketField_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CricketField_11, 
                style: style_CricketField_11,
                interactive: true,
                title: '<img src="styles/legend/CricketField_11.png" /> Cricket Field'
            });
var format_FootballPitch_12 = new ol.format.GeoJSON();
var features_FootballPitch_12 = format_FootballPitch_12.readFeatures(json_FootballPitch_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FootballPitch_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FootballPitch_12.addFeatures(features_FootballPitch_12);
var lyr_FootballPitch_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FootballPitch_12, 
                style: style_FootballPitch_12,
                interactive: true,
                title: '<img src="styles/legend/FootballPitch_12.png" /> Football Pitch'
            });
var format_Ganga_13 = new ol.format.GeoJSON();
var features_Ganga_13 = format_Ganga_13.readFeatures(json_Ganga_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ganga_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ganga_13.addFeatures(features_Ganga_13);
var lyr_Ganga_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ganga_13, 
                style: style_Ganga_13,
                interactive: true,
                title: '<img src="styles/legend/Ganga_13.png" /> Ganga'
            });
var format_Hostel3_14 = new ol.format.GeoJSON();
var features_Hostel3_14 = format_Hostel3_14.readFeatures(json_Hostel3_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hostel3_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hostel3_14.addFeatures(features_Hostel3_14);
var lyr_Hostel3_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hostel3_14, 
                style: style_Hostel3_14,
                interactive: true,
                title: '<img src="styles/legend/Hostel3_14.png" /> Hostel 3'
            });
var format_Krishna_15 = new ol.format.GeoJSON();
var features_Krishna_15 = format_Krishna_15.readFeatures(json_Krishna_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Krishna_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Krishna_15.addFeatures(features_Krishna_15);
var lyr_Krishna_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Krishna_15, 
                style: style_Krishna_15,
                interactive: true,
                title: '<img src="styles/legend/Krishna_15.png" /> Krishna'
            });
var format_NewAcademicBlock_16 = new ol.format.GeoJSON();
var features_NewAcademicBlock_16 = format_NewAcademicBlock_16.readFeatures(json_NewAcademicBlock_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewAcademicBlock_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewAcademicBlock_16.addFeatures(features_NewAcademicBlock_16);
var lyr_NewAcademicBlock_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NewAcademicBlock_16, 
                style: style_NewAcademicBlock_16,
                interactive: true,
                title: '<img src="styles/legend/NewAcademicBlock_16.png" /> New Academic Block'
            });
var format_ResearchBlock_17 = new ol.format.GeoJSON();
var features_ResearchBlock_17 = format_ResearchBlock_17.readFeatures(json_ResearchBlock_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResearchBlock_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResearchBlock_17.addFeatures(features_ResearchBlock_17);
var lyr_ResearchBlock_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ResearchBlock_17, 
                style: style_ResearchBlock_17,
                interactive: true,
                title: '<img src="styles/legend/ResearchBlock_17.png" /> Research Block'
            });
var format_SBlock_18 = new ol.format.GeoJSON();
var features_SBlock_18 = format_SBlock_18.readFeatures(json_SBlock_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBlock_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SBlock_18.addFeatures(features_SBlock_18);
var lyr_SBlock_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SBlock_18, 
                style: style_SBlock_18,
                interactive: true,
                title: '<img src="styles/legend/SBlock_18.png" /> SBlock'
            });
var format_SUPERMARKET_19 = new ol.format.GeoJSON();
var features_SUPERMARKET_19 = format_SUPERMARKET_19.readFeatures(json_SUPERMARKET_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUPERMARKET_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUPERMARKET_19.addFeatures(features_SUPERMARKET_19);
var lyr_SUPERMARKET_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUPERMARKET_19, 
                style: style_SUPERMARKET_19,
                interactive: true,
                title: '<img src="styles/legend/SUPERMARKET_19.png" /> SUPER MARKET'
            });
var format_Tennis_20 = new ol.format.GeoJSON();
var features_Tennis_20 = format_Tennis_20.readFeatures(json_Tennis_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tennis_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tennis_20.addFeatures(features_Tennis_20);
var lyr_Tennis_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tennis_20, 
                style: style_Tennis_20,
                interactive: true,
                title: '<img src="styles/legend/Tennis_20.png" /> Tennis'
            });
var format_Trees_21 = new ol.format.GeoJSON();
var features_Trees_21 = format_Trees_21.readFeatures(json_Trees_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees_21.addFeatures(features_Trees_21);
var lyr_Trees_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trees_21, 
                style: style_Trees_21,
                interactive: true,
                title: '<img src="styles/legend/Trees_21.png" /> Trees'
            });
var format_Xblockvandauditorium_22 = new ol.format.GeoJSON();
var features_Xblockvandauditorium_22 = format_Xblockvandauditorium_22.readFeatures(json_Xblockvandauditorium_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Xblockvandauditorium_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Xblockvandauditorium_22.addFeatures(features_Xblockvandauditorium_22);
var lyr_Xblockvandauditorium_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Xblockvandauditorium_22, 
                style: style_Xblockvandauditorium_22,
                interactive: true,
                title: '<img src="styles/legend/Xblockvandauditorium_22.png" /> Xblockv and auditorium'
            });
var format_Xlabs_23 = new ol.format.GeoJSON();
var features_Xlabs_23 = format_Xlabs_23.readFeatures(json_Xlabs_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Xlabs_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Xlabs_23.addFeatures(features_Xlabs_23);
var lyr_Xlabs_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Xlabs_23, 
                style: style_Xlabs_23,
                interactive: true,
                title: '<img src="styles/legend/Xlabs_23.png" /> Xlabs'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ACnoisyRoom_1.setVisible(true);lyr_Basketballcourt_2.setVisible(true);lyr_BoysHostel_3.setVisible(true);lyr_Building1_4.setVisible(true);lyr_Building2_5.setVisible(true);lyr_Cblock_6.setVisible(true);lyr_Cafe_7.setVisible(true);lyr_Cafeteria_8.setVisible(true);lyr_Container_9.setVisible(true);lyr_Court_10.setVisible(true);lyr_CricketField_11.setVisible(true);lyr_FootballPitch_12.setVisible(true);lyr_Ganga_13.setVisible(true);lyr_Hostel3_14.setVisible(true);lyr_Krishna_15.setVisible(true);lyr_NewAcademicBlock_16.setVisible(true);lyr_ResearchBlock_17.setVisible(true);lyr_SBlock_18.setVisible(true);lyr_SUPERMARKET_19.setVisible(true);lyr_Tennis_20.setVisible(true);lyr_Trees_21.setVisible(true);lyr_Xblockvandauditorium_22.setVisible(true);lyr_Xlabs_23.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ACnoisyRoom_1,lyr_Basketballcourt_2,lyr_BoysHostel_3,lyr_Building1_4,lyr_Building2_5,lyr_Cblock_6,lyr_Cafe_7,lyr_Cafeteria_8,lyr_Container_9,lyr_Court_10,lyr_CricketField_11,lyr_FootballPitch_12,lyr_Ganga_13,lyr_Hostel3_14,lyr_Krishna_15,lyr_NewAcademicBlock_16,lyr_ResearchBlock_17,lyr_SBlock_18,lyr_SUPERMARKET_19,lyr_Tennis_20,lyr_Trees_21,lyr_Xblockvandauditorium_22,lyr_Xlabs_23];
lyr_ACnoisyRoom_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Basketballcourt_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BoysHostel_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Building1_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Building2_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Cblock_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Cafe_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Cafeteria_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Container_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Court_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CricketField_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_FootballPitch_12.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ganga_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Hostel3_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Krishna_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_NewAcademicBlock_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ResearchBlock_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SBlock_18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SUPERMARKET_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Tennis_20.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Trees_21.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Xblockvandauditorium_22.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Xlabs_23.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ACnoisyRoom_1.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Basketballcourt_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_BoysHostel_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Building1_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Building2_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Cblock_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Cafe_7.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Cafeteria_8.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Container_9.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Court_10.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_CricketField_11.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_FootballPitch_12.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Ganga_13.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Hostel3_14.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Krishna_15.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_NewAcademicBlock_16.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ResearchBlock_17.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_SBlock_18.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_SUPERMARKET_19.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Tennis_20.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Trees_21.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Xblockvandauditorium_22.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Xlabs_23.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ACnoisyRoom_1.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Basketballcourt_2.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BoysHostel_3.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Building1_4.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Building2_5.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Cblock_6.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Cafe_7.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Cafeteria_8.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Container_9.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Court_10.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CricketField_11.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_FootballPitch_12.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Ganga_13.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Hostel3_14.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Krishna_15.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_NewAcademicBlock_16.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ResearchBlock_17.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SBlock_18.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SUPERMARKET_19.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Tennis_20.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Trees_21.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Xblockvandauditorium_22.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Xlabs_23.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Xlabs_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});