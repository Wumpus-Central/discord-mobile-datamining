// === Module 7734: QuestHomeSearchSession ===

// Module 7734 (QuestHomeSearchSession)
import v1 from "v1" /* 1256 */;
import SessionUtils from "SessionUtils" /* 7471 */;
import size from "module_2" /* 2 */;

let c2 = null;
const result = size.fileFinishedImporting("modules/quests/lib/analytics/QuestHomeSearchSession.tsx");

export const getOrCreateQuestHomeSearchSession = function getOrCreateQuestHomeSearchSession() {
  const timestamp = Date.now();
  if (null == searchSession) {
    let obj = { searchSession: null, isNew: true };
    obj = { uuid: v1.v4(), createdAtTimestamp: timestamp, lastUsedTimestamp: timestamp, version: SessionUtils.CLIENT_SESSION_STORAGE_VERSION };
    searchSession = obj;
    obj.searchSession = obj;
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