// === Module 11443: RevenueError ===

// Module 11443 (RevenueError)
import size from "module_2" /* 2 */;

const prototype = function RevenueError(errorHandlingBehavior) {
  ({ message, extraSentryInformation } = errorHandlingBehavior);
  if (extraSentryInformation === undefined) {
    extraSentryInformation = null;
  }
  let str = errorHandlingBehavior.errorHandlingBehavior;
  if (str === undefined) {
    str = "close-and-alert";
  }
  let flag = errorHandlingBehavior.skipReportingToSentry;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = new prototype(message, message, new.target, new.target, extraSentryInformation);
  tmp.name = new.target.name;
  tmp.extraSentryInformation = extraSentryInformation;
  tmp.errorHandlingBehavior = str;
  tmp.skipReportingToSentry = flag;
  return tmp;
}.prototype;
class prototype extends Error {
}
const result = size.fileFinishedImporting("modules/revenue_components/errors/RevenueError.tsx");

export const RevenueError = prototype;