// === Module 15464: useFavoritesGuildHideAction ===

// Module 15464 (useFavoritesGuildHideAction)
import messagesProxyDefault from "messagesProxy" /* 3082 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleConnectionOpen" /* 4201 */;
import { Routes } from "ME" /* 676 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  let obj = hasAccess(10018);
  hasAccess = obj.useFavoritesAccess().hasAccess;
  const items = [hasAccess];
  obj = { isPreview: !hasAccess, label: null, subLabel: null, perform: null };
  const callback = React.useCallback(() => {
    if (hasAccess) {
      const result = hasAccess(closure_1_2[4]).setFavoritesGuildVisibility(false, "server_context_menu");
      const obj = hasAccess(closure_1_2[4]);
    }
    if (obj2.isFavoritesGuildId(closure_1_4.getGuildId())) {
      hasAccess(closure_1_2[6]).transitionTo(closure_1_5.ME);
      const obj3 = hasAccess(closure_1_2[6]);
    }
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