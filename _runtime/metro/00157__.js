// === Module 157: ? ===

// Module 157
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 91 */;

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
let closure_5 = { IndexSizeError: 1, HierarchyRequestError: 3, WrongDocumentError: 4, InvalidCharacterError: 5, NoModificationAllowedError: 7, NotFoundError: 8, NotSupportedError: 9, InUseAttributeError: 10, InvalidStateError: 11, SyntaxError: 12, InvalidModificationError: 13, NamespaceError: 14, InvalidAccessError: 15, TypeMismatchError: 17, SecurityError: 18, NetworkError: 19, AbortError: 20, URLMismatchError: 21, QuotaExceededError: 22, TimeoutError: 23, InvalidNodeTypeError: 24, DataCloneError: 25 };
let obj = { INDEX_SIZE_ERR: 1, DOMSTRING_SIZE_ERR: 2, HIERARCHY_REQUEST_ERR: 3, WRONG_DOCUMENT_ERR: 4, INVALID_CHARACTER_ERR: 5, NO_DATA_ALLOWED_ERR: 6, NO_MODIFICATION_ALLOWED_ERR: 7, NOT_FOUND_ERR: 8, NOT_SUPPORTED_ERR: 9, INUSE_ATTRIBUTE_ERR: 10, INVALID_STATE_ERR: 11, SYNTAX_ERR: 12, INVALID_MODIFICATION_ERR: 13, NAMESPACE_ERR: 14, INVALID_ACCESS_ERR: 15, VALIDATION_ERR: 16, TYPE_MISMATCH_ERR: 17, SECURITY_ERR: 18, NETWORK_ERR: 19, ABORT_ERR: 20, URL_MISMATCH_ERR: 21, QUOTA_EXCEEDED_ERR: 22, TIMEOUT_ERR: 23, INVALID_NODE_TYPE_ERR: 24, DATA_CLONE_ERR: 25 };
let closure_6 = _classPrivateFieldKey("name");
let closure_7 = _classPrivateFieldKey("code");
class DOMException {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_0(this, DOMException);
    items = [];
    items[0] = global;
    tmp2 = c2;
    obj = c2(DOMException);
    tmp3 = closure_1;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp7 = metroRequire;
    definePropertyResult = Object.defineProperty(tmp3Result, metroRequire, { writable: true, value: "a" });
    tmp9 = closure_7;
    definePropertyResult1 = Object.defineProperty(tmp3Result, closure_7, { writable: true, value: "a" });
    if (undefined === fn) {
      tmp16 = closure_3;
      str = "Error";
      closure_3(tmp3Result, tmp7)[tmp7] = "Error";
      num2 = 0;
      closure_3(tmp3Result, tmp9)[tmp9] = 0;
    } else {
      tmp11 = closure_3;
      _String = String;
      tmp12 = closure_3(tmp3Result, tmp7);
      tmp12[tmp7] = String(fn);
      tmp14 = hasOwnProperty;
      num = hasOwnProperty[tmp3Result.name];
      tmp15 = null;
      tmp13 = closure_3(tmp3Result, tmp9);
      if (num == null) {
        num = 0;
      }
      tmp13[tmp9] = num;
    }
    return tmp3Result;
  }
}
_classCallCheck = DOMException;
_inherits(DOMException, _wrapNativeSuper(Error));
obj = {
  key: "name",
  get() {
    return _classPrivateFieldBase(this, closure_6)[closure_6];
  }
};
let items = [
  obj,
  {
    key: "code",
    get() {
      return _classPrivateFieldBase(this, closure_7)[closure_7];
    }
  }
];
const importDefaultResultResult = _createClass(DOMException, items);
for (const key10045 in obj) {
  let _Object = Object;
  obj = { enumerable: true, value: null };
  obj.value = obj[key10045];
  let definePropertyResult1 = Object.defineProperty(importDefaultResultResult, key10045, obj);
  let _Object2 = Object;
  let obj1 = { enumerable: true, value: obj[key10045] };
  let definePropertyResult2 = Object.defineProperty(importDefaultResultResult.prototype, key10045, obj1);
  continue;
}
fn(126);
const module_126 = {
  clone(message) {
    return new importDefaultResultResult(message.message, message.name);
  }
};
module_126.setPlatformObject(importDefaultResultResult, module_126);

export default importDefaultResultResult;