// === Module 1096: reportPageLoaded ===

// Module 1096 (reportPageLoaded)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;

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