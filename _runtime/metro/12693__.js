// _runtime/metro/12693__.js
import _mod12695 from "12695__.js";
import 12694__ from "12694__.js";
import size_mod from "12696__.js";
import size_mod from "12697__.js";

function patchDictionary(descriptors, descriptors1) {
  const obj = {};
  for (const key10004 in arg0) {
    let syntax = arg0[key10004].syntax;
    if (!syntax) {
      syntax = arg0[key10004];
    }
    obj[key10004] = syntax;
    continue;
  }
  for (const key10011 in arg1) {
    let syntax3 = arg1[key10011].syntax;
    if (key10011 in arg0) {
      if (syntax3) {
        if (re0.test(arg1[key10011].syntax)) {
          let str2 = arg1[key10011].syntax;
          let text = `${obj[key10011]} `;
          let syntax2 = `${obj[key10011]} ${str2.trim()}`;
        } else {
          syntax2 = arg1[key10011].syntax;
        }
        obj[key10011] = syntax2;
        continue;
      } else {
        delete tmp[tmp2];
        continue;
      }
      continue;
    } else {
      if (!syntax3) {
        continue;
      } else {
        let str = arg1[key10011].syntax;
        obj[key10011] = str.replace(re0, "");
        continue;
      }
      continue;
    }
    continue;
  }
  return obj;
}
const re0 = /^\s*\|\s*/;
let obj = { types: null, atrules: null, properties: null };
obj.types = patchDictionary(module_12694, _mod12695.syntaxes);
let size = size_mod;
const obj2 = Object.create(null);
for (const key10022 in _module1) {
  let tmp24 = size[key10022];
  let tmp7 = null;
  if (tmp24.descriptors) {
    let _Object = Object;
    let obj3 = Object.create(null);
    tmp7 = obj3;
    let keys = Object.keys();
    if (keys !== undefined) {
      tmp7 = obj3;
      let tmp9 = keys[tmp2];
      while (tmp9 !== undefined) {
        obj3[tmp9] = tmp24.descriptors[tmp9].syntax;
        continue;
      }
    }
  }
  let str = tmp24.syntax;
  let substr = key10022.substr(1);
  let str2 = str.trim();
  let str3 = str2.match(/^@\S+\s+([^;\{]*)/)[1];
  let trimmed = str3.trim();
  if (!trimmed) {
    trimmed = null;
  }
  let obj4 = { prelude: trimmed, descriptors: tmp7 };
  obj2[substr] = obj4;
  continue;
}
const atrules = _mod12695.atrules;
const obj5 = {};
for (const key10049 in obj2) {
  let descriptors1 = atrules[key10049];
  if (descriptors1) {
    descriptors1 = atrules[key10049].descriptors;
  }
  if (!descriptors1) {
    descriptors1 = null;
  }
  if (key10049 in atrules) {
    if ("prelude" in atrules[key10049]) {
      let obj6 = { prelude: atrules[key10049].prelude, descriptors: null };
      if (obj2[key10049].descriptors) {
        if (!descriptors1) {
          descriptors1 = {};
        }
        let patchDictionaryResult = patchDictionary(obj2[key10049].descriptors, descriptors1);
      } else {
        patchDictionaryResult = descriptors1;
        if (descriptors1) {
          let obj7 = {};
          patchDictionaryResult = obj7;
          let keys1 = Object.keys();
          if (keys1 !== undefined) {
            patchDictionaryResult = obj7;
            let tmp16 = keys1[tmp];
            while (tmp16 !== undefined) {
              obj7[tmp16] = descriptors1[tmp16].syntax;
              continue;
            }
          }
        }
      }
      obj6.descriptors = patchDictionaryResult;
      obj5[key10049] = obj6;
      continue;
    }
  }
  let prelude = obj2[key10049].prelude;
  if (!prelude) {
    prelude = null;
  }
}
for (const key10070 in atrules) {
  let call = globalThis.hasOwnProperty.call;
  if (typeof call === "unknown") {
    let hasOwnPropertyResult = hasOwnProperty(key10070);
  } else {
    hasOwnPropertyResult = call(obj2, key10070);
  }
  if (hasOwnPropertyResult) {
    continue;
  } else {
    let prelude1 = atrules[key10070].prelude;
    if (!prelude1) {
      prelude1 = null;
    }
    let obj8 = { prelude: prelude1, descriptors: null };
    let descriptors = atrules[key10070].descriptors;
    if (descriptors) {
      let descriptors2 = atrules[key10070].descriptors;
      let obj16 = {};
      descriptors = obj16;
      let keys2 = Object.keys();
      if (keys2 !== undefined) {
        descriptors = obj16;
        let tmp21 = keys2[tmp];
        while (tmp21 !== undefined) {
          obj16[tmp21] = descriptors2[tmp21].syntax;
          continue;
        }
      }
    }
    obj8.descriptors = descriptors;
    obj5[key10070] = obj8;
    continue;
  }
  continue;
}
obj.atrules = obj5;
let size = size_mod;
obj.properties = patchDictionary(size, _mod12695.properties);

export default obj;