// discord_app/modules/user_settings/defs/native/AccountSmsBackupSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import PhoneActionCreators from "../../../phone/PhoneActionCreators.tsx";
import MFAActionCreatorsDefault from "../../../../actions/MFAActionCreators.tsx";
import account_MFAUtils from "../../account/MFAUtils.tsx";
import showUserSettingsInputAlertDefault from "../../account/native/showUserSettingsInputAlert.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const UserFlags = fn(1074).UserFlags;
let closure_5 = fn(7150).PHONE_VERIFICATION_MODAL_KEY;
const apply = fn(12);
let closure_6 = apply.debounce(function toggleSMS(user) {
  user = user.user;
  if (user.mfaSMSEnabled) {
    const intl2 = util.intl;
    const formatted = intl2.string(util.t["CIGa+7"]).toUpperCase();
    const intl3 = util.intl;
    const str2 = intl2.string(util.t["CIGa+7"]);
    const obj2 = { onSubmit: null, title: null, placeholder: null, closeOnSuccess: true };
    const formatted1 = intl3.string(util.t.wlfmlR).toUpperCase();
    obj2.onSubmit = MFAActionCreatorsDefault.disableSMS;
    obj2.title = formatted1;
    obj2.placeholder = formatted;
    showUserSettingsInputAlertDefault(obj2);
    const str3 = intl3.string(util.t.wlfmlR);
  } else {
    if (null != user) {
      if (null != user.phone) {
        const intl = util.intl;
        const formatted2 = intl.string(util.t.DZQe23).toUpperCase();
        const str = intl.string(util.t.DZQe23);
        const obj4 = { title: formatted2 };
        actions_AlertActionCreatorsDefault.confirm(obj4).then((result) => {
          if (result) {
            MFAActionCreatorsDefault.enableSMS();
          }
        });
        const confirmResult = actions_AlertActionCreatorsDefault.confirm(obj4);
      }
    }
    const obj5 = { reason: null };
    let obj = ModalActionCreatorsDefault;
    obj5.reason = PhoneActionCreators.ChangePhoneReason.USER_SETTINGS_UPDATE;
    obj.pushLazy(asyncRequireImpl(7149, dependencyMap.paths), obj5, closure_5);
    const tmp5 = asyncRequireImpl(7149, dependencyMap.paths);
  }
}, 200);
const SettingBuilders = fn(11606);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uHAJ5v);
  },
  parent: fn(8082).MobileUserSettings.ACCOUNT,
  useIsDisabled: function useAccountSMSBackupSettingIsDisabled() {
    const items = [UserStore];
    const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    let sMSBackupDisabledMessage = null;
    if (null != stateFromStores) {
      sMSBackupDisabledMessage = account_MFAUtils.getSMSBackupDisabledMessage(stateFromStores);
      const tmpResult = account_MFAUtils;
    }
    return null != sMSBackupDisabledMessage;
  },
  useValue: function useAccountSMSBackupSettingToggleValue() {
    const items = [UserStore];
    const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    let flag;
    if (stateFromStores != null) {
      flag = stateFromStores.hasFlag(UserFlags.MFA_SMS);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: function onAccountSMSBackupSettingTogglePress(arg0) {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      const obj = { mfaSMSEnabled: !arg0, user: currentUser };
      closure_6(obj);
    }
  },
  useDescription: function useAccountSMSBackupSettingDescription() {
    const items = [UserStore];
    const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    let sMSBackupDisabledMessage = null;
    if (null != stateFromStores) {
      sMSBackupDisabledMessage = account_MFAUtils.getSMSBackupDisabledMessage(stateFromStores);
      const tmpResult = account_MFAUtils;
    }
    return sMSBackupDisabledMessage;
  },
  usePredicate: fn(14778).useIsTOTPEnabled,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountSmsBackupSetting.tsx");

export default toggle;
