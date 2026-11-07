// === Module 17490: useIsQuestDockContentVisible ===

// Module 17490 (useIsQuestDockContentVisible)
import initialize from "initialize" /* 504 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 17465 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 17380 */;

require = fn;
const QuestDockMode = fn(6836).QuestDockMode;
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