//Hashtable with fixed length; hashing strings to obtain keys

function HashTable() {
	this.table = new Array(137);
	this.put = function(word) {
		var pos = this.hashing(word);
		this.table[pos] = word;
	};
	this.get = function(word){		
		var pos = this.hashing(word);
		if (this.table[pos] != undefined) {
			return pos;
		} else {
			return undefined;
		}		
	};
	this.hashing = function(word){
		//use of Kroner's constant
		var kconst = 37;
		var total = 0;
		for (var i = 0; i < word.length; i++){
			total += kconst*total + word.charCodeAt(i);
		}
		return total % this.table.length;
	}


	this.distro = function(){
		for (var i = 0; i < this.table.length; i++) {
			if (this.table[i] != undefined){
				console.log(i + " -> " + this.table[i]);
			}
		}
	};
}