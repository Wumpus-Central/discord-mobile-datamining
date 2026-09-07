// === Module 8558: ? ===

// Module 8558
import appendTransformPropsDefault from "appendTransformProps" /* 8464 */;
import extractFontDefault from "extractFont" /* 8478 */;
import _modDef8480 from "module_8480" /* 8480 */;
import _modDef8555 from "module_8555" /* 8555 */;
import _modDef8559 from "module_8559" /* 8559 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import metroRequire from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const TextPath = fn;
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
let closure_3 = ["children", "xlinkHref", "href", "startOffset", "method", "spacing", "side", "alignmentBaseline", "midLine"];
const jsx = fn(21).jsx;
class TextPath {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = hasOwnProperty(this, TextPath);
    items1 = [...items];
    tmp2 = closure_7;
    obj = closure_7(TextPath);
    tmp3 = metroRequire;
    if (closure_9()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.setNativeProps = (matrix) => {
      matrix = matrix.matrix;
      let tmp = !matrix;
      if (!matrix) {
        tmp = appendTransformPropsDefault(matrix);
      }
      if (tmp) {
        matrix.matrix = tmp;
      }
      const merged = Object.assign(matrix, TextPath(8472).pickNotNil(extractFontDefault(matrix, true)));
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(matrix);
      }
      const obj = TextPath(8472);
    };
    return tmp3Result;
  }
}
_inherits(TextPath, _modDef8480);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    ({ children, href } = props);
    if (undefined === href) {
      href = props.xlinkHref;
    }
    const startOffset = props.startOffset;
    let num = 0;
    if (undefined !== startOffset) {
      num = startOffset;
    }
    ({ method, spacing, side, alignmentBaseline, midLine } = props);
    let match = href;
    if (href) {
      match = href.match(TextPath(8472).idPattern);
    }
    let tmp5 = match;
    if (match) {
      tmp5 = match[1];
    }
    if (tmp5) {
      let obj1 = TextPath(8471);
      const withoutXYResult = obj1.withoutXY(self, tmp);
      const _Object = Object;
      let obj = { children };
      obj = { href: tmp5, startOffset: num, method, spacing, side, alignmentBaseline, midLine };
      const merged = Object.assign(withoutXYResult, extractFontDefault(obj, true), obj);
      withoutXYResult.ref = self.refMethod;
      obj1 = {};
      const merged1 = Object.assign(withoutXYResult);
      return jsx(_modDef8559, {});
    } else {
      const _console = console;
      console.warn(`Invalid \`href\` prop for \`TextPath\` element, expected a href like "#id", but got: "${href}"`);
      obj = { ref: self.refMethod, children };
      return jsx(_modDef8555, { ref: self.refMethod, children });
    }
    tmp = _objectWithoutProperties(props, closure_3);
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(TextPath, items);
importDefaultResultResult.displayName = "TextPath";

export default importDefaultResultResult;