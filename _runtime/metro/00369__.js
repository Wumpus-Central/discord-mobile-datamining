// _runtime/metro/00369__.js
import flushValueDefault from "../00356_flushValue.js";
import _modDef363 from "00363__.js";
import _modDef366 from "00366__.js";
import _modDef367 from "00367__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

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
class AnimatedDivision {
  constructor(num, __getValue, arg2) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedDivision);
    const items = [arg2];
    const obj = _getPrototypeOf(AnimatedDivision);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result._warnedAboutDivideByZero = false;
    let tmp7 = 0 === __getValue;
    if (!tmp7) {
      tmp7 = __getValue instanceof _modDef367 && 0 === __getValue.__getValue();
      __getValue instanceof _modDef367 && 0 === __getValue.__getValue();
    }
    if (tmp7) {
      const _console = console;
      console.error("Detected potential division by zero in AnimatedDivision");
    }
    let tmp13 = num;
    if (typeof num === "number") {
      const self2 = this;
      const self3 = this;
      tmp13 = new flushValueDefault(num);
    }
    tmp3Result._a = tmp13;
    let tmp14 = __getValue;
    if (typeof __getValue === "number") {
      const self4 = this;
      const self5 = this;
      tmp14 = new flushValueDefault(__getValue);
    }
    tmp3Result._b = tmp14;
    return tmp3Result;
  }
}
_inherits(AnimatedDivision, _modDef366);
const entry = {
  key: "__makeNative",
  value: function __makeNative(arg0) {
    const _a = this._a;
    _a.__makeNative(arg0);
    const _b = this._b;
    _b.__makeNative(arg0);
    const self = this;
    let fn = _get(_getPrototypeOf(AnimatedDivision.prototype), "__makeNative", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [arg0];
    fn(items);
  },
};
let items = [
  entry,
  {
    key: "__getValue",
    value: function __getValue() {
      let _a;
      let _b;
      let num;
      const self = this;
      ({ _a, _b } = this);
      const __getValueResult = _a.__getValue();
      const __getValueResult1 = _b.__getValue();
      if (0 === __getValueResult1) {
        num = 0;
        if (!self._warnedAboutDivideByZero) {
          const _console = console;
          console.error("Detected division by zero in AnimatedDivision");
          self._warnedAboutDivideByZero = true;
          num = 0;
        }
      } else {
        self._warnedAboutDivideByZero = false;
        num = __getValueResult / __getValueResult1;
      }
      return num;
    },
  },
  {
    key: "interpolate",
    value: function interpolate(arg0) {
      const tmp = new _modDef363(this, arg0);
      return tmp;
    },
  },
  {
    key: "__attach",
    value: function __attach() {
      const _a = this._a;
      _a.__addChild(this);
      const _b = this._b;
      _b.__addChild(this);
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedDivision.prototype), "__attach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__detach",
    value: function __detach() {
      const _a = this._a;
      _a.__removeChild(this);
      const _b = this._b;
      _b.__removeChild(this);
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedDivision.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      let items;
      const _a = this._a;
      const obj = { type: "division", input: items, debugID: this.__getDebugID() };
      items = [_a.__getNativeTag()];
      const _b = this._b;
      items[1] = _b.__getNativeTag();
      return obj;
    },
  },
];

export default _createClass(AnimatedDivision, items);
