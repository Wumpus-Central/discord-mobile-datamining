// discord_app/modules/quests/UnenrolledActivityQuestStore.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import set from "../../../_runtime/00002_set.js";

let set = new Set();
let set1 = set;
let c3 = false;
set1 = new Set();
c3 = false;
const PersistedStore = initializeDefault.PersistedStore;
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
  const items = [...set1];
  return { dismissedQuestIds: items, autoEnroll: c3 };
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
const unenrolledActivityQuestStore = new UnenrolledActivityQuestStore(dispatcherDefault, {
  UNENROLLED_ACTIVITY_QUEST_DISMISS: function handleDismissUnenrolledActivityQuest(questId) {
    if (set.size >= 20) {
      const _Array = Array;
      const sorted = Array.from(set).sort(DISCORD_EPOCHDefault.compare);
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