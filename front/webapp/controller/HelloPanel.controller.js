sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /** 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     *  @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast) {
        "use strict"

        return Controller.extend("front.controller.HelloPanel", {

            onInit: function(){

            },
            onShowHello: function(){
                
                var oBundle = this.getView().getModel("i18n").getResourceBundle()
                var sRecipient = this.getView().getModel().getProperty("/recipient/name")
                var sMsg = oBundle.getText("helloMsg", [sRecipient])

                MessageToast.show(sMsg)
            },

            onOpenDialog: function(){
                this.getOwnerComponent().openHelloDialog()
            }
            // onOpenDialog : function(){

            //     const oView = this.getView()

            //     if(!this.byId("helloDialog")){
            //         Fragment.load({
            //             id:   oView.getId(),
            //             name: "invoices.view.HelloDialog",
            //             controller:
            //         }).then(function(oDialog){
            //             oView.addDependent(oDialog)
            //             oDialog.open() 
            //         })
            //     }else{
            //         this.byId("helloDialog").open()
            //     }

            // },
            // onCloseDialog : function(){
                
            //     this.byId("helloDialog").close()

            // }

        })

    }
)