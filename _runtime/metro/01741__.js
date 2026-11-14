// === Module 1741: ? ===

// Module 1741
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _wrapNativeSuperDefault from "_wrapNativeSuper" /* 158 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck_mod from "_classCallCheck" /* 41 */;
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
let _classCallCheck = _classCallCheck_mod;
_possibleConstructorReturnDefault;
const React4 = { IndexSizeError: 1, HierarchyRequestError: 3, WrongDocumentError: 4, InvalidCharacterError: 5, NoModificationAllowedError: 7, NotFoundError: 8, NotSupportedError: 9, InUseAttributeError: 10, InvalidStateError: 11, SyntaxError: 12, InvalidModificationError: 13, NamespaceError: 14, InvalidAccessError: 15, TypeMismatchError: 17, SecurityError: 18, NetworkError: 19, AbortError: 20, URLMismatchError: 21, QuotaExceededError: 22, TimeoutError: 23, InvalidNodeTypeError: 24, DataCloneError: 25 };
class DOMException {
  constructor() {
    str = global;
    if (global === undefined) {
      str = "";
    }
    str2 = arg1;
    if (arg1 === undefined) {
      str2 = "Error";
    }
    self = this;
    tmp = DOMException;
    tmp2 = closure_0(this, DOMException);
    items = [];
    items[0] = str;
    tmp3 = c2;
    obj = c2(DOMException);
    tmp4 = closure_1;
    if (closure_3()) {
      tmp6 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp3(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp4Result = tmp4(self, constructResult);
    setPrototypeOfResult = Object.setPrototypeOf(tmp4Result, tmp.prototype);
    tmp4Result.name = str2;
    num = closure_4[str2];
    if (num == null) {
      num = 0;
    }
    tmp4Result.code = num;
    return tmp4Result;
  }
}
_classCallCheck = DOMException;
_inherits(DOMException, _wrapNativeSuperDefault(Error));

export const DOMException = _createClass(DOMException);