// === Module 972: reportPageLoaded ===

// Module 972 (reportPageLoaded)
import _mod693 from "module_693" /* 693 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reportPageLoaded = function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    const obj2 = _mod693;
    client = obj2.getClient();
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
};