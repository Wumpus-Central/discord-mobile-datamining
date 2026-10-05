// === Module 131: ? ===

// Module 131
import _modDef132 from "module_132" /* 132 */;
import EVENT_TARGET_GET_THE_PARENT_KEY from "EVENT_TARGET_GET_THE_PARENT_KEY" /* 135 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import javaScriptFlagGetter from "javaScriptFlagGetter" /* 27 */;
import module_126 from "module_126" /* 126 */;

const require = globalThis.__r;

let _Object;
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
function getChildNodes(parentNode, fn) {
  const obj = require("module_136");
  const nativeNodeReference = obj.getNativeNodeReference(parentNode);
  if (null == nativeNodeReference) {
    return [];
  } else {
    const obj3 = require("NativeDOMCxx");
    const childNodes = obj3.getChildNodes(nativeNodeReference);
    const items = [];
    for (const item10013 of childNodes) {
      let obj2 = require("module_136");
      let publicInstanceFromInstanceHandle = obj2.getPublicInstanceFromInstanceHandle(item10013);
      let tmp9 = publicInstanceFromInstanceHandle;
      let tmp10 = null == publicInstanceFromInstanceHandle;
      if (!tmp10) {
        let tmp11 = null != fn;
        if (tmp11) {
          tmp11 = !fn(tmp9);
        }
        tmp10 = tmp11;
      }
      if (!tmp10) {
        let arr = items.push(tmp9);
      }
      continue;
    }
    return items;
  }
}
if (javaScriptFlagGetter.enableNativeEventTargetEventDispatching()) {
  _Object = _modDef132;
} else {
  _Object = Object;
}
class ReadOnlyNode {
  constructor(__internalInstanceHandle, arg1) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ReadOnlyNode);
    const obj = _getPrototypeOf(ReadOnlyNode);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = hasOwnProperty(self, constructResult);
    const obj2 = require("module_136");
    obj2.setOwnerDocument(tmp3Result, arg1);
    const obj3 = require("module_136");
    obj3.setInstanceHandle(tmp3Result, __internalInstanceHandle);
    return tmp3Result;
  }
}
_inherits(ReadOnlyNode, _Object);
const entry = {
  key: EVENT_TARGET_GET_THE_PARENT_KEY.EVENT_TARGET_GET_THE_PARENT_KEY,
  value() {
    return this.parentNode;
  }
};
let items = [
  entry,
  {
    key: "childNodes",
    get() {
      const tmp = getChildNodes(this);
      const obj = require("module_130");
      return obj.createNodeList(tmp);
    }
  },
  {
    key: "firstChild",
    get() {
      const arr = getChildNodes(this);
      let first = null;
      if (0 !== arr.length) {
        first = arr[0];
      }
      return first;
    }
  },
  {
    key: "isConnected",
    get() {
      const obj = require("module_136");
      const nativeNodeReference = obj.getNativeNodeReference(this);
      let isConnectedResult = null != nativeNodeReference;
      if (isConnectedResult) {
        const obj2 = require("NativeDOMCxx");
        isConnectedResult = obj2.isConnected(nativeNodeReference);
      }
      return isConnectedResult;
    }
  },
  {
    key: "lastChild",
    get() {
      const arr = getChildNodes(this);
      let tmp = null;
      if (0 !== arr.length) {
        tmp = arr[arr.length - 1];
      }
      return tmp;
    }
  },
  {
    key: "nextSibling",
    get() {
      let arr5;
      let items2;
      let tmp7;
      const self = this;
      const parentNode = this.parentNode;
      if (null == parentNode) {
        const items = [self];
        const items1 = [items, 0];
        items2 = items1;
      } else {
        const arr = getChildNodes(parentNode);
        const index = arr.indexOf(self);
        if (-1 === index) {
          const _TypeError = TypeError;
          const self2 = this;
          const self3 = this;
          const typeError = new TypeError("Missing node in parent's child node list");
          throw typeError;
        } else {
          items2 = [arr, index];
        }
      }
      [arr5, tmp7] = items2;
      let tmp8 = null;
      _slicedToArray(items2, 2);
      if (tmp7 !== arr5.length - 1) {
        tmp8 = arr5[tmp7 + 1];
      }
      return tmp8;
    }
  },
  {
    key: "nodeName",
    get() {
      const typeError = new TypeError("`nodeName` is abstract and must be implemented in a subclass of `ReadOnlyNode`");
      throw typeError;
    }
  },
  {
    key: "nodeType",
    get() {
      const typeError = new TypeError("`nodeType` is abstract and must be implemented in a subclass of `ReadOnlyNode`");
      throw typeError;
    }
  },
  {
    key: "nodeValue",
    get() {
      const typeError = new TypeError("`nodeValue` is abstract and must be implemented in a subclass of `ReadOnlyNode`");
      throw typeError;
    }
  },
  {
    key: "ownerDocument",
    get() {
      const obj = require("module_136");
      return obj.getOwnerDocument(this);
    }
  },
  {
    key: "parentElement",
    get() {
      const parentNode = this.parentNode;
      let tmp = null;
      if (null != parentNode) {
        tmp = null;
        if (parentNode.nodeType === ReadOnlyNode.ELEMENT_NODE) {
          tmp = parentNode;
        }
      }
      return tmp;
    }
  },
  {
    key: "parentNode",
    get() {
      const obj = require("module_136");
      const nativeNodeReference = obj.getNativeNodeReference(this);
      if (null == nativeNodeReference) {
        return null;
      } else {
        const obj2 = require("NativeDOMCxx");
        const parentNode = obj2.getParentNode(nativeNodeReference);
        let tmp6 = null;
        if (null != parentNode) {
          const tmpResult = require("module_136");
          let publicInstanceFromInstanceHandle = tmpResult.getPublicInstanceFromInstanceHandle(parentNode);
          if (publicInstanceFromInstanceHandle == null) {
            publicInstanceFromInstanceHandle = null;
          }
          tmp6 = publicInstanceFromInstanceHandle;
        }
        return tmp6;
      }
    }
  },
  {
    key: "previousSibling",
    get() {
      let items2;
      const self = this;
      const parentNode = this.parentNode;
      if (null == parentNode) {
        const items = [self];
        const items1 = [items, 0];
        items2 = items1;
      } else {
        const arr = getChildNodes(parentNode);
        const index = arr.indexOf(self);
        if (-1 === index) {
          const _TypeError = TypeError;
          const self2 = this;
          const self3 = this;
          const typeError = new TypeError("Missing node in parent's child node list");
          throw typeError;
        } else {
          items2 = [arr, index];
        }
      }
      const tmp8 = _slicedToArray(items2, 2)[1];
      let tmp9 = null;
      if (0 !== tmp8) {
        tmp9 = tmp7[tmp8 - 1];
      }
      return tmp9;
    }
  },
  {
    key: "textContent",
    get() {
      const typeError = new TypeError("`textContent` is abstract and must be implemented in a subclass of `ReadOnlyNode`");
      throw typeError;
    }
  },
  {
    key: "compareDocumentPosition",
    value: function compareDocumentPosition(nativeNodeReference) {
      if (nativeNodeReference === this) {
        return 0;
      } else {
        const obj = require("module_136");
        nativeNodeReference = obj.getNativeNodeReference(tmp);
        const obj2 = require("module_136");
        const nativeNodeReference1 = obj2.getNativeNodeReference(nativeNodeReference);
        if (null != nativeNodeReference) {
          let DOCUMENT_POSITION_DISCONNECTED;
          if (null != nativeNodeReference1) {
            const obj3 = require("NativeDOMCxx");
            DOCUMENT_POSITION_DISCONNECTED = obj3.compareDocumentPosition(nativeNodeReference, nativeNodeReference1);
          }
          return DOCUMENT_POSITION_DISCONNECTED;
        }
        DOCUMENT_POSITION_DISCONNECTED = ReadOnlyNode.DOCUMENT_POSITION_DISCONNECTED;
      }
    }
  },
  {
    key: "contains",
    value: function contains(nativeNodeReference) {
      const self = this;
      const tmp = nativeNodeReference === this || self.compareDocumentPosition(nativeNodeReference) & ReadOnlyNode.DOCUMENT_POSITION_CONTAINED_BY;
      return tmp;
    }
  },
  {
    key: "getRootNode",
    value: function getRootNode() {
      const self = this;
      let self2 = this;
      if (this.isConnected) {
        let ownerDocument = self.ownerDocument;
        if (ownerDocument == null) {
          ownerDocument = self;
        }
        self2 = ownerDocument;
      }
      return self2;
    }
  },
  {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return getChildNodes(this).length > 0;
    }
  }
];
const importDefaultResultResult = _createClass(ReadOnlyNode, items);
importDefaultResultResult.ELEMENT_NODE = 1;
importDefaultResultResult.ATTRIBUTE_NODE = 2;
importDefaultResultResult.TEXT_NODE = 3;
importDefaultResultResult.CDATA_SECTION_NODE = 4;
importDefaultResultResult.ENTITY_REFERENCE_NODE = 5;
importDefaultResultResult.ENTITY_NODE = 6;
importDefaultResultResult.PROCESSING_INSTRUCTION_NODE = 7;
importDefaultResultResult.COMMENT_NODE = 8;
importDefaultResultResult.DOCUMENT_NODE = 9;
importDefaultResultResult.DOCUMENT_TYPE_NODE = 10;
importDefaultResultResult.DOCUMENT_FRAGMENT_NODE = 11;
importDefaultResultResult.NOTATION_NODE = 12;
importDefaultResultResult.DOCUMENT_POSITION_DISCONNECTED = 1;
importDefaultResultResult.DOCUMENT_POSITION_PRECEDING = 2;
importDefaultResultResult.DOCUMENT_POSITION_FOLLOWING = 4;
importDefaultResultResult.DOCUMENT_POSITION_CONTAINS = 8;
importDefaultResultResult.DOCUMENT_POSITION_CONTAINED_BY = 16;
importDefaultResultResult.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
module_126.setPlatformObject(importDefaultResultResult);
tmp7.prototype = importDefaultResultResult.prototype;
const merged = Object.assign(tmp7, importDefaultResultResult);

export default tmp7;
export { getChildNodes };