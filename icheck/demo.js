const vue = new Vue({
    el: '#app',
    data: {
        // selectAll: false,
        selectNames: [2,3,4],
        list: [
            {name: '中国', val: 1},
            {name: '美国', val: 2},
            {name: '日本', val: 3},
            {name: '韩国', val: 4},
            {name: '意大利', val: 5},
        ],
    },
    // watch: {
    //     selectAll: function() {
    //         console.log(arguments);
    //     },
    // },
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
    },
    mounted: function() {
        const that = this;
        $('.icheck').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        // }).on('ifChecked ifUnchecked', function() {
        //     $(this)[0].dispatchEvent(new Event('change'));
        // });
        }).on('ifChecked', function() {
            that.selectNames.push($(this).val());
        }).on('ifUnchecked', function() {
            let selected = that.selectNames;
            selected.splice(selected.indexOf($(this).val(), 1));
        });
    },
});
