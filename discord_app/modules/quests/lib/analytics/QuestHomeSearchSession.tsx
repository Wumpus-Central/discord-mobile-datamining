// discord_app/modules/quests/lib/analytics/QuestHomeSearchSession.tsx
import v1 from "../../../../../_runtime/01256_v1.js";
import SessionUtils from "../../../analytics_sessions/SessionUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c2 = null;
const result = size.fileFinishedImporting("modules/quests/lib/analytics/QuestHomeSearchSession.tsx");

export const getOrCreateQuestHomeSearchSession = function getOrCreateQuestHomeSearchSession() {
  const timestamp = Date.now();
  if (null == searchSession) {
    let obj = { searchSession: null, isNew: true };
    obj = {
      uuid: v1.v4(),
      createdAtTimestamp: timestamp,
      lastUsedTimestamp: timestamp,
      version: SessionUtils.CLIENT_SESSION_STORAGE_VERSION,
    };
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
