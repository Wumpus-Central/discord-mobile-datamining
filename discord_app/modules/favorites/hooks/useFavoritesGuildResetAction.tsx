// === Module 17808: useFavoritesGuildResetAction ===

// Module 17808 (useFavoritesGuildResetAction)
import router_utils from "router_utils" /* 1098 */;
import util from "util" /* 1112 */;
import _modDef3856 from "module_3856" /* 3856 */;
import UserSettings from "UserSettings" /* 4837 */;
import FavoritesUtils from "FavoritesUtils" /* 4886 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10696 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;

require = fn;
const Routes = fn(1071).Routes;
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
  obj.label = intl.string(_modDef3856.YkET6R);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(_modDef3856.ZzcwNk);
  obj.perform = callback;
  return obj;
};