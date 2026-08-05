// discord_app/modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return require(4265) /* DCDDeviceManager */.getSystemVersion();
};