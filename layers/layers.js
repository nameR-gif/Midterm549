var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PK_DEM_Map_Vector4_3 = new ol.format.GeoJSON();
var features_PK_DEM_Map_Vector4_3 = format_PK_DEM_Map_Vector4_3.readFeatures(json_PK_DEM_Map_Vector4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PK_DEM_Map_Vector4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PK_DEM_Map_Vector4_3.addFeatures(features_PK_DEM_Map_Vector4_3);
var lyr_PK_DEM_Map_Vector4_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PK_DEM_Map_Vector4_3, 
                style: style_PK_DEM_Map_Vector4_3,
                popuplayertitle: 'PK_DEM_Map_Vector4',
                interactive: true,
    title: 'PK_DEM_Map_Vector4<br />\
    <img src="styles/legend/PK_DEM_Map_Vector4_3_0.png" /> -52 - 0<br />\
    <img src="styles/legend/PK_DEM_Map_Vector4_3_1.png" /> 0 - 50<br />\
    <img src="styles/legend/PK_DEM_Map_Vector4_3_2.png" /> 50 - 100<br />\
    <img src="styles/legend/PK_DEM_Map_Vector4_3_3.png" /> 100 - 150<br />\
    <img src="styles/legend/PK_DEM_Map_Vector4_3_4.png" /> 150 - 200<br />\
    <img src="styles/legend/PK_DEM_Map_Vector4_3_5.png" /> 200 - 250<br />\
    <img src="styles/legend/PK_DEM_Map_Vector4_3_6.png" /> 250 - 300<br />\
    <img src="styles/legend/PK_DEM_Map_Vector4_3_7.png" /> 300 - 350<br />\
    <img src="styles/legend/PK_DEM_Map_Vector4_3_8.png" /> 350 - 400<br />\
    <img src="styles/legend/PK_DEM_Map_Vector4_3_9.png" /> 400 - 450<br />\
    <img src="styles/legend/PK_DEM_Map_Vector4_3_10.png" /> 450 - 513<br />' });
var format_PK_Slope_Vector_Dissolve_4 = new ol.format.GeoJSON();
var features_PK_Slope_Vector_Dissolve_4 = format_PK_Slope_Vector_Dissolve_4.readFeatures(json_PK_Slope_Vector_Dissolve_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PK_Slope_Vector_Dissolve_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PK_Slope_Vector_Dissolve_4.addFeatures(features_PK_Slope_Vector_Dissolve_4);
var lyr_PK_Slope_Vector_Dissolve_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PK_Slope_Vector_Dissolve_4, 
                style: style_PK_Slope_Vector_Dissolve_4,
                popuplayertitle: 'PK_Slope_Vector_Dissolve',
                interactive: true,
    title: 'PK_Slope_Vector_Dissolve<br />\
    <img src="styles/legend/PK_Slope_Vector_Dissolve_4_0.png" /> 0 - 10<br />\
    <img src="styles/legend/PK_Slope_Vector_Dissolve_4_1.png" /> 10 - 20<br />\
    <img src="styles/legend/PK_Slope_Vector_Dissolve_4_2.png" /> 20 - 30<br />\
    <img src="styles/legend/PK_Slope_Vector_Dissolve_4_3.png" /> 30 - 40<br />\
    <img src="styles/legend/PK_Slope_Vector_Dissolve_4_4.png" /> 40 - 50<br />\
    <img src="styles/legend/PK_Slope_Vector_Dissolve_4_5.png" /> 50 - 67<br />' });
var format_LU_Dissolve2_5 = new ol.format.GeoJSON();
var features_LU_Dissolve2_5 = format_LU_Dissolve2_5.readFeatures(json_LU_Dissolve2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LU_Dissolve2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LU_Dissolve2_5.addFeatures(features_LU_Dissolve2_5);
var lyr_LU_Dissolve2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LU_Dissolve2_5, 
                style: style_LU_Dissolve2_5,
                popuplayertitle: 'LU_Dissolve2',
                interactive: true,
    title: 'LU_Dissolve2<br />\
    <img src="styles/legend/LU_Dissolve2_5_0.png" /> พื้นที่เกษตรกรรม<br />\
    <img src="styles/legend/LU_Dissolve2_5_1.png" /> พื้นที่น้ำ<br />\
    <img src="styles/legend/LU_Dissolve2_5_2.png" /> พื้นที่เบ็ดเตล็ด<br />\
    <img src="styles/legend/LU_Dissolve2_5_3.png" /> พื้นที่ป่าไม้<br />\
    <img src="styles/legend/LU_Dissolve2_5_4.png" /> สิ่งปลูกสร้าง<br />' });
