Vue.component('icheck', {
    template: '#vue-icheck',
    model: {
        prop: 'checked',
        event: 'change',
    },
    props: ['checked'],
    data: function() {
        return {
        };
    },
    mounted: function() {
        const that = this;

        $(that.$el).iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        }).on('ifUnchecked', function(event) {
            // console.log('ifChecked', $(event.target).prop('checked'), that.checked);
            that.checked = $(event.target).prop('checked');
            // that.$emit('apply', event.target.value);
        }).on('ifChecked', function(event) {
            // console.log('ifUnchecked', $(event.target).prop('checked'), that.checked);
            that.checked = $(event.target).prop('checked');
            // that.$emit('apply', event.target.value);
        });
    },
    watch: {
        checked: function(val) {
            // console.log(val);
            $(this.$el).iCheck(val ? 'check' : 'uncheck');
        },
    },
});

Vue.component('icheck-multi', {
    template: '#vue-icheck-multi',
    model: {
        prop: 'checked',
        event: 'change',
    },
    props: ['checked'],
    data: function() {
        return {
            thisval: [],
        };
    },
    mounted: function() {
        const that = this;

        $(that.$el).iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        }).on('ifUnchecked', function(event) {
            console.log('ifChecked', $(event.target).prop('checked'), that.checked);
            // let checked = that.checked;
            // checked.splice(checked.indexOf(event.target.value), 1);
            // that.checked = checked;
        }).on('ifChecked', function(event) {
            console.log('ifUnchecked', $(event.target).prop('checked'), that.checked);
            // that.checked.push(event.target.value);
        });
    },
    watch: {
        checked: function(val) {
            console.log(val);
            // const value = $(this.$el).val();
            // $(this.$el).iCheck('' ? 'check' : 'uncheck');
        },
    },
});

const vue = new Vue({
    el: '#app',
    data: {
        selectAll: false,
        selectNames: [],
        list: [
            {name: '中国', val: 1},
            {name: '美国', val: 2},
            {name: '日本', val: 3},
            {name: '韩国', val: 4},
            {name: '意大利', val: 5},
        ],
    },
    methods: {
    },
    // computed: {
    //     selectAll: {
    //         get: function() {
    //             return this.selectNames.length === this.list.length;
    //         },
    //         set: function(val) {
    //             let selected = [];
    //             if (val) {
    //                 this.list.forEach(function(ele) {
    //                     selected.push(ele.val);
    //                 });
    //                 this.selectNames = selected;
    //             } else {
    //                 this.selectNames = [];
    //             }
    //         },
    //     },
    // },
});
