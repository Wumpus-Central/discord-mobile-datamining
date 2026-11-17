// === Module 20279: uniqWith ===

// Module 20279 (uniqWith)
import baseUniq from "baseUniq" /* 18545 */;


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