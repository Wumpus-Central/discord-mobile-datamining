// === Module 5619: UserVerification ===

// Module 5619 (UserVerification)
import util from "util" /* 1114 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4384 */;
import Text_Text from "Text/Text" /* 4556 */;
import IdentityVerificationFieldDefault from "IdentityVerificationField" /* 5620 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ emailPhoneNote: { marginTop: 8, marginBottom: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/UserVerification.tsx");

export default function UserVerification(arg0) {
  ({ verification, field } = arg0);
  if (null == field.platform) {
    return null;
  } else {
    const platform = field.platform;
    let tmp5 = platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE;
    if (tmp5) {
      let obj = { passesVerification: verification[MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE], platform: MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE };
      tmp5 = React3(IdentityVerificationFieldDefault, obj);
    }
    const items = [tmp5, , ];
    obj = { passesVerification: verification[MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL], platform: MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL };
    items[1] = React3(IdentityVerificationFieldDefault, obj);
    obj = { style: tmp.emailPhoneNote, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
    if (platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["jMh+TY"]);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.Vgv9ip);
    }
    const obj1 = { children: null };
    obj.children = stringResult;
    items[2] = React3(Text_Text.Text, obj);
    obj1.children = items;
    return hasOwnProperty(React4, obj1);
  }
};