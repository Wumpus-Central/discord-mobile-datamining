// === Module 961: reportPageLoaded ===

// Module 961 (reportPageLoaded)
import _mod682 from "module_682" /* 682 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const reportPageLoaded = function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    client = _mod682.getClient();
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
};