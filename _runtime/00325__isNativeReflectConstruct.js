// === Module 325: _isNativeReflectConstruct ===

// Module 325 (_isNativeReflectConstruct)
import noopAll from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import closure_5 from "_get" /* 96 */;
import importDefaultResult from "_createClass" /* 42 */;

const StateSafePureComponent = importDefault;
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
class StateSafePureComponent {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, StateSafePureComponent);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(StateSafePureComponent);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._inAsyncStateUpdate = false;
    result = tmp3Result._installSetStateHooks();
    return tmp3Result;
  }
}
_inheritsDefault(StateSafePureComponent, noopAll.PureComponent);
let items = [
  {
    key: "setState",
    value: function setState(fn) {
      let self = this;
      let fn2 = this;
      self = fn;
      if (typeof fn === "function") {
        fn = callback3(callback2(self.prototype), "setState", self);
        fn2 = fn;
        if (typeof fn === "function") {
          fn = (items) => fn2.apply(self, items);
        }
        const items = [
          (arg0, arg1) => {
              fn2._inAsyncStateUpdate = true;
              try {
                tmp2._inAsyncStateUpdate = false;
                return self(arg0, arg1);
              } catch (tmp6) {
                tmp._inAsyncStateUpdate = false;
                throw tmp6;
              }
            },
          arg1
        ];
        fn(items);
      } else {
        fn2 = callback3(callback2(self.prototype), "setState", self);
        if (typeof fn2 === "function") {
          fn2 = (items) => fn2.apply(self, items);
        }
        const items1 = [fn, arg1];
        fn2(items1);
      }
    }
  },
  {
    key: "_installSetStateHooks",
    value: function _installSetStateHooks() {
      const self = this;
      ({ props: dependencyMap, state: closure_2 } = this);
      let obj = {
        get() {
          self(closure_1_1[7])(!self._inAsyncStateUpdate, "\"this.props\" should not be accessed during state updates");
          return closure_1;
        },
        set(arg0) {
          closure_1 = arg0;
        }
      };
      Object.defineProperty(this, "props", obj);
      obj = {
        get() {
          self(closure_1_1[7])(!self._inAsyncStateUpdate, "\"this.state\" should not be acceessed during state updates");
          return closure_2;
        },
        set(arg0) {
          closure_2 = arg0;
        }
      };
      Object.defineProperty(this, "state", obj);
    }
  }
];

export default importDefaultResult(StateSafePureComponent, items);