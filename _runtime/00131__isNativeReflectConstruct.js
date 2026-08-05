import { NativeDOMCxx } from "00139_NativeDOMCxx.js";
// _runtime/00131__isNativeReflectConstruct.js
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importDefaultResult1 from "_inherits";
import importAllResult from "javaScriptFlagGetter";
import setPlatformObject from "setPlatformObject";

const ReadOnlyNode = arg1;
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
function getChildNodes(parentNode, arg1) {
  const nativeNodeReference = ReadOnlyNode(136).getNativeNodeReference(parentNode);
  if (null == nativeNodeReference) {
    return [];
  } else {
    const childNodes = NativeDOMCxx.getChildNodes(nativeNodeReference);
    const items = [];
    for (const item10013 of childNodes) {
      let tmp5 = ReadOnlyNode;
      let tmp6 = dependencyMap;
      let tmp7 = dependencyMap;
      let obj2 = ReadOnlyNode(136);
      let publicInstanceFromInstanceHandle = obj2.getPublicInstanceFromInstanceHandle(item10013);
      let tmp9 = publicInstanceFromInstanceHandle;
      let tmp10 = null == publicInstanceFromInstanceHandle;
      if (!tmp10) {
        let tmp11 = null != arg1;
        if (tmp11) {
          let tmp12 = publicInstanceFromInstanceHandle;
          tmp11 = !arg1(tmp9);
        }
        tmp10 = tmp11;
      }
      if (!tmp10) {
        let tmp13 = publicInstanceFromInstanceHandle;
        let arr = items.push(tmp9);
      }
      continue;
    }
    return items;
  }
  const obj = ReadOnlyNode(136);
  const tmp = dependencyMap;
}
if (importAllResult.enableNativeEventTargetEventDispatching()) {
  let _Object = require("dispatch");
} else {
  _Object = Object;
}
class ReadOnlyNode {
  constructor(arg0, arg1) {
    self = this;
    tmp = outer1_4(this, ReadOnlyNode);
    tmp2 = outer1_6;
    obj = outer1_6(ReadOnlyNode);
    tmp3 = outer1_5;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    obj2 = require("getInstanceHandle");
    setOwnerDocumentResult = obj2.setOwnerDocument(tmp3Result, arg1);
    obj3 = require("getInstanceHandle");
    setInstanceHandleResult = obj3.setInstanceHandle(tmp3Result, global);
    return tmp3Result;
  }
}
importDefaultResult1(ReadOnlyNode, _Object);
let items = [
  {
    key: require("SymbolResult2").EVENT_TARGET_GET_THE_PARENT_KEY,
    value() {
      return this.parentNode;
    }
  },
  {
    key: "childNodes",
    get() {
      const tmp = getChildNodes(this);
      return ReadOnlyNode(130).createNodeList(tmp);
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
      const nativeNodeReference = ReadOnlyNode(136).getNativeNodeReference(this);
      let isConnectedResult = null != nativeNodeReference;
      if (isConnectedResult) {
        isConnectedResult = NativeDOMCxx.isConnected(nativeNodeReference);
        const obj2 = NativeDOMCxx;
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
      let tmp9;
      const self = this;
      const parentNode = this.parentNode;
      if (null == parentNode) {
        const items = [self];
        const items1 = [items, 0];
        let items2 = items1;
      } else {
        const arr = getChildNodes(parentNode);
        const index = arr.indexOf(self);
        if (-1 === index) {
          const _TypeError = TypeError;
          const typeError = new TypeError("Missing node in parent's child node list");
          throw typeError;
        } else {
          items2 = [arr, index];
        }
      }
      [arr5, tmp9] = callback(items2, 2);
      let tmp10 = null;
      if (tmp9 !== arr5.length - 1) {
        tmp10 = arr5[tmp9 + 1];
      }
      return tmp10;
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
      return ReadOnlyNode(136).getOwnerDocument(this);
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
      const nativeNodeReference = ReadOnlyNode(136).getNativeNodeReference(this);
      if (null == nativeNodeReference) {
        return null;
      } else {
        const parentNode = NativeDOMCxx.getParentNode(nativeNodeReference);
        let tmp6 = null;
        if (null != parentNode) {
          let publicInstanceFromInstanceHandle = tmp(136).getPublicInstanceFromInstanceHandle(parentNode);
          if (publicInstanceFromInstanceHandle == null) {
            publicInstanceFromInstanceHandle = null;
          }
          tmp6 = publicInstanceFromInstanceHandle;
          const tmpResult = tmp(136);
        }
        return tmp6;
      }
      const obj = ReadOnlyNode(136);
      tmp = ReadOnlyNode;
    }
  },
  {
    key: "previousSibling",
    get() {
      const self = this;
      const parentNode = this.parentNode;
      if (null == parentNode) {
        const items = [self];
        const items1 = [items, 0];
        let items2 = items1;
      } else {
        const arr = getChildNodes(parentNode);
        const index = arr.indexOf(self);
        if (-1 === index) {
          const _TypeError = TypeError;
          const typeError = new TypeError("Missing node in parent's child node list");
          throw typeError;
        } else {
          items2 = [arr, index];
        }
      }
      const tmp10 = callback(items2, 2)[1];
      let tmp11 = null;
      if (0 !== tmp10) {
        tmp11 = tmp9[tmp10 - 1];
      }
      return tmp11;
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
    value: function compareDocumentPosition(nativeNodeReference, nativeNodeReference1) {
      if (nativeNodeReference === this) {
        return 0;
      } else {
        nativeNodeReference = ReadOnlyNode(136).getNativeNodeReference(tmp);
        const obj = ReadOnlyNode(136);
        nativeNodeReference1 = ReadOnlyNode(136).getNativeNodeReference(nativeNodeReference);
        if (null != nativeNodeReference) {
          if (null != nativeNodeReference1) {
            let DOCUMENT_POSITION_DISCONNECTED = NativeDOMCxx.compareDocumentPosition(nativeNodeReference, nativeNodeReference1);
            const obj3 = NativeDOMCxx;
          }
          return DOCUMENT_POSITION_DISCONNECTED;
        }
        DOCUMENT_POSITION_DISCONNECTED = ReadOnlyNode.DOCUMENT_POSITION_DISCONNECTED;
        const obj2 = ReadOnlyNode(136);
      }
    }
  },
  {
    key: "contains",
    value: function contains(nativeNodeReference) {
      const self = this;
      let tmp = nativeNodeReference === this;
      if (!tmp) {
        tmp = self.compareDocumentPosition(nativeNodeReference) & ReadOnlyNode.DOCUMENT_POSITION_CONTAINED_BY;
      }
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
const importDefaultResultResult = importDefaultResult(ReadOnlyNode, items);
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
setPlatformObject.setPlatformObject(importDefaultResultResult);
class ReadOnlyNode {
  constructor(arg0, arg1) {
    obj = require("getInstanceHandle");
    setOwnerDocumentResult = obj.setOwnerDocument(this, arg1);
    obj2 = require("getInstanceHandle");
    setInstanceHandleResult = obj2.setInstanceHandle(this, global);
    return;
  }
}
ReadOnlyNode.prototype = importDefaultResultResult.prototype;
const merged = Object.assign(ReadOnlyNode, importDefaultResultResult);

export default ReadOnlyNode;
export { getChildNodes };