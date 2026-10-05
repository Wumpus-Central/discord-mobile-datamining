// discord_app/modules/quests/native/QuestDock/QuestDockStore.tsx
import get_initializedDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import QuestConstants from "../../QuestConstants.tsx";
import QuestDockUtils from "QuestDockUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const QuestDockMode = QuestConstants.QuestDockMode;
let COLLAPSED = QuestDockMode.COLLAPSED;
const _false = null;
let isEligibleToBeVisible = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class QuestDockStore extends PersistedStore {
  initialize(questDockSoftDismissedAt) {
    if (null != questDockSoftDismissedAt) {
      let c3 = questDockSoftDismissedAt.questDockSoftDismissedAt;
      const obj = QuestDockUtils;
      COLLAPSED = obj.isSoftDismissed(c3) ? QuestDockMode.SOFT_DISMISSED : QuestDockMode.COLLAPSED;
    }
  }
  getState() {
    return { prevRestingQuestDockMode: COLLAPSED, questDockSoftDismissedAt };
  }
}
const prototype = QuestDockStore.prototype;
Object.defineProperty(prototype, "prevRestingQuestDockMode", {
  get: function prevRestingQuestDockMode() {
    return COLLAPSED;
  },
  set: undefined,
});
Object.defineProperty(prototype, "questDockSoftDismissedAt", {
  get: function questDockSoftDismissedAt() {
    return c3;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isEligibleToBeVisible", {
  get: function isEligibleToBeVisible() {
    return isEligibleToBeVisible;
  },
  set: undefined,
});
QuestDockStore.displayName = "QuestDockStore";
QuestDockStore.persistKey = "QuestDockStore";
let obj = {
  QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE: function handlePrevRestingQuestDockModeUpdate(mode) {
    COLLAPSED = mode.mode;
    if (mode.mode !== COLLAPSED) {
      let timestamp = null;
      if (mode.mode === QuestDockMode.SOFT_DISMISSED) {
        const _Date = Date;
        timestamp = Date.now();
      }
      let c3 = timestamp;
    }
    return mode.mode !== COLLAPSED;
  },
  QUESTS_DOCK_RESET_SOFT_DISMISSAL: function handleResetSoftDismissal() {
    COLLAPSED = QuestDockMode.COLLAPSED;
    let c3 = null;
  },
  QUESTS_DOCK_VISIBILITY_ELIGIBILITY_UPDATE: function handleQuestDockEligibilityUpdate(isEligibleToBeVisible) {
    isEligibleToBeVisible = isEligibleToBeVisible.isEligibleToBeVisible;
  },
};
const questDockStore = new QuestDockStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockStore.tsx");

export default questDockStore;
