// discord_app/modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx
import noop from "noop";
import { ChannelTypes } from "ME";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getFavoritesAwareGuildName } from "../FavoritesUtils.tsx";
import { messagesProxy } from "../intl/FavoritesGuild.messages.js";

const require = arg1;
const result = require("openFavoritesGuildAddChannelModal").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx");

export default function useFavoritesGuildCategoryAddAction(id) {
  const _require = id;
  const items = [id.id];
  const callback = React.useCallback(() => {
    outer1_1(outer1_2[2])({ parentId: id.id, source: "favorites_add_to_category" });
  }, items);
  let obj = _getFavoritesAwareGuildName;
  let tmp4 = null;
  if (obj.isFavoritesGuildId(id.getGuildId())) {
    tmp4 = null;
    if (id.type === ChannelTypes.GUILD_CATEGORY) {
      obj = { label: null, perform: null };
      const intl = _getSystemLocale.intl;
      obj[0] = intl.string(messagesProxy["1QJmIL"]);
      obj[1] = callback;
      tmp4 = obj;
    }
  }
  return tmp4;
};