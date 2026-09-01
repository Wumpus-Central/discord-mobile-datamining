// === Module 14401: route ===

// Module 14401 (route)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_3 from "noop" /* 19 */;
import ME from "ME" /* 676 */;
import createToggle from "createToggle" /* 11068 */;

require = arg1;
({ NOOP_NULL: c4, UserSettingsSections } = ME);
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.xZEzbu);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  usePredicate: require("useIs2FAEnabled").useIs2FAEnabled,
  usePreNavigationAction: function useOnViewBackups() {
    return React.useCallback((arg0) => {
      const callback = arg0;
      let obj = {
        onSubmit(password) {
          const result = closure_1_1(closure_1_2[3]).sendMFABackupCodesVerificationKeyEmail(password);
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
            const intl = closure_1_0(closure_1_2[4]).intl;
            obj[1] = intl.string(closure_1_0(closure_1_2[4]).t["mGppp/"]);
            const intl2 = closure_1_0(closure_1_2[4]).intl;
            obj[2] = intl2.string(closure_1_0(closure_1_2[4]).t["37S9yU"]);
            const intl3 = closure_1_0(closure_1_2[4]).intl;
            obj[3] = intl3.string(closure_1_0(closure_1_2[4]).t.TjGb4Q);
            obj[5] = closure_0;
            const intl4 = closure_1_0(closure_1_2[4]).intl;
            obj[7] = intl4.string(closure_1_0(closure_1_2[4]).t.geKm7t);
            obj[8] = closure_1_0(closure_1_2[5]).ButtonColors.BRAND;
            closure_1_1(closure_1_2[6])(obj);
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
      callback2(14402)(obj);
      return false;
    }, []);
  },
  screen: createToggle
};
createToggle = {
  route: UserSettingsSections.ACCOUNT_CONFIRM_VIEW_BACKUP_CODES,
  getComponent() {
    return require(14334) /* CodeRow */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountViewBackupCodesSetting.tsx");

export default createToggle;