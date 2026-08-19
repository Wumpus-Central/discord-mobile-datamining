// === Module 6767: getSystemVersion ===

// Module 6767 (getSystemVersion)
import obj132 from "obj132" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4354 */;

const result = obj132.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DCDDeviceManager.getSystemVersion();
};