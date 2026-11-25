// === Module 7656: FrameLaunchTimingManager ===

// Module 7656 (FrameLaunchTimingManager)
import noopFrameLaunchTiming from "noopFrameLaunchTiming" /* 7655 */;
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