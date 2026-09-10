// === Module 14341: ? ===

// Module 14341
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 14342 */;
import compareKV from "compareKV" /* 14343 */;
import likelySubtags from "likelySubtags" /* 14346 */;
import _mod14347 from "module_14347" /* 14347 */;
import e from "e" /* 1162 */;

e.__exportStar(emitUnicodeLanguageId, exports);
e.__exportStar(_mod14347, exports);
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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require("module_14345").parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = require("module_14345").isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = require("module_14345").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("module_14345").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("module_14345").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("module_14345").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("module_14345").parseUnicodeLocaleId;