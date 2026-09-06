// _runtime/metro/00325__.js
import _modAll19 from "00019__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

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
  } catch (err) {}
}
class StateSafePureComponent {
  constructor(arg0) {
    self = this;
    tmp = c2(this, StateSafePureComponent);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(StateSafePureComponent);
    tmp3 = closure_3;
    if (metroRequire()) {
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
_inherits(StateSafePureComponent, _modAll19.PureComponent);
const entry = {
  key: "setState",
  value: function setState(fn, arg1) {
    let fn2 = this;
    const self = fn;
    if (typeof fn === "function") {
      fn = hasOwnProperty(_getPrototypeOf(StateSafePureComponent.prototype), "setState", self);
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
        arg1,
      ];
      fn(items);
    } else {
      fn2 = hasOwnProperty(_getPrototypeOf(StateSafePureComponent.prototype), "setState", self);
      if (typeof fn2 === "function") {
        fn2 = (items) => fn2.apply(self, items);
      }
      const items1 = [fn, arg1];
      fn2(items1);
    }
  },
};
let items = [
  entry,
  {
    key: "_installSetStateHooks",
    value: function _installSetStateHooks() {
      const self = this;
      ({ props: closure_1, state: closure_2 } = this);
      let obj = {
        get() {
          StateSafePureComponent(38)(
            !self._inAsyncStateUpdate,
            '"this.props" should not be accessed during state updates',
          );
          return closure_1;
        },
        set(arg0) {
          closure_1 = arg0;
        },
      };
      Object.defineProperty(this, "props", obj);
      obj = {
        get() {
          StateSafePureComponent(38)(
            !self._inAsyncStateUpdate,
            '"this.state" should not be acceessed during state updates',
          );
          return closure_2;
        },
        set(arg0) {
          closure_2 = arg0;
        },
      };
      Object.defineProperty(this, "state", obj);
    },
  },
];

export default _createClass(StateSafePureComponent, items);
