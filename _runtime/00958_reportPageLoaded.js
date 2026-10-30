// === Module 958: reportPageLoaded ===

// Module 958 (reportPageLoaded)
import _mod681 from "module_681" /* 681 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    client = _mod681.getClient();
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
}