// === Module 7626: uniqWith ===

// Module 7626 (uniqWith)
import baseUniq from "baseUniq" /* 7627 */;


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