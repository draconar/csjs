//sqrt

var sqrt = function(num) {
	var betterGuess = function(x, g){
		return (g + x/g)/2
	}
	var guess = 1;
	var epsilon = 0.001;
	while(Math.abs(guess - num/guess) > epsilon){
		guess = betterGuess(num, guess);
	}
	return guess;
}