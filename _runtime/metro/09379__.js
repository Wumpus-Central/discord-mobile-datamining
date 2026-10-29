// === Module 9379: ? ===

// Module 9379
let self = this;
let NodeWithChildren = CDATA;
const dependencyMap = arg6;
function cloneNode(type, arg1) {
  let length;
  let length2;
  let length3;
  let flag = arg1;
  if (undefined === arg1) {
    flag = false;
  }
  if (type.type === NodeWithChildren(9380).ElementType.Text) {
    let tmp19 = Text(type.data);
  } else if (type.type === NodeWithChildren(9380).ElementType.Comment) {
    tmp19 = Comment(type.data);
  } else if (NodeWithChildren(9380).isTag(type)) {
    if (flag) {
      const children = type.children;
      const mapped = children.map((item) => cloneNode(item, true));
      let num6 = 1;
      let items = mapped;
      if (1 < mapped.length) {
        do {
          let diff = num6 - 1;
          mapped[num6].prev = mapped[diff];
          mapped[diff].next = mapped[num6];
          num6 = num6 + 1;
          items = mapped;
          length3 = mapped.length;
        } while (num6 < length3);
      }
    } else {
      items = [];
    }
    const tmp36 = Element(type.name, closure_3({}, type.attribs), items);
    const parent = tmp36;
    const item = items.forEach((item) => {
      item.parent = parent;
      return parent;
    });
    if (null != type.namespace) {
      tmp36.namespace = type.namespace;
    }
    if (type["x-attribsNamespace"]) {
      tmp36["x-attribsNamespace"] = closure_3({}, type["x-attribsNamespace"]);
    }
    tmp19 = tmp36;
    if (type["x-attribsPrefix"]) {
      tmp36["x-attribsPrefix"] = closure_3({}, type["x-attribsPrefix"]);
      tmp19 = tmp36;
    }
  } else if (type.type === NodeWithChildren(9380).ElementType.CDATA) {
    if (flag) {
      const children1 = type.children;
      const mapped1 = children1.map((item) => cloneNode(item, true));
      let num4 = 1;
      let items1 = mapped1;
      if (1 < mapped1.length) {
        do {
          let diff1 = num4 - 1;
          mapped1[num4].prev = mapped1[diff1];
          mapped1[diff1].next = mapped1[num4];
          num4 = num4 + 1;
          items1 = mapped1;
          length2 = mapped1.length;
        } while (num4 < length2);
      }
    } else {
      items1 = [];
    }
    const tmp29 = CDATA(items1);
    const parent2 = tmp29;
    const item1 = items1.forEach((item) => {
      item.parent = parent2;
      return parent2;
    });
    tmp19 = tmp29;
  } else if (type.type === NodeWithChildren(9380).ElementType.Root) {
    if (flag) {
      const children2 = type.children;
      const mapped2 = children2.map((item) => cloneNode(item, true));
      let num2 = 1;
      let items2 = mapped2;
      if (1 < mapped2.length) {
        do {
          let diff2 = num2 - 1;
          mapped2[num2].prev = mapped2[diff2];
          mapped2[diff2].next = mapped2[num2];
          num2 = num2 + 1;
          items2 = mapped2;
          length = mapped2.length;
        } while (num2 < length);
      }
    } else {
      items2 = [];
    }
    const tmp23 = Document(items2);
    const parent3 = tmp23;
    const item2 = items2.forEach((item) => {
      item.parent = parent3;
      return parent3;
    });
    tmp19 = tmp23;
    if (type["x-mode"]) {
      tmp23["x-mode"] = type["x-mode"];
      tmp19 = tmp23;
    }
  } else if (type.type === NodeWithChildren(9380).ElementType.Directive) {
    const data = type.data;
    let obj = new.target;
    if (typeof ProcessingInstruction === "function") {
      const call = closure_128_0.call;
      if (typeof call === "unknown") {
        const call2 = parent.call;
        if (typeof call2 === "unknown") {
          obj = { parent: null, prev: null, next: null, startIndex: null, endIndex: null };
        } else {
          let call2Result = call2(obj);
        }
        if (!call2Result) {
          call2Result = obj;
        }
        call2Result.data = data;
        let callResult = call2Result;
      } else {
        callResult = call(obj, data);
      }
      if (!callResult) {
        callResult = obj;
      }
      callResult.name = tmp9;
      callResult.type = NodeWithChildren(9380).ElementType.Directive;
      tmp19 = callResult;
      if (null != type["x-name"]) {
        ({ x-name: tmp14["x-name"], x-publicId: tmp14["x-publicId"], x-systemId: tmp14["x-systemId"] } = type);
        tmp19 = callResult;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const _Error = Error;
    const concat = "Not implemented yet: ".concat;
    const error = new Error("Not implemented yet: ".concat(type.type));
    throw error;
  }
  ({ startIndex: tmp19.startIndex, endIndex: tmp19.endIndex } = type);
  if (null != type.sourceCodeLocation) {
    tmp19.sourceCodeLocation = type.sourceCodeLocation;
  }
  return tmp19;
}
let fn = this;
if (this) {
  fn = self.__extends;
}
if (!fn) {
  fn = function t(arg0, arg1) {
    fn = Object.setPrototypeOf;
    if (!fn) {
      const _Array = Array;
      let fn2 = Object.create([]) instanceof Array;
      if (fn2) {
        fn2 = (arg0, arg1) => {
          arg0.__proto__ = arg1;
        };
      }
      fn = fn2;
    }
    if (!fn) {
      fn = (arg0, obj) => {
        for (const key10005 in arg1) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10005);
          } else {
            hasOwnPropertyResult = call(arg1, key10005);
          }
          if (!hasOwnPropertyResult) {
            continue;
          } else {
            arg0[key10005] = arg1[key10005];
            continue;
          }
          continue;
        }
      };
    }
    return fn(arg0, arg1);
  };
  fn = (CDATA, DataNode) => {
    NodeWithChildren = CDATA;
    if (typeof DataNode !== "function") {
      if (null !== DataNode) {
        const _TypeError = TypeError;
        const _String = String;
        const typeError = new TypeError("Class extends value " + String(DataNode) + " is not a constructor or null");
        throw typeError;
      }
    }
    fn(CDATA, DataNode);
    if (null === DataNode) {
      const _Object = Object;
      let obj = Object.create(DataNode);
    } else {
      class __ {
        constructor() {
          this.constructor = closure_0;
          return;
        }
      }
      __.prototype = DataNode.prototype;
      obj = Object.create(__.prototype);
      obj.constructor = CDATA;
    }
    CDATA.prototype = obj;
  };
}
let fn2 = self;
if (self) {
  fn2 = self.__assign;
}
if (!fn2) {
  fn2 = function() {
    let tmp = Object.assign || ((arg0) => {
      for (let num = 1; num < length; num = num + 1) {
        let tmp = arguments[num];
        for (const key10012 in tmp) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10012);
          } else {
            hasOwnPropertyResult = call(tmp, key10012);
          }
          if (!hasOwnPropertyResult) {
            continue;
          } else {
            arg0[key10012] = tmp[key10012];
            continue;
          }
          continue;
        }
      }
      return arg0;
    });
    const self = this;
    closure_3 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
}
let closure_3 = fn2;
function isTag(arg0) {
  return NodeWithChildren(9380).isTag(arg0);
}
function isCDATA(type) {
  return type.type === NodeWithChildren(9380).ElementType.CDATA;
}
function isText(type) {
  return type.type === NodeWithChildren(9380).ElementType.Text;
}
function isComment(type) {
  return type.type === NodeWithChildren(9380).ElementType.Comment;
}
function isDirective(type) {
  return type.type === NodeWithChildren(9380).ElementType.Directive;
}
function isDocument(type) {
  return type.type === NodeWithChildren(9380).ElementType.Root;
}
class Node {
  constructor() {
    return;
  }
  cloneNode(arg0) {
    flag = arg0;
    if (undefined === arg0) {
      flag = false;
    }
    return cloneNode(this, flag);
  }
}
Object.defineProperty(Node.prototype, "parentNode", {
  get() {
    return this.parent;
  },
  set(parent) {
    this.parent = parent;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(Node.prototype, "previousSibling", {
  get() {
    return this.prev;
  },
  set(prev) {
    this.prev = prev;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(Node.prototype, "nextSibling", {
  get() {
    return this.next;
  },
  set(next) {
    this.next = next;
  },
  enumerable: false,
  configurable: true
});
let closure_129_0 = Node;
class DataNode {
  constructor(arg0) {
    obj = this;
    call = NodeWithChildren.call;
    if (typeof call === "unknown") {
      obj = {};
      tmp2 = null;
      obj.parent = null;
      obj.prev = null;
      obj.next = null;
      obj.startIndex = null;
      obj.endIndex = null;
    } else {
      callResult = call(obj);
    }
    if (!callResult) {
      callResult = obj;
    }
    callResult.data = arg0;
    return callResult;
  }
}
fn(DataNode, Node);
Object.defineProperty(DataNode.prototype, "nodeValue", {
  get() {
    return this.data;
  },
  set(data) {
    this.data = data;
  },
  enumerable: false,
  configurable: true
});
NodeWithChildren = DataNode;
class Text {
  constructor() {
    self = this;
    tmp = NodeWithChildren;
    apply = NodeWithChildren.apply;
    if (typeof apply === "unknown") {
      tmp2 = tmp;
      tmp3 = self;
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      tmp5 = arguments;
      applyArgumentsResult = apply(self, arguments);
    }
    if (!applyArgumentsResult) {
      applyArgumentsResult = self;
    }
    applyArgumentsResult.type = closure_0(closure_1[0]).ElementType.Text;
    return applyArgumentsResult;
  }
}
fn(Text, DataNode);
Object.defineProperty(Text.prototype, "nodeType", {
  get() {
    return 3;
  },
  enumerable: false,
  configurable: true
});
NodeWithChildren = DataNode;
class Comment {
  constructor() {
    self = this;
    tmp = NodeWithChildren;
    apply = NodeWithChildren.apply;
    if (typeof apply === "unknown") {
      tmp2 = tmp;
      tmp3 = self;
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      tmp5 = arguments;
      applyArgumentsResult = apply(self, arguments);
    }
    if (!applyArgumentsResult) {
      applyArgumentsResult = self;
    }
    applyArgumentsResult.type = closure_0(closure_1[0]).ElementType.Comment;
    return applyArgumentsResult;
  }
}
fn(Comment, DataNode);
Object.defineProperty(Comment.prototype, "nodeType", {
  get() {
    return 8;
  },
  enumerable: false,
  configurable: true
});
NodeWithChildren = DataNode;
class ProcessingInstruction {
  constructor(arg0, arg1) {
    obj = this;
    call = NodeWithChildren.call;
    if (typeof call === "unknown") {
      call2 = closure_128_0.call;
      if (typeof call2 === "unknown") {
        obj = {};
        tmp3 = null;
        obj.parent = null;
        obj.prev = null;
        obj.next = null;
        obj.startIndex = null;
        obj.endIndex = null;
      } else {
        call2Result = call2(obj);
      }
      if (!call2Result) {
        call2Result = obj;
      }
      call2Result.data = CDATA;
      callResult = call2Result;
    } else {
      callResult = call(obj, CDATA);
    }
    if (!callResult) {
      callResult = obj;
    }
    callResult.name = arg0;
    callResult.type = closure_0(closure_1[0]).ElementType.Directive;
    return callResult;
  }
}
fn(ProcessingInstruction, DataNode);
Object.defineProperty(ProcessingInstruction.prototype, "nodeType", {
  get() {
    return 1;
  },
  enumerable: false,
  configurable: true
});
let closure_130_0 = Node;
class NodeWithChildren {
  constructor(arg0) {
    obj = this;
    call = NodeWithChildren.call;
    if (typeof call === "unknown") {
      obj = {};
      tmp2 = null;
      obj.parent = null;
      obj.prev = null;
      obj.next = null;
      obj.startIndex = null;
      obj.endIndex = null;
    } else {
      callResult = call(obj);
    }
    if (!callResult) {
      callResult = obj;
    }
    callResult.children = arg0;
    return callResult;
  }
}
fn(NodeWithChildren, Node);
Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
  get() {
    const first = this.children[0];
    let tmp2 = null;
    if (null !== first) {
      tmp2 = null;
      if (undefined !== first) {
        tmp2 = first;
      }
    }
    return tmp2;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
  get() {
    const self = this;
    let tmp = null;
    if (this.children.length > 0) {
      tmp = self.children[self.children.length - 1];
    }
    return tmp;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
  get() {
    return this.children;
  },
  set(children) {
    this.children = children;
  },
  enumerable: false,
  configurable: true
});
class CDATA {
  constructor() {
    self = this;
    tmp = NodeWithChildren;
    apply = NodeWithChildren.apply;
    if (typeof apply === "unknown") {
      tmp2 = tmp;
      tmp3 = self;
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      tmp5 = arguments;
      applyArgumentsResult = apply(self, arguments);
    }
    if (!applyArgumentsResult) {
      applyArgumentsResult = self;
    }
    applyArgumentsResult.type = closure_0(closure_1[0]).ElementType.CDATA;
    return applyArgumentsResult;
  }
}
fn(CDATA, NodeWithChildren);
Object.defineProperty(CDATA.prototype, "nodeType", {
  get() {
    return 4;
  },
  enumerable: false,
  configurable: true
});
class Document {
  constructor() {
    self = this;
    tmp = NodeWithChildren;
    apply = NodeWithChildren.apply;
    if (typeof apply === "unknown") {
      tmp2 = tmp;
      tmp3 = self;
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      tmp5 = arguments;
      applyArgumentsResult = apply(self, arguments);
    }
    if (!applyArgumentsResult) {
      applyArgumentsResult = self;
    }
    applyArgumentsResult.type = closure_0(closure_1[0]).ElementType.Root;
    return applyArgumentsResult;
  }
}
fn(Document, NodeWithChildren);
Object.defineProperty(Document.prototype, "nodeType", {
  get() {
    return 9;
  },
  enumerable: false,
  configurable: true
});
class Element {
  constructor(arg0, arg1, arg2, arg3) {
    items = arg2;
    if (undefined === arg2) {
      items = [];
    }
    if (undefined !== arg3) {
      obj = this;
      call = NodeWithChildren.call;
      if (typeof call === "unknown") {
        call2 = closure_128_0.call;
        if (typeof call2 === "unknown") {
          obj = {};
          tmp10 = null;
          obj.parent = null;
          obj.prev = null;
          obj.next = null;
          obj.startIndex = null;
          obj.endIndex = null;
        } else {
          call2Result = call2(obj);
        }
        if (!call2Result) {
          call2Result = obj;
        }
        call2Result.children = items;
        callResult = call2Result;
      } else {
        callResult = call(obj, items);
      }
      if (!callResult) {
        callResult = obj;
      }
      tmp13 = CDATA;
      callResult.name = arg0;
      callResult.attribs = CDATA;
      callResult.type = arg3;
      return callResult;
    } else {
      str = "script";
      if ("script" === arg0) {
        tmp5 = closure_0;
        tmp6 = closure_1;
        Tag = closure_0(closure_1[0]).ElementType.Script;
      } else {
        str2 = "style";
        if ("style" === arg0) {
          tmp3 = closure_0;
          tmp4 = closure_1;
          Tag = closure_0(closure_1[0]).ElementType.Style;
        } else {
          tmp = closure_0;
          tmp2 = closure_1;
          Tag = closure_0(closure_1[0]).ElementType.Tag;
        }
      }
      tmp7 = Tag;
    }
    return;
  }
}
fn(Element, NodeWithChildren);
Object.defineProperty(Element.prototype, "nodeType", {
  get() {
    return 1;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(Element.prototype, "tagName", {
  get() {
    return this.name;
  },
  set(name) {
    this.name = name;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(Element.prototype, "attributes", {
  get() {
    const self = this;
    const keys = Object.keys(this.attribs);
    return keys.map((name) => {
      const obj = { name, value: self.attribs[name], namespace: null, prefix: null };
      const prop = self["x-attribsNamespace"];
      let tmp3;
      if (null !== prop) {
        if (undefined !== prop) {
          tmp3 = prop[name];
        }
      }
      obj.namespace = tmp3;
      const prop1 = self["x-attribsPrefix"];
      let tmp5;
      if (null !== prop1) {
        if (undefined !== prop1) {
          tmp5 = prop1[name];
        }
      }
      obj.prefix = tmp5;
      return obj;
    });
  },
  enumerable: false,
  configurable: true
});

export { Node };
export { DataNode };
export { Text };
export { Comment };
export { ProcessingInstruction };
export { NodeWithChildren };
export { CDATA };
export { Document };
export { Element };
export { isTag };
export { isCDATA };
export { isText };
export { isComment };
export { isDirective };
export { isDocument };
export function hasChildren(children) {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  const call = hasOwnProperty.call;
  if (typeof call === "unknown") {
    let hasOwnPropertyResult = hasOwnProperty("children");
  } else {
    hasOwnPropertyResult = call(children, "children");
  }
  return hasOwnPropertyResult;
}
export { cloneNode };