// _runtime/metro/00286__.js
import EventDefault from "../00133_Event.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

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
class LegacySyntheticEvent {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = closure_0(this, LegacySyntheticEvent);
    items = [,];
    items[0] = global;
    items[1] = arg1;
    tmp2 = c2;
    obj = c2(LegacySyntheticEvent);
    tmp3 = closure_1;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp6 = importAll;
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._nativeEvent = importDefault;
    tmp3Result._propagationStopped = false;
    if (importAll == null) {
      tmp6 = null;
    }
    tmp3Result._dispatchConfig = tmp6;
    return tmp3Result;
  }
}
_classCallCheck = LegacySyntheticEvent;
_inherits(LegacySyntheticEvent, EventDefault);
let items = [
  {
    key: "nativeEvent",
    get() {
      return this._nativeEvent;
    },
  },
  {
    key: "dispatchConfig",
    get() {
      return this._dispatchConfig;
    },
  },
  {
    key: "stopPropagation",
    value: function stopPropagation() {
      const self = this;
      let fn = _get(_getPrototypeOf(_classCallCheck.prototype), "stopPropagation", this);
      if (typeof fn === "function") {
        fn = (arg0) => fn.apply(self, arg0);
      }
      fn([]);
      this._propagationStopped = true;
    },
  },
  {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      const self = this;
      let fn = _get(_getPrototypeOf(_classCallCheck.prototype), "stopImmediatePropagation", this);
      if (typeof fn === "function") {
        fn = (arg0) => fn.apply(self, arg0);
      }
      fn([]);
      this._propagationStopped = true;
    },
  },
  {
    key: "persist",
    value: function persist() {},
  },
  {
    key: "isDefaultPrevented",
    value: function isDefaultPrevented() {
      return this.defaultPrevented;
    },
  },
  {
    key: "isPropagationStopped",
    value: function isPropagationStopped() {
      return this._propagationStopped;
    },
  },
];

export default _createClass(LegacySyntheticEvent, items);
