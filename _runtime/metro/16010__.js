// === Module 16010: ? ===

// Module 16010
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 16011 */;
import compareKV from "compareKV" /* 16012 */;
import likelySubtags from "likelySubtags" /* 16015 */;
import _mod16016 from "module_16016" /* 16016 */;
import e_mod from "e" /* 1171 */;

const require = globalThis.__r;

let e = e_mod;
e.__exportStar(emitUnicodeLanguageId, exports);
let e = e_mod;
e.__exportStar(_mod16016, exports);
let e = e_mod;
e.__exportStar(likelySubtags, exports);

export function getCanonicalLocales(items) {
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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require("module_16014").parseUnicodeLocaleId(arr3[num3])));
        if (items2.indexOf(emitUnicodeLocaleIdResult) < 0) {
          let arr = items2.push(emitUnicodeLocaleIdResult);
        }
        num3 = num3 + 1;
        items = items2;
      } while (num3 < arr3.length);
    }
  }
  return items;
}
export const isStructurallyValidLanguageTag = require("module_16014").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("module_16014").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("module_16014").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("module_16014").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("module_16014").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("module_16014").parseUnicodeLocaleId;