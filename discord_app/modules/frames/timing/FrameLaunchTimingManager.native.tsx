// discord_app/modules/frames/timing/FrameLaunchTimingManager.native.tsx
import noopFrameLaunchTiming from "noopFrameLaunchTiming.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
