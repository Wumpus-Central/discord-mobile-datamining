// discord_app/modules/conjure/preview/conjurePreviewClaims.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

function forget(get, arg1) {
  value = get.get(arg1);
  if (null != value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    get.delete(arg1);
  }
}
let map = new Map();
const map1 = new Map();
const map2 = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewClaims.tsx");

export const awaitConjurePreviewClaim = function awaitConjurePreviewClaim(projectId, id) {
  map = id;
  value = map.get(id);
  if (null != value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    value.resolve(null);
  }
  value4 = map1.get(id);
  if (null != value4) {
    const value5 = map1.get(id);
    if (null != value5) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(value5.timer);
      map1.delete(id);
    }
    const obj = { projectId };
    projectId = map2;
    map = id;
    const value6 = map2.get(id);
    if (null != value6) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(value6.timer);
      map2.delete(id);
    }
    const _setTimeout = setTimeout;
    const obj4 = {};
    const timerId = setTimeout(() => set.delete(closure_1), 10000);
    const merged = Object.assign(obj);
    obj4.timer = timerId;
    let result = map2.set(id, obj4);
    const obj5 = { uploadToken: value4.uploadToken };
    let resolved = Promise.resolve(obj5);
  } else {
    resolved = new Promise((resolve) => {
      projectId = resolve;
      const result = id.set(id, {
        resolve,
        timer: setTimeout(() => {
          map.delete(closure_1);
          closure_0(null);
        }, 5000),
        projectId,
      });
    });
  }
  return resolved;
};
export const resolveConjurePreviewClaim = function resolveConjurePreviewClaim(projectId, id, upload_token) {
  value = map.get(id);
  if (null != value) {
    map.delete(id);
    const _clearTimeout2 = clearTimeout;
    clearTimeout(value.timer);
    const obj2 = { projectId };
    closure_1 = id;
    value3 = map2.get(id);
    if (null != value3) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(value3.timer);
      map2.delete(id);
    }
    const _setTimeout2 = setTimeout;
    const obj4 = {};
    const timerId = setTimeout(() => set.delete(closure_1), 10000);
    const merged = Object.assign(obj2);
    obj4.timer = timerId;
    const result = map2.set(id, obj4);
    const obj5 = { uploadToken: upload_token };
    value.resolve(obj5);
  } else if (!map2.has(id)) {
    const obj7 = { uploadToken: upload_token, projectId };
    closure_1 = id;
    value4 = map1.get(id);
    if (null != value4) {
      const _clearTimeout = clearTimeout;
      clearTimeout(value4.timer);
      map1.delete(id);
    }
    const _setTimeout = setTimeout;
    const obj8 = {};
    const timerId1 = setTimeout(() => set.delete(closure_1), 10000);
    const merged1 = Object.assign(obj7);
    obj8.timer = timerId1;
    const result1 = map1.set(id, obj8);
  }
};
export const clearConjurePreviewClaims = function clearConjurePreviewClaims(projectId) {
  const items = [...map];
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    if (tmp6.projectId === projectId) {
      let deleteResult = map.delete(tmp5);
      let _clearTimeout = clearTimeout;
      let clearTimeoutResult = clearTimeout(tmp6.timer);
      let resolveResult = tmp6.resolve(null);
    }
    continue;
  }
  const items1 = [map1, map2];
  for (const item10043 of items1) {
    let items2 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(item10043, 0);
    for (const item10054 of items2) {
      let tmp20 = _slicedToArray(item10054, 2);
      let first = tmp20[0];
      if (tmp20[1].projectId === arg0) {
        let tmp25 = forget(item10043, first);
      }
      continue;
    }
    continue;
  }
  tmp = items[Symbol.iterator]();
};
