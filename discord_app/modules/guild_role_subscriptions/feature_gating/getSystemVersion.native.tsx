// === Module 6028: getSystemVersion ===

// Module 6028 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 5068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};