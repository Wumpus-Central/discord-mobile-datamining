// === Module 10879: ConjureCreateErrors ===

// Module 10879 (ConjureCreateErrors)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const prototype = function ConjureCreateError(reason, failureStatus) {
  const tmp2 = new tmp("conjure create failed: " + reason + " [" + failureStatus + "]", " [", failureStatus, "]");
  tmp2.name = "ConjureCreateError";
  tmp2.reason = reason;
  tmp2.status = failureStatus;
  return tmp2;
}.prototype;
class prototype extends Error {
}
const result = size.fileFinishedImporting("modules/conjure/create/ConjureCreateErrors.tsx");

export const ConjureCreateError = prototype;
export function classifyCreateFailure(error) {
  if (typeof error === "object") {
    if (null !== error) {
      ({ status, body } = error);
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
          if (code === AbortCodes.TOO_MANY_CONJURE_PROJECTS) {
            str2 = "project_limit";
          }
        }
        return str2;
      }
    }
  }
  return "unknown";
}
export function createFailureStatus(status) {
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  let num = 0;
  if (typeof status === "number") {
    num = status;
  }
  return num;
}
export function getConjureCreateErrorMessage(reason) {
  let str = "unknown";
  if (reason instanceof prototype) {
    str = reason.reason;
  }
  if ("project_limit" === str) {
    const intl3 = util.intl;
    return intl3.string(_modDef3868["lh+h/p"]);
  } else if ("rate_limited" === str) {
    const intl2 = util.intl;
    return intl2.string(_modDef3868.zBENJU);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3868["9m86fn"]);
  }
}