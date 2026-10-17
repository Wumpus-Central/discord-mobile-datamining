// === Module 17265: useFavoritesGuildResetAction ===

// Module 17265 (useFavoritesGuildResetAction)
import c from "c" /* 576 */;
import router_utils from "router_utils" /* 1114 */;
import util from "util" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import FavoritesUtils from "FavoritesUtils" /* 2093 */;
import _modDef3465 from "module_3465" /* 3465 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10624 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5034 */;

require = fn;
const Routes = fn(1087).Routes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildResetAction() {
  const cResult = c.c(5);
  const DeveloperMode = UserSettings.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      if (obj.isFavoritesGuildId(guildId.getGuildId())) {
        router_utils.transitionTo(constants.ME);
        const tmpResult = router_utils;
      }
      obj = FavoritesUtils;
      FavoritesActionCreators.resetFavoritesGuild();
      const tmpResult2 = FavoritesActionCreators;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(_modDef3465.YkET6R);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(_modDef3465.ZzcwNk);
    cResult[1] = stringResult;
    cResult[2] = stringResult1;
    let tmp7 = stringResult1;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  if (cResult[3] !== setting) {
    const obj2 = { isAvailable: setting, label: tmp6, subLabel: tmp7, perform: first };
    cResult[3] = setting;
    cResult[4] = obj2;
    let tmp11 = obj2;
  } else {
    tmp11 = cResult[4];
  }
  return tmp11;
}) : (function useFavoritesGuildResetAction() {
  const DeveloperMode = UserSettings.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = { isAvailable: setting, label: null, subLabel: null, perform: null };
  const callback = noop.useCallback(() => {
    if (obj.isFavoritesGuildId(guildId.getGuildId())) {
      router_utils.transitionTo(constants.ME);
      const tmpResult = router_utils;
    }
    obj = FavoritesUtils;
    FavoritesActionCreators.resetFavoritesGuild();
    const tmpResult2 = FavoritesActionCreators;
  }, []);
  const intl = util.intl;
  obj.label = intl.string(_modDef3465.YkET6R);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(_modDef3465.ZzcwNk);
  obj.perform = callback;
  return obj;
});