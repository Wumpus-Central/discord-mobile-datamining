// discord_app/modules/user_settings/defs/native/AccountSmsBackupSetting.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import PhoneConstants from "../../../phone/PhoneConstants.tsx";
import PhoneActionCreators from "../../../phone/PhoneActionCreators.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingsAccountUtils from "../../account/native/SettingsAccountUtils.tsx";
import MFAActionCreatorsDefault from "../../../../actions/MFAActionCreators.tsx";
import account_MFAUtils from "../../account/MFAUtils.tsx";
import showUserSettingsInputAlertDefault from "../../account/native/showUserSettingsInputAlert.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import 00012__ from "../../../../../_runtime/metro/00012__.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserFlags = Constants.UserFlags;
let closure_5 = PhoneConstants.PHONE_VERIFICATION_MODAL_KEY;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let tmp8 = null;
  if (null != stateFromStores) {
    let tmp9;
    if (cResult[2] !== stateFromStores) {
      const tmpResult2 = account_MFAUtils;
      const sMSBackupDisabledMessage = tmpResult2.getSMSBackupDisabledMessage(stateFromStores);
      cResult[2] = stateFromStores;
      cResult[3] = sMSBackupDisabledMessage;
      tmp9 = sMSBackupDisabledMessage;
    } else {
      tmp9 = cResult[3];
    }
    tmp8 = tmp9;
  }
  return tmp8;
}) : (() => {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let sMSBackupDisabledMessage = null;
  if (null != stateFromStores) {
    const tmpResult = account_MFAUtils;
    sMSBackupDisabledMessage = tmpResult.getSMSBackupDisabledMessage(stateFromStores);
  }
  return sMSBackupDisabledMessage;
});
let closure_6 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let tmp4;
  let tmp5;
  let tmp7;
  const obj = react;
  const cResult = obj.c(4);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
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
    tmp7 = flag;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (() => {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.hasFlag(UserFlags.MFA_SMS);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
});
let fn = () => null != closure_6();
let closure_7 = module_12.debounce(function toggleSMS(user) {
  let formatted1;
  user = user.user;
  if (user.mfaSMSEnabled) {
    const intl2 = intl4.intl;
    const str2 = intl2.string(intl4.t["CIGa+7"]);
    const formatted = str2.toUpperCase();
    const intl3 = intl4.intl;
    const obj3 = { onSubmit: MFAActionCreatorsDefault.disableSMS, title: formatted1, placeholder: formatted, closeOnSuccess: true };
    const str3 = intl3.string(intl4.t.wlfmlR);
    formatted1 = str3.toUpperCase();
    showUserSettingsInputAlertDefault(obj3);
  } else {
    let tmp = null;
    if (null != user) {
      if (null != user.phone) {
        const intl = intl4.intl;
        const str = intl.string(intl4.t.DZQe23);
        const formatted2 = str.toUpperCase();
        const obj4 = { title: formatted2 };
        const obj2 = actions_AlertActionCreatorsDefault;
        const confirmResult = obj2.confirm(obj4);
        confirmResult.then((result) => {
          const tmp = result;
          if (tmp) {
            const obj = MFAActionCreatorsDefault;
            obj.enableSMS();
          }
        });
      }
    }
    const pushLazy = ModalActionCreatorsDefault.pushLazy;
    let obj = { reason: PhoneActionCreators.ChangePhoneReason.USER_SETTINGS_UPDATE };
    ModalActionCreatorsDefault;
    const tmp6 = asyncRequire(6546, dependencyMap.paths);
    pushLazy(tmp6, obj, closure_5);
  }
}, 200);
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.uHAJ5v);
  },
  parent: MobileUserSettings.ACCOUNT,
  useIsDisabled: fn,
  useValue: tmp4,
  onValueChange: function onAccountSMSBackupSettingTogglePress(arg0) {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      const obj = { mfaSMSEnabled: !arg0, user: currentUser };
      closure_7(obj);
    }
  },
  useDescription: tmp2,
  usePredicate: SettingsAccountUtils.useIsTOTPEnabled
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AccountSmsBackupSetting.tsx");

export default toggle;