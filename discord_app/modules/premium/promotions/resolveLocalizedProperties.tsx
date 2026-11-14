// === Module 9672: resolveLocalizedProperties ===

// Module 9672 (resolveLocalizedProperties)
import _slicedToArray from "module_32" /* 32 */;

function isLocalizedStringLike(localizations) {
  if (typeof localizations === "object") {
    if (null != localizations) {
      let tmp = typeof _default === "string";
      if (typeof localizations.default === "string") {
        tmp = typeof localizations.localizations === "object";
      }
      return tmp;
    }
  }
  return false;
}
function deepClone(arr) {
  if (Array.isArray(arr)) {
    return arr.map((item) => deepClone(item));
  } else {
    if (null != arr) {
      if (typeof arr === "object") {
        const _Object2 = Object;
        const prototypeOf = Object.getPrototypeOf(arr);
        const _Object3 = Object;
        if (prototypeOf !== Object.prototype) {
          if (null !== prototypeOf) {
            return arr;
          }
        }
        const obj = {};
        const _Object = Object;
        const entries = Object.entries(arr);
        const tmp4 = entries[Symbol.iterator]();
        while (tmp4 !== undefined) {
          let tmp9 = _slicedToArray(tmp6, 2);
          obj[tmp9[0]] = deepClone(tmp9[1]);
          continue;
        }
        return obj;
      }
    }
    return arr;
  }
}
function resolveInPlace(obj, arg1) {
  if (Array.isArray(obj)) {
    const tmp26 = obj[Symbol.iterator]();
    while (tmp26 !== undefined) {
      let tmp31 = resolveInPlace(tmp28, arg1);
      continue;
    }
  } else if (typeof obj === "object") {
    if (null != obj) {
      const _Object = Object;
      const entries = Object.entries(obj);
      const tmp35 = entries[Symbol.iterator]();
      while (tmp35 !== undefined) {
        [first, tmp6] = tmp2;
        let arr = first;
        if (first.endsWith(Localized)) {
          if (isLocalizedStringLike(tmp6)) {
            let substr = arr.slice(0, -9);
            let tmp16 = tmp6.localizations[arg1];
            if (tmp16 == null) {
              let _default = null;
              if ("" !== tmp6.default) {
                _default = tmp6.default;
              }
              tmp16 = _default;
            }
            let tmp21 = null != tmp16;
            let tmp20 = tmp16;
            if (tmp21) {
              tmp21 = substr in obj;
            }
            if (tmp21) {
              obj[substr] = tmp20;
            }
            continue;
          }
        }
        let tmp12 = resolveInPlace(tmp6, arg1);
      }
    }
  }
}
const Localized = "Localized";
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/resolveLocalizedProperties.tsx");
function collectLocalizationLocales(obj, add) {
  if (Array.isArray(obj)) {
    const tmp19 = obj[Symbol.iterator]();
    while (tmp19 !== undefined) {
      let tmp24 = collectLocalizationLocales(tmp21, add);
      continue;
    }
  } else if (typeof obj === "object") {
    if (null != obj) {
      const _Object2 = Object;
      const entries = Object.entries(obj);
      const tmp28 = entries[Symbol.iterator]();
      while (tmp28 !== undefined) {
        let tmp5 = _slicedToArray(tmp2, 2);
        [obj, tmp6] = tmp5;
        if (obj.endsWith(Localized)) {
          if (isLocalizedStringLike(tmp6)) {
            let _Object = Object;
            let keys = Object.keys(tmp6.localizations);
            for (const item10032 of keys) {
              let addResult = arg1.add(item10032);
              continue;
            }
            continue;
          }
        }
        let tmp12 = collectLocalizationLocales(tmp6, add);
      }
    }
  }
}

export function resolveLocalizedProperties(arr, arg1) {
  const tmp = deepClone(arr);
  resolveInPlace(tmp, arg1);
  return tmp;
}
export { collectLocalizationLocales };