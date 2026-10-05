// === Module 325: ? ===

// Module 325
import reactAll from "react" /* 19 */;
import _classCallCheck_mod from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

const require = globalThis.__r;
let dependencyMap;

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
let _classCallCheck = _classCallCheck_mod;
class StateSafePureComponent {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, StateSafePureComponent);
    const items = [arg0];
    const obj = _getPrototypeOf(StateSafePureComponent);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result._inAsyncStateUpdate = false;
    const result = tmp3Result._installSetStateHooks();
    return tmp3Result;
  }
}
_inherits(StateSafePureComponent, reactAll.PureComponent);
const entry = {
  key: "setState",
  value: function setState(fn, arg1) {
    const f80880 = (items) => fn.apply(self, items);
    const self = this;
    let closure_0 = fn;
    if (typeof fn === "function") {
      fn = _get(_getPrototypeOf(StateSafePureComponent.prototype), "setState", self);
      if (typeof fn === "function") {
        fn = f80880;
      }
      const items = [
        (arg0, arg1) => {
            self._inAsyncStateUpdate = true;
            try {
              self._inAsyncStateUpdate = false;
              return closure_0(arg0, arg1);
            } catch (tmp5) {
              self._inAsyncStateUpdate = false;
              throw tmp5;
            }
          },
        arg1
      ];
      fn(items);
    } else {
      let fn2 = _get(_getPrototypeOf(StateSafePureComponent.prototype), "setState", self);
      if (typeof fn2 === "function") {
        fn2 = f80880;
      }
      const items1 = [fn, arg1];
      fn2(items1);
    }
  }
};
let items = [
  entry,
  {
    key: "_installSetStateHooks",
    value: function _installSetStateHooks() {
      const self = this;
      ({ props: dependencyMap, state: _classCallCheck } = this);
      const obj = {
        get() {
          require("module_38")(!self._inAsyncStateUpdate, "\"this.props\" should not be accessed during state updates");
          return dependencyMap;
        },
        set(arg0) {
          dependencyMap = arg0;
        }
      };
      Object.defineProperty(this, "props", obj);
      const obj2 = {
        get() {
          require("module_38")(!self._inAsyncStateUpdate, "\"this.state\" should not be acceessed during state updates");
          return _classCallCheck;
        },
        set(arg0) {
          _classCallCheck = arg0;
        }
      };
      Object.defineProperty(this, "state", obj2);
    }
  }
];

export default _createClass(StateSafePureComponent, items);