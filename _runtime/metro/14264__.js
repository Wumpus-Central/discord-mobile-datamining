// _runtime/metro/14264__.js
import emitUnicodeLanguageId from "../14265_emitUnicodeLanguageId.js";
import compareKV from "../14266_compareKV.js";
import likelySubtags from "../14269_likelySubtags.js";
import _mod14270 from "14270__.js";
import e from "../01162_e.js";

e.__exportStar(emitUnicodeLanguageId, exports);
e.__exportStar(_mod14270, exports);
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
          compareKV.CanonicalizeUnicodeLocaleId(require("14268__.js").parseUnicodeLocaleId(arr3[num3])),
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
export const isStructurallyValidLanguageTag = require("14268__.js").isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = require("14268__.js").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("14268__.js").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("14268__.js").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("14268__.js").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("14268__.js").parseUnicodeLocaleId;
