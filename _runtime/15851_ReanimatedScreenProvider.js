// === Module 15851: ReanimatedScreenProvider ===

// Module 15851 (ReanimatedScreenProvider)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 5732 */;
import ReanimatedNativeStackScreenDefault from "ReanimatedNativeStackScreen" /* 15852 */;
import ReanimatedScreenDefault from "ReanimatedScreen" /* 15855 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

let props;

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
  }
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
    }
  }
];
const value = _createClass(ReanimatedScreenWrapper, items);

export default function ReanimatedScreenProvider(children) {
  return jsx(InnerScreen.ScreenContext.Provider, { value, children: children.children });
};