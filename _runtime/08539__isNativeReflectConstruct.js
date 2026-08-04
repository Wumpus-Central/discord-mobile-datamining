import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_3 = ["children", "xlinkHref", "href", "startOffset", "method", "spacing", "side", "alignmentBaseline", "midLine"];
class TextPath {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = __esModule;
    obj = __esModule(apply);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.setNativeProps = (matrix) => {
      matrix = matrix.matrix;
      let tmp = !matrix;
      if (!matrix) {
        tmp = outer1_1(outer1_2[8])(matrix);
      }
      if (tmp) {
        matrix.matrix = tmp;
      }
      const merged = Object.assign(matrix, _undefined(outer1_2[9]).pickNotNil(outer1_1(outer1_2[10])(matrix, true)));
      if (_undefined.root) {
        const root = _undefined.root;
        root.setNativeProps(matrix);
      }
    };
    return tmp3Result;
  }
}
require("_inherits")(TextPath, require("_isNativeReflectConstruct"));
let items = [
  {
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
      if (href) {
        match = href.match(TextPath(8453).idPattern);
      }
      let tmp5 = match;
      if (match) {
        tmp5 = match[1];
      }
      if (tmp5) {
        let obj1 = TextPath(8452);
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
        const merged = Object.assign(withoutXYResult, importDefault(8459)(obj, true), obj);
        withoutXYResult.ref = self.refMethod;
        obj1 = {};
        const merged1 = Object.assign(withoutXYResult);
        return jsx(importDefault(8540), {});
      } else {
        const _console = console;
        console.warn(`Invalid \`href\` prop for \`TextPath\` element, expected a href like "#id", but got: "${href}"`);
        obj = { ref: null, children: null };
        obj[0] = self.refMethod;
        obj[1] = children;
        return jsx(importDefault(8536), { ref: null, children: null });
      }
      tmp = callback(props, closure_3);
    }
  }
];
const importDefaultResultResult = importDefaultResult(TextPath, items);
importDefaultResultResult.displayName = "TextPath";

export default importDefaultResultResult;