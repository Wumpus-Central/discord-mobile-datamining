// === Module 14793: pressable ===

// Module 14793 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import setDefault from "set" /* 4904 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import useIs2FAEnabled from "useIs2FAEnabled" /* 14681 */;
import getSMSBackupDisabledMessage from "getSMSBackupDisabledMessage" /* 14794 */;
import createToggle from "createToggle" /* 11468 */;

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["D+aE7g"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  onPress: function remove2FA() {
    let obj = setDefault;
    obj = { title: null, body: null, cancelText: null, onConfirm: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["D+aE7g"]);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.EA4ZEk);
    const intl3 = getSystemLocale.intl;
    obj[2] = intl3.string(getSystemLocale.t["ETE/oC"]);
    obj[3] = function onConfirm() {
      return callback(table[4]).disable();
    };
    obj.show(obj);
  },
  useIsDisabled() {
    return null !== getSMSBackupDisabledMessage.use2FARemoveDisableReason();
  },
  useDescription: getSMSBackupDisabledMessage.use2FARemoveDisableReason,
  usePredicate: useIs2FAEnabled.useIsTOTPEnabled
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["D+aE7g"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  onPress: function remove2FA() {
    let obj = setDefault;
    obj = { title: null, body: null, cancelText: null, onConfirm: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["D+aE7g"]);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.EA4ZEk);
    const intl3 = getSystemLocale.intl;
    obj[2] = intl3.string(getSystemLocale.t["ETE/oC"]);
    obj[3] = function onConfirm() {
      return callback(table[4]).disable();
    };
    obj.show(obj);
  },
  useIsDisabled() {
    return null !== getSMSBackupDisabledMessage.use2FARemoveDisableReason();
  },
  useDescription: getSMSBackupDisabledMessage.use2FARemoveDisableReason,
  usePredicate: useIs2FAEnabled.useIsTOTPEnabled
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountRemove2faSetting.tsx");

export default pressable;