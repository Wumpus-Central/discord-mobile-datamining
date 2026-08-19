// discord_app/modules/favorites/hooks/useFavoritesGuildResetAction.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../intl/FavoritesGuild.messages.js";
import explicitContentFromProto from "../../user_settings/UserSettings.tsx";
import useFavoritesAccess from "../FavoritesHooks.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import handleConnectionOpen from "../../../stores/SelectedGuildStore.tsx";
import { Routes } from "../../../Constants.tsx";

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