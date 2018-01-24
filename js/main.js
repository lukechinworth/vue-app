try {
    new Vue({
        el: '#app',
        render(h) {
            return h('div', [
                h('h2', 'Vue app'),
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
    var div = document.getElementById('error');
    div.innerHTML += e.message;
}
