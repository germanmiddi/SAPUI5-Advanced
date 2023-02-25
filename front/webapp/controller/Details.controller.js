sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
    /**
     *  @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.core.routing.History} History
     */
    function (Controller,History) {
        "use strict"

        return Controller.extend("front.controller.Details",
        {
            _onObjectMatch: function(oEvent){
                this.byId("rating").reset()
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                    model: "northwind"
                })
            },
            onInit: function(){
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this)
                oRouter.getRoute("Details").attachPatternMatched(this._onObjectMatch, this) 

            },
            onNavBack : function(){

                const oHistory = History.getInstance()
                const sPreviousHash = oHistory.getPreviousHash()

                if(sPreviousHash !== undefined){
                    window.history.go(-1)
                }else{
                    const oRouter = sap.ui.core.UIComponent.getRouterFor(this)
                    oRouter.navTo("RouteMain", {}, true)
                }
            },
            onRatingChange : function(oEvent){
                const fValue = oEvent.getParameter("value")
                const oResourceBundle = this.getView().getModel("i18n").getResourceBundle()
                const sMsg = oResourceBundle.getText("ratingConfirmation", [fValue])
                
                sap.m.MessageToast.show(sMsg)

            }
        })
    }
)
