// === Module 15066: AccountViewBackupCodesSetting ===

// Module 15066 (AccountViewBackupCodesSetting)
import util from "util" /* 1115 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14949 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ NOOP_NULL: closure_4, UserSettingsSections } = Constants);
const SettingBuilders = fn(11723);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.xZEzbu);
  },
  parent: fn(8232).MobileUserSettings.ACCOUNT,
  usePredicate: fn(14950).useIs2FAEnabled,
  usePreNavigationAction: function useOnViewBackups() {
    return noop.useCallback((arg0) => {
      closure_0 = arg0;
      let obj = {
        onSubmit(password) {
          const result = MFAActionCreatorsDefault.sendMFABackupCodesVerificationKeyEmail(password);
          return result.then(() => {
            const obj = {
              onSubmit(verificationKey) {
                return closure_1_1(closure_1_2[3]).confirmViewBackupCodes(verificationKey, false);
              },
              title: null,
              helpText: null,
              inputLabel: null,
              closeOnSuccess: true,
              onSuccess: null,
              secureTextEntry: false,
              actionText: null,
              confirmColor: null,
              useKeyboardAwareWrapper: true
            };
            const intl = onSuccess(1115).intl;
            obj.title = intl.string(onSuccess(1115).t["mGppp/"]);
            const intl2 = onSuccess(1115).intl;
            obj.helpText = intl2.string(onSuccess(1115).t["37S9yU"]);
            const intl3 = onSuccess(1115).intl;
            obj.inputLabel = intl3.string(onSuccess(1115).t.TjGb4Q);
            obj.onSuccess = onSuccess;
            const intl4 = onSuccess(1115).intl;
            obj.actionText = intl4.string(onSuccess(1115).t.geKm7t);
            obj.confirmColor = onSuccess(1177).ButtonColors.BRAND;
            closure_2_1(15067)(obj);
          });
        },
        onSuccess,
        title: null,
        inputLabel: null,
        closeOnSuccess: false,
        actionText: null,
        confirmColor: null,
        useKeyboardAwareWrapper: true
      };
      let intl = closure_0(1115).intl;
      obj.title = intl.string(closure_0(1115).t.PsQmzU);
      let intl2 = closure_0(1115).intl;
      obj.inputLabel = intl2.string(closure_0(1115).t["CIGa+7"]);
      let intl3 = closure_0(1115).intl;
      obj.actionText = intl3.string(closure_0(1115).t.PDTjLN);
      obj.confirmColor = closure_0(1177).ButtonColors.BRAND;
      closure_1(15067)(obj);
      return false;
    }, []);
  },
  screen: {
    route: UserSettingsSections.ACCOUNT_CONFIRM_VIEW_BACKUP_CODES,
    getComponent() {
      return require("UserSettingsAccountBackupCodes").default;
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountViewBackupCodesSetting.tsx");

export default route;