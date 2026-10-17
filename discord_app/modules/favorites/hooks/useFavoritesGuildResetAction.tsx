// discord_app/modules/favorites/hooks/useFavoritesGuildResetAction.tsx
import c from "../../../../_runtime/00576_c.js";
import router_utils from "../../routing/router_utils.tsx";
import util from "../../../intl/index.native.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import FavoritesUtils from "../FavoritesUtils.tsx";
import _modDef3465 from "../intl/FavoritesGuild.messages.js";
import FavoritesActionCreators from "../FavoritesActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

require = fn;
const Routes = fn(1087).Routes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoritesGuildResetAction() {
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
    }
  : function useFavoritesGuildResetAction() {
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
    };
