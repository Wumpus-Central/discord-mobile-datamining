// discord_app/utils/AuthenticationUtils.tsx
import set from "../../_runtime/00002_set.js";
import setSecondaryTokenAll from "../../discord_common/js/shared/lib/TokenManager.tsx";
import registerAsset from "../../_runtime/01367_registerAsset.js";

const result = set.fileFinishedImporting("utils/AuthenticationUtils.tsx");

export const getToken = function getToken() {
  return setSecondaryTokenAll.getToken();
};
export const isAuthenticated = function isAuthenticated() {
  return null != setSecondaryTokenAll.getToken();
};
export const getArtForPath = function getArtForPath(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if (obj.test(arg0)) {
      tmp = registerAsset;
    }
    obj = /^\/developers/;
  }
  return tmp;
};
