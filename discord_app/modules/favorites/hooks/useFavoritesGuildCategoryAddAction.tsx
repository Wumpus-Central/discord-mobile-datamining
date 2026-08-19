// === Module 11958: useFavoritesGuildCategoryAddAction ===

// Module 11958 (useFavoritesGuildCategoryAddAction)
import messagesProxyDefault from "messagesProxy" /* 3079 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 11959 */;
import noop from "noop" /* 19 */;
import { ChannelTypes } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx");

export default function useFavoritesGuildCategoryAddAction(id) {
  const _require = id;
  const items = [id.id];
  const callback = React.useCallback(() => {
    openFavoritesGuildAddChannelModalDefault({ parentId: id.id, source: "favorites_add_to_category" });
  }, items);
  let obj = _require(1913);
  let tmp4 = null;
  if (obj.isFavoritesGuildId(id.getGuildId())) {
    tmp4 = null;
    if (id.type === ChannelTypes.GUILD_CATEGORY) {
      obj = { label: null, perform: null };
      const intl = _require(1236).intl;
      obj[0] = intl.string(messagesProxyDefault["1QJmIL"]);
      obj[1] = callback;
      tmp4 = obj;
    }
  }
  return tmp4;
};