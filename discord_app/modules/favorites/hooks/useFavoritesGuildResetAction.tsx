// === Module 15773: useFavoritesGuildResetAction ===

// Module 15773 (useFavoritesGuildResetAction)
import router_utils from "router_utils" /* 1101 */;
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import _modDef3361 from "module_3361" /* 3361 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 9684 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;

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
  obj2.label = intl.string(_modDef3361.YkET6R);
  const intl2 = util.intl;
  obj2.subLabel = intl2.string(_modDef3361.ZzcwNk);
  obj2.perform = callback;
  return obj2;
};