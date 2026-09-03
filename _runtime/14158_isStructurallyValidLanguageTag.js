// === Module 14158: isStructurallyValidLanguageTag ===

// Module 14158 (isStructurallyValidLanguageTag)
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 14159 */;
import compareKV from "compareKV" /* 14160 */;
import __exportStarResult2 from "__exportStarResult2" /* 14163 */;
import __exportStarResult1 from "__exportStarResult1" /* 14164 */;
import e from "e" /* 1280 */;

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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require(14162) /* parseUnicodeLanguageId */.parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = require(14162) /* parseUnicodeLanguageId */.isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = require(14162) /* parseUnicodeLanguageId */.isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require(14162) /* parseUnicodeLanguageId */.isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require(14162) /* parseUnicodeLanguageId */.isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require(14162) /* parseUnicodeLanguageId */.parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require(14162) /* parseUnicodeLanguageId */.parseUnicodeLocaleId;