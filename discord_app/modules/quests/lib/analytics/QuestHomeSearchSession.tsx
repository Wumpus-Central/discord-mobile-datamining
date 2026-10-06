// === Module 7227: QuestHomeSearchSession ===

// Module 7227 (QuestHomeSearchSession)
import v1 from "v1" /* 1266 */;
import SessionUtils from "SessionUtils" /* 6993 */;
import size from "module_2" /* 2 */;

let searchSession;

let c2 = null;
const result = size.fileFinishedImporting("modules/quests/lib/analytics/QuestHomeSearchSession.tsx");

export const getOrCreateQuestHomeSearchSession = function getOrCreateQuestHomeSearchSession() {
  let obj;
  let obj3;
  let obj4;
  const timestamp = Date.now();
  if (null == searchSession) {
    const obj2 = { searchSession: obj3, isNew: true };
    obj3 = { uuid: obj4.v4(), createdAtTimestamp: timestamp, lastUsedTimestamp: timestamp, version: SessionUtils.CLIENT_SESSION_STORAGE_VERSION };
    searchSession = obj3;
    obj = obj2;
    obj4 = v1;
  } else {
    searchSession.lastUsedTimestamp = timestamp;
    obj = { searchSession, isNew: false };
  }
  return obj;
};
export function clearQuestHomeSearchSession() {
  let c2 = null;
}
export function getCurrentQuestHomeSearchSession() {
  return c2;
}