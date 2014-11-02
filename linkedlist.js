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