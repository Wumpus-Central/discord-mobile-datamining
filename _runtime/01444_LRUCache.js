// _runtime/01444_LRUCache.js
import PseudoMap from "01445_PseudoMap.js";
import Yallist from "01447_Yallist.js";
import _mod1448 from "metro/01448__.js";

const require = globalThis.__r;
let _require, c5, closure_1, dependencyMap;

function priv(self, lruList, max) {
  let tmp3;
  let tmp4;
  if (closure_3[lruList]) {
    tmp3 = closure_3[lruList];
  } else {
    tmp3 = closure_2(lruList);
    closure_3[lruList] = tmp3;
  }
  if (2 === arguments.length) {
    tmp4 = self[tmp3];
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
  constructor(max) {
    const self = this;
    if (this instanceof LRUCache) {
      let obj = max;
      if (typeof max === "number") {
        obj = { max };
        const obj2 = { max };
      }
      if (!obj) {
        obj = {};
      }
      const tmp5 = priv(self, "max", obj.max);
      let tmp6 = !tmp5;
      if (tmp5) {
        tmp6 = typeof tmp5 !== "number";
      }
      if (!tmp6) {
        tmp6 = tmp5 <= 0;
      }
      if (tmp6) {
        priv(self, "max", Infinity);
      }
      let tmp8 = obj.length || naiveLength;
      if (typeof tmp8 !== "function") {
        tmp8 = naiveLength;
      }
      priv(self, "lengthCalculator", tmp8);
      const tmp10 = obj.stale || false;
      priv(self, "allowStale", tmp10);
      const tmp12 = obj.maxAge || 0;
      priv(self, "maxAge", tmp12);
      priv(self, "dispose", obj.dispose);
      self.reset();
    } else {
      const tmpResult = LRUCache(max);
      return tmpResult;
    }
  }
  rforEach(call, arg1) {
    let prev;
    const self = this;
    let tail = priv(self, "lruList").tail;
    if (null !== tail) {
      do {
        prev = tail.prev;
        let tmp7 = forEachStep(self, call, tail, tmp);
        tail = prev;
      } while (null !== prev);
    }
  }
  forEach(call, arg1) {
    let next;
    const self = this;
    let iter = priv(self, "lruList").head;
    if (null !== iter) {
      do {
        next = iter.next;
        let tmp7 = forEachStep(self, call, iter, tmp);
        iter = next;
      } while (null !== next);
    }
  }
  keys() {
    const obj = priv(this, "lruList");
    const toArrayResult = obj.toArray();
    return toArrayResult.map((key) => key.key, this);
  }
  values() {
    const obj = priv(this, "lruList");
    const toArrayResult = obj.toArray();
    return toArrayResult.map((value) => value.value, this);
  }
  reset() {
    const self = this;
    const length = priv(this, "dispose") && priv(self, "lruList") && priv(self, "lruList").length;
    if (length) {
      const tmpResult = priv(self, "lruList");
      const item = tmpResult.forEach(function (key) {
        const obj = priv(this, "dispose");
        obj.call(this, key.key, key.value);
      }, self);
    }
    const tmp3 = new PseudoMap();
    priv(self, "cache", tmp3);
    const tmp5 = new Yallist();
    priv(self, "lruList", tmp5);
    priv(self, "length", 0);
  }
  dump() {
    const arr = priv(this, "lruList");
    const mapped = arr.map(function (maxAge) {
      let now;
      let flag = false;
      if (maxAge) {
        const self = this;
        if (maxAge.maxAge) {
          let tmp5;
          const _Date = Date;
          const diff = Date.now() - maxAge.now;
          if (maxAge.maxAge) {
            tmp5 = diff > maxAge.maxAge;
          } else {
            tmp5 = priv(self, "maxAge") && diff > priv(self, "maxAge");
          }
          flag = tmp5;
        } else {
          flag = false;
        }
      }
      if (!flag) {
        const obj = { k: null, v: null, e: now + maxAge };
        ({ key: obj.k, value: obj.v, maxAge, now } = maxAge);
        if (!maxAge) {
          maxAge = 0;
        }
        return obj;
      }
    }, this);
    const toArrayResult = mapped.toArray();
    return toArrayResult.filter((item) => item);
  }
  dumpLru() {
    return priv(this, "lruList");
  }
  inspect(arg0, arg1) {
    let closure_0;
    let closure_4;
    let self = this;
    _require = arg1;
    dependencyMap = "LRUCache {";
    let c2 = false;
    let tmp = priv;
    let flag = false;
    if (priv(this, "allowStale")) {
      dependencyMap = `${closure_1}
      allowStale: true`;
      let flag2 = true;
      c2 = true;
      flag = true;
    }
    const tmpResult = tmp(self, "max");
    let flag3 = flag;
    const tmp4 = tmpResult && tmpResult !== Infinity;
    if (tmp4) {
      if (flag) {
        dependencyMap = `${closure_1},`;
      }
      const tmp8 = dependencyMap;
      let obj = require("metro/01448__.js");
      dependencyMap = `${closure_1}
      max: ${obj.inspect(tmp3, arg1)}`;
      c2 = true;
      flag3 = true;
    }
    const tmpResult4 = tmp(self, "maxAge");
    closure_3 = tmpResult4;
    let flag5 = flag3;
    if (tmpResult4) {
      if (flag3) {
        let str4 = ",";
        dependencyMap = `${closure_1},`;
      }
      let tmp13 = dependencyMap;
      let obj2 = require("metro/01448__.js");
      dependencyMap = `${closure_1}
      maxAge: ${obj2.inspect(tmp9, arg1)}`;
      c2 = true;
      flag5 = true;
    }
    const tmpResult5 = tmp(self, "lengthCalculator");
    priv = tmpResult5;
    let flag7 = flag5;
    const tmp15 = tmpResult5 && tmpResult5 !== c5;
    if (tmp15) {
      if (flag5) {
        dependencyMap = `${closure_1},`;
      }
      let str7 = "length";
      const inspect = require("metro/01448__.js").inspect;
      require("metro/01448__.js");
      dependencyMap = `${closure_1}
      length: ${inspect(tmp(self, "length"), arg1)}`;
      c2 = true;
      flag7 = true;
    }
    c5 = false;
    const tmpResult6 = tmp(self, "lruList");
    const item = tmpResult6.forEach(function (key) {
      const tmp = c5;
      if (tmp) {
        closure_1 = `${closure_1},
        `;
      } else {
        if (c2) {
          closure_1 = `${closure_1},
      `;
        }
        c5 = true;
        closure_1 = `${closure_1}
        `;
      }
      const obj = _mod1448;
      const str4 = obj.inspect(key.key);
      const parts = str4.split("\n");
      const obj2 = { value: key.value };
      const joined = parts.join("\n  ");
      if (key.maxAge !== closure_3) {
        obj2.maxAge = key.maxAge;
      }
      if (closure_4 !== naiveLength) {
        obj2.length = key.length;
      }
      let flag2 = false;
      if (key) {
        const self = this;
        if (key.maxAge) {
          let tmp13;
          const _Date = Date;
          const diff = Date.now() - key.now;
          if (key.maxAge) {
            tmp13 = diff > key.maxAge;
          } else {
            tmp13 = priv(self, "maxAge") && diff > priv(self, "maxAge");
          }
          flag2 = tmp13;
        } else {
          flag2 = false;
        }
      }
      if (flag2) {
        obj2.stale = true;
      }
      const tmp6Result = _mod1448;
      const str7 = tmp6Result.inspect(obj2, closure_0);
      const parts1 = str7.split("\n");
      closure_1 = `${closure_1}${tmp8} => ${obj5.join("\n  ")}`;
    });
    const tmp23 = c5 || flag7;
    if (tmp23) {
      dependencyMap = `${closure_1}
    `;
    }
    dependencyMap = `${closure_1}}`;
    return `${closure_1}}`;
  }
  set(key, value, arg2) {
    const self = this;
    const tmp = arg2 || priv(self, "maxAge");
    let num = 0;
    if (tmp) {
      const _Date = Date;
      num = Date.now();
    }
    const obj = priv(self, "lengthCalculator");
    const callResult = obj.call(self, value, key);
    const tmp4Result = priv(self, "cache");
    if (tmp4Result.has(key)) {
      if (callResult > priv(self, "max")) {
        const tmp4Result13 = priv(self, "cache");
        const iter = tmp4Result13.get(key);
        if (iter) {
          if (priv(self, "dispose")) {
            const tmp4Result14 = priv(self, "dispose");
            tmp4Result14.call(globalThis, iter.value.key, iter.value.value);
          }
          priv(self, "length", priv(self, "length") - iter.value.length);
          const tmp4Result16 = priv(self, "cache");
          tmp4Result16.delete(iter.value.key);
          const tmp4Result17 = priv(self, "lruList");
          tmp4Result17.removeNode(iter);
        }
        return false;
      } else {
        const tmp4Result18 = priv(self, "cache");
        const iter3 = tmp4Result18.get(key).value;
        if (priv(self, "dispose")) {
          const tmp4Result19 = priv(self, "dispose");
          tmp4Result19.call(self, key, iter3.value);
        }
        iter3.now = num;
        iter3.maxAge = tmp;
        iter3.value = value;
        priv(self, "length", priv(self, "length") + (callResult - iter3.length));
        iter3.length = callResult;
        value = self.get(key);
        trim(self);
        return true;
      }
    } else {
      let flag;
      Object.create(Entry.prototype);
      const obj3 = { key, value, length: callResult, now: num, maxAge: tmp || 0 };
      if (obj3.length > priv(self, "max")) {
        flag = false;
        if (priv(self, "dispose")) {
          const tmp4Result21 = priv(self, "dispose");
          tmp4Result21.call(self, key, value);
          flag = false;
        }
      } else {
        priv(self, "length", priv(self, "length") + obj3.length);
        const tmp4Result23 = priv(self, "lruList");
        tmp4Result23.unshift(obj3);
        const tmp4Result24 = priv(self, "cache");
        const result = tmp4Result24.set(key, priv(self, "lruList").head);
        trim(self);
        flag = true;
      }
      return flag;
    }
  }
  has(arg0) {
    const self = this;
    const obj = priv(this, "cache");
    let hasItem = obj.has(arg0);
    if (hasItem) {
      const tmpResult = priv(self, "cache");
      const value = tmpResult.get(arg0).value;
      let flag = false;
      if (value) {
        if (value.maxAge) {
          let tmp5;
          const _Date = Date;
          const diff = Date.now() - value.now;
          if (value.maxAge) {
            tmp5 = diff > value.maxAge;
          } else {
            tmp5 = priv(self, "maxAge") && diff > priv(self, "maxAge");
          }
          flag = tmp5;
        } else {
          flag = false;
        }
      }
      hasItem = !flag;
    }
    return hasItem;
  }
  get(arg0) {
    return get(this, arg0, true);
  }
  peek(arg0) {
    return get(this, arg0, false);
  }
  pop() {
    const self = this;
    const iter = priv(this, "lruList").tail;
    let value = null;
    if (iter) {
      if (iter) {
        if (priv(self, "dispose")) {
          const tmpResult = priv(self, "dispose");
          tmpResult.call(globalThis, iter.value.key, iter.value.value);
        }
        priv(self, "length", priv(self, "length") - iter.value.length);
        const tmpResult5 = priv(self, "cache");
        tmpResult5.delete(iter.value.key);
        const tmpResult6 = priv(self, "lruList");
        tmpResult6.removeNode(iter);
      }
      value = iter.value;
    }
    return value;
  }
  del(arg0) {
    const self = this;
    const obj = priv(this, "cache");
    const iter = obj.get(arg0);
    if (iter) {
      if (priv(self, "dispose")) {
        const tmpResult = priv(self, "dispose");
        tmpResult.call(globalThis, iter.value.key, iter.value.value);
      }
      priv(self, "length", priv(self, "length") - iter.value.length);
      const tmpResult5 = priv(self, "cache");
      tmpResult5.delete(iter.value.key);
      const tmpResult6 = priv(self, "lruList");
      tmpResult6.removeNode(iter);
    }
  }
  load(arg0) {
    const self = this;
    this.reset();
    let diff = arg0.length - 1;
    if (0 <= diff) {
      do {
        let tmp4 = arg0[diff];
        let num = tmp4.e;
        if (!num) {
          num = 0;
        }
        if (0 === num) {
          let result = self.set(tmp4.k, tmp4.v);
        } else {
          let diff1 = num - tmp2;
          if (diff1 > 0) {
            let result1 = self.set(tmp4.k, tmp4.v, diff1);
          }
        }
        diff = diff - 1;
      } while (0 <= diff);
    }
  }
  prune() {
    const self = this;
    const arr = priv(this, "cache");
    const item = arr.forEach((item, index) => {
      get(self, index, false);
    });
  }
}
function forEachStep(self, call, iter, arg3) {
  let key;
  let value2;
  const value = iter.value;
  let flag = false;
  if (value) {
    if (value.maxAge) {
      let tmp5;
      const _Date = Date;
      const diff = Date.now() - value.now;
      if (value.maxAge) {
        tmp5 = diff > value.maxAge;
      } else {
        tmp5 = priv(self, "maxAge") && diff > priv(self, "maxAge");
      }
      flag = tmp5;
    } else {
      flag = false;
    }
  }
  let tmp6 = value;
  if (flag) {
    if (iter) {
      if (priv(self, "dispose")) {
        const tmp7Result = priv(self, "dispose");
        tmp7Result.call(globalThis, iter.value.key, iter.value.value);
      }
      priv(self, "length", priv(self, "length") - iter.value.length);
      const tmp7Result5 = priv(self, "cache");
      tmp7Result5.delete(iter.value.key);
      const tmp7Result6 = priv(self, "lruList");
      tmp7Result6.removeNode(iter.value);
    }
    tmp6 = value;
  }
  if (tmp6) {
    ({ value: value2, key } = tmp6);
    call.call(arg3, value2, key, self);
  }
}
function get(self, arg1, arg2) {
  const obj = priv(self, "cache");
  const iter = obj.get(arg1);
  let tmp2;
  if (iter) {
    let iter2;
    const value = iter.value;
    let flag = false;
    if (value) {
      if (value.maxAge) {
        let tmp5;
        const _Date = Date;
        const diff = Date.now() - value.now;
        if (value.maxAge) {
          tmp5 = diff > value.maxAge;
        } else {
          tmp5 = priv(self, "maxAge") && diff > priv(self, "maxAge");
        }
        flag = tmp5;
      } else {
        flag = false;
      }
    }
    if (flag) {
      if (iter) {
        if (priv(self, "dispose")) {
          const tmpResult = priv(self, "dispose");
          tmpResult.call(globalThis, iter.value.key, iter.value.value);
        }
        priv(self, "length", priv(self, "length") - iter.value.length);
        const tmpResult6 = priv(self, "cache");
        tmpResult6.delete(iter.value.key);
        const tmpResult7 = priv(self, "lruList");
        tmpResult7.removeNode(iter);
      }
      iter2 = value;
    } else {
      iter2 = value;
      if (arg2) {
        const tmpResult8 = priv(self, "lruList");
        tmpResult8.unshiftNode(iter);
        iter2 = value;
      }
    }
    tmp2 = iter2 && iter2.value;
  }
  return tmp2;
}
function trim(self) {
  const tmp2 = priv(self, "length");
  if (tmp2 > priv(self, "max")) {
    let iter2 = priv(self, "lruList").tail;
    const tmpResult = priv(self, "length");
    if (tmpResult > priv(self, "max")) {
      if (null !== iter2) {
        while (true) {
          let prev = iter2.prev;
          let tmp3 = iter2;
          if (tmp3) {
            let iter = iter2.value;
            if (priv(self, "dispose")) {
              let tmp4Result = priv(self, "dispose");
              let callResult = tmp4Result.call(globalThis, iter.key, iter.value);
            }
            let tmp4Result4 = priv(self, "length", priv(self, "length") - iter.length);
            let tmp4Result5 = priv(self, "cache");
            let deleteResult = tmp4Result5.delete(iter.key);
            let tmp4Result6 = priv(self, "lruList");
            let removeNodeResult = tmp4Result6.removeNode(iter2);
          }
          let tmp9 = priv(self, "length");
          if (tmp9 <= priv(self, "max")) {
            break;
          } else {
            iter2 = prev;
            if (null === prev) {
              break;
            }
          }
        }
      }
    }
  }
}
function Entry(key, value, length, now, arg4) {
  const entry = { key, value, length, now, maxAge: num };
}
let closure_3 = {};
let closure_2 = typeof Symbol === "function" ? (arg0) => Symbol.for(arg0) : (arg0) => "_" + arg0;
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
  enumerable: true,
};
Object.defineProperty(LRUCache.prototype, "max", obj);
let obj2 = {
  set(max) {
    priv(this, "allowStale", max);
  },
  get() {
    return priv(this, "allowStale");
  },
  enumerable: true,
};
Object.defineProperty(LRUCache.prototype, "allowStale", obj2);
let obj3 = {
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
  enumerable: true,
};
Object.defineProperty(LRUCache.prototype, "maxAge", obj3);
const obj4 = {
  set(fn) {
    let tmp = fn;
    if (typeof fn !== "function") {
      tmp = naiveLength;
    }
    let self = this;
    if (tmp !== priv(this, "lengthCalculator")) {
      priv(self, "lengthCalculator", tmp);
      priv(self, "length", 0);
      const tmp2Result4 = priv(self, "lruList");
      const item = tmp2Result4.forEach(function (value) {
        const self = this;
        const obj = priv(this, "lengthCalculator");
        value.length = obj.call(self, value.value, value.key);
        priv(self, "length", priv(self, "length") + value.length);
      }, self);
    }
    trim(self);
  },
  get() {
    return priv(this, "lengthCalculator");
  },
  enumerable: true,
};
Object.defineProperty(LRUCache.prototype, "lengthCalculator", obj4);
const obj5 = {
  get() {
    return priv(this, "length");
  },
  enumerable: true,
};
Object.defineProperty(LRUCache.prototype, "length", obj5);
const obj6 = {
  get() {
    return priv(this, "lruList").length;
  },
  enumerable: true,
};
Object.defineProperty(LRUCache.prototype, "itemCount", obj6);

export default LRUCache;
