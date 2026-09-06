// _runtime/metro/00373__.js
import _modDef366 from "00366__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

const AnimatedValueXY = importDefault;
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
let closure_7 = 1;
class AnimatedValueXY {
  constructor(arg0, arg1) {
    self = this;
    tmp = c2(this, AnimatedValueXY);
    items = [];
    items[0] = arg1;
    tmp2 = closure_4;
    obj = closure_4(AnimatedValueXY);
    tmp3 = closure_3;
    if (metroRequire()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    point = global;
    tmp3Result = tmp3(self, constructResult);
    if (!global) {
      point = { x: 0, y: 0 };
    }
    if (typeof point.x === "number") {
      if (typeof point.y === "number") {
        tmp11 = closure_0;
        tmp12 = closure_1;
        tmp13 = new.target;
        tmp14 = new.target;
        tmp15 = new closure_0(closure_1[6])(point.x);
        tmp16 = tmp15;
        tmp3Result.x = tmp15;
        tmp17 = new.target;
        tmp18 = new.target;
        tmp19 = new closure_0(closure_1[6])(point.y);
        tmp20 = tmp19;
        tmp3Result.y = tmp19;
      }
      tmp3Result._listeners = {};
      useNativeDriver = arg1;
      if (arg1) {
        useNativeDriver = arg1.useNativeDriver;
      }
      if (useNativeDriver) {
        __makeNativeResult = tmp3Result.__makeNative();
      }
      return tmp3Result;
    }
    tmp6 = closure_0;
    tmp7 = closure_1;
    tmp8 = closure_0(closure_1[7]);
    tmp9 = point.x instanceof closure_0(closure_1[6]);
    if (tmp9) {
      tmp9 = point.y instanceof tmp6(tmp7[6]);
    }
    tmp8Result = tmp8(tmp9, "AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.");
    ({ x: obj2.x, y: obj2.y } = point);
    return;
  }
}
_inherits(AnimatedValueXY, _modDef366);
const entry = {
  key: "setValue",
  value: function setValue(arg0) {
    const x = this.x;
    x.setValue(arg0.x);
    const y = this.y;
    y.setValue(arg0.y);
  },
};
let items = [
  entry,
  {
    key: "setOffset",
    value: function setOffset(arg0) {
      const x = this.x;
      x.setOffset(arg0.x);
      const y = this.y;
      y.setOffset(arg0.y);
    },
  },
  {
    key: "flattenOffset",
    value: function flattenOffset() {
      const x = this.x;
      x.flattenOffset();
      const y = this.y;
      y.flattenOffset();
    },
  },
  {
    key: "extractOffset",
    value: function extractOffset() {
      const x = this.x;
      x.extractOffset();
      const y = this.y;
      y.extractOffset();
    },
  },
  {
    key: "__getValue",
    value: function __getValue() {
      const point = { x: null, y: null };
      const x = this.x;
      point.x = x.__getValue();
      const y = this.y;
      point.y = y.__getValue();
      return point;
    },
  },
  {
    key: "resetAnimation",
    value: function resetAnimation(fn) {
      const self = this;
      const x = this.x;
      x.resetAnimation();
      const y = this.y;
      y.resetAnimation();
      if (fn) {
        fn(self.__getValue());
      }
    },
  },
  {
    key: "stopAnimation",
    value: function stopAnimation(fn) {
      const self = this;
      const x = this.x;
      x.stopAnimation();
      const y = this.y;
      y.stopAnimation();
      if (fn) {
        fn(self.__getValue());
      }
    },
  },
  {
    key: "addListener",
    value: function addListener(arg0) {
      const self = this;
      closure_0 = arg0;
      closure_7 = tmp + 1;
      const StringResult = String(+closure_7);
      function jointCallback(arg0) {
        closure_0(self.__getValue());
      }
      const point = { x: x.addListener(jointCallback), y: null };
      ({ x, _listeners } = this);
      const y = this.y;
      point.y = y.addListener(jointCallback);
      _listeners[StringResult] = point;
      return StringResult;
    },
  },
  {
    key: "removeListener",
    value: function removeListener(arg0) {
      const x = this.x;
      x.removeListener(this._listeners[arg0].x);
      const y = this.y;
      y.removeListener(this._listeners[arg0].y);
      delete tmp[tmp2];
    },
  },
  {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      const x = this.x;
      x.removeAllListeners();
      const y = this.y;
      y.removeAllListeners();
      this._listeners = {};
    },
  },
  {
    key: "getLayout",
    value: function getLayout() {
      const rect = { left: this.x, top: this.y };
      return rect;
    },
  },
  {
    key: "getTranslateTransform",
    value: function getTranslateTransform() {
      const items = [{ translateX: this.x }, { translateY: this.y }];
      return items;
    },
  },
  {
    key: "__attach",
    value: function __attach() {
      const x = this.x;
      x.__addChild(this);
      const y = this.y;
      y.__addChild(this);
      const self = this;
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedValueXY.prototype), "__attach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__detach",
    value: function __detach() {
      const x = this.x;
      x.__removeChild(this);
      const y = this.y;
      y.__removeChild(this);
      const self = this;
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedValueXY.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const x = this.x;
      x.__makeNative(arg0);
      const y = this.y;
      y.__makeNative(arg0);
      const self = this;
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedValueXY.prototype), "__makeNative", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
    },
  },
];

export default _createClass(AnimatedValueXY, items);
