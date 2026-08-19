// === Module 1407: PseudoMap ===

// Module 1407 (PseudoMap)
class PseudoMap {
  constructor(arg0) {
    self = this;
    if (this instanceof PseudoMap) {
      tmp7 = global;
      clearResult = self.clear();
      if (global) {
        if (!(global instanceof tmp)) {
          tmp9 = globalThis;
          _Map = Map;
          if (typeof Map === "function") {
            _Map2 = Map;
          }
          _Array = Array;
          if (Array.isArray(global)) {
            item = global.forEach(function(item, index) {
              const result = this.set(item[0], item[1]);
            }, self);
          } else {
            _TypeError2 = TypeError;
            tmp10 = new.target;
            str2 = "invalid argument";
            tmp11 = new.target;
            typeError = new TypeError("invalid argument");
            tmp13 = typeError;
            throw typeError;
          }
        }
        item1 = global.forEach(function(item, index) {
          const result = this.set(index, item);
        }, self);
      }
      return;
    } else {
      tmp2 = globalThis;
      _TypeError = TypeError;
      tmp3 = new.target;
      str = "Constructor PseudoMap requires 'new'";
      tmp4 = new.target;
      typeError1 = new TypeError("Constructor PseudoMap requires 'new'");
      tmp6 = typeError1;
      throw typeError1;
    }
  }
  forEach(arg0, arg1) {
    self = this;
    closure_0 = global;
    tmp = require;
    self = require;
    if (!require) {
      tmp = self;
    }
    self = tmp;
    keys = Object.keys(self._data);
    item = keys.forEach(function(item, index) {
      if ("size" !== item) {
        self = this;
        const call = callback.call;
        const value = this._data[item].value;
        if (typeof call === "unknown") {
          callback(value, key);
        } else {
          call(tmp2, value, key);
        }
        tmp2 = self;
      }
    }, self);
    return;
  }
  has(arg0) {
    _data = this._data;
    text = `_${global}`;
    tmp2 = hasOwnProperty;
    call = hasOwnProperty.call;
    tmp3 = text;
    num = 0;
    tmp4 = undefined;
    if (typeof call === "unknown" ? tmp2(`_${global}`) : call(_data, `_${global}`)) {
      while (true) {
        key = _data[tmp3].key;
        tmp5 = key === global;
        tmp6 = tmp3;
        tmp7 = num;
        if (!tmp5) {
          tmp8 = key != key && global != global;
          tmp5 = tmp8;
        }
        if (tmp5) {
          break;
        } else {
          sum = text + num;
          tmp10 = hasOwnProperty;
          call2 = hasOwnProperty.call;
          num = num + 1;
          tmp3 = sum;
        }
      }
      tmp4 = _data[tmp3];
    }
    return tmp4;
  }
  get(arg0) {
    _data = this._data;
    text = `_${global}`;
    tmp2 = hasOwnProperty;
    call = hasOwnProperty.call;
    tmp3 = text;
    num = 0;
    tmp4 = undefined;
    if (typeof call === "unknown" ? tmp2(`_${global}`) : call(_data, `_${global}`)) {
      while (true) {
        key = _data[tmp3].key;
        tmp5 = key === global;
        tmp6 = tmp3;
        tmp7 = num;
        if (!tmp5) {
          tmp8 = key != key && global != global;
          tmp5 = tmp8;
        }
        if (tmp5) {
          break;
        } else {
          sum = text + num;
          tmp10 = hasOwnProperty;
          call2 = hasOwnProperty.call;
          num = num + 1;
          tmp3 = sum;
        }
      }
      tmp4 = _data[tmp3];
    }
    value = tmp4;
    if (tmp4) {
      value = tmp4.value;
    }
    return value;
  }
  set(arg0, arg1) {
    _data = this._data;
    text = `_${global}`;
    tmp2 = hasOwnProperty;
    call = hasOwnProperty.call;
    tmp3 = text;
    num = 0;
    tmp4 = text;
    if (!(typeof call === "unknown" ? tmp2(`_${global}`) : call(_data, `_${global}`))) {
      _data.size = _data.size + 1;
      tmp11 = Entry;
      obj = Object.create(Entry.prototype);
      obj = {};
      obj.key = global;
      obj.value = require;
      obj._index = tmp4;
      _data[tmp4] = obj;
    } else {
      while (true) {
        key = _data[tmp3].key;
        tmp5 = key === global;
        tmp6 = tmp3;
        tmp7 = num;
        if (!tmp5) {
          tmp8 = key != key && global != global;
          tmp5 = tmp8;
        }
        if (tmp5) {
          break;
        } else {
          sum = text + num;
          tmp10 = hasOwnProperty;
          call2 = hasOwnProperty.call;
          num = num + 1;
          tmp3 = sum;
          tmp4 = sum;
        }
      }
      _data[tmp3].value = require;
    }
    return;
  }
  delete(arg0) {
    self = this;
    _data = this._data;
    text = `_${global}`;
    tmp4 = hasOwnProperty;
    call = hasOwnProperty.call;
    tmp5 = text;
    num = 0;
    tmp6 = undefined;
    if (typeof call === "unknown" ? tmp4(`_${global}`) : call(_data, `_${global}`)) {
      while (true) {
        key = _data[tmp5].key;
        tmp7 = key === global;
        tmp8 = tmp5;
        tmp9 = num;
        if (!tmp7) {
          tmp10 = key != key && global != global;
          tmp7 = tmp10;
        }
        if (tmp7) {
          break;
        } else {
          sum = text + num;
          tmp12 = hasOwnProperty;
          call2 = hasOwnProperty.call;
          num = num + 1;
          tmp5 = sum;
        }
      }
      tmp6 = _data[tmp5];
    }
    if (tmp6) {
      _data2 = self._data;
      _index = tmp6._index;
      delete tmp2[tmp];
      _data3 = self._data;
      _data3.size = _data3.size - 1;
    }
    return;
  }
  clear() {
    obj = Object.create(null);
    obj.size = 0;
    definePropertyResult = Object.defineProperty(this, "_data", { value: obj, enumerable: false, configurable: true, writable: false });
    return;
  }
}
function Entry(arg0, arg1, arg2) {

}
Object.defineProperty(PseudoMap.prototype, "size", {
  get() {
    return this._data.size;
  },
  set(arg0) {

  },
  enumerable: true,
  configurable: true
});
const fn = () => {
  error = new Error("iterators are not implemented in this version");
  throw error;
};
PseudoMap.prototype.entries = fn;
PseudoMap.prototype.keys = fn;
PseudoMap.prototype.values = fn;

export default PseudoMap;