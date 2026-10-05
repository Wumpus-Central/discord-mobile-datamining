// === Module 16532: PrunePreviewStore ===

// Module 16532 (PrunePreviewStore)
import _slicedToArray from "_slicedToArray" /* 32 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, args, dependencyMap;

let c3 = 3600000;
const usePrunePreviewStore = module_570.create((arg0) => {
  let closure_0 = arg0;
  let obj = {
    entries: {},
    setPreview(arg0, arg1, arg2, arg3, arg4) {
      closure_0 = arg3;
      let closure_1 = arg4;
      const items = [...arg2];
      const sorted = items.sort();
      let closure_2 = "" + arg0 + ":" + arg1 + ":" + sorted.join(",");
      closure_0((arg0) => {
        let tmp8;
        let tmp9;
        const obj = {};
        const merged = Object.assign(arg0.entries);
        const obj2 = {};
        const timestamp = Date.now();
        const entries = Object.entries(obj);
        const tmp4 = entries[Symbol.iterator]();
        while (tmp4 !== undefined) {
          let tmp7 = closure_2_2(tmp5, 2);
          [tmp8, tmp9] = tmp7;
          if (timestamp - tmp9.cachedAt < closure_2_3) {
            obj2[tmp8] = tmp10;
          }
          continue;
        }
        let tmp16 = null == tmp15;
        if (!tmp16) {
          tmp16 = obj2[closure_2].count <= count && !obj2[closure_2].isFinished;
        }
        if (tmp16) {
          const _Date = Date;
          obj2[closure_2] = { count, isFinished, cachedAt: Date.now() };
          const obj3 = { count, isFinished, cachedAt: Date.now() };
        }
        return { entries: obj2 };
      });
    },
    clear() {
      closure_0({ entries: {} });
    }
  };
  return obj;
});
function getPrunePreviewKey(arg0, arg1, arg2) {
  const items = [...arg2];
  const sorted = items.sort();
  return "" + arg0 + ":" + arg1 + ":" + sorted.join(",");
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  args = arg2;
  const obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp2;
      if (cResult[2] === arg2) {
        tmp2 = cResult[3];
      }
      const tmp4 = obj(tmp2);
      let count;
      if (tmp4 != null) {
        count = tmp4.count;
      }
      let isFinished;
      if (tmp4 != null) {
        isFinished = tmp4.isFinished;
      }
      if (cResult[4] === count) {
        let tmp9;
        if (cResult[5] === false === isFinished) {
          tmp9 = cResult[6];
        }
        return tmp9;
      }
      const obj2 = { count, isLoading: null };
      class P {
        constructor(arg0) {
          items = [...closure_2];
          sorted = items.sort();
          tmp = arg0.entries["" + closure_0 + ":" + closure_1 + ":" + sorted.join(sorted, ",")];
          tmp2 = null;
          if (null != tmp) {
            _Date = Date;
            tmp3 = c3;
            tmp2 = null;
            if (Date.now() - tmp.cachedAt < c3) {
              tmp2 = tmp;
            }
          }
          return tmp2;
        }
      }
      cResult[4] = count;
      cResult[5] = false === isFinished;
      cResult[6] = obj2;
      tmp9 = obj2;
    }
  }
  class P {
    constructor(arg0) {
      items = [...closure_2];
      sorted = items.sort();
      tmp = arg0.entries["" + closure_0 + ":" + closure_1 + ":" + sorted.join(sorted, ",")];
      tmp2 = null;
      if (null != tmp) {
        _Date = Date;
        tmp3 = c3;
        tmp2 = null;
        if (Date.now() - tmp.cachedAt < c3) {
          tmp2 = tmp;
        }
      }
      return tmp2;
    }
  }
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = arg2;
  cResult[3] = P;
  tmp2 = P;
}) : ((arg0, arg1, arg2) => {
  let isFinished;
  let obj;
  let closure_0 = arg0;
  let closure_1 = arg1;
  args = arg2;
  let tmp = obj((arg0) => {
    const items = [...closure_2];
    const sorted = items.sort();
    const tmp = arg0.entries["" + closure_0 + ":" + closure_1 + ":" + sorted.join(sorted, ",")];
    let tmp2 = null;
    if (null != tmp) {
      const _Date = Date;
      tmp2 = null;
      if (Date.now() - tmp.cachedAt < c3) {
        tmp2 = tmp;
      }
    }
    return tmp2;
  });
  let count;
  if (tmp != null) {
    count = tmp.count;
  }
  obj = { count, isLoading: false === isFinished };
  isFinished = undefined;
  if (tmp != null) {
    isFinished = tmp.isFinished;
  }
  return obj;
});
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/PrunePreviewStore.tsx");

export const CACHE_TTL_MS = 3600000;
export { getPrunePreviewKey };
export { usePrunePreviewStore };
export const setPrunePreview = function setPrunePreview(arg0, arg1, arg2, arg3, arg4) {
  const state = obj.getState();
  state.setPreview(arg0, arg1, arg2, arg3, arg4);
};
export const clearAllPrunePreviews = function clearAllPrunePreviews() {
  const state = obj.getState();
  state.clear();
};
export const usePrunePreview = tmp3;
export const getPrunePreview = function getPrunePreview(arg0, arg1, arg2) {
  const items = [];
  const state = obj.getState();
  HermesBuiltin.arraySpread(items, arg2, 0);
  const sorted = items.sort();
  const tmp4 = state.entries["" + arg0 + ":" + arg1 + ":" + sorted.join(sorted, ",")];
  let count = null;
  if (null != tmp4) {
    const _Date = Date;
    count = null;
    if (Date.now() - tmp4.cachedAt < c3) {
      count = tmp4.count;
    }
  }
  return count;
};