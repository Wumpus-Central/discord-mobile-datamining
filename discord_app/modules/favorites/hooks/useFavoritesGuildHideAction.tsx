// === Module 15400: useFavoritesGuildHideAction ===

// Module 15400 (useFavoritesGuildHideAction)
import messagesProxyDefault from "messagesProxy" /* 3079 */;
import noop from "noop" /* 19 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4197 */;
import { Routes } from "ME" /* 676 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  let obj = hasAccess(9979);
  hasAccess = obj.useFavoritesAccess().hasAccess;
  const items = [hasAccess];
  obj = { isPreview: !hasAccess, label: null, subLabel: null, perform: null };
  const callback = React.useCallback(() => {
    if (hasAccess) {
      const result = hasAccess(dependencyMap[4]).setFavoritesGuildVisibility(false, "server_context_menu");
      const obj = hasAccess(dependencyMap[4]);
    }
    if (obj2.isFavoritesGuildId(closure_1_4.getGuildId())) {
      hasAccess(dependencyMap[6]).transitionTo(Routes.ME);
      const obj3 = hasAccess(dependencyMap[6]);
    }
    obj2 = hasAccess(dependencyMap[5]);
  }, items);
  const intl = hasAccess(1236).intl;
  if (hasAccess) {
    let ojM1xJ = messagesProxyDefault["8FO0y9"];
  } else {
    ojM1xJ = tmp(1236).t.ojM1xJ;
  }
  obj[1] = intl.string(ojM1xJ);
  let stringResult;
  if (hasAccess) {
    const intl2 = tmp(1236).intl;
    stringResult = intl2.string(messagesProxyDefault.FaHxWl);
  }
  obj[2] = stringResult;
  obj[3] = callback;
  return obj;
};