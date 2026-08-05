// discord_app/modules/quests/lib/analytics/QuestHomeSearchSession.tsx
import { v1 } from "../../../../../_runtime/00514_v1.js";
import { result } from "../../../analytics_sessions/SessionUtils.tsx";
let c2 = null;
const result = require("set").fileFinishedImporting("modules/quests/lib/analytics/QuestHomeSearchSession.tsx");

export const getOrCreateQuestHomeSearchSession = function getOrCreateQuestHomeSearchSession() {
  const timestamp = Date.now();
  if (null == obj) {
    obj = { searchSession: null, isNew: true };
    obj = { uuid: null, createdAtTimestamp: null, lastUsedTimestamp: null, version: null };
    obj[0] = v1 /* v1 */.v4();
    obj[1] = timestamp;
    obj[2] = timestamp;
    obj[3] = result /* result */.CLIENT_SESSION_STORAGE_VERSION;
    obj[0] = obj;
    const obj4 = v1 /* v1 */;
  } else {
    obj.lastUsedTimestamp = timestamp;
    obj = { searchSession: null, isNew: false };
    obj[0] = obj;
  }
  return obj;
};
export function clearQuestHomeSearchSession() {
  let c2 = null;
}
export function getCurrentQuestHomeSearchSession() {
  return c2;
}