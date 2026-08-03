import noop from "noop";
import handleConnectionOpen from "handleConnectionOpen";
import { Routes } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  let obj = hasAccess(10228);
  hasAccess = obj.useFavoritesAccess().hasAccess;
  const items = [hasAccess];
  obj = { isPreview: !hasAccess, label: null, subLabel: null, perform: null };
  const callback = React.useCallback(() => {
    if (hasAccess) {
      const result = hasAccess(outer1_2[4]).setFavoritesGuildVisibility(false, "server_context_menu");
      const obj = hasAccess(outer1_2[4]);
    }
    if (obj2.isFavoritesGuildId(outer1_4.getGuildId())) {
      hasAccess(outer1_2[6]).transitionTo(outer1_5.ME);
      const obj3 = hasAccess(outer1_2[6]);
    }
  }, items);
  const intl = hasAccess(1236).intl;
  if (hasAccess) {
    let ojM1xJ = importDefault(2971)["8FO0y9"];
  } else {
    ojM1xJ = tmp(1236).t.ojM1xJ;
  }
  obj[1] = intl.string(ojM1xJ);
  let stringResult;
  if (hasAccess) {
    const intl2 = tmp(1236).intl;
    stringResult = intl2.string(importDefault(2971).FaHxWl);
  }
  obj[2] = stringResult;
  obj[3] = callback;
  return obj;
};