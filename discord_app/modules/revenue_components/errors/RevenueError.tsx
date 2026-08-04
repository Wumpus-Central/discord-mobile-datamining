// discord_app/modules/revenue_components/errors/RevenueError.tsx
const prototype = function RevenueError(errorHandlingBehavior) {
  let extraSentryInformation;
  let message;
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
  // ThrowIfThisInitialized (0x7c)
  tmp.name = new.target.name;
  tmp.extraSentryInformation = extraSentryInformation;
  tmp.errorHandlingBehavior = str;
  tmp.skipReportingToSentry = flag;
  return tmp;
}.prototype;
class prototype extends Error {
}
const result = require("set").fileFinishedImporting("modules/revenue_components/errors/RevenueError.tsx");

export const RevenueError = prototype;