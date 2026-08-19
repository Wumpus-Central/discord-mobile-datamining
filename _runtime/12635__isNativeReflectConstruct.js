// === Module 12635: _isNativeReflectConstruct ===

// Module 12635 (_isNativeReflectConstruct)
import noopDefault from "noop" /* 19 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult1 from "_inherits" /* 98 */;
import { jsx } from "jsxProd" /* 21 */;

const BackButton = fn;
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
require("get ActivityIndicator").BackHandler;
class BackButton {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.handleBack = () => {
      let flag = 0 !== closure_0.history.index;
      if (flag) {
        const history = closure_0.history;
        history.goBack();
        flag = true;
      }
      return flag;
    };
    return tmp3Result;
  }
}
importDefaultResult1(BackButton, noopDefault.Component);
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
      return jsx(self(4208).__HistoryContext.Consumer, {
        children(history) {
          self.history = history;
          return self.props.children || null;
        }
      });
    }
  }
];

export default importDefaultResult(BackButton, items);