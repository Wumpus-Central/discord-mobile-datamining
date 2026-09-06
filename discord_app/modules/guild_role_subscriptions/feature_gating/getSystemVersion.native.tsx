// discord_app/modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx",
);

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
