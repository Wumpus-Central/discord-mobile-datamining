// === Module 15774: ? ===

// Module 15774
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 15775 */;
import compareKV from "compareKV" /* 15776 */;
import likelySubtags from "likelySubtags" /* 15779 */;
import _mod15780 from "module_15780" /* 15780 */;
import e_mod from "e" /* 1171 */;

const require = globalThis.__r;

let e = e_mod;
e.__exportStar(emitUnicodeLanguageId, exports);
let e = e_mod;
e.__exportStar(_mod15780, exports);
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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require("module_15778").parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = require("module_15778").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("module_15778").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("module_15778").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("module_15778").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("module_15778").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("module_15778").parseUnicodeLocaleId;