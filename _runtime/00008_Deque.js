// _runtime/00008_Deque.js
class Deque {
  constructor(arg0) {
    obj = {};
    length = global;
    if (typeof global === "number") {
      tmp = globalThis;
      _Math = Math;
      _Math2 = Math;
      num = 16;
      num2 = 1073741824;
      num3 = 0;
      num4 = 1;
      diff = (Math.min(require("module_16"), 1073741824) >>> 0) - 1;
      tmp3 = diff | diff >> 1;
      num5 = 2;
      tmp4 = tmp3 | tmp3 >> 2;
      num6 = 4;
      tmp5 = tmp4 | tmp4 >> 4;
      num7 = 8;
      tmp6 = tmp5 | tmp5 >> 8;
      num8 = 1 + (tmp6 | tmp6 >> 16);
    } else {
      tmp8 = isArray;
      num8 = 16;
      if (isArray(global)) {
        length = global.length;
      }
    }
    obj._capacity = num8;
    obj._length = 0;
    obj._front = 0;
    _makeCapacityResult = obj._makeCapacity();
    if (isArray(global)) {
      length2 = global.length;
      num9 = 1;
      for (let num10 = 0; num10 < length2; num10 = num10 + 1) {
        obj[num10] = global[num10];
      }
      obj._length = length2;
    }
    return;
  }
  toArray() {
    _length = this._length;
    array = new Array(_length);
    for (let num = 0; num < _length; num = num + 1) {
      array[num] = this[this._front + num & tmp2 - 1];
    }
    return array;
  }
  push(arg0) {
    self = this;
    length = arguments.length;
    _length = this._length;
    if (length > 1) {
      _capacity = self._capacity;
      if (_length + length > _capacity) {
        num3 = 0;
        tmp4 = _length;
        tmp5 = _length;
        if (0 < length) {
          do {
            _checkCapacityResult = self._checkCapacity(tmp4 + 1);
            self[self._front + tmp4 & self._capacity - 1] = arguments[num3];
            sum = tmp4 + 1;
            self._length = sum;
            num3 = num3 + 1;
            tmp4 = sum;
            tmp5 = sum;
          } while (num3 < length);
        }
        return tmp5;
      } else {
        _front = self._front;
        for (let num2 = 0; num2 < length; num2 = num2 + 1) {
          self[_front + _length & _capacity - 1] = arguments[num2];
          _front = _front + 1;
        }
        self._length = _length + length;
        return _length + length;
      }
    } else {
      num = 0;
      sum1 = _length;
      if (0 !== length) {
        tmp2 = global;
        _checkCapacityResult1 = self._checkCapacity(_length + 1);
        self[self._front + _length & self._capacity - 1] = global;
        self._length = _length + 1;
        sum1 = _length + 1;
      }
      return sum1;
    }
  }
  pop() {
    self = this;
    _length = this._length;
    if (0 !== _length) {
      num = 1;
      tmp = self._front + _length - 1 & self._capacity - 1;
      self[tmp] = undefined;
      self._length = _length - 1;
      return self[tmp];
    } else {
      return;
    }
  }
  shift() {
    self = this;
    _length = this._length;
    if (0 !== _length) {
      _front = self._front;
      self[_front] = undefined;
      num = 1;
      self._front = _front + 1 & self._capacity - 1;
      self._length = _length - 1;
      return self[_front];
    } else {
      return;
    }
  }
  unshift(arg0) {
    self = this;
    _length = this._length;
    length = arguments.length;
    if (length > 1) {
      _capacity2 = self._capacity;
      if (_length + length > _capacity2) {
        diff = length - 1;
        num3 = 0;
        tmp8 = _length;
        tmp9 = _length;
        if (0 <= diff) {
          do {
            _checkCapacityResult = self._checkCapacity(tmp8 + 1);
            _capacity3 = self._capacity;
            diff1 = (self._front - 1 & _capacity3 - 1 ^ _capacity3) - _capacity3;
            self[diff1] = arguments[diff];
            sum = tmp8 + 1;
            self._length = sum;
            self._front = diff1;
            diff = diff - 1;
            tmp8 = sum;
            tmp9 = sum;
          } while (0 <= diff);
        }
        return tmp9;
      } else {
        _front = self._front;
        diff2 = length - 1;
        num2 = 0;
        tmp5 = _front;
        if (0 <= diff2) {
          do {
            diff3 = (_front - 1 & _capacity2 - 1 ^ _capacity2) - _capacity2;
            self[diff3] = arguments[diff2];
            diff2 = diff2 - 1;
            _front = diff3;
            tmp5 = diff3;
          } while (0 <= diff2);
        }
        self._front = tmp5;
        self._length = _length + length;
        return _length + length;
      }
    } else {
      num = 0;
      if (0 === length) {
        return _length;
      } else {
        tmp = global;
        _checkCapacityResult1 = self._checkCapacity(_length + 1);
        _capacity = self._capacity;
        diff4 = (self._front - 1 & _capacity - 1 ^ _capacity) - _capacity;
        self[diff4] = global;
        self._length = _length + 1;
        self._front = diff4;
        return _length + 1;
      }
    }
  }
  peekBack() {
    self = this;
    _length = this._length;
    if (0 !== _length) {
      num = 1;
      return self[self._front + _length - 1 & self._capacity - 1];
    } else {
      return;
    }
  }
  peekFront() {
    self = this;
    return 0 !== this._length ? self[self._front] : undefined;
  }
  get(arg0) {
    if (global === (global | 0)) {
      self = this;
      _length = this._length;
      num = 0;
      sum = global;
      if (global < 0) {
        sum = global + _length;
      }
      if (sum >= 0) {
        if (sum < _length) {
          num2 = 1;
          return self[self._front + sum & self._capacity - 1];
        }
      }
    }
    return;
  }
  isEmpty() {
    return 0 === this._length;
  }
  clear() {
    obj = { _length: 0, _front: 0 };
    _makeCapacityResult = obj._makeCapacity();
    return;
  }
  toString() {
    str = this.toArray();
    return str.toString();
  }
  _makeCapacity() {
    _capacity = this._capacity;
    for (let num = 0; num < _capacity; num = num + 1) {
      this[num] = undefined;
    }
    return;
  }
  _checkCapacity(arg0) {
    self = this;
    if (this._capacity < global) {
      num8 = 1.5;
      num9 = 16;
      sum = 1.5 * self._capacity + 16;
      length = sum;
      if (typeof sum === "number") {
        tmp = globalThis;
        _Math = Math;
        _Math2 = Math;
        num = 1073741824;
        num2 = 0;
        num3 = 1;
        diff = (Math.min(require("module_16"), 1073741824) >>> 0) - 1;
        tmp3 = diff | diff >> 1;
        num4 = 2;
        tmp4 = tmp3 | tmp3 >> 2;
        num5 = 4;
        tmp5 = tmp4 | tmp4 >> 4;
        num6 = 8;
        tmp6 = tmp5 | tmp5 >> 8;
        num7 = 1 + (tmp6 | tmp6 >> 16);
      } else {
        tmp8 = isArray;
        num7 = 16;
        if (isArray(sum)) {
          length = sum.length;
        }
      }
      _resizeToResult = self._resizeTo(num7);
    }
    return;
  }
  _resizeTo(arg0) {
    self = this;
    ({ _front, _capacity } = this);
    array = new Array(_capacity);
    _length = this._length;
    for (let num = 0; num < _capacity; num = num + 1) {
      tmp2 = num;
      array[tmp2] = self[tmp2];
    }
    self._capacity = global;
    _makeCapacityResult = self._makeCapacity();
    self._front = 0;
    if (_front + _length <= _capacity) {
      for (let num4 = 0; num4 < _length; num4 = num4 + 1) {
        self[num4] = array[num4 + _front];
      }
    } else {
      diff = _length - (_front + _length & _capacity - 1);
      num2 = 0;
      if (0 < diff) {
        do {
          self[num2] = array[num2 + _front];
          num2 = num2 + 1;
        } while (num2 < diff);
      }
      diff1 = _length - diff;
      num3 = 0;
      if (0 < diff1) {
        do {
          self[num3 + diff] = array[num3];
          num3 = num3 + 1;
        } while (num3 < diff1);
      }
    }
    return;
  }
}
Deque.prototype.valueOf = Deque.prototype.toString;
Deque.prototype.removeFront = Deque.prototype.shift;
Deque.prototype.removeBack = Deque.prototype.pop;
Deque.prototype.insertFront = Deque.prototype.unshift;
Deque.prototype.insertBack = Deque.prototype.push;
Deque.prototype.enqueue = Deque.prototype.push;
Deque.prototype.dequeue = Deque.prototype.shift;
Deque.prototype.toJSON = Deque.prototype.toArray;
Object.defineProperty(Deque.prototype, "length", {
  get() {
    return this._length;
  },
  set() {
    const rangeError = new RangeError("");
    throw rangeError;
  }
});

export default Deque;