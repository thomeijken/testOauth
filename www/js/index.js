
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
    // Application Constructor
var ref;
function initialize() {
        document.addEventListener('deviceready', onDeviceReady, false);
}
   
function onDeviceReady() {
    console.log('DEVICE READY!');
    console.log('CORDOVA VERSION: ' + window.device.cordova);
    $('#btn').click(onButtonClick);

}
    
function onButtonClick() {
    console.log('button clicked');
    ref= window.open('https://sandbox.kenniscafe.net/oauth/authorize?response_type=token&client_id=dSHjy1vvmcBnPuUU93Sqj3Qe5ujazflk27vBudeN', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function(event) {
        console.log('page loaded: '+event.url);
        if(event.url.search("access_token")===-1) {
            console.log('no token found');
        } else {
            console.log('access token found!');
            var url = event.url;
            ref.close();
            $('#token').text(getUrlParameter('access_token',url));
        }

    });
}
