// === Module 141: _getBoundingClientRect ===

// Module 141 (_getBoundingClientRect)
import _modDef124 from "module_124" /* 124 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const require = globalThis.__r;

const f80160 = (nodeType) => nodeType.nodeType === require("module_131").ELEMENT_NODE;
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
class ReadOnlyElement {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ReadOnlyElement);
    const obj = _getPrototypeOf(ReadOnlyElement);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
  }
}
_inherits(ReadOnlyElement, require("module_131"));
let obj = {
  key: "childElementCount",
  get() {
    const obj = require("module_131");
    return obj.getChildNodes(this, f80160).length;
  }
};
const items = [
  obj,
  {
    key: "children",
    get() {
      const createHTMLCollection = require("module_129").createHTMLCollection;
      require("module_129");
      const obj = require("module_131");
      return createHTMLCollection(obj.getChildNodes(this, f80160));
    }
  },
  {
    key: "clientHeight",
    get() {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        num = obj2.getInnerSize(nativeElementReference)[1];
      }
      return num;
    }
  },
  {
    key: "clientLeft",
    get() {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        num = obj2.getBorderWidth(nativeElementReference)[3];
      }
      return num;
    }
  },
  {
    key: "clientTop",
    get() {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        num = obj2.getBorderWidth(nativeElementReference)[0];
      }
      return num;
    }
  },
  {
    key: "clientWidth",
    get() {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        num = obj2.getInnerSize(nativeElementReference)[0];
      }
      return num;
    }
  },
  {
    key: "firstElementChild",
    get() {
      const obj = require("module_131");
      const childNodes = obj.getChildNodes(this, f80160);
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
      const obj = require("module_136");
      const currentProps = obj.getCurrentProps(this);
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
      const obj = require("module_131");
      const childNodes = obj.getChildNodes(this, f80160);
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
      const obj = require("module_142");
      return obj.getElementSibling(this, "next");
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
      const obj = require("module_142");
      return obj.getElementSibling(this, "previous");
    }
  },
  {
    key: "scrollHeight",
    get() {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        num = obj2.getScrollSize(nativeElementReference)[1];
      }
      return num;
    }
  },
  {
    key: "scrollLeft",
    get() {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        num = obj2.getScrollPosition(nativeElementReference)[0];
      }
      return num;
    }
  },
  {
    key: "scrollTop",
    get() {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        num = obj2.getScrollPosition(nativeElementReference)[1];
      }
      return num;
    }
  },
  {
    key: "scrollWidth",
    get() {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        num = obj2.getScrollSize(nativeElementReference)[0];
      }
      return num;
    }
  },
  {
    key: "tagName",
    get() {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      let str = "";
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        str = obj2.getTagName(nativeElementReference);
      }
      return str;
    }
  },
  {
    key: "textContent",
    get() {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      let str = "";
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        str = obj2.getTextContent(nativeElementReference);
      }
      return str;
    }
  },
  {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      let tmp4;
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        const boundingClientRect = obj2.getBoundingClientRect(nativeElementReference, true);
        const self3 = this;
        const self4 = this;
        tmp4 = new _modDef124(boundingClientRect[0], boundingClientRect[1], boundingClientRect[2], boundingClientRect[3]);
      } else {
        const self = this;
        const self2 = this;
        tmp4 = new _modDef124(0, 0, 0, 0);
      }
      return tmp4;
    }
  },
  {
    key: "hasPointerCapture",
    value: function hasPointerCapture(nativeElementReference) {
      const obj = require("module_136");
      nativeElementReference = obj.getNativeElementReference(this);
      let hasPointerCaptureResult = null != nativeElementReference;
      if (hasPointerCaptureResult) {
        const obj2 = require("NativeDOMCxx");
        hasPointerCaptureResult = obj2.hasPointerCapture(nativeElementReference, nativeElementReference);
      }
      return hasPointerCaptureResult;
    }
  },
  {
    key: "setPointerCapture",
    value: function setPointerCapture(nativeElementReference) {
      const obj = require("module_136");
      nativeElementReference = obj.getNativeElementReference(this);
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        obj2.setPointerCapture(nativeElementReference, nativeElementReference);
      }
    }
  },
  {
    key: "releasePointerCapture",
    value: function releasePointerCapture(nativeElementReference) {
      const obj = require("module_136");
      nativeElementReference = obj.getNativeElementReference(this);
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        const result = obj2.releasePointerCapture(nativeElementReference, nativeElementReference);
      }
    }
  }
];

export default _createClass(ReadOnlyElement, items);
export const getBoundingClientRect = function _getBoundingClientRect(c5, includeTransform) {
  includeTransform = includeTransform.includeTransform;
  const obj = require("module_136");
  const nativeElementReference = obj.getNativeElementReference(c5);
  if (null != nativeElementReference) {
    const obj2 = require("NativeDOMCxx");
    const boundingClientRect = obj2.getBoundingClientRect(nativeElementReference, includeTransform);
    const self3 = this;
    const self4 = this;
    const tmp8 = new _modDef124(boundingClientRect[0], boundingClientRect[1], boundingClientRect[2], boundingClientRect[3]);
    return tmp8;
  } else {
    const self = this;
    const self2 = this;
    const tmp4 = new _modDef124(0, 0, 0, 0);
    return tmp4;
  }
};