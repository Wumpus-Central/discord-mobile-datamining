// _runtime/08612_Doc.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

class Doc {
  constructor(arg0) {
    let items = arg0;
    if (arg0 === undefined) {
      items = [];
    }
    _classCallCheck(this, Doc);
    this.content = [];
    this.indent = 0;
    if (this) {
      this.args = items;
    }
  }
}
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
          items,
          found.map((item) => item.length - item.trimStart().length),
          0,
        );
        const _Math2 = Math;
        let closure_0 = HermesBuiltin.apply(min, items, Math);
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
      let args;
      const self = this;
      const _Function = Function;
      if (this != null) {
        args = self.args;
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
      return _Function(...args);
    },
  },
];
const Doc_export = _createClass(Doc, items);

export { Doc_export as Doc };
