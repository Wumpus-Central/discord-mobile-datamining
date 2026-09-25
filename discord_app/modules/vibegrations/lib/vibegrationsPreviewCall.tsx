// === Module 8742: vibegrationsPreviewCall ===

// Module 8742 (vibegrationsPreviewCall)
import size from "module_2" /* 2 */;

const prototype = function PreviewFrameCallTimeout(arg0, timeoutMs) {
  const tmp2 = new tmp("preview frame did not answer " + arg0 + " within " + timeoutMs + "ms", " within ");
  tmp2.name = "PreviewFrameCallTimeout";
  return tmp2;
}.prototype;
class prototype extends Error {
}
let c0 = 20000;
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPreviewCall.tsx");

export const previewCallTypes = function previewCallTypes(control) {
  const combined = "vibegrations-" + control;
  return { request: combined, result: "" + combined + "-result", ack: "" + combined + "-ack" };
};
export const isResultEnvelope = function isResultEnvelope(parsed, ack, id) {
  if (typeof parsed === "object") {
    if (null != parsed) {
      let tmp2 = parsed.type === ack;
      if (tmp2) {
        tmp2 = parsed.id === id;
      }
      return tmp2;
    }
  }
  return false;
};
export const PreviewFrameCallTimeout = prototype;
export const controlAnswerTimeoutMs = function controlAnswerTimeoutMs(timeoutMs) {
  timeoutMs = timeoutMs.timeoutMs;
  if (typeof timeoutMs === "number") {
    let _isFinite = isFinite;
    if (isFinite(timeoutMs)) {
      if (timeoutMs > 0) {
        let _Math = Math;
        let _Math2 = Math;
        let bound = Math.min(Math.floor(timeoutMs), c0);
      }
      return bound + 4000;
    }
  }
  const steps = timeoutMs.steps;
  bound = Math.min(5000 + steps.reduce((acc, ms) => {
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
        if (typeof ms.source !== "string") {
          let num13 = num;
          if (num == null) {
            num13 = 250;
          }
          let bound = Math.min(num13, closure_1_0);
        }
      }
      if (num == null) {
        num = 3000;
      }
      bound = Math.min(num, 10000);
    } else {
      if ("press" === ms.action) {
        let num8 = 0;
        if (typeof ms.holdMs === "number") {
          const _isFinite2 = isFinite;
          num8 = 0;
          if (isFinite(ms.holdMs)) {
            num8 = 0;
            if (ms.holdMs > 0) {
              const _Math2 = Math;
              num8 = Math.min(ms.holdMs, 5000);
            }
          }
        }
        let num11 = 1;
        if (typeof ms.repeat === "number") {
          num11 = 1;
          if (ms.repeat >= 1) {
            const _Math3 = Math;
            const _Math4 = Math;
            num11 = Math.min(Math.floor(ms.repeat), 20);
          }
        }
        let num3 = num8 * num11;
      } else if ("drag" === ms.action) {
        let num5 = 0;
        if (null != num) {
          const _Math = Math;
          num5 = Math.min(num, 5000);
        }
        num3 = num5;
      } else {
        num3 = 0;
        if ("script" === ms.action) {
          let num4 = num;
          if (num == null) {
            num4 = 10000;
          }
          num3 = Math.min(num4, closure_1_0);
        }
      }
      return acc + num3;
    }
  }, 0), c0);
};
export const PREVIEW_FRAME_WAIT_MS = 6000;
export const CONTROL_RETRY_MS = 400;
export const CAPTURE_NOW_ACCEPT_TIMEOUT_MS = 8000;
export const CAPTURE_NOW_RETRY_MS = 400;
export const INSPECT_TIMEOUT_MS = 1500;
export const INSPECT_ANSWER_TIMEOUT_MS = 5500;