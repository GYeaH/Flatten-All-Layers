var groups = app.activeDocument.layerSets;

(function main(){
        for(var i = 0; i < groups.length; i++){
                //get layer list in each group
                var currentGroup = groups[i];
                var layerList = currentGroup.layers;
                //assign layer list to target list
                var targetLayerList = layerList;
                
                for(var j = 0; j < targetLayerList.length; j++)
                    flatLayer(currentGroup, targetLayerList[j]);
            }
    
    
})();

/*
@param group the group layer worked in
@param layer the layer would like to be flatten
*/
function flatLayer(group, layer){
    //turn visibility on before everything start
    layer.visible = true;
    
    //create empty layer under target layer
    var emptyLayer = group.artLayers.add();
    emptyLayer.move(layer, ElementPlacement.PLACEAFTER);
    //assign the name for later use
    var resultName = layer.name;
    //merge down the target layer
    var resultLayer = layer.merge();
    //assign the name back
    resultLayer.name = resultName;
    
    return resultLayer;
    }