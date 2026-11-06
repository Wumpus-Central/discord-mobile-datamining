// === Module 16350: ? ===

// Module 16350
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 16351 */;
import compareKV from "compareKV" /* 16352 */;
import likelySubtags from "likelySubtags" /* 16355 */;
import _mod16356 from "module_16356" /* 16356 */;
import e_mod from "e" /* 1159 */;

const require = globalThis.__r;

let e = e_mod;
e.__exportStar(emitUnicodeLanguageId, exports);
let e = e_mod;
e.__exportStar(_mod16356, exports);
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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require("module_16354").parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = require("module_16354").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("module_16354").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("module_16354").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("module_16354").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("module_16354").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("module_16354").parseUnicodeLocaleId;