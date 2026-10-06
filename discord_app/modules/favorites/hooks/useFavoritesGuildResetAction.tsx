// discord_app/modules/favorites/hooks/useFavoritesGuildResetAction.tsx
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import router_utils from "../../routing/router_utils.tsx";
import intl3 from "../../../intl/index.native.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import FavoritesUtils from "../FavoritesUtils.tsx";
import _modDef3395 from "../intl/FavoritesGuild.messages.js";
import FavoritesActionCreators from "../FavoritesActionCreators.tsx";
import FavoritesHooks from "../FavoritesHooks.tsx";
import react from "../../../../_runtime/00019_react.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
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
      const obj2 = {
        isAvailable: setting,
        label: intl.string(_modDef3395.YkET6R),
        subLabel: intl2.string(_modDef3395.ZzcwNk),
        perform: callback,
      };
      intl = intl3.intl;
      intl2 = intl3.intl;
      return obj2;
    };
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default tmp2;
