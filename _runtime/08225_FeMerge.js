// === Module 8225: FeMerge ===

// Module 8225 (FeMerge)
import Fragment from "Fragment" /* 21 */;
import extractFeFlood from "extractFeFlood" /* 8207 */;
import _modDef8208 from "module_8208" /* 8208 */;
import _modDef8226 from "module_8226" /* 8226 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
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
const jsx = Fragment.jsx;
class FeMerge {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeMerge);
    const obj = _getPrototypeOf(FeMerge);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
  }
}
_inherits(FeMerge, _modDef8208);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    _modDef8226;
    const obj2 = extractFeFlood;
    const merged = Object.assign(obj2.extractFilter(this.props));
    const obj3 = extractFeFlood;
    const merged1 = Object.assign(obj3.extractFeMerge(this.props, this));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeMerge, items);
importDefaultResultResult.displayName = "FeMerge";
let obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;