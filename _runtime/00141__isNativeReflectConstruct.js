// _runtime/00141__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "00124__isNativeReflectConstruct.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { NativeDOMCxx } from "00139_NativeDOMCxx.js";

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
class ReadOnlyElement {
  constructor() {
    self = this;
    tmp = closure_3(this, ReadOnlyElement);
    tmp2 = closure_5;
    obj = closure_5(ReadOnlyElement);
    tmp3 = closure_4;
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
_inheritsDefault(ReadOnlyElement, require("_isNativeReflectConstruct"));
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
        num = require("00139_NativeDOMCxx.js").getInnerSize(nativeElementReference)[1];
        const obj2 = NativeDOMCxx;
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
        num = require("00139_NativeDOMCxx.js").getBorderWidth(nativeElementReference)[3];
        const obj2 = NativeDOMCxx;
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
        num = require("00139_NativeDOMCxx.js").getBorderWidth(nativeElementReference)[0];
        const obj2 = NativeDOMCxx;
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
        num = require("00139_NativeDOMCxx.js").getInnerSize(nativeElementReference)[0];
        const obj2 = NativeDOMCxx;
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
      if (typeof nativeID === "string") {
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
      return require("00131__isNativeReflectConstruct.js").ELEMENT_NODE;
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
        num = require("00139_NativeDOMCxx.js").getScrollSize(nativeElementReference)[1];
        const obj2 = NativeDOMCxx;
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
        num = require("00139_NativeDOMCxx.js").getScrollPosition(nativeElementReference)[0];
        const obj2 = NativeDOMCxx;
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
        num = require("00139_NativeDOMCxx.js").getScrollPosition(nativeElementReference)[1];
        const obj2 = NativeDOMCxx;
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
        num = require("00139_NativeDOMCxx.js").getScrollSize(nativeElementReference)[0];
        const obj2 = NativeDOMCxx;
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
        str = require("00139_NativeDOMCxx.js").getTagName(nativeElementReference);
        const obj2 = NativeDOMCxx;
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
        str = require("00139_NativeDOMCxx.js").getTextContent(nativeElementReference);
        const obj2 = NativeDOMCxx;
      }
      return str;
    }
  },
  {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const boundingClientRect = require("00139_NativeDOMCxx.js").getBoundingClientRect(nativeElementReference, true);
        let tmp6 = new _isNativeReflectConstructDefault(boundingClientRect[0], boundingClientRect[1], boundingClientRect[2], boundingClientRect[3]);
        const obj2 = NativeDOMCxx;
      } else {
        tmp6 = new _isNativeReflectConstructDefault(0, 0, 0, 0);
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
        hasPointerCaptureResult = require("00139_NativeDOMCxx.js").hasPointerCapture(nativeElementReference, nativeElementReference);
        const obj2 = NativeDOMCxx;
      }
      return hasPointerCaptureResult;
    }
  },
  {
    key: "setPointerCapture",
    value: function setPointerCapture(nativeElementReference, nativeElementReference) {
      nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        require("00139_NativeDOMCxx.js").setPointerCapture(nativeElementReference, nativeElementReference);
        const obj2 = NativeDOMCxx;
      }
      const obj = ReadOnlyElement(136);
    }
  },
  {
    key: "releasePointerCapture",
    value: function releasePointerCapture(nativeElementReference, nativeElementReference) {
      nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const result = require("00139_NativeDOMCxx.js").releasePointerCapture(nativeElementReference, nativeElementReference);
        const obj2 = NativeDOMCxx;
      }
      const obj = ReadOnlyElement(136);
    }
  }
];

export default importDefaultResult(ReadOnlyElement, items);
export const getBoundingClientRect = function _getBoundingClientRect(c5, includeTransform) {
  const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(c5);
  if (null != nativeElementReference) {
    const boundingClientRect = require("00139_NativeDOMCxx.js").getBoundingClientRect(nativeElementReference, includeTransform.includeTransform);
    const tmp12 = new _isNativeReflectConstructDefault(boundingClientRect[0], boundingClientRect[1], boundingClientRect[2], boundingClientRect[3]);
    return tmp12;
  } else {
    const tmp6 = new _isNativeReflectConstructDefault(0, 0, 0, 0);
    return tmp6;
  }
  const obj = ReadOnlyElement(136);
};