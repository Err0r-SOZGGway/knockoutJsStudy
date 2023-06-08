window.onload = function() {
    let vm = {
        array: ko.observableArray([
            'hoge',
            'fuga', 
            'piyo'
        ])
    };

    ko.applyBindings(vm);

    document.getElementById('add').onclick = function() {
        vm.array.push('add');
    };

    document.getElementById('remove').onclick = function() {
        vm.array.pop();
    }
}