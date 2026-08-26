// === Module 15575: useFavoritesGuildResetAction ===

// Module 15575 (useFavoritesGuildResetAction)
import messagesProxyDefault from "messagesProxy" /* 3147 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import useFavoritesAccess from "useFavoritesAccess" /* 9927 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleConnectionOpen" /* 4266 */;
import { Routes } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  let obj = useFavoritesAccess;
  const callback = React.useCallback(() => {
    if (obj.isFavoritesGuildId(guildId.getGuildId())) {
      let tmpResult = tmp(tmp2[6]);
      tmpResult.transitionTo(constants.ME);
    }
    tmpResult = tmp(tmp2[7]);
    tmpResult.resetFavoritesGuild();
  }, []);
  if (hasAccess) {
    hasAccess = obj.useFavoritesAccess().hasAccess;
  }
  obj = { isAvailable: hasAccess, label: null, subLabel: null, perform: null };
  const intl = tmp(1236).intl;
  obj[1] = intl.string(messagesProxyDefault.YkET6R);
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(messagesProxyDefault.ZzcwNk);
  obj[3] = callback;
  return obj;
};