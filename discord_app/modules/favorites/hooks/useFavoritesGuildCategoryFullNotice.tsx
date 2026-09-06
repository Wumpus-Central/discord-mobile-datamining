// === Module 16107: useFavoritesGuildCategoryFullNotice ===

// Module 16107 (useFavoritesGuildCategoryFullNotice)
import initialize from "initialize" /* 504 */;
import messagesProxyDefault from "messagesProxy" /* 3225 */;
import useFavoritesAccess from "useFavoritesAccess" /* 10224 */;
import closure_3 from "initializeFromUserSettings" /* 1960 */;
import { FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME as closure_4 } from "date" /* 1970 */;
import { ChannelTypes } from "ME" /* 1074 */;

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
              const intl = tmp(1114).intl;
              obj[0] = intl.string(messagesProxyDefault.WsUrMD);
              const intl2 = tmp(1114).intl;
              obj[1] = intl2.string(messagesProxyDefault.dW9Kov);
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