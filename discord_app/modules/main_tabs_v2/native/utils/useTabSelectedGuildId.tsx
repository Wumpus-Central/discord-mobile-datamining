// discord_app/modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx
import useStateFromStores from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react from "../../../../../_runtime/00576_react.js";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let flattenedGuildIds;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedGuildStore, SortedGuildStore];
        const fn = function n() {
          let guildId = SelectedGuildStore.getGuildId();
          const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
          const first = flattenedGuildIds.getFlattenedGuildIds()[0];
          if (guildId == null) {
            guildId = lastSelectedGuildId;
          }
          if (guildId == null) {
            guildId = first;
          }
          return guildId;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = useStateFromStores;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let flattenedGuildIds;
      const items = [SelectedGuildStore, SortedGuildStore];
      const obj = useStateFromStores;
      return obj.useStateFromStores(items, () => {
        let guildId = SelectedGuildStore.getGuildId();
        const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
        const first = flattenedGuildIds.getFlattenedGuildIds()[0];
        if (guildId == null) {
          guildId = lastSelectedGuildId;
        }
        if (guildId == null) {
          guildId = first;
        }
        return guildId;
      });
    };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx");

export default tmp2;
