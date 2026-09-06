// _runtime/metro/00909__.js
import _mod904 from "00904__.js";
import _mod907 from "00907__.js";
import _mod908 from "00908__.js";
import generateUniqueID from "../00910_generateUniqueID.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const initMetric = (CLS, arg1) => {
  let num = arg1;
  if (arg1 === undefined) {
    num = -1;
  }
  let obj = _mod908;
  const navigationEntry = obj.getNavigationEntry();
  let str = "navigate";
  let str2 = "navigate";
  if (navigationEntry) {
    const _document = _mod904.WINDOW.document;
    let prerendering;
    if (_document != null) {
      prerendering = _document.prerendering;
    }
    let str4 = "prerender";
    if (!prerendering) {
      let tmpResult = _mod907;
      str4 = "prerender";
      if (tmpResult.getActivationStart() <= 0) {
        const _document2 = _mod904.WINDOW.document;
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
  obj = { name: CLS, value: num, rating: "good", delta: 0, entries: [], id: null, navigationType: null };
  tmpResult = generateUniqueID;
  obj.id = tmpResult.generateUniqueID();
  obj.navigationType = str2;
  return obj;
};
