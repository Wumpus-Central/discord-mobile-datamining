// discord_app/modules/verification/ChangeEmailUtils.tsx
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ChangeEmailReasons2 from "ChangeEmailReasons" /* 8565 */;

const ChangeEmailReasons = ChangeEmailReasons2.ChangeEmailReasons;
let closure_2 = {
  [ChangeEmailReasons.DISCORD_EMPLOYEE_ASKED_ME_TO]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.naBTFO);
  },
  [ChangeEmailReasons.SOMEONE_ASKED_ME_TO]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LQ0RUP);
  },
  [ChangeEmailReasons.NEW_EMAIL]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.oOqQjw);
  },
  [ChangeEmailReasons.SOMETHING_ELSE]: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.p38n1b);
  }
};
const result = set.fileFinishedImporting("modules/verification/ChangeEmailUtils.tsx");

export const getChangeEmailReasonDisplayText = function getChangeEmailReasonDisplayText(arg0) {
  return dependencyMap[arg0]();
};