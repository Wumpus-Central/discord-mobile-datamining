// === Module 6891: getSystemVersion ===

// Module 6891 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4969 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
}