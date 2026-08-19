// _runtime/00286__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import EventDefault from "00133_Event.js";
import LegacySyntheticEvent from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _get from "metro/00096__get.js";
import importDefaultResult from "metro/00042__createClass.js";

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
class LegacySyntheticEvent {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = LegacySyntheticEvent(this, LegacySyntheticEvent);
    items = [, ];
    items[0] = global;
    items[1] = arg1;
    tmp2 = closure_2;
    obj = closure_2(LegacySyntheticEvent);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
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
_inheritsDefault(LegacySyntheticEvent, EventDefault);
let items = [
  {
    key: "nativeEvent",
    get() {
      return this._nativeEvent;
    }
  },
  {
    key: "dispatchConfig",
    get() {
      return this._dispatchConfig;
    }
  },
  {
    key: "stopPropagation",
    value: function stopPropagation() {
      const self = this;
      let fn = callback2(callback(self.prototype), "stopPropagation", this);
      if (typeof fn === "function") {
        fn = (arg0) => fn.apply(self, arg0);
      }
      fn([]);
      this._propagationStopped = true;
    }
  },
  {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      const self = this;
      let fn = callback2(callback(self.prototype), "stopImmediatePropagation", this);
      if (typeof fn === "function") {
        fn = (arg0) => fn.apply(self, arg0);
      }
      fn([]);
      this._propagationStopped = true;
    }
  },
  {
    key: "persist",
    value: function persist() {

    }
  },
  {
    key: "isDefaultPrevented",
    value: function isDefaultPrevented() {
      return this.defaultPrevented;
    }
  },
  {
    key: "isPropagationStopped",
    value: function isPropagationStopped() {
      return this._propagationStopped;
    }
  }
];

export default importDefaultResult(LegacySyntheticEvent, items);