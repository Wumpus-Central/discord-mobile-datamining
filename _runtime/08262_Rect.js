// === Module 8262: Rect ===

// Module 8262 (Rect)
import Fragment from "Fragment" /* 21 */;
import extractProps from "extractProps" /* 8184 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 8193 */;
import _modDef8263 from "module_8263" /* 8263 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

let size;

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
class Rect {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Rect);
    const obj = _getPrototypeOf(Rect);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
  }
}
_inherits(Rect, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    size = { x: props.x, y: props.y, width: props.width, height: props.height, rx: props.rx, ry: props.ry };
    _modDef8263;
    const obj3 = extractProps;
    const merged = Object.assign(obj3.withoutXY(this, props));
    const merged1 = Object.assign(size);
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Rect, items);
importDefaultResultResult.displayName = "Rect";
importDefaultResultResult.defaultProps = { x: 0, y: 0, width: 0, height: 0 };

export default importDefaultResultResult;