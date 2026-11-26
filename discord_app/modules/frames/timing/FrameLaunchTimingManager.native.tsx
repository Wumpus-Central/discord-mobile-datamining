// === Module 7687: FrameLaunchTimingManager ===

// Module 7687 (FrameLaunchTimingManager)
import noopFrameLaunchTiming from "noopFrameLaunchTiming" /* 7686 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/timing/FrameLaunchTimingManager.native.tsx");

export function startLaunchTiming() {
  return noopFrameLaunchTiming.NOOP_FRAME_LAUNCH_TIMING;
}
export function getFrameLaunchTiming() {
  return null;
}
export function getFrameLaunchTimingForIframe() {
  return null;
}