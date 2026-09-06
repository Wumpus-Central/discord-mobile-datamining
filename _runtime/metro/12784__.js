// _runtime/metro/12784__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

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
  } catch (err) {}
}
fn(17).BackHandler;
const jsx = fn(21).jsx;
class BackButton {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, BackButton);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(BackButton);
    tmp3 = closure_3;
    if (closure_7()) {
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
_inherits(BackButton, noop.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const listener = BackHandler.addEventListener("hardwareBackPress", this.handleBack);
  },
};
let items = [
  entry,
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const removed = BackHandler.removeEventListener("hardwareBackPress", this.handleBack);
    },
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      return jsx(BackButton(4392).__HistoryContext.Consumer, {
        children(history) {
          self.history = history;
          return self.props.children || null;
        },
      });
    },
  },
];

export default _createClass(BackButton, items);
