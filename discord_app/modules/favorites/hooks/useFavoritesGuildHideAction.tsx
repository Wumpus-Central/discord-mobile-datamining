// === Module 17658: useFavoritesGuildHideAction ===

// Module 17658 (useFavoritesGuildHideAction)
import router_utils from "router_utils" /* 1098 */;
import util from "util" /* 1112 */;
import _modDef3802 from "module_3802" /* 3802 */;
import FavoritesUtils from "FavoritesUtils" /* 4787 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11219 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4946 */;

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
  obj.label = intl.string(_modDef3802["8FO0y9"]);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(_modDef3802.FaHxWl);
  obj.perform = callback;
  return obj;
};