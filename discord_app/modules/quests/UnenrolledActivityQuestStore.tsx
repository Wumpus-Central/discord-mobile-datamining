// === Module 17032: UnenrolledActivityQuestStore ===

// Module 17032 (UnenrolledActivityQuestStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

new Set();
let set = new Set();
let autoEnroll = false;
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
  set = new Set(dismissedQuestIds);
  let flag;
  if (dismissedQuestIds != null) {
    flag = dismissedQuestIds.autoEnroll;
  }
  if (flag == null) {
    flag = false;
  }
  autoEnroll = flag;
};
prototype["getState"] = function getState() {
  const obj = { dismissedQuestIds: null, autoEnroll };
  const items = [...set];
  obj.dismissedQuestIds = items;
  return obj;
};
prototype["isDismissed"] = function isDismissed(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
};
prototype["getDismissedQuestIds"] = function getDismissedQuestIds() {
  return set;
};
UnenrolledActivityQuestStore.displayName = "UnenrolledActivityQuestStore";
UnenrolledActivityQuestStore.persistKey = "UnenrolledActivityQuestStore";
const unenrolledActivityQuestStore = new UnenrolledActivityQuestStore(DispatcherDefault, {
  UNENROLLED_ACTIVITY_QUEST_DISMISS: function handleDismissUnenrolledActivityQuest(questId) {
    if (set.size >= 20) {
      const _Array = Array;
      const sorted = Array.from(set).sort(SnowflakeUtilsDefault.compare);
      const _Math = Math;
      const substr = sorted.slice(Math.floor(10));
      const _Set = Set;
      set = new Set(substr.map((item) => item.toString()));
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/UnenrolledActivityQuestStore.tsx");

export default unenrolledActivityQuestStore;