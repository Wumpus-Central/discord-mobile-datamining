// === Module 7845: QuestHomeSearchSession ===

// Module 7845 (QuestHomeSearchSession)
import v1 from "v1" /* 1255 */;
import SessionUtils from "SessionUtils" /* 7585 */;
import size from "module_2" /* 2 */;

let c2 = null;
const result = size.fileFinishedImporting("modules/quests/lib/analytics/QuestHomeSearchSession.tsx");

export const getOrCreateQuestHomeSearchSession = function getOrCreateQuestHomeSearchSession() {
  const timestamp = Date.now();
  if (null == searchSession) {
    const obj2 = { searchSession: null, isNew: true };
    const obj3 = { uuid: v1.v4(), createdAtTimestamp: timestamp, lastUsedTimestamp: timestamp, version: SessionUtils.CLIENT_SESSION_STORAGE_VERSION };
    searchSession = obj3;
    obj2.searchSession = obj3;
    let obj = obj2;
  } else {
    searchSession.lastUsedTimestamp = timestamp;
    obj = { searchSession, isNew: false };
  }
  return obj;
};
export function clearQuestHomeSearchSession() {
  c2 = null;
}
export function getCurrentQuestHomeSearchSession() {
  return c2;
}