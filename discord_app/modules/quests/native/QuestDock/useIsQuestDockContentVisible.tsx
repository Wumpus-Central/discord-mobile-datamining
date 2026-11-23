// === Module 16576: useIsQuestDockContentVisible ===

// Module 16576 (useIsQuestDockContentVisible)
import initialize from "initialize" /* 504 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 16564 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 16473 */;

require = fn;
const QuestDockMode = fn(6558).QuestDockMode;
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