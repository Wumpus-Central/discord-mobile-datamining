// === Module 12377: ConjureCreateErrors ===

// Module 12377 (ConjureCreateErrors)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const prototype = function ConjureCreateError(reason, failureStatus) {
  const tmp2 = new tmp("vibegrations create failed: " + reason + " [" + failureStatus + "]", " [", failureStatus, "]");
  tmp2.name = "VibegrationsCreateError";
  tmp2.reason = reason;
  tmp2.status = failureStatus;
  return tmp2;
}.prototype;
class prototype extends Error {
}
const result = size.fileFinishedImporting("modules/conjure/create/ConjureCreateErrors.tsx");

export const ConjureCreateError = prototype;
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
export const getConjureCreateErrorMessage = function getConjureCreateErrorMessage(reason) {
  let str = "unknown";
  if (reason instanceof prototype) {
    str = reason.reason;
  }
  if ("project_limit" === str) {
    const intl3 = util.intl;
    return intl3.string(_modDef3827["lh+h/p"]);
  } else if ("rate_limited" === str) {
    const intl2 = util.intl;
    return intl2.string(_modDef3827.zBENJU);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3827["9m86fn"]);
  }
};