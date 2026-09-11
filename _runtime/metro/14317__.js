// === Module 14317: ? ===

// Module 14317
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 14318 */;
import compareKV from "compareKV" /* 14319 */;
import likelySubtags from "likelySubtags" /* 14322 */;
import _mod14323 from "module_14323" /* 14323 */;
import e from "e" /* 1162 */;

e.__exportStar(emitUnicodeLanguageId, exports);
e.__exportStar(_mod14323, exports);
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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require("module_14321").parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = require("module_14321").isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = require("module_14321").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("module_14321").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("module_14321").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("module_14321").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("module_14321").parseUnicodeLocaleId;