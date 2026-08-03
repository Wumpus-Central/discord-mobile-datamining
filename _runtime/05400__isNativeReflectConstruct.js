// === Module 5400: _isNativeReflectConstruct ===

// Module 5400 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import importDefaultResult from "_createClass";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult1 from "_inherits";

let ExclusiveGesture = arg1;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class ComposedGesture {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = _isNativeReflectConstruct(this, ExclusiveGesture);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(ExclusiveGesture);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.gestures = [];
    tmp3Result.simultaneousGestures = [];
    tmp3Result.requireGesturesToFail = [];
    tmp3Result.gestures = items;
    return tmp3Result;
  }
}
ExclusiveGesture = ComposedGesture;
importDefaultResult1(ComposedGesture, require("_isNativeReflectConstruct").Gesture);
let obj = {
  key: "prepareSingleGesture",
  value: function prepareSingleGesture(item10006, simultaneousGestures, requireGesturesToFail) {
    if (item10006 instanceof ExclusiveGesture(5378).BaseGesture) {
      const obj = {};
      const merged = Object.assign(item10006.config);
      const simultaneousWith = obj.simultaneousWith;
      if (undefined === simultaneousWith) {
        const items = [];
        HermesBuiltin.arraySpread(simultaneousGestures, 0);
        let items1 = items;
      } else {
        items1 = [];
        HermesBuiltin.arraySpread(simultaneousGestures, HermesBuiltin.arraySpread(simultaneousWith, 0));
      }
      obj.simultaneousWith = items1;
      const requireToFail = obj.requireToFail;
      if (undefined === requireToFail) {
        const items2 = [];
        HermesBuiltin.arraySpread(requireGesturesToFail, 0);
        let items3 = items2;
      } else {
        items3 = [];
        HermesBuiltin.arraySpread(requireGesturesToFail, HermesBuiltin.arraySpread(requireToFail, 0));
      }
      obj.requireToFail = items3;
      item10006.config = obj;
    } else if (item10006 instanceof ExclusiveGesture) {
      item10006.simultaneousGestures = simultaneousGestures;
      item10006.requireGesturesToFail = requireGesturesToFail;
      item10006.prepare();
    }
  }
};
let items = [
  obj,
  {
    key: "prepare",
    value: function prepare() {
      const self = this;
      for (const item10006 of tmp) {
        let prepareSingleGestureResult = self.prepareSingleGesture(item10006, self.simultaneousGestures, self.requireGesturesToFail);
        continue;
      }
    }
  },
  {
    key: "initialize",
    value: function initialize() {
      for (const item10006 of tmp) {
        let initializeResult = item10006.initialize();
        continue;
      }
    }
  },
  {
    key: "toGestureArray",
    value: function toGestureArray() {
      const gestures = this.gestures;
      return gestures.flatMap((toGestureArray) => toGestureArray.toGestureArray());
    }
  }
];
const importDefaultResultResult = importDefaultResult(ComposedGesture, items);
class SimultaneousGesture {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, ExclusiveGesture);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(ExclusiveGesture);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ExclusiveGesture = SimultaneousGesture;
importDefaultResult1(SimultaneousGesture, importDefaultResultResult);
obj = {
  key: "prepare",
  value: function prepare() {
    let length;
    let self = this;
    self = this;
    let num = 0;
    if (0 < this.gestures.length) {
      do {
        let prepareSingleGestureResult = self.prepareSingleGesture(self.gestures[num], tmp[num], self.requireGesturesToFail);
        num = num + 1;
        length = self.gestures.length;
      } while (num < length);
    }
  }
};
let items1 = [obj];
class ExclusiveGesture {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, ExclusiveGesture);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(ExclusiveGesture);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
importDefaultResult1(ExclusiveGesture, importDefaultResultResult);
obj = {
  key: "prepare",
  value: function prepare() {
    let length;
    const self = this;
    let items = [];
    let num = 0;
    if (0 < this.gestures.length) {
      do {
        let requireGesturesToFail = self.requireGesturesToFail;
        let prepareSingleGestureResult = self.prepareSingleGesture(self.gestures[num], self.simultaneousGestures, requireGesturesToFail.concat(items));
        items = items.concat(tmp[num]);
        num = num + 1;
        length = self.gestures.length;
      } while (num < length);
    }
  }
};
let items2 = [obj];

export const ComposedGesture = importDefaultResultResult;
export const SimultaneousGesture = importDefaultResult(SimultaneousGesture, items1);
export const ExclusiveGesture = importDefaultResult(ExclusiveGesture, items2);