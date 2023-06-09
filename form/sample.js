window.onload = function() {
    let vm = {
        name: 'root',
        onClick: function(obj) {
            console.log(obj.name);
        },
        sub: {
            name: 'sub',
            onClick: function(obj) {
                console.log(obj.name);
            }
        },
        param: {
            mouseover: function() {
                console.log('over');
            },
            mouseout: function() {
                console.log('out');
            }
        },
        onSubmit: function() {
            console.log('submit!!');
        },
        isTrue: true,
        isFalse: false
    };

    ko.applyBindings(vm);
}