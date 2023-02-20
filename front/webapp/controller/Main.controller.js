sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     *  @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict"

        return Controller.extend("front.controller.Main",
        {
            onInit: function(){
                // this.getView().setModel(models.createRecipient())

            }
        })
    }
)
