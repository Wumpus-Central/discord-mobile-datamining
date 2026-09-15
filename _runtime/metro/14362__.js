// _runtime/metro/14362__.js
import emitUnicodeLanguageId from "../14363_emitUnicodeLanguageId.js";
import compareKV from "../14364_compareKV.js";
import likelySubtags from "../14367_likelySubtags.js";
import _mod14368 from "14368__.js";
import e_mod from "../01161_e.js";

const require = globalThis.__r;

let e = e_mod;
e.__exportStar(emitUnicodeLanguageId, exports);
let e = e_mod;
e.__exportStar(_mod14368, exports);
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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(
          compareKV.CanonicalizeUnicodeLocaleId(require("14366__.js").parseUnicodeLocaleId(arr3[num3])),
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
export const isStructurallyValidLanguageTag = require("14366__.js").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("14366__.js").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("14366__.js").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("14366__.js").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("14366__.js").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("14366__.js").parseUnicodeLocaleId;
