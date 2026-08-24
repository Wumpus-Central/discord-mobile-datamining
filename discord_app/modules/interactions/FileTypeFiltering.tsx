// discord_app/modules/interactions/FileTypeFiltering.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00019_noop.js";
import closure_5 from "../user_settings/LocaleStore.tsx";

require = arg1;
function fileTypesFormattedStringHelper(arr, locale) {
  if (null != arr) {
    if (0 !== arr.length) {
      const _Intl = Intl;
      const listFormat = new Intl.ListFormat(locale, { type: "disjunction" });
      const items = [];
      if (arr.includes("image")) {
        const intl = getSystemLocale.intl;
        items.push(intl.string(getSystemLocale.t["0r2WwT"]));
      }
      if (arr.includes("video")) {
        const intl2 = getSystemLocale.intl;
        items.push(intl2.string(getSystemLocale.t["al+5qH"]));
      }
      if (arr.includes("audio")) {
        const intl3 = getSystemLocale.intl;
        items.push(intl3.string(getSystemLocale.t.Kzll3E));
      }
      const push = items.push;
      const found = arr.filter((str) => str.startsWith("."));
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
const result = require("set").fileFinishedImporting("modules/interactions/FileTypeFiltering.tsx");

export const useFileTypesFormattedString = function useFileTypesFormattedString(fileTypes) {
  const _require = fileTypes;
  const items = [closure_5];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => locale.locale);
  const items1 = [fileTypes, stateFromStores];
  return React.useMemo(() => closure_1_11(closure_0, stateFromStores), items1);
};
export const getFileTypeFiltering = function getFileTypeFiltering(fileTypes) {
  if (null != fileTypes) {
    if (0 !== fileTypes.length) {
      const found = fileTypes.filter((str) => str.startsWith("."));
      const mapped = found.map((arr) => arr.slice(1));
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
        everyResult = arr.every((arg0) => {
          closure_0 = arg0;
          return closure_0.some((arg0) => {
            const formatted = closure_0.toLowerCase();
            return formatted.endsWith("." + arg0);
          });
        });
      }
      return everyResult;
    };
    obj[3] = function showInvalidFileTypeAlert() {
      let obj = callback(closure_1_2[6]);
      obj = { title: null, body: null };
      const intl = items3(closure_1_2[4]).intl;
      obj[0] = intl.string(items3(closure_1_2[4]).t.azO1Pe);
      const intl2 = items3(closure_1_2[4]).intl;
      obj = { types: callback };
      obj[1] = intl2.formatToPlainString(items3(closure_1_2[4]).t["5U9LSo"], obj);
      obj.show(obj);
    };
    obj[4] = 0 === items3.length || items3.some((arg0) => {
      let hasItem = closure_6.includes(arg0);
      if (!hasItem) {
        hasItem = closure_7.includes(arg0);
      }
      return hasItem;
    });
    return obj;
  }
  items3 = [];
};
export const useFileTypeFiltering = function useFileTypeFiltering(fileTypes) {
  let _require = fileTypes;
  let items = [fileTypes];
  const memo = React.useMemo(() => {
    if (null != closure_0) {
      if (0 !== arr.length) {
        const found = arr.filter((str) => str.startsWith("."));
        const mapped = found.map((arr) => arr.slice(1));
        if (arr.includes("image")) {
          const push = mapped.push;
          const items = [];
          HermesBuiltin.arraySpread(closure_1_6, 0);
          HermesBuiltin.apply(items, mapped);
        }
        if (arr.includes("video")) {
          const push2 = mapped.push;
          const items1 = [];
          HermesBuiltin.arraySpread(closure_1_7, 0);
          HermesBuiltin.apply(items1, mapped);
        }
        if (arr.includes("audio")) {
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
  let stateFromStores = memo;
  _require = fileTypes;
  stateFromStores = undefined;
  let obj = _require(memo1[5]);
  let items1 = [closure_5];
  stateFromStores = obj.useStateFromStores(items1, () => locale.locale);
  let items2 = [fileTypes, stateFromStores];
  memo1 = React.useMemo(() => closure_1_11(closure_0, stateFromStores), items2);
  const items3 = [memo];
  const items4 = [memo1];
  const callback = React.useCallback((arr) => {
    closure_0 = stateFromStores;
    let everyResult = 0 === stateFromStores.length;
    if (!everyResult) {
      everyResult = arr.every((arg0) => {
        closure_0 = arg0;
        return closure_0.some((arg0) => {
          const formatted = closure_0.toLowerCase();
          return formatted.endsWith("." + arg0);
        });
      });
    }
    return everyResult;
  }, items3);
  const items5 = [memo];
  const callback1 = React.useCallback(() => {
    let obj = stateFromStores(memo1[6]);
    obj = { title: null, body: null };
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
    mediaFilesAllowed: React.useMemo(() => 0 === stateFromStores.length || stateFromStores.some((arg0) => {
      let hasItem = closure_6.includes(arg0);
      if (!hasItem) {
        hasItem = closure_7.includes(arg0);
      }
      return hasItem;
    }), items5)
  };
  return obj;
};