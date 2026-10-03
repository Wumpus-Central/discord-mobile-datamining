// === Module 14520: AccountPhoneSetting ===

// Module 14520 (AccountPhoneSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import PhoneActionCreators from "PhoneActionCreators" /* 6542 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
let closure_4 = fn(6540).PHONE_VERIFICATION_MODAL_KEY;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      currentUser = currentUser.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      return phone;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
});
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dEYpSt);
  },
  parent: fn(7634).MobileUserSettings.ACCOUNT,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UserStore];
      const fn = function s() {
        currentUser = currentUser.getCurrentUser();
        let phone;
        if (currentUser != null) {
          phone = currentUser.phone;
        }
        return phone;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (() => {
    const items = [UserStore];
    return initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      return phone;
    });
  }),
  onPress: function onAccountPhoneSettingPress() {
    const obj2 = { allowDeletePhone: true, reason: null };
    const obj = ModalActionCreatorsDefault;
    obj2.reason = PhoneActionCreators.ChangePhoneReason.USER_SETTINGS_UPDATE;
    obj.pushLazy(asyncRequireImpl(6539, dependencyMap.paths), obj2, closure_4);
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default pressable;