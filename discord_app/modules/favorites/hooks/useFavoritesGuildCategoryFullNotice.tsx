// discord_app/modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3629 from "../intl/FavoritesGuild.messages.js";
import FavoritesUtils from "../FavoritesUtils.tsx";
import FavoritesHooks from "../FavoritesHooks.tsx";
import FavoriteStore from "../FavoriteStore.tsx";

require = fn;
const FavoritesConstants = fn(5105);
({ FAVORITES_AUTO_ADD_THREADS_OWN_CATEGORY: closure_4, FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME: hasOwnProperty } =
  FavoritesConstants);
const ChannelTypes = fn(1072).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default function useFavoritesGuildCategoryFullNotice(getGuildId, str) {
  items = [FavoriteStore];
  const stateFromStores = initialize.useStateFromStores(
    items,
    () => autoAddThreadsMode.autoAddThreadsMode === closure_1_4,
  );
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
            if (formatted === hasOwnProperty.toLowerCase()) {
              const obj2 = { label: null, tooltip: null };
              const intl = util.intl;
              obj2.label = intl.string(_modDef3629.WsUrMD);
              const intl2 = util.intl;
              obj2.tooltip = intl2.string(_modDef3629.dW9Kov);
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
