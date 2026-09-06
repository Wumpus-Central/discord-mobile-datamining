// === Module 8557: ? ===

// Module 8557
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef8477 from "module_8477" /* 8477 */;
import _modDef8558 from "module_8558" /* 8558 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const Use = fn;
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
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;
class Use {
  constructor() {
    self = this;
    tmp = closure_3(this, Use);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(Use);
    tmp3 = closure_4;
    if (closure_7()) {
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
_inherits(Use, _modDef8477);
const entry = {
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
      match = str.match(Use(8469).idPattern);
    }
    let tmp4 = match;
    if (match) {
      tmp4 = match[1];
    }
    if (!tmp4) {
      const _console = console;
      console.warn(`Invalid \`href\` prop for \`Use\` element, expected a href like "#id", but got: "${str}"`);
    }
    const size = { href: tmp4, x, y, width, height };
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const merged = Object.assign(Use(8468).withoutXY(this, props));
    const merged1 = Object.assign(size);
    obj.children = children;
    return <tmp7 ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Use, items);
importDefaultResultResult.displayName = "Use";
importDefaultResultResult.defaultProps = { x: 0, y: 0, width: 0, height: 0 };

export default importDefaultResultResult;