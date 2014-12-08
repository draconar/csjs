var Singleton = (function() {
  var instance;

  var init = function() {
    //private vars goes here
    var p1 = "private var p1";
    //private methods goes here
    var p2 = function() {
      console.log("private method p2")
    }
    return {
      getP1: function() {
        return p1;
      },
      getP2: p2
    }

  }
  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }
})();
