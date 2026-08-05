// _runtime/00141__isNativeReflectConstruct.js
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
        num = require("00139_NativeDOMCxx.js").getInnerSize(nativeElementReference)[1];
        const obj2 = require("00139_NativeDOMCxx.js");
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
        const obj2 = require("00139_NativeDOMCxx.js");
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
        const obj2 = require("00139_NativeDOMCxx.js");
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
        const obj2 = require("00139_NativeDOMCxx.js");
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
        const obj2 = require("00139_NativeDOMCxx.js");
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
        const obj2 = require("00139_NativeDOMCxx.js");
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
        const obj2 = require("00139_NativeDOMCxx.js");
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
        const obj2 = require("00139_NativeDOMCxx.js");
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
        const obj2 = require("00139_NativeDOMCxx.js");
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
        const obj2 = require("00139_NativeDOMCxx.js");
      }
      return str;
    }
  },
  {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect(nativeElementReference, includeTransform) {
      nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const boundingClientRect = require("00139_NativeDOMCxx.js").getBoundingClientRect(nativeElementReference, true);
        let tmp6 = new require("00124__isNativeReflectConstruct.js")(boundingClientRect[0], boundingClientRect[1], boundingClientRect[2], boundingClientRect[3]);
        const obj2 = require("00139_NativeDOMCxx.js");
      } else {
        tmp6 = new require("00124__isNativeReflectConstruct.js")(0, 0, 0, 0);
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
        const obj2 = require("00139_NativeDOMCxx.js");
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
        const obj2 = require("00139_NativeDOMCxx.js");
      }
    }
  },
  {
    key: "releasePointerCapture",
    value: function releasePointerCapture(nativeElementReference, nativeElementReference) {
      nativeElementReference = ReadOnlyElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const result = require("00139_NativeDOMCxx.js").releasePointerCapture(nativeElementReference, nativeElementReference);
        const obj2 = require("00139_NativeDOMCxx.js");
      }
    }
  }
];

export default importDefaultResult(ReadOnlyElement, items);
export const getBoundingClientRect = function _getBoundingClientRect(nativeElementReference3, includeTransform) {
  const nativeElementReference = ReadOnlyElement(136).getNativeElementReference(nativeElementReference3);
  if (null != nativeElementReference) {
    const boundingClientRect = require("00139_NativeDOMCxx.js").getBoundingClientRect(nativeElementReference, includeTransform.includeTransform);
    const tmp12 = new require("00124__isNativeReflectConstruct.js")(boundingClientRect[0], boundingClientRect[1], boundingClientRect[2], boundingClientRect[3]);
    return tmp12;
  } else {
    const tmp6 = new require("00124__isNativeReflectConstruct.js")(0, 0, 0, 0);
    return tmp6;
  }
  const obj = ReadOnlyElement(136);
};