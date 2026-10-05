// discord_app/modules/quests/native/QuestDock/useIsQuestDockContentVisible.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import QuestConstants from "../../QuestConstants.tsx";
import reactDefault from "QuestDockVisibilityContext.tsx";
import react from "../../../../../_runtime/00019_react.js";
import QuestDockStore from "QuestDockStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const QuestDockMode = QuestConstants.QuestDockMode;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      let isVisibleToUser = react.useContext(reactDefault).isVisibleToUser;
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (isVisibleToUser) {
        isVisibleToUser = stateFromStores !== QuestDockMode.CLOSED;
      }
      if (isVisibleToUser) {
        isVisibleToUser = stateFromStores !== QuestDockMode.SOFT_DISMISSED;
      }
      return isVisibleToUser;
    }
  : () => {
      let isVisibleToUser = react.useContext(reactDefault).isVisibleToUser;
      const items = [QuestDockStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
      if (isVisibleToUser) {
        isVisibleToUser = stateFromStores !== QuestDockMode.CLOSED;
      }
      if (isVisibleToUser) {
        isVisibleToUser = stateFromStores !== QuestDockMode.SOFT_DISMISSED;
      }
      return isVisibleToUser;
    };
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/useIsQuestDockContentVisible.tsx");

export default tmp2;
