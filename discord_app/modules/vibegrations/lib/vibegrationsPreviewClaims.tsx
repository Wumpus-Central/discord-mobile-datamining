// === Module 16591: map ===

// Module 16591 (map)
import closure_0 from "_slicedToArray" /* 32 */;

const map = new Map();
let result = require("set").fileFinishedImporting("modules/vibegrations/lib/vibegrationsPreviewClaims.tsx");

export const awaitVibegrationsPreviewClaim = function awaitVibegrationsPreviewClaim(c0, id) {
  closure_0 = c0;
  const value = id.get(id);
  if (null != value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    value.resolve(null);
  }
  return new Promise((resolve) => {
    closure_0 = resolve;
    const result = id.set(id, {
      resolve,
      timer: setTimeout(() => {
        set.delete(closure_1_1);
        callback(null);
      }, 5000),
      projectId: closure_0
    });
  });
};
export const resolveVibegrationsPreviewClaim = function resolveVibegrationsPreviewClaim(id, upload_token) {
  let obj = map;
  const value = map.get(id);
  if (null != value) {
    obj.delete(id);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    obj = { uploadToken: null };
    obj[0] = upload_token;
    value.resolve(obj);
  }
};
export const clearVibegrationsPreviewClaims = function clearVibegrationsPreviewClaims(closure_0) {
  const items = [...map];
  while (tmp !== undefined) {
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    let obj = tmp6;
    if (tmp6.projectId === closure_0) {
      let tmp7 = map;
      let tmp8 = tmp5;
      let deleteResult = map.delete(tmp5);
      let _clearTimeout = clearTimeout;
      let tmp10 = tmp6;
      let clearTimeoutResult = clearTimeout(obj.timer);
      let resolveResult = obj.resolve(null);
    }
    continue;
  }
};