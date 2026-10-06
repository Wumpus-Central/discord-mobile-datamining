// _runtime/08238_ForeignObject.js
import Fragment from "react/00021_Fragment.js";
import _modDef8183 from "metro/08183__.js";
import extractProps from "08184_extractProps.js";
import _modDef8239 from "metro/08239__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";

let size;

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
class ForeignObject {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ForeignObject);
    const obj = _getPrototypeOf(ForeignObject);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
  }
}
_inherits(ForeignObject, _modDef8183);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    size = { x: props.x, y: props.y, width: props.width, height: props.height };
    const children = props.children;
    _modDef8239;
    const obj3 = extractProps;
    const merged = Object.assign(obj3.withoutXY(this, props));
    const merged1 = Object.assign(size);
    return (
      <tmp
        ref={function ref(arg0) {
          return self.refMethod(arg0);
        }}
      >
        {children}
      </tmp>
    );
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(ForeignObject, items);
importDefaultResultResult.displayName = "ForeignObject";
importDefaultResultResult.defaultProps = { x: "0%", y: "0%", width: "100%", height: "100%" };

export default importDefaultResultResult;
