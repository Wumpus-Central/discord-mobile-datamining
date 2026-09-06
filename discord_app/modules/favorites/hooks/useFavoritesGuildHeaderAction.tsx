// === Module 16151: useFavoritesGuildHeaderAction ===

// Module 16151 (useFavoritesGuildHeaderAction)
import router_utils from "router_utils" /* 1100 */;
import util from "util" /* 1114 */;
import _modDef3225 from "module_3225" /* 3225 */;
import FavoritesHooks from "FavoritesHooks" /* 10224 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

export default function useFavoritesGuildHeaderAction() {
  let obj = FavoritesHooks;
  const hasAccess = obj.useFavoritesAccess().hasAccess;
  obj = { isPreview: !hasAccess, label: null, exitPreview: null };
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(constants.ME);
  }, []);
  const intl = util.intl;
  if (hasAccess) {
    let ojM1xJ = _modDef3225.G9fGlP;
  } else {
    ojM1xJ = util.t.ojM1xJ;
  }
  obj.label = intl.string(ojM1xJ);
  obj.exitPreview = callback;
  return obj;
};