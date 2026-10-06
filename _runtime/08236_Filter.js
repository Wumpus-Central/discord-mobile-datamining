// === Module 8236: Filter ===

// Module 8236 (Filter)
import Fragment from "Fragment" /* 21 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 8193 */;
import _modDef8237 from "module_8237" /* 8237 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
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
class Filter {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Filter);
    const obj = _getPrototypeOf(Filter);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(Filter, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    size = { name: props.id, x: props.x, y: props.y, width: props.width, height: props.height, filterUnits: props.filterUnits, primitiveUnits: props.primitiveUnits };
    _modDef8237;
    const merged = Object.assign(size);
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }}>{this.props.children}</tmp>;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Filter, items);
importDefaultResultResult.displayName = "Filter";
importDefaultResultResult.defaultProps = { x: "-10%", y: "-10%", width: "120%", height: "120%", filterUnits: "objectBoundingBox", primitiveUnits: "userSpaceOnUse" };

export default importDefaultResultResult;