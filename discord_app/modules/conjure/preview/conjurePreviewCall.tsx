// discord_app/modules/conjure/preview/conjurePreviewCall.tsx
import size from "../../../../_runtime/metro/00002__.js";

class PreviewFrameCallTimeout extends Error {
  constructor(c0, timeoutMs) {
    const tmp2 = new tmp("preview frame did not answer " + c0 + " within " + timeoutMs + "ms", " within ");
    tmp2.name = "PreviewFrameCallTimeout";
    return tmp2;
  }
}
let c0 = 20000;
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewCall.tsx");

export const previewCallTypes = function previewCallTypes(control) {
  const combined = "vibegrations-" + control;
  const obj = { request: combined, result: "" + combined + "-result", ack: "" + combined + "-ack" };
  return obj;
};
export const isResultEnvelope = function isResultEnvelope(parsed, ack, id) {
  if (typeof parsed === "object") {
    if (null != parsed) {
      return parsed.type === ack && parsed.id === id;
    }
  }
  return false;
};
export { PreviewFrameCallTimeout };
export const controlAnswerTimeoutMs = function controlAnswerTimeoutMs(timeoutMs) {
  timeoutMs = timeoutMs.timeoutMs;
  if (typeof timeoutMs === "number") {
    let _isFinite = isFinite;
    if (isFinite(timeoutMs)) {
      let bound;
      let num = 0;
      if (timeoutMs > 0) {
        let _Math = Math;
        let _Math2 = Math;
        bound = Math.min(Math.floor(timeoutMs), c0);
      }
      return bound + 4000;
    }
  }
  const steps = timeoutMs.steps;
  bound = Math.min(
    5000 +
      steps.reduce((acc, ms) => {
        let num3;
        let num = null;
        if (typeof ms.ms === "number") {
          const _isFinite = isFinite;
          num = null;
          if (isFinite(ms.ms)) {
            num = null;
            if (ms.ms > 0) {
              num = ms.ms;
            }
          }
        }
        if ("wait" === ms.action) {
          if (null == ms.target) {
            let min3Result;
            if (typeof ms.source !== "string") {
              let num13 = num;
              const _Math7 = Math;
              const min3 = Math.min;
              if (num == null) {
                num13 = 250;
              }
              min3Result = min3(num13, closure_1_0);
            }
            num3 = min3Result;
          }
          const _Math6 = Math;
          const min2 = Math.min;
          if (num == null) {
            num = 3000;
          }
          min3Result = min2(num, 10000);
        } else if ("press" === ms.action) {
          let num8 = 0;
          if (typeof ms.holdMs === "number") {
            const _isFinite2 = isFinite;
            num8 = 0;
            if (isFinite(ms.holdMs)) {
              num8 = 0;
              if (ms.holdMs > 0) {
                const _Math3 = Math;
                num8 = Math.min(ms.holdMs, 5000);
              }
            }
          }
          let num11 = 1;
          if (typeof ms.repeat === "number") {
            num11 = 1;
            if (ms.repeat >= 1) {
              const _Math4 = Math;
              const _Math5 = Math;
              num11 = Math.min(Math.floor(ms.repeat), 20);
            }
          }
          num3 = num8 * num11;
        } else if ("drag" === ms.action) {
          let num5 = 0;
          if (null != num) {
            const _Math2 = Math;
            num5 = Math.min(num, 5000);
          }
          num3 = num5;
        } else {
          num3 = 0;
          if ("script" === ms.action) {
            let num4 = num;
            const _Math = Math;
            if (num == null) {
              num4 = 10000;
            }
            num3 = min(num4, closure_1_0);
          }
        }
        return acc + num3;
      }, 0),
    c0,
  );
};
export const PREVIEW_FRAME_WAIT_MS = 6000;
export const CONTROL_RETRY_MS = 400;
export const CONTROL_END_TIMEOUT_MS = 2000;
export const CAPTURE_NOW_ACCEPT_TIMEOUT_MS = 8000;
export const CAPTURE_NOW_RETRY_MS = 400;
export const INSPECT_TIMEOUT_MS = 1500;
export const INSPECT_ANSWER_TIMEOUT_MS = 5500;
