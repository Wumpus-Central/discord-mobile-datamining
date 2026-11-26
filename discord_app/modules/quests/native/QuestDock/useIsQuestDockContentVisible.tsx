// === Module 16782: useIsQuestDockContentVisible ===

// Module 16782 (useIsQuestDockContentVisible)
import initialize from "initialize" /* 504 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 16770 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 16678 */;

require = fn;
const QuestDockMode = fn(6871).QuestDockMode;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/useIsQuestDockContentVisible.tsx");

export default function useIsQuestDockContentVisible() {
  let isVisibleToUser = noop.useContext(QuestDockVisibilityContextDefault).isVisibleToUser;
  items = [QuestDockStore];
  const stateFromStores = initialize.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  if (isVisibleToUser) {
    isVisibleToUser = stateFromStores !== QuestDockMode.CLOSED;
  }
  if (isVisibleToUser) {
    isVisibleToUser = stateFromStores !== QuestDockMode.SOFT_DISMISSED;
  }
  return isVisibleToUser;
};