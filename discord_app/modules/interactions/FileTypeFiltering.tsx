// discord_app/modules/interactions/FileTypeFiltering.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";
import _getSystemLocale from "../user_settings/LocaleStore.tsx";

require = fn;
function fileTypesFormattedStringHelper(arr, locale) {
  if (null != arr) {
    if (0 !== arr.length) {
      const _Intl = Intl;
      const listFormat = new Intl.ListFormat(locale, { type: "disjunction" });
      const items = [];
      if (arr.includes("image")) {
        const intl = getSystemLocale.intl;
        arr = items.push(intl.string(getSystemLocale.t["0r2WwT"]));
      }
      if (arr.includes("video")) {
        const intl2 = getSystemLocale.intl;
        arr = items.push(intl2.string(getSystemLocale.t["al+5qH"]));
      }
      if (arr.includes("audio")) {
        const intl3 = getSystemLocale.intl;
        items.push(intl3.string(getSystemLocale.t.Kzll3E));
      }
      const push = items.push;
      const found = arr.filter((item, index) => item.startsWith("."));
      const items1 = [];
      HermesBuiltin.arraySpread(found.sort(), 0);
      HermesBuiltin.apply(items1, items);
      let formatResult = null;
      if (0 !== items.length) {
        formatResult = listFormat.format(items);
      }
      return formatResult;
    }
  }
  return null;
}
let closure_6 = ["png", "gif", "jpg", "jpeg", "jfif", "webp", "avif"];
let closure_7 = ["mp4", "mov", "qt", "webm"];
let closure_8 = ["mp3", "m4a", "wav", "ogg", "opus", "flac"];
let closure_9 = { jpg: ["jpeg", "jfif", "heic", "heif"], mov: ["mp4", "qt"] };
let closure_10 = { jpg: ["jpeg", "jfif"], mp4: ["mov", "qt"] };
const result = require("obj132").fileFinishedImporting("modules/interactions/FileTypeFiltering.tsx");

