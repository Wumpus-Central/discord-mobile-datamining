// discord_app/modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx
import noop from "noop";
import { Routes } from "ME";

const require = arg1;
const result = require("useFavoritesAccess").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

export default function useFavoritesGuildHeaderAction() {
  let obj = require("../FavoritesHooks.tsx") /* useFavoritesAccess */;
  const hasAccess = obj.useFavoritesAccess().hasAccess;
  obj = { isPreview: !hasAccess, label: null, exitPreview: null };
  const callback = React.useCallback(() => {
    callback(table[3]).transitionTo(constants.ME);
  }, []);
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  if (hasAccess) {
    let ojM1xJ = require("../intl/FavoritesGuild.messages.js").G9fGlP;
  } else {
    ojM1xJ = require("../../../intl/index.native.tsx") /* getSystemLocale */.t.ojM1xJ;
  }
  obj[1] = intl.string(ojM1xJ);
  obj[2] = callback;
  return obj;
};