// === Module 7653: UserVerification ===

// Module 7653 (UserVerification)
import noopAll from "noop" /* 19 */;
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE" /* 4272 */;
import Text from "Text" /* 4444 */;
import BaseIdentityVerificationFieldDefault from "BaseIdentityVerificationField" /* 7654 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
noopAll;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ emailPhoneNote: { marginTop: 8, marginBottom: 12 } });
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/UserVerification.tsx");

export default function UserVerification(arg0) {
  ({ verification, field } = arg0);
  if (null == field.platform) {
    return null;
  } else {
    const platform = field.platform;
    let tmp5 = platform === MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.PHONE;
    if (tmp5) {
      let obj = { passesVerification: null, platform: null };
      obj[0] = verification[tmp12(undefined, 4272).UserVerificationFieldPlatforms.PHONE];
      obj[1] = tmp12(4272).UserVerificationFieldPlatforms.PHONE;
      tmp5 = callback(BaseIdentityVerificationFieldDefault, obj);
      const tmp4 = BaseIdentityVerificationFieldDefault;
    }
    const items = [tmp5, , ];
    obj = { passesVerification: null, platform: null };
    obj[0] = verification[MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.EMAIL];
    obj[1] = MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.EMAIL;
    items[1] = callback(BaseIdentityVerificationFieldDefault, obj);
    obj = { style: null, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
    obj[0] = tmp.emailPhoneNote;
    if (platform === MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.PHONE) {
      const intl2 = tmp12(1236).intl;
      let stringResult = intl2.string(tmp12(1236).t["jMh+TY"]);
    } else {
      const intl = tmp12(1236).intl;
      stringResult = intl.string(tmp12(1236).t.Vgv9ip);
    }
    obj1 = { children: null };
    obj[3] = stringResult;
    items[2] = callback(Text.Text, obj);
    obj1[0] = items;
    return closure_5(closure_4, obj1);
  }
};