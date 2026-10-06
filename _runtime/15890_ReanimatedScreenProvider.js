// _runtime/15890_ReanimatedScreenProvider.js
import Fragment from "react/00021_Fragment.js";
import InnerScreen from "05739_InnerScreen.js";
import ReanimatedNativeStackScreenDefault from "15891_ReanimatedNativeStackScreen.js";
import ReanimatedScreenDefault from "15894_ReanimatedScreen.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";

let props;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
const jsx = Fragment.jsx;
class ReanimatedScreenWrapper {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, ReanimatedScreenWrapper);
    const items1 = [...items];
    const obj = _getPrototypeOf(ReanimatedScreenWrapper);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
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
_inherits(ReanimatedScreenWrapper, react.Component);
const entry = {
  key: "setNativeProps",
  value: function setNativeProps(arg0) {
    if (this.ref != null) {
      this.ref.setNativeProps(arg0);
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
        ReanimatedNativeStackScreenDefault;
      } else {
        ReanimatedScreenDefault;
      }
      const merged = Object.assign(self.props);
      return <tmpResult ref={self.setRef} />;
    },
  },
];
const value = _createClass(ReanimatedScreenWrapper, items);

export default function ReanimatedScreenProvider(children) {
  return jsx(InnerScreen.ScreenContext.Provider, { value, children: children.children });
}
