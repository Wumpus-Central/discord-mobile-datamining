// === Module 5155: getSystemVersion ===

// Module 5155 (getSystemVersion)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(4235) /* DCDDeviceManager */.getSystemVersion();
};