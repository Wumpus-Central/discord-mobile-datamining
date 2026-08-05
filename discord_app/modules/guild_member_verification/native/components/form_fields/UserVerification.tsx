// discord_app/modules/guild_member_verification/native/components/form_fields/UserVerification.tsx
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
const require = arg1;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ emailPhoneNote: { marginTop: 8, marginBottom: 12 } });
const result = require("createCacheKey").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/UserVerification.tsx");

export default function UserVerification(arg0) {
  let field;
  let verification;
  ({ verification, field } = arg0);
  if (null == field.platform) {
    return null;
  } else {
    const platform = field.platform;
    let tmp5 = platform === require("../../../MemberVerificationTypes.tsx") /* MAX_RESULTS_PER_PAGE */.UserVerificationFieldPlatforms.PHONE;
    if (tmp5) {
      let obj = { passesVerification: null, platform: null };
      obj[0] = verification[tmp12(undefined, 4105).UserVerificationFieldPlatforms.PHONE];
      obj[1] = tmp12(4105).UserVerificationFieldPlatforms.PHONE;
      tmp5 = callback(require("IdentityVerificationField.tsx"), obj);
      const tmp4 = require("IdentityVerificationField.tsx");
    }
    const items = [tmp5, , ];
    obj = { passesVerification: null, platform: null };
    obj[0] = verification[require(undefined, 4105) /* MAX_RESULTS_PER_PAGE */.UserVerificationFieldPlatforms.EMAIL];
    obj[1] = require("../../../MemberVerificationTypes.tsx") /* MAX_RESULTS_PER_PAGE */.UserVerificationFieldPlatforms.EMAIL;
    items[1] = callback(require("IdentityVerificationField.tsx"), obj);
    obj = { style: null, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
    obj[0] = tmp.emailPhoneNote;
    if (platform === require("../../../MemberVerificationTypes.tsx") /* MAX_RESULTS_PER_PAGE */.UserVerificationFieldPlatforms.PHONE) {
      const intl2 = tmp12(1236).intl;
      let stringResult = intl2.string(tmp12(1236).t["jMh+TY"]);
    } else {
      const intl = tmp12(1236).intl;
      stringResult = intl.string(tmp12(1236).t.Vgv9ip);
    }
    const obj1 = { children: null };
    obj[3] = stringResult;
    items[2] = callback(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
    obj1[0] = items;
    return closure_5(closure_4, obj1);
  }
};