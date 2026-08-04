// _runtime/01096_reportPageLoaded.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.reportPageLoaded = function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    client = require(817) /* registerSpanErrorInstrumentation */.getClient();
    const obj2 = require(817) /* registerSpanErrorInstrumentation */;
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
};