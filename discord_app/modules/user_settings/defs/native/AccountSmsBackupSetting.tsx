// === Module 14601: AccountSmsBackupSetting ===

// Module 14601 (AccountSmsBackupSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import PhoneActionCreators from "PhoneActionCreators" /* 6549 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14591 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 14598 */;
import UserStore from "UserStore" /* 1377 */;

const initialize = obj(504);
const account_MFAUtils = obj(14596);
require = fn;
const UserFlags = fn(1085).UserFlags;
let closure_5 = fn(6547).PHONE_VERIFICATION_MODAL_KEY;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let obj = require;
  let sMSBackupDisabledMessage = dependencyMap;
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
  if (null == stateFromStores) {
    return null;
  } else if (cResult[2] !== stateFromStores) {
    obj = account_MFAUtils;
    sMSBackupDisabledMessage = obj.getSMSBackupDisabledMessage(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = sMSBackupDisabledMessage;
  }
  const objResult = initialize;
}) : (() => {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let sMSBackupDisabledMessage = null;
  if (null != stateFromStores) {
    sMSBackupDisabledMessage = account_MFAUtils.getSMSBackupDisabledMessage(stateFromStores);
    const tmpResult = account_MFAUtils;
  }
  return sMSBackupDisabledMessage;
});
let closure_6 = tmp2;
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
fn = () => null != closure_6();
const apply = fn(12);
let closure_7 = apply.debounce(function toggleSMS(user) {
  user = user.user;
  if (user.mfaSMSEnabled) {
    const intl2 = util.intl;
    const formatted = intl2.string(util.t["CIGa+7"]).toUpperCase();
    const intl3 = util.intl;
    const str2 = intl2.string(util.t["CIGa+7"]);
    const obj2 = { onSubmit: null, title: null, placeholder: null, closeOnSuccess: true };
    const formatted1 = intl3.string(util.t.wlfmlR).toUpperCase();
    obj2.onSubmit = MFAActionCreatorsDefault.disableSMS;
    obj2.title = formatted1;
    obj2.placeholder = formatted;
    showUserSettingsInputAlertDefault(obj2);
    const str3 = intl3.string(util.t.wlfmlR);
  } else {
    if (null != user) {
      if (null != user.phone) {
        const intl = util.intl;
        const formatted2 = intl.string(util.t.DZQe23).toUpperCase();
        const str = intl.string(util.t.DZQe23);
        const obj4 = { title: formatted2 };
        actions_AlertActionCreatorsDefault.confirm(obj4).then((result) => {
          if (result) {
            MFAActionCreatorsDefault.enableSMS();
          }
        });
        const confirmResult = actions_AlertActionCreatorsDefault.confirm(obj4);
      }
    }
    const obj5 = { reason: null };
    let obj = ModalActionCreatorsDefault;
    obj5.reason = PhoneActionCreators.ChangePhoneReason.USER_SETTINGS_UPDATE;
    obj.pushLazy(asyncRequireImpl(6546, dependencyMap.paths), obj5, closure_5);
    const tmp5 = asyncRequireImpl(6546, dependencyMap.paths);
  }
}, 200);
const SettingBuilders = fn(11142);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    let flag;
    if (stateFromStores != null) {
      flag = stateFromStores.hasFlag(UserFlags.MFA_SMS);
    }
    if (flag == null) {
      flag = false;
    }
    cResult[2] = stateFromStores;
    cResult[3] = flag;
    let tmp7 = flag;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (() => {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.hasFlag(UserFlags.MFA_SMS);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uHAJ5v);
  },
  parent: fn(7645).MobileUserSettings.ACCOUNT,
  useIsDisabled: fn,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(4);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UserStore];
      const fn = function l() {
        return currentUser.getCurrentUser();
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
    if (cResult[2] !== stateFromStores) {
      let flag;
      if (stateFromStores != null) {
        flag = stateFromStores.hasFlag(UserFlags.MFA_SMS);
      }
      if (flag == null) {
        flag = false;
      }
      cResult[2] = stateFromStores;
      cResult[3] = flag;
      let tmp7 = flag;
    } else {
      tmp7 = cResult[3];
    }
    return tmp7;
  }) : (() => {
    const items = [UserStore];
    const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    let flag;
    if (stateFromStores != null) {
      flag = stateFromStores.hasFlag(UserFlags.MFA_SMS);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }),
  onValueChange: function onAccountSMSBackupSettingTogglePress(arg0) {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      const obj = { mfaSMSEnabled: !arg0, user: currentUser };
      closure_7(obj);
    }
  },
  useDescription: tmp2,
  usePredicate: fn(14510).useIsTOTPEnabled
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AccountSmsBackupSetting.tsx");

export default toggle;