// === Module 15401: useFavoritesGuildResetAction ===

// Module 15401 (useFavoritesGuildResetAction)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 3079 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import useFavoritesAccess from "useFavoritesAccess" /* 9979 */;
import noop from "noop" /* 19 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4197 */;
import { Routes } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  let obj = useFavoritesAccess;
  const callback = React.useCallback(() => {
    if (obj.isFavoritesGuildId(guildId.getGuildId())) {
      let tmpResult = callback(table[6]);
      tmpResult.transitionTo(constants.ME);
    }
    tmpResult = callback(table[7]);
    tmpResult.resetFavoritesGuild();
    obj = callback(table[5]);
  }, []);
  if (hasAccess) {
    hasAccess = obj.useFavoritesAccess().hasAccess;
  }
  obj = { isAvailable: hasAccess, label: null, subLabel: null, perform: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(messagesProxyDefault.YkET6R);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(messagesProxyDefault.ZzcwNk);
  obj[3] = callback;
  return obj;
};