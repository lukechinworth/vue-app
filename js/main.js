try {
    var jsTest = document.getElementById('js-test');
    jsTest.innerHTML = 'JS works';

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
} catch(e) {
    var error = document.getElementById('error');
    error.innerHTML = e.message;
}
