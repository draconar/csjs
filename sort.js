/*
    quicksort with repetition; pivot is fixed at [0]
*/
var quickSort = function(array){
    if(array.length < 2) {
        return array;
    }
    var pivot = array[0];
    var less = [];
    var greater = [];
    for (var i = 1; i < array.length; i++){
        if(array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return quickSort(less).concat([pivot]).concat(quickSort(greater));
}