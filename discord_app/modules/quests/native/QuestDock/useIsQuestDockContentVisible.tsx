// discord_app/modules/quests/native/QuestDock/useIsQuestDockContentVisible.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestDockStore from "QuestDockStore.tsx";

require = fn;
const QuestDockMode = fn(5623).QuestDockMode;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/useIsQuestDockContentVisible.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
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
    };
