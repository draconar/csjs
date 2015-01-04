//Command design pattern
// A Joystick object can have configurable buttons and dispatch its order 
// to a Command object

var Command = {
	jump : function(){
		console.log("character has jumped");
	},
	shoot : function(){
		console.log("character has shot");
	},
	grenade: function(){
		console.log("character has throw a grenade");
	}
}

var JoyStick = {	
	button_j : function(action){var a = action || "jump"; this.execute(a);},
	button_k : function(action){var a = action || "shoot"; this.execute(a);},
	button_l : function(action){var a = action || "grenade"; this.execute(a);},
	execute : function(name) {
		return Command[name] && Command[name].apply(Command, [].slice.call(arguments, 1));
	}
}