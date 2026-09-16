// === Module 14757: UserProfileLegacyUsernameSwitch ===

// Module 14757 (UserProfileLegacyUsernameSwitch)
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7094 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8293 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx");

export default function UserProfileLegacyUsernameSwitch(pendingLegacyUsernameDisabled) {
  pendingLegacyUsernameDisabled = pendingLegacyUsernameDisabled.pendingLegacyUsernameDisabled;
  let setting;
  const LegacyUsernameDisabled = setting(1936).LegacyUsernameDisabled;
  setting = LegacyUsernameDisabled.useSetting();
  let tmp4 = setting;
  if (undefined !== pendingLegacyUsernameDisabled) {
    tmp4 = pendingLegacyUsernameDisabled;
  }
  let obj = { value: !tmp4, label: null, subLabel: null, accessibilityLabel: null, onValueChange: null };
  const intl = tmp(1115).intl;
  obj.label = intl.string(setting(1115).t["3cWDuO"]);
  const intl2 = tmp(1115).intl;
  if (tmp4) {
    let stringResult = intl2.string(tmp(1115).t.eD6Yq0);
  } else {
    let obj2 = { username: pendingLegacyUsernameDisabled.legacyUsername };
    stringResult = intl2.formatToPlainString(tmp(1115).t.aYhclf, obj2);
  }
  obj.subLabel = stringResult;
  const intl3 = tmp(1115).intl;
  obj.accessibilityLabel = intl3.string(setting(1115).t["3cWDuO"]);
  obj.onValueChange = function onValueChange(arg0) {
    if (!arg0 === setting) {
      const result = UserSettingsAccountActionCreators.resetPendingLegacyUsernameDisabled();
    } else {
      const obj2 = { legacyUsernameDisabled: !arg0 };
      UserProfileSettingsActionCreators.setPendingChanges(obj2);
    }
  };
  return jsx(setting(14732).UserProfileEditFormSwitch, { value: !tmp4, label: null, subLabel: null, accessibilityLabel: null, onValueChange: null });
};