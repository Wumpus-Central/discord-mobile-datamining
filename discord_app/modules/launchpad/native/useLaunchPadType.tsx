// === Module 11465: useLaunchPadType ===

// Module 11465 (useLaunchPadType)
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import UserSettings from "UserSettings" /* 1935 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11464 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadType.tsx");

export default function useLaunchPadType() {
  const LaunchPadModeSetting = UserSettings.LaunchPadModeSetting;
  const setting = LaunchPadModeSetting.useSetting();
  if (preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_DISABLED === setting) {
    return LaunchPadTypes.DISABLED;
  } else if (tmp(1187).LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN === setting) {
    return LaunchPadTypes.GESTURE_FULL;
  } else if (tmp(1187).LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE === setting) {
    return LaunchPadTypes.GESTURE_EDGE;
  } else if (tmp(1187).LaunchPadMode.LAUNCH_PAD_PULL_TAB === setting) {
    return LaunchPadTypes.PULL_TAB;
  }
};