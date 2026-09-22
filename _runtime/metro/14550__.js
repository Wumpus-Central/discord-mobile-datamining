// === Module 14550: ? ===

// Module 14550
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 14551 */;
import compareKV from "compareKV" /* 14552 */;
import likelySubtags from "likelySubtags" /* 14555 */;
import _mod14556 from "module_14556" /* 14556 */;
import e_mod from "e" /* 1161 */;

const require = globalThis.__r;

let e = e_mod;
e.__exportStar(emitUnicodeLanguageId, exports);
let e = e_mod;
e.__exportStar(_mod14556, exports);
let e = e_mod;
e.__exportStar(likelySubtags, exports);

export const getCanonicalLocales = function getCanonicalLocales(items) {
  if (undefined === items) {
    items = [];
  } else {
    let arr3 = items;
    if (typeof items === "string") {
      const items1 = [items];
      arr3 = items1;
    }
    const items2 = [];
    let num3 = 0;
    items = items2;
    if (0 < arr3.length) {
      do {
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require("module_14554").parseUnicodeLocaleId(arr3[num3])));
        if (items2.indexOf(emitUnicodeLocaleIdResult) < 0) {
          let arr = items2.push(emitUnicodeLocaleIdResult);
        }
        num3 = num3 + 1;
        items = items2;
      } while (num3 < arr3.length);
    }
  }
  return items;
};
export const isStructurallyValidLanguageTag = require("module_14554").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("module_14554").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("module_14554").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("module_14554").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("module_14554").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("module_14554").parseUnicodeLocaleId;