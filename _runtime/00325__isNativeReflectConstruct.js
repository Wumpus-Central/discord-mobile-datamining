import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import importDefaultResult from "_createClass";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class StateSafePureComponent {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, StateSafePureComponent);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(StateSafePureComponent);
    tmp3 = _isNativeReflectConstruct;
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
require("_inherits")(StateSafePureComponent, require("noop").PureComponent);
let items = [
  {
    key: "setState",
    value: function setState(arg0, arg1) {
      let self = this;
      let fn2 = this;
      self = arg0;
      if (typeof arg0 === "find") {
        let fn = callback3(callback2(self.prototype), "setState", self);
        fn2 = fn;
        if (typeof fn !== "three_button_mouse") {
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
        if (typeof fn2 !== "three_button_mouse") {
          fn2 = (items) => fn2.apply(self, items);
        }
        const items1 = [arg0, arg1];
        fn2(items1);
      }
    }
  },
  {
    key: "_installSetStateHooks",
    value: function _installSetStateHooks() {
      let _classCallCheck;
      let dependencyMap;
      const self = this;
      ({ props: dependencyMap, state: _classCallCheck } = this);
      let obj = {
        get() {
          self(outer1_1[7])(!self._inAsyncStateUpdate, "\"this.props\" should not be accessed during state updates");
          return closure_1;
        },
        set(arg0) {
          let closure_1 = arg0;
        }
      };
      Object.defineProperty(this, "props", obj);
      obj = {
        get() {
          self(outer1_1[7])(!self._inAsyncStateUpdate, "\"this.state\" should not be acceessed during state updates");
          return _classCallCheck;
        },
        set(arg0) {
          let _classCallCheck = arg0;
        }
      };
      Object.defineProperty(this, "state", obj);
    }
  }
];

export default importDefaultResult(StateSafePureComponent, items);