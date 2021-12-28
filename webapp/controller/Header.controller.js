sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("vcd94xt10z.fiorieco.fiorieco.controller.Header", {
            onInit: function () {
                /*
                this.oOwnerComponent = this.getOwnerComponent();
                this.oRouter = this.oOwnerComponent.getRouter();
                this.oRouter.attachRouteMatched(this.onRouteMatched, this);
                */
            },
            onProductDetail: function(){
                var view = sap.ui.xmlview({viewName : "vcd94xt10z.fiorieco.fiorieco.view.ProductDetail"});
                view.placeAt("content");
            }
        });
    });
