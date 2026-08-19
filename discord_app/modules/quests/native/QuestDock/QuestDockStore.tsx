// === Module 14445: QuestDockMode ===

// Module 14445 (QuestDockMode)
import obj132 from "obj132" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 6716 */;
import QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED from "QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED" /* 14446 */;

const QuestDockMode = QuestsExperimentLocations.QuestDockMode;
let COLLAPSED = QuestDockMode.COLLAPSED;
let c3 = null;
let c5 = false;
const PersistedStore = initializeDefault.PersistedStore;
class QuestDockStore extends PersistedStore {
}
const prototype = QuestDockStore.prototype;
prototype["initialize"] = function initialize(questDockSoftDismissedAt) {
  if (null != questDockSoftDismissedAt) {
    questDockSoftDismissedAt = questDockSoftDismissedAt.questDockSoftDismissedAt;
    closure_2 = QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED.isSoftDismissed(questDockSoftDismissedAt) ? QuestDockMode.SOFT_DISMISSED : QuestDockMode.COLLAPSED;
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
const result = obj132.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockStore.tsx");

export default questDockStore;