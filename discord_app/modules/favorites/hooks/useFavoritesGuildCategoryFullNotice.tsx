// === Module 18502: useFavoritesGuildCategoryFullNotice ===

// Module 18502 (useFavoritesGuildCategoryFullNotice)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import _modDef3608 from "module_3608" /* 3608 */;
import FavoritesUtils from "FavoritesUtils" /* 5014 */;
import FavoritesHooks from "FavoritesHooks" /* 10951 */;
import FavoriteStore from "FavoriteStore" /* 4992 */;

require = fn;
const FavoritesConstants = fn(5002);
({ FAVORITES_AUTO_ADD_THREADS_OWN_CATEGORY: closure_4, FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME: hasOwnProperty } = FavoritesConstants);
const ChannelTypes = fn(1072).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default function useFavoritesGuildCategoryFullNotice(getGuildId, str) {
  items = [FavoriteStore];
  const stateFromStores = initialize.useStateFromStores(items, () => autoAddThreadsMode.autoAddThreadsMode === closure_1_4);
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
              obj2.label = intl.string(_modDef3608.WsUrMD);
              const intl2 = util.intl;
              obj2.tooltip = intl2.string(_modDef3608.dW9Kov);
              tmp6 = obj2;
            }
          }
        }
        tmpResult = FavoritesUtils;
      }
    }
  }
  return tmp6;
};