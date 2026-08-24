// === Module 6711: _isNativeReflectConstruct ===

// Module 6711 (_isNativeReflectConstruct)
import noopAll from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 6631 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 6712 */;
import closure_3 from "_classCallCheck" /* 41 */;
import closure_4 from "_possibleConstructorReturn" /* 93 */;
import closure_5 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import { jsx } from "jsxProd" /* 21 */;

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
        match = str.match(self(6623).idPattern);
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
      const merged = Object.assign(self(6622).withoutXY(this, props));
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