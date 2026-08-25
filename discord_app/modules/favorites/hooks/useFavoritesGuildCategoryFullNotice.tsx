// discord_app/modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import messagesProxyDefault from "../intl/FavoritesGuild.messages.js";
import useFavoritesAccess from "../FavoritesHooks.tsx";
import closure_3 from "../FavoriteStore.tsx";
import { FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME as closure_4 } from "../FavoritesConstants.tsx";
import { ChannelTypes } from "../../../Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default function useFavoritesGuildCategoryFullNotice(getGuildId, str) {
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => autoAddJoinedThreads.autoAddJoinedThreads);
  useFavoritesAccess;
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
              const intl = tmp(1236).intl;
              obj[0] = intl.string(messagesProxyDefault.WsUrMD);
              const intl2 = tmp(1236).intl;
              obj[1] = intl2.string(messagesProxyDefault.dW9Kov);
              tmp6 = obj;
            }
            str = str.trim();
          }
        }
        tmpResult = tmp(1913);
      }
    }
  }
  return tmp6;
};