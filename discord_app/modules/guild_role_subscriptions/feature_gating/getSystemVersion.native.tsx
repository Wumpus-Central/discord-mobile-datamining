// discord_app/modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx
import set from "../../../../_runtime/00002_set.js";
import DCDDeviceManager from "../../../utils/native/DeviceUtils.tsx";

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DCDDeviceManager.getSystemVersion();
};