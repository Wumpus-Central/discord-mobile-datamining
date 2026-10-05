// === Module 17494: uniqWith ===

// Module 17494 (uniqWith)
import baseUniq from "baseUniq" /* 15720 */;


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