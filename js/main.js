new Vue({
    el: '#app',
    render(h) {
        return h('div', [
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
