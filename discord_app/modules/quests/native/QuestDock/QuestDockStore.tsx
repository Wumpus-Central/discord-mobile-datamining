// === Module 14935: QuestDockMode ===

// Module 14935 (QuestDockMode)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 5396 */;
import QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED from "QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED" /* 14936 */;

const QuestDockMode = QuestsExperimentLocations.QuestDockMode;
let c5 = false;
let COLLAPSED = QuestDockMode.COLLAPSED;
let c3 = null;
c5 = false;
const PersistedStore = initializeDefault.PersistedStore;
class QuestDockStore extends PersistedStore {
}
const prototype = QuestDockStore.prototype;
prototype["initialize"] = function initialize(questDockSoftDismissedAt) {
  if (null != questDockSoftDismissedAt) {
    questDockSoftDismissedAt = questDockSoftDismissedAt.questDockSoftDismissedAt;
    closure_2 = QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED.isSoftDismissed(questDockSoftDismissedAt) ? tmp4.SOFT_DISMISSED : tmp4.COLLAPSED;
    const obj = QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED;
  }
};
prototype["getState"] = function getState() {
  return { prevRestingQuestDockMode: COLLAPSED, questDockSoftDismissedAt: c3 };
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
    return c5;
  },
  set: undefined
});
QuestDockStore.displayName = "QuestDockStore";
QuestDockStore.persistKey = "QuestDockStore";
const questDockStore = new QuestDockStore(dispatcherDefault, {
  QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE: function handlePrevRestingQuestDockModeUpdate(mode) {
    mode = mode.mode;
    if (mode.mode !== mode) {
      let timestamp = null;
      if (mode.mode === QuestDockMode.SOFT_DISMISSED) {
        const _Date = Date;
        timestamp = Date.now();
      }
    }
    return mode.mode !== mode;
  },
  QUESTS_DOCK_RESET_SOFT_DISMISSAL: function handleResetSoftDismissal() {
    COLLAPSED = QuestDockMode.COLLAPSED;
    c3 = null;
  },
  QUESTS_DOCK_VISIBILITY_ELIGIBILITY_UPDATE: function handleQuestDockEligibilityUpdate(isEligibleToBeVisible) {
    isEligibleToBeVisible = isEligibleToBeVisible.isEligibleToBeVisible;
  }
});
const result = set.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockStore.tsx");

export default questDockStore;