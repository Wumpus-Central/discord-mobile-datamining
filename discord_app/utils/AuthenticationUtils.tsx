import { registerAsset } from "../../_runtime/01353_registerAsset.js";
// discord_app/utils/AuthenticationUtils.tsx
const result = require("set").fileFinishedImporting("utils/AuthenticationUtils.tsx");

export const getToken = function getToken() {
  return importAll(707).getToken();
};
export const isAuthenticated = function isAuthenticated() {
  return null != importAll(707).getToken();
};
export const getArtForPath = function getArtForPath(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if (obj.test(arg0)) {
      tmp = registerAsset /* registerAsset */;
    }
    obj = /^\/developers/;
  }
  return tmp;
};