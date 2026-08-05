// discord_app/modules/user_settings/defs/native/AccountViewBackupCodesSetting.tsx
import noop from "noop";
import ME from "ME";
import createToggle from "createToggle";

let UserSettingsSections;
let c4;
const require = arg1;
({ NOOP_NULL: c4, UserSettingsSections } = ME);
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.xZEzbu);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  usePredicate: require("useIs2FAEnabled").useIs2FAEnabled,
  usePreNavigationAction: function useOnViewBackups() {
    return React.useCallback((arg0) => {
      const callback = arg0;
      let obj = {
        onSubmit(password) {
          const result = outer1_1(outer1_2[3]).sendMFABackupCodesVerificationKeyEmail(password);
          return result.then(() => {
            const obj = {
              onSubmit(verificationKey) {
                return callback(table[3]).confirmViewBackupCodes(verificationKey, false);
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
            const intl = outer1_0(outer1_2[4]).intl;
            obj[1] = intl.string(outer1_0(outer1_2[4]).t["mGppp/"]);
            const intl2 = outer1_0(outer1_2[4]).intl;
            obj[2] = intl2.string(outer1_0(outer1_2[4]).t["37S9yU"]);
            const intl3 = outer1_0(outer1_2[4]).intl;
            obj[3] = intl3.string(outer1_0(outer1_2[4]).t.TjGb4Q);
            obj[5] = closure_0;
            const intl4 = outer1_0(outer1_2[4]).intl;
            obj[7] = intl4.string(outer1_0(outer1_2[4]).t.geKm7t);
            obj[8] = outer1_0(outer1_2[5]).ButtonColors.BRAND;
            outer1_1(outer1_2[6])(obj);
          });
        },
        onSuccess: closure_4,
        title: null,
        inputLabel: null,
        closeOnSuccess: false,
        actionText: null,
        confirmColor: null,
        useKeyboardAwareWrapper: true
      };
      let intl = callback(1236).intl;
      obj[2] = intl.string(callback(1236).t.PsQmzU);
      let intl2 = callback(1236).intl;
      obj[3] = intl2.string(callback(1236).t["CIGa+7"]);
      let intl3 = callback(1236).intl;
      obj[5] = intl3.string(callback(1236).t.PDTjLN);
      obj[6] = callback(1297).ButtonColors.BRAND;
      callback2(13946)(obj);
      return false;
    }, []);
  },
  screen: createToggle
};
createToggle = {
  route: UserSettingsSections.ACCOUNT_CONFIRM_VIEW_BACKUP_CODES,
  getComponent() {
    return require(13893) /* CodeRow */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
let result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountViewBackupCodesSetting.tsx");

export default createToggle;