// === Module 11102: RevenueError ===

// Module 11102 (RevenueError)
import size from "module_2" /* 2 */;

class RevenueError extends Error {
  constructor(message) {
    let extraSentryInformation;
    ({ message, extraSentryInformation } = message);
    if (extraSentryInformation === undefined) {
      extraSentryInformation = null;
    }
    let str = message.errorHandlingBehavior;
    if (str === undefined) {
      str = "close-and-alert";
    }
    let flag = message.skipReportingToSentry;
    if (flag === undefined) {
      flag = false;
    }
    const tmp = new RevenueError(message, message, this, new.target, extraSentryInformation);
    tmp.name = new.target.name;
    tmp.extraSentryInformation = extraSentryInformation;
    tmp.errorHandlingBehavior = str;
    tmp.skipReportingToSentry = flag;
    return tmp;
  }
}
const result = size.fileFinishedImporting("modules/revenue_components/errors/RevenueError.tsx");

export { RevenueError };