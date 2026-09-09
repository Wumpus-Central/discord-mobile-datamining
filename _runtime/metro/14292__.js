// === Module 14292: ? ===

// Module 14292
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 14293 */;
import compareKV from "compareKV" /* 14294 */;
import likelySubtags from "likelySubtags" /* 14297 */;
import _mod14298 from "module_14298" /* 14298 */;
import e from "e" /* 1162 */;

e.__exportStar(emitUnicodeLanguageId, exports);
e.__exportStar(_mod14298, exports);
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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require("module_14296").parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = require("module_14296").isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = require("module_14296").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("module_14296").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("module_14296").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("module_14296").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("module_14296").parseUnicodeLocaleId;