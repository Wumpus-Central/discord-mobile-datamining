// === Module 7655: noopFrameLaunchTiming ===

// Module 7655 (noopFrameLaunchTiming)
import size from "module_2" /* 2 */;

const frozen = Object.freeze({
  setStatus() {

  }
});
const frozen1 = Object.freeze({
  frameId: "",
  launchId: "",
  span(CSP, fn) {
    return fn(frozen);
  },
  event() {

  },
  finish() {

  }
});
const result = size.fileFinishedImporting("modules/frames/timing/noopFrameLaunchTiming.tsx");

export const NOOP_SPAN = frozen;
export const NOOP_FRAME_LAUNCH_TIMING = frozen1;