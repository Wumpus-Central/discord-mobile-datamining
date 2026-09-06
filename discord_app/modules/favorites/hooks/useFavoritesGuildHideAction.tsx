// discord_app/modules/favorites/hooks/useFavoritesGuildHideAction.tsx
import router_utils from "../../routing/router_utils.tsx";
import _modDef3225 from "../intl/FavoritesGuild.messages.js";
import FavoritesActionCreators from "../FavoritesActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  let obj = hasAccess(10224);
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
  }, items);
  const intl = hasAccess(1114).intl;
  if (hasAccess) {
    let ojM1xJ = _modDef3225["8FO0y9"];
  } else {
    ojM1xJ = tmp(1114).t.ojM1xJ;
  }
  obj.label = intl.string(ojM1xJ);
  let stringResult;
  if (hasAccess) {
    const intl2 = tmp(1114).intl;
    stringResult = intl2.string(_modDef3225.FaHxWl);
  }
  obj.subLabel = stringResult;
  obj.perform = callback;
  return obj;
}
