// discord_app/modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx
import { DCDDeviceManager } from "../../../utils/native/DeviceUtils.tsx";
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DCDDeviceManager /* DCDDeviceManager */.getSystemVersion();
};