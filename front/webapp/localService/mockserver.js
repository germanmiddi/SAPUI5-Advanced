sap.ui.define([
    "sap/ui/core/util/mockserver",
    "sap/ui/model/json/JSONModel",
    "sap/base/util/UrlParameters",
    "sap/base/Log"

],
/**
 * 
 * 
 */
    function(mockserver,JSONModel,UrlParameters,Log ){
        "use strict"

        var oMockServer
            _sAppPath = "front/"
            _sJsonFilePath = _sAppPath + "localService/mockData"

        var oMockServerInterface = {
            init : function(oOptionParameter){
                var oOptions = oOptionParameter || {}

                return new Promise( function(fnResolve, fnReject) {
                    var sManifestUrl = sap.ui.require.toUrl(_sAppPath+"manifest.json")
                    
                    var oManifestModel = new JSONModel(sManifestUrl)
                    oManifestModel.attachRequestCompleted(function(){
                        
                        var oUriParameters = new oUriParameters(windows.location.href)
                        var sJsonFileUrl = sap.ui.require.toUrl(_sJsonFilePath)

                        var oMainDataSource = oManifestModel.getProperty("/sap.app/dataSources/mainService")
                        var sMetadataUrl = sap.ui.require.toUrl(_sAppPath+oMainDataSource.settings.localUri)

                        var sMockServerUrl = oMainDataSource.uri && new URI(oMainDataSource.uri).absolute(sap.ui.require.toUrl(_sAppPath)).toString()

                        if(!oMockServer){
                            oMockServer = new MockServer(
                                {rootUri: sMockServerUrl}
                            )
                        }else{
                            oMockServer.stop()
                        }

                        MockServer.config({
                            autoRespond : true,
                            autoRespondAfter : (oOption.delay || oUriParameters.get("serverDelay") || 500 )
                        })

                        oMockServer.simulate(sMetadataUrl,{
                            sMockdataBaseUrl : sJsonFileUrl,
                            bGenerateMissingMockData : true
                        })
                    })


                } )
            }
        }

        return oMockServerInterface

    }
)