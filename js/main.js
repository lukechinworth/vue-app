var errors = document.getElementById('errors');

var appendError = function(e) {
    var li = document.createElement('li');
    li.innerHTML = e.message;

    errors.appendChild(li);
};

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
