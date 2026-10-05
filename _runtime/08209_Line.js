// _runtime/08209_Line.js
import Fragment from "react/00021_Fragment.js";
import extractProps from "08151_extractProps.js";
import multiplyMatricesDefault from "08160_multiplyMatrices.js";
import _modDef8210 from "metro/08210__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";

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
class Line {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Line);
    const obj = _getPrototypeOf(Line);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
  }
}
_inherits(Line, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let x1;
    let x2;
    let y1;
    let y2;
    const self = this;
    const props = this.props;
    const obj = { x1, y1, x2, y2 };
    ({ x1, y1, x2, y2 } = props);
    const obj2 = extractProps;
    const merged = Object.assign(obj2.extract(this, props));
    _modDef8210;
    const merged1 = Object.assign(obj);
    return (
      <tmp2
        ref={function ref(arg0) {
          return self.refMethod(arg0);
        }}
      />
    );
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(Line, items);
importDefaultResultResult.displayName = "Line";
importDefaultResultResult.defaultProps = { x1: 0, y1: 0, x2: 0, y2: 0 };

export default importDefaultResultResult;
