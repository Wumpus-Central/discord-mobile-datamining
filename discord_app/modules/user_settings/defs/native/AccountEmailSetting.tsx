// discord_app/modules/user_settings/defs/native/AccountEmailSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAccountEmailSettingTrailing() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
          currentUser = currentUser.getCurrentUser();
          let email;
          if (currentUser != null) {
            email = currentUser.email;
          }
          return email;
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
  : function useAccountEmailSettingTrailing() {
      const items = [UserStore];
      return initialize.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let email;
        if (currentUser != null) {
          email = currentUser.email;
        }
        return email;
      });
    };
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w/qqKK"]);
  },
  parent: fn(7974).MobileUserSettings.ACCOUNT,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? function useAccountEmailSettingTrailing() {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          const fn = function s() {
            currentUser = currentUser.getCurrentUser();
            let email;
            if (currentUser != null) {
              email = currentUser.email;
            }
            return email;
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
    : function useAccountEmailSettingTrailing() {
        const items = [UserStore];
        return initialize.useStateFromStores(items, () => {
          currentUser = currentUser.getCurrentUser();
          let email;
          if (currentUser != null) {
            email = currentUser.email;
          }
          return email;
        });
      },
  onPress: function onAccountEmailSettingPress() {
    EmailVerificationModalActionCreatorsDefault.open(true);
  },
  withArrow: true,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEmailSetting.tsx");

export default pressable;
