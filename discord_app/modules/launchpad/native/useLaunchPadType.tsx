// === Module 11285: useLaunchPadType ===

// Module 11285 (useLaunchPadType)
import set from "set" /* 2 */;
import create from "create" /* 1305 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG" /* 11284 */;

const LaunchPadTypes = LAUNCH_PAD_SPRING_CONFIG.LaunchPadTypes;
const result = set.fileFinishedImporting("modules/launchpad/native/useLaunchPadType.tsx");

export default function useLaunchPadType() {
  const LaunchPadModeSetting = explicitContentFromProto.LaunchPadModeSetting;
  const setting = LaunchPadModeSetting.useSetting();
  if (create.LaunchPadMode.LAUNCH_PAD_DISABLED === setting) {
    return LaunchPadTypes.DISABLED;
  } else if (tmp(1305).LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN === setting) {
    return LaunchPadTypes.GESTURE_FULL;
  } else if (tmp(1305).LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE === setting) {
    return LaunchPadTypes.GESTURE_EDGE;
  } else if (tmp(1305).LaunchPadMode.LAUNCH_PAD_PULL_TAB === setting) {
    return LaunchPadTypes.PULL_TAB;
  }
};