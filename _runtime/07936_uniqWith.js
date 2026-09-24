// === Module 7936: uniqWith ===

// Module 7936 (uniqWith)
import baseUniq from "baseUniq" /* 7937 */;


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