var format_Amphoe_6 = new ol.format.GeoJSON();
var features_Amphoe_6 = format_Amphoe_6.readFeatures(json_Amphoe_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amphoe_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amphoe_6.addFeatures(features_Amphoe_6);
var lyr_Amphoe_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Amphoe_6, 
                style: style_Amphoe_6,
                popuplayertitle: 'Amphoe',
                interactive: true,
                title: '<img src="styles/legend/Amphoe_6.png" /> Amphoe'
            });

lyr_GoogleTerrain_0.setVisible(false);lyr_GoogleRoad_1.setVisible(false);lyr_GoogleHybrid_2.setVisible(true);lyr_PK_DEM_Map_Vector4_3.setVisible(false);lyr_PK_Slope_Vector_Dissolve_4.setVisible(false);lyr_LU_Dissolve2_5.setVisible(true);lyr_Amphoe_6.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleRoad_1,lyr_GoogleHybrid_2,lyr_PK_DEM_Map_Vector4_3,lyr_PK_Slope_Vector_Dissolve_4,lyr_LU_Dissolve2_5,lyr_Amphoe_6];
lyr_PK_DEM_Map_Vector4_3.set('fieldAliases', {'DN': 'DN', });
lyr_PK_Slope_Vector_Dissolve_4.set('fieldAliases', {'DN': 'DN', });
lyr_LU_Dissolve2_5.set('fieldAliases', {'LUL1_CODE': 'LUL1_CODE', 'LU_type': 'LU_type', });
lyr_Amphoe_6.set('fieldAliases', {'AD_AMPHOE': 'AD_AMPHOE', 'AMP_CODE': 'AMP_CODE', 'AMPHOE_T': 'AMPHOE_T', 'AMPHOE_E': 'AMPHOE_E', 'Sq_KM_D': 'Sq_KM_D', 'Sq_KM_F': 'Sq_KM_F', 'Rai': 'Rai', 'provi': 'provi', });
lyr_PK_DEM_Map_Vector4_3.set('fieldImages', {'DN': 'TextEdit', });
lyr_PK_Slope_Vector_Dissolve_4.set('fieldImages', {'DN': 'Range', });
lyr_LU_Dissolve2_5.set('fieldImages', {'LUL1_CODE': 'TextEdit', 'LU_type': 'TextEdit', });
lyr_Amphoe_6.set('fieldImages', {'AD_AMPHOE': 'TextEdit', 'AMP_CODE': 'TextEdit', 'AMPHOE_T': 'TextEdit', 'AMPHOE_E': 'TextEdit', 'Sq_KM_D': 'TextEdit', 'Sq_KM_F': 'TextEdit', 'Rai': 'TextEdit', 'provi': 'TextEdit', });
lyr_PK_DEM_Map_Vector4_3.set('fieldLabels', {'DN': 'inline label - visible with data', });
lyr_PK_Slope_Vector_Dissolve_4.set('fieldLabels', {'DN': 'inline label - visible with data', });
lyr_LU_Dissolve2_5.set('fieldLabels', {'LUL1_CODE': 'no label', 'LU_type': 'inline label - visible with data', });
lyr_Amphoe_6.set('fieldLabels', {'AD_AMPHOE': 'inline label - visible with data', 'AMP_CODE': 'no label', 'AMPHOE_T': 'inline label - visible with data', 'AMPHOE_E': 'inline label - visible with data', 'Sq_KM_D': 'no label', 'Sq_KM_F': 'no label', 'Rai': 'no label', 'provi': 'no label', });
lyr_Amphoe_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});