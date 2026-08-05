// discord_app/modules/verification/ChangeEmailUtils.tsx
import { ChangeEmailReasons } from "ChangeEmailReasons";

let closure_2 = {
  [ChangeEmailReasons.DISCORD_EMPLOYEE_ASKED_ME_TO]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.naBTFO);
  },
  [ChangeEmailReasons.SOMEONE_ASKED_ME_TO]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.LQ0RUP);
  },
  [ChangeEmailReasons.NEW_EMAIL]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.oOqQjw);
  },
  [ChangeEmailReasons.SOMETHING_ELSE]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.p38n1b);
  }
};
const result = require("set").fileFinishedImporting("modules/verification/ChangeEmailUtils.tsx");

export const getChangeEmailReasonDisplayText = function getChangeEmailReasonDisplayText(arg0) {
  return dependencyMap[arg0]();
};