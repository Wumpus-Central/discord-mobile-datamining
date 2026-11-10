// === Module 19881: uniqWith ===

// Module 19881 (uniqWith)
import baseUniq from "baseUniq" /* 18213 */;


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