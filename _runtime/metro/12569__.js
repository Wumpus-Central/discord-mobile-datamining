// _runtime/metro/12569__.js
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import hasOwnProperty from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react from "../00019_react.js";
import module_4713_mod from "04713__.js";

const require = globalThis.__r;
let _require;

let items1;
let module_4713;
let oneOfType;
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
let closure_2 = ["component", "to", "replace"];
const TouchableHighlight = react_native.TouchableHighlight;
const jsx = Fragment.jsx;
class Link {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, Link);
    const items1 = [...items];
    const obj = _getPrototypeOf(Link);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = hasOwnProperty(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.handlePress = (defaultPrevented, str) => {
      if (props.props.onPress) {
        props = tmp.props;
        props.onPress(defaultPrevented);
      }
      if (!defaultPrevented.defaultPrevented) {
        const to = str.to;
        if (props.props.replace) {
          const replaced = str.replace(to);
        } else {
          props.props.push(to);
        }
      }
    };
    return tmp3Result;
  }
}
_inherits(Link, react.Component);
const entry = {
  key: "render",
  value: function render() {
    let replace;
    let to;
    const self = this;
    const props = this.props;
    ({ component: dependencyMap, to, replace } = props);
    _require = _objectWithoutProperties(props, self);
    return jsx(require("MemoryRouter").__HistoryContext.Consumer, {
      children(arg0) {
        closure_0 = arg0;
        const merged = Object.assign(closure_0);
        return (
          <closure_1
            onPress={function onPress(arg0) {
              return self.handlePress(arg0, closure_0);
            }}
          />
        );
      },
    });
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(Link, items);
importDefaultResultResult.defaultProps = { component: TouchableHighlight, replace: false };
let obj = {
  onPress: module_4713.func,
  component: module_4713.elementType,
  replace: module_4713.bool,
  to: oneOfType(items1),
};
module_4713 = module_4713_mod;
oneOfType = module_4713.oneOfType;
items1 = [module_4713.string, module_4713.object];
importDefaultResultResult.propTypes = obj;

export default importDefaultResultResult;
