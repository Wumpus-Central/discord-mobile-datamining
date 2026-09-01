// discord_app/modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx
import messagesProxyDefault from "../intl/FavoritesGuild.messages.js";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { ChannelTypes } from "../../../Constants.tsx";
import { getFavoritesAwareGuildName } from "../FavoritesUtils.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx");

export default function useFavoritesGuildCategoryAddAction(id) {
  const _require = id;
  const items = [id.id];
  const callback = React.useCallback(() => {
    closure_1_1(closure_1_2[2])({ parentId: id.id, source: "favorites_add_to_category" });
  }, items);
  let obj = getFavoritesAwareGuildName;
  let tmp4 = null;
  if (obj.isFavoritesGuildId(id.getGuildId())) {
    tmp4 = null;
    if (id.type === ChannelTypes.GUILD_CATEGORY) {
      obj = { label: null, perform: null };
      const intl = require("../../../intl/index.native.tsx").intl;
      obj[0] = intl.string(messagesProxyDefault["1QJmIL"]);
      obj[1] = callback;
      tmp4 = obj;
    }
  }
  return tmp4;
}
