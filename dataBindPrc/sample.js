window.onload = function() {
    let viewModel = {
        message: 'Hello Knockout.js!!',
        message2: ko.observable('Hoge')
    };
    
    ko.applyBindings(viewModel);
    
    document.getElementById('button').onclick = function(){
        alert('viewModel.message=' + viewModel.message2());
    };
};
