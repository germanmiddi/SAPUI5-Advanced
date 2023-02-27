sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("front.controller.App", {
        onInit() {
          this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())

        }
      });
    }
  );
  