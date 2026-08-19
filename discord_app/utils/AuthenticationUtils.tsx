// === Module 1371: getToken ===

// Module 1371 (getToken)
import obj132 from "obj132" /* 2 */;
import setSecondaryTokenAll from "setSecondaryToken" /* 707 */;
import registerAsset from "registerAsset" /* 1372 */;

const result = obj132.fileFinishedImporting("utils/AuthenticationUtils.tsx");

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