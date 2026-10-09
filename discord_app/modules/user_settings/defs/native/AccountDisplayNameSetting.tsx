// discord_app/modules/user_settings/defs/native/AccountDisplayNameSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAccountDisplayNameSettingTrailing() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
          currentUser = currentUser.getCurrentUser();
          let globalName;
          if (currentUser != null) {
            globalName = currentUser.globalName;
          }
          return globalName;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : function useAccountDisplayNameSettingTrailing() {
      const items = [UserStore];
      return initialize.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let globalName;
        if (currentUser != null) {
          globalName = currentUser.globalName;
        }
        return globalName;
      });
    };
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9AjdkD"]);
  },
  parent: fn(7974).MobileUserSettings.ACCOUNT,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? function useAccountDisplayNameSettingTrailing() {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          const fn = function s() {
            currentUser = currentUser.getCurrentUser();
            let globalName;
            if (currentUser != null) {
              globalName = currentUser.globalName;
            }
            return globalName;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        return initialize.useStateFromStores(tmp4, tmp5);
      }
    : function useAccountDisplayNameSettingTrailing() {
        const items = [UserStore];
        return initialize.useStateFromStores(items, () => {
          currentUser = currentUser.getCurrentUser();
          let globalName;
          if (currentUser != null) {
            globalName = currentUser.globalName;
          }
          return globalName;
        });
      },
  screen: {
    route: fn(1085).UserSettingsSections.PROFILE_CUSTOMIZATION,
    getComponent() {
      return require("ProfileCustomizationSettingScreen").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default route;
