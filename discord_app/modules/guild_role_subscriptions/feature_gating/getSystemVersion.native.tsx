// discord_app/modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4354 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DCDDeviceManager.getSystemVersion();
};