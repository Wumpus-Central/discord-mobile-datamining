// === Module 6284: getSystemVersion ===

// Module 6284 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5167 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};