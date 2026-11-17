// === Module 20231: uniqWith ===

// Module 20231 (uniqWith)
import baseUniq from "baseUniq" /* 18504 */;


export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, undefined, tmp);
    }
    return [];
  }
};