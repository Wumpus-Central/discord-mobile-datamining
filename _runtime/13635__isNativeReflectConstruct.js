import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importDefaultResult1 from "_inherits";
import { jsx } from "jsxProd";

const ReanimatedScreenWrapper = arg1;
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
class ReanimatedScreenWrapper {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.ref = null;
    tmp3Result.setRef = (ref) => {
      _undefined.ref = ref;
      const props = _undefined.props;
      const onComponentRef = props.onComponentRef;
      if (onComponentRef != null) {
        onComponentRef(ref);
      }
    };
    return tmp3Result;
  }
}
importDefaultResult1(ReanimatedScreenWrapper, require("noop").Component);
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
        let tmpResult = tmp(13636);
      } else {
        tmpResult = tmp(13639);
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
  return jsx(ReanimatedScreenWrapper(4544).ScreenContext.Provider, { value: closure_8, children: children.children });
};