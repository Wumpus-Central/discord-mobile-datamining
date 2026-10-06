// === Module 12930: conjurePreviewClaims ===

// Module 12930 (conjurePreviewClaims)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let set, set2;

function forget(get, arg1) {
  const value = get.get(arg1);
  if (null != value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    get.delete(arg1);
  }
}
let map = new Map();
const map1 = new Map();
const map2 = new Map();
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewClaims.tsx");

export const awaitConjurePreviewClaim = function awaitConjurePreviewClaim(projectId, id) {
  let resolved;
  let timerId;
  map = id;
  const value = map.get(id);
  if (null != value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    value.resolve(null);
  }
  const value4 = map1.get(id);
  if (null != value4) {
    const value5 = map1.get(id);
    if (null != value5) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(value5.timer);
      map1.delete(id);
    }
    let obj = { projectId };
    projectId = map2;
    map = id;
    const value6 = map2.get(id);
    if (null != value6) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(value6.timer);
      map2.delete(id);
    }
    const _setTimeout = setTimeout;
    const obj4 = { timer: timerId };
    timerId = setTimeout(() => set.delete(closure_1), 10000);
    set = map2.set;
    const merged = Object.assign(obj);
    let result = set(id, obj4);
    const obj5 = { uploadToken: value4.uploadToken };
    resolved = Promise.resolve(obj5);
  } else {
    const self = this;
    const self2 = this;
    resolved = new Promise((resolve) => {
      projectId = resolve;
      const obj = {
        resolve,
        timer: setTimeout(() => {
          map.delete(id);
          resolve(null);
        }, 5000),
        projectId
      };
      const result = id.set(id, obj);
    });
  }
  return resolved;
};
export const resolveConjurePreviewClaim = function resolveConjurePreviewClaim(projectId, id, upload_token) {
  let timerId;
  let timerId1;
  const value = map.get(id);
  if (null != value) {
    map.delete(id);
    const _clearTimeout2 = clearTimeout;
    clearTimeout(value.timer);
    let closure_0 = map2;
    let closure_1 = id;
    const obj2 = { projectId };
    const value3 = map2.get(id);
    if (null != value3) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(value3.timer);
      map2.delete(id);
    }
    const _setTimeout2 = setTimeout;
    const obj4 = { timer: timerId };
    timerId = setTimeout(() => set.delete(closure_1), 10000);
    set2 = map2.set;
    const merged = Object.assign(obj2);
    set2(id, obj4);
    const obj5 = { uploadToken: upload_token };
    value.resolve(obj5);
  } else if (!map2.has(id)) {
    closure_0 = map1;
    closure_1 = id;
    const obj7 = { uploadToken: upload_token, projectId };
    const value4 = map1.get(id);
    if (null != value4) {
      const _clearTimeout = clearTimeout;
      clearTimeout(value4.timer);
      map1.delete(id);
    }
    const _setTimeout = setTimeout;
    const obj8 = { timer: timerId1 };
    timerId1 = setTimeout(() => set.delete(closure_1), 10000);
    set = map1.set;
    const merged1 = Object.assign(obj7);
    const result = set(id, obj8);
  }
};
export const clearConjurePreviewClaims = function clearConjurePreviewClaims(projectId) {
  let tmp6;
  let tmp7;
  const items = [...map];
  const tmp2 = items[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    if (tmp7.projectId === projectId) {
      let deleteResult = map.delete(tmp6);
      let _clearTimeout = clearTimeout;
      let clearTimeoutResult = clearTimeout(tmp7.timer);
      let resolveResult = tmp7.resolve(null);
    }
    continue;
  }
  const items1 = [map1, map2];
  for (const item10043 of items1) {
    let items2 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(items2, item10043, 0);
    for (const item10054 of items2) {
      let tmp21 = _slicedToArray(item10054, 2);
      let first = tmp21[0];
      if (tmp21[1].projectId === projectId) {
        let tmp26 = forget(item10043, first);
      }
      continue;
    }
    continue;
  }
};