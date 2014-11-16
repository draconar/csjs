//Stack::FILO data structure
function Stack() {
    this.data = [];
    this.len = 0;
}

Stack.prototype.push = function(val){
    this.len++;
    this.data.push(val);
}

Stack.prototype.pop = function(){
    this.len--;
    this.data.pop();
}


Stack.prototype.peek = function(){
    return this.data[this.data.length - 1];
}

Stack.prototype.len = function() {
    return this.len;
}

//Queue::FIFO data structure

function Queue(){
    this.data = [];
    this.len = 0;
}

Queue.prototype.enqueue = function(val){
    this.len++;
    this.data.push(val);
}

Queue.prototype.dequeue = function(){
    this.len--;
    this.data.shift()
}

Queue.prototype.peek = function(){
    return this.data[0];
}

Queue.prototype.len = function() {
    return this.len;
}
