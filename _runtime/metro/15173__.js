// === Module 15173: ? ===

// Module 15173
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 15174 */;
import compareKV from "compareKV" /* 15175 */;
import likelySubtags from "likelySubtags" /* 15178 */;
import _mod15179 from "module_15179" /* 15179 */;
import e_mod from "e" /* 1172 */;

const require = globalThis.__r;

let e = e_mod;
e.__exportStar(emitUnicodeLanguageId, exports);
let e = e_mod;
e.__exportStar(_mod15179, exports);
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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require("module_15177").parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = require("module_15177").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("module_15177").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("module_15177").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("module_15177").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("module_15177").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("module_15177").parseUnicodeLocaleId;