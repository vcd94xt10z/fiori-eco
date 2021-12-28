sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("vcd94xt10z.fiorieco.fiorieco.controller.ProductDetail", {
            onInit: function () {
            },
            onNavBack: function(){
                //window.history.go(-1);
                var view = sap.ui.xmlview({viewName : "vcd94xt10z.fiorieco.fiorieco.view.Home"});
                view.placeAt("content");
            }
        });
    });
