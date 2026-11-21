// _runtime/metro/15505__.js
import emitUnicodeLanguageId from "../15506_emitUnicodeLanguageId.js";
import compareKV from "../15507_compareKV.js";
import likelySubtags from "../15510_likelySubtags.js";
import _mod15511 from "15511__.js";
import e_mod from "../01158_e.js";

const require = globalThis.__r;

let e = e_mod;
e.__exportStar(emitUnicodeLanguageId, exports);
let e = e_mod;
e.__exportStar(_mod15511, exports);
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
          compareKV.CanonicalizeUnicodeLocaleId(require("15509__.js").parseUnicodeLocaleId(arr3[num3])),
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
export const isStructurallyValidLanguageTag = require("15509__.js").isStructurallyValidLanguageTag;
export const isUnicodeLanguageSubtag = require("15509__.js").isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require("15509__.js").isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require("15509__.js").isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require("15509__.js").parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require("15509__.js").parseUnicodeLocaleId;
