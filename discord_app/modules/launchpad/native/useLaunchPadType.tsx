// === Module 11126: useLaunchPadType ===

// Module 11126 (useLaunchPadType)
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettings from "UserSettings" /* 2028 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11125 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadType.tsx");

export default () => {
  const LaunchPadModeSetting = UserSettings.LaunchPadModeSetting;
  const setting = LaunchPadModeSetting.useSetting();
  if (preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_DISABLED === setting) {
    return LaunchPadTypes.DISABLED;
  } else if (preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN === setting) {
    return LaunchPadTypes.GESTURE_FULL;
  } else if (preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE === setting) {
    return LaunchPadTypes.GESTURE_EDGE;
  } else if (preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_PULL_TAB === setting) {
    return LaunchPadTypes.PULL_TAB;
  }
};