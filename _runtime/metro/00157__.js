// _runtime/metro/00157__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import map from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import _wrapNativeSuper from "00158__wrapNativeSuper.js";
import _classPrivateFieldBase from "../00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "../00091__classPrivateFieldKey.js";
import 00126__ from "00126__.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const hasOwnProperty = { IndexSizeError: 1, HierarchyRequestError: 3, WrongDocumentError: 4, InvalidCharacterError: 5, NoModificationAllowedError: 7, NotFoundError: 8, NotSupportedError: 9, InUseAttributeError: 10, InvalidStateError: 11, SyntaxError: 12, InvalidModificationError: 13, NamespaceError: 14, InvalidAccessError: 15, TypeMismatchError: 17, SecurityError: 18, NetworkError: 19, AbortError: 20, URLMismatchError: 21, QuotaExceededError: 22, TimeoutError: 23, InvalidNodeTypeError: 24, DataCloneError: 25 };
let obj = { INDEX_SIZE_ERR: 1, DOMSTRING_SIZE_ERR: 2, HIERARCHY_REQUEST_ERR: 3, WRONG_DOCUMENT_ERR: 4, INVALID_CHARACTER_ERR: 5, NO_DATA_ALLOWED_ERR: 6, NO_MODIFICATION_ALLOWED_ERR: 7, NOT_FOUND_ERR: 8, NOT_SUPPORTED_ERR: 9, INUSE_ATTRIBUTE_ERR: 10, INVALID_STATE_ERR: 11, SYNTAX_ERR: 12, INVALID_MODIFICATION_ERR: 13, NAMESPACE_ERR: 14, INVALID_ACCESS_ERR: 15, VALIDATION_ERR: 16, TYPE_MISMATCH_ERR: 17, SECURITY_ERR: 18, NETWORK_ERR: 19, ABORT_ERR: 20, URL_MISMATCH_ERR: 21, QUOTA_EXCEEDED_ERR: 22, TIMEOUT_ERR: 23, INVALID_NODE_TYPE_ERR: 24, DATA_CLONE_ERR: 25 };
let closure_6 = _classPrivateFieldKey("name");
let closure_7 = _classPrivateFieldKey("code");
class DOMException {
  constructor(Aborted, AbortError) {
    let constructResult;
    const self = this;
    _classCallCheck(this, DOMException);
    const items = [Aborted];
    const obj = _getPrototypeOf(DOMException);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = map(self, constructResult);
    Object.defineProperty(tmp3Result, closure_6, { writable: true, value: "a" });
    Object.defineProperty(tmp3Result, closure_7, { writable: true, value: "a" });
    if (undefined === AbortError) {
      _classPrivateFieldBase(tmp3Result, closure_6)[closure_6] = "Error";
      _classPrivateFieldBase(tmp3Result, closure_7)[closure_7] = 0;
    } else {
      const _String = String;
      const tmp12 = _classPrivateFieldBase(tmp3Result, closure_6);
      tmp12[closure_6] = String(AbortError);
      let num = closure_5[tmp3Result.name];
      const tmp13 = _classPrivateFieldBase(tmp3Result, closure_7);
      if (num == null) {
        num = 0;
      }
      tmp13[closure_7] = num;
    }
    return tmp3Result;
  }
}
_inherits(DOMException, _wrapNativeSuper(Error));
let items = [, ];
const obj2 = {
  key: "name",
  get() {
    return _classPrivateFieldBase(this, closure_6)[closure_6];
  }
};
items[0] = obj2;
items[1] = {
  key: "code",
  get() {
    return _classPrivateFieldBase(this, closure_7)[closure_7];
  }
};
const importDefaultResultResult = _createClass(DOMException, items);
const metroImportAll = importDefaultResultResult;
for (const key10045 in obj) {
  let _Object = Object;
  let obj3 = { enumerable: true, value: obj[key10045] };
  let definePropertyResult1 = Object.defineProperty(importDefaultResultResult, key10045, obj3);
  let _Object2 = Object;
  let obj4 = { enumerable: true, value: obj[key10045] };
  let definePropertyResult2 = Object.defineProperty(importDefaultResultResult.prototype, key10045, obj4);
  continue;
}
const obj5 = {
  clone(message) {
    const tmp = new metroImportAll(message.message, message.name);
    return tmp;
  }
};
module_126.setPlatformObject(importDefaultResultResult, obj5);

export default importDefaultResultResult;