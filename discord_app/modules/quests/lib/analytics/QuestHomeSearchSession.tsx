// === Module 7734: getOrCreateQuestHomeSearchSession ===

// Module 7734 (getOrCreateQuestHomeSearchSession)
import set from "set" /* 2 */;
import v1 from "v1" /* 1256 */;
import result2 from "result" /* 7471 */;

let c2 = null;
const result = set.fileFinishedImporting("modules/quests/lib/analytics/QuestHomeSearchSession.tsx");

export const getOrCreateQuestHomeSearchSession = function getOrCreateQuestHomeSearchSession() {
  const timestamp = Date.now();
  if (null == obj) {
    obj = { searchSession: null, isNew: true };
    obj = { uuid: null, createdAtTimestamp: null, lastUsedTimestamp: null, version: null };
    obj[0] = v1.v4();
    obj[1] = timestamp;
    obj[2] = timestamp;
    obj[3] = result2.CLIENT_SESSION_STORAGE_VERSION;
    obj[0] = obj;
    const obj4 = v1;
  } else {
    obj.lastUsedTimestamp = timestamp;
    obj = { searchSession: null, isNew: false };
    obj[0] = obj;
  }
  return obj;
};
export function clearQuestHomeSearchSession() {
  c2 = null;
}
export function getCurrentQuestHomeSearchSession() {
  return c2;
}