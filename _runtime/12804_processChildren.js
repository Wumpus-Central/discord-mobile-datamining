// === Module 12804: processChildren ===

// Module 12804 (processChildren)
import generateSourceMap from "generateSourceMap" /* 12805 */;

function processChildren(children, fn) {
  let self = this;
  closure_0 = fn;
  children = children.children;
  closure_1 = null;
  if (typeof fn !== "function") {
    const item = children.forEach(self.node, self);
  } else {
    const item1 = children.forEach(function(item) {
      const self = this;
      if (null !== closure_1) {
        const call = closure_0.call;
        if (typeof call === "unknown") {
          closure_0(tmp2);
        } else {
          call(self, tmp2);
        }
      }
      self.node(item);
      closure_1 = item;
    }, self);
  }
}

export default function createGenerator(node) {
  function processNode(type) {
    const call = hasOwnProperty.call;
    type = type.type;
    if (typeof call === "unknown" ? hasOwnProperty(type) : call(obj, type)) {
      const self = this;
      const call2 = tmp8.call;
      if (typeof call2 === "unknown") {
        tmp8(type);
      } else {
        call2(self, type);
      }
    } else {
      const _Error = Error;
      const error = new Error("Unknown node type: " + type.type);
      throw error;
    }
  }
  if (node.node) {
    for (const key10006 in arg0.node) {
      obj[key10006] = arg0.node[key10006].generate;
      continue;
    }
  }
  return (arg0, decorator) => {
    closure_0 = "";
    obj = {
      children: processChildren,
      node: processNode,
      chunk(arg0) {
        closure_0 = closure_0 + arg0;
      },
      result() {
        return closure_0;
      }
    };
    let obj2 = obj;
    if (decorator) {
      let decoratorResult = obj;
      if (typeof decorator.decorator === "function") {
        decoratorResult = decorator.decorator(obj);
      }
      let tmp2 = decoratorResult;
      if (decorator.sourceMap) {
        tmp2 = generateSourceMap(decoratorResult);
      }
      obj2 = tmp2;
    }
    obj2.node(arg0);
    return obj2.result();
  };
};