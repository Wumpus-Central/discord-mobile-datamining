// discord_app/modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({
  container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 0 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx",
);

export default function MemberVerificationFormRenderer(arg0) {
  ({ rulesChannelId: require, formFields, onChange: importDefault, verification: dependencyMap } = arg0);
  let obj = { style: closure_6().container, children: null };
  let mapped;
  if (formFields != null) {
    mapped = formFields.map((field_type, index) => {
      const combined = "verification-field-" + index;
      rulesChannelId = index;
      field_type = field_type.field_type;
      if (rulesChannelId(verification[4]).VerificationFormFieldTypes.TERMS === field_type) {
        let obj = {
          field: field_type,
          rulesChannelId,
          onChange(arg0) {
            importDefault(closure_0, arg0);
            React3.dismiss();
          },
        };
        let tmp4 = jsx(
          require("TermsField"),
          {
            field: field_type,
            rulesChannelId,
            onChange(arg0) {
              importDefault(closure_0, arg0);
              React3.dismiss();
            },
          },
          combined,
        );
      } else if (tmp2(tmp3[4]).VerificationFormFieldTypes.VERIFICATION === field_type) {
        obj = { verification, field: field_type };
        tmp4 = jsx(require("UserVerification"), { verification, field: field_type }, combined);
      } else if (tmp2(tmp3[4]).VerificationFormFieldTypes.TEXT_INPUT === field_type) {
        const obj1 = {
          field: field_type,
          onChange(arg0) {
            return importDefault(closure_0, arg0);
          },
        };
        tmp4 = jsx(
          require("TextInputField"),
          {
            field: field_type,
            onChange(arg0) {
              return importDefault(closure_0, arg0);
            },
          },
          combined,
        );
      } else if (tmp2(tmp3[4]).VerificationFormFieldTypes.PARAGRAPH === field_type) {
        obj = {
          field: field_type,
          onChange(arg0) {
            return importDefault(closure_0, arg0);
          },
        };
        tmp4 = jsx(
          require("ParagraphField"),
          {
            field: field_type,
            onChange(arg0) {
              return importDefault(closure_0, arg0);
            },
          },
          combined,
        );
      } else {
        tmp4 = null;
        if (tmp2(tmp3[4]).VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
          const obj2 = {
            field: field_type,
            hasIcons: false,
            onChange(arg0) {
              importDefault(closure_0, arg0);
              React3.dismiss();
            },
          };
          tmp4 = jsx(
            require("MultipleChoiceField"),
            {
              field: field_type,
              hasIcons: false,
              onChange(arg0) {
                importDefault(closure_0, arg0);
                React3.dismiss();
              },
            },
            combined,
          );
        }
      }
      return tmp4;
    });
  }
  obj.children = mapped;
  return <closure_4 style={closure_6().container}>{null}</closure_4>;
}
