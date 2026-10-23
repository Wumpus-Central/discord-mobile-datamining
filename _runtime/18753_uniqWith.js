// === Module 18753: uniqWith ===

// Module 18753 (uniqWith)
import baseUniq from "baseUniq" /* 17176 */;


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