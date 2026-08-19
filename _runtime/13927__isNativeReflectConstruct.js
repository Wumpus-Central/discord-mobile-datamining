// _runtime/13927__isNativeReflectConstruct.js
import noopDefault from "00019_noop.js";
import ReanimatedNativeStackScreenDefault from "13928_ReanimatedNativeStackScreen.js";
import ReanimatedScreenDefault from "13931_ReanimatedScreen.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import importDefaultResult1 from "00098__inherits.js";
import { jsx } from "react/00021_jsxProd.js";

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
  } catch (err) {
  }
}
class ReanimatedScreenWrapper {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, closure_0);
    items1 = [...items];
    tmp2 = closure_5;
    obj = closure_5(closure_0);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
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
importDefaultResult1(ReanimatedScreenWrapper, noopDefault.Component);
let items = [
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      if (this.ref != null) {
        ref.setNativeProps(arg0);
      }
    }
  },
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
    }
  }
];
let closure_8 = importDefaultResult(ReanimatedScreenWrapper, items);

export default function ReanimatedScreenProvider(children) {
  return jsx(ReanimatedScreenWrapper(4674).ScreenContext.Provider, { value: closure_8, children: children.children });
};