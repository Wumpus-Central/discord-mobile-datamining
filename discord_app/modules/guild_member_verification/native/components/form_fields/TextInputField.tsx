// === Module 6585: TextInputField ===

// Module 6585 (TextInputField)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import TextInput from "TextInput" /* 6105 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const MAX_TEXT_RESPONSE_LENGTH = fn(5850).MAX_TEXT_RESPONSE_LENGTH;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_5 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TextInputField.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ field, onChange } = arg0);
  const tmp4 = closure_5();
  ({ label, response } = field);
  if (cResult[0] !== label) {
    const obj2 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: label };
    const tmp7 = jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: label });
    cResult[0] = label;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (response == null) {
    response = "";
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["Sqn+Wh"]);
    cResult[2] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === onChange) {
    if (cResult[4] === tmp5) {
      if (cResult[5] === response) {
        let tmp10 = cResult[6];
      }
      if (cResult[7] === tmp4.container) {
        if (cResult[8] === tmp10) {
          let tmp12 = cResult[9];
        }
        return tmp12;
      }
      const obj3 = { style: tmp4.container, children: tmp10 };
      const tmp15 = <View style={tmp4.container}>{tmp10}</View>;
      cResult[7] = tmp4.container;
      cResult[8] = tmp10;
      cResult[9] = tmp15;
      tmp12 = tmp15;
    }
  }
  const tmp11 = jsx(TextInput.TextInput, { label: tmp5, maxLength: MAX_TEXT_RESPONSE_LENGTH, value: response, placeholder: tmp8, onChange });
  cResult[3] = onChange;
  cResult[4] = tmp5;
  cResult[5] = response;
  cResult[6] = tmp11;
  tmp10 = tmp11;
  const obj4 = { label: tmp5, maxLength: MAX_TEXT_RESPONSE_LENGTH, value: response, placeholder: tmp8, onChange };
}) : ((field) => {
  field = field.field;
  let str = field.response;
  const obj = { style: closure_5().container, children: null };
  const obj2 = { label: jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label }), maxLength: MAX_TEXT_RESPONSE_LENGTH, value: null, placeholder: null, onChange: null };
  if (str == null) {
    str = "";
  }
  obj2.value = str;
  const intl = util.intl;
  obj2.placeholder = intl.string(util.t["Sqn+Wh"]);
  obj2.onChange = field.onChange;
  obj.children = jsx(TextInput.TextInput, { label: jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label }), maxLength: MAX_TEXT_RESPONSE_LENGTH, value: null, placeholder: null, onChange: null });
  return <View style={closure_5().container}>{null}</View>;
});