// discord_app/modules/user_settings/defs/native/AccountRemove2faSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import obj132Default from "../../../../actions/AlertActionCreators.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import useIs2FAEnabled from "../../account/native/SettingsAccountUtils.tsx";
import getSMSBackupDisabledMessage from "../../account/MFAUtils.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["D+aE7g"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  onPress: function remove2FA() {
    const obj = { title: null, body: null, cancelText: null, onConfirm: null };
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
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AccountRemove2faSetting.tsx");

export default pressable;