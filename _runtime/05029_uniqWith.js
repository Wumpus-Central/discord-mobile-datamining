// === Module 5029: uniqWith ===

// Module 5029 (uniqWith)
import baseUniq from "baseUniq" /* 5030 */;


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