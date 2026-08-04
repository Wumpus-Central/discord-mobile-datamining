// discord_app/modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ Keyboard: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 0 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx");

export default function MemberVerificationFormRenderer(arg0) {
  let dependencyMap;
  let formFields;
  let importDefault;
  let require;
  ({ rulesChannelId: require, formFields, onChange: importDefault, verification: dependencyMap } = arg0);
  let obj = { style: callback().container, children: null };
  let mapped;
  if (formFields != null) {
    mapped = formFields.map((field_type) => {
      const combined = "verification-field-" + arg1;
      let closure_0 = arg1;
      field_type = field_type.field_type;
      if (outer1_0(outer1_2[4]).VerificationFormFieldTypes.TERMS === field_type) {
        let obj = { field: null, rulesChannelId: null, onChange: null };
        obj[0] = field_type;
        obj[1] = closure_0;
        obj[2] = function onChange(arg0) {
          outer1_1(closure_0, arg0);
          outer2_3.dismiss();
        };
        let tmp4 = outer1_5(outer1_1(tmp3[5]), obj, combined);
      } else if (tmp2(tmp3[4]).VerificationFormFieldTypes.VERIFICATION === field_type) {
        obj = { verification: null, field: null };
        obj[0] = closure_2;
        obj[1] = field_type;
        tmp4 = outer1_5(outer1_1(tmp3[6]), obj, combined);
      } else if (tmp2(tmp3[4]).VerificationFormFieldTypes.TEXT_INPUT === field_type) {
        const obj1 = { field: null, onChange: null };
        obj1[0] = field_type;
        obj1[1] = function onChange(arg0) {
          return outer1_1(closure_0, arg0);
        };
        tmp4 = outer1_5(outer1_1(tmp3[7]), obj1, combined);
      } else if (tmp2(tmp3[4]).VerificationFormFieldTypes.PARAGRAPH === field_type) {
        obj = { field: null, onChange: null };
        obj[0] = field_type;
        obj[1] = function onChange(arg0) {
          return outer1_1(closure_0, arg0);
        };
        tmp4 = outer1_5(outer1_1(tmp3[8]), obj, combined);
      } else {
        tmp4 = null;
        if (tmp2(tmp3[4]).VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
          const obj2 = { field: null, hasIcons: false, onChange: null };
          obj2[0] = field_type;
          obj2[2] = function onChange(arg0) {
            outer1_1(closure_0, arg0);
            outer2_3.dismiss();
          };
          tmp4 = outer1_5(outer1_1(tmp3[9]), obj2, combined);
        }
      }
      return tmp4;
    });
  }
  obj[1] = mapped;
  return <closure_4 style={callback().container}>{null}</closure_4>;
};