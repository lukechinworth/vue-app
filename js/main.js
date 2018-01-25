try {
    var jsTest = document.getElementById('js-test');
    jsTest.innerHTML = 'JS works';

    var $jqueryTest = $('#jquery-test');
    $jqueryTest.html('jQuery works');

    new Vue({
        el: '#vue-test',
        render(h) {
            return h('div', [
                h('h3', 'Vue Works'),
                h('button', 'Button 1'),
                h('button', 'Button 2'),
                h('button', {
                    style: {
                        display: 'block'
                    }
                }, 'Button 3')
            ]);
        }
    });

    throw new Error('Catch thrown Error test');
} catch(e) {
    var $error = $('#error');
    $error.html(e.message);
}
