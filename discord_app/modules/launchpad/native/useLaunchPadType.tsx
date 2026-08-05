// discord_app/modules/launchpad/native/useLaunchPadType.tsx
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";

const result = require("create").fileFinishedImporting("modules/launchpad/native/useLaunchPadType.tsx");

export default function useLaunchPadType() {
  const LaunchPadModeSetting = require("../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.LaunchPadModeSetting;
  const setting = LaunchPadModeSetting.useSetting();
  if (require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.LaunchPadMode.LAUNCH_PAD_DISABLED === setting) {
    return LaunchPadTypes.DISABLED;
  } else if (tmp(1306).LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN === setting) {
    return LaunchPadTypes.GESTURE_FULL;
  } else if (tmp(1306).LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE === setting) {
    return LaunchPadTypes.GESTURE_EDGE;
  } else if (tmp(1306).LaunchPadMode.LAUNCH_PAD_PULL_TAB === setting) {
    return LaunchPadTypes.PULL_TAB;
  }
};