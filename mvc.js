//Scaffold from a tiny MVC structure in JS
var model = {
    set : function(data) {
        this.value = data;
    },
    get: function(data){
        return this.value;
    },
    init: function(){
        //retrieve data from source
        console.log("data retrieval successful");
    }
}

var controller = {
    set: function(data){
        model.set(data);
        view.render();        
    },
    get: function(){
        var d = model.get();
        //no need to render; the view will be responsible for this
        //just return the info
        return d;        
    },
    init: function(){
        model.init();
        view.init();
    }
}

var view = {
    render: function(){
        var d = controller.get();
        dom = this.DOM;        
        //loop thru DOM, insert data as needed
        //foreach()...
        console.log("rendering...");
    },
    init: function(){
        this.DOM = $;        
        var d = controller.get();
        //set bindings w/data + DOM objects
        this.render();
    }

}