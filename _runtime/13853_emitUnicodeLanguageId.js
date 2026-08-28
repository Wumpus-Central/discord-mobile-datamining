// === Module 13853: emitUnicodeLanguageId ===

// Module 13853 (emitUnicodeLanguageId)
import e from "e" /* 1281 */;

require = arg1;
const dependencyMap = arg6;
arg5.emitUnicodeLanguageId = function emitUnicodeLanguageId(arg0) {
  let str = "";
  if (arg0) {
    const items = [, , ];
    ({ lang: arr[0], script: arr[1], region: arr[2], variants } = arg0);
    if (!variants) {
      variants = [];
    }
    const obj = e;
    const _Boolean = Boolean;
    const found = e.__spreadArray(items, variants, true).filter(Boolean);
    str = found.join("-");
    const __spreadArrayResult = e.__spreadArray(items, variants, true);
  }
  return str;
};
arg5.emitUnicodeLocaleId = function emitUnicodeLocaleId(parseUnicodeLocaleIdResult) {
  ({ lang, extensions } = parseUnicodeLocaleIdResult);
  let str = "";
  if (lang) {
    const items = [, , ];
    ({ lang: arr[0], script: arr[1], region: arr[2], variants } = lang);
    if (!variants) {
      variants = [];
    }
    const obj = e;
    const _Boolean = Boolean;
    const found = e.__spreadArray(items, variants, true).filter(Boolean);
    str = found.join("-");
    const __spreadArrayResult = e.__spreadArray(items, variants, true);
  }
  const items1 = [str];
  for (let num = 0; num < extensions.length; num = num + 1) {
    let iter = extensions[num];
    let arr = items1.push(iter.type);
    let type = iter.type;
    let tmp5 = num;
    if ("u" === type) {
      let push2 = items1.push;
      let tmp10 = require;
      let tmp11 = dependencyMap;
      let obj6 = e;
      let obj7 = e;
      let keywords = iter.keywords;
      let __spreadArrayResult1 = obj7.__spreadArray([], iter.attributes, false);
      let applyResult = push2.apply(items1, obj6.__spreadArray(__spreadArrayResult1, keywords.reduce((arr) => arr.concat(arg1), []), false));
    } else if ("t" === type) {
      let push = items1.push;
      let tmp7 = require;
      let tmp8 = dependencyMap;
      let obj3 = e;
      let lang2 = iter.lang;
      let str3 = "";
      if (lang2) {
        let tmp7Result = tmp7(1281);
        let items2 = [, , ];
        ({ lang: arr4[0], script: arr4[1], region: arr4[2], variants: variants2 } = lang2);
        if (!variants2) {
          variants2 = [];
        }
        let __spreadArrayResult2 = tmp7Result.__spreadArray(items2, variants2, true);
        let _Boolean2 = Boolean;
        let found1 = __spreadArrayResult2.filter(Boolean);
        str3 = found1.join("-");
      }
      let items3 = [str3];
      let fields = iter.fields;
      let applyResult1 = push.apply(items1, obj3.__spreadArray(items3, fields.reduce((arr) => arr.concat(arg1), []), false));
    } else {
      arr = items1.push(iter.value);
    }
  }
  const found2 = items1.filter(Boolean);
  return found2.join("-");
};