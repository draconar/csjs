function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function BST(){
    this.head = null;
}

BST.prototype.add = function(val) {
    var parent = this.head;
    var current = parent;
    var n = new Node(val, null, null);

    if(parent === null) {
        this.head = n;
        return;
    }
    while(true){
        if(n.val < current.val) {
            if(current.left === null){
                current.left = n;
                break;
            } else {
                current = current.left;
            }
        } else if (n.val > current.val) {            
            if(current.right === null){
                current.right = n;
                break;
            } else {
                current = current.right;
            }
        }
    }    
}

BST.prototype.remove = function(val) {
    var head = this.head;
    function removeNode(node, val){
        if(node === null){
            return null;
        }
        if(node.val === val){
            //check if node has no child
            if(node.left === null && node.right === null) {
                return null;
            }
            //check if node has 1 child
            if(val > node.val) {
                node.right = removeNode(node.right, val);                
                return node;
            } else if(val < node.val) {
                node.left = removeNode(node.left, val);                
                return node;
            }
            //check if node has 2 children
            //@TODO

        } else {
            if(val > node.val) {
                node.right = removeNode(node.right, val);                
                return node;
            } else if(val < node.val) {
                node.left = removeNode(node.left, val);                
                return node;
            }
        }
            
    }
    removeNode(head, val);
}

var b = new BST();
b.add(2);
b.add(3);
b.add(4);
b.add(1);