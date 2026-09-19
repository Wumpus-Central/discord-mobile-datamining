// _runtime/14540_compareKV.js
import e from "01161_e.js";
import emitUnicodeLanguageId from "14539_emitUnicodeLanguageId.js";
import languageAlias from "14541_languageAlias.js";
import _mod14542 from "metro/14542__.js";
import likelySubtags from "14543_likelySubtags.js";

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
    const variants1 = lang.variants;
    let num3 = 0;
    tmp = lang;
    if (0 < variants1.length) {
      const obj = { lang: lang.lang, variants: null };
      const items = [variants1[num3]];
      obj.variants = items;
      const str = languageAlias.languageAlias[emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, obj)];
      while (!str) {
        num3 = num3 + 1;
        tmp = lang;
      }
      const obj2 = { lang: null, script: null, region: null, variants: null };
      const result = _mod14542.parseUnicodeLanguageId(str.split(_mod14542.SEPARATOR));
      obj2.lang = result.lang;
      obj2.script = lang.script || result.script;
      obj2.region = lang.region || result.region;
      const variants2 = lang.variants;
      const variants3 = result.variants;
      const __spreadArrayResult = e.__spreadArray([], variants2, true);
      for (let num4 = 0; num4 < variants3.length; num4 = num4 + 1) {
        let tmp6 = variants3[num4];
        if (variants2.indexOf(tmp6) < 0) {
          let arr = __spreadArrayResult.push(tmp6);
        }
      }
      obj2.variants = __spreadArrayResult;
      tmp = obj2;
      const tmp2Result = e;
    }
  }
  let tmp9 = tmp;
  if (tmp.script) {
    tmp9 = tmp;
    if (tmp.region) {
      const obj3 = { lang: null, script: null, region: null, variants: null };
      ({ lang: obj4.lang, script: obj4.script, region: obj4.region } = tmp);
      obj3.variants = [];
      const str2 = languageAlias.languageAlias[emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, obj3)];
      tmp9 = tmp;
      if (str2) {
        const obj7 = { lang: null, script: null, region: null, variants: null };
        const result1 = _mod14542.parseUnicodeLanguageId(str2.split(_mod14542.SEPARATOR));
        ({ lang: obj5.lang, script: obj5.script, region: obj5.region } = result1);
        obj7.variants = tmp.variants;
        tmp9 = obj7;
      }
    }
  }
  let tmp13 = tmp9;
  if (tmp9.region) {
    const obj8 = { lang: null, region: null, variants: null };
    ({ lang: obj6.lang, region: obj6.region } = tmp9);
    obj8.variants = [];
    const str3 = languageAlias.languageAlias[emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, obj8)];
    tmp13 = tmp9;
    if (str3) {
      const obj9 = { lang: null, script: null, region: null, variants: null };
      const result2 = _mod14542.parseUnicodeLanguageId(str3.split(_mod14542.SEPARATOR));
      obj9.lang = result2.lang;
      obj9.script = tmp9.script || result2.script;
      obj9.region = result2.region;
      obj9.variants = tmp9.variants;
      tmp13 = obj9;
    }
  }
  const str4 =
    languageAlias.languageAlias[
      emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, { lang: tmp13.lang, variants: [] })
    ];
  let tmp19 = tmp13;
  if (str4) {
    const obj19 = { lang: null, script: null, region: null, variants: null };
    const result3 = _mod14542.parseUnicodeLanguageId(str4.split(_mod14542.SEPARATOR));
    obj19.lang = result3.lang;
    obj19.script = tmp13.script || result3.script;
    obj19.region = tmp13.region || result3.region;
    obj19.variants = tmp13.variants;
    tmp19 = obj19;
  }
  if (tmp19.region) {
    const formatted = tmp19.region.toUpperCase();
    const str6 = languageAlias.territoryAlias[formatted];
    let tmp22;
    if (str6) {
      const parts = str6.split(" ");
      const first = parts[0];
      const obj20 = { lang: null, script: null, variants: null };
      ({ lang: obj10.lang, script: obj10.script } = tmp19);
      obj20.variants = [];
      const str8 = likelySubtags.likelySubtags[emitUnicodeLanguageId.emitUnicodeLanguageId(undefined, obj20)];
      tmp22 = first;
      if (str8) {
        const region = _mod14542.parseUnicodeLanguageId(str8.split(_mod14542.SEPARATOR)).region;
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
  }
  if (tmp19.script) {
    const script = tmp19.script;
    const formatted1 = tmp19.script[0].toUpperCase();
    tmp19.script = formatted1 + script.slice(1).toLowerCase();
    if (languageAlias.scriptAlias[tmp19.script]) {
      tmp19.script = languageAlias.scriptAlias[tmp19.script];
    }
    const str11 = script.slice(1);
  }
  if (tmp19.variants.length) {
    for (let num7 = 0; num7 < tmp19.variants.length; num7 = num7 + 1) {
      let str12 = tmp19.variants[num7];
      let formatted2 = str12.toLowerCase();
      if (languageAlias.variantAlias[formatted2]) {
        let tmp30 = languageAlias.variantAlias[formatted2];
        if (_mod14542.isUnicodeVariantSubtag(tmp30)) {
          tmp19.variants[num7] = tmp30;
        } else if (_mod14542.isUnicodeLanguageSubtag(tmp30)) {
          tmp19.lang = tmp30;
        }
      }
    }
    const variants = tmp19.variants;
    const sorted = variants.sort();
  }
  return tmp19;
}

export { canonicalizeUnicodeLanguageId };
export const CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(lang) {
  lang.lang = canonicalizeUnicodeLanguageId(lang.lang);
  if (lang.extensions) {
    const extensions1 = lang.extensions;
    for (let num3 = 0; num3 < extensions1.length; num3 = num3 + 1) {
      let iter = extensions1[num3];
      let type = iter.type;
      if ("u" === type) {
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
                let items1 = [str9.toLowerCase()];
                let str10 = tmp9[1];
                items1[1] = str10.toLowerCase();
                let arr = items.push(items1);
              }
            }
            let str8 = tmp9[0];
            let items2 = [str8.toLowerCase()];
            let arr2 = items.push(items2);
          }
        }
        iter.keywords = items.sort(compareKV);
        if (iter.attributes) {
          let attributes = iter.attributes;
          let _Object = Object;
          let keys = Object.keys(
            attributes.reduce((acc, item) => {
              acc[item.toLowerCase()] = 1;
              return acc;
            }, {}),
          );
          iter.attributes = keys.sort();
        }
      } else if ("t" === type) {
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
                let items4 = [str6.toLowerCase()];
                let str7 = tmp4[1];
                items4[1] = str7.toLowerCase();
                let arr3 = items3.push(items4);
              }
            }
            let str5 = tmp4[0];
            let items5 = [str5.toLowerCase()];
            let arr4 = items3.push(items5);
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
