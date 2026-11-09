// === Module 16408: ? ===

// Module 16408
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 16409 */;
import compareKV from "compareKV" /* 16410 */;
import likelySubtags from "likelySubtags" /* 16413 */;
import _mod16414 from "module_16414" /* 16414 */;
import e_mod from "e" /* 1159 */;

const require = globalThis.__r;

let e = e_mod;
e.__exportStar(emitUnicodeLanguageId, exports);
let e = e_mod;
e.__exportStar(_mod16414, exports);
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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require("module_16412").parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = require("module_16412").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("module_16412").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("module_16412").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("module_16412").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("module_16412").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("module_16412").parseUnicodeLocaleId;