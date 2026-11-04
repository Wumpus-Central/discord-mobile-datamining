// === Module 18452: useFavoritesGuildResetAction ===

// Module 18452 (useFavoritesGuildResetAction)
import router_utils from "router_utils" /* 1099 */;
import util from "util" /* 1113 */;
import _modDef3577 from "module_3577" /* 3577 */;
import UserSettings from "UserSettings" /* 4966 */;
import FavoritesUtils from "FavoritesUtils" /* 5015 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11009 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5172 */;

require = fn;
const Routes = fn(1072).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
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
  obj.label = intl.string(_modDef3577.YkET6R);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(_modDef3577.ZzcwNk);
  obj.perform = callback;
  return obj;
};