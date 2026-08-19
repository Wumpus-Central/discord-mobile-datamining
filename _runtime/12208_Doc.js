// _runtime/12208_Doc.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

class Doc {
  constructor() {
    items = global;
    if (global === undefined) {
      items = [];
    }
    tmp = Doc(this, Doc);
    this.content = [];
    this.indent = 0;
    if (this) {
      this.args = items;
    }
    return;
  }
}
_classCallCheck = Doc;
let items = [
  {
    key: "indented",
    value: function indented(fn) {
      this.indent = this.indent + 1;
      fn(this);
      this.indent = this.indent - 1;
    }
  },
  {
    key: "write",
    value: function write(fn) {
      const self = this;
      if (typeof fn === "function") {
        fn(self, { execution: "sync" });
        fn(self, { execution: "async" });
      } else {
        const parts = fn.split("\n");
        const found = parts.filter((item, index) => item);
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(found.map((item, index) => item.length - item.trimStart().length), 0);
        const _Math2 = Math;
        closure_0 = HermesBuiltin.apply(items, Math);
        const mapped = found.map((item, index) => item.slice(closure_0));
        const mapped1 = mapped.map((item, index) => " ".repeat(2 * self.indent) + item);
        for (const item10003 of mapped1) {
          let content = self.content;
          let arr = content.push(item10003);
          continue;
        }
      }
    }
  },
  {
    key: "compile",
    value: function compile() {
      const self = this;
      if (this != null) {
        const args = self.args;
      }
      const items = [...args];
      let content;
      if (self != null) {
        content = self.content;
      }
      if (content == null) {
        content = [""];
      }
      const items1 = [...content.map((item, index) => "  " + item)];
      items[tmp] = items1.join("\n");
      return Function(...args);
    }
  }
];

export const Doc = _createClass(Doc, items);