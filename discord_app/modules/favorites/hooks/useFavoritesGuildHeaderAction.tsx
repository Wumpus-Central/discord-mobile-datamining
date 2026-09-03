// === Module 15987: useFavoritesGuildHeaderAction ===

// Module 15987 (useFavoritesGuildHeaderAction)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 3178 */;
import useFavoritesAccess from "useFavoritesAccess" /* 10333 */;
import closure_3 from "noop" /* 19 */;
import { Routes } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

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