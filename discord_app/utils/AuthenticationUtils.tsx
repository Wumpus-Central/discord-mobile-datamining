// === Module 7668: getToken ===

// Module 7668 (getToken)
import set from "set" /* 2 */;
import setSecondaryTokenAll from "setSecondaryToken" /* 1099 */;
import registerAsset from "registerAsset" /* 7669 */;

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