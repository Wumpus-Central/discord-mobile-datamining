// === Module 13640: isStructurallyValidLanguageTag ===

// Module 13640 (isStructurallyValidLanguageTag)
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 13641 */;
import compareKV from "compareKV" /* 13642 */;
import __exportStarResult2 from "__exportStarResult2" /* 13645 */;
import __exportStarResult1 from "__exportStarResult1" /* 13646 */;
import e from "e" /* 1281 */;

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
        let emitUnicodeLocaleIdResult = emitUnicodeLanguageId.emitUnicodeLocaleId(compareKV.CanonicalizeUnicodeLocaleId(require(13644) /* parseUnicodeLanguageId */.parseUnicodeLocaleId(arr3[num3])));
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
export const isStructurallyValidLanguageTag = require(13644) /* parseUnicodeLanguageId */.isUnicodeLanguageSubtag;
export const isUnicodeLanguageSubtag = require(13644) /* parseUnicodeLanguageId */.isUnicodeLanguageSubtag;
export const isUnicodeRegionSubtag = require(13644) /* parseUnicodeLanguageId */.isUnicodeRegionSubtag;
export const isUnicodeScriptSubtag = require(13644) /* parseUnicodeLanguageId */.isUnicodeScriptSubtag;
export const parseUnicodeLanguageId = require(13644) /* parseUnicodeLanguageId */.parseUnicodeLanguageId;
export const parseUnicodeLocaleId = require(13644) /* parseUnicodeLanguageId */.parseUnicodeLocaleId;