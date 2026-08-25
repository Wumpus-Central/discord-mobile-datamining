// === Module 5323: getSystemVersion ===

// Module 5323 (getSystemVersion)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4359 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DCDDeviceManager.getSystemVersion();
};