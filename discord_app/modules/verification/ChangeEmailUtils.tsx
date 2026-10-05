// discord_app/modules/verification/ChangeEmailUtils.tsx
import intl2 from "../../intl/index.native.tsx";
import VerificationConstants from "VerificationConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ChangeEmailReasons = VerificationConstants.ChangeEmailReasons;
let closure_2 = {
  [ChangeEmailReasons.DISCORD_EMPLOYEE_ASKED_ME_TO]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.naBTFO);
  },
  [ChangeEmailReasons.SOMEONE_ASKED_ME_TO]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.LQ0RUP);
  },
  [ChangeEmailReasons.NEW_EMAIL]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.oOqQjw);
  },
  [ChangeEmailReasons.SOMETHING_ELSE]: () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.p38n1b);
  },
};
const result = size.fileFinishedImporting("modules/verification/ChangeEmailUtils.tsx");

export const getChangeEmailReasonDisplayText = function getChangeEmailReasonDisplayText(value) {
  return closure_2[value]();
};
