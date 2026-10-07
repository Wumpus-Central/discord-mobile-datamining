// discord_app/modules/routing/useGuildIdForChannelRoute.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import FavoriteStore from "../favorites/FavoriteStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";

require = fn;
const FAVORITES = fn(1085).FAVORITES;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/useGuildIdForChannelRoute.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (getGuildId) => {
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
    }
  : (getGuildId) => {
      const items = [SelectedGuildStore];
      let stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
      if (null == stateFromStores) {
        stateFromStores = getGuildId.getGuildId();
      }
      return stateFromStores;
    };
export const getGuildIdForGenericRedirect = function getGuildIdForGenericRedirect(channel) {
  if (!obj.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
    let guildId = channel.getGuildId();
  } else if (FavoriteStore.isFavorite(channel.id)) {
    guildId = FAVORITES;
  }
  return guildId;
};
