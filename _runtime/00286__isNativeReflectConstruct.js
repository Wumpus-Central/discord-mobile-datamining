// === Module 286: _isNativeReflectConstruct ===

// Module 286 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import EventDefault from "Event" /* 133 */;
import LegacySyntheticEvent from "_classCallCheck" /* 41 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import closure_3 from "_get" /* 96 */;
import importDefaultResult from "_createClass" /* 42 */;

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