// === Module 5670: getSystemVersion ===

// Module 5670 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4701 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};