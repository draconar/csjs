//MergeSort; TODO: split step

//Merge step
function merge(left, right) {
    var i_l = 0,
        j_r = 0,
        result = [];

        while(i_l < left.length && j_r < right.length ) {
            if(left[i_l] < right[j_r]){
                result.push(left[i_l]);
                i_l++;
            } else {
                result.push(right[j_r]);
                j_r++;
            }
        }
        return result.concat(left.slice(i_l)).concat(right.slice(j_r));
}