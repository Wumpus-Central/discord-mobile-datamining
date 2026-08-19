// === Module 8559: UserVerification ===

// Module 8559 (UserVerification)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE" /* 4200 */;
import Text from "Text" /* 4734 */;
import BaseIdentityVerificationFieldDefault from "BaseIdentityVerificationField" /* 8560 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ emailPhoneNote: { marginTop: 8, marginBottom: 12 } });
const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/UserVerification.tsx");

export default function UserVerification(arg0) {
  ({ verification, field } = arg0);
  if (null == field.platform) {
    return null;
  } else {
    const platform = field.platform;
    let tmp5 = platform === MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.PHONE;
    if (tmp5) {
      let obj = { passesVerification: null, platform: null };
      obj[0] = verification[MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.PHONE];
      obj[1] = MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.PHONE;
      tmp5 = callback(BaseIdentityVerificationFieldDefault, obj);
    }
    const items = [tmp5, , ];
    obj = { passesVerification: null, platform: null };
    obj[0] = verification[MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.EMAIL];
    obj[1] = MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.EMAIL;
    items[1] = callback(BaseIdentityVerificationFieldDefault, obj);
    obj = { style: null, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
    obj[0] = tmp.emailPhoneNote;
    if (platform === MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.PHONE) {
      const intl2 = getSystemLocale.intl;
      let stringResult = intl2.string(getSystemLocale.t["jMh+TY"]);
    } else {
      const intl = getSystemLocale.intl;
      stringResult = intl.string(getSystemLocale.t.Vgv9ip);
    }
    obj1 = { children: null };
    obj[3] = stringResult;
    items[2] = callback(Text.Text, obj);
    obj1[0] = items;
    return callback(closure_4, obj1);
  }
};