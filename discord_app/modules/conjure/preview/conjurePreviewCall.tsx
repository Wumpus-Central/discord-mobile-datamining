// === Module 11375: conjurePreviewCall ===

// Module 11375 (conjurePreviewCall)
import size from "module_2" /* 2 */;

const prototype = function PreviewFrameCallTimeout(c0, timeoutMs) {
  const tmp2 = new tmp("preview frame did not answer " + c0 + " within " + timeoutMs + "ms", " within ");
  tmp2.name = "PreviewFrameCallTimeout";
  return tmp2;
}.prototype;
class prototype extends Error {
}
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewCall.tsx");

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
export const CAPTURE_NOW_ACCEPT_TIMEOUT_MS = 8000;
export const NATIVE_CAPTURE_WAIT_MS = 3000;
export const CAPTURE_NOW_RETRY_MS = 400;
export const INSPECT_TIMEOUT_MS = 1500;
export const INSPECT_ANSWER_TIMEOUT_MS = 5500;