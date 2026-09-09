// _runtime/metro/14292__.js
import emitUnicodeLanguageId from "../14293_emitUnicodeLanguageId.js";
import compareKV from "../14294_compareKV.js";
import likelySubtags from "../14297_likelySubtags.js";
import _mod14298 from "14298__.js";
import e from "../01162_e.js";

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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(
          compareKV.CanonicalizeUnicodeLocaleId(require("14296__.js").parseUnicodeLocaleId(arr3[num3])),
        );
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
export const isStructurallyValidLanguageTag = require("14296__.js").isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = require("14296__.js").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("14296__.js").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("14296__.js").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("14296__.js").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("14296__.js").parseUnicodeLocaleId;
