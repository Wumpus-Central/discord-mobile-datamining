// _runtime/09393_cloneNode.js
import _mod9394 from "metro/09394__.js";
import ElementType from "09395_ElementType.js";

let self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let fn = self;
  if (self) {
    fn = self.__exportStar;
  }
  if (!fn) {
    fn = (obj, exports) => {
      for (const key10007 in arg0) {
        let tmp6 = "default" === key10007;
        if (tmp6) {
          if (tmp6) {
            continue;
          } else {
            let tmp4 = self2(arg1, arg0, key10007);
            continue;
          }
          continue;
        } else {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10007);
          } else {
            hasOwnPropertyResult = call(arg1, key10007);
          }
        }
      }
    };
  }
  const _Object2 = Object;
  exports.DomHandler = undefined;
  fn(_mod9394, exports);
  let closure_3 = { withStartIndices: false, withEndIndices: false, xmlMode: false };
  class DomHandler {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = importDefault;
      this.dom = [];
      _document = new closure_0(closure_1[0]).Document(this.dom);
      this.root = _document;
      this.done = false;
      items = [];
      items[0] = this.root;
      this.tagStack = items;
      this.lastNode = null;
      this.parser = null;
      tmp3 = require;
      if (typeof require === "function") {
        tmp3 = closure_3;
        tmp = require;
      }
      tmp4 = global;
      if (typeof global === "object") {
        tmp3 = global;
      }
      tmp5 = null;
      if (null != tmp4) {
        tmp5 = tmp4;
      }
      self.callback = tmp5;
      if (null == tmp3) {
        tmp3 = closure_3;
      }
      self.options = tmp3;
      tmp6 = null;
      if (null != tmp) {
        tmp6 = tmp;
      }
      self.elementCB = tmp6;
      return;
    }
    onparserinit(arg0) {
      this.parser = global;
      return;
    }
    onreset() {
      this.dom = [];
      _document = new closure_0(closure_1[0]).Document(this.dom);
      this.root = _document;
      this.done = false;
      items = [];
      items[0] = this.root;
      this.tagStack = items;
      this.lastNode = null;
      this.parser = null;
      return;
    }
    onend() {
      self = this;
      if (!this.done) {
        flag = true;
        self.done = true;
        tmp = null;
        self.parser = null;
        handleCallbackResult = self.handleCallback(null);
      }
      return;
    }
    onerror(arg0) {
      handleCallbackResult = this.handleCallback(global);
      return;
    }
    onclosetag() {
      self = this;
      this.lastNode = null;
      tagStack = this.tagStack;
      arr1 = tagStack.pop();
      if (this.options.withEndIndices) {
        arr1.endIndex = self.parser.endIndex;
      }
      if (self.elementCB) {
        elementCBResult = self.elementCB(arr1);
      }
      return;
    }
    onopentag(arg0, arg1) {
      self = this;
      Tag = undefined;
      if (this.options.xmlMode) {
        tmp2 = closure_0;
        tmp3 = closure_1;
        Tag = closure_0(closure_1[1]).ElementType.Tag;
      }
      element = new closure_0(closure_1[0]).Element(global, require, undefined, Tag);
      addNodeResult = self.addNode(element);
      tagStack = self.tagStack;
      arr1 = tagStack.push(element);
      return;
    }
    ontext(arg0) {
      self = this;
      lastNode = this.lastNode;
      if (lastNode) {
        tmp = closure_0;
        tmp2 = closure_1;
        if (lastNode.type === closure_0(closure_1[1]).ElementType.Text) {
          lastNode.data = lastNode.data + global;
          if (self.options.withEndIndices) {
            lastNode.endIndex = self.parser.endIndex;
          }
        }
        return;
      }
      text = new closure_0(closure_1[0]).Text(global);
      addNodeResult = self.addNode(text);
      self.lastNode = text;
      return;
    }
    oncomment(arg0) {
      self = this;
      if (this.lastNode) {
        tmp = closure_0;
        tmp2 = closure_1;
        if (self.lastNode.type === closure_0(closure_1[1]).ElementType.Comment) {
          lastNode = self.lastNode;
          lastNode.data = lastNode.data + global;
        }
        return;
      }
      comment = new closure_0(closure_1[0]).Comment(global);
      addNodeResult = self.addNode(comment);
      self.lastNode = comment;
      return;
    }
    oncommentend() {
      this.lastNode = null;
      return;
    }
    oncdatastart() {
      text = new closure_0(closure_1[0]).Text("");
      items = [];
      items[0] = text;
      cDATA = new closure_0(closure_1[0]).CDATA(items);
      addNodeResult = this.addNode(cDATA);
      text.parent = cDATA;
      this.lastNode = text;
      return;
    }
    oncdataend() {
      this.lastNode = null;
      return;
    }
    onprocessinginstruction(arg0, arg1) {
      processingInstruction = new closure_0(closure_1[0]).ProcessingInstruction(global, require);
      addNodeResult = this.addNode(processingInstruction);
      return;
    }
    handleCallback(arg0) {
      self = this;
      if (typeof this.callback === "function") {
        callbackResult = self.callback(global, self.dom);
      } else if (global) {
        throw global;
      }
      return;
    }
    addNode(arg0) {
      self = this;
      tmp = this.tagStack[this.tagStack.length - 1];
      tmp2 = tmp.children[tmp.children.length - 1];
      if (this.options.withStartIndices) {
        global.startIndex = self.parser.startIndex;
      }
      if (self.options.withEndIndices) {
        global.endIndex = self.parser.endIndex;
      }
      children = tmp.children;
      arr1 = children.push(global);
      if (tmp2) {
        global.prev = tmp2;
        tmp2.next = global;
      }
      global.parent = tmp;
      self.lastNode = null;
      return;
    }
  }
  exports.DomHandler = DomHandler;
  exports.default = DomHandler;
} else {
  let _Object = Object;
}
