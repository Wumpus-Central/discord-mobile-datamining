// === Module 8539: ? ===

// Module 8539
import _modDef8477 from "module_8477" /* 8477 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const Pattern = importDefault;
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
const jsx = fn(21).jsx;
class Pattern {
  constructor() {
    self = this;
    tmp = c2(this, Pattern);
    tmp2 = closure_4;
    obj = closure_4(Pattern);
    tmp3 = closure_3;
    if (metroRequire()) {
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
_inherits(Pattern, _modDef8477);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    ({ patternTransform, patternUnits, patternContentUnits } = props);
    ({ transform, id, x, y, width, height, children, viewBox, preserveAspectRatio } = props);
    if (!patternTransform) {
      patternTransform = transform;
    }
    if (!patternTransform) {
      patternTransform = props;
    }
    const tmp3Result = Pattern(8461)(patternTransform);
    const size = { x, y, width, height, name: id, matrix: tmp3Result, patternTransform: tmp3Result, patternUnits: null, patternContentUnits: null };
    let num = patternUnits;
    if (patternUnits) {
      num = Pattern(8531)[patternUnits];
    }
    if (!num) {
      num = 0;
    }
    size.patternUnits = num;
    let num2 = 1;
    if (patternContentUnits) {
      num2 = Pattern(8531)[patternContentUnits];
    }
    size.patternContentUnits = num2;
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const tmp3 = Pattern(8461);
    const merged = Object.assign(size);
    const merged1 = Object.assign(Pattern(8466)({ viewBox, preserveAspectRatio }));
    obj.children = children;
    return jsx(Pattern(8540), {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    });
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Pattern, items);
importDefaultResultResult.displayName = "Pattern";
importDefaultResultResult.defaultProps = { x: "0%", y: "0%", width: "100%", height: "100%" };

export default importDefaultResultResult;