// === Module 17462: useFavoritesGuildHideAction ===

// Module 17462 (useFavoritesGuildHideAction)
import c from "c" /* 576 */;
import router_utils from "router_utils" /* 1114 */;
import util from "util" /* 1128 */;
import _modDef3412 from "module_3412" /* 3412 */;
import FavoritesUtils from "FavoritesUtils" /* 4846 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10809 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4995 */;

require = fn;
const Routes = fn(1087).Routes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildHideAction() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const result = FavoritesActionCreators.setFavoritesGuildVisibility(false, "server_context_menu");
      if (obj2.isFavoritesGuildId(guildId.getGuildId())) {
        router_utils.transitionTo(constants.ME);
        const tmpResult = router_utils;
      }
      obj2 = FavoritesUtils;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { label: null, subLabel: null, perform: null };
    const intl = util.intl;
    obj2.label = intl.string(_modDef3412["8FO0y9"]);
    const intl2 = util.intl;
    obj2.subLabel = intl2.string(_modDef3412.FaHxWl);
    obj2.perform = first;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useFavoritesGuildHideAction() {
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
  obj.label = intl.string(_modDef3412["8FO0y9"]);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(_modDef3412.FaHxWl);
  obj.perform = callback;
  return obj;
});