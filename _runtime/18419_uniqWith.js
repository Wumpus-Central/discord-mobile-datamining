// === Module 18419: uniqWith ===

// Module 18419 (uniqWith)
import baseUniq from "baseUniq" /* 16853 */;


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