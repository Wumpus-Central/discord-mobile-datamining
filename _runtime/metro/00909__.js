// === Module 909: ? ===

// Module 909
import _mod908 from "module_908" /* 908 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const initMetric = (name) => {
  let num = arg1;
  if (arg1 === undefined) {
    num = -1;
  }
  let obj = _mod908;
  const navigationEntry = obj.getNavigationEntry();
  let str = "navigate";
  let str2 = "navigate";
  if (navigationEntry) {
    const _document = tmp(904).WINDOW.document;
    let prerendering;
    if (_document != null) {
      prerendering = _document.prerendering;
    }
    let str4 = "prerender";
    if (!prerendering) {
      let tmpResult = tmp(907);
      str4 = "prerender";
      if (tmpResult.getActivationStart() <= 0) {
        const _document2 = tmp(904).WINDOW.document;
        let wasDiscarded;
        if (_document2 != null) {
          wasDiscarded = _document2.wasDiscarded;
        }
        let str5 = "restore";
        if (!wasDiscarded) {
          if (navigationEntry.type) {
            str = navigationEntry.type.replace(/_/g, "-");
          }
          str5 = str;
        }
        str4 = str5;
      }
    }
    str2 = str4;
  }
  obj = { name, value: num, rating: "good", delta: 0, entries: [], id: null, navigationType: null };
  tmpResult = tmp(910);
  obj.id = tmpResult.generateUniqueID();
  obj.navigationType = str2;
  return obj;
};