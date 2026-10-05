// === Module 286: ? ===

// Module 286
import _modDef133 from "module_133" /* 133 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class LegacySyntheticEvent {
  constructor(arg0, arg1, _nativeEvent, arg3) {
    let constructResult;
    const self = this;
    _classCallCheck(this, LegacySyntheticEvent);
    const items = [arg0, arg1];
    const obj = _getPrototypeOf(LegacySyntheticEvent);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    let tmp6 = arg3;
    const tmp3Result = map(self, constructResult);
    tmp3Result._nativeEvent = _nativeEvent;
    tmp3Result._propagationStopped = false;
    if (arg3 == null) {
      tmp6 = null;
    }
    tmp3Result._dispatchConfig = tmp6;
    return tmp3Result;
  }
}
_inherits(LegacySyntheticEvent, _modDef133);
let obj = {
  key: "nativeEvent",
  get() {
    return this._nativeEvent;
  }
};
let items = [
  obj,
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
      let fn = _get(_getPrototypeOf(LegacySyntheticEvent.prototype), "stopPropagation", this);
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
      let fn = _get(_getPrototypeOf(LegacySyntheticEvent.prototype), "stopImmediatePropagation", this);
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

export default _createClass(LegacySyntheticEvent, items);