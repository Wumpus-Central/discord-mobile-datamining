// === Module 17037: VibegrationsMessageTime ===

// Module 17037 (VibegrationsMessageTime)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsMessageTime.tsx");

export const describeMessageTime = function describeMessageTime(at) {
  let isFiniteResult = null != at;
  if (isFiniteResult) {
    const _Number = Number;
    isFiniteResult = Number.isFinite(at);
  }
  if (isFiniteResult) {
    isFiniteResult = at > 0;
  }
  let toLocaleTimeStringResult = null;
  if (isFiniteResult) {
    const _Date = Date;
    const date = new Date(at);
    toLocaleTimeStringResult = date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  }
  return toLocaleTimeStringResult;
};