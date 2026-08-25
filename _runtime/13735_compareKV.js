// === Module 13735: compareKV ===

// Module 13735 (compareKV)
import e from "e" /* 1281 */;
import emitUnicodeLanguageId from "emitUnicodeLanguageId" /* 13734 */;
import _mod13736 from "module_13736" /* 13736 */;

require = arg1;
const dependencyMap = arg6;
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
  let tmp = lang;
  if (lang.variants.length) {
    let variants = lang.variants;
    let num3 = 0;
    tmp = lang;
    if (0 < variants.length) {
      let obj = { lang: null, variants: null };
      obj[0] = lang.lang;
      const items = [variants[num3]];
      obj[1] = items;
      const str = _mod13736.languageAlias[emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, obj)];
      while (!str) {
        num3 = num3 + 1;
        tmp = lang;
      }
      obj = { lang: null, script: null, region: null, variants: null };
      const result = tmp2(13737).parseUnicodeLanguageId(str.split(tmp2(13737).SEPARATOR));
      obj[0] = result.lang;
      obj[1] = lang.script || result.script;
      obj[2] = lang.region || result.region;
      const variants1 = lang.variants;
      const variants2 = result.variants;
      const __spreadArrayResult = e.__spreadArray([], variants1, true);
      for (let num4 = 0; num4 < variants2.length; num4 = num4 + 1) {
        let tmp6 = variants2[num4];
        let tmp7 = num4;
        if (variants1.indexOf(tmp6) < 0) {
          let arr = __spreadArrayResult.push(tmp6);
        }
      }
      obj[3] = __spreadArrayResult;
      tmp = obj;
      const tmp2Result = e;
    }
  }
  let tmp9 = tmp;
  if (tmp.script) {
    tmp9 = tmp;
    if (tmp.region) {
      obj = { lang: null, script: null, region: null, variants: null };
      ({ lang: obj4[0], script: obj4[1], region: obj4[2] } = tmp);
      obj[3] = [];
      const str2 = _mod13736.languageAlias[emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, obj)];
      tmp9 = tmp;
      if (str2) {
        obj1 = { lang: null, script: null, region: null, variants: null };
        const result1 = tmp10(13737).parseUnicodeLanguageId(str2.split(tmp10(13737).SEPARATOR));
        ({ lang: obj5[0], script: obj5[1], region: obj5[2] } = result1);
        obj1[3] = tmp.variants;
        tmp9 = obj1;
      }
    }
  }
  let tmp13 = tmp9;
  if (tmp9.region) {
    const obj2 = { lang: null, region: null, variants: null };
    ({ lang: obj6[0], region: obj6[1] } = tmp9);
    obj2[2] = [];
    const str3 = _mod13736.languageAlias[emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, obj2)];
    tmp13 = tmp9;
    if (str3) {
      const obj3 = { lang: null, script: null, region: null, variants: null };
      const result2 = tmp14(13737).parseUnicodeLanguageId(str3.split(tmp14(13737).SEPARATOR));
      obj3[0] = result2.lang;
      obj3[1] = tmp9.script || result2.script;
      obj3[2] = result2.region;
      obj3[3] = tmp9.variants;
      tmp13 = obj3;
    }
  }
  const obj4 = { lang: tmp13.lang, variants: [] };
  const str4 = _mod13736.languageAlias[emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, obj4)];
  let tmp19 = tmp13;
  if (str4) {
    const obj5 = { lang: null, script: null, region: null, variants: null };
    const result3 = tmp17(13737).parseUnicodeLanguageId(str4.split(tmp17(13737).SEPARATOR));
    obj5[0] = result3.lang;
    obj5[1] = tmp13.script || result3.script;
    obj5[2] = tmp13.region || result3.region;
    obj5[3] = tmp13.variants;
    tmp19 = obj5;
  }
  if (tmp19.region) {
    const formatted = tmp19.region.toUpperCase();
    const str6 = tmp17(13736).territoryAlias[formatted];
    let tmp22;
    if (str6) {
      const parts = str6.split(" ");
      const first = parts[0];
      const obj6 = { lang: null, script: null, variants: null };
      ({ lang: obj10[0], script: obj10[1] } = tmp19);
      obj6[2] = [];
      const str8 = tmp17(13738).likelySubtags[tmp17(undefined, 13734).emitUnicodeLanguageId(undefined, obj6)];
      tmp22 = first;
      if (str8) {
        const region = tmp17(13737).parseUnicodeLanguageId(str8.split(tmp17(13737).SEPARATOR)).region;
        let tmp24 = region;
        if (region) {
          tmp24 = parts.indexOf(region) > -1;
        }
        tmp22 = first;
        if (tmp24) {
          tmp22 = region;
        }
      }
    }
    if (tmp22) {
      tmp19.region = tmp22;
    }
    tmp19.region = tmp19.region.toUpperCase();
    const str5 = tmp19.region;
    const str9 = tmp19.region;
  }
  if (tmp19.script) {
    const script = tmp19.script;
    const formatted1 = tmp19.script[0].toUpperCase();
    tmp19.script = formatted1 + script.slice(1).toLowerCase();
    if (tmp17(13736).scriptAlias[tmp19.script]) {
      tmp19.script = tmp17(13736).scriptAlias[tmp19.script];
    }
    const str10 = tmp19.script[0];
    const str11 = script.slice(1);
  }
  if (tmp19.variants.length) {
    for (let num7 = 0; num7 < tmp19.variants.length; num7 = num7 + 1) {
      let str12 = tmp19.variants[num7];
      let formatted2 = str12.toLowerCase();
      let tmp27 = require;
      let tmp28 = dependencyMap;
      let tmp29 = num7;
      if (_mod13736.variantAlias[formatted2]) {
        let tmp30 = tmp27(13736).variantAlias[formatted2];
        if (tmp27(13737).isUnicodeVariantSubtag(tmp30)) {
          tmp19.variants[num7] = tmp30;
        } else if (tmp27(13737).isUnicodeLanguageSubtag(tmp30)) {
          tmp19.lang = tmp30;
        }
      }
    }
    variants = tmp19.variants;
    const sorted = variants.sort();
  }
  return tmp19;
}
arg5.canonicalizeUnicodeLanguageId = canonicalizeUnicodeLanguageId;
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(lang) {
  lang.lang = canonicalizeUnicodeLanguageId(lang.lang);
  if (lang.extensions) {
    let extensions = lang.extensions;
    for (let num3 = 0; num3 < extensions.length; num3 = num3 + 1) {
      let iter = extensions[num3];
      let type = iter.type;
      let tmp2 = num3;
      if ("u" === type) {
        let keywords = iter.keywords;
        let obj = {};
        let items = [];
        for (let num5 = 0; num5 < keywords.length; num5 = num5 + 1) {
          let tmp9 = keywords[num5];
          let tmp10 = num5;
          if (!(tmp9[0] in obj)) {
            obj[tmp9[0]] = 1;
            if (tmp9[1]) {
              if ("true" !== tmp9[1]) {
                let str9 = tmp9[0];
                let items1 = [str9.toLowerCase(), ];
                let str10 = tmp9[1];
                items1[1] = str10.toLowerCase();
                let arr = items.push(items1);
              }
            }
            let str8 = tmp9[0];
            let items2 = [str8.toLowerCase()];
            arr = items.push(items2);
          }
        }
        let tmp13 = compareKV;
        iter.keywords = items.sort(compareKV);
        if (iter.attributes) {
          let attributes = iter.attributes;
          let _Object = Object;
          let keys = Object.keys(attributes.reduce((arg0, str) => {
            arg0[str.toLowerCase()] = 1;
            return arg0;
          }, {}));
          iter.attributes = keys.sort();
        }
      } else if ("t" === type) {
        if (iter.lang) {
          let tmp3 = canonicalizeUnicodeLanguageId;
          iter.lang = canonicalizeUnicodeLanguageId(iter.lang);
        }
        let fields = iter.fields;
        obj = {};
        let items3 = [];
        for (let num4 = 0; num4 < fields.length; num4 = num4 + 1) {
          let tmp4 = fields[num4];
          let tmp5 = num4;
          if (!(tmp4[0] in obj)) {
            obj[tmp4[0]] = 1;
            if (tmp4[1]) {
              if ("true" !== tmp4[1]) {
                let str6 = tmp4[0];
                let items4 = [str6.toLowerCase(), ];
                let str7 = tmp4[1];
                items4[1] = str7.toLowerCase();
                let arr1 = items3.push(items4);
              }
            }
            let str5 = tmp4[0];
            let items5 = [str5.toLowerCase()];
            let arr2 = items3.push(items5);
          }
        }
        let tmp8 = compareKV;
        iter.fields = items3.sort(compareKV);
      } else {
        let str4 = iter.value;
        iter.value = str4.toLowerCase();
      }
    }
    extensions = lang.extensions;
    const sorted = extensions.sort(compareExtension);
  }
  return lang;
};