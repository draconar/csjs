function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.marked = [];
	this.adj = [];

	for(var i = 0; i < this.vertices;  i++) {
		this.adj[i] = [];
		this.adj[i].push("");
	}

	for(var i = 0; i < this.vertices;  i++) {
		this.marked[i] = false;		
	}

}

Graph.prototype.addEdge = function(v, w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

Graph.prototype.len = function(){
	return this.edges;
}

Graph.prototype.print = function() {
	for (var i = 0; i < this.vertices; i ++){
		var vert_label = i + " -> ";		
		for(var j = 0; j < this.adj[i].length; j++){
			vert_label += " " + this.adj[i][j];
		}
		console.log(vert_label);
	}
}

Graph.prototype.dfs = function(v) {
	this.marked[v] = true;
	if(this.adj[v] != undefined){
		console.log(v + " is visited");
		for(var w in this.adj[v]){
			//if it was not visited
			if (!this.marked[this.adj[v][w]]){
				this.dfs(this.adj[v][w]);
			}			
		}
	}
}

Graph.prototype.bfs = function(s) {
	var queue = [];
	this.marked[s] = true;
	queue.push(s);
	while(queue.length > 0){
		var v = queue.shift();
		if (v != undefined) {
			console.log ("visited vertex: " + v);
		}
		for( var w = 1; w< this.adj[v].length; w++){
			if(!this.marked[this.adj[v][w]]){
				this.marked[this.adj[v][w]] = true;
				queue.push(this.adj[v][w]);
				
			}
		}
	}
}

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);

