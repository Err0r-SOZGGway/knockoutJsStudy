window.onload = function() {
    let vm = {
        array: ['hoge', 'piyo'],
        myRadioValue: 'b',
        numArray: [{
            id: 1,
            name: 'HOGE'
        }, {
            id: 2,
            name: 'FUGA'
        }, {
            id: 3,
            name: 'PIYO'
        }],
        toId: function(item) {
            return 'id_' + item.id;
        },
        toLabel: function(item) {
            return 'Label : ' + item.name; 
        },
        strArray: ['すし', 'ラーメン','焼肉'],
        selectedArray: ['すし', '焼肉']
    };

    ko.applyBindings(vm);
}