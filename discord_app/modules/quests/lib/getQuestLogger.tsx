// === Module 7422: getQuestLogger ===

// Module 7422 (getQuestLogger)
import timestampDefault from "timestamp" /* 3 */;
import closure_2 from "refreshSourceMapCookie" /* 706 */;
import { NOOP } from "sum" /* 505 */;

const result = require("set").fileFinishedImporting("modules/quests/lib/getQuestLogger.tsx");

export const getQuestLogger = function getQuestLogger(getQuestLogger) {
  let obj = getQuestLogger;
  if (getQuestLogger === undefined) {
    obj = {};
  }
  ({ quest, location: _location } = obj);
  isLoggingQuestEvents = isLoggingQuestEvents.isLoggingQuestEvents;
  let questName;
  if (quest != null) {
    questName = quest.config.messages.questName;
  }
  let str = "";
  let str2 = "";
  if (null != _location) {
    const _HermesInternal = HermesInternal;
    str2 = "-" + _location;
  }
  if (null != questName) {
    const _HermesInternal2 = HermesInternal;
    str = "-" + questName + ")";
  }
  let tmp4 = timestampDefault;
  tmp4 = new tmp4("QuestLogger" + str2 + str);
  obj = { log: isLoggingQuestEvents ? tmp4.log : NOOP, warn: isLoggingQuestEvents ? tmp4.warn : NOOP, error: isLoggingQuestEvents ? tmp4.error : NOOP, info: isLoggingQuestEvents ? tmp4.info : NOOP, verbose: isLoggingQuestEvents ? tmp4.verbose : NOOP, trace: isLoggingQuestEvents ? tmp4.trace : NOOP };
  return obj;
};