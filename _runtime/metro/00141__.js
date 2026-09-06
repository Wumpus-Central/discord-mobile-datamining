// === Module 141: ? ===

// Module 141
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef124 from "module_124" /* 124 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
_possibleConstructorReturnDefault;
class ReadOnlyElement {
  constructor() {
    self = this;
    tmp = closure_3(this, ReadOnlyElement);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(ReadOnlyElement);
    tmp3 = closure_4;
    if (metroRequire()) {
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
_inherits(ReadOnlyElement, require("module_131"));
const items = [
  {
    key: "childElementCount",
    get() {
      return ReadOnlyElement(131).getChildNodes(this, (nodeType) => nodeType.nodeType === require("module_131").ELEMENT_NODE).length;
    }
  },
  {
    key: "children",
    get() {
      const obj = ReadOnlyElement(129);
      return obj.createHTMLCollection(ReadOnlyElement(131).getChildNodes(this, (nodeType) => nodeType.nodeType === require("module_131").ELEMENT_NODE));
    }
  },
  {
    key: "clientHeight",
    get() {
      const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = require("NativeDOMCxx").getInnerSize(nativeElementReference)[1];
        const obj2 = require("NativeDOMCxx");
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
        num = require("NativeDOMCxx").getBorderWidth(nativeElementReference)[3];
        const obj2 = require("NativeDOMCxx");
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
        num = require("NativeDOMCxx").getBorderWidth(nativeElementReference)[0];
        const obj2 = require("NativeDOMCxx");
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
        num = require("NativeDOMCxx").getInnerSize(nativeElementReference)[0];
        const obj2 = require("NativeDOMCxx");
      }
      return num;
    }
  },
  {
    key: "firstElementChild",
    get() {
      const childNodes = ReadOnlyElement(131).getChildNodes(this, (nodeType) => nodeType.nodeType === require("module_131").ELEMENT_NODE);
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
      if (typeof nativeID === "string") {
        str = nativeID;
      }
      return str;
    }
  },
  {
    key: "lastElementChild",
    get() {
      const childNodes = ReadOnlyElement(131).getChildNodes(this, (nodeType) => nodeType.nodeType === require("module_131").ELEMENT_NODE);
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
      return require("module_131").ELEMENT_NODE;
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
        num = require("NativeDOMCxx").getScrollSize(nativeElementReference)[1];
        const obj2 = require("NativeDOMCxx");
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
        num = require("NativeDOMCxx").getScrollPosition(nativeElementReference)[0];
        const obj2 = require("NativeDOMCxx");
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
        num = require("NativeDOMCxx").getScrollPosition(nativeElementReference)[1];
        const obj2 = require("NativeDOMCxx");
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
        num = require("NativeDOMCxx").getScrollSize(nativeElementReference)[0];
        const obj2 = require("NativeDOMCxx");
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
        str = require("NativeDOMCxx").getTagName(nativeElementReference);
        const obj2 = require("NativeDOMCxx");
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
        str = require("NativeDOMCxx").getTextContent(nativeElementReference);
        const obj2 = require("NativeDOMCxx");
      }
      return str;
    }
  },
  {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const boundingClientRect = require("NativeDOMCxx").getBoundingClientRect(nativeElementReference, true);
        let tmp6 = new _modDef124(boundingClientRect[0], boundingClientRect[1], boundingClientRect[2], boundingClientRect[3]);
        const obj2 = require("NativeDOMCxx");
      } else {
        tmp6 = new _modDef124(0, 0, 0, 0);
      }
      return tmp6;
    }
  },
  {
    key: "hasPointerCapture",
    value: function hasPointerCapture(nativeElementReference) {
      nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      let hasPointerCaptureResult = null != nativeElementReference;
      if (hasPointerCaptureResult) {
        hasPointerCaptureResult = require("NativeDOMCxx").hasPointerCapture(nativeElementReference, nativeElementReference);
        const obj2 = require("NativeDOMCxx");
      }
      return hasPointerCaptureResult;
    }
  },
  {
    key: "setPointerCapture",
    value: function setPointerCapture(nativeElementReference) {
      nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        require("NativeDOMCxx").setPointerCapture(nativeElementReference, nativeElementReference);
        const obj2 = require("NativeDOMCxx");
      }
    }
  },
  {
    key: "releasePointerCapture",
    value: function releasePointerCapture(nativeElementReference) {
      nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const result = require("NativeDOMCxx").releasePointerCapture(nativeElementReference, nativeElementReference);
        const obj2 = require("NativeDOMCxx");
      }
    }
  }
];

export default _createClass(ReadOnlyElement, items);
export const getBoundingClientRect = function _getBoundingClientRect(c5, includeTransform) {
  const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(c5);
  if (null != nativeElementReference) {
    const boundingClientRect = require("NativeDOMCxx").getBoundingClientRect(nativeElementReference, includeTransform.includeTransform);
    const tmp12 = new _modDef124(boundingClientRect[0], boundingClientRect[1], boundingClientRect[2], boundingClientRect[3]);
    return tmp12;
  } else {
    const tmp6 = new _modDef124(0, 0, 0, 0);
    return tmp6;
  }
  const obj = ReadOnlyElement(136);
};