// === Module 918: ? ===

// Module 918
import _mod913 from "module_913" /* 913 */;
import _mod916 from "module_916" /* 916 */;
import _mod917 from "module_917" /* 917 */;
import generateUniqueID from "generateUniqueID" /* 919 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export (CLS, arg1) => {
  let num = arg1;
  if (arg1 === undefined) {
    num = -1;
  }
  const navigationEntry = _mod917.getNavigationEntry();
  let str = "navigate";
  let str2 = "navigate";
  if (navigationEntry) {
    const _document = _mod913.WINDOW.document;
    let prerendering;
    if (_document != null) {
      prerendering = _document.prerendering;
    }
    let str4 = "prerender";
    if (!prerendering) {
      str4 = "prerender";
      if (tmpResult.getActivationStart() <= 0) {
        const _document2 = _mod913.WINDOW.document;
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
      tmpResult = _mod916;
    }
    str2 = str4;
  }
  const obj2 = { name: CLS, value: num, rating: "good", delta: 0, entries: [], id: null, navigationType: null };
  obj2.id = generateUniqueID.generateUniqueID();
  obj2.navigationType = str2;
  return obj2;
}