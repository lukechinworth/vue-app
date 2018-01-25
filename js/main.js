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
