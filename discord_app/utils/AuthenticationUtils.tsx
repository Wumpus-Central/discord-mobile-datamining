// === Module 8706: AuthenticationUtils ===

// Module 8706 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1098 */;
import _mod8707 from "module_8707" /* 8707 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/AuthenticationUtils.tsx");

export function getToken() {
  return TokenManagerAll.getToken();
}
export function isAuthenticated() {
  return null != TokenManagerAll.getToken();
}
export function getArtForPath(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if (obj.test(arg0)) {
      tmp = _mod8707;
    }
    obj = /^\/developers/;
  }
  return tmp;
}