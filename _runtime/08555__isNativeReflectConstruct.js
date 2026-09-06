// === Module 8555: _isNativeReflectConstruct ===

// Module 8555 (_isNativeReflectConstruct)
import noopAll from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import extractFontDefault from "extractFont" /* 8475 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 8477 */;
import _isNativeReflectConstructDefault2 from "_isNativeReflectConstruct" /* 8552 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 8556 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "_classCallCheck" /* 41 */;
import closure_6 from "_possibleConstructorReturn" /* 93 */;
import closure_7 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import { jsx } from "jsxProd" /* 21 */;

const TextPath = arg1;
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
noopAll;
class TextPath {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_5(this, closure_0);
    items1 = [...items];
    tmp2 = closure_7;
    obj = closure_7(closure_0);
    tmp3 = closure_6;
    if (_isNativeReflectConstruct()) {
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
        tmp = closure_1_1(closure_1_2[8])(matrix);
      }
      if (tmp) {
        matrix.matrix = tmp;
      }
      const merged = Object.assign(matrix, lib(closure_1_2[9]).pickNotNil(closure_1_1(closure_1_2[10])(matrix, true)));
      if (lib.root) {
        const root = lib.root;
        root.setNativeProps(matrix);
      }
    };
    return tmp3Result;
  }
}
_inheritsDefault(TextPath, _isNativeReflectConstructDefault);
let items = [
  {
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
        match = href.match(TextPath(8469).idPattern);
      }
      let tmp5 = match;
      if (match) {
        tmp5 = match[1];
      }
      if (tmp5) {
        obj1 = TextPath(8468);
        const withoutXYResult = obj1.withoutXY(self, tmp);
        const _Object = Object;
        let obj = { children: null };
        obj[0] = children;
        obj = { href: null, startOffset: null, method: null, spacing: null, side: null, alignmentBaseline: null, midLine: null };
        obj[0] = tmp5;
        obj[1] = num;
        obj[2] = method;
        obj[3] = spacing;
        obj[4] = side;
        obj[5] = alignmentBaseline;
        obj[6] = midLine;
        const merged = Object.assign(withoutXYResult, extractFontDefault(obj, true), obj);
        withoutXYResult.ref = self.refMethod;
        obj1 = {};
        const merged1 = Object.assign(withoutXYResult);
        return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
      } else {
        const _console = console;
        console.warn(`Invalid \`href\` prop for \`TextPath\` element, expected a href like "#id", but got: "${href}"`);
        obj = { ref: null, children: null };
        obj[0] = self.refMethod;
        obj[1] = children;
        return jsx(_isNativeReflectConstructDefault2, { ref: null, children: null });
      }
      tmp = callback(props, closure_3);
    }
  }
];
const importDefaultResultResult = importDefaultResult(TextPath, items);
importDefaultResultResult.displayName = "TextPath";

export default importDefaultResultResult;