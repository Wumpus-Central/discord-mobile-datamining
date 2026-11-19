// === Module 9075: resolveLocalizedProperties ===

// Module 9075 (resolveLocalizedProperties)
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
function isHeroVideoStorageLike(storage) {
  if (typeof storage === "object") {
    if (null != storage) {
      const heroArtLocalizedVideoLinksDarkTheme = storage.heroArtLocalizedVideoLinksDarkTheme;
      let tmp = typeof heroArtLocalizedVideoLinksDarkTheme === "object";
      if (typeof heroArtLocalizedVideoLinksDarkTheme === "object") {
        tmp = typeof storage.heroArtLocalizedVideoLinksLightTheme === "object";
      }
      if (tmp) {
        tmp = typeof storage.heroArtVideoSubtitleLinks === "object";
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
        const _ArrayBuffer = ArrayBuffer;
        if (!ArrayBuffer.isView(arr)) {
          const _Object = Object;
          const _Object2 = Object;
          const obj = Object.create(Object.getPrototypeOf(arr));
          const _Object3 = Object;
          const entries = Object.entries(arr);
          const tmp5 = entries[Symbol.iterator]();
          while (tmp5 !== undefined) {
            let tmp10 = _slicedToArray(tmp7, 2);
            obj[tmp10[0]] = deepClone(tmp10[1]);
            continue;
          }
          return obj;
        }
      }
    }
    return arr;
  }
}
function resolveInPlace(storage, arg1) {
  if (Array.isArray(storage)) {
    const tmp30 = storage[Symbol.iterator]();
    while (tmp30 !== undefined) {
      let tmp35 = resolveInPlace(tmp32, arg1);
      continue;
    }
  } else if (typeof storage === "object") {
    if (null != storage) {
      if (isHeroVideoStorageLike(storage.storage)) {
        (function resolveHeroVideo(storage, storage, arg2) {
          closure_0 = arg2;
          let tmp2 = null != tmp;
          if (tmp2) {
            tmp2 = "" !== tmp;
          }
          if (tmp2) {
            storage.videoLink = tmp;
          }
          let tmp4 = null != tmp3;
          if (tmp4) {
            tmp4 = "" !== tmp3;
          }
          if (tmp4) {
            storage.heroArtVideoLinkLightTheme = tmp3;
          }
          const heroArtVideoSubtitleLinks = storage.heroArtVideoSubtitleLinks;
          const keys = Object.keys(heroArtVideoSubtitleLinks);
          if (keys.length > 0) {
            closure_2 = null != heroArtVideoSubtitleLinks[arg2];
            storage.heroArtVideoSubtitles = keys.map((locale) => {
              const obj = { link: heroArtVideoSubtitleLinks[locale], locale, isDefault: null };
              let tmp = locale === closure_0;
              if (!tmp) {
                let tmp2 = "en-US" === locale;
                if (tmp2) {
                  tmp2 = !closure_2;
                }
                tmp = tmp2;
              }
              obj.isDefault = tmp;
              return obj;
            });
          }
          storage.storage = undefined;
        })(storage, storage.storage, arg1);
      }
      const _Object = Object;
      const entries = Object.entries(storage);
      let tmp4 = entries[Symbol.iterator]();
      while (tmp4 !== undefined) {
        [first, tmp10] = tmp6;
        let arr = first;
        if (first.endsWith(Localized)) {
          if (isLocalizedStringLike(tmp10)) {
            let substr = arr.slice(0, -9);
            let tmp20 = tmp10.localizations[arg1];
            if (tmp20 == null) {
              let _default = null;
              if ("" !== tmp10.default) {
                _default = tmp10.default;
              }
              tmp20 = _default;
            }
            let tmp25 = null != tmp20;
            let tmp24 = tmp20;
            if (tmp25) {
              tmp25 = substr in storage;
            }
            if (tmp25) {
              storage[substr] = tmp24;
            }
            continue;
          }
        }
        let tmp16 = resolveInPlace(tmp10, arg1);
      }
    }
  }
}
const Localized = "Localized";
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/resolveLocalizedProperties.tsx");
function collectLocalizationLocales(obj, add) {
  if (Array.isArray(obj)) {
    const tmp37 = obj[Symbol.iterator]();
    while (tmp37 !== undefined) {
      let tmp42 = collectLocalizationLocales(tmp39, add);
      continue;
    }
  } else if (typeof obj === "object") {
    if (null != obj) {
      const _Object5 = Object;
      const entries = Object.entries(obj);
      const tmp46 = entries[Symbol.iterator]();
      while (tmp46 !== undefined) {
        let tmp5 = _slicedToArray(tmp2, 2);
        [obj, tmp6] = tmp5;
        if (isHeroVideoStorageLike(tmp6)) {
          let _Object2 = Object;
          let keys = Object.keys(tmp6.heroArtLocalizedVideoLinksDarkTheme);
          for (const item10050 of keys) {
            let addResult = arg1.add(item10050);
            continue;
          }
          let _Object3 = Object;
          let keys1 = Object.keys(tmp6.heroArtLocalizedVideoLinksLightTheme);
          for (const item10063 of keys1) {
            let addResult1 = arg1.add(item10063);
            continue;
          }
          let _Object4 = Object;
          let keys2 = Object.keys(tmp6.heroArtVideoSubtitleLinks);
          for (const item10076 of keys2) {
            let addResult2 = arg1.add(item10076);
            continue;
          }
        } else {
          if (obj.endsWith(Localized)) {
            if (isLocalizedStringLike(tmp6)) {
              let _Object = Object;
              let keys3 = Object.keys(tmp6.localizations);
              for (const item10037 of keys3) {
                let addResult3 = arg1.add(item10037);
                continue;
              }
            }
          }
          let tmp15 = collectLocalizationLocales(tmp6, add);
        }
        continue;
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