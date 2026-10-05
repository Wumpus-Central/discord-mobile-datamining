// === Module 8: Deque ===

// Module 8 (Deque)
class Deque {
  constructor(num) {
    let num8;
    const obj = { _capacity: num8, _length: 0, _front: 0 };
    let length = num;
    if (typeof num === "number") {
      const _Math = Math;
      const _Math2 = Math;
      const diff = (Math.min(Math.max(16, length), 1073741824) >>> 0) - 1;
      num8 = 1 + (tmp6 | tmp6 >> 16);
    } else {
      num8 = 16;
      if (isArray(num)) {
        length = num.length;
      }
    }
    obj._makeCapacity();
    if (isArray(num)) {
      let num10;
      for (let num10 = 0; num10 < length2; num10 = num10 + 1) {
        obj[num10] = num[num10];
      }
      obj._length = num.length;
    }
  }
  toArray() {
    let num;
    const _length = this._length;
    const array = new Array(_length);
    for (let num = 0; num < _length; num = num + 1) {
      array[num] = this[this._front + num & tmp2 - 1];
    }
    return array;
  }
  push(arg0) {
    const self = this;
    const length = arguments.length;
    const _length = this._length;
    if (length > 1) {
      const _capacity = self._capacity;
      if (_length + length > _capacity) {
        let num3 = 0;
        let tmp4 = _length;
        let tmp5 = _length;
        if (0 < length) {
          do {
            let _checkCapacityResult = self._checkCapacity(tmp4 + 1);
            self[self._front + tmp4 & self._capacity - 1] = arguments[num3];
            let sum = tmp4 + 1;
            self._length = sum;
            num3 = num3 + 1;
            tmp4 = sum;
            tmp5 = sum;
          } while (num3 < length);
        }
        return tmp5;
      } else {
        let num2;
        let _front = self._front;
        for (let num2 = 0; num2 < length; num2 = num2 + 1) {
          self[_front + _length & _capacity - 1] = arguments[num2];
          _front = _front + 1;
        }
        self._length = _length + length;
        return _length + length;
      }
    } else {
      let sum1 = _length;
      if (0 !== length) {
        self._checkCapacity(_length + 1);
        self[self._front + _length & self._capacity - 1] = arg0;
        self._length = _length + 1;
        sum1 = _length + 1;
      }
      return sum1;
    }
  }
  pop() {
    const self = this;
    const _length = this._length;
    if (0 !== _length) {
      self[self._front + _length - 1 & self._capacity - 1] = undefined;
      self._length = _length - 1;
      return self[self._front + _length - 1 & self._capacity - 1];
    }
  }
  shift() {
    const self = this;
    const _length = this._length;
    if (0 !== _length) {
      const _front = self._front;
      self[_front] = undefined;
      self._front = _front + 1 & self._capacity - 1;
      self._length = _length - 1;
      return self[_front];
    }
  }
  unshift(arg0) {
    const self = this;
    const _length = this._length;
    const length = arguments.length;
    if (length > 1) {
      const _capacity2 = self._capacity;
      if (_length + length > _capacity2) {
        let diff = length - 1;
        let tmp8 = _length;
        let tmp9 = _length;
        if (0 <= diff) {
          do {
            let _checkCapacityResult = self._checkCapacity(tmp8 + 1);
            let _capacity3 = self._capacity;
            let diff1 = (self._front - 1 & _capacity3 - 1 ^ _capacity3) - _capacity3;
            self[diff1] = arguments[diff];
            let sum = tmp8 + 1;
            self._length = sum;
            self._front = diff1;
            diff = diff - 1;
            tmp8 = sum;
            tmp9 = sum;
          } while (0 <= diff);
        }
        return tmp9;
      } else {
        let _front = self._front;
        let diff2 = length - 1;
        let tmp5 = _front;
        if (0 <= diff2) {
          do {
            let diff3 = (_front - 1 & _capacity2 - 1 ^ _capacity2) - _capacity2;
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
    } else if (0 === length) {
      return _length;
    } else {
      self._checkCapacity(_length + 1);
      const _capacity = self._capacity;
      const diff4 = (self._front - 1 & _capacity - 1 ^ _capacity) - _capacity;
      self[diff4] = arg0;
      self._length = _length + 1;
      self._front = diff4;
      return _length + 1;
    }
  }
  peekBack() {
    const self = this;
    const _length = this._length;
    if (0 !== _length) {
      return self[self._front + _length - 1 & self._capacity - 1];
    }
  }
  peekFront() {
    const self = this;
    return 0 !== this._length ? self[self._front] : undefined;
  }
  get(arg0) {
    if (arg0 === (arg0 | 0)) {
      const self = this;
      const _length = this._length;
      let sum = arg0;
      if (arg0 < 0) {
        sum = arg0 + _length;
      }
      if (sum >= 0) {
        if (sum < _length) {
          return self[self._front + sum & self._capacity - 1];
        }
      }
    }
  }
  isEmpty() {
    return 0 === this._length;
  }
  clear() {
    const obj = { _length: 0, _front: 0 };
    obj._makeCapacity();
  }
  toString() {
    const str = this.toArray();
    return str.toString();
  }
  _makeCapacity() {
    let num;
    const _capacity = this._capacity;
    for (let num = 0; num < _capacity; num = num + 1) {
      this[num] = undefined;
    }
  }
  _checkCapacity(arg0) {
    const self = this;
    if (this._capacity < arg0) {
      let num7;
      const sum = 1.5 * self._capacity + 16;
      let length = sum;
      const _resizeTo = self._resizeTo;
      if (typeof sum === "number") {
        const _Math = Math;
        const _Math2 = Math;
        const diff = (Math.min(Math.max(16, length), 1073741824) >>> 0) - 1;
        num7 = 1 + (tmp6 | tmp6 >> 16);
      } else {
        num7 = 16;
        if (isArray(sum)) {
          length = sum.length;
        }
      }
      _resizeTo(num7);
    }
  }
  _resizeTo(_capacity) {
    let _front;
    let num;
    const self = this;
    ({ _front, _capacity } = this);
    const array = new Array(_capacity);
    const _length = this._length;
    for (let num = 0; num < _capacity; num = num + 1) {
      let tmp2 = num;
      array[tmp2] = self[tmp2];
    }
    self._capacity = _capacity;
    self._makeCapacity();
    self._front = 0;
    if (_front + _length <= _capacity) {
      let num4;
      for (let num4 = 0; num4 < _length; num4 = num4 + 1) {
        self[num4] = array[num4 + _front];
      }
    } else {
      const diff = _length - (_front + _length & _capacity - 1);
      let num2 = 0;
      if (0 < diff) {
        do {
          self[num2] = array[num2 + _front];
          num2 = num2 + 1;
        } while (num2 < diff);
      }
      const diff1 = _length - diff;
      let num3 = 0;
      if (0 < diff1) {
        do {
          self[num3 + diff] = array[num3];
          num3 = num3 + 1;
        } while (num3 < diff1);
      }
    }
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
let obj = {
  get() {
    return this._length;
  },
  set() {
    const rangeError = new RangeError("");
    throw rangeError;
  }
};
Object.defineProperty(Deque.prototype, "length", obj);

export default Deque;