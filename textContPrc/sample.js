window.onload = function() {
    const self = this;

    let vm = function() {
        self.isTrue = true;
        self.isFalse = false;
        self.message = '<b>binding</b><br>';
        self.cssClass = {
            error: true,
            italic: true
        };
        self.param = {
            href: 'http://www.google.co.jp',
            title: 'Google'
        }
    };

    let viewModel = new vm();
    ko.applyBindings(viewModel);
}