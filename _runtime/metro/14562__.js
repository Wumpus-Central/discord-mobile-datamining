// _runtime/metro/14562__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import ReanimatedNativeStackScreenDefault from "../14563_ReanimatedNativeStackScreen.js";
import ReanimatedScreenDefault from "../14566_ReanimatedScreen.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const ReanimatedScreenWrapper = fn;
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
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;
class ReanimatedScreenWrapper {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, ReanimatedScreenWrapper);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(ReanimatedScreenWrapper);
    tmp3 = closure_4;
    if (closure_7()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.ref = null;
    tmp3Result.setRef = (ref) => {
      props.ref = ref;
      props = props.props;
      const onComponentRef = props.onComponentRef;
      if (onComponentRef != null) {
        onComponentRef(ref);
      }
    };
    return tmp3Result;
  }
}
_inherits(ReanimatedScreenWrapper, noop.Component);
const entry = {
  key: "setNativeProps",
  value: function setNativeProps(arg0) {
    if (this.ref != null) {
      ref.setNativeProps(arg0);
    }
  },
};
let items = [
  entry,
  {
    key: "render",
    value: function render() {
      const self = this;
      if (this.props.isNativeStack) {
        let tmpResult = ReanimatedNativeStackScreenDefault;
      } else {
        tmpResult = ReanimatedScreenDefault;
      }
      const obj = {};
      const merged = Object.assign(self.props);
      obj.ref = self.setRef;
      return <tmpResult />;
    },
  },
];
const value = _createClass(ReanimatedScreenWrapper, items);

export default function ReanimatedScreenProvider(children) {
  return jsx(ReanimatedScreenWrapper(4916).ScreenContext.Provider, { value, children: children.children });
}
