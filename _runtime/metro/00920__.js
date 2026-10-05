// _runtime/metro/00920__.js
import _mod915 from "00915__.js";
import _mod918 from "00918__.js";
import _mod919 from "00919__.js";
import generateUniqueID from "../00921_generateUniqueID.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const initMetric = (CLS, arg1) => {
  let tmpResult2;
  let num = arg1;
  if (arg1 === undefined) {
    num = -1;
  }
  const obj = _mod919;
  const navigationEntry = obj.getNavigationEntry();
  let str = "navigate";
  let str2 = "navigate";
  if (navigationEntry) {
    const _document = _mod915.WINDOW.document;
    let prerendering;
    if (_document != null) {
      prerendering = _document.prerendering;
    }
    let str4 = "prerender";
    if (!prerendering) {
      str4 = "prerender";
      const tmpResult = _mod918;
      if (tmpResult.getActivationStart() <= 0) {
        const _document2 = _mod915.WINDOW.document;
        let wasDiscarded;
        if (_document2 != null) {
          wasDiscarded = _document2.wasDiscarded;
        }
        let str5 = "restore";
        if (!wasDiscarded) {
          if (navigationEntry.type) {
            const str6 = navigationEntry.type;
            str = str6.replace(/_/g, "-");
          }
          str5 = str;
        }
        str4 = str5;
      }
    }
    str2 = str4;
  }
  const obj2 = {
    name: CLS,
    value: num,
    rating: "good",
    delta: 0,
    entries: [],
    id: tmpResult2.generateUniqueID(),
    navigationType: str2,
  };
  tmpResult2 = generateUniqueID;
  return obj2;
};
