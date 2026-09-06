// === Module 14793: AccountRemove2faSetting ===

// Module 14793 (AccountRemove2faSetting)
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14680 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 14681 */;
import account_MFAUtils from "account/MFAUtils" /* 14794 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["D+aE7g"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  onPress: function remove2FA() {
    const obj = { title: null, body: null, cancelText: null, onConfirm: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["D+aE7g"]);
    const intl2 = util.intl;
    obj.body = intl2.string(util.t.EA4ZEk);
    const intl3 = util.intl;
    obj.cancelText = intl3.string(util.t["ETE/oC"]);
    obj.onConfirm = function onConfirm() {
      return MFAActionCreatorsDefault.disable();
    };
    obj.show(obj);
  },
  useIsDisabled() {
    return null !== account_MFAUtils.use2FARemoveDisableReason();
  },
  useDescription: account_MFAUtils.use2FARemoveDisableReason,
  usePredicate: SettingsAccountUtils.useIsTOTPEnabled
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountRemove2faSetting.tsx");

export default pressable;