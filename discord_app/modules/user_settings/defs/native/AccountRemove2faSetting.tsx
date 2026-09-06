// discord_app/modules/user_settings/defs/native/AccountRemove2faSetting.tsx
import util from "../../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import MFAActionCreatorsDefault from "../../../../actions/MFAActionCreators.tsx";
import SettingsAccountUtils from "../../account/native/SettingsAccountUtils.tsx";
import account_MFAUtils from "../../account/MFAUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  usePredicate: SettingsAccountUtils.useIsTOTPEnabled,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountRemove2faSetting.tsx");

export default pressable;
