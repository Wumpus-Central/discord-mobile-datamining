// discord_app/modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx");

export default function UserProfileLegacyUsernameSwitch(username) {
  const pendingLegacyUsernameDisabled = username.pendingLegacyUsernameDisabled;
  let setting;
  const LegacyUsernameDisabled = setting(4066).LegacyUsernameDisabled;
  setting = LegacyUsernameDisabled.useSetting();
  let tmp4 = setting;
  if (undefined !== pendingLegacyUsernameDisabled) {
    tmp4 = pendingLegacyUsernameDisabled;
  }
  let obj = { value: !tmp4, label: null, subLabel: null, onValueChange: null };
  const intl = tmp(1236).intl;
  obj[1] = intl.string(setting(1236).t["3cWDuO"]);
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.formatToPlainString(setting(1236).t.aYhclf, { username: username.legacyUsername });
  obj[3] = function onValueChange(arg0) {
    if (!arg0 === setting) {
      const result = setting(dependencyMap[5]).resetPendingLegacyUsernameDisabled();
      const obj3 = setting(dependencyMap[5]);
    } else {
      setting(dependencyMap[6]);
      const obj = { legacyUsernameDisabled: null };
      obj[0] = !arg0;
      obj.setPendingChanges(obj);
    }
  };
  return jsx(setting(14036).UserProfileEditFormSwitch, { value: !tmp4, label: null, subLabel: null, onValueChange: null });
};