// === Module 8529: ? ===

// Module 8529
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef8480 from "module_8480" /* 8480 */;
import _modDef8530 from "module_8530" /* 8530 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const Line = fn;
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
  } catch (err) {
  }
}
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;
class Line {
  constructor() {
    self = this;
    tmp = closure_3(this, Line);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(Line);
    tmp3 = closure_4;
    if (closure_7()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(Line, _modDef8480);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    let obj = {};
    ({ x1, y1, x2, y2 } = props);
    const merged = Object.assign(Line(8471).extract(this, props));
    obj.x1 = x1;
    obj.y1 = y1;
    obj.x2 = x2;
    obj.y2 = y2;
    obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const obj2 = Line(8471);
    const merged1 = Object.assign(obj);
    return jsx(_modDef8530, {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    });
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Line, items);
importDefaultResultResult.displayName = "Line";
importDefaultResultResult.defaultProps = { x1: 0, y1: 0, x2: 0, y2: 0 };

export default importDefaultResultResult;