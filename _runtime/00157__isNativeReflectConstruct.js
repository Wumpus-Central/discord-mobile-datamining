// === Module 157: _isNativeReflectConstruct ===

// Module 157 (_isNativeReflectConstruct)
import DOMException from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult1 from "_inherits" /* 98 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;
import importDefaultResult3 from "_classPrivateFieldKey" /* 91 */;
import "setPlatformObject";
import importDefaultResult2 from "_wrapNativeSuper" /* 158 */;

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
let closure_5 = { IndexSizeError: 1, HierarchyRequestError: 3, WrongDocumentError: 4, InvalidCharacterError: 5, NoModificationAllowedError: 7, NotFoundError: 8, NotSupportedError: 9, InUseAttributeError: 10, InvalidStateError: 11, SyntaxError: 12, InvalidModificationError: 13, NamespaceError: 14, InvalidAccessError: 15, TypeMismatchError: 17, SecurityError: 18, NetworkError: 19, AbortError: 20, URLMismatchError: 21, QuotaExceededError: 22, TimeoutError: 23, InvalidNodeTypeError: 24, DataCloneError: 25 };
let obj = { INDEX_SIZE_ERR: 1, DOMSTRING_SIZE_ERR: 2, HIERARCHY_REQUEST_ERR: 3, WRONG_DOCUMENT_ERR: 4, INVALID_CHARACTER_ERR: 5, NO_DATA_ALLOWED_ERR: 6, NO_MODIFICATION_ALLOWED_ERR: 7, NOT_FOUND_ERR: 8, NOT_SUPPORTED_ERR: 9, INUSE_ATTRIBUTE_ERR: 10, INVALID_STATE_ERR: 11, SYNTAX_ERR: 12, INVALID_MODIFICATION_ERR: 13, NAMESPACE_ERR: 14, INVALID_ACCESS_ERR: 15, VALIDATION_ERR: 16, TYPE_MISMATCH_ERR: 17, SECURITY_ERR: 18, NETWORK_ERR: 19, ABORT_ERR: 20, URL_MISMATCH_ERR: 21, QUOTA_EXCEEDED_ERR: 22, TIMEOUT_ERR: 23, INVALID_NODE_TYPE_ERR: 24, DATA_CLONE_ERR: 25 };
let closure_6 = importDefaultResult3("name");
let closure_7 = importDefaultResult3("code");
class DOMException {
  constructor(arg0, arg1) {
    self = this;
    tmp = DOMException(this, DOMException);
    items = [];
    items[0] = global;
    tmp2 = closure_2;
    obj = closure_2(DOMException);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp7 = closure_6;
    definePropertyResult = Object.defineProperty(tmp3Result, closure_6, { writable: true, value: "a" });
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
      tmp14 = closure_5;
      num = closure_5[tmp3Result.name];
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
importDefaultResult1(DOMException, importDefaultResult2(Error));
obj = {
  key: "name",
  get() {
    return callback2(this, closure_6)[closure_6];
  }
};
let items = [
  obj,
  {
    key: "code",
    get() {
      return callback2(this, closure_7)[closure_7];
    }
  }
];
const importDefaultResultResult = importDefaultResult(DOMException, items);
for (const key10045 in obj) {
  let _Object = Object;
  obj = { enumerable: true, value: null };
  obj[1] = obj[key10045];
  let definePropertyResult1 = Object.defineProperty(importDefaultResultResult, key10045, obj);
  let _Object2 = Object;
  let obj1 = { enumerable: true, value: null };
  obj1[1] = obj[key10045];
  let definePropertyResult2 = Object.defineProperty(importDefaultResultResult.prototype, key10045, obj1);
  continue;
}
const setPlatformObject = {
  clone(message) {
    return new closure_8(message.message, message.name);
  }
};
setPlatformObject.setPlatformObject(importDefaultResultResult, setPlatformObject);

export default importDefaultResultResult;