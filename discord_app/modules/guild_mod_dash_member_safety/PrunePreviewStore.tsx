// === Module 16528: PrunePreviewStore ===

// Module 16528 (PrunePreviewStore)
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

const require = fn;
let c3 = 3600000;
const module_570 = fn(570);
const obj4 = module_570.create((arg0) => {
  closure_0 = arg0;
  return {
    entries: {},
    setPreview(arg0, arg1, arg2, count, isFinished) {
      const items = [...arg2];
      const sorted = items.sort();
      closure_2 = "" + arg0 + ":" + arg1 + ":" + sorted.join(",");
      count((arg0) => {
        const merged = Object.assign(arg0.entries);
        const obj2 = {};
        const timestamp = Date.now();
        const entries = Object.entries({});
        while (tmp4 !== undefined) {
          let tmp7 = args(tmp5, 2);
          [tmp8, tmp9] = tmp7;
          if (timestamp - tmp9.cachedAt < closure_2_3) {
            obj2[tmp8] = tmp10;
          }
          continue;
        }
        let tmp16 = null == tmp15;
        if (!tmp16) {
          tmp16 = tmp15.count <= count && !tmp15.isFinished;
          const tmp18 = tmp15.count <= count && !tmp15.isFinished;
        }
        if (tmp16) {
          const obj3 = { count, isFinished, cachedAt: null };
          const _Date = Date;
          obj3.cachedAt = Date.now();
          obj2[closure_2] = obj3;
        }
        return { entries: obj2 };
      });
    },
    clear() {
      closure_0({ entries: {} });
    }
  };
});
const ReactCompilerGating = fn(558);
function getPrunePreviewKey(arg0, arg1, arg2) {
  const items = [...arg2];
  const sorted = items.sort();
  return "" + arg0 + ":" + arg1 + ":" + sorted.join(",");
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/PrunePreviewStore.tsx");

export const CACHE_TTL_MS = 3600000;
export { getPrunePreviewKey };
export const usePrunePreviewStore = obj4;
export const setPrunePreview = function setPrunePreview(arg0, arg1, arg2, arg3, arg4) {
  state = obj4.getState();
  state.setPreview(arg0, arg1, arg2, arg3, arg4);
};
export const clearAllPrunePreviews = function clearAllPrunePreviews() {
  state = obj4.getState();
  state.clear();
};
export const usePrunePreview = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  _require = arg0;
  dependencyMap = arg1;
  args = arg2;
  const cResult = require("c").c(7);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      if (cResult[2] === arg2) {
        let tmp2 = cResult[3];
      }
      const tmp4 = obj4(tmp2);
      let count;
      if (tmp4 != null) {
        count = tmp4.count;
      }
      let isFinished;
      if (tmp4 != null) {
        isFinished = tmp4.isFinished;
      }
      if (cResult[4] === count) {
        if (cResult[5] === tmp8) {
          let tmp9 = cResult[6];
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
  const obj = require("c");
}) : ((arg0, arg1, arg2) => {
  closure_0 = arg0;
  closure_1 = arg1;
  args = arg2;
  let tmp = obj4((arg0) => {
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
  const obj = { count, isLoading: null };
  let isFinished;
  if (tmp != null) {
    isFinished = tmp.isFinished;
  }
  obj.isLoading = false === isFinished;
  return obj;
});
export const getPrunePreview = function getPrunePreview(arg0, arg1, arg2) {
  const items = [];
  state = obj4.getState();
  HermesBuiltin.arraySpread(arg2, 0);
  const sorted = items.sort();
  const tmp3 = state.entries["" + arg0 + ":" + arg1 + ":" + sorted.join(sorted, ",")];
  let count = null;
  if (null != tmp3) {
    const _Date = Date;
    count = null;
    if (Date.now() - tmp3.cachedAt < c3) {
      count = tmp3.count;
    }
  }
  return count;
};