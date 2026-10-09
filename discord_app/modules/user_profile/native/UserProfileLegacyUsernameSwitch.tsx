// === Module 14824: UserProfileLegacyUsernameSwitch ===

// Module 14824 (UserProfileLegacyUsernameSwitch)
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 6669 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8272 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileLegacyUsernameSwitch(arg0) {
  const cResult = setting(576).c(11);
  ({ legacyUsername, pendingLegacyUsernameDisabled } = arg0);
  const LegacyUsernameDisabled = setting(2041).LegacyUsernameDisabled;
  setting = LegacyUsernameDisabled.useSetting();
  let tmp5 = setting;
  if (undefined !== pendingLegacyUsernameDisabled) {
    tmp5 = pendingLegacyUsernameDisabled;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["3cWDuO"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp5) {
    if (cResult[2] === legacyUsername) {
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult1 = intl3.string(tmp(1126).t["3cWDuO"]);
        cResult[4] = stringResult1;
        let tmp11 = stringResult1;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== setting) {
        const fn = function o(arg0) {
          if (!arg0 === setting) {
            const result = UserSettingsAccountActionCreators.resetPendingLegacyUsernameDisabled();
          } else {
            const obj2 = { legacyUsernameDisabled: !arg0 };
            UserProfileSettingsActionCreators.setPendingChanges(obj2);
          }
        };
        cResult[5] = setting;
        cResult[6] = fn;
        let tmp13 = fn;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] === tmp6) {
        if (cResult[8] === tmp9) {
          if (cResult[9] === tmp13) {
            let tmp14 = cResult[10];
          }
          return tmp14;
        }
      }
      let obj2 = { value: tmp6, label: first, subLabel: cResult[3], accessibilityLabel: tmp11, onValueChange: tmp13 };
      const tmp16 = jsx(tmp(14795).UserProfileEditFormSwitch, { value: tmp6, label: first, subLabel: cResult[3], accessibilityLabel: tmp11, onValueChange: tmp13 });
      cResult[7] = tmp6;
      cResult[8] = cResult[3];
      cResult[9] = tmp13;
      cResult[10] = tmp16;
      tmp14 = tmp16;
    }
  }
  const intl2 = tmp(1126).intl;
  if (tmp5) {
    let stringResult2 = intl2.string(tmp(1126).t.eD6Yq0);
  } else {
    let obj3 = { username: legacyUsername };
    stringResult2 = intl2.formatToPlainString(tmp(1126).t.aYhclf, obj3);
  }
  cResult[1] = tmp5;
  cResult[2] = legacyUsername;
  cResult[3] = stringResult2;
  let obj = setting(576);
}) : (function UserProfileLegacyUsernameSwitch(pendingLegacyUsernameDisabled) {
  pendingLegacyUsernameDisabled = pendingLegacyUsernameDisabled.pendingLegacyUsernameDisabled;
  let setting;
  const LegacyUsernameDisabled = setting(2041).LegacyUsernameDisabled;
  setting = LegacyUsernameDisabled.useSetting();
  let tmp4 = setting;
  if (undefined !== pendingLegacyUsernameDisabled) {
    tmp4 = pendingLegacyUsernameDisabled;
  }
  let obj = { value: !tmp4, label: null, subLabel: null, accessibilityLabel: null, onValueChange: null };
  const intl = tmp(1126).intl;
  obj.label = intl.string(setting(1126).t["3cWDuO"]);
  const intl2 = tmp(1126).intl;
  if (tmp4) {
    let stringResult = intl2.string(tmp(1126).t.eD6Yq0);
  } else {
    let obj2 = { username: pendingLegacyUsernameDisabled.legacyUsername };
    stringResult = intl2.formatToPlainString(tmp(1126).t.aYhclf, obj2);
  }
  obj.subLabel = stringResult;
  const intl3 = tmp(1126).intl;
  obj.accessibilityLabel = intl3.string(setting(1126).t["3cWDuO"]);
  obj.onValueChange = function onValueChange(arg0) {
    if (!arg0 === setting) {
      const result = UserSettingsAccountActionCreators.resetPendingLegacyUsernameDisabled();
    } else {
      const obj2 = { legacyUsernameDisabled: !arg0 };
      UserProfileSettingsActionCreators.setPendingChanges(obj2);
    }
  };
  return jsx(setting(14795).UserProfileEditFormSwitch, { value: !tmp4, label: null, subLabel: null, accessibilityLabel: null, onValueChange: null });
});