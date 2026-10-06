// _runtime/08271_TextPath.js
import Fragment from "react/00021_Fragment.js";
import extractProps from "08184_extractProps.js";
import warnOnce from "08185_warnOnce.js";
import extractTextDefault from "08191_extractText.js";
import multiplyMatricesDefault from "08193_multiplyMatrices.js";
import TSpanDefault from "08268_TSpan.js";
import _modDef8272 from "metro/08272__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import metroRequire from "metro/00093__possibleConstructorReturn.js";
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
let closure_3 = [
  "children",
  "xlinkHref",
  "href",
  "startOffset",
  "method",
  "spacing",
  "side",
  "alignmentBaseline",
  "midLine",
];
const jsx = Fragment.jsx;
class TextPath {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, TextPath);
    const items1 = [...items];
    let obj = _getPrototypeOf(TextPath);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = metroRequire(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.setNativeProps = (matrix) => {
      const tmp = !matrix.matrix && closure_2_1(closure_2_2[8])(matrix);
      if (tmp) {
        matrix.matrix = tmp;
      }
      const obj = TextPath(closure_2_2[9]);
      assign(matrix, obj.pickNotNil(closure_2_1(closure_2_2[10])(matrix, true)));
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(matrix);
      }
    };
    return tmp3Result;
  }
}
_inherits(TextPath, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let alignmentBaseline;
    let children;
    let href;
    let method;
    let midLine;
    let side;
    let spacing;
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
    const tmp = _objectWithoutProperties(props, closure_3);
    if (href) {
      match = href.match(warnOnce.idPattern);
    }
    if (match && match[1]) {
      const obj2 = extractProps;
      const withoutXYResult = obj2.withoutXY(self, tmp);
      const _Object = Object;
      const obj3 = { children };
      const obj4 = { href: match && match[1], startOffset: num, method, spacing, side, alignmentBaseline, midLine };
      const merged = Object.assign(withoutXYResult, extractTextDefault(obj3, true), obj4);
      withoutXYResult.ref = self.refMethod;
      _modDef8272;
      const merged1 = Object.assign(withoutXYResult);
      return <tmp18 />;
    } else {
      const _console = console;
      console.warn(`Invalid \`href\` prop for \`TextPath\` element, expected a href like "#id", but got: "${href}"`);
      return jsx(TSpanDefault, { ref: self.refMethod, children });
    }
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(TextPath, items);
importDefaultResultResult.displayName = "TextPath";

export default importDefaultResultResult;
