// _runtime/12667_ArraySet.js
import _mod12666 from "metro/12666__.js";

require = arg1;
const dependencyMap = arg6;
class ArraySet {
  constructor() {
    if (closure_3) {
      _Map = Map;
      tmp3 = new.target;
      tmp4 = new.target;
      map = new Map();
    } else {
      _Object = Object;
      tmp = null;
      map = Object.create(null);
    }
    { _array: [] }._set = map;
    return;
  }
  static fromArray(arg0, arg1) {
    obj1 = Object.create(ArraySet.prototype);
    obj = { _array: [] };
    if (closure_3) {
      _Map = Map;
      tmp4 = new.target;
      tmp5 = new.target;
      map = new Map();
    } else {
      _Object = Object;
      tmp2 = null;
      map = Object.create(null);
    }
    obj._set = map;
    length = arg0.length;
    for (let num = 0; num < length; num = num + 1) {
      addResult = obj.add(arg0[num], arg1);
    }
    return obj;
  }
  size() {
    self = this;
    if (closure_3) {
      length = self._set.size;
    } else {
      tmp = globalThis;
      _Object = Object;
      length = Object.getOwnPropertyNames(self._set).length;
    }
    return length;
  }
  add(arg0, arg1) {
    tmp = closure_3;
    toSetStringResult = arg0;
    if (!closure_3) {
      tmp3 = closure_0;
      tmp4 = closure_1;
      obj = closure_0(closure_1[0]);
      toSetStringResult = obj.toSetString(arg0);
    }
    self = this;
    if (tmp) {
      hasItem = self.has(arg0);
    } else {
      tmp5 = hasOwnProperty;
      call = hasOwnProperty.call;
      _set = self._set;
      hasItem = typeof call === "unknown" ? tmp5(toSetStringResult) : call(_set, toSetStringResult);
    }
    length = self._array.length;
    tmp7 = hasItem;
    if (hasItem) {
      tmp8 = arg1;
      tmp7 = !arg1;
    }
    if (!tmp7) {
      _array = self._array;
      arr1 = _array.push(arg0);
    }
    if (!hasItem) {
      _set2 = self._set;
      if (tmp) {
        result = _set2.set(arg0, length);
      } else {
        _set2[toSetStringResult] = length;
      }
    }
    return;
  }
  has(arg0) {
    self = this;
    if (closure_3) {
      _set2 = self._set;
      return _set2.has(arg0);
    } else {
      tmp = closure_0;
      tmp2 = closure_1;
      obj = closure_0(closure_1[0]);
      toSetStringResult = obj.toSetString(arg0);
      tmp4 = hasOwnProperty;
      call = hasOwnProperty.call;
      _set = self._set;
      return typeof call === "unknown" ? tmp4(toSetStringResult) : call(_set, toSetStringResult);
    }
  }
  indexOf(arg0) {
    self = this;
    if (closure_3) {
      _set2 = self._set;
      value = _set2.get(arg0);
      num = 0;
      if (value >= 0) {
        return value;
      }
    } else {
      tmp = closure_0;
      tmp2 = closure_1;
      obj = closure_0(closure_1[0]);
      toSetStringResult = obj.toSetString(arg0);
      tmp4 = hasOwnProperty;
      call = hasOwnProperty.call;
      _set = self._set;
      if (typeof call === "unknown" ? tmp4(toSetStringResult) : call(_set, toSetStringResult)) {
        return self._set[toSetStringResult];
      }
    }
    error = new Error("\"" + arg0 + "\" is not in the set.");
    throw error;
  }
  at(arg0) {
    if (arg0 >= 0) {
      if (arg0 < this._array.length) {
        return this._array[arg0];
      }
    }
    error = new Error("No element indexed by " + arg0);
    throw error;
  }
  toArray() {
    _array = this._array;
    return _array.slice();
  }
}
let closure_3 = typeof Map !== "undefined";

export { ArraySet };