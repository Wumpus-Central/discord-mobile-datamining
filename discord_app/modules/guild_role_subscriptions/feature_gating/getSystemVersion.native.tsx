// === Module 5394: getSystemVersion ===

// Module 5394 (getSystemVersion)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4424 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DCDDeviceManager.getSystemVersion();
};