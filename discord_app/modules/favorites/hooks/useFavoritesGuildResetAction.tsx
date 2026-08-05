// discord_app/modules/favorites/hooks/useFavoritesGuildResetAction.tsx
import noop from "noop";
import handleConnectionOpen from "handleConnectionOpen";
import { Routes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = require("../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  let obj = require("../FavoritesHooks.tsx") /* useFavoritesAccess */;
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
  obj[1] = intl.string(require("../intl/FavoritesGuild.messages.js").YkET6R);
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(require("../intl/FavoritesGuild.messages.js").ZzcwNk);
  obj[3] = callback;
  return obj;
};