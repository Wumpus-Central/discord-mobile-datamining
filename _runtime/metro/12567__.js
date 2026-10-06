// === Module 12567: ? ===

// Module 12567
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import MemoryRouter from "MemoryRouter" /* 4716 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

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
const BackHandler = react_native.BackHandler;
const jsx = Fragment.jsx;
class BackButton {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, BackButton);
    const items1 = [...items];
    const obj = _getPrototypeOf(BackButton);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
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
_inherits(BackButton, react.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const listener = BackHandler.addEventListener("hardwareBackPress", this.handleBack);
  }
};
let items = [
  entry,
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
      return jsx(MemoryRouter.__HistoryContext.Consumer, {
        children(history) {
          self.history = history;
          return self.props.children || null;
        }
      });
    }
  }
];

export default _createClass(BackButton, items);