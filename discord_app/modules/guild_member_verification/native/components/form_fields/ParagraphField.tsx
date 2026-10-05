// discord_app/modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import intl2 from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import MemberVerificationConstants from "../../../MemberVerificationConstants.tsx";
import TextArea2 from "../../../../../design/components/TextInput/native/TextArea.native.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const maxLength = MemberVerificationConstants.MAX_PARAGRAPH_RESPONSE_LENGTH;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let field;
      let label;
      let onChange;
      let response;
      let tmp5;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(10);
      ({ field, onChange } = arg0);
      const tmp4 = closure_5();
      ({ label, response } = field);
      const container = tmp4.container;
      if (cResult[0] !== label) {
        const tmp7 = jsx(Text_Text.Text, {
          variant: "heading-md/semibold",
          color: "mobile-text-heading-primary",
          children: label,
        });
        cResult[0] = label;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (response == null) {
        response = "";
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t["Sqn+Wh"]);
        cResult[2] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === onChange) {
        if (cResult[4] === tmp5) {
          let tmp10;
          if (cResult[5] === response) {
            tmp10 = cResult[6];
          }
          if (cResult[7] === tmp4.container) {
            let tmp12;
            if (cResult[8] === tmp10) {
              tmp12 = cResult[9];
            }
            return tmp12;
          }
          const tmp15 = <View style={container}>{tmp10}</View>;
          cResult[7] = tmp4.container;
          cResult[8] = tmp10;
          cResult[9] = tmp15;
          tmp12 = tmp15;
        }
      }
      const tmp11 = jsx(TextArea2.TextArea, { label: tmp5, maxLength, value: response, placeholder: tmp8, onChange });
      cResult[3] = onChange;
      cResult[4] = tmp5;
      cResult[5] = response;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : (field) => {
      let intl;
      field = field.field;
      const onChange = field.onChange;
      let str = field.response;
      const label = field.label;
      ({ label: null, maxLength, value: str, placeholder: intl.string(intl2.t["Sqn+Wh"]), onChange });
      const TextArea = TextArea2.TextArea;
      if (str == null) {
        str = "";
      }
      intl = intl2.intl;
      return <View style={closure_5().container}>{null}</View>;
    };
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx",
);

export default tmp3;
