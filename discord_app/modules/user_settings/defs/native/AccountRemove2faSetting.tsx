// === Module 14533: AccountRemove2faSetting ===

// Module 14533 (AccountRemove2faSetting)
import util from "util" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5399 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14448 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 14449 */;
import account_MFAUtils from "account/MFAUtils" /* 14534 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["D+aE7g"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  onPress: function remove2FA() {
    const obj2 = { title: null, body: null, cancelText: null, onConfirm: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t["D+aE7g"]);
    const intl2 = util.intl;
    obj2.body = intl2.string(util.t.EA4ZEk);
    const intl3 = util.intl;
    obj2.cancelText = intl3.string(util.t["ETE/oC"]);
    obj2.onConfirm = function onConfirm() {
      return MFAActionCreatorsDefault.disable();
    };
    AlertActionCreatorsDefault.show(obj2);
  },
  useIsDisabled() {
    return null !== account_MFAUtils.use2FARemoveDisableReason();
  },
  useDescription: account_MFAUtils.use2FARemoveDisableReason,
  usePredicate: SettingsAccountUtils.useIsTOTPEnabled
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountRemove2faSetting.tsx");

export default pressable;