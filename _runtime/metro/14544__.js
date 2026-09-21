// === Module 14544: ? ===

// Module 14544
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 14545 */;
import compareKV from "compareKV" /* 14546 */;
import likelySubtags from "likelySubtags" /* 14549 */;
import _mod14550 from "module_14550" /* 14550 */;
import e_mod from "e" /* 1161 */;

const require = globalThis.__r;

let e = e_mod;
e.__exportStar(emitUnicodeLanguageId, exports);
let e = e_mod;
e.__exportStar(_mod14550, exports);
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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require("module_14548").parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = require("module_14548").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("module_14548").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("module_14548").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("module_14548").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("module_14548").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("module_14548").parseUnicodeLocaleId;