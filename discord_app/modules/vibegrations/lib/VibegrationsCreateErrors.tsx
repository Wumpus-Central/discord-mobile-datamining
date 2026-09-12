// === Module 16696: VibegrationsCreateErrors ===

// Module 16696 (VibegrationsCreateErrors)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import _modDef3590 from "module_3590" /* 3590 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const prototype = function VibegrationsCreateError(reason, failureStatus) {
  tmp = new tmp("vibegrations create failed: " + reason + " [" + failureStatus + "]", " [", failureStatus, "]");
  tmp.name = "VibegrationsCreateError";
  tmp.reason = reason;
  tmp.status = failureStatus;
  return tmp;
}.prototype;
class prototype extends Error {
}
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsCreateErrors.tsx");

export const VibegrationsCreateError = prototype;
export const classifyCreateFailure = function classifyCreateFailure(obj) {
  if (typeof obj === "object") {
    if (null !== obj) {
      ({ status, body } = obj);
      if (typeof status !== "number") {
        return "unknown";
      } else if (429 === status) {
        return "rate_limited";
      } else {
        if (body != null) {
          const code = body.code;
        }
        let str2 = "unknown";
        if (409 === status) {
          str2 = "unknown";
          if (code === AbortCodes.TOO_MANY_VIBEGRATIONS_PROJECTS) {
            str2 = "project_limit";
          }
        }
        return str2;
      }
    }
  }
  return "unknown";
};
export const createFailureStatus = function createFailureStatus(status) {
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  let num = 0;
  if (typeof status === "number") {
    num = status;
  }
  return num;
};
export const getVibegrationsCreateErrorMessage = function getVibegrationsCreateErrorMessage(reason) {
  let str = "unknown";
  if (reason instanceof prototype) {
    str = reason.reason;
  }
  if ("project_limit" === str) {
    const intl3 = util.intl;
    return intl3.string(_modDef3590.Asusmn);
  } else if ("rate_limited" === str) {
    const intl2 = util.intl;
    return intl2.string(_modDef3590.DT6qly);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3590.KKkp5Y);
  }
};