// discord_app/modules/verification/ChangeEmailUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";
import ChangeEmailReasons2 from "VerificationConstants.tsx";

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
const result = obj132.fileFinishedImporting("modules/verification/ChangeEmailUtils.tsx");

export const getChangeEmailReasonDisplayText = function getChangeEmailReasonDisplayText(item) {
  return dependencyMap[item]();
};