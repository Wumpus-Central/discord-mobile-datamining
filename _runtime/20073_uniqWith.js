// === Module 20073: uniqWith ===

// Module 20073 (uniqWith)
import baseUniq from "baseUniq" /* 18384 */;


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