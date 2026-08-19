// discord_app/modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../intl/FavoritesGuild.messages.js";
import useFavoritesAccess from "../FavoritesHooks.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { Routes } from "../../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

export default function useFavoritesGuildHeaderAction() {
  let obj = useFavoritesAccess;
  const hasAccess = obj.useFavoritesAccess().hasAccess;
  obj = { isPreview: !hasAccess, label: null, exitPreview: null };
  const callback = React.useCallback(() => {
    callback(table[3]).transitionTo(constants.ME);
  }, []);
  const intl = getSystemLocale.intl;
  if (hasAccess) {
    let ojM1xJ = messagesProxyDefault.G9fGlP;
  } else {
    ojM1xJ = getSystemLocale.t.ojM1xJ;
  }
  obj[1] = intl.string(ojM1xJ);
  obj[2] = callback;
  return obj;
};