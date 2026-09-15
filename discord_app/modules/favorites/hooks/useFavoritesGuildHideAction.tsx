// === Module 16248: useFavoritesGuildHideAction ===

// Module 16248 (useFavoritesGuildHideAction)
import router_utils from "router_utils" /* 1101 */;
import FavoritesUtils from "FavoritesUtils" /* 1983 */;
import _modDef3237 from "module_3237" /* 3237 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10354 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4461 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  hasAccess = hasAccess(10355).useFavoritesAccess().hasAccess;
  const items = [hasAccess];
  let obj2 = { isPreview: !hasAccess, label: null, subLabel: null, perform: null };
  const callback = noop.useCallback(() => {
    if (hasAccess) {
      const result = FavoritesActionCreators.setFavoritesGuildVisibility(false, "server_context_menu");
    }
    if (obj2.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
      router_utils.transitionTo(Routes.ME);
    }
    obj2 = FavoritesUtils;
  }, items);
  const intl = hasAccess(1115).intl;
  if (hasAccess) {
    let ojM1xJ = _modDef3237["8FO0y9"];
  } else {
    ojM1xJ = tmp(1115).t.ojM1xJ;
  }
  obj2.label = intl.string(ojM1xJ);
  let stringResult;
  if (hasAccess) {
    const intl2 = tmp(1115).intl;
    stringResult = intl2.string(_modDef3237.FaHxWl);
  }
  obj2.subLabel = stringResult;
  obj2.perform = callback;
  return obj2;
};