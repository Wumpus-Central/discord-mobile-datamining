// discord_app/modules/routing/useGuildIdForChannelRoute.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import Constants from "../../Constants.tsx";
import FavoritesUtils from "../favorites/FavoritesUtils.tsx";
import FavoriteStore from "../favorites/FavoriteStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const FAVORITES = Constants.FAVORITES;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (getGuildId) => {
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
    }
  : (getGuildId) => {
      let guildId;
      const items = [SelectedGuildStore];
      const obj = get_initialized;
      let stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
      if (null == stateFromStores) {
        stateFromStores = getGuildId.getGuildId();
      }
      return stateFromStores;
    };
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
