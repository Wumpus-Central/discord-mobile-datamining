// === Module 6005: UserVerification ===

// Module 6005 (UserVerification)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4702 */;
import Text_Text from "Text/Text" /* 4886 */;
import IdentityVerificationFieldDefault from "IdentityVerificationField" /* 6006 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({ emailPhoneNote: { marginTop: 8, marginBottom: 12 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/UserVerification.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ verification, field } = arg0);
  const tmp4 = closure_6();
  if (null == field.platform) {
    return null;
  } else {
    const platform = field.platform;
    if (cResult[0] === platform) {
      if (cResult[1] === verification) {
        let tmp5 = cResult[2];
      }
      const tmp10 = verification[MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL];
      if (cResult[3] !== tmp10) {
        const obj2 = { passesVerification: tmp10, platform: MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL };
        const tmp15 = React3(IdentityVerificationFieldDefault, obj2);
        cResult[3] = tmp10;
        cResult[4] = tmp15;
        let tmp11 = tmp15;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== platform) {
        if (platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE) {
          const intl2 = util.intl;
          let stringResult = intl2.string(util.t["jMh+TY"]);
        } else {
          const intl = util.intl;
          stringResult = intl.string(util.t.Vgv9ip);
        }
        cResult[5] = platform;
        cResult[6] = stringResult;
      } else {
        if (cResult[7] === tmp4.emailPhoneNote) {
          if (cResult[8] === tmp16) {
            let tmp19 = cResult[9];
          }
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp11) {
              if (cResult[12] === tmp19) {
                let tmp22 = cResult[13];
              }
              return tmp22;
            }
          }
          const obj3 = { children: null };
          const items = [tmp5, tmp11, tmp19];
          obj3.children = items;
          const tmp25 = hasOwnProperty(React4, obj3);
          cResult[10] = tmp5;
          cResult[11] = tmp11;
          cResult[12] = tmp19;
          cResult[13] = tmp25;
          tmp22 = tmp25;
        }
        const obj4 = { style: tmp4.emailPhoneNote, variant: "heading-deprecated-12/medium", color: "text-default", children: cResult[6] };
        const tmp21 = React3(Text_Text.Text, obj4);
        cResult[7] = tmp4.emailPhoneNote;
        cResult[8] = cResult[6];
        cResult[9] = tmp21;
        tmp19 = tmp21;
      }
    }
    let tmp6 = platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE;
    if (tmp6) {
      const obj5 = { passesVerification: verification[MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE], platform: MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE };
      tmp6 = React3(IdentityVerificationFieldDefault, obj5);
    }
    cResult[0] = platform;
    cResult[1] = verification;
    cResult[2] = tmp6;
    tmp5 = tmp6;
  }
}) : ((arg0) => {
  ({ verification, field } = arg0);
  if (null == field.platform) {
    return null;
  } else {
    const platform = field.platform;
    let tmp5 = platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE;
    if (tmp5) {
      const obj = { passesVerification: verification[MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE], platform: MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE };
      tmp5 = React3(IdentityVerificationFieldDefault, obj);
    }
    const items = [tmp5, , ];
    const obj2 = { passesVerification: verification[MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL], platform: MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL };
    items[1] = React3(IdentityVerificationFieldDefault, obj2);
    const obj3 = { style: tmp.emailPhoneNote, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
    if (platform === MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["jMh+TY"]);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.Vgv9ip);
    }
    const obj4 = { children: null };
    obj3.children = stringResult;
    items[2] = React3(Text_Text.Text, obj3);
    obj4.children = items;
    return hasOwnProperty(React4, obj4);
  }
});