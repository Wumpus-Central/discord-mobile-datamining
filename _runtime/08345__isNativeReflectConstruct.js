// _runtime/08345__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "08265__isNativeReflectConstruct.js";
import __INTERNAL_VIEW_CONFIGDefault from "metro/08346___INTERNAL_VIEW_CONFIG.js";
import closure_3 from "metro/00041__classCallCheck.js";
import closure_4 from "metro/00093__possibleConstructorReturn.js";
import closure_5 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { jsx } from "react/00021_jsxProd.js";

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
noopAll;
class Use {
  constructor() {
    self = this;
    tmp = closure_3(this, Use);
    tmp2 = closure_5;
    obj = closure_5(Use);
    tmp3 = closure_4;
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
_inheritsDefault(Use, _isNativeReflectConstructDefault);
const items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let str = props.href;
      ({ children, x, y, width, height } = props);
      if (undefined === str) {
        str = props.xlinkHref;
      }
      let match = str;
      if (str) {
        match = str.match(self(8257).idPattern);
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
      const tmp7 = __INTERNAL_VIEW_CONFIGDefault;
      const merged = Object.assign(self(8256).withoutXY(this, props));
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