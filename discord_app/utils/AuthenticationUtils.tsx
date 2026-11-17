// === Module 8784: AuthenticationUtils ===

// Module 8784 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1098 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/AuthenticationUtils.tsx");

export function getToken() {
  return TokenManagerAll.getToken();
}
export function isAuthenticated() {
  return null != TokenManagerAll.getToken();
}