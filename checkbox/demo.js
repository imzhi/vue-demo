const vue = new Vue({
    el: '#app',
    data: {
        selectNames: [],
        list: [
            {name: '中国', val: 1},
            {name: '美国', val: 2},
            {name: '日本', val: 3},
            {name: '韩国', val: 4},
            {name: '意大利', val: 5},
        ],
    },
    computed: {
        selectAll: {
            get: function() {
                return this.selectNames.length === this.list.length;
            },
            set: function(val) {
                let selected = [];
                if (val) {
                    this.list.forEach(function(ele) {
                        selected.push(ele.val);
                    });
                    this.selectNames = selected;
                } else {
                    this.selectNames = [];
                }
            },
        },
    }
});
