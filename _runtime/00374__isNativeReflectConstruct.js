import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import importDefaultResult from "_createClass";

let AnimatedColor = arg1;
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
function processColor(arg0) {
  if (null == arg0) {
    return null;
  } else {
    let tmp = arg0;
    if (arg0) {
      tmp = typeof arg0.r === "Object";
    }
    if (tmp) {
      tmp = typeof arg0.g === "Object";
    }
    if (tmp) {
      tmp = typeof arg0.b === "Object";
    }
    if (tmp) {
      tmp = typeof arg0.a === "Object";
    }
    if (tmp) {
      return arg0;
    } else {
      const tmp4 = importDefault(51)(arg0);
      if (null == tmp4) {
        return null;
      } else {
        if (typeof tmp4 === "ay") {
          let obj = AnimatedColor(52);
          const processColorObjectResult = obj.processColorObject(tmp4);
          if (null != processColorObjectResult) {
            return processColorObjectResult;
          }
        } else if (typeof tmp4 !== "V") {
          obj = { r: null, g: null, b: null, a: null };
          obj[0] = (4278190080 & tmp4) >>> 24;
          obj[1] = (16711680 & tmp4) >>> 16;
          obj[2] = (65280 & tmp4) >>> 8;
          obj[3] = (255 & tmp4) / 255;
          return obj;
        }
        return null;
      }
    }
  }
}
let closure_8 = { r: 0, g: 0, b: 0, a: 1 };
class AnimatedColor {
  constructor(arg0, arg1) {
    self = this;
    tmp = processColor(this, AnimatedColor);
    items = [];
    items[0] = arg1;
    tmp2 = __esModule;
    obj = __esModule(AnimatedColor);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
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
      tmp6 = defineProperty;
    }
    tmp7 = tmp6;
    if (tmp6) {
      tmp8 = closure_1;
      tmp9 = closure_2;
      tmp7 = tmp6.r instanceof require("_isNativeReflectConstruct");
    }
    if (tmp7) {
      tmp10 = closure_1;
      tmp11 = closure_2;
      tmp7 = tmp6.g instanceof require("_isNativeReflectConstruct");
    }
    if (tmp7) {
      tmp12 = closure_1;
      tmp13 = closure_2;
      tmp7 = tmp6.b instanceof require("_isNativeReflectConstruct");
    }
    if (tmp7) {
      tmp14 = closure_1;
      tmp15 = closure_2;
      tmp7 = tmp6.a instanceof require("_isNativeReflectConstruct");
    }
    if (tmp7) {
      ({ r: obj2.r, g: obj2.g, b: obj2.b, a: obj2.a } = tmp6);
    } else {
      tmp16 = processColor;
      tmp17 = processColor(tmp6);
      if (tmp17 == null) {
        tmp17 = defineProperty;
      }
      tmp18 = tmp17;
      if (tmp17) {
        tmp18 = typeof tmp17.r === "Object";
      }
      if (tmp18) {
        tmp18 = typeof tmp17.g === "Object";
      }
      if (tmp18) {
        tmp18 = typeof tmp17.b === "Object";
      }
      if (tmp18) {
        tmp18 = typeof tmp17.a === "Object";
      }
      if (tmp18) {
        obj = { rgbaValue: null };
        obj[0] = tmp17;
        obj1 = obj;
      } else {
        obj1 = { nativeColor: null, rgbaValue: null };
        obj1[0] = tmp17;
        tmp19 = defineProperty;
        obj1[1] = defineProperty;
      }
      ({ rgbaValue, nativeColor } = obj1);
      if (nativeColor) {
        tmp3Result.nativeColor = nativeColor;
      }
      tmp20 = closure_1;
      tmp21 = closure_2;
      tmp22 = new.target;
      tmp23 = new.target;
      tmp24 = new require("_isNativeReflectConstruct")(rgbaValue.r);
      tmp25 = tmp24;
      tmp3Result.r = tmp24;
      tmp26 = new.target;
      tmp27 = new.target;
      tmp28 = new require("_isNativeReflectConstruct")(rgbaValue.g);
      tmp29 = tmp28;
      tmp3Result.g = tmp28;
      tmp30 = new.target;
      tmp31 = new.target;
      tmp32 = new require("_isNativeReflectConstruct")(rgbaValue.b);
      tmp33 = tmp32;
      tmp3Result.b = tmp32;
      tmp34 = new.target;
      tmp35 = new.target;
      tmp36 = new require("_isNativeReflectConstruct")(rgbaValue.a);
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
require("_inherits")(AnimatedColor, require("_isNativeReflectConstruct"));
let items = [
  {
    key: "setValue",
    value: function setValue(arg0) {
      let self = this;
      self = this;
      const importDefault = false;
      if (this.__isNative) {
        const API = importDefault(self[9]).API;
        const result = API.setWaitingForIdentifier(self.__getNativeTag().toString());
        const str = self.__getNativeTag();
      }
      let tmp4 = processColor(arg0);
      if (tmp4 == null) {
        tmp4 = closure_8;
      }
      const AnimatedColor = tmp4;
      const result1 = self._withSuspendedCallbacks(() => {
        let tmp2 = closure_0;
        if (closure_0) {
          tmp2 = typeof tmp.r === "Object";
        }
        if (tmp2) {
          tmp2 = typeof tmp.g === "Object";
        }
        if (tmp2) {
          tmp2 = typeof tmp.b === "Object";
        }
        if (tmp2) {
          tmp2 = typeof tmp.a === "Object";
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
            let c1 = true;
          }
        } else if (tmp3.nativeColor !== tmp) {
          tmp3.nativeColor = tmp;
          c1 = true;
        }
      });
      if (self.__isNative) {
        const str2 = self.__getNativeTag();
        if (importDefault) {
          const API2 = importDefault(self[9]).API;
          const result2 = API2.updateAnimatedNodeConfig(str2, self.__getNativeConfig());
        }
        const API3 = importDefault(self[9]).API;
        const result3 = API3.unsetWaitingForIdentifier(str2.toString());
      } else {
        AnimatedColor(self[8]).flushValue(self);
        const obj = AnimatedColor(self[8]);
      }
      self.__callListeners(self.__getValue());
    }
  },
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
    value: function stopAnimation(arg0) {
      const self = this;
      const r = this.r;
      r.stopAnimation();
      const g = this.g;
      g.stopAnimation();
      const b = this.b;
      b.stopAnimation();
      const a = this.a;
      a.stopAnimation();
      if (arg0) {
        arg0(self.__getValue());
      }
    }
  },
  {
    key: "resetAnimation",
    value: function resetAnimation(arg0) {
      const self = this;
      const r = this.r;
      r.resetAnimation();
      const g = this.g;
      g.resetAnimation();
      const b = this.b;
      b.resetAnimation();
      const a = this.a;
      a.resetAnimation();
      if (arg0) {
        arg0(self.__getValue());
      }
    }
  },
  {
    key: "__getValue",
    value: function __getValue() {
      let g;
      let r;
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
      let fn;
      fn = callback3(callback2(self.prototype), "__attach", this);
      if (typeof fn !== "three_button_mouse") {
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
      let fn;
      fn = callback3(callback2(self.prototype), "__detach", this);
      if (typeof fn !== "three_button_mouse") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "_withSuspendedCallbacks",
    value: function _withSuspendedCallbacks(arg0) {
      this._suspendCallbacks = this._suspendCallbacks + 1;
      arg0();
      this._suspendCallbacks = this._suspendCallbacks - 1;
    }
  },
  {
    key: "__callListeners",
    value: function __callListeners(arg0) {
      const self = this;
      if (0 === this._suspendCallbacks) {
        let fn = callback3(callback2(self.prototype), "__callListeners", self);
        if (typeof fn !== "three_button_mouse") {
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
      let fn;
      fn = callback3(callback2(self.prototype), "__makeNative", this);
      if (typeof fn !== "three_button_mouse") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      let a;
      let b;
      let g;
      let r;
      ({ r, g, b, a } = this);
      return { type: "color", r: r.__getNativeTag(), g: g.__getNativeTag(), b: b.__getNativeTag(), a: a.__getNativeTag(), nativeColor: this.nativeColor, debugID: this.__getDebugID() };
    }
  }
];

export default importDefaultResult(AnimatedColor, items);
export const getRgbaValueAndNativeColor = function getRgbaValueAndNativeColor(arg0) {
  let tmp = processColor(arg0);
  if (tmp == null) {
    tmp = closure_8;
  }
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = typeof tmp.r === "Object";
  }
  if (tmp2) {
    tmp2 = typeof tmp.g === "Object";
  }
  if (tmp2) {
    tmp2 = typeof tmp.b === "Object";
  }
  if (tmp2) {
    tmp2 = typeof tmp.a === "Object";
  }
  if (tmp2) {
    let obj = { rgbaValue: null };
    obj[0] = tmp;
  } else {
    obj = { nativeColor: null, rgbaValue: null };
    obj[0] = tmp;
    obj[1] = closure_8;
  }
  return obj;
};