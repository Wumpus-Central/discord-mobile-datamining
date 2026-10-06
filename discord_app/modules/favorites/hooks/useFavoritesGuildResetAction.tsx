// === Module 16104: useFavoritesGuildResetAction ===

// Module 16104 (useFavoritesGuildResetAction)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import intl3 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import _modDef3395 from "module_3395" /* 3395 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10048 */;
import FavoritesHooks from "FavoritesHooks" /* 10049 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let guildId;
  let tmp11;
  let tmp6;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(5);
  const DeveloperMode = UserSettings.DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const obj2 = FavoritesHooks;
  const hasAccess = obj2.useFavoritesAccess().hasAccess;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = FavoritesUtils;
      if (obj.isFavoritesGuildId(guildId.getGuildId())) {
        const tmpResult = router_utils;
        tmpResult.transitionTo(constants.ME);
      }
      const tmpResult2 = FavoritesActionCreators;
      tmpResult2.resetFavoritesGuild();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (setting) {
    setting = hasAccess;
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(_modDef3395.YkET6R);
    const intl2 = intl3.intl;
    const stringResult1 = intl2.string(_modDef3395.ZzcwNk);
    cResult[1] = stringResult;
    cResult[2] = stringResult1;
    tmp7 = stringResult1;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  if (cResult[3] !== setting) {
    const obj3 = { isAvailable: setting, label: tmp6, subLabel: tmp7, perform: first };
    cResult[3] = setting;
    cResult[4] = obj3;
    tmp11 = obj3;
  } else {
    tmp11 = cResult[4];
  }
  return tmp11;
}) : (() => {
  let guildId;
  let intl;
  let intl2;
  const DeveloperMode = UserSettings.DeveloperMode;
  let setting = DeveloperMode.useSetting();
  let obj = FavoritesHooks;
  const hasAccess = obj.useFavoritesAccess().hasAccess;
  const callback = react.useCallback(() => {
    const obj = FavoritesUtils;
    if (obj.isFavoritesGuildId(guildId.getGuildId())) {
      const tmpResult = router_utils;
      tmpResult.transitionTo(constants.ME);
    }
    const tmpResult2 = FavoritesActionCreators;
    tmpResult2.resetFavoritesGuild();
  }, []);
  if (setting) {
    setting = hasAccess;
  }
  const obj2 = { isAvailable: setting, label: intl.string(_modDef3395.YkET6R), subLabel: intl2.string(_modDef3395.ZzcwNk), perform: callback };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return obj2;
});
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default tmp2;