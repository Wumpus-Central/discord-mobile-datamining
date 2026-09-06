// _runtime/metro/06675__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

let ExclusiveGesture = fn;
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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class ComposedGesture {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = c2(this, ExclusiveGesture);
    tmp2 = closure_4;
    obj = closure_4(ExclusiveGesture);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
_inherits(ComposedGesture, fn(6676).Gesture);
const entry = {
  key: "prepareSingleGesture",
  value: function prepareSingleGesture(item10006, simultaneousGestures, requireGesturesToFail) {
    if (item10006 instanceof ExclusiveGesture(6676).BaseGesture) {
      if (item10006.relationsSnapshot == null) {
        let obj = {
          simultaneousWith: item10006.config.simultaneousWith,
          requireToFail: item10006.config.requireToFail,
        };
        item10006.relationsSnapshot = obj;
      }
      obj = {};
      const merged = Object.assign(item10006.config);
      const simultaneousWith = item10006.relationsSnapshot.simultaneousWith;
      if (undefined === simultaneousWith) {
        const items = [];
        HermesBuiltin.arraySpread(simultaneousGestures, 0);
        let items1 = items;
      } else {
        items1 = [];
        HermesBuiltin.arraySpread(simultaneousGestures, HermesBuiltin.arraySpread(simultaneousWith, 0));
      }
      obj.simultaneousWith = items1;
      const requireToFail = item10006.relationsSnapshot.requireToFail;
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
  },
};
let items = [
  entry,
  {
    key: "prepare",
    value: function prepare() {
      const self = this;
      for (const item10006 of tmp) {
        let prepareSingleGestureResult = self.prepareSingleGesture(
          item10006,
          self.simultaneousGestures,
          self.requireGesturesToFail,
        );
        continue;
      }
    },
  },
  {
    key: "initialize",
    value: function initialize() {
      for (const item10006 of tmp) {
        let initializeResult = item10006.initialize();
        continue;
      }
    },
  },
  {
    key: "toGestureArray",
    value: function toGestureArray() {
      const gestures = this.gestures;
      return gestures.flatMap((toGestureArray) => toGestureArray.toGestureArray());
    },
  },
];
const importDefaultResultResult = _createClass(ComposedGesture, items);
class SimultaneousGesture {
  constructor() {
    self = this;
    tmp = c2(this, ExclusiveGesture);
    tmp2 = closure_4;
    obj = closure_4(ExclusiveGesture);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
_inherits(SimultaneousGesture, importDefaultResultResult);
const entry1 = {
  key: "prepare",
  value: function prepare() {
    let length;
    const self = this;
    let num = 0;
    if (0 < this.gestures.length) {
      do {
        let prepareSingleGestureResult = self.prepareSingleGesture(
          self.gestures[num],
          tmp[num],
          self.requireGesturesToFail,
        );
        num = num + 1;
        length = self.gestures.length;
      } while (num < length);
    }
  },
};
let items1 = [entry1];
class ExclusiveGesture {
  constructor() {
    self = this;
    tmp = c2(this, ExclusiveGesture);
    tmp2 = closure_4;
    obj = closure_4(ExclusiveGesture);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
_inherits(ExclusiveGesture, importDefaultResultResult);
const entry2 = {
  key: "prepare",
  value: function prepare() {
    let length;
    const self = this;
    let items = [];
    let num = 0;
    if (0 < this.gestures.length) {
      do {
        let requireGesturesToFail = self.requireGesturesToFail;
        let prepareSingleGestureResult = self.prepareSingleGesture(
          self.gestures[num],
          self.simultaneousGestures,
          requireGesturesToFail.concat(items),
        );
        items = items.concat(tmp[num]);
        num = num + 1;
        length = self.gestures.length;
      } while (num < length);
    }
  },
};
let items2 = [entry2];

export const ComposedGesture = importDefaultResultResult;
export const SimultaneousGesture = _createClass(SimultaneousGesture, items1);
export const ExclusiveGesture = _createClass(ExclusiveGesture, items2);
