// === Module 5690: ChangeEmailUtils ===

// Module 5690 (ChangeEmailUtils)
import util from "util" /* 1114 */;
import VerificationConstants from "VerificationConstants" /* 5684 */;
import size from "module_2" /* 2 */;

const ChangeEmailReasons = VerificationConstants.ChangeEmailReasons;
const dependencyMap = {
  [ChangeEmailReasons.DISCORD_EMPLOYEE_ASKED_ME_TO]: () => {
    const intl = util.intl;
    return intl.string(util.t.naBTFO);
  },
  [ChangeEmailReasons.SOMEONE_ASKED_ME_TO]: () => {
    const intl = util.intl;
    return intl.string(util.t.LQ0RUP);
  },
  [ChangeEmailReasons.NEW_EMAIL]: () => {
    const intl = util.intl;
    return intl.string(util.t.oOqQjw);
  },
  [ChangeEmailReasons.SOMETHING_ELSE]: () => {
    const intl = util.intl;
    return intl.string(util.t.p38n1b);
  }
};
const result = size.fileFinishedImporting("modules/verification/ChangeEmailUtils.tsx");

export const getChangeEmailReasonDisplayText = function getChangeEmailReasonDisplayText(value) {
  return dependencyMap[value]();
};