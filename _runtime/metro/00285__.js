// === Module 285: ? ===

// Module 285
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef286 from "module_286" /* 286 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
class ResponderEvent {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    self = this;
    tmp = closure_0(this, ResponderEvent);
    items = [, , , ];
    items[0] = global;
    items[1] = arg1;
    items[2] = importDefault;
    items[3] = importAll;
    tmp2 = c2;
    obj = c2(ResponderEvent);
    tmp3 = closure_1;
    if (closure_3()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._touchHistory = module;
    return tmp3Result;
  }
}
_classCallCheck = ResponderEvent;
_inherits(ResponderEvent, _modDef286);
let items = [
  {
    key: "touchHistory",
    get() {
      return this._touchHistory;
    }
  }
];

export default _createClass(ResponderEvent, items);