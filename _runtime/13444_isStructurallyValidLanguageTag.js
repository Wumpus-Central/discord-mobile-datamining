import { emitUnicodeLanguageId } from "13445_emitUnicodeLanguageId.js";
import { compareKV } from "13446_compareKV.js";
import { parseUnicodeLanguageId } from "13448_parseUnicodeLanguageId.js";
// _runtime/13444_isStructurallyValidLanguageTag.js
import e from "e";
import e from "e";
import e from "e";

e.__exportStar(require("emitUnicodeLanguageId"), exports);
e.__exportStar(require("__exportStarResult1"), exports);
e.__exportStar(require("__exportStarResult2"), exports);

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
        let tmp = require;
        let tmp2 = dependencyMap;
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId /* emitUnicodeLanguageId */.emitUnicodeLocaleId(compareKV /* compareKV */.CanonicalizeUnicodeLocaleId(parseUnicodeLanguageId /* parseUnicodeLanguageId */.parseUnicodeLocaleId(arr3[num3])));
        let tmp4 = num3;
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
export const isStructurallyValidLanguageTag = parseUnicodeLanguageId /* parseUnicodeLanguageId */.isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = parseUnicodeLanguageId /* parseUnicodeLanguageId */.isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = parseUnicodeLanguageId /* parseUnicodeLanguageId */.isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = parseUnicodeLanguageId /* parseUnicodeLanguageId */.isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = parseUnicodeLanguageId /* parseUnicodeLanguageId */.parseUnicodeLanguageId;
export const parseUnicodeLocaleId = parseUnicodeLanguageId /* parseUnicodeLanguageId */.parseUnicodeLocaleId;