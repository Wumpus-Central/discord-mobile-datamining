// _runtime/metro/12835__.js
const require = globalThis.__r;

function createItem(data) {
  return { prev: null, next: null, data };
}
let cursor = null;
class List {
  constructor() {
    return;
  }
  updateCursors(arg0, arg1, arg2, arg3) {
    iter = this.cursor;
    if (null !== iter) {
      do {
        tmp = iter;
        if (iter.prev === global) {
          iter.prev = require;
        }
        if (iter.next === importDefault) {
          iter.next = importAll;
        }
        iter = iter.cursor;
      } while (null !== iter);
    }
    return;
  }
  getSize() {
    head = this.head;
    num = 0;
    num2 = 0;
    while (head) {
      num = num + 1;
      num2 = num;
    }
    return num2;
  }
  fromArray(arg0) {
    self = this;
    this.head = null;
    num = 0;
    tmp = null;
    tmp2 = null;
    if (0 < global.length) {
      do {
        obj = { prev: null, next: null, data: null };
        obj.data = global[num];
        tmp3 = num;
        tmp4 = tmp;
        if (null !== tmp) {
          tmp.next = obj;
        } else {
          self.head = obj;
        }
        obj.prev = tmp;
        num = num + 1;
        tmp = obj;
        tmp2 = obj;
      } while (num < global.length);
    }
    self.tail = tmp2;
    return self;
  }
  toArray() {
    iter = this.head;
    items = [];
    while (iter) {
      arr1 = items.push(iter.data);
      iter = iter.next;
    }
    return items;
  }
  isEmpty() {
    return null === this.head;
  }
  first() {
    tmp = this.head && this.head.data;
    return tmp;
  }
  last() {
    tmp = this.tail && this.tail.data;
    return tmp;
  }
  each(arg0, arg1) {
    self = this;
    tmp = require;
    if (undefined === require) {
      tmp = self;
    }
    head = self.head;
    tmp2 = cursor;
    if (null !== cursor) {
      cursor = tmp2.cursor;
      tmp2.prev = null;
      tmp2.next = head;
      tmp2.cursor = self.cursor;
      obj = tmp2;
    } else {
      obj = { prev: null, next: null, cursor: null };
      obj.next = head;
      obj.cursor = self.cursor;
    }
    self.cursor = obj;
    if (null !== obj.next) {
      do {
        iter = obj.next;
        obj.next = iter.next;
        call = global.call;
        data = iter.data;
        if (typeof call === "unknown") {
          tmp3 = global(data, iter, self);
        } else {
          tmp4 = global;
          tmp5 = tmp;
          tmp6 = data;
          tmp7 = iter;
          tmp8 = self;
          callResult = call(tmp, data, iter, self);
        }
      } while (null !== obj.next);
    }
    cursor = self.cursor;
    self.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = cursor;
    return;
  }
  eachRight(arg0, arg1) {
    self = this;
    tmp = require;
    if (undefined === require) {
      tmp = self;
    }
    tail = self.tail;
    tmp2 = cursor;
    if (null !== cursor) {
      cursor = tmp2.cursor;
      tmp2.prev = tail;
      tmp2.next = null;
      tmp2.cursor = self.cursor;
      obj = tmp2;
    } else {
      obj = { prev: null, next: null, cursor: null };
      obj.prev = tail;
      obj.cursor = self.cursor;
    }
    self.cursor = obj;
    if (null !== obj.prev) {
      do {
        prev = obj.prev;
        obj.prev = prev.prev;
        call = global.call;
        data = prev.data;
        if (typeof call === "unknown") {
          tmp3 = global(data, prev, self);
        } else {
          tmp4 = global;
          tmp5 = tmp;
          tmp6 = data;
          tmp7 = prev;
          tmp8 = self;
          callResult = call(tmp, data, prev, self);
        }
      } while (null !== obj.prev);
    }
    cursor = self.cursor;
    self.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = cursor;
    return;
  }
  reduce(arg0, arg1, arg2) {
    self = this;
    tmp = importDefault;
    if (undefined === importDefault) {
      tmp = self;
    }
    head = self.head;
    tmp2 = cursor;
    if (null !== cursor) {
      cursor = tmp2.cursor;
      tmp2.prev = null;
      tmp2.next = head;
      tmp2.cursor = self.cursor;
      obj = tmp2;
    } else {
      obj = { prev: null, next: null, cursor: null };
      obj.next = head;
      obj.cursor = self.cursor;
    }
    tmp3 = require;
    self.cursor = obj;
    tmp4 = require;
    if (null !== obj.next) {
      do {
        iter = obj.next;
        obj.next = iter.next;
        call = global.call;
        data = iter.data;
        tmp5 = tmp3;
        if (typeof call === "unknown") {
          tmp6 = tmp;
          tmp7 = tmp3;
          tmp8 = data;
          tmp9 = iter;
          tmp10 = self;
          callResult = global(tmp5, data, iter, self);
        } else {
          tmp12 = global;
          tmp13 = tmp;
          tmp14 = tmp3;
          tmp15 = data;
          tmp16 = iter;
          tmp17 = self;
          callResult = call(tmp, tmp5, data, iter, self);
        }
        tmp3 = callResult;
        tmp4 = callResult;
      } while (null !== obj.next);
    }
    cursor = self.cursor;
    self.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = cursor;
    return tmp4;
  }
  reduceRight(arg0, arg1, arg2) {
    self = this;
    tmp = importDefault;
    if (undefined === importDefault) {
      tmp = self;
    }
    tail = self.tail;
    tmp2 = cursor;
    if (null !== cursor) {
      cursor = tmp2.cursor;
      tmp2.prev = tail;
      tmp2.next = null;
      tmp2.cursor = self.cursor;
      obj = tmp2;
    } else {
      obj = { prev: null, next: null, cursor: null };
      obj.prev = tail;
      obj.cursor = self.cursor;
    }
    tmp3 = require;
    self.cursor = obj;
    tmp4 = require;
    if (null !== obj.prev) {
      do {
        prev = obj.prev;
        obj.prev = prev.prev;
        call = global.call;
        data = prev.data;
        tmp5 = tmp3;
        if (typeof call === "unknown") {
          tmp6 = tmp;
          tmp7 = tmp3;
          tmp8 = data;
          tmp9 = prev;
          tmp10 = self;
          callResult = global(tmp5, data, prev, self);
        } else {
          tmp12 = global;
          tmp13 = tmp;
          tmp14 = tmp3;
          tmp15 = data;
          tmp16 = prev;
          tmp17 = self;
          callResult = call(tmp, tmp5, data, prev, self);
        }
        tmp3 = callResult;
        tmp4 = callResult;
      } while (null !== obj.prev);
    }
    cursor = self.cursor;
    self.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = cursor;
    return tmp4;
  }
  nextUntil(arg0, arg1, arg2) {
    if (null !== global) {
      self = this;
      tmp = importDefault;
      if (undefined === importDefault) {
        tmp = self;
      }
      tmp2 = cursor;
      if (null !== cursor) {
        cursor = tmp2.cursor;
        tmp2.prev = null;
        tmp2.next = global;
        tmp2.cursor = self.cursor;
        obj = tmp2;
      } else {
        obj = { prev: null, next: null, cursor: null };
        obj.next = global;
        obj.cursor = self.cursor;
      }
      self.cursor = obj;
      if (null !== obj.next) {
        tmp6 = require;
        iter2 = obj.next;
        obj.next = iter2.next;
        call2 = require.call;
        data2 = iter2.data;
        if (typeof call2 === "unknown") {
          call2Result = require(data2, iter2, self);
        } else {
          tmp7 = require;
          tmp8 = tmp;
          tmp9 = data2;
          tmp10 = iter2;
          tmp11 = self;
          call2Result = call2(tmp, data2, iter2, self);
        }
        if (!call2Result) {
          while (null !== obj.next) {
            iter = obj.next;
            obj.next = iter.next;
            call = require.call;
            data = iter.data;
            if (typeof call === "unknown") {
              callResult = require(data, iter, self);
            } else {
              tmp12 = require;
              tmp13 = tmp;
              tmp14 = data;
              tmp15 = iter;
              tmp16 = self;
              callResult = call(tmp, data, iter, self);
            }
            if (callResult) {
              break;
            }
          }
        }
      }
      cursor = self.cursor;
      self.cursor = cursor.cursor;
      cursor.prev = null;
      cursor.next = null;
      tmp5 = cursor;
      cursor.cursor = cursor;
    }
    return;
  }
  prevUntil(arg0, arg1, arg2) {
    if (null !== global) {
      self = this;
      tmp = importDefault;
      if (undefined === importDefault) {
        tmp = self;
      }
      tmp2 = cursor;
      if (null !== cursor) {
        cursor = tmp2.cursor;
        tmp2.prev = global;
        tmp2.next = null;
        tmp2.cursor = self.cursor;
        obj = tmp2;
      } else {
        obj = { prev: null, next: null, cursor: null };
        obj.prev = global;
        obj.cursor = self.cursor;
      }
      self.cursor = obj;
      if (null !== obj.prev) {
        tmp6 = require;
        prev2 = obj.prev;
        obj.prev = prev2.prev;
        call2 = require.call;
        data2 = prev2.data;
        if (typeof call2 === "unknown") {
          call2Result = require(data2, prev2, self);
        } else {
          tmp7 = require;
          tmp8 = tmp;
          tmp9 = data2;
          tmp10 = prev2;
          tmp11 = self;
          call2Result = call2(tmp, data2, prev2, self);
        }
        if (!call2Result) {
          while (null !== obj.prev) {
            prev = obj.prev;
            obj.prev = prev.prev;
            call = require.call;
            data = prev.data;
            if (typeof call === "unknown") {
              callResult = require(data, prev, self);
            } else {
              tmp12 = require;
              tmp13 = tmp;
              tmp14 = data;
              tmp15 = prev;
              tmp16 = self;
              callResult = call(tmp, data, prev, self);
            }
            if (callResult) {
              break;
            }
          }
        }
      }
      cursor = self.cursor;
      self.cursor = cursor.cursor;
      cursor.prev = null;
      cursor.next = null;
      tmp5 = cursor;
      cursor.cursor = cursor;
    }
    return;
  }
  some(arg0, arg1) {
    self = this;
    tmp = require;
    iter = this.head;
    if (undefined === require) {
      tmp = self;
    }
    if (null !== iter) {
      while (true) {
        call = global.call;
        data = iter.data;
        if (typeof call === "unknown") {
          callResult = global(data, iter, self);
        } else {
          tmp4 = global;
          tmp5 = tmp;
          tmp6 = data;
          tmp7 = iter;
          tmp8 = self;
          callResult = call(tmp, data, tmp2, self);
        }
        if (callResult) {
          break;
        } else {
          iter = iter.next;
        }
      }
      flag = true;
      return true;
    }
    return false;
  }
  map(arg0, arg1) {
    self = this;
    tmp = require;
    obj1 = Object.create(List.prototype);
    obj = { cursor: null, head: null, tail: null };
    iter = this.head;
    if (undefined === require) {
      tmp = self;
    }
    if (null !== iter) {
      do {
        call = global.call;
        data = iter.data;
        if (typeof call === "unknown") {
          callResult = global(data, iter, self);
        } else {
          tmp6 = global;
          tmp7 = tmp;
          tmp8 = data;
          tmp9 = iter;
          tmp10 = self;
          callResult = call(tmp, data, tmp3, self);
        }
        appendDataResult = obj.appendData(callResult);
        iter = iter.next;
      } while (null !== iter);
    }
    return obj;
  }
  filter(arg0, arg1) {
    self = this;
    tmp = require;
    obj1 = Object.create(List.prototype);
    obj = { cursor: null, head: null, tail: null };
    iter = this.head;
    if (undefined === require) {
      tmp = self;
    }
    if (null !== iter) {
      do {
        call = global.call;
        data = iter.data;
        if (typeof call === "unknown") {
          callResult = global(data, iter, self);
        } else {
          tmp6 = global;
          tmp7 = tmp;
          tmp8 = data;
          tmp9 = iter;
          tmp10 = self;
          callResult = call(tmp, data, tmp3, self);
        }
        if (callResult) {
          appendDataResult = obj.appendData(iter.data);
        }
        iter = iter.next;
      } while (null !== iter);
    }
    return obj;
  }
  clear() {
    return;
  }
  copy() {
    obj1 = Object.create(List.prototype);
    obj = { cursor: null, head: null, tail: null };
    iter = this.head;
    if (null !== iter) {
      do {
        obj3 = { prev: null, next: null, data: null };
        obj3.data = iter.data;
        insertResult = obj.insert(obj3);
        iter = iter.next;
      } while (null !== iter);
    }
    return obj;
  }
  prepend(arg0) {
    self = this;
    updateCursorsResult = this.updateCursors(null, global, this.head, global);
    if (null !== this.head) {
      self.head.prev = global;
      global.next = self.head;
    } else {
      self.tail = global;
    }
    self.head = global;
    return self;
  }
  prependData(arg0) {
    obj = { prev: null, next: null, data: global };
    return this.prepend(obj);
  }
  append(arg0) {
    return this.insert(global);
  }
  appendData(arg0) {
    obj = { prev: null, next: null, data: global };
    return this.insert(obj);
  }
  insert(arg0, arg1) {
    self = this;
    if (null != require) {
      tmp6 = self;
      tmp7 = global;
      tmp8 = require;
      tmp9 = global;
      updateCursorsResult = self.updateCursors(require.prev, global, require, global);
      if (null === require.prev) {
        if (self.head !== require) {
          tmp12 = globalThis;
          _Error = Error;
          tmp13 = new.target;
          str = "before doesn't belong to list";
          tmp14 = new.target;
          error = new Error("before doesn't belong to list");
          tmp16 = error;
          throw error;
        } else {
          self.head = global;
          require.prev = global;
          global.next = require;
          updateCursorsResult1 = self.updateCursors(null, global);
        }
      } else {
        require.prev.next = global;
        global.prev = require.prev;
        require.prev = global;
        global.next = require;
      }
    } else {
      tmp = self;
      tmp2 = global;
      tmp3 = null;
      tmp4 = global;
      updateCursorsResult2 = self.updateCursors(self.tail, global, null, global);
      if (null !== self.tail) {
        self.tail.next = global;
        global.prev = self.tail;
      } else {
        self.head = global;
      }
      self.tail = global;
    }
    return self;
  }
  insertData(arg0, arg1) {
    obj = { prev: null, next: null, data: global };
    return this.insert(obj, require);
  }
  remove(arg0) {
    self = this;
    updateCursorsResult = this.updateCursors(global, global.prev, global, global.next);
    if (null !== global.prev) {
      global.prev.next = global.next;
    } else if (self.head !== global) {
      tmp2 = globalThis;
      _Error = Error;
      tmp3 = new.target;
      str = "item doesn't belong to list";
      tmp4 = new.target;
      error = new Error("item doesn't belong to list");
      tmp6 = error;
      throw error;
    } else {
      self.head = global.next;
    }
    if (null !== global.next) {
      global.next.prev = global.prev;
    } else if (self.tail !== global) {
      tmp7 = globalThis;
      _Error2 = Error;
      tmp8 = new.target;
      str2 = "item doesn't belong to list";
      tmp9 = new.target;
      error1 = new Error("item doesn't belong to list");
      tmp11 = error1;
      throw error1;
    } else {
      self.tail = global.prev;
    }
    global.prev = null;
    global.next = null;
    return global;
  }
  push(arg0) {
    obj = { prev: null, next: null, data: global };
    insertResult = this.insert(obj);
    return;
  }
  pop() {
    self = this;
    if (null !== this.tail) {
      return self.remove(self.tail);
    } else {
      return;
    }
  }
  unshift(arg0) {
    obj = { prev: null, next: null, data: global };
    prependResult = this.prepend(obj);
    return;
  }
  shift() {
    self = this;
    if (null !== this.head) {
      return self.remove(self.head);
    } else {
      return;
    }
  }
  prependList(arg0) {
    return this.insertList(global, this.head);
  }
  appendList(arg0) {
    return this.insertList(global);
  }
  insertList(arg0, arg1) {
    self = this;
    if (null === global.head) {
      return self;
    } else {
      tmp7 = require;
      if (null == require) {
        tmp = self;
        tmp2 = null;
        updateCursorsResult = self.updateCursors(self.tail, global.tail, null, global.head);
        if (null !== self.tail) {
          self.tail.next = global.head;
          global.head.prev = self.tail;
        } else {
          self.head = global.head;
        }
        self.tail = global.tail;
        global.head = null;
        global.tail = null;
      }
      tmp4 = self;
      tmp5 = require;
      updateCursorsResult1 = self.updateCursors(require.prev, global.tail, require, global.head);
      if (null !== require.prev) {
        require.prev.next = global.head;
        global.head.prev = require.prev;
      } else {
        self.head = global.head;
      }
      require.prev = global.tail;
      global.tail.next = require;
    }
    return;
  }
  replace(arg0, arg1) {
    self = this;
    if ("head" in require) {
      insertListResult = self.insertList(require, global);
    } else {
      insertResult = self.insert(require, global);
    }
    removeResult = self.remove(global);
    return;
  }
}
List.createItem = createItem;
List.prototype.createItem = createItem;
List.prototype.toJSON = List.prototype.toArray;
List.prototype.forEach = List.prototype.each;
List.prototype.forEachRight = List.prototype.eachRight;

export default List;
