// === Module 14030: canonicalizeUnicodeLanguageId ===

// Module 14030 (canonicalizeUnicodeLanguageId)
import _mod1172 from "module_1172" /* 1172 */;
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 14029 */;
import languageAlias from "languageAlias" /* 14031 */;
import SEPARATOR from "SEPARATOR" /* 14032 */;
import likelySubtags from "likelySubtags" /* 14033 */;

function compareKV(arg0, arg1) {
  let num = -1;
  if (arg0[0] >= arg1[0]) {
    let num2 = 0;
    if (arg0[0] > arg1[0]) {
      num2 = 1;
    }
    num = num2;
  }
  return num;
}
function compareExtension(type, type2) {
  let num = -1;
  if (type.type >= type2.type) {
    let num2 = 0;
    if (type.type > type2.type) {
      num2 = 1;
    }
    num = num2;
  }
  return num;
}
function canonicalizeUnicodeLanguageId(lang) {
  let __spreadArrayResult;
  let items;
  let result;
  let result2;
  let result3;
  let tmp = lang;
  if (lang.variants.length) {
    const variants1 = lang.variants;
    let num3 = 0;
    tmp = lang;
    if (0 < variants1.length) {
      let num4;
      const obj = { lang: lang.lang, variants: items };
      items = [variants1[num3]];
      const str = languageAlias.languageAlias[emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, obj)];
      while (!str) {
        num3 = num3 + 1;
        tmp = lang;
      }
      const obj2 = { lang: result.lang, script: lang.script || result.script, region: lang.region || result.region, variants: __spreadArrayResult };
      result = SEPARATOR.parseUnicodeLanguageId(str.split(SEPARATOR.SEPARATOR));
      const variants2 = lang.variants;
      const variants3 = result.variants;
      const tmp3Result = _mod1172;
      __spreadArrayResult = tmp3Result.__spreadArray([], variants2, true);
      for (let num4 = 0; num4 < variants3.length; num4 = num4 + 1) {
        let tmp7 = variants3[num4];
        if (variants2.indexOf(tmp7) < 0) {
          let arr = __spreadArrayResult.push(tmp7);
        }
      }
      tmp = obj2;
    }
  }
  let tmp10 = tmp;
  if (tmp.script) {
    tmp10 = tmp;
    if (tmp.region) {
      const obj3 = { lang: null, script: null, region: null, variants: [] };
      ({ lang: obj4.lang, script: obj4.script, region: obj4.region } = tmp);
      const str2 = languageAlias.languageAlias[emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, obj3)];
      tmp10 = tmp;
      if (str2) {
        const obj7 = { lang: null, script: null, region: null, variants: tmp.variants };
        const result1 = SEPARATOR.parseUnicodeLanguageId(str2.split(SEPARATOR.SEPARATOR));
        ({ lang: obj5.lang, script: obj5.script, region: obj5.region } = result1);
        tmp10 = obj7;
      }
    }
  }
  let tmp14 = tmp10;
  if (tmp10.region) {
    const obj8 = { lang: null, region: null, variants: [] };
    ({ lang: obj6.lang, region: obj6.region } = tmp10);
    const str3 = languageAlias.languageAlias[emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, obj8)];
    tmp14 = tmp10;
    if (str3) {
      const obj9 = { lang: result2.lang, script: tmp10.script || result2.script, region: result2.region, variants: tmp10.variants };
      result2 = SEPARATOR.parseUnicodeLanguageId(str3.split(SEPARATOR.SEPARATOR));
      tmp14 = obj9;
    }
  }
  const obj18 = { lang: tmp14.lang, variants: [] };
  const str4 = languageAlias.languageAlias[emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, obj18)];
  let tmp20 = tmp14;
  if (str4) {
    const obj19 = { lang: result3.lang, script: tmp14.script || result3.script, region: tmp14.region || result3.region, variants: tmp14.variants };
    result3 = SEPARATOR.parseUnicodeLanguageId(str4.split(SEPARATOR.SEPARATOR));
    tmp20 = obj19;
  }
  if (tmp20.region) {
    const str5 = tmp20.region;
    const formatted = str5.toUpperCase();
    const str6 = languageAlias.territoryAlias[formatted];
    let tmp23;
    if (str6) {
      const parts = str6.split(" ");
      const first = parts[0];
      const obj20 = { lang: null, script: null, variants: [] };
      ({ lang: obj10.lang, script: obj10.script } = tmp20);
      const str8 = likelySubtags.likelySubtags[emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, obj20)];
      tmp23 = first;
      if (str8) {
        const region = SEPARATOR.parseUnicodeLanguageId(str8.split(SEPARATOR.SEPARATOR)).region;
        tmp23 = first;
        const tmp25 = region && parts.indexOf(region) > -1;
        if (tmp25) {
          tmp23 = region;
        }
      }
    }
    if (tmp23) {
      tmp20.region = tmp23;
    }
    const str9 = tmp20.region;
    tmp20.region = str9.toUpperCase();
  }
  if (tmp20.script) {
    const script = tmp20.script;
    const str10 = tmp20.script[0];
    const formatted1 = str10.toUpperCase();
    const str11 = script.slice(1);
    tmp20.script = formatted1 + str11.toLowerCase();
    if (languageAlias.scriptAlias[tmp20.script]) {
      tmp20.script = languageAlias.scriptAlias[tmp20.script];
    }
  }
  if (tmp20.variants.length) {
    let num7;
    for (let num7 = 0; num7 < tmp20.variants.length; num7 = num7 + 1) {
      let str12 = tmp20.variants[num7];
      let formatted2 = str12.toLowerCase();
      if (languageAlias.variantAlias[formatted2]) {
        let tmp31 = languageAlias.variantAlias[formatted2];
        if (SEPARATOR.isUnicodeVariantSubtag(tmp31)) {
          tmp20.variants[num7] = tmp31;
        } else if (SEPARATOR.isUnicodeLanguageSubtag(tmp31)) {
          tmp20.lang = tmp31;
        }
      }
    }
    const variants = tmp20.variants;
    const sorted = variants.sort();
  }
  return tmp20;
}

