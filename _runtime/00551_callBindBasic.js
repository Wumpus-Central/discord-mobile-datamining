// _runtime/00551_callBindBasic.js

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = require("metro/00552__.js");
      return tmp4(require("00554_bind.js") /* bind */, require("metro/00556__.js"), items);
    }
  }
  throw new require("metro/00541__.js")("a function is required");
};