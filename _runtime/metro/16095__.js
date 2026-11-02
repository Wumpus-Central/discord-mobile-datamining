// _runtime/metro/16095__.js
import emitUnicodeLanguageId from "../16096_emitUnicodeLanguageId.js";
import compareKV from "../16097_compareKV.js";
import likelySubtags from "../16100_likelySubtags.js";
import _mod16101 from "16101__.js";
import e_mod from "../01159_e.js";

const require = globalThis.__r;

let e = e_mod;
e.__exportStar(emitUnicodeLanguageId, exports);
let e = e_mod;
e.__exportStar(_mod16101, exports);
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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(
          compareKV.CanonicalizeUnicodeLocaleId(require("16099__.js").parseUnicodeLocaleId(arr3[num3])),
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
}
export const isStructurallyValidLanguageTag = require("16099__.js").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("16099__.js").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("16099__.js").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("16099__.js").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("16099__.js").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("16099__.js").parseUnicodeLocaleId;
