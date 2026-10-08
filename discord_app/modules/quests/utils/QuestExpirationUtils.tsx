// === Module 7385: QuestExpirationUtils ===

// Module 7385 (QuestExpirationUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/utils/QuestExpirationUtils.tsx");

export const isQuestConfigExpired = function isQuestConfigExpired(expiresAt) {
  const date = new Date(expiresAt.expiresAt);
  return new Date(expiresAt.expiresAt).valueOf() <= Date.now();
};
export const isQuestExpired = function isQuestExpired(config) {
  const date = new Date(config.config.expiresAt);
  return new Date(config.config.expiresAt).valueOf() <= Date.now();
};
export const findNextUpcomingExpirationEpochMs = function findNextUpcomingExpirationEpochMs(arg0) {
  let tmp = null;
  const timestamp = Date.now();
  while (tmp3 !== undefined) {
    let _Date = Date;
    let tmp5 = new.target;
    let tmp6 = new.target;
    let date = new Date(tmp4.config.expiresAt);
    let valueOfResult = date.valueOf();
    if (valueOfResult > timestamp) {
      let tmp11 = null == tmp;
      if (!tmp11) {
        tmp11 = tmp9 < tmp;
      }
      if (tmp11) {
        tmp = valueOfResult;
      }
    }
    continue;
  }
  return tmp;
};