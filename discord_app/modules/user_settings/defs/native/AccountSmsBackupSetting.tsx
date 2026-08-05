// discord_app/modules/user_settings/defs/native/AccountSmsBackupSetting.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { UserFlags } from "ME";
import { PHONE_VERIFICATION_MODAL_KEY as closure_5 } from "PHONE_VERIFICATION_MODAL_KEY";
import apply from "asyncRequireImpl";
import createToggle from "createToggle";

const require = arg1;
let closure_6 = apply.debounce(function toggleSMS(user) {
  user = user.user;
  if (user.mfaSMSEnabled) {
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const formatted = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["CIGa+7"]).toUpperCase();
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const str2 = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["CIGa+7"]);
    let obj = { onSubmit: null, title: null, placeholder: null, closeOnSuccess: true };
    const formatted1 = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.wlfmlR).toUpperCase();
    obj[0] = require("../../../../actions/MFAActionCreators.tsx").disableSMS;
    obj[1] = formatted1;
    obj[2] = formatted;
    require("../../account/native/showUserSettingsInputAlert.tsx")(obj);
    const str3 = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.wlfmlR);
  } else {
    if (null != user) {
      if (null != user.phone) {
        const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
        const formatted2 = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.DZQe23).toUpperCase();
        const str = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.DZQe23);
        obj = { title: null };
        obj[0] = formatted2;
        const obj3 = require("../../../../actions/native/AlertActionCreators.tsx");
        require("../../../../actions/native/AlertActionCreators.tsx").confirm(obj).then((arg0) => {
          if (arg0) {
            callback(table[7]).enableSMS();
            const obj = callback(table[7]);
          }
        });
        const confirmResult = require("../../../../actions/native/AlertActionCreators.tsx").confirm(obj);
      }
    }
    obj = require("../../../../actions/ModalActionCreators.tsx");
    const obj1 = { reason: null };
    obj1[0] = require("../../../phone/PhoneActionCreators.tsx") /* ChangePhoneReason */.ChangePhoneReason.USER_SETTINGS_UPDATE;
    obj.pushLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8327, dependencyMap.paths), obj1, closure_5);
    const tmp5 = require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8327, dependencyMap.paths);
  }
}, 200);
apply = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.uHAJ5v);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useIsDisabled: function useAccountSMSBackupSettingIsDisabled() {
    const items = [mergeGuildAvatar];
    const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
    let sMSBackupDisabledMessage = null;
    if (null != stateFromStores) {
      sMSBackupDisabledMessage = require("../../account/MFAUtils.tsx") /* getSMSBackupDisabledMessage */.getSMSBackupDisabledMessage(stateFromStores);
      const tmpResult = require("../../account/MFAUtils.tsx") /* getSMSBackupDisabledMessage */;
    }
    return null != sMSBackupDisabledMessage;
  },
  useValue: function useAccountSMSBackupSettingToggleValue() {
    const items = [mergeGuildAvatar];
    const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
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
    const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
    let sMSBackupDisabledMessage = null;
    if (null != stateFromStores) {
      sMSBackupDisabledMessage = require("../../account/MFAUtils.tsx") /* getSMSBackupDisabledMessage */.getSMSBackupDisabledMessage(stateFromStores);
      const tmpResult = require("../../account/MFAUtils.tsx") /* getSMSBackupDisabledMessage */;
    }
    return sMSBackupDisabledMessage;
  },
  usePredicate: require("useIs2FAEnabled").useIsTOTPEnabled
};
apply = createToggle.createToggle(apply);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountSmsBackupSetting.tsx");

export default apply;