// === Module 7890: AuthenticationUtils ===

// Module 7890 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1098 */;
import _mod7891 from "module_7891" /* 7891 */;
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
      tmp = _mod7891;
    }
    obj = /^\/developers/;
  }
  return tmp;
}