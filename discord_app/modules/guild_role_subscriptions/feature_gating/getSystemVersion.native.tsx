// === Module 5679: getSystemVersion ===

// Module 5679 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4866 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  const obj = DeviceUtils;
  return obj.getSystemVersion();
};