sap.ui.define([
    "./BaseController",
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";
         var this_repoId;
         var this_objId;
         var this_vs;
        return BaseController.extend("dms.controller.View2", {
            onInit: function () {
                debugger;
                this.getRouter().getRoute("DocView").attachPatternMatched(this._onObjectMatched, this);     
      /** debugger;
     // OPTIONAL: pass the same settings here, if not added in 'manifest.json' as per previous steps
     this.getView().byId("sdi-container").setSettings({
        "repositoryId": '145f82b9-2bd6-4975-b163-754a93ab9901',
        "objectId": 'ecf00390004ee75d649ec126',
        "forceLoad": false
    }); */         
            },

            _onObjectMatched : function (oEvent) {
               debugger;
               this_repoId =  oEvent.getParameter("arguments").repoId;
               this_objId =  oEvent.getParameter("arguments").objId;
               if  ( oEvent.getParameter("arguments").vs == "undefined")
               {
               }else{
                this_vs = oEvent.getParameter("arguments").vs;
               } 
            },

            onComponentCreated: function(oEvent) {
                debugger;
                this._oDocumentTable = oEvent.getParameter("component");
                // OPTIONAL: set a folder as home folder
                //this._oDocumentTable.setHomeFolder('ecf00390004ee75d649ec126');
                // OPTIONAL: request a navigation to a repository & folder during runtime
                if (this_vs == null)
                {
                this._oDocumentTable.requestNavigationAndOpen(this_repoId, this_objId);
                }
                else{
                 this._oDocumentTable.requestNavigationAndOpen(this_repoId, this_objId,this_vs);
                }
              }       
        });
    });
