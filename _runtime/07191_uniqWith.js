// === Module 7191: uniqWith ===

// Module 7191 (uniqWith)
import baseUniq from "baseUniq" /* 7192 */;


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