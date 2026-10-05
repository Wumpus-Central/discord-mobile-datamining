// === Module 1447: Yallist ===

// Module 1447 (Yallist)
class Yallist {
  constructor(arr) {
    let self = this;
    let closure_0 = this;
    if (!(this instanceof Yallist)) {
      const tmpResult = Yallist();
      closure_0 = tmpResult;
      self = tmpResult;
    }
    self.tail = null;
    self.head = null;
    self.length = 0;
    if (arr) {
      if (typeof arr.forEach === "function") {
        const item = arr.forEach((item) => {
          closure_0.push(item);
        });
      }
      return self;
    }
    if (arguments.length > 0) {
      let num2;
      const length = arguments.length;
      for (let num2 = 0; num2 < length; num2 = num2 + 1) {
        arr = self.push(arguments[num2]);
      }
    }
  }
  removeNode(list) {
    let next;
    let prev;
    const self = this;
    if (list.list !== this) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("removing node which does not belong to this list");
      throw error;
    } else {
      ({ next, prev } = list);
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (list === self.head) {
        self.head = next;
      }
      if (list === self.tail) {
        self.tail = prev;
      }
      list = list.list;
      list.length = list.length - 1;
      list.next = null;
      list.prev = null;
      list.list = null;
    }
  }
  unshiftNode(list) {
    const self = this;
    if (list !== this.head) {
      if (list.list) {
        list = list.list;
        list.removeNode(list);
      }
      const head = self.head;
      list.list = self;
      list.next = head;
      if (head) {
        head.prev = list;
      }
      self.head = list;
      if (!self.tail) {
        self.tail = list;
      }
      self.length = self.length + 1;
    }
  }
  pushNode(list) {
    const self = this;
    if (list !== this.tail) {
      if (list.list) {
        list = list.list;
        list.removeNode(list);
      }
      const tail = self.tail;
      list.list = self;
      list.prev = tail;
      if (tail) {
        tail.next = list;
      }
      self.tail = list;
      if (!self.head) {
        self.head = list;
      }
      self.length = self.length + 1;
    }
  }
  push() {
    let num;
    const self = this;
    const length = arguments.length;
    for (let num = 0; num < length; num = num + 1) {
      let tmp13;
      let tmp = arguments[num];
      let tail = self.tail;
      let obj = Object.create(Node.prototype);
      if (obj instanceof Node) {
        obj.list = self;
        obj.value = tmp;
        if (tail) {
          tail.next = obj;
          obj.prev = tail;
        } else {
          obj.prev = null;
        }
        obj.next = null;
      } else {
        let tmp2Result;
        let obj3 = Object.create(Node.prototype);
        if (obj3 instanceof Node) {
          obj3.list = self;
          obj3.value = tmp;
          if (tail) {
            tail.next = obj3;
            obj3.prev = tail;
          } else {
            obj3.prev = null;
          }
          obj3.next = null;
        } else {
          let obj4 = Object.create(Node.prototype);
          tmp2Result = Node(tmp, tail, null, self);
        }
        tmp13 = tmp2Result;
      }
      self.tail = tmp13;
      if (!self.head) {
        self.head = self.tail;
      }
      self.length = self.length + 1;
    }
    return self.length;
  }
  unshift() {
    let num;
    const self = this;
    const length = arguments.length;
    for (let num = 0; num < length; num = num + 1) {
      let tmp13;
      let tmp = arguments[num];
      let head = self.head;
      let obj = Object.create(Node.prototype);
      if (obj instanceof Node) {
        obj.list = self;
        obj.value = tmp;
        obj.prev = null;
        if (head) {
          head.prev = obj;
          obj.next = head;
        } else {
          obj.next = null;
        }
      } else {
        let tmp2Result;
        let obj3 = Object.create(Node.prototype);
        if (obj3 instanceof Node) {
          obj3.list = self;
          obj3.value = tmp;
          obj3.prev = null;
          if (head) {
            head.prev = obj3;
            obj3.next = head;
          } else {
            obj3.next = null;
          }
        } else {
          let obj4 = Object.create(Node.prototype);
          tmp2Result = Node(tmp, null, head, self);
        }
        tmp13 = tmp2Result;
      }
      self.head = tmp13;
      if (!self.tail) {
        self.tail = self.head;
      }
      self.length = self.length + 1;
    }
    return self.length;
  }
  pop() {
    const self = this;
    if (this.tail) {
      self.tail = self.tail.prev;
      const value = self.tail.value;
      if (self.tail) {
        self.tail.next = null;
      } else {
        self.head = null;
      }
      self.length = self.length - 1;
      return value;
    }
  }
  shift() {
    const self = this;
    if (this.head) {
      self.head = self.head.next;
      const value = self.head.value;
      if (self.head) {
        self.head.prev = null;
      } else {
        self.tail = null;
      }
      self.length = self.length - 1;
      return value;
    }
  }
  forEach(call, arg1) {
    const self = this;
    let iter = self.head;
    let num = 0;
    if (null !== iter) {
      do {
        let value = iter.value;
        let callResult = call.call(tmp, value, num, self);
        iter = iter.next;
        num = num + 1;
      } while (null !== iter);
    }
  }
  forEachReverse(call, arg1) {
    const self = this;
    let iter = self.tail;
    let diff = self.length - 1;
    if (null !== iter) {
      do {
        let value = iter.value;
        let callResult = call.call(tmp, value, diff, self);
        iter = iter.prev;
        diff = diff - 1;
      } while (null !== iter);
    }
  }
  get(arg0) {
    const head = this.head;
    let iter = head;
    let num = 0;
    if (null !== head) {
      let iter2 = head;
      let num3 = 0;
      iter = head;
      num = 0;
      if (0 < arg0) {
        const next = iter2.next;
        const sum = num3 + 1;
        iter = next;
        num = sum;
        while (null !== next) {
          iter2 = next;
          num3 = sum;
          iter = next;
          num = sum;
          if (sum >= arg0) {
            break;
          }
        }
      }
    }
    if (num === arg0) {
      if (null !== iter) {
        return iter.value;
      }
    }
  }
  getReverse(arg0) {
    const tail = this.tail;
    let iter = tail;
    let num = 0;
    if (null !== tail) {
      let tmp = tail;
      let num3 = 0;
      iter = tail;
      num = 0;
      if (0 < arg0) {
        const prev = tmp.prev;
        const sum = num3 + 1;
        iter = prev;
        num = sum;
        while (null !== prev) {
          tmp = prev;
          num3 = sum;
          iter = prev;
          num = sum;
          if (sum >= arg0) {
            break;
          }
        }
      }
    }
    if (num === arg0) {
      if (null !== iter) {
        return iter.value;
      }
    }
  }
  map(call, arg1) {
    const self = this;
    const tmp = arg1 || self;
    const arr = Yallist();
    let iter = self.head;
    if (null !== iter) {
      do {
        let arr2 = arr.push(call.call(tmp, iter.value, self));
        iter = iter.next;
      } while (null !== iter);
    }
    return arr;
  }
  mapReverse(call, arg1) {
    const self = this;
    const tmp = arg1 || self;
    const arr = Yallist();
    let iter = self.tail;
    if (null !== iter) {
      do {
        let arr2 = arr.push(call.call(tmp, iter.value, self));
        iter = iter.prev;
      } while (null !== iter);
    }
    return arr;
  }
  reduce(fn, arg1) {
    const self = this;
    let value = arg1;
    let iter = this.head;
    if (arguments.length <= 1) {
      if (self.head) {
        iter = self.head.next;
        value = self.head.value;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError("Reduce of empty list with no initial value");
        throw typeError;
      }
    }
    let tmp4 = value;
    let num = 0;
    let tmp5 = value;
    if (null !== iter) {
      do {
        tmp4 = fn(tmp4, iter.value, num);
        iter = iter.next;
        num = num + 1;
        tmp5 = tmp4;
      } while (null !== iter);
    }
    return tmp5;
  }
  reduceReverse(fn, arg1) {
    const self = this;
    let value = arg1;
    let iter = this.tail;
    if (arguments.length <= 1) {
      if (self.tail) {
        iter = self.tail.prev;
        value = self.tail.value;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError("Reduce of empty list with no initial value");
        throw typeError;
      }
    }
    let diff = self.length - 1;
    let tmp5 = value;
    let tmp6 = value;
    if (null !== iter) {
      do {
        tmp5 = fn(tmp5, iter.value, diff);
        iter = iter.prev;
        diff = diff - 1;
        tmp6 = tmp5;
      } while (null !== iter);
    }
    return tmp6;
  }
  toArray() {
    const array = new Array(this.length);
    let iter = this.head;
    let num = 0;
    if (null !== iter) {
      do {
        array[num] = iter.value;
        iter = iter.next;
        num = num + 1;
      } while (null !== iter);
    }
    return array;
  }
  toArrayReverse() {
    const array = new Array(this.length);
    let iter = this.tail;
    let num = 0;
    if (null !== iter) {
      do {
        array[num] = iter.value;
        iter = iter.prev;
        num = num + 1;
      } while (null !== iter);
    }
    return array;
  }
  slice(arg0, arg1) {
    const self = this;
    let length = tmp;
    if ((arg1 || self.length) < 0) {
      length = tmp + self.length;
    }
    let num = tmp2;
    if ((arg0 || 0) < 0) {
      num = tmp2 + self.length;
    }
    const arr = Yallist();
    if (length >= num) {
      if (length >= 0) {
        if (num < 0) {
          num = 0;
        }
        if (length > self.length) {
          length = self.length;
        }
        const head = self.head;
        let iter = head;
        let num2 = 0;
        if (null !== head) {
          let iter2 = head;
          let num4 = 0;
          iter = head;
          num2 = 0;
          if (0 < num) {
            const next = iter2.next;
            const sum = num4 + 1;
            iter = next;
            num2 = sum;
            while (null !== next) {
              iter2 = next;
              num4 = sum;
              iter = next;
              num2 = sum;
              if (sum >= num) {
                break;
              }
            }
          }
        }
        if (null !== iter) {
          if (num2 < length) {
            arr.push(iter.value);
            const next2 = iter.next;
            while (null !== next2) {
              num2 = num2 + 1;
              iter = next2;
              if (num2 >= length) {
                break;
              }
            }
          }
        }
        return arr;
      }
    }
    return arr;
  }
  sliceReverse(arg0, arg1) {
    let length2;
    let tail;
    const self = this;
    let length = tmp;
    if ((arg1 || self.length) < 0) {
      length = tmp + self.length;
    }
    let num = tmp2;
    if ((arg0 || 0) < 0) {
      num = tmp2 + self.length;
    }
    const arr = Yallist();
    if (length >= num) {
      if (length >= 0) {
        if (num < 0) {
          num = 0;
        }
        if (length > self.length) {
          length = self.length;
        }
        ({ length: length2, tail } = self);
        let iter = tail;
        let tmp4 = length2;
        if (null !== tail) {
          let tmp5 = tail;
          let tmp6 = length2;
          iter = tail;
          tmp4 = length2;
          if (length2 > length) {
            const prev = tmp5.prev;
            const diff = tmp6 - 1;
            iter = prev;
            tmp4 = diff;
            while (null !== prev) {
              tmp5 = prev;
              tmp6 = diff;
              iter = prev;
              tmp4 = diff;
              if (diff <= length) {
                break;
              }
            }
          }
        }
        if (null !== iter) {
          if (tmp4 > num) {
            arr.push(iter.value);
            const diff1 = tmp4 - 1;
            const prev2 = iter.prev;
            while (null !== prev2) {
              iter = prev2;
              tmp4 = diff1;
              if (diff1 <= num) {
                break;
              }
            }
          }
        }
        return arr;
      }
    }
    return arr;
  }
  reverse() {
    const self = this;
    const head = this.head;
    let iter = head;
    const tail = this.tail;
    if (null !== head) {
      do {
        iter.prev = iter.next;
        iter.next = iter.prev;
        iter = iter.prev;
      } while (null !== iter);
    }
    self.head = tail;
    self.tail = head;
    return self;
  }
}
class Node {
  constructor(value, prev, next, list) {
    const self = this;
    if (this instanceof Node) {
      self.list = list;
      self.value = value;
      if (prev) {
        prev.next = self;
        self.prev = prev;
      } else {
        self.prev = null;
      }
      if (next) {
        next.prev = self;
        self.next = next;
      } else {
        self.next = null;
      }
    } else {
      Object.create(Node.prototype);
      const tmpResult = Node(value, prev, next, list);
      return tmpResult;
    }
  }
}
Yallist.Node = Node;
Yallist.create = Yallist;

export default Yallist;