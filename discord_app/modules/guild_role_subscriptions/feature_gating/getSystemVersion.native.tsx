// === Module 6493: getSystemVersion ===

// Module 6493 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4751 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
}