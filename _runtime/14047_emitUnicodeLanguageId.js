// _runtime/14047_emitUnicodeLanguageId.js
import _mod1172 from "metro/01172__.js";

export const emitUnicodeLanguageId = function emitUnicodeLanguageId(arg0) {
  let variants;
  let str = "";
  if (arg0) {
    const items = [, ,];
    ({ lang: arr[0], script: arr[1], region: arr[2], variants } = arg0);
    const __spreadArray = _mod1172.__spreadArray;
    _mod1172;
    if (!variants) {
      variants = [];
    }
    const _Boolean = Boolean;
    const __spreadArrayResult = __spreadArray(items, variants, true);
    const found = __spreadArrayResult.filter(Boolean);
    str = found.join("-");
  }
  return str;
};
export const emitUnicodeLocaleId = function emitUnicodeLocaleId(parseUnicodeLocaleIdResult) {
  let extensions;
  let lang;
  let num;
  let variants;
  let variants2;
  ({ lang, extensions } = parseUnicodeLocaleIdResult);
  let str = "";
  if (lang) {
    const items = [, ,];
    ({ lang: arr[0], script: arr[1], region: arr[2], variants } = lang);
    const __spreadArray = _mod1172.__spreadArray;
    _mod1172;
    if (!variants) {
      variants = [];
    }
    const _Boolean = Boolean;
    const __spreadArrayResult = __spreadArray(items, variants, true);
    const found = __spreadArrayResult.filter(Boolean);
    str = found.join("-");
  }
  const items1 = [str];
  for (let num = 0; num < extensions.length; num = num + 1) {
    let iter = extensions[num];
    let arr2 = items1.push(iter.type);
    let type = iter.type;
    if ("u" === type) {
      let push2 = items1.push;
      let apply2 = push2.apply;
      let tmp15 = _mod1172;
      let __spreadArray4 = tmp15.__spreadArray;
      let obj3 = _mod1172;
      let keywords = iter.keywords;
      let __spreadArrayResult1 = obj3.__spreadArray([], iter.attributes, false);
      let apply2Result = apply2(
        items1,
        __spreadArray4(
          __spreadArrayResult1,
          keywords.reduce((arr, item) => arr.concat(item), []),
          false,
        ),
      );
    } else if ("t" === type) {
      let push = items1.push;
      let apply = push.apply;
      let tmp10 = _mod1172;
      let lang2 = iter.lang;
      let str3 = "";
      let __spreadArray2 = tmp10.__spreadArray;
      if (lang2) {
        let tmp8Result = _mod1172;
        let items2 = [, ,];
        ({ lang: arr4[0], script: arr4[1], region: arr4[2], variants: variants2 } = lang2);
        let __spreadArray3 = tmp8Result.__spreadArray;
        if (!variants2) {
          variants2 = [];
        }
        let __spreadArray3Result = __spreadArray3(items2, variants2, true);
        let _Boolean2 = Boolean;
        let found1 = __spreadArray3Result.filter(Boolean);
        str3 = found1.join("-");
      }
      let items3 = [str3];
      let fields = iter.fields;
      let applyResult = apply(
        items1,
        __spreadArray2(
          items3,
          fields.reduce((arr, item) => arr.concat(item), []),
          false,
        ),
      );
    } else {
      let arr3 = items1.push(iter.value);
    }
  }
  const found2 = items1.filter(Boolean);
  return found2.join("-");
};
