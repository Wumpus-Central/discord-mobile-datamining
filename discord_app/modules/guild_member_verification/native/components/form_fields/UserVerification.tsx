// discord_app/modules/guild_member_verification/native/components/form_fields/UserVerification.tsx
import MemberVerificationTypes from "../../../MemberVerificationTypes.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import IdentityVerificationFieldDefault from "IdentityVerificationField.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ emailPhoneNote: { marginTop: 8, marginBottom: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/UserVerification.tsx",
);

export default function UserVerification(arg0) {
  ({ verification, field } = arg0);
  if (null == field.platform) {
    return null;
  } else {
    const platform = field.platform;
    let tmp5 = platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE;
    if (tmp5) {
      let obj = {
        passesVerification: verification[tmp12(undefined, 4384).UserVerificationFieldPlatforms.PHONE],
        platform: tmp12(4384).UserVerificationFieldPlatforms.PHONE,
      };
      tmp5 = React3(IdentityVerificationFieldDefault, obj);
    }
    const items = [tmp5, ,];
    obj = {
      passesVerification: verification[MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL],
      platform: MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL,
    };
    items[1] = React3(IdentityVerificationFieldDefault, obj);
    obj = { style: tmp.emailPhoneNote, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
    if (platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE) {
      const intl2 = tmp12(1114).intl;
      let stringResult = intl2.string(tmp12(1114).t["jMh+TY"]);
    } else {
      const intl = tmp12(1114).intl;
      stringResult = intl.string(tmp12(1114).t.Vgv9ip);
    }
    const obj1 = { children: null };
    obj.children = stringResult;
    items[2] = React3(Text_Text.Text, obj);
    obj1.children = items;
    return hasOwnProperty(React4, obj1);
  }
}
