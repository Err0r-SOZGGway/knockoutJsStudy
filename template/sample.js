window.onload = function() {
    let vm = {
        myModel: {
            message: 'Hello Template!!'
        }
    };

    ko.applyBindings(vm);
}