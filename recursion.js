var range = function(start, end) {
  var result = [start];

  if (start === end) {
    return result;
  } else {
    result = result.concat(range(start+1, end));
    return result;
  }
};

var exponent = function(base, exp) {
  result = 1

  if (exp === 0) {
    return result;
  } else {
    result = base * exponent(base, exp - 1);
    return result;
  }
};

var fibs = function(n) {
  if (n === 0) {
    return [];
  }
  else if (n === 1) {
    return [0];
  }
  else if (n === 2)
    return [0,1];
  else {

    fibs_arr = fibs(n - 1);

    sum = fibs_arr[fibs_arr.length - 1] + fibs_arr[fibs_arr.length - 2];

    fibs_arr.push(sum);
    return fibs_arr;
  }

};

var binarySearch = function(array, target) {

 var size = Math.round((array.length)/ 2);

 var left = array.slice(0, size);
 var right = array.slice(size, array.length);
 var leftLength = left.length-1;

 if (left.length === 0) {
   return undefined;
 } else if (target === left[leftLength]) {
   return leftLength;
 } else if (target > left[leftLength]){
   return binarySearch(right, target) + leftLength+1;
 } else {
   return binarySearch(left, target);
 }
}

var makeChangeIterative = function(num, change) {
  change = typeof change !== 'undefined' ? change : [25, 10, 5, 1];
  result = [];


  for (var i = 0; i < change.length; i++) {
    while (change[i] <= num) {
      result.push(change[i]);
      num -= change[i];
    }
  };

  return result;
}

var makeChange = function(num, change) {
  change = typeof change !== 'undefined' ? change : [25, 10, 5, 1];

  if (change.length === 0 || change[change.length-1] > num) {
    return [];
  }

  var bestChange = null;

  for (var i = 0; i < change.length; i++) {
    if (change[i] > num) continue;

    var remainder = num - change[i];
    var slice = change.slice(i, change.length);
    var bestRemainder = makeChange(remainder, slice);
    var thisChange = [change[i]].concat(bestRemainder);

    if ( !bestChange || thisChange.length < bestChange.length ) {
      bestChange = thisChange;
    }
  };

  return bestChange;
}


Array.prototype.mergeSort = function () {
  if (this.length < 2) {
    return this;
  }

  var half = Math.floor(this.length / 2);

  var left = this.slice(0, half);
  var right = this.slice(half, this.length);

  var sortedLeft = left.mergeSort();
  var sortedRight = right.mergeSort();

  return merge(sortedLeft, sortedRight);
}

var merge = function(left, right) {
  var merged = [];

  while (left.length > 0 && right.length > 0) {
    var currentElement = (left[0] < right[0]) ? left.shift() : right.shift();
    merged.push(currentElement);
  }

  return merged.concat(left.concat(right));
}

Array.prototype.subsets = function () {
  if (this.length === 0){
    return [[]];
  }

  var subs = this.slice(0, this.length - 1).subsets();
  // console.log(subs);

  // for (var i = 0; i < subs.length; i++) {
//     subs.concat( subs[i].concat(this[this.length - 1]));
//   };
  console.log(this);
  var originalArr = this;
  var mappedSubs = subs.map(function(x){

    var arr = [originalArr[originalArr.length - 1]];
    x = x.concat(arr);

    console.log(x);
    return x;
  });

   subs = subs.concat(mappedSubs);

  return subs;
}

console.log([5,7,2].subsets());