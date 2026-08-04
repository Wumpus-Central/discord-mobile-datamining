import mergeGuildAvatar from "mergeGuildAvatar";
import { UserFlags } from "ME";
import { PHONE_VERIFICATION_MODAL_KEY as closure_5 } from "PHONE_VERIFICATION_MODAL_KEY";
import apply from "asyncRequireImpl";
import createToggle from "createToggle";

const require = arg1;
let closure_6 = apply.debounce(function toggleSMS(user) {
  user = user.user;
  if (user.mfaSMSEnabled) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const formatted = intl2.string(require(1236) /* getSystemLocale */.t["CIGa+7"]).toUpperCase();
    const intl3 = require(1236) /* getSystemLocale */.intl;
    const str2 = intl2.string(require(1236) /* getSystemLocale */.t["CIGa+7"]);
    let obj = { onSubmit: null, title: null, placeholder: null, closeOnSuccess: true };
    const formatted1 = intl3.string(require(1236) /* getSystemLocale */.t.wlfmlR).toUpperCase();
    obj[0] = importDefault(13894).disableSMS;
    obj[1] = formatted1;
    obj[2] = formatted;
    importDefault(13946)(obj);
    const str3 = intl3.string(require(1236) /* getSystemLocale */.t.wlfmlR);
  } else {
    if (null != user) {
      if (null != user.phone) {
        const intl = require(1236) /* getSystemLocale */.intl;
        const formatted2 = intl.string(require(1236) /* getSystemLocale */.t.DZQe23).toUpperCase();
        const str = intl.string(require(1236) /* getSystemLocale */.t.DZQe23);
        obj = { title: null };
        obj[0] = formatted2;
        const obj3 = importDefault(4624);
        importDefault(4624).confirm(obj).then((arg0) => {
          if (arg0) {
            callback(table[7]).enableSMS();
            const obj = callback(table[7]);
          }
        });
        const confirmResult = importDefault(4624).confirm(obj);
      }
    }
    obj = importDefault(4490);
    const obj1 = { reason: null };
    obj1[0] = require(8330) /* ChangePhoneReason */.ChangePhoneReason.USER_SETTINGS_UPDATE;
    obj.pushLazy(require(1959) /* asyncRequireImpl */(8327, dependencyMap.paths), obj1, closure_5);
    const tmp5 = require(1959) /* asyncRequireImpl */(8327, dependencyMap.paths);
  }
}, 200);
apply = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.uHAJ5v);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useIsDisabled: function useAccountSMSBackupSettingIsDisabled() {
    const items = [mergeGuildAvatar];
    const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
    let sMSBackupDisabledMessage = null;
    if (null != stateFromStores) {
      sMSBackupDisabledMessage = require(13944) /* getSMSBackupDisabledMessage */.getSMSBackupDisabledMessage(stateFromStores);
      const tmpResult = require(13944) /* getSMSBackupDisabledMessage */;
    }
    return null != sMSBackupDisabledMessage;
  },
  useValue: function useAccountSMSBackupSettingToggleValue() {
    const items = [mergeGuildAvatar];
    const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
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
    const items = [mergeGuildAvatar];
    const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
    let sMSBackupDisabledMessage = null;
    if (null != stateFromStores) {
      sMSBackupDisabledMessage = require(13944) /* getSMSBackupDisabledMessage */.getSMSBackupDisabledMessage(stateFromStores);
      const tmpResult = require(13944) /* getSMSBackupDisabledMessage */;
    }
    return sMSBackupDisabledMessage;
  },
  usePredicate: require("useIs2FAEnabled").useIsTOTPEnabled
};
apply = createToggle.createToggle(apply);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountSmsBackupSetting.tsx");

export default apply;