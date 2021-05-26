var window = new Window("palette","Boobs", undefined); //type of window, Window name, window size - undefined autosize
var startButton = window.add("button", undefined, "Run!!!"); //type, size, name
var fillButt = window.add("button", undefined, "Gen Fill Link (1)");
var testButt = window.add("button", undefined, "[TEST]");
//var cum = app.project.activeItem;

window.show();
startButton.onClick = function(){       
    app.beginUndoGroup("Link Slider to Layers Scale");
    var comp = app.project.activeItem; //get current item open in project in program (AE)
    var layerz = comp.selectedLayers; //get layers selected in comp 
    for(var i=0; i < layerz.length; i++){
        //alert("ttt");
        layerz[i].name; //get layer names incremented
        layerz[i].effects.addProperty("ADBE Slider Control"); //get layer effects, add effect
        layerz[i].property("Scale").value; //property value, .expression get expression
        layerz[i].effect(1).property(1).setValue(100); //refers to effect in layer by sequential, and property parameter sequential count
        //layerz[i].property("Scale").expression = 'adds whatever expression';
    }
}
//================
fillButt.onClick = function(){
    app.beginUndoGroup("Boobs");
    var layerz = comp.selectedLayers;
    for(var i=0; i < layerz.length; i++){
        layerz[i].Effects.addProperty("ADBE Fill");
        layerz[i].Effects.property("ADBE Fill").name = "/ Child Fill";
        layerz[i].effect("/ Child Fill").property("Color").expression = 
        'thisComp.layer("CTRL Color").effect("Fill Color")("Color")';
    }
    makNull();
    function makNull(){
        controllerLayer = app.project.activeItem.layers.addNull(app.project.activeItem.duration);
        controllerLayer.Effects.addProperty("ADBE Color Control");
        controllerLayer.Effects.property("ADBE Color Control").name = "Fill Color";
        //app.project.layerz[i].layer(index).propertySpec
        controllerLayer.name = "CTRL Color";
        controllerLayer.label = 13;
    }
    app.endUndoGroup();
}

//================
testButt.onClick = function(){
    
}
