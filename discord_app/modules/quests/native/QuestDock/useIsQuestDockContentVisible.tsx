// === Module 15462: useIsQuestDockContentVisible ===

// Module 15462 (useIsQuestDockContentVisible)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 15436 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 15345 */;

require = fn;
const QuestDockMode = fn(5972).QuestDockMode;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/useIsQuestDockContentVisible.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsQuestDockContentVisible() {
  const cResult = c.c(2);
  let isVisibleToUser = noop.useContext(QuestDockVisibilityContextDefault).isVisibleToUser;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestDockStore];
    const fn = function u() {
      return QuestDockStore.prevRestingQuestDockMode;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (isVisibleToUser) {
    isVisibleToUser = stateFromStores !== QuestDockMode.CLOSED;
  }
  if (isVisibleToUser) {
    isVisibleToUser = stateFromStores !== QuestDockMode.SOFT_DISMISSED;
  }
  return isVisibleToUser;
}) : (function useIsQuestDockContentVisible() {
  let isVisibleToUser = noop.useContext(QuestDockVisibilityContextDefault).isVisibleToUser;
  const items = [QuestDockStore];
  const stateFromStores = initialize.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  if (isVisibleToUser) {
    isVisibleToUser = stateFromStores !== QuestDockMode.CLOSED;
  }
  if (isVisibleToUser) {
    isVisibleToUser = stateFromStores !== QuestDockMode.SOFT_DISMISSED;
  }
  return isVisibleToUser;
});