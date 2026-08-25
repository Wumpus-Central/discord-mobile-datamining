// === Module 12335: useFavoritesGuildCategoryAddAction ===

// Module 12335 (useFavoritesGuildCategoryAddAction)
import messagesProxyDefault from "messagesProxy" /* 3083 */;
import closure_3 from "noop" /* 19 */;
import { ChannelTypes } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx");

export default function useFavoritesGuildCategoryAddAction(id) {
  const _require = id;
  const items = [id.id];
  const callback = React.useCallback(() => {
    closure_1_1(closure_1_2[2])({ parentId: id.id, source: "favorites_add_to_category" });
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