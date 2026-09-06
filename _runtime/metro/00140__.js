// _runtime/metro/00140__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import NativeDOMCxxDefault from "../00139_NativeDOMCxx.js";
import _modDef143 from "00143__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const _modDef141 = tmp(141);
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
  } catch (err) {}
}
_possibleConstructorReturnDefault;
class ReactNativeDocument {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_3(this, ReactNativeDocument);
    items = [,];
    items[0] = arg1;
    items[1] = null;
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(ReactNativeDocument);
    tmp3 = closure_4;
    if (metroRequire()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._rootTag = global;
    obj2 = closure_0(c2[10]);
    reactNativeDocumentElementInstanceHandle = obj2.createReactNativeDocumentElementInstanceHandle();
    tmp8 = new closure_1(c2[11])(global, null, reactNativeDocumentElementInstanceHandle, tmp3Result);
    obj3 = closure_1(c2[7]);
    linkRootNodeResult = obj3.linkRootNode(global, reactNativeDocumentElementInstanceHandle);
    obj4 = closure_0(c2[10]);
    result = obj4.setNativeElementReferenceForReactNativeDocumentElementInstanceHandle(
      reactNativeDocumentElementInstanceHandle,
      linkRootNodeResult,
    );
    obj5 = closure_0(c2[10]);
    result1 = obj5.setPublicInstanceForReactNativeDocumentElementInstanceHandle(
      reactNativeDocumentElementInstanceHandle,
      tmp8,
    );
    tmp3Result._documentElement = tmp8;
    return tmp3Result;
  }
}
_inherits(ReactNativeDocument, require("00131__.js"));
let items = [
  {
    key: "childElementCount",
    get() {
      return 1;
    },
  },
  {
    key: "children",
    get() {
      const items = [this.documentElement];
      return ReactNativeDocument(129).createHTMLCollection(items);
    },
  },
  {
    key: "documentElement",
    get() {
      return this._documentElement;
    },
  },
  {
    key: "firstElementChild",
    get() {
      return this.documentElement;
    },
  },
  {
    key: "lastElementChild",
    get() {
      return this.documentElement;
    },
  },
  {
    key: "nodeName",
    get() {
      return "#document";
    },
  },
  {
    key: "nodeType",
    get() {
      return require("00131__.js").DOCUMENT_NODE;
    },
  },
  {
    key: "nodeValue",
    get() {
      return null;
    },
  },
  {
    key: "textContent",
    get() {
      return null;
    },
  },
  {
    key: "getElementById",
    value: function getElementById(ReanimatedCustomWebAnimationsStyle) {
      const element = NativeDOMCxxDefault.getElementById(this._rootTag, ReanimatedCustomWebAnimationsStyle);
      if (null == element) {
        return null;
      } else {
        const publicInstanceFromInstanceHandle = ReactNativeDocument(136).getPublicInstanceFromInstanceHandle(element);
        let tmp6 = null;
        if (publicInstanceFromInstanceHandle instanceof _modDef141) {
          tmp6 = publicInstanceFromInstanceHandle;
        }
        return tmp6;
      }
    },
  },
];
const importDefaultResultResult = _createClass(ReactNativeDocument, items);

export default importDefaultResultResult;
export const createReactNativeDocument = function createReactNativeDocument(containerTag) {
  const obj = ReactNativeDocument(137);
  return new importDefaultResultResult(
    containerTag,
    ReactNativeDocument(137).createReactNativeDocumentInstanceHandle(containerTag),
  );
};
