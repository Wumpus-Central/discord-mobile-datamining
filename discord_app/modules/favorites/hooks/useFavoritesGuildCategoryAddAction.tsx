// === Module 11112: useFavoritesGuildCategoryAddAction ===

// Module 11112 (useFavoritesGuildCategoryAddAction)
import _modDef3237 from "module_3237" /* 3237 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 11113 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

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
  let tmp4 = null;
  if (obj.isFavoritesGuildId(id.getGuildId())) {
    tmp4 = null;
    if (id.type === ChannelTypes.GUILD_CATEGORY) {
      const obj2 = { label: null, perform: null };
      const intl = require("util").intl;
      obj2.label = intl.string(_modDef3237["1QJmIL"]);
      obj2.perform = callback;
      tmp4 = obj2;
    }
  }
  return tmp4;
};