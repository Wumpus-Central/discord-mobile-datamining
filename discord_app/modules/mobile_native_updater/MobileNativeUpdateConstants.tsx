// === Module 4175: UPDATE_CHECK_INTERVAL ===

// Module 4175 (UPDATE_CHECK_INTERVAL)
import importDefaultResult from "t";
import getConstants from "getConstants";
import getConstants from "getConstants";
import durationResult from "module_6";

let tmp3 = null;
if (undefined !== process.env.INTERNAL_UPDATE_URL) {
  const _process = process;
  tmp3 = null;
  if ("" !== process.env.INTERNAL_UPDATE_URL) {
    if (obj2.isIOS()) {
      const _process2 = process;
      let toURLSafeResult = require("isDiscordProxiedAssetUrl").toURLSafe(process.env.INTERNAL_UPDATE_URL);
      const importDefaultResult1 = require("isDiscordProxiedAssetUrl");
    } else {
      toURLSafeResult = null;
      const obj3 = require("set");
    }
    tmp3 = toURLSafeResult;
    obj2 = require("set");
  }
}
getConstants = getConstants.getConstants();
let Build;
if (getConstants != null) {
  Build = getConstants.Build;
}
const parsed = parseInt(Build);
let tmp8 = null;
if (!Number.isNaN(parsed)) {
  tmp8 = null;
  if (0 !== parsed) {
    tmp8 = null;
    if (123456 !== parsed) {
      tmp8 = null;
      if (1234567890 !== parsed) {
        tmp8 = parsed;
      }
    }
  }
}
getConstants = getConstants.getConstants();
let Version;
if (getConstants != null) {
  Version = getConstants.Version;
}
if (Version == null) {
  Version = null;
}
let tmp11 = null;
if (null !== tmp3) {
  tmp11 = null;
  if (null !== tmp8) {
    tmp11 = null;
    if (null !== Version) {
      const obj = { url: null, currentBuild: null, currentVersion: null };
      obj[0] = tmp3;
      obj[1] = tmp8;
      obj[2] = Version;
      tmp11 = obj;
    }
  }
}
const result = require("isDiscordProxiedAssetUrl").fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateConstants.tsx");

export const UPDATE_CHECK_INTERVAL = durationResult;
export const UPDATE_CONFIG = tmp11;