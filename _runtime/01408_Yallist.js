// _runtime/01408_Yallist.js
class Yallist {
  constructor(arg0) {
    self = this;
    self = this;
    tmp = self;
    if (!(this instanceof self)) {
      tmpResult = tmp();
      self = tmpResult;
      self = tmpResult;
    }
    self.tail = null;
    self.head = null;
    self.length = 0;
    if (global) {
      if (typeof global.forEach === "function") {
        item = global.forEach((arg0) => {
          self.push(arg0);
        });
      }
      return self;
    }
    if (arguments.length > 0) {
      length = arguments.length;
      num = 1;
      for (let num2 = 0; num2 < length; num2 = num2 + 1) {
        arr = self.push(arguments[num2]);
      }
    }
    return;
  }
  removeNode(arg0) {
    self = this;
    if (global.list !== this) {
      tmp2 = globalThis;
      _Error = Error;
      tmp3 = new.target;
      str = "removing node which does not belong to this list";
      tmp4 = new.target;
      error = new Error("removing node which does not belong to this list");
      tmp6 = error;
      throw error;
    } else {
      ({ next, prev } = global);
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (global === self.head) {
        self.head = next;
      }
      if (global === self.tail) {
        self.tail = prev;
      }
      list = global.list;
      list.length = list.length - 1;
      tmp = null;
      global.next = null;
      global.prev = null;
      global.list = null;
      return;
    }
  }
  unshiftNode(arg0) {
    self = this;
    if (global !== this.head) {
      if (global.list) {
        list = global.list;
        removeNodeResult = list.removeNode(global);
      }
      head = self.head;
      global.list = self;
      global.next = head;
      if (head) {
        head.prev = global;
      }
      self.head = global;
      if (!self.tail) {
        self.tail = global;
      }
      self.length = self.length + 1;
    }
    return;
  }
  pushNode(arg0) {
    self = this;
    if (global !== this.tail) {
      if (global.list) {
        list = global.list;
        removeNodeResult = list.removeNode(global);
      }
      tail = self.tail;
      global.list = self;
      global.prev = tail;
      if (tail) {
        tail.next = global;
      }
      self.tail = global;
      if (!self.head) {
        self.head = global;
      }
      self.length = self.length + 1;
    }
    return;
  }
  push() {
    self = this;
    length = arguments.length;
    num = 0;
    if (0 < length) {
      tmp = arguments[num];
      tmp2 = Node;
      tail = self.tail;
      obj = Object.create(Node.prototype);
      tmp4 = num;
      while (!(obj instanceof Node)) {
        obj1 = Object.create(tmp2.prototype);
        if (obj1 instanceof tmp2) {
          obj1.list = self;
          obj1.value = tmp;
          if (tail) {
            tail.next = obj1;
            obj1.prev = tail;
          } else {
            obj1.prev = null;
          }
          obj1.next = null;
        } else {
          obj2 = Object.create(tmp2.prototype);
          tmp7 = obj2;
          tmp8 = tmp;
          tmp9 = tail;
          tmp10 = null;
          tmp11 = self;
          tmp2Result = tmp2(tmp, tail, null, self);
          tmp13 = tmp2Result;
          self.tail = tmp2Result;
          if (!self.head) {
            self.head = self.tail;
          }
          self.length = self.length + 1;
          num = num + 1;
        }
      }
      obj.list = self;
      obj.value = tmp;
      if (tail) {
        tail.next = obj;
        obj.prev = tail;
      } else {
        obj.prev = null;
      }
      obj.next = null;
    }
    return self.length;
  }
  unshift() {
    self = this;
    length = arguments.length;
    for (let num = 0; num < length; num = num + 1) {
      tmp = arguments[num];
      tmp2 = Node;
      head = self.head;
      obj = Object.create(Node.prototype);
      tmp4 = num;
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
        obj1 = Object.create(tmp2.prototype);
        if (obj1 instanceof tmp2) {
          obj1.list = self;
          obj1.value = tmp;
          obj1.prev = null;
          if (head) {
            head.prev = obj1;
            obj1.next = head;
          } else {
            obj1.next = null;
          }
        } else {
          obj2 = Object.create(tmp2.prototype);
          tmp7 = obj2;
          tmp8 = tmp;
          tmp9 = null;
          tmp10 = head;
          tmp11 = self;
          tmp2Result = tmp2(tmp, null, head, self);
        }
        tmp13 = tmp2Result;
      }
      tmp14 = tmp13;
      self.head = tmp13;
      if (!self.tail) {
        self.tail = self.head;
      }
      self.length = self.length + 1;
    }
    return self.length;
  }
  pop() {
    self = this;
    if (this.tail) {
      self.tail = self.tail.prev;
      tmp = null;
      if (self.tail) {
        self.tail.next = null;
      } else {
        self.head = null;
      }
      self.length = self.length - 1;
      return self.tail.value;
    } else {
      return;
    }
  }
  shift() {
    self = this;
    if (this.head) {
      self.head = self.head.next;
      tmp = null;
      if (self.head) {
        self.head.prev = null;
      } else {
        self.tail = null;
      }
      self.length = self.length - 1;
      return self.head.value;
    } else {
      return;
    }
  }
  forEach(arg0, arg1) {
    self = this;
    tmp = require;
    if (!require) {
      tmp = self;
    }
    iter = self.head;
    num = 0;
    if (null !== iter) {
      do {
        call = global.call;
        value = iter.value;
        tmp3 = iter;
        if (typeof call === "unknown") {
          tmp4 = global(value, num, self);
        } else {
          tmp5 = global;
          tmp6 = tmp;
          tmp7 = value;
          tmp8 = num;
          tmp9 = self;
          callResult = call(tmp, value, tmp2, self);
        }
        iter = iter.next;
        num = num + 1;
      } while (null !== iter);
    }
    return;
  }
  forEachReverse(arg0, arg1) {
    self = this;
    tmp = require;
    if (!require) {
      tmp = self;
    }
    iter = self.tail;
    diff = self.length - 1;
    if (null !== iter) {
      do {
        call = global.call;
        value = iter.value;
        tmp4 = iter;
        if (typeof call === "unknown") {
          tmp5 = global(value, diff, self);
        } else {
          tmp6 = global;
          tmp7 = tmp;
          tmp8 = value;
          tmp9 = diff;
          tmp10 = self;
          callResult = call(tmp, value, tmp3, self);
        }
        iter = iter.prev;
        diff = diff - 1;
      } while (null !== iter);
    }
    return;
  }
  get(arg0) {
    head = this.head;
    iter = head;
    num = 0;
    if (null !== head) {
      num2 = 1;
      iter2 = head;
      num3 = 0;
      iter = head;
      num = 0;
      if (0 < global) {
        next = iter2.next;
        sum = num3 + 1;
        iter = next;
        num = sum;
        while (null !== next) {
          iter2 = next;
          num3 = sum;
          iter = next;
          num = sum;
          if (sum >= global) {
            break;
          }
        }
      }
    }
    if (num === global) {
      if (null !== iter) {
        return iter.value;
      }
    }
    return;
  }
  getReverse(arg0) {
    tail = this.tail;
    iter = tail;
    num = 0;
    if (null !== tail) {
      num2 = 1;
      tmp = tail;
      num3 = 0;
      iter = tail;
      num = 0;
      if (0 < global) {
        prev = tmp.prev;
        sum = num3 + 1;
        iter = prev;
        num = sum;
        while (null !== prev) {
          tmp = prev;
          num3 = sum;
          iter = prev;
          num = sum;
          if (sum >= global) {
            break;
          }
        }
      }
    }
    if (num === global) {
      if (null !== iter) {
        return iter.value;
      }
    }
    return;
  }
  map(arg0, arg1) {
    self = this;
    tmp = require;
    if (!require) {
      tmp = self;
    }
    arr = Yallist();
    iter = self.head;
    if (null !== iter) {
      do {
        call = global.call;
        value = iter.value;
        tmp2 = iter;
        arr = arr.push(typeof call === "unknown" ? global(value, self) : call(tmp, value, self));
        iter = iter.next;
      } while (null !== iter);
    }
    return arr;
  }
  mapReverse(arg0, arg1) {
    self = this;
    tmp = require;
    if (!require) {
      tmp = self;
    }
    arr = Yallist();
    iter = self.tail;
    if (null !== iter) {
      do {
        call = global.call;
        value = iter.value;
        tmp2 = iter;
        arr = arr.push(typeof call === "unknown" ? global(value, self) : call(tmp, value, self));
        iter = iter.prev;
      } while (null !== iter);
    }
    return arr;
  }
  reduce(arg0, arg1) {
    self = this;
    value = require;
    iter = this.head;
    if (arguments.length <= 1) {
      if (self.head) {
        iter = self.head.next;
        value = self.head.value;
      } else {
        tmp = globalThis;
        _TypeError = TypeError;
        tmp2 = new.target;
        str = "Reduce of empty list with no initial value";
        tmp3 = new.target;
        typeError = new TypeError("Reduce of empty list with no initial value");
        tmp5 = typeError;
        throw typeError;
      }
    }
    tmp6 = value;
    num = 0;
    tmp7 = value;
    if (null !== iter) {
      do {
        tmp6 = global(tmp6, iter.value, num);
        iter = iter.next;
        num = num + 1;
        tmp7 = tmp6;
      } while (null !== iter);
    }
    return tmp7;
  }
  reduceReverse(arg0, arg1) {
    self = this;
    value = require;
    iter = this.tail;
    if (arguments.length <= 1) {
      if (self.tail) {
        iter = self.tail.prev;
        value = self.tail.value;
      } else {
        tmp = globalThis;
        _TypeError = TypeError;
        tmp2 = new.target;
        str = "Reduce of empty list with no initial value";
        tmp3 = new.target;
        typeError = new TypeError("Reduce of empty list with no initial value");
        tmp5 = typeError;
        throw typeError;
      }
    }
    diff = self.length - 1;
    tmp7 = value;
    tmp8 = value;
    if (null !== iter) {
      do {
        tmp7 = global(tmp7, iter.value, diff);
        iter = iter.prev;
        diff = diff - 1;
        tmp8 = tmp7;
      } while (null !== iter);
    }
    return tmp8;
  }
  toArray() {
    array = new Array(this.length);
    iter = this.head;
    num = 0;
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
    array = new Array(this.length);
    iter = this.tail;
    num = 0;
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
    self = this;
    length = require;
    if (!require) {
      length = self.length;
    }
    length2 = length;
    if (length < 0) {
      length2 = length + self.length;
    }
    num = global;
    if (!global) {
      num = 0;
    }
    num2 = num;
    if (num < 0) {
      num2 = num + self.length;
    }
    arr = Yallist();
    if (length2 >= num2) {
      if (length2 >= 0) {
        if (num2 < 0) {
          num2 = 0;
        }
        if (length2 > self.length) {
          length2 = self.length;
        }
        head = self.head;
        tmp = null;
        iter = head;
        num3 = 0;
        if (null !== head) {
          num4 = 1;
          iter2 = head;
          num5 = 0;
          iter = head;
          num3 = 0;
          if (0 < num2) {
            next = iter2.next;
            sum = num5 + 1;
            iter = next;
            num3 = sum;
            while (null !== next) {
              iter2 = next;
              num5 = sum;
              iter = next;
              num3 = sum;
              if (sum >= num2) {
                break;
              }
            }
          }
        }
        if (null !== iter) {
          num6 = 1;
          if (num3 < length2) {
            arr = arr.push(iter.value);
            next2 = iter.next;
            tmp4 = num3;
            while (null !== next2) {
              num3 = num3 + 1;
              iter = next2;
              if (num3 >= length2) {
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
    self = this;
    length = require;
    if (!require) {
      length = self.length;
    }
    length2 = length;
    if (length < 0) {
      length2 = length + self.length;
    }
    num = global;
    if (!global) {
      num = 0;
    }
    num2 = num;
    if (num < 0) {
      num2 = num + self.length;
    }
    arr = Yallist();
    if (length2 >= num2) {
      if (length2 >= 0) {
        if (num2 < 0) {
          num2 = 0;
        }
        if (length2 > self.length) {
          length2 = self.length;
        }
        ({ length: length3, tail } = self);
        tmp = null;
        iter = tail;
        tmp2 = length3;
        if (null !== tail) {
          tmp3 = tail;
          tmp4 = length3;
          iter = tail;
          tmp2 = length3;
          if (length3 > length2) {
            prev = tmp3.prev;
            diff = tmp4 - 1;
            iter = prev;
            tmp2 = diff;
            while (null !== prev) {
              tmp3 = prev;
              tmp4 = diff;
              iter = prev;
              tmp2 = diff;
              if (diff <= length2) {
                break;
              }
            }
          }
        }
        if (null !== iter) {
          if (tmp2 > num2) {
            arr = arr.push(iter.value);
            diff1 = tmp2 - 1;
            prev2 = iter.prev;
            while (null !== prev2) {
              iter = prev2;
              tmp2 = diff1;
              if (diff1 <= num2) {
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
    self = this;
    head = this.head;
    iter = head;
    if (null !== head) {
      do {
        iter.prev = iter.next;
        iter.next = iter.prev;
        iter = iter.prev;
      } while (null !== iter);
    }
    self.head = this.tail;
    self.tail = head;
    return self;
  }
}
class Node {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = Node;
    if (this instanceof Node) {
      self.list = importAll;
      self.value = global;
      if (require) {
        require.next = self;
        self.prev = require;
      } else {
        tmp10 = null;
        self.prev = null;
      }
      if (importDefault) {
        importDefault.prev = self;
        self.next = importDefault;
      } else {
        tmp11 = null;
        self.next = null;
      }
      return;
    } else {
      obj = Object.create(tmp.prototype);
      tmp3 = obj;
      tmp4 = global;
      tmp5 = require;
      tmp6 = importDefault;
      tmp7 = importAll;
      tmpResult = tmp(global, require, importDefault, importAll);
      tmp9 = tmpResult;
      return tmpResult;
    }
  }
}
Yallist.Node = Node;
Yallist.create = Yallist;

export default Yallist;