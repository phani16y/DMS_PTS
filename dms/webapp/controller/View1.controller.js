sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("dms.controller.View1", {
            onInit: function () {
      /** debugger;
     // OPTIONAL: pass the same settings here, if not added in 'manifest.json' as per previous steps
     this.getView().byId("sdi-container").setSettings({
        "repositoryId": '145f82b9-2bd6-4975-b163-754a93ab9901',
        "objectId": 'ecf00390004ee75d649ec126',
        "forceLoad": false
    }); */         
            },

      /**  onComponentCreated: function(oEvent) {
                this._oDocumentTable = oEvent.getParameter("component");
                // OPTIONAL: set a folder as home folder
                this._oDocumentTable.setHomeFolder('ecf00390004ee75d649ec126');
                // OPTIONAL: request a navigation to a repository & folder during runtime
                this._oDocumentTable.requestNavigationAndOpen('145f82b9-2bd6-4975-b163-754a93ab9901', 'ecf00390004ee75d649ec126');
              }   */     
        });
    });
