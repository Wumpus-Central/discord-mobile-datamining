// discord_app/modules/verification/ChangeEmailUtils.tsx
import { ChangeEmailReasons } from "ChangeEmailReasons";

let closure_2 = {
  [ChangeEmailReasons.DISCORD_EMPLOYEE_ASKED_ME_TO]: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.naBTFO);
  },
  [ChangeEmailReasons.SOMEONE_ASKED_ME_TO]: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.LQ0RUP);
  },
  [ChangeEmailReasons.NEW_EMAIL]: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.oOqQjw);
  },
  [ChangeEmailReasons.SOMETHING_ELSE]: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.p38n1b);
  }
};
const result = require("set").fileFinishedImporting("modules/verification/ChangeEmailUtils.tsx");

export const getChangeEmailReasonDisplayText = function getChangeEmailReasonDisplayText(arg0) {
  return dependencyMap[arg0]();
};