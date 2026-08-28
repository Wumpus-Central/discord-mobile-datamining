// _runtime/12619_Doc.js
import Doc from "metro/00041__classCallCheck.js";
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
let items = [
  {
    key: "indented",
    value: function indented(arg0) {
      this.indent = this.indent + 1;
      arg0(this);
      this.indent = this.indent - 1;
    }
  },
  {
    key: "write",
    value: function write(fn) {
      let self = this;
      self = this;
      if (typeof fn === "function") {
        fn(self, { execution: "sync" });
        fn(self, { execution: "async" });
      } else {
        const parts = fn.split("\n");
        const found = parts.filter((arg0) => arg0);
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(found.map((str) => str.length - str.trimStart().length), 0);
        const _Math2 = Math;
        closure_0 = HermesBuiltin.apply(items, Math);
        const mapped = found.map((arr) => arr.slice(closure_0));
        const mapped1 = mapped.map((arg0) => " ".repeat(2 * self.indent) + arg0);
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
      const items1 = [...content.map((arg0) => "  " + arg0)];
      items[tmp] = items1.join("\n");
      return Function(...args);
    }
  }
];

export const Doc = _createClass(Doc, items);