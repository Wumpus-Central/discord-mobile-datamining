// === Module 141: _isNativeReflectConstruct ===

// Module 141 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

const ReadOnlyElement = arg1;
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
class ReadOnlyElement {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, ReadOnlyElement);
    tmp2 = __esModule;
    obj = __esModule(ReadOnlyElement);
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
require("_inherits")(ReadOnlyElement, require("_isNativeReflectConstruct"));
const items = [
  {
    key: "childElementCount",
    get() {
      return ReadOnlyElement(131).getChildNodes(this, (nodeType) => nodeType.nodeType === callback(table[9]).ELEMENT_NODE).length;
    }
  },
  {
    key: "children",
    get() {
      const obj = ReadOnlyElement(129);
      return obj.createHTMLCollection(ReadOnlyElement(131).getChildNodes(this, (nodeType) => nodeType.nodeType === callback(table[9]).ELEMENT_NODE));
    }
  },
  {
    key: "clientHeight",
    get() {
      const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = importDefault(139).getInnerSize(nativeElementReference)[1];
        const obj2 = importDefault(139);
      }
      return num;
    }
  },
  {
    key: "clientLeft",
    get() {
      const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = importDefault(139).getBorderWidth(nativeElementReference)[3];
        const obj2 = importDefault(139);
      }
      return num;
    }
  },
  {
    key: "clientTop",
    get() {
      const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = importDefault(139).getBorderWidth(nativeElementReference)[0];
        const obj2 = importDefault(139);
      }
      return num;
    }
  },
  {
    key: "clientWidth",
    get() {
      const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = importDefault(139).getInnerSize(nativeElementReference)[0];
        const obj2 = importDefault(139);
      }
      return num;
    }
  },
  {
    key: "firstElementChild",
    get() {
      const childNodes = ReadOnlyElement(131).getChildNodes(this, (nodeType) => nodeType.nodeType === callback(table[9]).ELEMENT_NODE);
      let first = null;
      if (0 !== childNodes.length) {
        first = childNodes[0];
      }
      return first;
    }
  },
  {
    key: "id",
    get() {
      const currentProps = ReadOnlyElement(136).getCurrentProps(this);
      let nativeID = currentProps.id;
      if (nativeID == null) {
        nativeID = currentProps.nativeID;
      }
      let str = "";
      if (typeof nativeID !== "ge") {
        str = nativeID;
      }
      return str;
    }
  },
  {
    key: "lastElementChild",
    get() {
      const childNodes = ReadOnlyElement(131).getChildNodes(this, (nodeType) => nodeType.nodeType === callback(table[9]).ELEMENT_NODE);
      let tmp = null;
      if (0 !== childNodes.length) {
        tmp = childNodes[childNodes.length - 1];
      }
      return tmp;
    }
  },
  {
    key: "nextElementSibling",
    get() {
      return ReadOnlyElement(142).getElementSibling(this, "next");
    }
  },
  {
    key: "nodeName",
    get() {
      return this.tagName;
    }
  },
  {
    key: "nodeType",
    get() {
      return importDefault(131).ELEMENT_NODE;
    }
  },
  {
    key: "nodeValue",
    get() {
      return null;
    },
    set(arg0) {

    }
  },
  {
    key: "previousElementSibling",
    get() {
      return ReadOnlyElement(142).getElementSibling(this, "previous");
    }
  },
  {
    key: "scrollHeight",
    get() {
      const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = importDefault(139).getScrollSize(nativeElementReference)[1];
        const obj2 = importDefault(139);
      }
      return num;
    }
  },
  {
    key: "scrollLeft",
    get() {
      const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = importDefault(139).getScrollPosition(nativeElementReference)[0];
        const obj2 = importDefault(139);
      }
      return num;
    }
  },
  {
    key: "scrollTop",
    get() {
      const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = importDefault(139).getScrollPosition(nativeElementReference)[1];
        const obj2 = importDefault(139);
      }
      return num;
    }
  },
  {
    key: "scrollWidth",
    get() {
      const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = importDefault(139).getScrollSize(nativeElementReference)[0];
        const obj2 = importDefault(139);
      }
      return num;
    }
  },
  {
    key: "tagName",
    get() {
      const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      let str = "";
      if (null != nativeElementReference) {
        str = importDefault(139).getTagName(nativeElementReference);
        const obj2 = importDefault(139);
      }
      return str;
    }
  },
  {
    key: "textContent",
    get() {
      const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      let str = "";
      if (null != nativeElementReference) {
        str = importDefault(139).getTextContent(nativeElementReference);
        const obj2 = importDefault(139);
      }
      return str;
    }
  },
  {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect(nativeElementReference, includeTransform) {
      nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const boundingClientRect = importDefault(139).getBoundingClientRect(nativeElementReference, true);
        let tmp6 = new importDefault(124)(boundingClientRect[0], boundingClientRect[1], boundingClientRect[2], boundingClientRect[3]);
        const obj2 = importDefault(139);
      } else {
        tmp6 = new importDefault(124)(0, 0, 0, 0);
      }
      return tmp6;
    }
  },
  {
    key: "hasPointerCapture",
    value: function hasPointerCapture(nativeElementReference, nativeElementReference) {
      nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      let hasPointerCaptureResult = null != nativeElementReference;
      if (hasPointerCaptureResult) {
        hasPointerCaptureResult = importDefault(139).hasPointerCapture(nativeElementReference, nativeElementReference);
        const obj2 = importDefault(139);
      }
      return hasPointerCaptureResult;
    }
  },
  {
    key: "setPointerCapture",
    value: function setPointerCapture(nativeElementReference, nativeElementReference) {
      nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        importDefault(139).setPointerCapture(nativeElementReference, nativeElementReference);
        const obj2 = importDefault(139);
      }
    }
  },
  {
    key: "releasePointerCapture",
    value: function releasePointerCapture(nativeElementReference, nativeElementReference) {
      nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const result = importDefault(139).releasePointerCapture(nativeElementReference, nativeElementReference);
        const obj2 = importDefault(139);
      }
    }
  }
];

export default importDefaultResult(ReadOnlyElement, items);
export const getBoundingClientRect = function _getBoundingClientRect(nativeElementReference3, includeTransform) {
  const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(nativeElementReference3);
  if (null != nativeElementReference) {
    const boundingClientRect = importDefault(139).getBoundingClientRect(nativeElementReference, includeTransform.includeTransform);
    const tmp12 = new importDefault(124)(boundingClientRect[0], boundingClientRect[1], boundingClientRect[2], boundingClientRect[3]);
    return tmp12;
  } else {
    const tmp6 = new importDefault(124)(0, 0, 0, 0);
    return tmp6;
  }
  const obj = ReadOnlyElement(136);
};