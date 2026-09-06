// === Module 15093: QuestDockStore ===

// Module 15093 (QuestDockStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import QuestConstants from "QuestConstants" /* 5444 */;
import QuestDockUtils from "QuestDockUtils" /* 15094 */;
import size from "module_2" /* 2 */;

const QuestDockMode = QuestConstants.QuestDockMode;
let COLLAPSED = QuestDockMode.COLLAPSED;
let c3 = null;
let isEligibleToBeVisible = false;
const PersistedStore = initializeDefault.PersistedStore;
class QuestDockStore extends PersistedStore {
}
const prototype = QuestDockStore.prototype;
prototype["initialize"] = function initialize(questDockSoftDismissedAt) {
  if (null != questDockSoftDismissedAt) {
    c3 = questDockSoftDismissedAt.questDockSoftDismissedAt;
    COLLAPSED = QuestDockUtils.isSoftDismissed(c3) ? QuestDockMode.SOFT_DISMISSED : QuestDockMode.COLLAPSED;
  }
};
prototype["getState"] = function getState() {
  return { prevRestingQuestDockMode: COLLAPSED, questDockSoftDismissedAt };
};
Object.defineProperty(prototype, "prevRestingQuestDockMode", {
  get: function prevRestingQuestDockMode() {
    return COLLAPSED;
  },
  set: undefined
});
Object.defineProperty(prototype, "questDockSoftDismissedAt", {
  get: function questDockSoftDismissedAt() {
    return c3;
  },
  set: undefined
});
Object.defineProperty(prototype, "isEligibleToBeVisible", {
  get: function isEligibleToBeVisible() {
    return isEligibleToBeVisible;
  },
  set: undefined
});
QuestDockStore.displayName = "QuestDockStore";
QuestDockStore.persistKey = "QuestDockStore";
const questDockStore = new QuestDockStore(DispatcherDefault, {
  QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE: function handlePrevRestingQuestDockModeUpdate(mode) {
    COLLAPSED = mode.mode;
    if (mode.mode !== COLLAPSED) {
      let timestamp = null;
      if (mode.mode === QuestDockMode.SOFT_DISMISSED) {
        const _Date = Date;
        timestamp = Date.now();
      }
      c3 = timestamp;
    }
    return mode.mode !== COLLAPSED;
  },
  QUESTS_DOCK_RESET_SOFT_DISMISSAL: function handleResetSoftDismissal() {
    COLLAPSED = QuestDockMode.COLLAPSED;
    c3 = null;
  },
  QUESTS_DOCK_VISIBILITY_ELIGIBILITY_UPDATE: function handleQuestDockEligibilityUpdate(isEligibleToBeVisible) {
    isEligibleToBeVisible = isEligibleToBeVisible.isEligibleToBeVisible;
  }
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockStore.tsx");

export default questDockStore;