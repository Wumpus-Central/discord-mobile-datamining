// === Module 12911: conjurePreviewClaims ===

// Module 12911 (conjurePreviewClaims)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let map = new Map();
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewClaims.tsx");

export const awaitConjurePreviewClaim = function awaitConjurePreviewClaim(projectId, id) {
  map = id;
  const value = map.get(id);
  if (null != value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    value.resolve(null);
  }
  const promise = new Promise((resolve) => {
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
  return promise;
};
export const resolveConjurePreviewClaim = function resolveConjurePreviewClaim(id, upload_token) {
  const value = map.get(id);
  if (null != value) {
    map.delete(id);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    const obj2 = { uploadToken: upload_token };
    value.resolve(obj2);
  }
};
export const clearConjurePreviewClaims = function clearConjurePreviewClaims(projectId) {
  let tmp5;
  let tmp6;
  const items = [...map];
  const tmp = items[Symbol.iterator]();
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
};