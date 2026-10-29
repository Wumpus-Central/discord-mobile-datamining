// discord_app/utils/AuthenticationUtils.tsx
import TokenManagerAll from "../../discord_common/js/shared/lib/TokenManager.tsx";
import _mod7799 from "../../_runtime/metro/07799__.js";
import size from "../../_runtime/metro/00002__.js";

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
