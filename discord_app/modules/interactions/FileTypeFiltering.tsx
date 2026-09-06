// discord_app/modules/interactions/FileTypeFiltering.tsx
import util from "../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";

require = fn;
function fileTypesFormattedStringHelper(arr, locale) {
  if (null != arr) {
    if (0 !== arr.length) {
      const _Intl = Intl;
      const listFormat = new Intl.ListFormat(locale, { type: "disjunction" });
      const items = [];
      if (arr.includes("image")) {
        const intl = util.intl;
        items.push(intl.string(util.t["0r2WwT"]));
      }
      if (arr.includes("video")) {
        const intl2 = util.intl;
        items.push(intl2.string(util.t["al+5qH"]));
      }
      if (arr.includes("audio")) {
        const intl3 = util.intl;
        items.push(intl3.string(util.t.Kzll3E));
      }
      const push = items.push;
      const found = arr.filter((item) => item.startsWith("."));
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/interactions/FileTypeFiltering.tsx");

export const useFileTypesFormattedString = function useFileTypesFormattedString(fileTypes) {
  _require = fileTypes;
  const items = [LocaleStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => locale.locale);
  const items1 = [fileTypes, stateFromStores];
  return noop.useMemo(() => fileTypesFormattedStringHelper(closure_0, memo), items1);
};
export const getFileTypeFiltering = function getFileTypeFiltering(fileTypes) {
  if (null != fileTypes) {
    if (0 !== fileTypes.length) {
      const found = fileTypes.filter((item) => item.startsWith("."));
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
        const obj = fileTypes(memo1[3]);
        new Set(mapped);
        const entries = Object.entries(fileTypes(memo1[3]).isIOS() ? closure_1_9 : closure_1_10);
        entries[Symbol.iterator]();
      })(mapped);
    }
    const tmp24 = fileTypesFormattedStringHelper(fileTypes, LocaleStore.locale);
    const types = tmp24;
    let obj = {
      allowedExtensions: items3,
      typesFormattedString: tmp24,
      validateFilenames(arr) {
        closure_0 = items3;
        let everyResult = 0 === items3.length;
        if (!everyResult) {
          everyResult = arr.every((item) =>
            item.some((item) => {
              const formatted = item.toLowerCase();
              return formatted.endsWith("." + item);
            }),
          );
        }
        return everyResult;
      },
      showInvalidFileTypeAlert() {
        let obj = { title: null, body: null };
        const intl = util.intl;
        obj.title = intl.string(util.t.azO1Pe);
        const intl2 = util.intl;
        obj = { types };
        obj.body = intl2.formatToPlainString(util.t["5U9LSo"], obj);
        obj.show(obj);
      },
      mediaFilesAllowed:
        0 === items3.length ||
        items3.some((item) => {
          let hasItem = closure_1_6.includes(item);
          if (!hasItem) {
            hasItem = closure_1_7.includes(item);
          }
          return hasItem;
        }),
    };
    return obj;
  }
  items3 = [];
};
export const useFileTypeFiltering = function useFileTypeFiltering(fileTypes) {
  _require = fileTypes;
  let items = [fileTypes];
  const memo = noop.useMemo(() => {
    if (null != closure_0) {
      if (0 !== arr.length) {
        const found = arr.filter((item) => item.startsWith("."));
        const mapped = found.map((arr) => arr.slice(1));
        if (arr.includes("image")) {
          const push = mapped.push;
          const items = [];
          HermesBuiltin.arraySpread(closure_6, 0);
          HermesBuiltin.apply(items, mapped);
        }
        if (arr.includes("video")) {
          const push2 = mapped.push;
          const items1 = [];
          HermesBuiltin.arraySpread(closure_7, 0);
          HermesBuiltin.apply(items1, mapped);
        }
        if (arr.includes("audio")) {
          const push3 = mapped.push;
          const items2 = [];
          HermesBuiltin.arraySpread(closure_8, 0);
          HermesBuiltin.apply(items2, mapped);
        }
        (function getExtensionsForOutputs(mapped) {
          const obj = fileTypes(memo1[3]);
          new Set(mapped);
          const entries = Object.entries(fileTypes(memo1[3]).isIOS() ? closure_1_9 : closure_1_10);
          entries[Symbol.iterator]();
        })(mapped);
      }
      return [];
    }
  }, items);
  closure_129_0 = fileTypes;
  let obj = require("initialize");
  let items1 = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items1, () => locale.locale);
  closure_129_1 = stateFromStores;
  let items2 = [fileTypes, stateFromStores];
  memo1 = noop.useMemo(() => fileTypesFormattedStringHelper(closure_0, memo), items2);
  const items3 = [memo];
  const items4 = [memo1];
  const callback = noop.useCallback((arr) => {
    closure_0 = memo;
    let everyResult = 0 === memo.length;
    if (!everyResult) {
      everyResult = arr.every((item) =>
        item.some((item) => {
          const formatted = item.toLowerCase();
          return formatted.endsWith("." + item);
        }),
      );
    }
    return everyResult;
  }, items3);
  const items5 = [memo];
  const callback1 = noop.useCallback(() => {
    let obj = { title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.azO1Pe);
    const intl2 = util.intl;
    obj = { types: memo1 };
    obj.body = intl2.formatToPlainString(util.t["5U9LSo"], obj);
    obj.show(obj);
  }, items4);
  obj = {
    allowedExtensions: memo,
    typesFormattedString: memo1,
    validateFilenames: callback,
    showInvalidFileTypeAlert: callback1,
    mediaFilesAllowed: noop.useMemo(
      () =>
        0 === memo.length ||
        memo.some((item) => {
          let hasItem = closure_1_6.includes(item);
          if (!hasItem) {
            hasItem = closure_1_7.includes(item);
          }
          return hasItem;
        }),
      items5,
    ),
  };
  return obj;
};
