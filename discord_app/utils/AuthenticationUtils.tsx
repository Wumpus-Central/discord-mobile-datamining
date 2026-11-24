// === Module 8190: AuthenticationUtils ===

// Module 8190 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1097 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/AuthenticationUtils.tsx");

export function getToken() {
  return TokenManagerAll.getToken();
}
export function isAuthenticated() {
  return null != TokenManagerAll.getToken();
}