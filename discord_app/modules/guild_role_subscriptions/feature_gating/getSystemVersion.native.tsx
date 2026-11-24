// === Module 6796: getSystemVersion ===

// Module 6796 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4874 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
}