// === Module 17872: useFavoritesGuildResetAction ===

// Module 17872 (useFavoritesGuildResetAction)
import router_utils from "router_utils" /* 1098 */;
import util from "util" /* 1112 */;
import _modDef3857 from "module_3857" /* 3857 */;
import UserSettings from "UserSettings" /* 4868 */;
import FavoritesUtils from "FavoritesUtils" /* 4917 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10742 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5076 */;

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
  obj.label = intl.string(_modDef3857.YkET6R);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(_modDef3857.ZzcwNk);
  obj.perform = callback;
  return obj;
};