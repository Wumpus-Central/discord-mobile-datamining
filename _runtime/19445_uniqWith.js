// === Module 19445: uniqWith ===

// Module 19445 (uniqWith)
import baseUniq from "baseUniq" /* 17838 */;


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