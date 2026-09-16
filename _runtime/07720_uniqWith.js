// === Module 7720: uniqWith ===

// Module 7720 (uniqWith)
import baseUniq from "baseUniq" /* 7721 */;


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