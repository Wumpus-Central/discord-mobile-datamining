// _runtime/07953__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";
import { __INTERNAL_VIEW_CONFIG } from "metro/07954___INTERNAL_VIEW_CONFIG.js";

const Line = arg1;
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
class Line {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, Line);
    tmp2 = __esModule;
    obj = __esModule(Line);
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
require("_inherits")(Line, require("_isNativeReflectConstruct"));
const items = [
  {
    key: "render",
    value: function render() {
      let x1;
      let x2;
      let y1;
      let y2;
      const self = this;
      const props = this.props;
      let obj = {};
      ({ x1, y1, x2, y2 } = props);
      const merged = Object.assign(self(7895).extract(this, props));
      obj.x1 = x1;
      obj.y1 = y1;
      obj.x2 = x2;
      obj.y2 = y2;
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      };
      const obj2 = self(7895);
      const merged1 = Object.assign(obj);
      return jsx(__INTERNAL_VIEW_CONFIG, {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      });
    }
  }
];
const importDefaultResultResult = importDefaultResult(Line, items);
importDefaultResultResult.displayName = "Line";
importDefaultResultResult.defaultProps = { x1: 0, y1: 0, x2: 0, y2: 0 };

export default importDefaultResultResult;