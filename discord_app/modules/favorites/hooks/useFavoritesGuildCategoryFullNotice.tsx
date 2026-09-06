// === Module 16107: useFavoritesGuildCategoryFullNotice ===

// Module 16107 (useFavoritesGuildCategoryFullNotice)
import initialize from "initialize" /* 504 */;
import _modDef3225 from "module_3225" /* 3225 */;
import FavoritesHooks from "FavoritesHooks" /* 10224 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

require = fn;
let closure_4 = fn(1970).FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default function useFavoritesGuildCategoryFullNotice(getGuildId, str) {
  let obj = initialize;
  const items = [FavoriteStore];
  const stateFromStores = obj.useStateFromStores(items, () => autoAddJoinedThreads.autoAddJoinedThreads);
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
            const formatted = str.trim().toLowerCase();
            tmp6 = null;
            if (formatted === closure_4.toLowerCase()) {
              obj = { label: null, tooltip: null };
              const intl = tmp(1114).intl;
              obj.label = intl.string(_modDef3225.WsUrMD);
              const intl2 = tmp(1114).intl;
              obj.tooltip = intl2.string(_modDef3225.dW9Kov);
              tmp6 = obj;
            }
            str = str.trim();
          }
        }
        tmpResult = tmp(1982);
      }
    }
  }
  return tmp6;
};