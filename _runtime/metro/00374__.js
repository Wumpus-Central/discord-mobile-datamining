// _runtime/metro/00374__.js
import normalizeColorDefault from "../00051_normalizeColor.js";
import PlatformColor from "../00052_PlatformColor.js";
import flushValue from "../00356_flushValue.js";
import get_nativeEventEmitterDefault from "../00357_get_nativeEventEmitter.js";
import _modDef366 from "00366__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

const flushValueDefault = flushValue;

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
function processColor(arg0) {
  if (null == arg0) {
    return null;
  } else {
    const tmp =
      arg0 &&
      typeof arg0.r === "number" &&
      typeof arg0.g === "number" &&
      typeof arg0.b === "number" &&
      typeof arg0.a === "number";
    if (tmp) {
      return arg0;
    } else {
      const tmp4 = normalizeColorDefault(arg0);
      if (null == tmp4) {
        return null;
      } else {
        if (typeof tmp4 === "object") {
          const obj = PlatformColor;
          const processColorObjectResult = obj.processColorObject(tmp4);
          if (null != processColorObjectResult) {
            return processColorObjectResult;
          }
        } else if (typeof tmp4 === "number") {
          return {
            r: (4278190080 & tmp4) >>> 24,
            g: (16711680 & tmp4) >>> 16,
            b: (65280 & tmp4) >>> 8,
            a: (255 & tmp4) / 255,
          };
        }
        return null;
      }
    }
  }
}
const metroImportAll = { r: 0, g: 0, b: 0, a: 1 };
class AnimatedColor {
  constructor(arg0, useNativeDriver) {
    let constructResult;
    let nativeColor;
    const self = this;
    _classCallCheck(this, AnimatedColor);
    const items = [useNativeDriver];
    const obj = _getPrototypeOf(AnimatedColor);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    let tmp6 = arg0;
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    tmp3Result._suspendCallbacks = 0;
    if (arg0 == null) {
      tmp6 = rgbaValue;
    }
    const tmp7 =
      tmp6 &&
      tmp6.r instanceof flushValueDefault &&
      tmp6.g instanceof flushValueDefault &&
      tmp6.b instanceof flushValueDefault &&
      tmp6.a instanceof flushValueDefault;
    if (tmp7) {
      ({ r: obj2.r, g: obj2.g, b: obj2.b, a: obj2.a } = tmp6);
    } else {
      let obj4;
      let tmp17 = processColor(tmp6);
      if (tmp17 == null) {
        tmp17 = rgbaValue;
      }
      const tmp18 =
        tmp17 &&
        typeof tmp17.r === "number" &&
        typeof tmp17.g === "number" &&
        typeof tmp17.b === "number" &&
        typeof tmp17.a === "number";
      if (tmp18) {
        obj4 = { rgbaValue: tmp17 };
        const obj3 = { rgbaValue: tmp17 };
      } else {
        obj4 = { nativeColor: tmp17, rgbaValue };
      }
      ({ rgbaValue, nativeColor } = obj4);
      if (nativeColor) {
        tmp3Result.nativeColor = nativeColor;
      }
      const self2 = this;
      const self3 = this;
      tmp3Result.r = new flushValueDefault(rgbaValue.r);
      const self4 = this;
      const self5 = this;
      const tmp22 = new flushValueDefault(rgbaValue.r);
      tmp3Result.g = new flushValueDefault(rgbaValue.g);
      const self6 = this;
      const self7 = this;
      const tmp24 = new flushValueDefault(rgbaValue.g);
      tmp3Result.b = new flushValueDefault(rgbaValue.b);
      const self8 = this;
      const self9 = this;
      const tmp26 = new flushValueDefault(rgbaValue.b);
      tmp3Result.a = new flushValueDefault(rgbaValue.a);
      const tmp28 = new flushValueDefault(rgbaValue.a);
    }
    useNativeDriver = undefined;
    if (useNativeDriver != null) {
      useNativeDriver = useNativeDriver.useNativeDriver;
    }
    if (useNativeDriver) {
      tmp3Result.__makeNative();
    }
    return tmp3Result;
  }
}
_inherits(AnimatedColor, _modDef366);
const entry = {
  key: "setValue",
  value: function setValue(arg0) {
    const self = this;
    let c1 = false;
    if (this.__isNative) {
      const str = self.__getNativeTag();
      const API = get_nativeEventEmitterDefault.API;
      const result = API.setWaitingForIdentifier(str.toString());
    }
    let tmp4 = processColor(arg0);
    if (tmp4 == null) {
      tmp4 = rgbaValue;
    }
    let closure_0 = tmp4;
    const result1 = self._withSuspendedCallbacks(() => {
      const tmp2 =
        nativeColor &&
        typeof nativeColor.r === "number" &&
        typeof nativeColor.g === "number" &&
        typeof nativeColor.b === "number" &&
        typeof nativeColor.a === "number";
      if (tmp2) {
        const r = self.r;
        r.setValue(nativeColor.r);
        const g = self.g;
        g.setValue(nativeColor.g);
        const b = self.b;
        b.setValue(nativeColor.b);
        const a = self.a;
        a.setValue(nativeColor.a);
        if (null != self.nativeColor) {
          self.nativeColor = null;
          c1 = true;
        }
      } else if (self.nativeColor !== nativeColor) {
        self.nativeColor = nativeColor;
        c1 = true;
      }
    });
    if (self.__isNative) {
      const str2 = self.__getNativeTag();
      const tmp9 = c1;
      if (tmp9) {
        const API2 = get_nativeEventEmitterDefault.API;
        const result2 = API2.updateAnimatedNodeConfig(str2, self.__getNativeConfig());
      }
      const API3 = get_nativeEventEmitterDefault.API;
      const result3 = API3.unsetWaitingForIdentifier(str2.toString());
    } else {
      const obj = flushValue;
      obj.flushValue(self);
    }
    self.__callListeners(self.__getValue());
  },
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
    },
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
    },
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
    },
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
    },
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
    },
  },
  {
    key: "__getValue",
    value: function __getValue() {
      let g;
      let nativeColor;
      let r;
      const self = this;
      if (null != this.nativeColor) {
        nativeColor = self.nativeColor;
      } else {
        ({ r, g } = self);
        const b = self.b;
        const a = self.a;
        const __getValueResult = r.__getValue();
        const _HermesInternal = HermesInternal;
        const __getValueResult1 = g.__getValue();
        const __getValueResult2 = b.__getValue();
        nativeColor =
          "rgba(" +
          __getValueResult +
          ", " +
          __getValueResult1 +
          ", " +
          __getValueResult2 +
          ", " +
          a.__getValue() +
          ")";
      }
      return nativeColor;
    },
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
      let fn = _get(_getPrototypeOf(AnimatedColor.prototype), "__attach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
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
      let fn = _get(_getPrototypeOf(AnimatedColor.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "_withSuspendedCallbacks",
    value: function _withSuspendedCallbacks(fn) {
      this._suspendCallbacks = this._suspendCallbacks + 1;
      fn();
      this._suspendCallbacks = this._suspendCallbacks - 1;
    },
  },
  {
    key: "__callListeners",
    value: function __callListeners(arg0) {
      const self = this;
      if (0 === this._suspendCallbacks) {
        let fn = _get(_getPrototypeOf(AnimatedColor.prototype), "__callListeners", self);
        if (typeof fn === "function") {
          fn = (items) => fn.apply(self, items);
        }
        const items = [arg0];
        fn(items);
      }
    },
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
      let fn = _get(_getPrototypeOf(AnimatedColor.prototype), "__makeNative", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
    },
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      let a;
      let b;
      let g;
      let r;
      const obj = {
        type: "color",
        r: r.__getNativeTag(),
        g: g.__getNativeTag(),
        b: b.__getNativeTag(),
        a: a.__getNativeTag(),
        nativeColor: this.nativeColor,
        debugID: this.__getDebugID(),
      };
      r = this.r;
      g = this.g;
      b = this.b;
      a = this.a;
      return obj;
    },
  },
];

export default _createClass(AnimatedColor, items);
export const getRgbaValueAndNativeColor = function getRgbaValueAndNativeColor(arg0) {
  let obj;
  let tmp = processColor(arg0);
  if (tmp == null) {
    tmp = rgbaValue;
  }
  const tmp2 =
    tmp &&
    typeof tmp.r === "number" &&
    typeof tmp.g === "number" &&
    typeof tmp.b === "number" &&
    typeof tmp.a === "number";
  if (tmp2) {
    obj = { rgbaValue: tmp };
    const obj2 = { rgbaValue: tmp };
  } else {
    obj = { nativeColor: tmp, rgbaValue };
  }
  return obj;
};
