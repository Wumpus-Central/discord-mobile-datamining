// === Module 11796: FileTypeFiltering ===

// Module 11796 (FileTypeFiltering)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5714 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, set;

const f109242 = (item) => item.startsWith(".");
const f109243 = (arr) => arr.slice(1);
const f109246 = (item) => {
  closure_0 = item;
  return closure_0.some((item) => {
    const formatted = closure_0.toLowerCase();
    return formatted.endsWith("." + item);
  });
};
const f109247 = (item) => {
  const hasItem = closure_1_6.includes(item) || closure_1_7.includes(item);
  return hasItem;
};
function fileTypesFormattedStringHelper(arr, stateFromStores) {
  if (null != arr) {
    if (0 !== arr.length) {
      const _Intl = Intl;
      const self = this;
      const self2 = this;
      const listFormat = new Intl.ListFormat(stateFromStores, { type: "disjunction" });
      const items = [];
      if (arr.includes("image")) {
        const push = items.push;
        const intl = intl4.intl;
        arr = push(intl.string(intl4.t["0r2WwT"]));
      }
      if (arr.includes("video")) {
        const push2 = items.push;
        const intl2 = intl4.intl;
        push2(intl2.string(intl4.t["al+5qH"]));
      }
      if (arr.includes("audio")) {
        const push3 = items.push;
        const intl3 = intl4.intl;
        push3(intl3.string(intl4.t.Kzll3E));
      }
      const push4 = items.push;
      const found = arr.filter((item) => item.startsWith("."));
      const items1 = [];
      HermesBuiltin.arraySpread(items1, found.sort(), 0);
      HermesBuiltin.apply(push4, items1, items);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  let locale;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === arr) {
    let tmp8;
    if (cResult[3] === stateFromStores) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = fileTypesFormattedStringHelper(arr, stateFromStores);
  cResult[2] = arr;
  cResult[3] = stateFromStores;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let closure_0;
  let locale;
  _require = arg0;
  const items = [LocaleStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [arg0, stateFromStores];
  return react.useMemo(() => fileTypesFormattedStringHelper(closure_0, stateFromStores), items1);
});
let closure_12 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  let allowedExtensions;
  let tmp26;
  let types;
  let obj = allowedExtensions(576);
  const cResult = obj.c(14);
  if (cResult[0] !== arr) {
    if (null != arr) {
      let items3;
      if (0 !== arr.length) {
        const found = arr.filter(f109242);
        const mapped = found.map(f109243);
        if (arr.includes("image")) {
          const push = mapped.push;
          const items = [];
          HermesBuiltin.arraySpread(items, closure_6, 0);
          HermesBuiltin.apply(push, items, mapped);
        }
        if (arr.includes("video")) {
          const push2 = mapped.push;
          const items1 = [];
          HermesBuiltin.arraySpread(items1, closure_7, 0);
          HermesBuiltin.apply(push2, items1, mapped);
        }
        if (arr.includes("audio")) {
          const push3 = mapped.push;
          const items2 = [];
          HermesBuiltin.arraySpread(items2, closure_8, 0);
          HermesBuiltin.apply(push3, items2, mapped);
        }
        items3 = (function getExtensionsForOutputs(mapped) {
          const obj = closure_1_0(types[3]);
          const tmp = obj.isIOS() ? closure_1_9 : closure_1_10;
          set = new Set(mapped);
          const entries = Object.entries(tmp);
          const tmp3 = entries[Symbol.iterator]();
          while (tmp3 !== undefined) {
            let tmp6 = closure_1_3(tmp4, 2);
            let tmp7 = tmp6[1];
            let tmp8 = tmp7;
            if (set.has(tmp6[0])) {
              for (const item10043 of tmp8) {
                let addResult = set.add(item10043);
                continue;
              }
            } else {
              for (const item10035 of tmp8) {
                let deleteResult = set.delete(item10035);
                continue;
              }
            }
            continue;
          }
          return Array.from(set);
        })(mapped);
      }
      cResult[0] = arr;
      cResult[1] = items3;
      allowedExtensions = items3;
    }
    items3 = [];
  } else {
    allowedExtensions = cResult[1];
  }
  const tmp25 = closure_12(arr);
  importDefault = tmp25;
  if (cResult[2] !== allowedExtensions) {
    const fn = function s(arr) {
      let closure_0 = arr;
      const everyResult = 0 === arr.length || arr.every(f109246);
      return everyResult;
    };
    cResult[2] = allowedExtensions;
    cResult[3] = fn;
    tmp26 = fn;
  } else {
    tmp26 = cResult[3];
  }
  if (cResult[4] !== tmp25) {
    class F {
      constructor() {
        let intl;
        let intl2;
        let obj2;
        const obj = { title: intl.string(intl4.t.azO1Pe), body: intl2.formatToPlainString(intl4.t["5U9LSo"], obj2) };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = intl4.intl;
        intl2 = intl4.intl;
        obj2 = { types };
        show(obj);
      }
    }
    cResult[4] = tmp25;
    cResult[5] = F;
  } else {
    class F {
      constructor() {
        let intl;
        let intl2;
        let obj2;
        const obj = { title: intl.string(intl4.t.azO1Pe), body: intl2.formatToPlainString(intl4.t["5U9LSo"], obj2) };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = intl4.intl;
        intl2 = intl4.intl;
        obj2 = { types };
        show(obj);
      }
    }
  }
  if (cResult[6] !== allowedExtensions) {
    class F {
      constructor() {
        let intl;
        let intl2;
        let obj2;
        const obj = { title: intl.string(intl4.t.azO1Pe), body: intl2.formatToPlainString(intl4.t["5U9LSo"], obj2) };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = intl4.intl;
        intl2 = intl4.intl;
        obj2 = { types };
        show(obj);
      }
    }
    cResult[6] = allowedExtensions;
    cResult[7] = 0 === allowedExtensions.length || allowedExtensions.some(f109247);
    const tmp29 = 0 === allowedExtensions.length || allowedExtensions.some(f109247);
  } else {
    class F {
      constructor() {
        let intl;
        let intl2;
        let obj2;
        const obj = { title: intl.string(intl4.t.azO1Pe), body: intl2.formatToPlainString(intl4.t["5U9LSo"], obj2) };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = intl4.intl;
        intl2 = intl4.intl;
        obj2 = { types };
        show(obj);
      }
    }
  }
  if (cResult[8] === allowedExtensions) {
    class F {
      constructor() {
        let intl;
        let intl2;
        let obj2;
        const obj = { title: intl.string(intl4.t.azO1Pe), body: intl2.formatToPlainString(intl4.t["5U9LSo"], obj2) };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = intl4.intl;
        intl2 = intl4.intl;
        obj2 = { types };
        show(obj);
      }
    }
  }
  let obj2 = { allowedExtensions, typesFormattedString: tmp25, validateFilenames: tmp26, showInvalidFileTypeAlert: F, mediaFilesAllowed: tmp28 };
  cResult[8] = allowedExtensions;
  cResult[9] = tmp28;
  cResult[10] = F;
  cResult[11] = tmp25;
  cResult[12] = tmp26;
  cResult[13] = obj2;
}) : ((arg0) => {
  let closure_0 = arg0;
  let items = [arg0];
  const memo = react.useMemo(() => {
    if (null != closure_0) {
      if (0 !== closure_0.length) {
        const found = closure_0.filter(f109242);
        const mapped = found.map(f109243);
        if (closure_0.includes("image")) {
          const push = mapped.push;
          const items = [];
          let tmp3 = items;
          HermesBuiltin.arraySpread(items, closure_6, 0);
          let tmp6 = items;
          let tmp7 = mapped;
          HermesBuiltin.apply(push, items, mapped);
        }
        if (closure_0.includes("video")) {
          const push2 = mapped.push;
          const items1 = [];
          let tmp10 = items1;
          HermesBuiltin.arraySpread(items1, closure_7, 0);
          let tmp12 = push2;
          let tmp13 = items1;
          HermesBuiltin.apply(push2, items1, mapped);
        }
        if (closure_0.includes("audio")) {
          const push3 = mapped.push;
          const items2 = [];
          HermesBuiltin.arraySpread(items2, closure_8, 0);
          HermesBuiltin.apply(push3, items2, mapped);
        }
        (function getExtensionsForOutputs(mapped) {
          const obj = closure_1_0(types[3]);
          const tmp = obj.isIOS() ? closure_1_9 : closure_1_10;
          set = new Set(mapped);
          const entries = Object.entries(tmp);
          const tmp3 = entries[Symbol.iterator]();
          while (tmp3 !== undefined) {
            let tmp6 = closure_1_3(tmp4, 2);
            let tmp7 = tmp6[1];
            let tmp8 = tmp7;
            if (set.has(tmp6[0])) {
              for (const item10043 of tmp8) {
                let addResult = set.add(item10043);
                continue;
              }
            } else {
              for (const item10035 of tmp8) {
                let deleteResult = set.delete(item10035);
                continue;
              }
            }
            continue;
          }
          return Array.from(set);
        })(mapped);
      }
      return [];
    }
  }, items);
  const tmp2 = closure_12(arg0);
  const types = tmp2;
  let items1 = [memo];
  let items2 = [tmp2];
  const callback = react.useCallback((arr) => {
    closure_0 = memo;
    const everyResult = 0 === memo.length || arr.every(f109246);
    return everyResult;
  }, items1);
  const items3 = [memo];
  const callback1 = react.useCallback(() => {
    let intl;
    let intl2;
    let obj2;
    const obj = { title: intl.string(intl4.t.azO1Pe), body: intl2.formatToPlainString(intl4.t["5U9LSo"], obj2) };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = intl4.intl;
    intl2 = intl4.intl;
    obj2 = { types };
    show(obj);
  }, items2);
  let obj = {
    allowedExtensions: memo,
    typesFormattedString: tmp2,
    validateFilenames: callback,
    showInvalidFileTypeAlert: callback1,
    mediaFilesAllowed: react.useMemo(() => {
      const tmp = 0 === memo.length || memo.some(f109247);
      return tmp;
    }, items3)
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/interactions/FileTypeFiltering.tsx");

export const useFileTypesFormattedString = tmp2;
export const getFileTypeFiltering = function getFileTypeFiltering(fileTypes) {
  if (null != fileTypes) {
    let items3;
    if (0 !== fileTypes.length) {
      const found = fileTypes.filter(f109242);
      const mapped = found.map(f109243);
      if (fileTypes.includes("image")) {
        const push = mapped.push;
        const items = [];
        HermesBuiltin.arraySpread(items, closure_6, 0);
        HermesBuiltin.apply(push, items, mapped);
      }
      if (fileTypes.includes("video")) {
        const push2 = mapped.push;
        const items1 = [];
        HermesBuiltin.arraySpread(items1, closure_7, 0);
        HermesBuiltin.apply(push2, items1, mapped);
      }
      if (fileTypes.includes("audio")) {
        const push3 = mapped.push;
        const items2 = [];
        HermesBuiltin.arraySpread(items2, closure_8, 0);
        HermesBuiltin.apply(push3, items2, mapped);
      }
      items3 = (function getExtensionsForOutputs(mapped) {
        const obj = closure_1_0(types[3]);
        const tmp = obj.isIOS() ? closure_1_9 : closure_1_10;
        set = new Set(mapped);
        const entries = Object.entries(tmp);
        const tmp3 = entries[Symbol.iterator]();
        while (tmp3 !== undefined) {
          let tmp6 = closure_1_3(tmp4, 2);
          let tmp7 = tmp6[1];
          let tmp8 = tmp7;
          if (set.has(tmp6[0])) {
            for (const item10043 of tmp8) {
              let addResult = set.add(item10043);
              continue;
            }
          } else {
            for (const item10035 of tmp8) {
              let deleteResult = set.delete(item10035);
              continue;
            }
          }
          continue;
        }
        return Array.from(set);
      })(mapped);
    }
    const tmp25 = fileTypesFormattedStringHelper(fileTypes, LocaleStore.locale);
    const types = tmp25;
    let obj = {
      allowedExtensions: items3,
      typesFormattedString: tmp25,
      validateFilenames(items) {
          let closure_0 = items3;
          const everyResult = 0 === items3.length || items.every(f109246);
          return everyResult;
        },
      showInvalidFileTypeAlert() {
          let intl;
          let intl2;
          let obj2;
          const obj = { title: intl.string(intl4.t.azO1Pe), body: intl2.formatToPlainString(intl4.t["5U9LSo"], obj2) };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl = intl4.intl;
          intl2 = intl4.intl;
          obj2 = { types };
          show(obj);
        },
      mediaFilesAllowed: 0 === items3.length || items3.some(f109247)
    };
    0 === items3.length || items3.some(f109247);
    return obj;
  }
  items3 = [];
};
export const useFileTypeFiltering = tmp3;