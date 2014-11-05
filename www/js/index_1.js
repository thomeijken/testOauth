
OAuthHelper = {
    ref: null,
    startOAuth: function() {
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
};


document.addEventListener('deviceready', onDeviceReady, false);
   
function onDeviceReady() {
    console.log('DEVICE READY!');
    $('#btn').click(function() {
        OAuthHelper.startOAuth();
    });
}