function getUrlParameter(sParam, url)
{ 
    var sPageURLParts = url.split('#');
	sPageURL = sPageURLParts[1];
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}    


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    ref:null,
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        console.log('CORDOVA VERSION: ' + window.device.cordova);
        
        var _this = this;
        var callBack = _this.iabLoadStart;
        $('#btn').click(function(){
            _this.ref= window.open('sandbox.kenniscafe.net/oauth/authorize?response_type=token&client_id=dSHjy1vvmcBnPuUU93Sqj3Qe5ujazflk27vBudeN', '_blank', 'location=yes');
            _this.ref.addEventListener('loadstart', callBack);
          });
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    },
    
    iabLoadStart: function(event) {
        console.log('page loaded: '+event.url)
        if(event.url.search("access_token")===-1) {
            console.log('access token found!' + getUrlParameter('access_token',event.url));
            $('#token').text(getUrlParameter('access_token',event.url));
            this.ref.close();
        } else {
            console.log('No access token found');
        }
    }
};
