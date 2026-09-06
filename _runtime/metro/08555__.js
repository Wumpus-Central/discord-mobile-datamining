// _runtime/metro/08555__.js
import appendTransformPropsDefault from "../08461_appendTransformProps.js";
import extractFontDefault from "../08475_extractFont.js";
import _modDef8477 from "08477__.js";
import _modDef8552 from "08552__.js";
import _modDef8556 from "08556__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroRequire from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

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
      const merged = Object.assign(matrix, TextPath(8469).pickNotNil(extractFontDefault(matrix, true)));
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(matrix);
      }
    };
    return tmp3Result;
  }
}
_inherits(TextPath, _modDef8477);
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
      match = href.match(TextPath(8469).idPattern);
    }
    let tmp5 = match;
    if (match) {
      tmp5 = match[1];
    }
    if (tmp5) {
      let obj1 = TextPath(8468);
      const withoutXYResult = obj1.withoutXY(self, tmp);
      const _Object = Object;
      let obj = { children };
      obj = { href: tmp5, startOffset: num, method, spacing, side, alignmentBaseline, midLine };
      const merged = Object.assign(withoutXYResult, extractFontDefault(obj, true), obj);
      withoutXYResult.ref = self.refMethod;
      obj1 = {};
      const merged1 = Object.assign(withoutXYResult);
      return jsx(_modDef8556, {});
    } else {
      const _console = console;
      console.warn(`Invalid \`href\` prop for \`TextPath\` element, expected a href like "#id", but got: "${href}"`);
      obj = { ref: self.refMethod, children };
      return jsx(_modDef8552, { ref: self.refMethod, children });
    }
    tmp = _objectWithoutProperties(props, closure_3);
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(TextPath, items);
importDefaultResultResult.displayName = "TextPath";

export default importDefaultResultResult;
