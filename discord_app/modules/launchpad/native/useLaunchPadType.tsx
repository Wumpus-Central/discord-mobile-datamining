// === Module 10666: useLaunchPadType ===

// Module 10666 (useLaunchPadType)
import obj132 from "obj132" /* 2 */;
import create from "create" /* 1306 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG" /* 10665 */;

const LaunchPadTypes = LAUNCH_PAD_SPRING_CONFIG.LaunchPadTypes;
const result = obj132.fileFinishedImporting("modules/launchpad/native/useLaunchPadType.tsx");

export default function useLaunchPadType() {
  const LaunchPadModeSetting = explicitContentFromProto.LaunchPadModeSetting;
  const setting = LaunchPadModeSetting.useSetting();
  if (create.LaunchPadMode.LAUNCH_PAD_DISABLED === setting) {
    return LaunchPadTypes.DISABLED;
  } else if (create.LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN === setting) {
    return LaunchPadTypes.GESTURE_FULL;
  } else if (create.LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE === setting) {
    return LaunchPadTypes.GESTURE_EDGE;
  } else if (create.LaunchPadMode.LAUNCH_PAD_PULL_TAB === setting) {
    return LaunchPadTypes.PULL_TAB;
  }
};