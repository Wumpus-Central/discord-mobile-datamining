// === Module 374: ? ===

// Module 374
import normalizeColorDefault from "normalizeColor" /* 51 */;
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef356 from "module_356" /* 356 */;
import result1Default from "result1" /* 357 */;
import _modDef366 from "module_366" /* 366 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

const AnimatedColor = arg1;
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
  } catch (err) {
  }
}
function processColor(arg0) {
  if (null == arg0) {
    return null;
  } else {
    let tmp = arg0;
    if (arg0) {
      tmp = typeof arg0.r === "number";
    }
    if (tmp) {
      tmp = typeof arg0.g === "number";
    }
    if (tmp) {
      tmp = typeof arg0.b === "number";
    }
    if (tmp) {
      tmp = typeof arg0.a === "number";
    }
    if (tmp) {
      return arg0;
    } else {
      const tmp4 = normalizeColorDefault(arg0);
      if (null == tmp4) {
        return null;
      } else {
        if (typeof tmp4 === "object") {
          let obj = AnimatedColor(52);
          const processColorObjectResult = obj.processColorObject(tmp4);
          if (null != processColorObjectResult) {
            return processColorObjectResult;
          }
        } else if (typeof tmp4 === "number") {
          obj = { r: (4278190080 & tmp4) >>> 24, g: (16711680 & tmp4) >>> 16, b: (65280 & tmp4) >>> 8, a: (255 & tmp4) / 255 };
          return obj;
        }
        return null;
      }
    }
  }
}
_possibleConstructorReturnDefault;
const React6 = { r: 0, g: 0, b: 0, a: 1 };
class AnimatedColor {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_3(this, AnimatedColor);
    items = [];
    items[0] = arg1;
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(AnimatedColor);
    tmp3 = closure_4;
    if (closure_7()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp6 = global;
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._suspendCallbacks = 0;
    if (global == null) {
      tmp6 = closure_8;
    }
    tmp7 = tmp6;
    if (tmp6) {
      tmp8 = closure_1;
      tmp9 = c2;
      tmp7 = tmp6.r instanceof closure_1(c2[8]);
    }
    if (tmp7) {
      tmp10 = closure_1;
      tmp11 = c2;
      tmp7 = tmp6.g instanceof closure_1(c2[8]);
    }
    if (tmp7) {
      tmp12 = closure_1;
      tmp13 = c2;
      tmp7 = tmp6.b instanceof closure_1(c2[8]);
    }
    if (tmp7) {
      tmp14 = closure_1;
      tmp15 = c2;
      tmp7 = tmp6.a instanceof closure_1(c2[8]);
    }
    if (tmp7) {
      ({ r: obj2.r, g: obj2.g, b: obj2.b, a: obj2.a } = tmp6);
    } else {
      tmp16 = closure_9;
      tmp17 = closure_9(tmp6);
      if (tmp17 == null) {
        tmp17 = closure_8;
      }
      tmp18 = tmp17;
      if (tmp17) {
        tmp18 = typeof tmp17.r === "number";
      }
      if (tmp18) {
        tmp18 = typeof tmp17.g === "number";
      }
      if (tmp18) {
        tmp18 = typeof tmp17.b === "number";
      }
      if (tmp18) {
        tmp18 = typeof tmp17.a === "number";
      }
      if (tmp18) {
        obj = { rgbaValue: null };
        obj.rgbaValue = tmp17;
        obj1 = obj;
      } else {
        obj1 = { nativeColor: null, rgbaValue: null };
        obj1.nativeColor = tmp17;
        tmp19 = closure_8;
        obj1.rgbaValue = closure_8;
      }
      ({ rgbaValue, nativeColor } = obj1);
      if (nativeColor) {
        tmp3Result.nativeColor = nativeColor;
      }
      tmp20 = closure_1;
      tmp21 = c2;
      tmp22 = new.target;
      tmp23 = new.target;
      tmp24 = new closure_1(c2[8])(rgbaValue.r);
      tmp25 = tmp24;
      tmp3Result.r = tmp24;
      tmp26 = new.target;
      tmp27 = new.target;
      tmp28 = new closure_1(c2[8])(rgbaValue.g);
      tmp29 = tmp28;
      tmp3Result.g = tmp28;
      tmp30 = new.target;
      tmp31 = new.target;
      tmp32 = new closure_1(c2[8])(rgbaValue.b);
      tmp33 = tmp32;
      tmp3Result.b = tmp32;
      tmp34 = new.target;
      tmp35 = new.target;
      tmp36 = new closure_1(c2[8])(rgbaValue.a);
      tmp37 = tmp36;
      tmp3Result.a = tmp36;
    }
    useNativeDriver = undefined;
    if (arg1 != null) {
      useNativeDriver = arg1.useNativeDriver;
    }
    if (useNativeDriver) {
      __makeNativeResult = tmp3Result.__makeNative();
    }
    return tmp3Result;
  }
}
_inherits(AnimatedColor, _modDef366);
const entry = {
  key: "setValue",
  value: function setValue(arg0) {
    const self = this;
    c1 = false;
    if (this.__isNative) {
      const API = result1Default.API;
      const result = API.setWaitingForIdentifier(self.__getNativeTag().toString());
      const str = self.__getNativeTag();
    }
    let tmp4 = processColor(arg0);
    if (tmp4 == null) {
      tmp4 = closure_8;
    }
    closure_0 = tmp4;
    const result1 = self._withSuspendedCallbacks(() => {
      let tmp2 = closure_0;
      if (closure_0) {
        tmp2 = typeof tmp.r === "number";
      }
      if (tmp2) {
        tmp2 = typeof tmp.g === "number";
      }
      if (tmp2) {
        tmp2 = typeof tmp.b === "number";
      }
      if (tmp2) {
        tmp2 = typeof tmp.a === "number";
      }
      if (tmp2) {
        const r = tmp3.r;
        r.setValue(tmp.r);
        const g = tmp3.g;
        g.setValue(tmp.g);
        const b = tmp3.b;
        b.setValue(tmp.b);
        const a = tmp3.a;
        a.setValue(tmp.a);
        if (null != tmp3.nativeColor) {
          tmp3.nativeColor = null;
          c1 = true;
        }
      } else if (tmp3.nativeColor !== tmp) {
        tmp3.nativeColor = tmp;
        c1 = true;
      }
    });
    if (self.__isNative) {
      const str2 = self.__getNativeTag();
      if (c1) {
        const API2 = result1Default.API;
        const result2 = API2.updateAnimatedNodeConfig(str2, self.__getNativeConfig());
      }
      const API3 = result1Default.API;
      const result3 = API3.unsetWaitingForIdentifier(str2.toString());
    } else {
      AnimatedColor(356).flushValue(self);
      const obj = AnimatedColor(356);
    }
    self.__callListeners(self.__getValue());
  }
};
let items = [
  entry,
  {
    key: "setOffset",
    value: function setOffset(arg0) {
      const r = this.r;
      r.setOffset(arg0.r);
      const g = this.g;
      g.setOffset(arg0.g);
      const b = this.b;
      b.setOffset(arg0.b);
      const a = this.a;
      a.setOffset(arg0.a);
    }
  },
  {
    key: "flattenOffset",
    value: function flattenOffset() {
      const r = this.r;
      r.flattenOffset();
      const g = this.g;
      g.flattenOffset();
      const b = this.b;
      b.flattenOffset();
      const a = this.a;
      a.flattenOffset();
    }
  },
  {
    key: "extractOffset",
    value: function extractOffset() {
      const r = this.r;
      r.extractOffset();
      const g = this.g;
      g.extractOffset();
      const b = this.b;
      b.extractOffset();
      const a = this.a;
      a.extractOffset();
    }
  },
  {
    key: "stopAnimation",
    value: function stopAnimation(fn) {
      const self = this;
      const r = this.r;
      r.stopAnimation();
      const g = this.g;
      g.stopAnimation();
      const b = this.b;
      b.stopAnimation();
      const a = this.a;
      a.stopAnimation();
      if (fn) {
        fn(self.__getValue());
      }
    }
  },
  {
    key: "resetAnimation",
    value: function resetAnimation(fn) {
      const self = this;
      const r = this.r;
      r.resetAnimation();
      const g = this.g;
      g.resetAnimation();
      const b = this.b;
      b.resetAnimation();
      const a = this.a;
      a.resetAnimation();
      if (fn) {
        fn(self.__getValue());
      }
    }
  },
  {
    key: "__getValue",
    value: function __getValue() {
      const self = this;
      if (null != this.nativeColor) {
        let nativeColor = self.nativeColor;
      } else {
        ({ r, g } = self);
        const b = self.b;
        const __getValueResult = r.__getValue();
        const a = self.a;
        const __getValueResult1 = g.__getValue();
        const _HermesInternal = HermesInternal;
        nativeColor = "rgba(" + __getValueResult + ", " + __getValueResult1 + ", " + b.__getValue() + ", " + a.__getValue() + ")";
        const __getValueResult2 = b.__getValue();
      }
      return nativeColor;
    }
  },
  {
    key: "__attach",
    value: function __attach() {
      const r = this.r;
      r.__addChild(this);
      const g = this.g;
      g.__addChild(this);
      const b = this.b;
      b.__addChild(this);
      const a = this.a;
      a.__addChild(this);
      const self = this;
      let fn = metroRequire(hasOwnProperty(AnimatedColor.prototype), "__attach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__detach",
    value: function __detach() {
      const r = this.r;
      r.__removeChild(this);
      const g = this.g;
      g.__removeChild(this);
      const b = this.b;
      b.__removeChild(this);
      const a = this.a;
      a.__removeChild(this);
      const self = this;
      let fn = metroRequire(hasOwnProperty(AnimatedColor.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "_withSuspendedCallbacks",
    value: function _withSuspendedCallbacks(fn) {
      this._suspendCallbacks = this._suspendCallbacks + 1;
      fn();
      this._suspendCallbacks = this._suspendCallbacks - 1;
    }
  },
  {
    key: "__callListeners",
    value: function __callListeners(arg0) {
      const self = this;
      if (0 === this._suspendCallbacks) {
        let fn = metroRequire(hasOwnProperty(AnimatedColor.prototype), "__callListeners", self);
        if (typeof fn === "function") {
          fn = (items) => fn.apply(self, items);
        }
        const items = [arg0];
        fn(items);
      }
    }
  },
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const r = this.r;
      r.__makeNative(arg0);
      const g = this.g;
      g.__makeNative(arg0);
      const b = this.b;
      b.__makeNative(arg0);
      const a = this.a;
      a.__makeNative(arg0);
      const self = this;
      let fn = metroRequire(hasOwnProperty(AnimatedColor.prototype), "__makeNative", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const obj = { type: "color", r: null, g: null, b: null, a: null, nativeColor: this.nativeColor, debugID: this.__getDebugID() };
      const r = this.r;
      obj.r = r.__getNativeTag();
      const g = this.g;
      obj.g = g.__getNativeTag();
      const b = this.b;
      obj.b = b.__getNativeTag();
      const a = this.a;
      obj.a = a.__getNativeTag();
      return obj;
    }
  }
];

export default _createClass(AnimatedColor, items);
export const getRgbaValueAndNativeColor = function getRgbaValueAndNativeColor(arg0) {
  let tmp = processColor(arg0);
  if (tmp == null) {
    tmp = rgbaValue;
  }
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = typeof tmp.r === "number";
  }
  if (tmp2) {
    tmp2 = typeof tmp.g === "number";
  }
  if (tmp2) {
    tmp2 = typeof tmp.b === "number";
  }
  if (tmp2) {
    tmp2 = typeof tmp.a === "number";
  }
  if (tmp2) {
    let obj = { rgbaValue: tmp };
  } else {
    obj = { nativeColor: tmp, rgbaValue };
  }
  return obj;
};