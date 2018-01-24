try {
    new Vue({
        el: '#app',
        render(h) {
            return h('div', [
                h('h1', 'Vue app'),
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
    var p = document.createElement('p');
    p.innerText = e.message;

    document.body.appendChild(p)
}
