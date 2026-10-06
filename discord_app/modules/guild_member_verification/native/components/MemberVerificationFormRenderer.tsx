// === Module 5992: MemberVerificationFormRenderer ===

// Module 5992 (MemberVerificationFormRenderer)
import Fragment from "Fragment" /* 21 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4708 */;
import TermsFieldDefault from "TermsField" /* 5993 */;
import UserVerificationDefault from "UserVerification" /* 6012 */;
import TextInputFieldDefault from "TextInputField" /* 6585 */;
import ParagraphFieldDefault from "ParagraphField" /* 6586 */;
import MultipleChoiceFieldDefault from "MultipleChoiceField" /* 6590 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ Keyboard: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 0 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((rulesChannelId) => {
  let formFields;
  let onChange;
  let verification;
  const obj = rulesChannelId(verification[5]);
  const cResult = obj.c(10);
  rulesChannelId = rulesChannelId.rulesChannelId;
  ({ formFields, onChange } = rulesChannelId);
  verification = rulesChannelId.verification;
  const tmp2 = closure_6();
  if (cResult[0] === onChange) {
    if (cResult[1] === rulesChannelId) {
      let tmp3;
      if (cResult[2] === verification) {
        tmp3 = cResult[3];
      }
      let closure_3 = tmp3;
      if (cResult[4] === formFields) {
        let tmp4;
        if (cResult[5] === tmp3) {
          tmp4 = cResult[6];
        }
        if (cResult[7] === tmp2.container) {
          let tmp7;
          if (cResult[8] === tmp4) {
            tmp7 = cResult[9];
          }
          return tmp7;
        }
        const tmp10 = <closure_4 style={tmp2.container}>{tmp4}</closure_4>;
        cResult[7] = tmp2.container;
        cResult[8] = tmp4;
        cResult[9] = tmp10;
        tmp7 = tmp10;
      }
      let mapped;
      if (formFields != null) {
        mapped = formFields.map((item, index) => closure_3(item, index, "verification-field-" + index));
      }
      cResult[4] = formFields;
      cResult[5] = tmp3;
      cResult[6] = mapped;
      tmp4 = mapped;
    }
  }
  const fn = function c(field_type, arg1, id) {
    let closure_0;
    rulesChannelId = arg1;
    field_type = field_type.field_type;
    if (rulesChannelId(verification[6]).VerificationFormFieldTypes.TERMS === field_type) {
      return jsx(onChange(verification[7]), {
        field: field_type,
        rulesChannelId,
        onChange(arg0) {
            onChange(closure_0, arg0);
            _false.dismiss();
          }
      }, id);
    } else if (rulesChannelId(verification[6]).VerificationFormFieldTypes.VERIFICATION === field_type) {
      return jsx(onChange(verification[8]), { verification, field: field_type }, id);
    } else if (rulesChannelId(verification[6]).VerificationFormFieldTypes.TEXT_INPUT === field_type) {
      return jsx(onChange(verification[9]), {
        field: field_type,
        onChange(arg0) {
            return onChange(closure_0, arg0);
          }
      }, id);
    } else if (rulesChannelId(verification[6]).VerificationFormFieldTypes.PARAGRAPH === field_type) {
      return jsx(onChange(verification[10]), {
        field: field_type,
        onChange(arg0) {
            return onChange(closure_0, arg0);
          }
      }, id);
    } else if (rulesChannelId(verification[6]).VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
      return jsx(onChange(verification[11]), {
        field: field_type,
        hasIcons: false,
        onChange(arg0) {
            onChange(closure_0, arg0);
            _false.dismiss();
          }
      }, id);
    } else {
      return null;
    }
  };
  cResult[0] = onChange;
  cResult[1] = rulesChannelId;
  cResult[2] = verification;
  cResult[3] = fn;
  tmp3 = fn;
}) : ((arg0) => {
  let formFields;
  let rulesChannelId;
  let verification;
  ({ rulesChannelId: require, formFields, onChange: importDefault, verification: dependencyMap } = arg0);
  let mapped;
  if (formFields != null) {
    mapped = formFields.map((field_type, index) => {
      let tmp4;
      const combined = "verification-field-" + index;
      require = index;
      field_type = field_type.field_type;
      if (MemberVerificationTypes.VerificationFormFieldTypes.TERMS === field_type) {
        tmp4 = jsx(TermsFieldDefault, {
          field: field_type,
          rulesChannelId: require,
          onChange(arg0) {
              importDefault(index, arg0);
              _false.dismiss();
            }
        }, combined);
      } else if (MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION === field_type) {
        tmp4 = jsx(UserVerificationDefault, { verification: dependencyMap, field: field_type }, combined);
      } else if (MemberVerificationTypes.VerificationFormFieldTypes.TEXT_INPUT === field_type) {
        tmp4 = jsx(TextInputFieldDefault, {
          field: field_type,
          onChange(arg0) {
              return importDefault(index, arg0);
            }
        }, combined);
      } else if (MemberVerificationTypes.VerificationFormFieldTypes.PARAGRAPH === field_type) {
        tmp4 = jsx(ParagraphFieldDefault, {
          field: field_type,
          onChange(arg0) {
              return importDefault(index, arg0);
            }
        }, combined);
      } else {
        tmp4 = null;
        if (MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
          tmp4 = jsx(MultipleChoiceFieldDefault, {
            field: field_type,
            hasIcons: false,
            onChange(arg0) {
                  importDefault(index, arg0);
                  _false.dismiss();
                }
          }, combined);
        }
      }
      return tmp4;
    });
  }
  return <closure_4 style={closure_6().container}>{mapped}</closure_4>;
});
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx");

export default tmp4;