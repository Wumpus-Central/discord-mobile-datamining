// === Module 7254: AuthenticationUtils ===

// Module 7254 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1100 */;
import _mod7255 from "module_7255" /* 7255 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/AuthenticationUtils.tsx");

export const getToken = function getToken() {
  return TokenManagerAll.getToken();
};
export const isAuthenticated = function isAuthenticated() {
  return null != TokenManagerAll.getToken();
};
export const getArtForPath = function getArtForPath(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if (obj.test(arg0)) {
      tmp = _mod7255;
    }
    obj = /^\/developers/;
  }
  return tmp;
};