// discord_app/modules/favorites/hooks/useFavoritesGuildHideAction.tsx
import router_utils from "../../routing/router_utils.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3450 from "../intl/FavoritesGuild.messages.js";
import FavoritesUtils from "../FavoritesUtils.tsx";
import FavoritesActionCreators from "../FavoritesActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

require = fn;
const Routes = fn(1072).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  let obj = { label: null, subLabel: null, perform: null };
  const callback = noop.useCallback(() => {
    const result = FavoritesActionCreators.setFavoritesGuildVisibility(false, "server_context_menu");
    if (obj2.isFavoritesGuildId(guildId.getGuildId())) {
      router_utils.transitionTo(constants.ME);
      const tmpResult = router_utils;
    }
    obj2 = FavoritesUtils;
  }, []);
  const intl = util.intl;
  obj.label = intl.string(_modDef3450["8FO0y9"]);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(_modDef3450.FaHxWl);
  obj.perform = callback;
  return obj;
}
