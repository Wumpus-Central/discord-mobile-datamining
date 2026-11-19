// === Module 17705: useFavoritesGuildHideAction ===

// Module 17705 (useFavoritesGuildHideAction)
import router_utils from "router_utils" /* 1099 */;
import util from "util" /* 1113 */;
import _modDef3701 from "module_3701" /* 3701 */;
import FavoritesUtils from "FavoritesUtils" /* 4666 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11157 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4825 */;

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
  obj.label = intl.string(_modDef3701["8FO0y9"]);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(_modDef3701.FaHxWl);
  obj.perform = callback;
  return obj;
};