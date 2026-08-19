// discord_app/modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx
import messagesProxyDefault from "../intl/FavoritesGuild.messages.js";
import openFavoritesGuildAddChannelModalDefault from "../utils/openFavoritesGuildAddChannelModal.native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { ChannelTypes } from "../../../Constants.tsx";
import { getFavoritesAwareGuildName } from "../FavoritesUtils.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx");

export default function useFavoritesGuildCategoryAddAction(id) {
  const _require = id;
  const items = [id.id];
  const callback = React.useCallback(() => {
    openFavoritesGuildAddChannelModalDefault({ parentId: id.id, source: "favorites_add_to_category" });
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
};