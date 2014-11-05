
document.addEventListener('deviceready', onDeviceReady, false);
   
function onDeviceReady() {
    console.log('starting ajax..');
    $.ajax({
            type: "GET",
            url: "https://sandbox.kenniscafe.net/api/users?token=3CsHnLhqPSdgL7CSmuVBDV424WvjMzUzIeOahE9F&search[keyword]=g",
            beforeSend: function(xhr) { 
               xhr.setRequestHeader("Version","1");
               xhr.setRequestHeader("Accept","application/vnd.winkwaves+json");
           }
    })
    .done(function( html ) {
            console.log(html);
    });
}