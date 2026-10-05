// discord_app/utils/AuthenticationUtils.tsx
import TokenManagerAll from "../../discord_common/js/shared/lib/TokenManager.tsx";
import AssetRegistry from "../../_runtime/07153_AssetRegistry.js";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/AuthenticationUtils.tsx");

export const getToken = function getToken() {
  const obj = TokenManagerAll;
  return obj.getToken();
};
export const isAuthenticated = function isAuthenticated() {
  const obj = TokenManagerAll;
  return null != obj.getToken();
};
export const getArtForPath = function getArtForPath(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    const obj = /^\/developers/;
    if (obj.test(arg0)) {
      tmp = AssetRegistry;
    }
  }
  return tmp;
};
