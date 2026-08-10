// _runtime/10963__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importDefaultResult1 from "_inherits";
import { jsx } from "jsxProd";

const BackButton = arg1;
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
require("get ActivityIndicator").BackHandler;
class BackButton {
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
    tmp3Result.handleBack = () => {
      let flag = 0 !== _undefined.history.index;
      if (flag) {
        const history = _undefined.history;
        history.goBack();
        flag = true;
      }
      return flag;
    };
    return tmp3Result;
  }
}
importDefaultResult1(BackButton, require("noop").Component);
let items = [
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      const listener = BackHandler.addEventListener("hardwareBackPress", this.handleBack);
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const removed = BackHandler.removeEventListener("hardwareBackPress", this.handleBack);
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      return jsx(self(4135).__HistoryContext.Consumer, {
        children(history) {
          self.history = history;
          return self.props.children || null;
        }
      });
    }
  }
];

export default importDefaultResult(BackButton, items);