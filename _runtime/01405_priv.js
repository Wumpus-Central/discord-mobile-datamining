// _runtime/01405_priv.js
import PseudoMap from "PseudoMap" /* 1406 */;
import Yallist from "Yallist" /* 1408 */;

function priv(self, lruList, max) {
  if (table[lruList]) {
    let tmp3 = tmp[lruList];
  } else {
    tmp3 = callback(lruList);
    tmp[lruList] = tmp3;
  }
  if (2 === arguments.length) {
    let tmp4 = self[tmp3];
  } else {
    tmp4 = max;
    self[tmp3] = max;
  }
  return tmp4;
}
function naiveLength() {
  return 1;
}
class LRUCache {
  constructor(arg0) {
    self = this;
    tmp = LRUCache;
    if (this instanceof LRUCache) {
      obj = global;
      if (typeof global === "number") {
        obj = { max: null };
        obj[0] = global;
      }
      if (!obj) {
        obj = {};
      }
      tmp4 = priv;
      str = "max";
      tmp5 = priv(self, "max", obj.max);
      tmp6 = !tmp5;
      if (tmp5) {
        tmp6 = typeof tmp5 !== "number";
      }
      if (!tmp6) {
        num = 0;
        tmp6 = tmp5 <= 0;
      }
      if (tmp6) {
        num2 = Infinity;
        tmp4Result = tmp4(self, "max", Infinity);
      }
      tmp8 = obj.length || naiveLength;
      if (typeof tmp8 !== "function") {
        tmp8 = naiveLength;
      }
      str2 = "lengthCalculator";
      tmp4Result1 = tmp4(self, "lengthCalculator", tmp8);
      tmp10 = obj.stale || false;
      str3 = "allowStale";
      tmp4Result2 = tmp4(self, "allowStale", tmp10);
      tmp12 = obj.maxAge || 0;
      str4 = "maxAge";
      tmp4Result3 = tmp4(self, "maxAge", tmp12);
      str5 = "dispose";
      tmp4Result4 = tmp4(self, "dispose", obj.dispose);
      resetResult = self.reset();
      return;
    } else {
      tmpResult = tmp(global);
      tmp3 = tmpResult;
      return tmpResult;
    }
  }
  rforEach(arg0, arg1) {
    self = this;
    tmp = require;
    if (!require) {
      tmp = self;
    }
    prev = priv(self, "lruList").tail;
    if (null !== prev) {
      do {
        tmp3 = forEachStep;
        tmp4 = self;
        tmp5 = global;
        tmp6 = prev;
        tmp7 = tmp;
        tmp8 = forEachStep(self, global, prev, tmp);
        prev = prev.prev;
      } while (null !== tmp2);
    }
    return;
  }
  forEach(arg0, arg1) {
    self = this;
    tmp = require;
    if (!require) {
      tmp = self;
    }
    iter = priv(self, "lruList").head;
    if (null !== iter) {
      do {
        tmp3 = forEachStep;
        tmp4 = self;
        tmp5 = global;
        tmp6 = iter;
        tmp7 = tmp;
        tmp8 = forEachStep(self, global, iter, tmp);
        iter = iter.next;
      } while (null !== tmp2);
    }
    return;
  }
  keys() {
    obj = priv(this, "lruList");
    toArrayResult = obj.toArray();
    return toArrayResult.map((key) => key.key, this);
  }
  values() {
    obj = priv(this, "lruList");
    toArrayResult = obj.toArray();
    return toArrayResult.map((value) => value.value, this);
  }
  reset() {
    self = this;
    tmp = priv;
    length = priv(this, "dispose");
    if (length) {
      str = "lruList";
      length = tmp(self, "lruList");
    }
    if (length) {
      str2 = "lruList";
      length = tmp(self, "lruList").length;
    }
    if (length) {
      str3 = "lruList";
      tmpResult = tmp(self, "lruList");
      item = tmpResult.forEach(function(arg0) {
        const self = this;
        const tmp = callback(this, "dispose");
        const call = tmp.call;
        ({ key, value } = arg0);
        if (typeof call === "unknown") {
          tmp(key, value);
        } else {
          call(self, key, value);
        }
      }, self);
    }
    tmp3 = new require("PseudoMap")();
    tmpResult1 = tmp(self, "cache", tmp3);
    tmp5 = new require("Yallist")();
    tmpResult2 = tmp(self, "lruList", tmp5);
    tmpResult3 = tmp(self, "length", 0);
    return;
  }
  dump() {
    arr = priv(this, "lruList");
    mapped = arr.map(function(maxAge) {
      let flag = false;
      if (maxAge) {
        const self = this;
        if (!maxAge.maxAge) {
          flag = false;
        }
        const _Date = Date;
        const diff = Date.now() - maxAge.now;
        if (maxAge.maxAge) {
          let tmp5 = diff > maxAge.maxAge;
        } else {
          tmp5 = callback(self, "maxAge") && diff > callback(self, "maxAge");
          const tmp4 = callback;
        }
      }
      if (!flag) {
        const obj = { k: null, v: null, e: null };
        ({ key: obj[0], value: obj[1], maxAge, now } = maxAge);
        if (!maxAge) {
          maxAge = 0;
        }
        obj[2] = now + maxAge;
        return obj;
      }
    }, this);
    toArrayResult = mapped.toArray();
    return toArrayResult.filter((arg0) => arg0);
  }
  dumpLru() {
    return priv(this, "lruList");
  }
  inspect(arg0, arg1) {
    self = this;
    closure_0 = require;
    closure_1 = "LRUCache {";
    c2 = false;
    tmp = closure_4;
    flag = false;
    if (closure_4(this, "allowStale")) {
      tmp2 = closure_1;
      str = "\n  allowStale: true";
      closure_1 = `${closure_1}
  allowStale: true`;
      flag2 = true;
      c2 = true;
      flag = true;
    }
    tmpResult = tmp(self, "max");
    tmp4 = tmpResult;
    if (tmpResult) {
      num = Infinity;
      tmp4 = tmpResult !== Infinity;
    }
    flag3 = flag;
    if (tmp4) {
      if (flag) {
        tmp5 = closure_1;
        str2 = ",";
        closure_1 = `${closure_1},`;
      }
      tmp6 = closure_1;
      tmp7 = closure_0;
      tmp8 = closure_1;
      obj = require("inspect");
      str3 = "\n  max: ";
      closure_1 = `${closure_1}
  max: ${obj.inspect(tmp3, require)}`;
      flag4 = true;
      c2 = true;
      flag3 = true;
    }
    tmpResult1 = tmp(self, "maxAge");
    closure_3 = tmpResult1;
    flag5 = flag3;
    if (tmpResult1) {
      if (flag3) {
        tmp10 = closure_1;
        str4 = ",";
        closure_1 = `${closure_1},`;
      }
      tmp11 = closure_1;
      tmp12 = closure_0;
      tmp13 = closure_1;
      obj2 = require("inspect");
      str5 = "\n  maxAge: ";
      closure_1 = `${closure_1}
  maxAge: ${obj2.inspect(tmp9, require)}`;
      flag6 = true;
      c2 = true;
      flag5 = true;
    }
    tmpResult2 = tmp(self, "lengthCalculator");
    closure_4 = tmpResult2;
    tmp15 = tmpResult2;
    if (tmpResult2) {
      tmp16 = c5;
      tmp15 = tmpResult2 !== c5;
    }
    flag7 = flag5;
    if (tmp15) {
      if (flag5) {
        tmp17 = closure_1;
        str6 = ",";
        closure_1 = `${closure_1},`;
      }
      tmp18 = closure_1;
      tmp19 = closure_0;
      tmp20 = closure_1;
      tmp21 = require("inspect");
      str7 = "length";
      str8 = "\n  length: ";
      closure_1 = `${closure_1}
  length: ${tmp22(tmp(self, "length"), require)}`;
      flag8 = true;
      c2 = true;
      flag7 = true;
    }
    c5 = false;
    tmpResult3 = tmp(self, "lruList");
    item = tmpResult3.forEach(function(key) {
      if (c5) {
        let table = `${closure_1},
        `;
      } else {
        if (c2) {
          table = `${closure_1},
      `;
        }
        c5 = true;
        table = `${closure_1}
        `;
      }
      let maxAge = key;
      let obj = callback(table[2]);
      const parts = obj.inspect(key.key).split("\n");
      obj = { value: key.value };
      const joined = parts.join("\n  ");
      if (key.maxAge !== closure_3) {
        obj.maxAge = maxAge.maxAge;
      }
      if (callback2 !== c5) {
        obj.length = maxAge.length;
      }
      let flag2 = false;
      if (maxAge) {
        const self = this;
        if (!maxAge.maxAge) {
          flag2 = false;
        }
        const _Date = Date;
        const diff = Date.now() - maxAge.now;
        if (maxAge.maxAge) {
          maxAge = maxAge.maxAge;
          let tmp12 = diff > maxAge;
        } else {
          tmp12 = callback2(self, "maxAge") && diff > callback2(self, "maxAge");
          const tmp11 = callback2;
        }
      }
      if (flag2) {
        obj.stale = true;
      }
      const str4 = obj.inspect(key.key);
      const tmp5 = callback;
      const tmp6 = table;
      const tmp5Result = callback(table[2]);
      const parts1 = callback(table[2]).inspect(obj, callback).split("\n");
      table = `${closure_1}${tmp7} => ${obj5.join("\n  ")}`;
    });
    tmp24 = c5;
    if (!c5) {
      tmp24 = flag7;
    }
    if (tmp24) {
      tmp25 = closure_1;
      str9 = "\n";
      closure_1 = `${closure_1}
`;
    }
    closure_1 = `${closure_1}}`;
    return `${closure_1}}`;
  }
  set(arg0, arg1, arg2) {
    self = this;
    objResult4 = importDefault;
    if (!importDefault) {
      tmp2 = priv;
      str = "maxAge";
      objResult4 = priv(self, "maxAge");
    }
    num = 0;
    if (objResult4) {
      tmp3 = globalThis;
      _Date = Date;
      num = Date.now();
    }
    obj = priv;
    tmp4 = priv(self, "lengthCalculator");
    call = tmp4.call;
    tmp5 = typeof call === "unknown" ? tmp4(require, global) : call(self, require, global);
    str2 = "cache";
    objResult = obj(self, "cache");
    if (objResult.has(global)) {
      str7 = "max";
      if (tmp5 > obj(self, "max")) {
        objResult1 = obj(self, `cache`);
        iter = objResult1.get(global);
        if (!iter) {
          flag3 = false;
          return false;
        } else {
          value = iter.value;
          str9 = "dispose";
          if (!obj(self, "dispose")) {
            value2 = "length";
            key = obj(self, "length");
            objResult2 = obj(self, "length", key - value.length);
            objResult3 = obj(self, `cache`);
            deleteResult = objResult3.delete(value.key);
            str10 = "lruList";
            obj = obj(self, "lruList");
            value = obj.removeNode(iter);
          } else {
            objResult4 = obj(self, "dispose");
            call4 = objResult4.call;
            ({ key, value: value2 } = value);
            if (typeof call4 !== "unknown") {
              tmp27 = globalThis;
              call4Result = call4(globalThis, key, value2);
            }
          }
          tmp21 = globalThis;
          tmpResult = objResult4(key, value2);
        }
      } else {
        objResult5 = obj(self, str2);
        iter2 = objResult5.get(global).value;
        str11 = "dispose";
        if (obj(self, "dispose")) {
          objResult6 = obj(self, "dispose");
          call3 = objResult6.call;
          value = iter2.value;
          if (typeof call3 === "unknown") {
            tmp15Result = objResult6(global, value);
          } else {
            call3Result = call3(self, global, value);
          }
        }
        iter2.now = num;
        iter2.maxAge = objResult4;
        iter2.value = require;
        str8 = "length";
        objResult7 = obj(self, "length", obj(self, "length") + (tmp5 - iter2.length));
        iter2.length = tmp5;
        value1 = self.get(global);
        tmp19 = trim;
        tmp20 = trim(self);
        flag2 = true;
        return true;
      }
    } else {
      tmp6 = Entry;
      obj = Object.create(Entry.prototype);
      obj1 = {};
      obj1.key = global;
      obj1.value = require;
      obj1.length = tmp5;
      obj1.now = num;
      num2 = objResult4;
      if (!objResult4) {
        num2 = 0;
      }
      obj1.maxAge = num2;
      str3 = "max";
      if (obj1.length > obj(self, "max")) {
        str6 = "dispose";
        flag = false;
        if (obj(self, "dispose")) {
          objResult8 = obj(self, "dispose");
          call2 = objResult8.call;
          if (typeof call2 === "unknown") {
            tmp13Result = objResult8(global, require);
            flag = false;
          } else {
            call2Result = call2(self, global, require);
            flag = false;
          }
        }
      } else {
        str4 = "length";
        objResult9 = obj(self, "length", obj(self, "length") + obj1.length);
        str5 = "lruList";
        objResult10 = obj(self, "lruList");
        arr = objResult10.unshift(obj1);
        objResult11 = obj(self, str2);
        result = objResult11.set(global, obj(self, "lruList").head);
        tmp11 = trim;
        tmp12 = trim(self);
        flag = true;
      }
      return flag;
    }
    return;
  }
  has(arg0) {
    self = this;
    tmp = priv;
    obj = priv(this, "cache");
    tmp2 = obj.has(global);
    if (tmp2) {
      tmpResult = tmp(self, "cache");
      maxAge = tmpResult.get(global).value;
      flag = false;
      if (maxAge) {
        if (!maxAge.maxAge) {
          str = "maxAge";
          flag = false;
        }
        tmp3 = globalThis;
        _Date = Date;
        diff = Date.now() - maxAge.now;
        if (maxAge.maxAge) {
          maxAge = maxAge.maxAge;
          tmp5 = diff > maxAge;
        } else {
          str2 = "maxAge";
          tmp5 = tmp(self, "maxAge") && diff > tmp(self, "maxAge");
        }
        tmp6 = tmp5;
      }
      tmp2 = !flag;
    }
    return tmp2;
  }
  get(arg0) {
    return get(this, global, true);
  }
  peek(arg0) {
    return get(this, global, false);
  }
  pop() {
    self = this;
    obj = priv;
    iter = priv(this, "lruList").tail;
    value = null;
    if (iter) {
      if (!iter) {
        value = iter.value;
      } else {
        value1 = iter.value;
        str = "dispose";
        if (!obj(self, "dispose")) {
          str2 = "length";
          key = obj(self, "length");
          objResult = obj(self, "length", key - value1.length);
          str3 = "cache";
          objResult1 = obj(self, "cache");
          value1 = objResult1.delete(value1.key);
          obj = obj(self, `lruList`);
          removeNodeResult = obj.removeNode(iter);
        } else {
          objResult2 = obj(self, "dispose");
          call = objResult2.call;
          ({ key, value } = value1);
          if (typeof call !== "unknown") {
            tmp7 = globalThis;
            callResult = call(globalThis, key, objResult1);
          }
        }
        tmp4 = globalThis;
        tmp3Result = objResult2(key, objResult1);
      }
    }
    return value;
  }
  del(arg0) {
    self = this;
    obj = priv;
    str = "cache";
    obj2 = priv(this, "cache");
    iter = obj2.get(global);
    if (!iter) {
      return;
    } else {
      value = iter.value;
      str2 = "dispose";
      if (!obj(self, "dispose")) {
        value = "length";
        key = obj(self, "length");
        objResult = obj(self, "length", key - value.length);
        objResult1 = obj(self, `cache`);
        deleteResult = objResult1.delete(value.key);
        str3 = "lruList";
        obj = obj(self, "lruList");
        value = obj.removeNode(iter);
      } else {
        objResult2 = obj(self, "dispose");
        call = objResult2.call;
        ({ key, value } = value);
        if (typeof call !== "unknown") {
          tmp6 = globalThis;
          callResult = call(globalThis, key, value);
        }
      }
      tmp2 = globalThis;
      tmpResult = objResult2(key, value);
    }
    return;
  }
  load(arg0) {
    self = this;
    resetResult = this.reset();
    diff = global.length - 1;
    if (0 <= diff) {
      do {
        tmp4 = global[diff];
        num = tmp4.e;
        tmp5 = diff;
        if (!num) {
          num = 0;
        }
        if (0 === num) {
          result = self.set(tmp4.k, tmp4.v);
        } else {
          diff1 = num - tmp2;
          if (diff1 > 0) {
            result1 = self.set(tmp4.k, tmp4.v, diff1);
          }
        }
        diff = diff - 1;
      } while (0 <= diff);
    }
    return;
  }
  prune() {
    self = this;
    arr = priv(this, "cache");
    item = arr.forEach((arg0, arg1) => {
      closure_1_8(self, arg1, false);
    });
    return;
  }
}
function forEachStep(self, call, iter, arg3) {
  let removeNodeResult = iter.value;
  let flag = false;
  if (removeNodeResult) {
    if (!removeNodeResult.maxAge) {
      flag = false;
    }
    const _Date = Date;
    const diff = Date.now() - removeNodeResult.now;
    if (removeNodeResult.maxAge) {
      let tmp5 = diff > removeNodeResult.maxAge;
    } else {
      tmp5 = priv(self, "maxAge") && diff > priv(self, "maxAge");
      const tmp4 = priv;
    }
  }
  let tmp7 = removeNodeResult;
  if (flag) {
    if (!iter) {
      tmp7 = removeNodeResult;
    } else {
      removeNodeResult = iter.value;
      let obj = priv;
      if (!priv(self, "dispose")) {
        key = obj(self, "length");
        let objResult = obj(self, "length", key - removeNodeResult.length);
        objResult = obj(self, "cache");
        objResult.delete(removeNodeResult.key);
        obj = obj(self, "lruList");
        removeNodeResult = obj.removeNode(iter);
      } else {
        const objResult1 = obj(self, "dispose");
        call = objResult1.call;
        ({ key, value: value2 } = removeNodeResult);
        if (typeof call !== "unknown") {
          call(globalThis, key, objResult);
        }
      }
      objResult1(key, objResult);
    }
  }
  if (tmp7) {
    const call2 = call.call;
    ({ value: value3, key: key2 } = tmp7);
    if (typeof call2 === "unknown") {
      call(value3, key2, self);
    } else {
      call2(arg3, value3, key2, self);
    }
  }
}
function get(self) {
  let str = "cache";
  const iter = priv(self, "cache").get(arg1);
  let value;
  if (iter) {
    let removeNodeResult = iter.value;
    let flag = false;
    if (removeNodeResult) {
      if (!removeNodeResult.maxAge) {
        flag = false;
      }
      const _Date = Date;
      const diff = Date.now() - removeNodeResult.now;
      if (removeNodeResult.maxAge) {
        let tmp5 = diff > removeNodeResult.maxAge;
      } else {
        tmp5 = tmp(self, "maxAge") && diff > tmp(self, "maxAge");
      }
    }
    if (flag) {
      if (!iter) {
        let iter2 = removeNodeResult;
      } else {
        removeNodeResult = iter.value;
        if (!tmp(self, "dispose")) {
          value2 = "length";
          key = tmp(self, "length");
          let tmpResult = tmp(self, "length", key - removeNodeResult.length);
          tmpResult = tmp(self, str);
          tmpResult.delete(removeNodeResult.key);
          str = tmp(self, "lruList");
          removeNodeResult = str.removeNode(iter);
        } else {
          const tmpResult1 = tmp(self, "dispose");
          const call = tmpResult1.call;
          ({ key, value: value2 } = removeNodeResult);
          if (typeof call !== "unknown") {
            call(globalThis, key, value2);
          }
        }
        tmpResult1(key, value2);
      }
    } else {
      iter2 = removeNodeResult;
      if (arg2) {
        tmp(self, "lruList").unshiftNode(iter);
        iter2 = removeNodeResult;
        const tmpResult2 = tmp(self, "lruList");
      }
    }
    value = iter2;
    if (iter2) {
      value = iter2.value;
    }
  }
  return value;
}
function trim(self) {
  if (tmp2 > priv(self, "max")) {
    let iter = tmp(self, "lruList").tail;
    if (tmpResult > tmp(self, "max")) {
      if (null !== iter) {
        const prev = iter.prev;
        while (!iter) {
          let tmp9 = priv;
          let tmp10 = priv(self, "length");
          if (tmp10 > priv(self, "max")) {
            iter = prev;
          }
        }
        let removeNodeResultResult1 = iter.value;
        let removeNodeResult = priv;
        if (!priv(self, "dispose")) {
          removeNodeResult(self, "length", removeNodeResult(self, "length") - removeNodeResultResult1.length);
          key = removeNodeResult(self, "cache");
          key.delete(removeNodeResultResult1.key);
          removeNodeResultResult1 = removeNodeResult(self, "lruList");
          removeNodeResult = removeNodeResultResult1.removeNode(iter);
        } else {
          const removeNodeResultResult2 = removeNodeResult(self, "dispose");
          const call = removeNodeResultResult2.call;
          ({ key, value } = removeNodeResultResult1);
          if (typeof call !== "unknown") {
            call(globalThis, key, removeNodeResultResult1);
          }
        }
        removeNodeResultResult2(key, removeNodeResultResult1);
      }
    }
    tmpResult = tmp(self, "length");
  }
}
function Entry(key, value, length, now) {
  let num = arg4;
  if (!arg4) {
    num = 0;
  }
  { key, value, length, now }.maxAge = num;
}
let closure_3 = {};
let closure_2 = typeof Symbol === "function" ? ((arg0) => Symbol.for(arg0)) : ((arg0) => "_" + arg0);
let obj = {
  set(max) {
    let num = max;
    let tmp = !max;
    if (max) {
      tmp = typeof num !== "number";
    }
    if (!tmp) {
      tmp = num <= 0;
    }
    if (tmp) {
      num = Infinity;
    }
    priv(this, "max", num);
    trim(this);
  },
  get() {
    return priv(this, "max");
  },
  enumerable: true
};
Object.defineProperty(LRUCache.prototype, "max", obj);
obj = {
  set(max) {
    priv(this, "allowStale", max);
  },
  get() {
    return priv(this, "allowStale");
  },
  enumerable: true
};
Object.defineProperty(LRUCache.prototype, "allowStale", obj);
obj = {
  set(max) {
    let num = max;
    let tmp = !max;
    if (max) {
      tmp = typeof num !== "number";
    }
    if (!tmp) {
      tmp = num < 0;
    }
    if (tmp) {
      num = 0;
    }
    priv(this, "maxAge", num);
    trim(this);
  },
  get() {
    return priv(this, "maxAge");
  },
  enumerable: true
};
Object.defineProperty(LRUCache.prototype, "maxAge", obj);
Object.defineProperty(LRUCache.prototype, "lengthCalculator", {
  set(fn) {
    let tmp = fn;
    if (typeof fn !== "function") {
      tmp = naiveLength;
    }
    let self = this;
    if (tmp !== priv(this, "lengthCalculator")) {
      tmp2(self, "lengthCalculator", tmp);
      tmp2(self, "length", 0);
      const item = tmp2(self, "lruList").forEach(function(arg0) {
        const self = this;
        const tmp2 = callback(this, "lengthCalculator");
        const call = tmp2.call;
        ({ value, key } = arg0);
        arg0.length = typeof call === "unknown" ? tmp2(value, key) : call(self, value, key);
        callback(self, "length", callback(self, "length") + arg0.length);
      }, self);
      const tmp2Result1 = tmp2(self, "lruList");
    }
    trim(self);
  },
  get() {
    return priv(this, "lengthCalculator");
  },
  enumerable: true
});
Object.defineProperty(LRUCache.prototype, "length", {
  get() {
    return priv(this, "length");
  },
  enumerable: true
});
Object.defineProperty(LRUCache.prototype, "itemCount", {
  get() {
    return priv(this, "lruList").length;
  },
  enumerable: true
});

export default LRUCache;