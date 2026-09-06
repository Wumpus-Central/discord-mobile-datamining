// _runtime/metro/08546__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _modDef8477 from "08477__.js";
import _modDef8547 from "08547__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const Rect = fn;
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
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;
class Rect {
  constructor() {
    self = this;
    tmp = closure_3(this, Rect);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(Rect);
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
_inherits(Rect, _modDef8477);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    const size = { x: props.x, y: props.y, width: props.width, height: props.height, rx: props.rx, ry: props.ry };
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    };
    const merged = Object.assign(Rect(8468).withoutXY(this, props));
    const merged1 = Object.assign(size);
    return (
      <tmp
        ref={function ref(arg0) {
          return self.refMethod(arg0);
        }}
      />
    );
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(Rect, items);
importDefaultResultResult.displayName = "Rect";
importDefaultResultResult.defaultProps = { x: 0, y: 0, width: 0, height: 0 };

export default importDefaultResultResult;
