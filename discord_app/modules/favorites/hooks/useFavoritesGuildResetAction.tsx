// === Module 15745: useFavoritesGuildResetAction ===

// Module 15745 (useFavoritesGuildResetAction)
import router_utils from "router_utils" /* 1101 */;
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import FavoritesUtils from "FavoritesUtils" /* 2069 */;
import _modDef3360 from "module_3360" /* 3360 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 9673 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4652 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = UserSettings.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  const callback = noop.useCallback(() => {
    if (obj.isFavoritesGuildId(guildId.getGuildId())) {
      router_utils.transitionTo(constants.ME);
      const tmpResult = router_utils;
    }
    obj = FavoritesUtils;
    FavoritesActionCreators.resetFavoritesGuild();
    const tmpResult2 = FavoritesActionCreators;
  }, []);
  if (hasAccess) {
    hasAccess = obj.useFavoritesAccess().hasAccess;
  }
  const obj2 = { isAvailable: hasAccess, label: null, subLabel: null, perform: null };
  const intl = util.intl;
  obj2.label = intl.string(_modDef3360.YkET6R);
  const intl2 = util.intl;
  obj2.subLabel = intl2.string(_modDef3360.ZzcwNk);
  obj2.perform = callback;
  return obj2;
};