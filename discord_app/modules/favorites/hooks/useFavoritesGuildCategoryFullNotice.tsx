// discord_app/modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../intl/index.native.tsx";
import FavoritesUtils from "../FavoritesUtils.tsx";
import _modDef3358 from "../intl/FavoritesGuild.messages.js";
import FavoritesHooks from "../FavoritesHooks.tsx";
import FavoriteStore from "../FavoriteStore.tsx";

require = fn;
let closure_4 = fn(2055).FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default function useFavoritesGuildCategoryFullNotice(getGuildId, str) {
  const items = [FavoriteStore];
  const stateFromStores = initialize.useStateFromStores(items, () => autoAddJoinedThreads.autoAddJoinedThreads);
  FavoritesHooks;
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != str) {
        tmp6 = null;
        if (tmpResult.isFavoritesGuildId(getGuildId.getGuildId())) {
          tmp6 = null;
          if (getGuildId.type === ChannelTypes.GUILD_CATEGORY) {
            str = str.trim();
            const formatted = str.toLowerCase();
            tmp6 = null;
            if (formatted === closure_4.toLowerCase()) {
              const obj2 = { label: null, tooltip: null };
              const intl = util.intl;
              obj2.label = intl.string(_modDef3358.WsUrMD);
              const intl2 = util.intl;
              obj2.tooltip = intl2.string(_modDef3358.dW9Kov);
              tmp6 = obj2;
            }
          }
        }
        tmpResult = FavoritesUtils;
      }
    }
  }
  return tmp6;
}
