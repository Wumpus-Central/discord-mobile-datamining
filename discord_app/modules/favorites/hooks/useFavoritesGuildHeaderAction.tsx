import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useFavoritesAccess } from "../FavoritesHooks.tsx";
import { messagesProxy } from "../intl/FavoritesGuild.messages.js";
// discord_app/modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx
import noop from "noop";
import { Routes } from "ME";

const require = arg1;
const result = require("useFavoritesAccess").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

export default function useFavoritesGuildHeaderAction() {
  let obj = useFavoritesAccess /* useFavoritesAccess */;
  const hasAccess = obj.useFavoritesAccess().hasAccess;
  obj = { isPreview: !hasAccess, label: null, exitPreview: null };
  const callback = React.useCallback(() => {
    callback(table[3]).transitionTo(constants.ME);
  }, []);
  const intl = getSystemLocale /* getSystemLocale */.intl;
  if (hasAccess) {
    let ojM1xJ = messagesProxy.G9fGlP;
  } else {
    ojM1xJ = getSystemLocale /* getSystemLocale */.t.ojM1xJ;
  }
  obj[1] = intl.string(ojM1xJ);
  obj[2] = callback;
  return obj;
};