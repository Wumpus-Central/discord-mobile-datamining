// === Module 8014: ? ===

// Module 8014
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import appendTransformPropsDefault from "appendTransformProps" /* 7920 */;
import extractFontDefault from "extractFont" /* 7934 */;
import _modDef7936 from "module_7936" /* 7936 */;
import _modDef8011 from "module_8011" /* 8011 */;
import _modDef8015 from "module_8015" /* 8015 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
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
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;
class TextPath {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = hasOwnProperty(this, TextPath);
    items1 = [...items];
    tmp2 = metroImportDefault;
    obj = metroImportDefault(TextPath);
    tmp3 = closure_6;
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
      const merged = Object.assign(matrix, TextPath(7928).pickNotNil(extractFontDefault(matrix, true)));
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(matrix);
      }
      const obj = TextPath(7928);
    };
    return tmp3Result;
  }
}
_inherits(TextPath, _modDef7936);
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
      match = href.match(TextPath(7928).idPattern);
    }
    let tmp5 = match;
    if (match) {
      tmp5 = match[1];
    }
    if (tmp5) {
      const withoutXYResult = TextPath(7927).withoutXY(self, tmp);
      const _Object = Object;
      const obj3 = { children };
      const obj4 = { href: tmp5, startOffset: num, method, spacing, side, alignmentBaseline, midLine };
      const merged = Object.assign(withoutXYResult, extractFontDefault(obj3, true), obj4);
      withoutXYResult.ref = self.refMethod;
      const obj5 = {};
      const obj2 = TextPath(7927);
      const merged1 = Object.assign(withoutXYResult);
      return jsx(_modDef8015, {});
    } else {
      const _console = console;
      console.warn(`Invalid \`href\` prop for \`TextPath\` element, expected a href like "#id", but got: "${href}"`);
      const obj = { ref: self.refMethod, children };
      return jsx(_modDef8011, { ref: self.refMethod, children });
    }
    tmp = _objectWithoutProperties(props, closure_3);
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(TextPath, items);
importDefaultResultResult.displayName = "TextPath";

export default importDefaultResultResult;