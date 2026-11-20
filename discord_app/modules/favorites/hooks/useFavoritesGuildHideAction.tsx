// === Module 17532: useFavoritesGuildHideAction ===

// Module 17532 (useFavoritesGuildHideAction)
import router_utils from "router_utils" /* 1098 */;
import util from "util" /* 1112 */;
import _modDef3703 from "module_3703" /* 3703 */;
import FavoritesUtils from "FavoritesUtils" /* 4668 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11099 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4827 */;

require = fn;
const Routes = fn(1071).Routes;
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
  obj.label = intl.string(_modDef3703["8FO0y9"]);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(_modDef3703.FaHxWl);
  obj.perform = callback;
  return obj;
};