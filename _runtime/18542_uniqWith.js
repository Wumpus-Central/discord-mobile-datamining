// === Module 18542: uniqWith ===

// Module 18542 (uniqWith)
import baseUniq from "baseUniq" /* 16965 */;


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