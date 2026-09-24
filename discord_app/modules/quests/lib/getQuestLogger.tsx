// === Module 8032: getQuestLogger ===

// Module 8032 (getQuestLogger)
import LoggerDefault from "Logger" /* 3 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1346 */;

const NOOP = fn(1085).NOOP;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/lib/getQuestLogger.tsx");

export const getQuestLogger = function getQuestLogger(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ quest, location: _location } = obj);
  const isLoggingQuestEvents = DeveloperOptionsStore.isLoggingQuestEvents;
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
  const tmp42 = new LoggerDefault("QuestLogger" + str2 + str);
  return { log: isLoggingQuestEvents ? tmp42.log : NOOP, warn: isLoggingQuestEvents ? tmp42.warn : NOOP, error: isLoggingQuestEvents ? tmp42.error : NOOP, info: isLoggingQuestEvents ? tmp42.info : NOOP, verbose: isLoggingQuestEvents ? tmp42.verbose : NOOP, trace: isLoggingQuestEvents ? tmp42.trace : NOOP };
};