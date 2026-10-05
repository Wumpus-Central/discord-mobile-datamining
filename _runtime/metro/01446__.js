// _runtime/metro/01446__.js
class PseudoMap {
  constructor(arr) {
    const self = this;
    if (this instanceof PseudoMap) {
      self.clear();
      if (arr) {
        if (!(arr instanceof tmp)) {
          const _Map = Map;
          if (typeof Map === "function") {
            const _Map2 = Map;
          }
          const _Array = Array;
          if (Array.isArray(arr)) {
            const item = arr.forEach(function (item) {
              const result = this.set(item[0], item[1]);
            }, self);
          } else {
            const _TypeError2 = TypeError;
            const self4 = this;
            const self5 = this;
            const typeError = new TypeError("invalid argument");
            throw typeError;
          }
        }
        const item1 = arr.forEach(function (item, index) {
          const result = this.set(index, item);
        }, self);
      }
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError1 = new TypeError("Constructor PseudoMap requires 'new'");
      throw typeError1;
    }
  }
  forEach(arg0, arg1) {
    let closure_0 = arg0;
    let tmp = arg1;
    let self = arg1;
    if (!self) {
      tmp = self;
    }
    self = tmp;
    const keys = Object.keys(self._data);
    const item = keys.forEach(function (item) {
      if ("size" !== item) {
        self = this;
        closure_0.call(self, this._data[item].value, this._data[item].key);
      }
    }, self);
  }
  has(arg0) {
    const _data = this._data;
    const text = `_${arg0}`;
    let tmp2 = text;
    let num = 0;
    let tmp3;
    if (hasOwnProperty.call(_data, `_${arg0}`)) {
      while (true) {
        let key = _data[tmp2].key;
        let tmp4 = key === arg0;
        if (!tmp4) {
          let tmp7 = key != key && arg0 != arg0;
          tmp4 = tmp7;
        }
        if (tmp4) {
          break;
        } else {
          let sum = text + num;
          num = num + 1;
          tmp2 = sum;
        }
      }
      tmp3 = _data[tmp2];
    }
    return tmp3;
  }
  get(arg0) {
    const _data = this._data;
    const text = `_${arg0}`;
    let tmp2 = text;
    let num = 0;
    let tmp3;
    if (hasOwnProperty.call(_data, `_${arg0}`)) {
      while (true) {
        let key = _data[tmp2].key;
        let tmp4 = key === arg0;
        if (!tmp4) {
          let tmp7 = key != key && arg0 != arg0;
          tmp4 = tmp7;
        }
        if (tmp4) {
          break;
        } else {
          let sum = text + num;
          num = num + 1;
          tmp2 = sum;
        }
      }
      tmp3 = _data[tmp2];
    }
    return tmp3 && tmp3.value;
  }
  set(key, value) {
    const _data = this._data;
    const text = `_${key}`;
    let tmp2 = text;
    let num = 0;
    let tmp3 = text;
    if (!hasOwnProperty.call(_data, `_${key}`)) {
      _data.size = _data.size + 1;
      Object.create(Entry.prototype);
      const obj = { key, value, _index: tmp3 };
      _data[tmp3] = obj;
    } else {
      while (true) {
        key = _data[tmp2].key;
        let tmp4 = key === key;
        if (!tmp4) {
          let tmp7 = key != key && key != key;
          tmp4 = tmp7;
        }
        if (tmp4) {
          break;
        } else {
          let sum = text + num;
          num = num + 1;
          tmp2 = sum;
          tmp3 = sum;
        }
      }
      _data[tmp2].value = value;
    }
  }
  delete(arg0) {
    const self = this;
    const _data = this._data;
    const text = `_${arg0}`;
    let tmp2 = text;
    let num = 0;
    let tmp3;
    if (hasOwnProperty.call(_data, `_${arg0}`)) {
      while (true) {
        let key = _data[tmp2].key;
        let tmp4 = key === arg0;
        if (!tmp4) {
          let tmp7 = key != key && arg0 != arg0;
          tmp4 = tmp7;
        }
        if (tmp4) {
          break;
        } else {
          let sum = text + num;
          num = num + 1;
          tmp2 = sum;
        }
      }
      tmp3 = _data[tmp2];
    }
    if (tmp3) {
      delete self._data[tmp3._index];
      const _data2 = self._data;
      _data2.size = _data2.size - 1;
    }
  }
  clear() {
    const obj = Object.create(null);
    obj.size = 0;
    Object.defineProperty(this, "_data", { value: obj, enumerable: false, configurable: true, writable: false });
  }
}
function Entry(arg0, arg1, arg2) {}
let obj = {
  get() {
    return this._data.size;
  },
  set(arg0) {},
  enumerable: true,
  configurable: true,
};
Object.defineProperty(PseudoMap.prototype, "size", obj);
const fn = () => {
  const error = new Error("iterators are not implemented in this version");
  throw error;
};
PseudoMap.prototype.entries = fn;
PseudoMap.prototype.keys = fn;
PseudoMap.prototype.values = fn;

export default PseudoMap;
