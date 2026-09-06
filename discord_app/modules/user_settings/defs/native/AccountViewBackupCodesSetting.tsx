// === Module 14795: AccountViewBackupCodesSetting ===

// Module 14795 (AccountViewBackupCodesSetting)
import util from "util" /* 1114 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14680 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ NOOP_NULL: closure_4, UserSettingsSections } = Constants);
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.xZEzbu);
  },
  parent: fn(7975).MobileUserSettings.ACCOUNT,
  usePredicate: fn(14681).useIs2FAEnabled,
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
            const intl = onSuccess(1114).intl;
            obj.title = intl.string(onSuccess(1114).t["mGppp/"]);
            const intl2 = onSuccess(1114).intl;
            obj.helpText = intl2.string(onSuccess(1114).t["37S9yU"]);
            const intl3 = onSuccess(1114).intl;
            obj.inputLabel = intl3.string(onSuccess(1114).t.TjGb4Q);
            obj.onSuccess = onSuccess;
            const intl4 = onSuccess(1114).intl;
            obj.actionText = intl4.string(onSuccess(1114).t.geKm7t);
            obj.confirmColor = onSuccess(1178).ButtonColors.BRAND;
            closure_2_1(14796)(obj);
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
      let intl = closure_0(1114).intl;
      obj.title = intl.string(closure_0(1114).t.PsQmzU);
      let intl2 = closure_0(1114).intl;
      obj.inputLabel = intl2.string(closure_0(1114).t["CIGa+7"]);
      let intl3 = closure_0(1114).intl;
      obj.actionText = intl3.string(closure_0(1114).t.PDTjLN);
      obj.confirmColor = closure_0(1178).ButtonColors.BRAND;
      closure_1(14796)(obj);
      return false;
    }, []);
  },
  screen: {
    route: UserSettingsSections.ACCOUNT_CONFIRM_VIEW_BACKUP_CODES,
    getComponent() {
      return require("UserSettingsAccountBackupCodes").default;
    }
  }
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountViewBackupCodesSetting.tsx");

export default SettingBuilders;