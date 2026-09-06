// === Module 14798: toggle ===

// Module 14798 (toggle)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import _modDef4905 from "module_4905" /* 4905 */;
import ChangePhoneReason from "ChangePhoneReason" /* 7045 */;
import _modDef14680 from "module_14680" /* 14680 */;
import getSMSBackupDisabledMessage from "getSMSBackupDisabledMessage" /* 14794 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 14796 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;
import { UserFlags } from "ME" /* 1074 */;
import { PHONE_VERIFICATION_MODAL_KEY as closure_5 } from "PHONE_VERIFICATION_MODAL_KEY" /* 7043 */;
import apply from "apply" /* 12 */;
import createToggle from "createToggle" /* 11468 */;

require = arg1;
let closure_6 = apply.debounce(function toggleSMS(user) {
  user = user.user;
  if (user.mfaSMSEnabled) {
    const intl2 = getSystemLocale.intl;
    const formatted = intl2.string(getSystemLocale.t["CIGa+7"]).toUpperCase();
    const intl3 = getSystemLocale.intl;
    const str2 = intl2.string(getSystemLocale.t["CIGa+7"]);
    let obj = { onSubmit: null, title: null, placeholder: null, closeOnSuccess: true };
    const formatted1 = intl3.string(getSystemLocale.t.wlfmlR).toUpperCase();
    obj[0] = _modDef14680.disableSMS;
    obj[1] = formatted1;
    obj[2] = formatted;
    showUserSettingsInputAlertDefault(obj);
    const str3 = intl3.string(getSystemLocale.t.wlfmlR);
  } else {
    if (null != user) {
      if (null != user.phone) {
        const intl = getSystemLocale.intl;
        const formatted2 = intl.string(getSystemLocale.t.DZQe23).toUpperCase();
        const str = intl.string(getSystemLocale.t.DZQe23);
        obj = { title: null };
        obj[0] = formatted2;
        const obj3 = _modDef4905;
        _modDef4905.confirm(obj).then((arg0) => {
          if (arg0) {
            callback(table[7]).enableSMS();
            const obj = callback(table[7]);
          }
        });
        const confirmResult = _modDef4905.confirm(obj);
      }
    }
    obj = _modDef4763;
    obj1 = { reason: null };
    obj1[0] = ChangePhoneReason.ChangePhoneReason.USER_SETTINGS_UPDATE;
    obj.pushLazy(asyncRequireImpl(7042, dependencyMap.paths), obj1, closure_5);
    const tmp5 = asyncRequireImpl(7042, dependencyMap.paths);
  }
}, 200);
apply = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.uHAJ5v);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  useIsDisabled: function useAccountSMSBackupSettingIsDisabled() {
    const items = [closure_3];
    const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    let sMSBackupDisabledMessage = null;
    if (null != stateFromStores) {
      sMSBackupDisabledMessage = getSMSBackupDisabledMessage.getSMSBackupDisabledMessage(stateFromStores);
      const tmpResult = getSMSBackupDisabledMessage;
    }
    return null != sMSBackupDisabledMessage;
  },
  useValue: function useAccountSMSBackupSettingToggleValue() {
    const items = [closure_3];
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
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      const obj = { mfaSMSEnabled: null, user: null };
      obj[0] = !arg0;
      obj[1] = currentUser;
      callback(obj);
    }
  },
  useDescription: function useAccountSMSBackupSettingDescription() {
    const items = [closure_3];
    const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    let sMSBackupDisabledMessage = null;
    if (null != stateFromStores) {
      sMSBackupDisabledMessage = getSMSBackupDisabledMessage.getSMSBackupDisabledMessage(stateFromStores);
      const tmpResult = getSMSBackupDisabledMessage;
    }
    return sMSBackupDisabledMessage;
  },
  usePredicate: require("useIs2FAEnabled").useIsTOTPEnabled
};
apply = createToggle.createToggle(apply);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountSmsBackupSetting.tsx");

export default apply;