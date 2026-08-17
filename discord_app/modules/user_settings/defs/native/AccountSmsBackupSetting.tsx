// discord_app/modules/user_settings/defs/native/AccountSmsBackupSetting.tsx
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef4656 from "module_4656" /* 4656 */;
import _modDef5260 from "module_5260" /* 5260 */;
import ChangePhoneReason from "ChangePhoneReason" /* 8629 */;
import _modDef14101 from "module_14101" /* 14101 */;
import getSMSBackupDisabledMessage from "getSMSBackupDisabledMessage" /* 14151 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 14153 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import { UserFlags } from "ME" /* 676 */;
import { PHONE_VERIFICATION_MODAL_KEY as closure_5 } from "PHONE_VERIFICATION_MODAL_KEY" /* 8627 */;
import apply from "apply" /* 12 */;
import createToggle from "createToggle" /* 10669 */;

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
    obj[0] = _modDef14101.disableSMS;
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
        const obj3 = _modDef4656;
        _modDef4656.confirm(obj).then((arg0) => {
          if (arg0) {
            callback(table[7]).enableSMS();
            const obj = callback(table[7]);
          }
        });
        const confirmResult = _modDef4656.confirm(obj);
      }
    }
    obj = _modDef5260;
    obj1 = { reason: null };
    obj1[0] = ChangePhoneReason.ChangePhoneReason.USER_SETTINGS_UPDATE;
    obj.pushLazy(asyncRequireImpl(8626, dependencyMap.paths), obj1, closure_5);
    const tmp5 = asyncRequireImpl(8626, dependencyMap.paths);
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