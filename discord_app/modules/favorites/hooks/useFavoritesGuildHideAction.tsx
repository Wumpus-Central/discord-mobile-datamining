// discord_app/modules/favorites/hooks/useFavoritesGuildHideAction.tsx
import router_utils from "../../routing/router_utils.tsx";
import FavoritesUtils from "../FavoritesUtils.tsx";
import _modDef3322 from "../intl/FavoritesGuild.messages.js";
import FavoritesActionCreators from "../FavoritesActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  hasAccess = hasAccess(10465).useFavoritesAccess().hasAccess;
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
    let ojM1xJ = _modDef3322["8FO0y9"];
  } else {
    ojM1xJ = tmp(1115).t.ojM1xJ;
  }
  obj2.label = intl.string(ojM1xJ);
  let stringResult;
  if (hasAccess) {
    const intl2 = tmp(1115).intl;
    stringResult = intl2.string(_modDef3322.FaHxWl);
  }
  obj2.subLabel = stringResult;
  obj2.perform = callback;
  return obj2;
}
