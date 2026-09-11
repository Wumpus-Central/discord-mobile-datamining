// === Module 16209: useFavoritesGuildHideAction ===

// Module 16209 (useFavoritesGuildHideAction)
import router_utils from "router_utils" /* 1100 */;
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import _modDef3236 from "module_3236" /* 3236 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10312 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4428 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  let obj = hasAccess(10313);
  hasAccess = obj.useFavoritesAccess().hasAccess;
  const items = [hasAccess];
  obj = { isPreview: !hasAccess, label: null, subLabel: null, perform: null };
  const callback = noop.useCallback(() => {
    if (hasAccess) {
      const result = FavoritesActionCreators.setFavoritesGuildVisibility(false, "server_context_menu");
    }
    if (obj2.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
      router_utils.transitionTo(Routes.ME);
    }
    obj2 = FavoritesUtils;
  }, items);
  const intl = hasAccess(1114).intl;
  if (hasAccess) {
    let ojM1xJ = _modDef3236["8FO0y9"];
  } else {
    ojM1xJ = tmp(1114).t.ojM1xJ;
  }
  obj.label = intl.string(ojM1xJ);
  let stringResult;
  if (hasAccess) {
    const intl2 = tmp(1114).intl;
    stringResult = intl2.string(_modDef3236.FaHxWl);
  }
  obj.subLabel = stringResult;
  obj.perform = callback;
  return obj;
};