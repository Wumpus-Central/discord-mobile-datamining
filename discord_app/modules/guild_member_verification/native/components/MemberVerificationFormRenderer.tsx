// === Module 5985: MemberVerificationFormRenderer ===

// Module 5985 (MemberVerificationFormRenderer)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((rulesChannelId) => {
  const cResult = rulesChannelId(verification[5]).c(10);
  rulesChannelId = rulesChannelId.rulesChannelId;
  ({ formFields, onChange } = rulesChannelId);
  verification = rulesChannelId.verification;
  const tmp2 = closure_6();
  if (cResult[0] === onChange) {
    if (cResult[1] === rulesChannelId) {
      if (cResult[2] === verification) {
        let tmp3 = cResult[3];
      }
      closure_3 = tmp3;
      if (cResult[4] === formFields) {
        if (cResult[5] === tmp3) {
          let tmp4 = cResult[6];
        }
        if (cResult[7] === tmp2.container) {
          if (cResult[8] === tmp4) {
            let tmp7 = cResult[9];
          }
          return tmp7;
        }
        let obj2 = { style: tmp2.container, children: tmp4 };
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
    rulesChannelId = arg1;
    field_type = field_type.field_type;
    if (rulesChannelId(verification[6]).VerificationFormFieldTypes.TERMS === field_type) {
      const obj2 = {
        field: field_type,
        rulesChannelId,
        onChange(arg0) {
            onChange(closure_0, arg0);
            React3.dismiss();
          }
      };
      return jsx(onChange(verification[7]), {
        field: field_type,
        rulesChannelId,
        onChange(arg0) {
            onChange(closure_0, arg0);
            React3.dismiss();
          }
      }, id);
    } else if (tmp(verification[6]).VerificationFormFieldTypes.VERIFICATION === field_type) {
      const obj3 = { verification, field: field_type };
      return jsx(onChange(verification[8]), { verification, field: field_type }, id);
    } else if (tmp(verification[6]).VerificationFormFieldTypes.TEXT_INPUT === field_type) {
      const obj4 = {
        field: field_type,
        onChange(arg0) {
            return onChange(closure_0, arg0);
          }
      };
      return jsx(onChange(verification[9]), {
        field: field_type,
        onChange(arg0) {
            return onChange(closure_0, arg0);
          }
      }, id);
    } else if (tmp(verification[6]).VerificationFormFieldTypes.PARAGRAPH === field_type) {
      const obj5 = {
        field: field_type,
        onChange(arg0) {
            return onChange(closure_0, arg0);
          }
      };
      return jsx(onChange(verification[10]), {
        field: field_type,
        onChange(arg0) {
            return onChange(closure_0, arg0);
          }
      }, id);
    } else if (tmp(verification[6]).VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
      const obj = {
        field: field_type,
        hasIcons: false,
        onChange(arg0) {
            onChange(closure_0, arg0);
            React3.dismiss();
          }
      };
      return jsx(onChange(verification[11]), {
        field: field_type,
        hasIcons: false,
        onChange(arg0) {
            onChange(closure_0, arg0);
            React3.dismiss();
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
  let obj = rulesChannelId(verification[5]);
}) : ((arg0) => {
  ({ rulesChannelId: require, formFields, onChange: importDefault, verification: dependencyMap } = arg0);
  let obj = { style: closure_6().container, children: null };
  let mapped;
  if (formFields != null) {
    mapped = formFields.map((field_type, index) => {
      const combined = "verification-field-" + index;
      rulesChannelId = index;
      field_type = field_type.field_type;
      if (rulesChannelId(verification[6]).VerificationFormFieldTypes.TERMS === field_type) {
        const obj2 = {
          field: field_type,
          rulesChannelId,
          onChange(arg0) {
              importDefault(closure_0, arg0);
              React3.dismiss();
            }
        };
        let tmp4 = jsx(require("TermsField"), {
          field: field_type,
          rulesChannelId,
          onChange(arg0) {
              importDefault(closure_0, arg0);
              React3.dismiss();
            }
        }, combined);
      } else if (tmp2(verification[6]).VerificationFormFieldTypes.VERIFICATION === field_type) {
        const obj3 = { verification, field: field_type };
        tmp4 = jsx(require("UserVerification"), { verification, field: field_type }, combined);
      } else if (tmp2(verification[6]).VerificationFormFieldTypes.TEXT_INPUT === field_type) {
        const obj4 = {
          field: field_type,
          onChange(arg0) {
              return importDefault(closure_0, arg0);
            }
        };
        tmp4 = jsx(require("TextInputField"), {
          field: field_type,
          onChange(arg0) {
              return importDefault(closure_0, arg0);
            }
        }, combined);
      } else if (tmp2(verification[6]).VerificationFormFieldTypes.PARAGRAPH === field_type) {
        const obj = {
          field: field_type,
          onChange(arg0) {
              return importDefault(closure_0, arg0);
            }
        };
        tmp4 = jsx(require("ParagraphField"), {
          field: field_type,
          onChange(arg0) {
              return importDefault(closure_0, arg0);
            }
        }, combined);
      } else {
        tmp4 = null;
        if (tmp2(verification[6]).VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
          const obj5 = {
            field: field_type,
            hasIcons: false,
            onChange(arg0) {
                  importDefault(closure_0, arg0);
                  React3.dismiss();
                }
          };
          tmp4 = jsx(require("MultipleChoiceField"), {
            field: field_type,
            hasIcons: false,
            onChange(arg0) {
                  importDefault(closure_0, arg0);
                  React3.dismiss();
                }
          }, combined);
        }
      }
      return tmp4;
    });
  }
  obj.children = mapped;
  return <closure_4 style={closure_6().container}>{null}</closure_4>;
});