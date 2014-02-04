Array.prototype.myUniq = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    if (result.indexOf(this[i]) === -1) {
      result.push(this[i]);
    }
  }

  return result;
};

Array.prototype.twoSum = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

Array.prototype.myTranspose = function() {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    result.push([]);
  };

  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length; j++) {
      result[j][i] = this[i][j];
    }
  }

  return result;
};

Array.prototype.multiples = function() {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    result.push(this[i] * 2);
  };

  return result;
}

Array.prototype.myEach = function(block) {

  for (var i = 0; i < this.length; i++) {
    block(this[i]);
  };

  return this;
}

Array.prototype.myMap = function(block) {
  var results = [];

  this.myEach(
    function(x) {
      results.push(block(x));
    }
  );

  return results;
}

Array.prototype.myInject = function(block) {
  var result = 0;

  this.myEach(
    function(y) {
      result = block(result, y);
    }
  );

  return result;
}

Array.prototype.bubbleSort = function() {
  // var result = [];
  sorted = false;

  while (!sorted) {
    sorted = true;

    for (var i = 0; i < this.length; i++) {

      if (this[i] > this[i+1]) {
        var elem1 = this[i];
        this[i] = this[i+1];
        this[i+1] = elem1;
        sorted = false;
      }
    };
  };

  return this;
}


var substrings = function(string) {
  var result = [];

  for (var i = 0; i < string.length; i++) {
    for (var j = i+1; j <= string.length; j++) {
      result.push(string.substring(i, j));
    }
  }

  return result;
};



console.log(substrings("bot"));