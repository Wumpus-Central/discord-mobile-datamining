// === Module 7206: getQuestLogger ===

// Module 7206 (getQuestLogger)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1096 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1357 */;
import size from "module_2" /* 2 */;

const NOOP = Constants.NOOP;
const result = size.fileFinishedImporting("modules/quests/lib/getQuestLogger.tsx");

export const getQuestLogger = function getQuestLogger(arg0) {
  let _location;
  let quest;
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
  const tmp4 = LoggerDefault;
  const tmp42 = new tmp4("QuestLogger" + str2 + str);
  return { log: isLoggingQuestEvents ? tmp42.log : NOOP, warn: isLoggingQuestEvents ? tmp42.warn : NOOP, error: isLoggingQuestEvents ? tmp42.error : NOOP, info: isLoggingQuestEvents ? tmp42.info : NOOP, verbose: isLoggingQuestEvents ? tmp42.verbose : NOOP, trace: isLoggingQuestEvents ? tmp42.trace : NOOP };
};