// discord_app/utils/AuthenticationUtils.tsx
import TokenManagerAll from "../../discord_common/js/shared/lib/TokenManager.tsx";
import _mod7891 from "../../_runtime/metro/07891__.js";
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
      tmp = _mod7891;
    }
    obj = /^\/developers/;
  }
  return tmp;
}
