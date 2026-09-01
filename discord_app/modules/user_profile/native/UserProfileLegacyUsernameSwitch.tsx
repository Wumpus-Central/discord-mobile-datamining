// discord_app/modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx");

export default function UserProfileLegacyUsernameSwitch(pendingLegacyUsernameDisabled) {
  pendingLegacyUsernameDisabled = pendingLegacyUsernameDisabled.pendingLegacyUsernameDisabled;
  let setting;
  const LegacyUsernameDisabled = setting(4166).LegacyUsernameDisabled;
  setting = LegacyUsernameDisabled.useSetting();
  let tmp4 = setting;
  if (undefined !== pendingLegacyUsernameDisabled) {
    tmp4 = pendingLegacyUsernameDisabled;
  }
  let obj = { value: !tmp4, label: null, subLabel: null, accessibilityLabel: null, onValueChange: null };
  const intl = tmp(1236).intl;
  obj[1] = intl.string(setting(1236).t["3cWDuO"]);
  const intl2 = tmp(1236).intl;
  if (tmp4) {
    let stringResult = intl2.string(tmp(1236).t.eD6Yq0);
  } else {
    obj = { username: null };
    obj[0] = pendingLegacyUsernameDisabled.legacyUsername;
    stringResult = intl2.formatToPlainString(tmp(1236).t.aYhclf, obj);
  }
  obj[2] = stringResult;
  const intl3 = tmp(1236).intl;
  obj[3] = intl3.string(setting(1236).t["3cWDuO"]);
  obj[4] = function onValueChange(arg0) {
    if (!arg0 === setting) {
      const result = setting(closure_1_1[5]).resetPendingLegacyUsernameDisabled();
      const obj3 = setting(closure_1_1[5]);
    } else {
      let obj = setting(closure_1_1[6]);
      obj = { legacyUsernameDisabled: null };
      obj[0] = !arg0;
      obj.setPendingChanges(obj);
    }
  };
  return jsx(setting(14272).UserProfileEditFormSwitch, {
    value: !tmp4,
    label: null,
    subLabel: null,
    accessibilityLabel: null,
    onValueChange: null,
  });
}
