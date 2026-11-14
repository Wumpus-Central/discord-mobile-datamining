// === Module 17696: QuestDockStore ===

// Module 17696 (QuestDockStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import QuestConstants from "QuestConstants" /* 5338 */;
import QuestDockUtils from "QuestDockUtils" /* 17697 */;
import size from "module_2" /* 2 */;

const QuestDockMode = QuestConstants.QuestDockMode;
let COLLAPSED = QuestDockMode.COLLAPSED;
let c3 = null;
let isEligibleToBeVisible = false;
let isExpandedOnScreen = false;
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
Object.defineProperty(prototype, "isExpandedOnScreen", {
  get: function isExpandedOnScreen() {
    return isExpandedOnScreen;
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
    if (!isEligibleToBeVisible) {
      isExpandedOnScreen = false;
    }
  },
  QUESTS_DOCK_EXPANDED_ON_SCREEN_UPDATE: function handleQuestDockExpandedOnScreenUpdate(isExpandedOnScreen) {
    if (isExpandedOnScreen.isExpandedOnScreen === isExpandedOnScreen) {
      return false;
    } else {
      isExpandedOnScreen = isExpandedOnScreen.isExpandedOnScreen;
    }
  }
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockStore.tsx");

export default questDockStore;