export { canonicalizeUnicodeLanguageId };
export const CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(lang) {
  lang.lang = canonicalizeUnicodeLanguageId(lang.lang);
  if (lang.extensions) {
    let num3;
    const extensions1 = lang.extensions;
    for (let num3 = 0; num3 < extensions1.length; num3 = num3 + 1) {
      let iter = extensions1[num3];
      let type = iter.type;
      if ("u" === type) {
        let num5;
        let keywords = iter.keywords;
        let obj2 = {};
        let items = [];
        for (let num5 = 0; num5 < keywords.length; num5 = num5 + 1) {
          let tmp9 = keywords[num5];
          if (!(tmp9[0] in obj2)) {
            obj2[tmp9[0]] = 1;
            if (tmp9[1]) {
              if ("true" !== tmp9[1]) {
                let str9 = tmp9[0];
                let push4 = items.push;
                let items1 = [str9.toLowerCase(), ];
                let str10 = tmp9[1];
                items1[1] = str10.toLowerCase();
                let push4Result = push4(items1);
              }
            }
            let str8 = tmp9[0];
            let push3 = items.push;
            let items2 = [str8.toLowerCase()];
            let push3Result = push3(items2);
          }
        }
        iter.keywords = items.sort(compareKV);
        if (iter.attributes) {
          let attributes = iter.attributes;
          let _Object = Object;
          let keys = Object.keys(attributes.reduce((acc, item) => {
            acc[item.toLowerCase()] = 1;
            return acc;
          }, {}));
          iter.attributes = keys.sort();
        }
      } else if ("t" === type) {
        let num4;
        if (iter.lang) {
          iter.lang = canonicalizeUnicodeLanguageId(iter.lang);
        }
        let fields = iter.fields;
        let obj = {};
        let items3 = [];
        for (let num4 = 0; num4 < fields.length; num4 = num4 + 1) {
          let tmp4 = fields[num4];
          if (!(tmp4[0] in obj)) {
            obj[tmp4[0]] = 1;
            if (tmp4[1]) {
              if ("true" !== tmp4[1]) {
                let str6 = tmp4[0];
                let push2 = items3.push;
                let items4 = [str6.toLowerCase(), ];
                let str7 = tmp4[1];
                items4[1] = str7.toLowerCase();
                let push2Result = push2(items4);
              }
            }
            let str5 = tmp4[0];
            let push = items3.push;
            let items5 = [str5.toLowerCase()];
            let arr = push(items5);
          }
        }
        iter.fields = items3.sort(compareKV);
      } else {
        let str4 = iter.value;
        iter.value = str4.toLowerCase();
      }
    }
    const extensions = lang.extensions;
    const sorted = extensions.sort(compareExtension);
  }
  return lang;
};