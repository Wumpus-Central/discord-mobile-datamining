// === Module 15706: ? ===

// Module 15706
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 15707 */;
import compareKV from "compareKV" /* 15708 */;
import likelySubtags from "likelySubtags" /* 15711 */;
import _mod15712 from "module_15712" /* 15712 */;
import e_mod from "e" /* 1158 */;

const require = globalThis.__r;

let e = e_mod;
e.__exportStar(emitUnicodeLanguageId, exports);
let e = e_mod;
e.__exportStar(_mod15712, exports);
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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require("module_15710").parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = require("module_15710").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("module_15710").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("module_15710").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("module_15710").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("module_15710").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("module_15710").parseUnicodeLocaleId;