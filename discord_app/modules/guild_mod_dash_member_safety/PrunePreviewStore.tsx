// discord_app/modules/guild_mod_dash_member_safety/PrunePreviewStore.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";

let c1 = 3600000;
let module_560 = fn(560);
module_560 = module_560.create((arg0) => {
  closure_0 = arg0;
  return {
    entries: {},
    setPreview(arg0, arg1, arg2, count, isFinished) {
      const items = [...arg2];
      const sorted = items.sort();
      closure_2 = "" + arg0 + ":" + arg1 + ":" + sorted.join(",");
      count((arg0) => {
        let entries = {};
        const merged = Object.assign(arg0.entries);
        entries = {};
        const timestamp = Date.now();
        entries = Object.entries(entries);
        while (tmp4 !== undefined) {
          let tmp7 = count(tmp5, 2);
          [tmp8, tmp9] = tmp7;
          if (timestamp - tmp9.cachedAt < closure_2_1) {
            entries[tmp8] = tmp10;
          }
          continue;
        }
        let tmp16 = null == tmp15;
        if (!tmp16) {
          tmp16 = tmp15.count <= count && !tmp15.isFinished;
          const tmp18 = tmp15.count <= count && !tmp15.isFinished;
        }
        if (tmp16) {
          const obj = { count, isFinished, cachedAt: null };
          const _Date = Date;
          obj.cachedAt = Date.now();
          entries[closure_2] = obj;
        }
        return { entries };
      });
    },
    clear() {
      closure_0({ entries: {} });
    },
  };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/PrunePreviewStore.tsx");

export const CACHE_TTL_MS = 3600000;
export const getPrunePreviewKey = function getPrunePreviewKey(arg0, arg1, arg2) {
  const items = [...arg2];
  const sorted = items.sort();
  return "" + arg0 + ":" + arg1 + ":" + sorted.join(",");
};
export const usePrunePreviewStore = module_560;
export const setPrunePreview = function setPrunePreview(arg0, arg1, arg2, arg3, arg4) {
  const state = module_560.getState();
  state.setPreview(arg0, arg1, arg2, arg3, arg4);
};
export const clearAllPrunePreviews = function clearAllPrunePreviews() {
  const state = module_560.getState();
  state.clear();
};
export const usePrunePreview = function usePrunePreview(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  module_560 = arg2;
  let tmp = module_560((arg0) => {
    const items = [...closure_2];
    const sorted = items.sort();
    const tmp = arg0.entries["" + closure_0 + ":" + closure_1 + ":" + sorted.join(sorted, ",")];
    let tmp2 = null;
    if (null != tmp) {
      const _Date = Date;
      tmp2 = null;
      if (Date.now() - tmp.cachedAt < c1) {
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
};
export const getPrunePreview = function getPrunePreview(arg0, arg1, arg2) {
  const items = [];
  const state = module_560.getState();
  HermesBuiltin.arraySpread(arg2, 0);
  const sorted = items.sort();
  const tmp3 = state.entries["" + arg0 + ":" + arg1 + ":" + sorted.join(sorted, ",")];
  let count = null;
  if (null != tmp3) {
    const _Date = Date;
    count = null;
    if (Date.now() - tmp3.cachedAt < c1) {
      count = tmp3.count;
    }
  }
  return count;
};
