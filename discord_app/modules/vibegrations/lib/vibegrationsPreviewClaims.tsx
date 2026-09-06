// discord_app/modules/vibegrations/lib/vibegrationsPreviewClaims.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPreviewClaims.tsx");

export const awaitVibegrationsPreviewClaim = function awaitVibegrationsPreviewClaim(projectId, id) {
  value = id.get(id);
  if (null != value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    value.resolve(null);
  }
  return new Promise((resolve) => {
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
};
export const resolveVibegrationsPreviewClaim = function resolveVibegrationsPreviewClaim(id, upload_token) {
  let obj = map;
  value = map.get(id);
  if (null != value) {
    obj.delete(id);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    obj = { uploadToken: upload_token };
    value.resolve(obj);
  }
};
export const clearVibegrationsPreviewClaims = function clearVibegrationsPreviewClaims(projectId) {
  const items = [...map];
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    let obj = tmp6;
    if (tmp6.projectId === projectId) {
      let deleteResult = map.delete(tmp5);
      let _clearTimeout = clearTimeout;
      let clearTimeoutResult = clearTimeout(obj.timer);
      let resolveResult = obj.resolve(null);
    }
    continue;
  }
};
