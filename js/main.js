// js test
try {
    document.getElementById('js-test').innerHTML = 'Yep!';
} catch(e) {
    appendError(e);
}

// jquery test
try {
    $('#jquery-test').html('Yep!');
} catch(e) {
    appendError(e);
}

// vue test
try {
    new Vue({
        el: '#vue-test',
        render: function(h) {
            return h('p', 'Yep!')
        }
    });
} catch(e) {
    appendError(e);
}

// drm test
try {
    var LA_URL = 'https://cwip-shaka-proxy.appspot.com/no_auth';
    var DASH_MANIFEST = 'https://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel-dash-widevine.ism/.mpd';


    shaka.polyfill.installAll();

    if (!shaka.Player.isBrowserSupported()) {
        throw new Error('shaka unable to polyfill the browser');
    }

    var video = document.getElementById('drm');
    var player = new shaka.Player(video);

    player.addEventListener('error', function(event) {
        appendError(event.detail);
    });

    // set widevine drm
    player.configure({
        drm: {
            servers: {
                'com.widevine.alpha': LA_URL
            }
        }
    });

    player.load(DASH_MANIFEST)
        .then(function() {
            console.log('The video has now been loaded!');
        })
} catch(e) {
    appendError(e);
}
