import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";
// discord_app/modules/quests/UnenrolledActivityQuestStore.tsx
import { PersistedStore } from "initialize";
import set from "dispatcher";

let set = new Set();
let set1 = set;
let c3 = false;
set1 = new Set();
c3 = false;
class UnenrolledActivityQuestStore extends PersistedStore {
}
const prototype = UnenrolledActivityQuestStore.prototype;
prototype["initialize"] = function initialize(dismissedQuestIds) {
  dismissedQuestIds = undefined;
  if (dismissedQuestIds != null) {
    dismissedQuestIds = dismissedQuestIds.dismissedQuestIds;
  }
  if (dismissedQuestIds == null) {
    dismissedQuestIds = [];
  }
  const set = new Set(dismissedQuestIds);
  let flag;
  if (dismissedQuestIds != null) {
    flag = dismissedQuestIds.autoEnroll;
  }
  if (flag == null) {
    flag = false;
  }
};
prototype["getState"] = function getState() {
  const obj = { dismissedQuestIds: null, autoEnroll: null };
  const items = [...set1];
  obj[0] = items;
  obj[1] = c3;
  return obj;
};
prototype["isDismissed"] = function isDismissed(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    hasItem = set1.has(arg0);
  }
  return hasItem;
};
prototype["getDismissedQuestIds"] = function getDismissedQuestIds() {
  return set1;
};
UnenrolledActivityQuestStore.displayName = "UnenrolledActivityQuestStore";
UnenrolledActivityQuestStore.persistKey = "UnenrolledActivityQuestStore";
const unenrolledActivityQuestStore = new UnenrolledActivityQuestStore(require("dispatcher"), {
  UNENROLLED_ACTIVITY_QUEST_DISMISS: function handleDismissUnenrolledActivityQuest(questId) {
    if (set.size >= 20) {
      const _Array = Array;
      const sorted = Array.from(set).sort(DISCORD_EPOCH.compare);
      const _Math = Math;
      const substr = sorted.slice(Math.floor(10));
      const _Set = Set;
      set = new Set(substr.map((arg0) => arg0.toString()));
      const arr = Array.from(set);
    }
    set.add(questId.questId);
    return true;
  },
  UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL: function handleSetAutoEnroll(autoEnroll) {
    autoEnroll = autoEnroll.autoEnroll;
    return true;
  }
});
const result = set.fileFinishedImporting("modules/quests/UnenrolledActivityQuestStore.tsx");

export default unenrolledActivityQuestStore;