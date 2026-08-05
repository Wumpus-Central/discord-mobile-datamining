// _runtime/08513__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";
import { __INTERNAL_VIEW_CONFIG } from "metro/08514___INTERNAL_VIEW_CONFIG.js";

const Use = arg1;
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
class Use {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, Use);
    tmp2 = __esModule;
    obj = __esModule(Use);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
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
require("_inherits")(Use, require("_isNativeReflectConstruct"));
const items = [
  {
    key: "render",
    value: function render() {
      let children;
      let height;
      let width;
      let x;
      let y;
      const self = this;
      const props = this.props;
      let str = props.href;
      ({ children, x, y, width, height } = props);
      if (undefined === str) {
        str = props.xlinkHref;
      }
      let match = str;
      if (str) {
        match = str.match(self(8425).idPattern);
      }
      let tmp4 = match;
      if (match) {
        tmp4 = match[1];
      }
      if (!tmp4) {
        const _console = console;
        console.warn(`Invalid \`href\` prop for \`Use\` element, expected a href like "#id", but got: "${str}"`);
      }
      let obj = { href: tmp4, x, y, width, height };
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      };
      const tmp7 = __INTERNAL_VIEW_CONFIG;
      const merged = Object.assign(self(8424).withoutXY(this, props));
      const merged1 = Object.assign(obj);
      obj.children = children;
      return <tmp7 ref={function ref(arg0) {
        return self.refMethod(arg0);
      }} />;
    }
  }
];
const importDefaultResultResult = importDefaultResult(Use, items);
importDefaultResultResult.displayName = "Use";
importDefaultResultResult.defaultProps = { x: 0, y: 0, width: 0, height: 0 };

export default importDefaultResultResult;