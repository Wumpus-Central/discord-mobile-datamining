// === Module 17949: preloadChannelAppFrame ===

// Module 17949 (preloadChannelAppFrame)
import frameLaunchSteps from "frameLaunchSteps" /* 7679 */;
import FrameLaunchTimingTypes from "FrameLaunchTimingTypes" /* 7685 */;
import FrameLaunchTimingManager from "FrameLaunchTimingManager" /* 7687 */;
import getChannelAppLaunchTargetDefault from "getChannelAppLaunchTarget" /* 17950 */;
import FramesStore from "FramesStore" /* 6936 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/preloadChannelAppFrame.tsx");

export function preloadChannelAppFrame(id) {
  const tmp2 = getChannelAppLaunchTargetDefault(id);
  if (null != tmp2) {
    ({ frameId, applicationId, surface } = tmp2);
    if (null != FramesStore.getFrame(frameId)) {
      let frameLaunchTiming = FrameLaunchTimingManager.getFrameLaunchTiming(frameId);
      if (null == frameLaunchTiming) {
        const tmp6Result = FrameLaunchTimingManager;
        frameLaunchTiming = tmp6Result.startLaunchTiming(FrameLaunchTimingTypes.LaunchTrigger.SIDEBAR_MOUSEDOWN, frameId, applicationId, surface);
      }
      const obj3 = { type: FrameLaunchTimingTypes.FrameLaunchCloseType.REUSED };
      frameLaunchTiming.finish(obj3);
    } else {
      frameLaunchSteps.prefetchFrameLaunch(FrameLaunchTimingTypes.LaunchTrigger.SIDEBAR_MOUSEDOWN, applicationId, surface);
    }
  }
}