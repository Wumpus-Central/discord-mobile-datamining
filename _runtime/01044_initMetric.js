// === Module 1044: initMetric ===

// Module 1044 (initMetric)
import WINDOW from "WINDOW" /* 1039 */;
import getActivationStart from "getActivationStart" /* 1042 */;
import getNavigationEntry from "getNavigationEntry" /* 1043 */;
import generateUniqueID from "generateUniqueID" /* 1045 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.initMetric = (name) => {
  let num = arg1;
  if (arg1 === undefined) {
    num = -1;
  }
  let obj = getNavigationEntry;
  const navigationEntry = obj.getNavigationEntry();
  let str = "navigate";
  let str2 = "navigate";
  if (navigationEntry) {
    const _document = WINDOW.WINDOW.document;
    let prerendering;
    if (_document != null) {
      prerendering = _document.prerendering;
    }
    let str4 = "prerender";
    if (!prerendering) {
      let tmpResult = getActivationStart;
      str4 = "prerender";
      if (tmpResult.getActivationStart() <= 0) {
        const _document2 = WINDOW.WINDOW.document;
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
  tmpResult = generateUniqueID;
  obj[5] = tmpResult.generateUniqueID();
  obj[6] = str2;
  return obj;
};