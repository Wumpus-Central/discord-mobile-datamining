// _runtime/00140__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import NativeDOMCxxDefault from "00139_NativeDOMCxx.js";
import _isNativeReflectConstructDefault from "00141__isNativeReflectConstruct.js";
import _isNativeReflectConstructDefault2 from "00143__isNativeReflectConstruct.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

const ReactNativeDocument = arg1;
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
class ReactNativeDocument {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_3(this, ReactNativeDocument);
    items = [, ];
    items[0] = arg1;
    items[1] = null;
    tmp2 = closure_5;
    obj = closure_5(ReactNativeDocument);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._rootTag = global;
    obj2 = require("ReactNativeDocumentElementInstanceHandleImpl");
    reactNativeDocumentElementInstanceHandle = obj2.createReactNativeDocumentElementInstanceHandle();
    tmp8 = new require("_isNativeReflectConstruct")(global, null, reactNativeDocumentElementInstanceHandle, tmp3Result);
    obj3 = require("NativeDOMCxx");
    linkRootNodeResult = obj3.linkRootNode(global, reactNativeDocumentElementInstanceHandle);
    obj4 = require("ReactNativeDocumentElementInstanceHandleImpl");
    result = obj4.setNativeElementReferenceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, linkRootNodeResult);
    obj5 = require("ReactNativeDocumentElementInstanceHandleImpl");
    result1 = obj5.setPublicInstanceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, tmp8);
    tmp3Result._documentElement = tmp8;
    return tmp3Result;
  }
}
_inheritsDefault(ReactNativeDocument, require("_isNativeReflectConstruct"));
let items = [
  {
    key: "childElementCount",
    get() {
      return 1;
    }
  },
  {
    key: "children",
    get() {
      const items = [this.documentElement];
      return ReactNativeDocument(129).createHTMLCollection(items);
    }
  },
  {
    key: "documentElement",
    get() {
      return this._documentElement;
    }
  },
  {
    key: "firstElementChild",
    get() {
      return this.documentElement;
    }
  },
  {
    key: "lastElementChild",
    get() {
      return this.documentElement;
    }
  },
  {
    key: "nodeName",
    get() {
      return "#document";
    }
  },
  {
    key: "nodeType",
    get() {
      return require("00131__isNativeReflectConstruct.js").DOCUMENT_NODE;
    }
  },
  {
    key: "nodeValue",
    get() {
      return null;
    }
  },
  {
    key: "textContent",
    get() {
      return null;
    }
  },
  {
    key: "getElementById",
    value: function getElementById(c8, c8) {
      const element = NativeDOMCxxDefault.getElementById(this._rootTag, c8);
      if (null == element) {
        return null;
      } else {
        const publicInstanceFromInstanceHandle = ReactNativeDocument(136).getPublicInstanceFromInstanceHandle(element);
        let tmp6 = null;
        if (publicInstanceFromInstanceHandle instanceof _isNativeReflectConstructDefault) {
          tmp6 = publicInstanceFromInstanceHandle;
        }
        return tmp6;
      }
    }
  }
];
const importDefaultResultResult = importDefaultResult(ReactNativeDocument, items);
const error = importDefaultResultResult;

export default importDefaultResultResult;
export const createReactNativeDocument = function createReactNativeDocument(arg0) {
  const obj = ReactNativeDocument(137);
  return new closure_7(arg0, ReactNativeDocument(137).createReactNativeDocumentInstanceHandle(arg0));
};