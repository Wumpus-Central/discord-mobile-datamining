// === Module 10975: useFavoritesGuildCategoryAddAction ===

// Module 10975 (useFavoritesGuildCategoryAddAction)
import _modDef3225 from "module_3225" /* 3225 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 10976 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx");

export default function useFavoritesGuildCategoryAddAction(id) {
  _require = id;
  const items = [id.id];
  const callback = noop.useCallback(() => {
    openFavoritesGuildAddChannelModalDefault({ parentId: id.id, source: "favorites_add_to_category" });
  }, items);
  let obj = require("FavoritesUtils");
  let tmp4 = null;
  if (obj.isFavoritesGuildId(id.getGuildId())) {
    tmp4 = null;
    if (id.type === ChannelTypes.GUILD_CATEGORY) {
      obj = { label: null, perform: null };
      const intl = require("util").intl;
      obj.label = intl.string(_modDef3225["1QJmIL"]);
      obj.perform = callback;
      tmp4 = obj;
    }
  }
  return tmp4;
};