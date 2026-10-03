// === Module 972: reportPageLoaded ===

// Module 972 (reportPageLoaded)
import _mod693 from "module_693" /* 693 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const reportPageLoaded = function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    client = _mod693.getClient();
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
};