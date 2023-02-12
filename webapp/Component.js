sap.ui.define([
    "sap/ui/core/UIComponent",
    "invoices/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
],
    /**
     *  @param {typeof sap.ui.core.UIComponent} UIComponent
     *  @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 
     */
    function (UIComponent, Models, ResourceModel, HelloDialog) {

        return UIComponent.extend("invoices.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                //Call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments)
                this.setModel(Models.createRecipient())

                //Set i18n
                var i18nModel = new ResourceModel({
                    bundleName: "invoices.i18n.i18n"
                })

                this.setModel(i18nModel, "i18n")

                this._helloDialog = new HelloDialog(this.getRootControl())

            },

            exit: function (){
                this._helloDialog.destroy()
                delete this._helloDialog
            },

            openHelloDialog: function(){
                this._helloDialog.open()
            }

        })
    }
)