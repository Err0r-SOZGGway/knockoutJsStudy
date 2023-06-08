window.onload = function() {
    let vm = function() {
        this.hoge = ko.observable('Hoge');
        this.fuga = ko.observable('Fuga');

        this.result = ko.computed(function() {
            return this.hoge() + this.fuga();
        }, this);
    };

    let viewModel = new vm();
    ko.applyBindings(viewModel); 
}