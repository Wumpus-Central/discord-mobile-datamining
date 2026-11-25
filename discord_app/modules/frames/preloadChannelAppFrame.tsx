// discord_app/modules/frames/preloadChannelAppFrame.tsx
import frameLaunchSteps from "timing/frameLaunchSteps.tsx";
import FrameLaunchTimingTypes from "timing/FrameLaunchTimingTypes.tsx";
import FrameLaunchTimingManager from "timing/FrameLaunchTimingManager.native.tsx";
import getChannelAppLaunchTargetDefault from "getChannelAppLaunchTarget.tsx";
import FramesStore from "FramesStore.tsx";

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
        frameLaunchTiming = tmp6Result.startLaunchTiming(
          FrameLaunchTimingTypes.LaunchTrigger.SIDEBAR_MOUSEDOWN,
          frameId,
          applicationId,
          surface,
        );
      }
      const obj3 = { type: FrameLaunchTimingTypes.FrameLaunchCloseType.REUSED };
      frameLaunchTiming.finish(obj3);
    } else {
      frameLaunchSteps.prefetchFrameLaunch(
        FrameLaunchTimingTypes.LaunchTrigger.SIDEBAR_MOUSEDOWN,
        applicationId,
        surface,
      );
    }
  }
}
