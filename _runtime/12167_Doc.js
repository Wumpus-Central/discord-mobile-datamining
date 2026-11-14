// === Module 12167: Doc ===

// Module 12167 (Doc)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const Doc = exports;
class Doc {
  constructor() {
    items = global;
    if (global === undefined) {
      items = [];
    }
    obj = require;
    if (require === undefined) {
      obj = {};
    }
    tmp = closure_1(this, Doc);
    this.content = [];
    this.indent = 0;
    this.args = items;
    this.closed = obj;
    return;
  }
}
const entry = {
  key: "indented",
  value: function indented(fn3) {
    const self = this;
    this.indent = this.indent + 1;
    try {
      fn3(self);
      self.indent = self.indent - 1;
    } catch (tmp5) {
      tmp.indent = tmp.indent - tmp2;
      throw tmp5;
    }
  }
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
        items = [];
        HermesBuiltin.arraySpread(found.map((item) => item.length - item.trimStart().length), 0);
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
    }
  },
  {
    key: "compile",
    value: function compile() {
      const self = this;
      let content;
      if (this != null) {
        content = self.content;
      }
      if (content == null) {
        content = [""];
      }
      items = [...Object.keys(self.closed)];
      const args = self.args;
      const joined = args.join(", ");
      items[tmp] = "return function (" + joined + ") {\n" + content.join("\n") + "\n};";
      return Function(...Object.keys(self.closed))(...Object.values(self.closed));
    }
  }
];
(() => {
  let tmp = Doc;
  const ownPropertyNames = Object.getOwnPropertyNames(Doc);
  let num = 0;
  if (0 < ownPropertyNames.length) {
    const _Object = Object;
    const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(Doc, ownPropertyNames[num]);
    if (ownPropertyDescriptor) {
      if (ownPropertyDescriptor.get) {
        if (ownPropertyDescriptor.configurable) {
          try {
            value = ownPropertyDescriptor.get();
            if (undefined !== value) {
              const _Object2 = Object;
              const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
              Object.defineProperty(Doc, ownPropertyNames[num], obj);
            }
          } catch (err) {
          }
        }
      }
    }
    num = num + 1;
    tmp = Doc;
  }
  const frozen = Object.freeze(tmp);
})();

export const Doc = _createClass(Doc, items);