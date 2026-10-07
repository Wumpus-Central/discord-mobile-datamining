// discord_app/modules/verification/ChangeEmailUtils.tsx
import util from "../../intl/index.native.tsx";
import VerificationConstants from "VerificationConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const result = size.fileFinishedImporting("modules/verification/ChangeEmailUtils.tsx");

export const getChangeEmailReasonDisplayText = function getChangeEmailReasonDisplayText(value) {
  return dependencyMap[value]();
};
