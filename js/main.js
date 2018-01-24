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
    var p1 = document.createElement('h2');
    p1.innerText = 'Error';

    var p2 = document.createElement('p');
    p2.innerText = e.message;

    document.body.appendChild(p1);
    document.body.appendChild(p2);
}
