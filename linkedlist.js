function Node(val) {
    this.val = val;
    this.next = null;
};

function LL() {
    this.head = null;
    this.len = 0;
}

LL.prototype.add = function(val) {
    var newNode = new Node(val);
    //check if head is empty
    var curNode;

    if(this.head === null) {
        this.head = newNode;
    } else {
        curNode = this.head;
        while(curNode.next) {
            curNode = curNode.next;
        }
        curNode.next = newNode;
    }
    this.len++;
}

LL.prototype.item = function (pos) {
    //@TODO: pre-conditions for empty list, bogus position
    var cur = this.head;
    for (var i = 0; i < pos; i++) {
        cur = cur.next;
    }
    return cur;
}

LL.prototype.revert = function(){
    var lastNode = this.head;
    var curNode = this.head.next;    
    var nextNode = curNode;

    this.head.next = null;

   while(nextNode.next) {           
        nextNode = curNode.next;                     
        curNode.next = lastNode;
        lastNode = curNode;        
   }
    nextNode.next = curNode;
    this.head = nextNode;
}

/*
var l = new LL();
l.add(1);
l.add(2);
l.add(3);
l.revert();
*/