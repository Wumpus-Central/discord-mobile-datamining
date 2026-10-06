// _runtime/06167_ComposedGesture.js
import CALLBACK_TYPE from "06168_CALLBACK_TYPE.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class ComposedGesture {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, ComposedGesture);
    const obj = _getPrototypeOf(ComposedGesture);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result.gestures = [];
    tmp3Result.simultaneousGestures = [];
    tmp3Result.requireGesturesToFail = [];
    tmp3Result.gestures = items;
    return tmp3Result;
  }
}
_inherits(ComposedGesture, CALLBACK_TYPE.Gesture);
const entry = {
  key: "prepareSingleGesture",
  value: function prepareSingleGesture(item10006, simultaneousGestures, requireGesturesToFail) {
    let items1;
    let items3;
    if (item10006 instanceof CALLBACK_TYPE.BaseGesture) {
      if (item10006.relationsSnapshot == null) {
        const obj = {
          simultaneousWith: item10006.config.simultaneousWith,
          requireToFail: item10006.config.requireToFail,
        };
        item10006.relationsSnapshot = obj;
      }
      const obj2 = { simultaneousWith: items1, requireToFail: items3 };
      const merged = Object.assign(item10006.config);
      const simultaneousWith = item10006.relationsSnapshot.simultaneousWith;
      if (undefined === simultaneousWith) {
        const items = [];
        HermesBuiltin.arraySpread(items, simultaneousGestures, 0);
        items1 = items;
      } else {
        items1 = [];
        HermesBuiltin.arraySpread(items1, simultaneousGestures, HermesBuiltin.arraySpread(items1, simultaneousWith, 0));
      }
      const requireToFail = item10006.relationsSnapshot.requireToFail;
      if (undefined === requireToFail) {
        const items2 = [];
        HermesBuiltin.arraySpread(items2, requireGesturesToFail, 0);
        items3 = items2;
      } else {
        items3 = [];
        HermesBuiltin.arraySpread(items3, requireGesturesToFail, HermesBuiltin.arraySpread(items3, requireToFail, 0));
      }
      item10006.config = obj2;
    } else if (item10006 instanceof ComposedGesture) {
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
      const gestures = this.gestures;
      for (const item10006 of gestures) {
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
      const gestures = this.gestures;
      for (const item10006 of gestures) {
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
    let constructResult;
    const self = this;
    _classCallCheck(this, SimultaneousGesture);
    const obj = _getPrototypeOf(SimultaneousGesture);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
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
    let constructResult;
    const self = this;
    _classCallCheck(this, ExclusiveGesture);
    const obj = _getPrototypeOf(ExclusiveGesture);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
const importDefaultResultResult1 = _createClass(SimultaneousGesture, items1);
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
const ComposedGesture_export = importDefaultResultResult;
const SimultaneousGesture_export = importDefaultResultResult1;
const ExclusiveGesture_export = _createClass(ExclusiveGesture, items2);

export { ComposedGesture_export as ComposedGesture };
export { SimultaneousGesture_export as SimultaneousGesture };
export { ExclusiveGesture_export as ExclusiveGesture };
