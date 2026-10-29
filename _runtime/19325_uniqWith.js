// === Module 19325: uniqWith ===

// Module 19325 (uniqWith)
import baseUniq from "baseUniq" /* 17723 */;


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