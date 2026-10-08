// === Module 14756: useTabSelectedGuildId ===

// Module 14756 (useTabSelectedGuildId)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;
import SortedGuildStore from "SortedGuildStore" /* 5968 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useTabSelectedGuildId() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore, SortedGuildStore];
    const fn = function s() {
      let guildId = SelectedGuildStore.getGuildId();
      const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
      if (guildId == null) {
        guildId = lastSelectedGuildId;
      }
      if (guildId == null) {
        guildId = flattenedGuildIds.getFlattenedGuildIds()[0];
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
  return useStateFromStores.useStateFromStores(tmp4, tmp5);
}) : (function useTabSelectedGuildId() {
  const items = [SelectedGuildStore, SortedGuildStore];
  return useStateFromStores.useStateFromStores(items, () => {
    let guildId = SelectedGuildStore.getGuildId();
    const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
    if (guildId == null) {
      guildId = lastSelectedGuildId;
    }
    if (guildId == null) {
      guildId = flattenedGuildIds.getFlattenedGuildIds()[0];
    }
    return guildId;
  });
});