// discord_app/modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ Keyboard: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 0 } });
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx");

export default function MemberVerificationFormRenderer(arg0) {
  ({ rulesChannelId: require, formFields, onChange: importDefault, verification: dependencyMap } = arg0);
  let obj = { style: callback().container, children: null };
  let mapped;
  if (formFields != null) {
    mapped = formFields.map((field_type) => {
      const combined = "verification-field-" + arg1;
      closure_0 = arg1;
      field_type = field_type.field_type;
      if (closure_1_0(closure_1_2[4]).VerificationFormFieldTypes.TERMS === field_type) {
        let obj = { field: null, rulesChannelId: null, onChange: null };
        obj[0] = field_type;
        obj[1] = closure_0;
        obj[2] = function onChange(arg0) {
          closure_1_1(closure_0, arg0);
          closure_2_3.dismiss();
        };
        let tmp4 = closure_1_5(closure_1_1(tmp3[5]), obj, combined);
      } else if (tmp2(tmp3[4]).VerificationFormFieldTypes.VERIFICATION === field_type) {
        obj = { verification: null, field: null };
        obj[0] = closure_2;
        obj[1] = field_type;
        tmp4 = closure_1_5(closure_1_1(tmp3[6]), obj, combined);
      } else if (tmp2(tmp3[4]).VerificationFormFieldTypes.TEXT_INPUT === field_type) {
        obj1 = { field: null, onChange: null };
        obj1[0] = field_type;
        obj1[1] = function onChange(arg0) {
          return closure_1_1(closure_0, arg0);
        };
        tmp4 = closure_1_5(closure_1_1(tmp3[7]), obj1, combined);
      } else if (tmp2(tmp3[4]).VerificationFormFieldTypes.PARAGRAPH === field_type) {
        obj = { field: null, onChange: null };
        obj[0] = field_type;
        obj[1] = function onChange(arg0) {
          return closure_1_1(closure_0, arg0);
        };
        tmp4 = closure_1_5(closure_1_1(tmp3[8]), obj, combined);
      } else {
        tmp4 = null;
        if (tmp2(tmp3[4]).VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
          const obj2 = { field: null, hasIcons: false, onChange: null };
          obj2[0] = field_type;
          obj2[2] = function onChange(arg0) {
            closure_1_1(closure_0, arg0);
            closure_2_3.dismiss();
          };
          tmp4 = closure_1_5(closure_1_1(tmp3[9]), obj2, combined);
        }
      }
      return tmp4;
    });
  }
  obj[1] = mapped;
  return <closure_4 style={callback().container}>{null}</closure_4>;
};