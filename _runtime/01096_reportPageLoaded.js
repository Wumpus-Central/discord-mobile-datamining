// _runtime/01096_reportPageLoaded.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.reportPageLoaded = function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    client = registerSpanErrorInstrumentation.getClient();
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
};