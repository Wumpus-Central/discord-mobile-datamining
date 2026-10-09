// discord_app/modules/user_settings/defs/native/AccountPhoneSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02000_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import PhoneActionCreators from "../../../phone/PhoneActionCreators.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
let closure_4 = fn(6730).PHONE_VERIFICATION_MODAL_KEY;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAccountPhoneSettingTrailing() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function o() {
          currentUser = currentUser.getCurrentUser();
          let phone;
          if (currentUser != null) {
            phone = currentUser.phone;
          }
          return phone;
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
  : function useAccountPhoneSettingTrailing() {
      const items = [UserStore];
      return initialize.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let phone;
        if (currentUser != null) {
          phone = currentUser.phone;
        }
        return phone;
      });
    };
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dEYpSt);
  },
  parent: fn(7974).MobileUserSettings.ACCOUNT,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? function useAccountPhoneSettingTrailing() {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          const fn = function o() {
            currentUser = currentUser.getCurrentUser();
            let phone;
            if (currentUser != null) {
              phone = currentUser.phone;
            }
            return phone;
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
    : function useAccountPhoneSettingTrailing() {
        const items = [UserStore];
        return initialize.useStateFromStores(items, () => {
          currentUser = currentUser.getCurrentUser();
          let phone;
          if (currentUser != null) {
            phone = currentUser.phone;
          }
          return phone;
        });
      },
  onPress: function onAccountPhoneSettingPress() {
    const obj2 = { allowDeletePhone: true, reason: null };
    const obj = ModalActionCreatorsDefault;
    obj2.reason = PhoneActionCreators.ChangePhoneReason.USER_SETTINGS_UPDATE;
    obj.pushLazy(asyncRequireImpl(6729, dependencyMap.paths), obj2, closure_4);
  },
  withArrow: true,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default pressable;
