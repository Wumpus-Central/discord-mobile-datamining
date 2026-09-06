// === Module 14798: AccountSmsBackupSetting ===

// Module 14798 (AccountSmsBackupSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import PhoneActionCreators from "PhoneActionCreators" /* 7045 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14680 */;
import account_MFAUtils from "account/MFAUtils" /* 14794 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 14796 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const UserFlags = fn(1074).UserFlags;
let closure_5 = fn(7043).PHONE_VERIFICATION_MODAL_KEY;
let apply = fn(12);
let closure_6 = apply.debounce(function toggleSMS(user) {
  user = user.user;
  if (user.mfaSMSEnabled) {
    const intl2 = util.intl;
    const formatted = intl2.string(util.t["CIGa+7"]).toUpperCase();
    const intl3 = util.intl;
    const str2 = intl2.string(util.t["CIGa+7"]);
    let obj = { onSubmit: null, title: null, placeholder: null, closeOnSuccess: true };
    const formatted1 = intl3.string(util.t.wlfmlR).toUpperCase();
    obj.onSubmit = MFAActionCreatorsDefault.disableSMS;
    obj.title = formatted1;
    obj.placeholder = formatted;
    showUserSettingsInputAlertDefault(obj);
    const str3 = intl3.string(util.t.wlfmlR);
  } else {
    if (null != user) {
      if (null != user.phone) {
        const intl = util.intl;
        const formatted2 = intl.string(util.t.DZQe23).toUpperCase();
        const str = intl.string(util.t.DZQe23);
        obj = { title: formatted2 };
        actions_AlertActionCreatorsDefault.confirm(obj).then((result) => {
          if (result) {
            MFAActionCreatorsDefault.enableSMS();
          }
        });
        const confirmResult = actions_AlertActionCreatorsDefault.confirm(obj);
      }
    }
    obj = ModalActionCreatorsDefault;
    const obj1 = { reason: PhoneActionCreators.ChangePhoneReason.USER_SETTINGS_UPDATE };
    obj.pushLazy(asyncRequireImpl(7042, dependencyMap.paths), obj1, closure_5);
    const tmp5 = asyncRequireImpl(7042, dependencyMap.paths);
  }
}, 200);
const SettingBuilders = fn(11468);
apply = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uHAJ5v);
  },
  parent: fn(7975).MobileUserSettings.ACCOUNT,
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
  usePredicate: fn(14681).useIsTOTPEnabled
};
apply = SettingBuilders.createToggle(apply);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountSmsBackupSetting.tsx");

export default apply;