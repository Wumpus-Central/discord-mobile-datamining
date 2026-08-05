// _runtime/01096_reportPageLoaded.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.reportPageLoaded = function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    client = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */.getClient();
    const obj2 = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */;
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
};