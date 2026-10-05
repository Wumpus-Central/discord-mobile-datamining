// === Module 4902: useGuildIdForChannelRoute ===

// Module 4902 (useGuildIdForChannelRoute)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const FAVORITES = Constants.FAVORITES;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((getGuildId) => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
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
  const tmpResult = get_initialized;
  let stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (null == stateFromStores) {
    let tmp9;
    if (cResult[2] !== getGuildId) {
      const guildId = getGuildId.getGuildId();
      cResult[2] = getGuildId;
      cResult[3] = guildId;
      tmp9 = guildId;
    } else {
      tmp9 = cResult[3];
    }
    stateFromStores = tmp9;
  }
  return stateFromStores;
}) : ((getGuildId) => {
  let guildId;
  const items = [SelectedGuildStore];
  const obj = get_initialized;
  let stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  if (null == stateFromStores) {
    stateFromStores = getGuildId.getGuildId();
  }
  return stateFromStores;
});
const result = size.fileFinishedImporting("modules/routing/useGuildIdForChannelRoute.tsx");

export default tmp2;
export const getGuildIdForGenericRedirect = function getGuildIdForGenericRedirect(channel) {
  let guildId;
  const obj = FavoritesUtils;
  if (!obj.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
    guildId = channel.getGuildId();
  } else if (FavoriteStore.isFavorite(channel.id)) {
    guildId = FAVORITES;
  }
  return guildId;
};