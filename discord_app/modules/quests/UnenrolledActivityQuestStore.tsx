// === Module 17214: UnenrolledActivityQuestStore ===

// Module 17214 (UnenrolledActivityQuestStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let set = new Set();
let _Set1 = new Set();
let flag = false;
new Set();
const PersistedStore = get_initializedDefault.PersistedStore;
class UnenrolledActivityQuestStore extends PersistedStore {
  initialize(dismissedQuestIds) {
    dismissedQuestIds = undefined;
    const _Set = Set;
    if (dismissedQuestIds != null) {
      dismissedQuestIds = dismissedQuestIds.dismissedQuestIds;
    }
    if (dismissedQuestIds == null) {
      dismissedQuestIds = [];
    }
    _Set1 = new _Set(dismissedQuestIds);
    flag = undefined;
    if (dismissedQuestIds != null) {
      flag = dismissedQuestIds.autoEnroll;
    }
    if (flag == null) {
      flag = false;
    }
  }
  getState() {
    let items;
    const obj = { dismissedQuestIds: items, autoEnroll: flag };
    items = [..._Set1];
    return obj;
  }
  isDismissed(arg0) {
    const hasItem = null != arg0 && _Set1.has(arg0);
    return hasItem;
  }
  getDismissedQuestIds() {
    return _Set1;
  }
}
const prototype = UnenrolledActivityQuestStore.prototype;
UnenrolledActivityQuestStore.displayName = "UnenrolledActivityQuestStore";
UnenrolledActivityQuestStore.persistKey = "UnenrolledActivityQuestStore";
let obj = {
  UNENROLLED_ACTIVITY_QUEST_DISMISS: function handleDismissUnenrolledActivityQuest(questId) {
    const f129144 = (item) => item.toString();
    if (_Set1.size >= 20) {
      const _Array = Array;
      const arr = Array.from(_Set1);
      const sorted = arr.sort(SnowflakeUtilsDefault.compare);
      const _Math = Math;
      const substr = sorted.slice(Math.floor(10));
      const _Set = Set;
      const self = this;
      const self2 = this;
      _Set1 = new Set(substr.map(f129144));
      set = new Set(substr.map(f129144));
    }
    _Set1.add(questId.questId);
    return true;
  },
  UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL: function handleSetAutoEnroll(autoEnroll) {
    return true;
  }
};
const unenrolledActivityQuestStore = new UnenrolledActivityQuestStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/quests/UnenrolledActivityQuestStore.tsx");

export default unenrolledActivityQuestStore;