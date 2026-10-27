// === Module 10761: conjurePreviewCall ===

// Module 10761 (conjurePreviewCall)
import size from "module_2" /* 2 */;

let closure_0 = ["conjure-", "vibegrations-"];
const prototype = function PreviewFrameCallTimeout(c0, timeoutMs) {
  const tmp2 = new tmp("preview frame did not answer " + c0 + " within " + timeoutMs + "ms", " within ");
  tmp2.name = "PreviewFrameCallTimeout";
  return tmp2;
}.prototype;
class prototype extends Error {
}
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewCall.tsx");

export const previewCallTypes = function previewCallTypes(control) {
  closure_0 = control;
  const mapped = closure_0.map((item) => "" + item + closure_0);
  return { requests: mapped, results: mapped.map((item) => "" + item + "-result"), acks: mapped.map((item) => "" + item + "-ack") };
};
export const isResultEnvelope = function isResultEnvelope(parsed, acks, id) {
  if (typeof parsed === "object") {
    if (null != parsed) {
      const type = parsed.type;
      let hasItem = typeof type === "string";
      if (typeof type === "string") {
        hasItem = acks.includes(parsed.type);
      }
      if (hasItem) {
        hasItem = parsed.id === id;
      }
      return hasItem;
    }
  }
  return false;
};
export const PreviewFrameCallTimeout = prototype;
export const controlAnswerTimeoutMs = function controlAnswerTimeoutMs(timeoutMs) {
  timeoutMs = timeoutMs.timeoutMs;
  let num = 20000;
  if (typeof timeoutMs === "number") {
    const _isFinite = isFinite;
    num = 20000;
    if (isFinite(timeoutMs)) {
      num = 20000;
      if (timeoutMs > 0) {
        const _Math = Math;
        const _Math2 = Math;
        num = Math.min(Math.floor(timeoutMs), 20000);
      }
    }
  }
  return num + 4000;
};
export const PREVIEW_FRAME_WAIT_MS = 6000;
export const CONTROL_RETRY_MS = 400;
export const CONTROL_END_TIMEOUT_MS = 2000;
export const CAPTURE_NOW_TIMEOUT_MS = 15000;
export const NATIVE_CAPTURE_WAIT_MS = 3000;
export const CAPTURE_NOW_RETRY_MS = 400;
export const INSPECT_TIMEOUT_MS = 1500;
export const INSPECT_ANSWER_TIMEOUT_MS = 5500;