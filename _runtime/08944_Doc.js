// _runtime/08944_Doc.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

class Doc {
  constructor() {
    items = global;
    if (global === undefined) {
      items = [];
    }
    tmp = closure_0(this, Doc);
    this.content = [];
    this.indent = 0;
    if (this) {
      this.args = items;
    }
    return;
  }
}
_classCallCheck = Doc;
const entry = {
  key: "indented",
  value: function indented(fn) {
    this.indent = this.indent + 1;
    fn(this);
    this.indent = this.indent - 1;
  },
};
let items = [
  entry,
  {
    key: "write",
    value: function write(fn) {
      const self = this;
      if (typeof fn === "function") {
        fn(self, { execution: "sync" });
        fn(self, { execution: "async" });
      } else {
        const parts = fn.split("\n");
        const found = parts.filter((item) => item);
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(
          found.map((item) => item.length - item.trimStart().length),
          0,
        );
        const _Math2 = Math;
        closure_0 = HermesBuiltin.apply(items, Math);
        const mapped = found.map((arr) => arr.slice(closure_0));
        const mapped1 = mapped.map((item) => " ".repeat(2 * self.indent) + item);
        for (const item10003 of mapped1) {
          let content = self.content;
          let arr = content.push(item10003);
          continue;
        }
      }
    },
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
      const items1 = [...content.map((item) => "  " + item)];
      items[tmp] = items1.join("\n");
      return Function(...args);
    },
  },
];

export const Doc = _createClass(Doc, items);
