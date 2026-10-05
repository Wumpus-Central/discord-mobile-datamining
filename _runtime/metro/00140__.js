// _runtime/metro/00140__.js
import _mod136 from "00136__.js";
import _mod137 from "00137__.js";
import _mod138 from "00138__.js";
import NativeDOMCxxDefault from "../00139_NativeDOMCxx.js";
import _getBoundingClientRectDefault from "../00141__getBoundingClientRect.js";
import _modDef143 from "00143__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const require = globalThis.__r;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class ReactNativeDocument {
  constructor(_rootTag, arg1) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ReactNativeDocument);
    const items = [arg1, null];
    const obj = _getPrototypeOf(ReactNativeDocument);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    tmp3Result._rootTag = _rootTag;
    const obj2 = _mod138;
    const reactNativeDocumentElementInstanceHandle = obj2.createReactNativeDocumentElementInstanceHandle();
    const tmp8 = new _modDef143(_rootTag, null, reactNativeDocumentElementInstanceHandle, tmp3Result);
    const obj3 = NativeDOMCxxDefault;
    const linkRootNodeResult = obj3.linkRootNode(_rootTag, reactNativeDocumentElementInstanceHandle);
    const obj4 = _mod138;
    const result = obj4.setNativeElementReferenceForReactNativeDocumentElementInstanceHandle(
      reactNativeDocumentElementInstanceHandle,
      linkRootNodeResult,
    );
    const obj5 = _mod138;
    const result1 = obj5.setPublicInstanceForReactNativeDocumentElementInstanceHandle(
      reactNativeDocumentElementInstanceHandle,
      tmp8,
    );
    tmp3Result._documentElement = tmp8;
    return tmp3Result;
  }
}
_inherits(ReactNativeDocument, require("00131__.js"));
let obj = {
  key: "childElementCount",
  get() {
    return 1;
  },
};
let items = [
  obj,
  {
    key: "children",
    get() {
      const items = [this.documentElement];
      const obj = require("00129__.js");
      return obj.createHTMLCollection(items);
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
      const obj = NativeDOMCxxDefault;
      const element = obj.getElementById(this._rootTag, ReanimatedCustomWebAnimationsStyle);
      if (null == element) {
        return null;
      } else {
        const obj2 = _mod136;
        const publicInstanceFromInstanceHandle = obj2.getPublicInstanceFromInstanceHandle(element);
        let tmp6 = null;
        if (publicInstanceFromInstanceHandle instanceof _getBoundingClientRectDefault) {
          tmp6 = publicInstanceFromInstanceHandle;
        }
        return tmp6;
      }
    },
  },
];
const importDefaultResultResult = _createClass(ReactNativeDocument, items);
const metroImportDefault = importDefaultResultResult;

export default importDefaultResultResult;
export const createReactNativeDocument = function createReactNativeDocument(containerTag) {
  const obj = _mod137;
  const tmp = new metroImportDefault(containerTag, obj.createReactNativeDocumentInstanceHandle(containerTag));
  return tmp;
};
