// discord_app/modules/interactions/FileTypeFiltering.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import util from "../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";

require = fn;
function fileTypesFormattedStringHelper(arr, stateFromStores) {
  if (null != arr) {
    if (0 !== arr.length) {
      const _Intl = Intl;
      const listFormat = new Intl.ListFormat(stateFromStores, { type: "disjunction" });
      const items = [];
      if (arr.includes("image")) {
        const intl = util.intl;
        arr = items.push(intl.string(util.t["0r2WwT"]));
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
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFileTypesFormattedString(arr) {
      const cResult = c.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function s() {
          return locale.locale;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === arr) {
        if (cResult[3] === stateFromStores) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = fileTypesFormattedStringHelper(arr, stateFromStores);
      cResult[2] = arr;
      cResult[3] = stateFromStores;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const tmpResult = initialize;
    }
  : function useFileTypesFormattedString(arg0) {
      _require = arg0;
      const items = [LocaleStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => locale.locale);
      const items1 = [arg0, stateFromStores];
      return noop.useMemo(() => fileTypesFormattedStringHelper(closure_0, stateFromStores), items1);
    };
let closure_12 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interactions/FileTypeFiltering.tsx");

export const useFileTypesFormattedString = tmp2;
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
        const obj = closure_1_0(types[3]);
        new Set(mapped);
        const entries = Object.entries(closure_1_0(types[3]).isIOS() ? closure_1_9 : closure_1_10);
        entries[Symbol.iterator]();
      })(mapped);
    }
    const tmp24 = fileTypesFormattedStringHelper(fileTypes, LocaleStore.locale);
    const types = tmp24;
    const obj = {
      allowedExtensions: items3,
      typesFormattedString: tmp24,
      validateFilenames(items) {
        closure_0 = items3;
        let everyResult = 0 === items3.length;
        if (!everyResult) {
          everyResult = items.every((item) =>
            item.some((item) => {
              const formatted = item.toLowerCase();
              return formatted.endsWith("." + item);
            }),
          );
        }
        return everyResult;
      },
      showInvalidFileTypeAlert() {
        const obj2 = { title: null, body: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t.azO1Pe);
        const intl2 = util.intl;
        obj2.body = intl2.formatToPlainString(util.t["5U9LSo"], { types });
        AlertActionCreatorsDefault.show(obj2);
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
export const useFileTypeFiltering = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFileTypeFiltering(arr) {
      const cResult = allowedExtensions(576).c(14);
      if (cResult[0] !== arr) {
        if (null != arr) {
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
            let items3 = (function getExtensionsForOutputs(mapped) {
              const obj = closure_1_0(types[3]);
              new Set(mapped);
              const entries = Object.entries(closure_1_0(types[3]).isIOS() ? closure_1_9 : closure_1_10);
              entries[Symbol.iterator]();
            })(mapped);
          }
          cResult[0] = arr;
          cResult[1] = items3;
        }
        items3 = [];
      } else {
        allowedExtensions = cResult[1];
        const tmp26 = closure_12(arr);
        importDefault = tmp26;
        if (cResult[2] !== allowedExtensions) {
          const fn = function s(arr) {
            closure_0 = arr;
            let everyResult = 0 === arr.length;
            if (!everyResult) {
              everyResult = arr.every((item) =>
                item.some((item) => {
                  const formatted = item.toLowerCase();
                  return formatted.endsWith("." + item);
                }),
              );
            }
            return everyResult;
          };
          cResult[2] = allowedExtensions;
          cResult[3] = fn;
          let tmp27 = fn;
        } else {
          tmp27 = cResult[3];
        }
        if (cResult[4] !== tmp26) {
          class F {
            constructor() {
              obj = closure_1(closure_2[8]);
              obj1 = { title: null, body: null };
              intl = closure_0(closure_2[4]).intl;
              obj1.title = intl.string(closure_0(closure_2[4]).t.azO1Pe);
              intl2 = closure_0(closure_2[4]).intl;
              obj4 = { types: closure_1 };
              obj1.body = intl2.formatToPlainString(closure_0(closure_2[4]).t["5U9LSo"], obj4);
              showResult = obj.show(obj1);
              return;
            }
          }
          cResult[4] = tmp26;
          cResult[5] = F;
        } else {
          class F {
            constructor() {
              obj = closure_1(closure_2[8]);
              obj1 = { title: null, body: null };
              intl = closure_0(closure_2[4]).intl;
              obj1.title = intl.string(closure_0(closure_2[4]).t.azO1Pe);
              intl2 = closure_0(closure_2[4]).intl;
              obj4 = { types: closure_1 };
              obj1.body = intl2.formatToPlainString(closure_0(closure_2[4]).t["5U9LSo"], obj4);
              showResult = obj.show(obj1);
              return;
            }
          }
        }
        if (cResult[6] !== allowedExtensions) {
          class F {
            constructor() {
              obj = closure_1(closure_2[8]);
              obj1 = { title: null, body: null };
              intl = closure_0(closure_2[4]).intl;
              obj1.title = intl.string(closure_0(closure_2[4]).t.azO1Pe);
              intl2 = closure_0(closure_2[4]).intl;
              obj4 = { types: closure_1 };
              obj1.body = intl2.formatToPlainString(closure_0(closure_2[4]).t["5U9LSo"], obj4);
              showResult = obj.show(obj1);
              return;
            }
          }
          const tmp30 =
            0 === allowedExtensions.length ||
            allowedExtensions.some((item) => {
              let hasItem = closure_1_6.includes(item);
              if (!hasItem) {
                hasItem = closure_1_7.includes(item);
              }
              return hasItem;
            });
          cResult[6] = allowedExtensions;
          cResult[7] = tmp30;
        } else {
          class F {
            constructor() {
              obj = closure_1(closure_2[8]);
              obj1 = { title: null, body: null };
              intl = closure_0(closure_2[4]).intl;
              obj1.title = intl.string(closure_0(closure_2[4]).t.azO1Pe);
              intl2 = closure_0(closure_2[4]).intl;
              obj4 = { types: closure_1 };
              obj1.body = intl2.formatToPlainString(closure_0(closure_2[4]).t["5U9LSo"], obj4);
              showResult = obj.show(obj1);
              return;
            }
          }
        }
        if (cResult[8] === allowedExtensions) {
          class F {
            constructor() {
              obj = closure_1(closure_2[8]);
              obj1 = { title: null, body: null };
              intl = closure_0(closure_2[4]).intl;
              obj1.title = intl.string(closure_0(closure_2[4]).t.azO1Pe);
              intl2 = closure_0(closure_2[4]).intl;
              obj4 = { types: closure_1 };
              obj1.body = intl2.formatToPlainString(closure_0(closure_2[4]).t["5U9LSo"], obj4);
              showResult = obj.show(obj1);
              return;
            }
          }
        }
        let obj2 = {
          allowedExtensions,
          typesFormattedString: tmp26,
          validateFilenames: tmp27,
          showInvalidFileTypeAlert: F,
          mediaFilesAllowed: tmp29,
        };
        cResult[8] = allowedExtensions;
        cResult[9] = tmp29;
        cResult[10] = F;
        cResult[11] = tmp26;
        cResult[12] = tmp27;
        cResult[13] = obj2;
      }
      const obj = allowedExtensions(576);
    }
  : function useFileTypeFiltering(arg0) {
      closure_0 = arg0;
      let items = [arg0];
      const memo = noop.useMemo(() => {
        if (null != closure_0) {
          if (0 !== closure_0.length) {
            const found = closure_0.filter((item) => item.startsWith("."));
            const mapped = found.map((arr) => arr.slice(1));
            if (closure_0.includes("image")) {
              const push = mapped.push;
              const items = [];
              HermesBuiltin.arraySpread(closure_6, 0);
              HermesBuiltin.apply(items, mapped);
            }
            if (closure_0.includes("video")) {
              const push2 = mapped.push;
              const items1 = [];
              HermesBuiltin.arraySpread(closure_7, 0);
              HermesBuiltin.apply(items1, mapped);
            }
            if (closure_0.includes("audio")) {
              const push3 = mapped.push;
              const items2 = [];
              HermesBuiltin.arraySpread(closure_8, 0);
              HermesBuiltin.apply(items2, mapped);
            }
            (function getExtensionsForOutputs(mapped) {
              const obj = closure_1_0(types[3]);
              new Set(mapped);
              const entries = Object.entries(closure_1_0(types[3]).isIOS() ? closure_1_9 : closure_1_10);
              entries[Symbol.iterator]();
            })(mapped);
          }
          return [];
        }
      }, items);
      const tmp2 = closure_12(arg0);
      const types = tmp2;
      let items1 = [memo];
      let items2 = [tmp2];
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
      }, items1);
      const items3 = [memo];
      const callback1 = noop.useCallback(() => {
        const obj2 = { title: null, body: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t.azO1Pe);
        const intl2 = util.intl;
        obj2.body = intl2.formatToPlainString(util.t["5U9LSo"], { types });
        AlertActionCreatorsDefault.show(obj2);
      }, items2);
      return {
        allowedExtensions: memo,
        typesFormattedString: tmp2,
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
          items3,
        ),
      };
    };
