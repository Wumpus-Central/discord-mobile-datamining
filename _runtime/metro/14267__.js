// === Module 14267: ? ===

// Module 14267
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 14268 */;
import compareKV from "compareKV" /* 14269 */;
import likelySubtags from "likelySubtags" /* 14272 */;
import _mod14273 from "module_14273" /* 14273 */;
import e from "e" /* 1162 */;

e.__exportStar(emitUnicodeLanguageId, exports);
e.__exportStar(_mod14273, exports);
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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require("module_14271").parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = require("module_14271").isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = require("module_14271").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("module_14271").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("module_14271").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("module_14271").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("module_14271").parseUnicodeLocaleId;