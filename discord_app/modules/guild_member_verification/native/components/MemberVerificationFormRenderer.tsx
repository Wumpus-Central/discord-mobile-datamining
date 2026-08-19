// === Module 8556: MemberVerificationFormRenderer ===

// Module 8556 (MemberVerificationFormRenderer)
import noopAll from "noop" /* 19 */;
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE" /* 4200 */;
import TermsFieldDefault from "TermsField" /* 8557 */;
import UserVerificationDefault from "UserVerification" /* 8559 */;
import TextInputFieldDefault from "TextInputField" /* 8660 */;
import ParagraphFieldDefault from "ParagraphField" /* 8661 */;
import MultipleChoiceFieldDefault from "MultipleChoiceField" /* 8662 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ Keyboard: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 0 } });
const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx");

export default function MemberVerificationFormRenderer(arg0) {
  ({ rulesChannelId: require, formFields, onChange: importDefault, verification: dependencyMap } = arg0);
  let obj = { style: callback().container, children: null };
  let mapped;
  if (formFields != null) {
    mapped = formFields.map((item, index) => {
      const combined = "verification-field-" + index;
      closure_0 = index;
      const field_type = item.field_type;
      if (MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.TERMS === field_type) {
        let obj = { field: null, rulesChannelId: null, onChange: null };
        obj[0] = item;
        obj[1] = closure_0;
        obj[2] = function onChange(arg0) {
          closure_1_1(closure_0, arg0);
          closure_2_3.dismiss();
        };
        let tmp4 = jsx(TermsFieldDefault, { field: null, rulesChannelId: null, onChange: null }, combined);
      } else if (MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.VERIFICATION === field_type) {
        obj = { verification: null, field: null };
        obj[0] = closure_2;
        obj[1] = item;
        tmp4 = jsx(UserVerificationDefault, { verification: null, field: null }, combined);
      } else if (MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.TEXT_INPUT === field_type) {
        obj1 = { field: null, onChange: null };
        obj1[0] = item;
        obj1[1] = function onChange(arg0) {
          return closure_1_1(closure_0, arg0);
        };
        tmp4 = jsx(TextInputFieldDefault, { field: null, onChange: null }, combined);
      } else if (MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.PARAGRAPH === field_type) {
        obj = { field: null, onChange: null };
        obj[0] = item;
        obj[1] = function onChange(arg0) {
          return closure_1_1(closure_0, arg0);
        };
        tmp4 = jsx(ParagraphFieldDefault, { field: null, onChange: null }, combined);
      } else {
        tmp4 = null;
        if (MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
          const obj2 = { field: null, hasIcons: false, onChange: null };
          obj2[0] = item;
          obj2[2] = function onChange(arg0) {
            closure_1_1(closure_0, arg0);
            closure_2_3.dismiss();
          };
          tmp4 = jsx(MultipleChoiceFieldDefault, { field: null, hasIcons: false, onChange: null }, combined);
        }
      }
      return tmp4;
    });
  }
  obj[1] = mapped;
  return <closure_4 style={callback().container}>{null}</closure_4>;
};