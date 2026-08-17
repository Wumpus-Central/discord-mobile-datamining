// _runtime/13640_isStructurallyValidLanguageTag.js
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 13641 */;
import compareKV from "compareKV" /* 13642 */;
import __exportStarResult2 from "__exportStarResult2" /* 13645 */;
import __exportStarResult1 from "__exportStarResult1" /* 13646 */;
import e from "e" /* 1281 */;
import { parseUnicodeLanguageId } from "13644_parseUnicodeLanguageId.js";

e.__exportStar(emitUnicodeLanguageId, exports);
e.__exportStar(__exportStarResult1, exports);
e.__exportStar(__exportStarResult2, exports);

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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(parseUnicodeLanguageId.parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = parseUnicodeLanguageId.isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = parseUnicodeLanguageId.isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = parseUnicodeLanguageId.isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = parseUnicodeLanguageId.isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = parseUnicodeLanguageId.parseUnicodeLanguageId;
export const parseUnicodeLocaleId = parseUnicodeLanguageId.parseUnicodeLocaleId;