export const useFileTypesFormattedString = function useFileTypesFormattedString(fileTypes) {
  const _require = fileTypes;
  const items = [closure_5];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => locale.locale);
  const items1 = [fileTypes, stateFromStores];
  return React.useMemo(() => fileTypesFormattedStringHelper(closure_0, stateFromStores), items1);
};
export const getFileTypeFiltering = function getFileTypeFiltering(fileTypes) {
  if (null != fileTypes) {
    if (0 !== fileTypes.length) {
      const found = fileTypes.filter((item, index) => item.startsWith("."));
      const mapped = found.map((item, index) => item.slice(1));
      if (fileTypes.includes("image")) {
        const push = mapped.push;
        const items = [];
        HermesBuiltin.arraySpread(closure_6, 0);
        HermesBuiltin.apply(items, mapped);
      }
      if (fileTypes.includes("video")) {
        const push2 = mapped.push;
        const items1 = [];
        HermesBuiltin.arraySpread(closure_7, 0);
        HermesBuiltin.apply(items1, mapped);
      }
      if (fileTypes.includes("audio")) {
        const push3 = mapped.push;
        const items2 = [];
        HermesBuiltin.arraySpread(closure_8, 0);
        HermesBuiltin.apply(items2, mapped);
      }
      let items3 = (function getExtensionsForOutputs(mapped) {
        const obj = callback(table[3]);
        new Set(mapped);
        const entries = Object.entries(callback(table[3]).isIOS() ? closure_9 : closure_10);
        entries[Symbol.iterator]();
      })(mapped);
    }
    const tmp24 = fileTypesFormattedStringHelper(fileTypes, locale.locale);
    closure_1 = tmp24;
    let obj = { allowedExtensions: null, typesFormattedString: null, validateFilenames: null, showInvalidFileTypeAlert: null, mediaFilesAllowed: null };
    obj[0] = items3;
    obj[1] = tmp24;
    obj[2] = function validateFilenames(arr) {
      let everyResult = 0 === items3.length;
      if (!everyResult) {
        everyResult = arr.every((item, index) => {
          closure_0 = item;
          return closure_0.some((item, index) => {
            const formatted = item.toLowerCase();
            return formatted.endsWith("." + item);
          });
        });
      }
      return everyResult;
    };
    obj[3] = function showInvalidFileTypeAlert() {
      callback(dependencyMap[6]);
      let obj = { title: null, body: null };
      const intl = items3(dependencyMap[4]).intl;
      obj[0] = intl.string(items3(dependencyMap[4]).t.azO1Pe);
      const intl2 = items3(dependencyMap[4]).intl;
      obj = { types: callback };
      obj[1] = intl2.formatToPlainString(items3(dependencyMap[4]).t["5U9LSo"], obj);
      obj.show(obj);
    };
    obj[4] = 0 === items3.length || items3.some((item, index) => {
      let hasItem = closure_6.includes(item);
      if (!hasItem) {
        hasItem = closure_7.includes(item);
      }
      return hasItem;
    });
    return obj;
  }
  items3 = [];
};
export const useFileTypeFiltering = function useFileTypeFiltering(fileTypes) {
  let items = [fileTypes];
  const memo = React.useMemo(() => {
    if (null != closure_0) {
      if (0 !== closure_0.length) {
        const found = closure_0.filter((item, index) => item.startsWith("."));
        const mapped = found.map((item, index) => item.slice(1));
        if (closure_0.includes("image")) {
          const push = mapped.push;
          const items = [];
          HermesBuiltin.arraySpread(closure_1_6, 0);
          HermesBuiltin.apply(items, mapped);
        }
        if (closure_0.includes("video")) {
          const push2 = mapped.push;
          const items1 = [];
          HermesBuiltin.arraySpread(closure_1_7, 0);
          HermesBuiltin.apply(items1, mapped);
        }
        if (closure_0.includes("audio")) {
          const push3 = mapped.push;
          const items2 = [];
          HermesBuiltin.arraySpread(closure_1_8, 0);
          HermesBuiltin.apply(items2, mapped);
        }
        (function getExtensionsForOutputs(mapped) {
          const obj = callback(table[3]);
          new Set(mapped);
          const entries = Object.entries(callback(table[3]).isIOS() ? closure_9 : closure_10);
          entries[Symbol.iterator]();
        })(mapped);
      }
      return [];
    }
  }, items);
  const _require = fileTypes;
  let obj = _require(memo1[5]);
  let items1 = [closure_5];
  const stateFromStores = obj.useStateFromStores(items1, () => locale.locale);
  let items2 = [fileTypes, stateFromStores];
  memo1 = React.useMemo(() => fileTypesFormattedStringHelper(closure_0, stateFromStores), items2);
  const items3 = [memo];
  const items4 = [memo1];
  const callback = React.useCallback((arr) => {
    closure_0 = stateFromStores;
    let everyResult = 0 === stateFromStores.length;
    if (!everyResult) {
      everyResult = arr.every((item, index) => {
        closure_0 = item;
        return closure_0.some((item, index) => {
          const formatted = item.toLowerCase();
          return formatted.endsWith("." + item);
        });
      });
    }
    return everyResult;
  }, items3);
  const items5 = [memo];
  const callback1 = React.useCallback(() => {
    stateFromStores(memo1[6]);
    let obj = { title: null, body: null };
    const intl = callback(memo1[4]).intl;
    obj[0] = intl.string(callback(memo1[4]).t.azO1Pe);
    const intl2 = callback(memo1[4]).intl;
    obj = { types: memo1 };
    obj[1] = intl2.formatToPlainString(callback(memo1[4]).t["5U9LSo"], obj);
    obj.show(obj);
  }, items4);
  obj = {
    allowedExtensions: memo,
    typesFormattedString: memo1,
    validateFilenames: callback,
    showInvalidFileTypeAlert: callback1,
    mediaFilesAllowed: React.useMemo(() => 0 === stateFromStores.length || stateFromStores.some((item, index) => {
      let hasItem = closure_6.includes(item);
      if (!hasItem) {
        hasItem = closure_7.includes(item);
      }
      return hasItem;
    }), items5)
  };
  return obj;
};