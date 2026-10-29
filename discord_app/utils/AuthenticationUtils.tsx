// === Module 7798: AuthenticationUtils ===

// Module 7798 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1110 */;
import _mod7799 from "module_7799" /* 7799 */;
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
      tmp = _mod7799;
    }
    obj = /^\/developers/;
  }
  return tmp;
}