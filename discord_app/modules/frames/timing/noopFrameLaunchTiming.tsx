// discord_app/modules/frames/timing/noopFrameLaunchTiming.tsx
import size from "../../../../_runtime/metro/00002__.js";

const frozen = Object.freeze({
  setStatus() {},
});
const frozen1 = Object.freeze({
  frameId: "",
  launchId: "",
  span(CSP, fn) {
    return fn(frozen);
  },
  event() {},
  finish() {},
});
const result = size.fileFinishedImporting("modules/frames/timing/noopFrameLaunchTiming.tsx");

export const NOOP_SPAN = frozen;
export const NOOP_FRAME_LAUNCH_TIMING = frozen1;
