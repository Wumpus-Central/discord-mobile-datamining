// === Module 5102: useGuildIdForChannelRoute ===

// Module 5102 (useGuildIdForChannelRoute)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import FavoriteStore from "FavoriteStore" /* 2066 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;

require = fn;
const FAVORITES = fn(1085).FAVORITES;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/useGuildIdForChannelRoute.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildIdForChannelRoute(getGuildId) {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function l() {
      return guildId.getGuildId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (null != stateFromStores) {
    return stateFromStores;
  } else if (cResult[2] !== getGuildId) {
    const guildId = getGuildId.getGuildId();
    cResult[2] = getGuildId;
    cResult[3] = guildId;
  }
  const tmpResult = initialize;
}) : (function useGuildIdForChannelRoute(getGuildId) {
  const items = [SelectedGuildStore];
  let stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
  if (null == stateFromStores) {
    stateFromStores = getGuildId.getGuildId();
  }
  return stateFromStores;
});
export const getGuildIdForGenericRedirect = function getGuildIdForGenericRedirect(channel) {
  if (!obj.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
    let guildId = channel.getGuildId();
  } else if (FavoriteStore.isFavorite(channel.id)) {
    guildId = FAVORITES;
  }
  return guildId;
};