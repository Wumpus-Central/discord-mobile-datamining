// === Module 7279: TextInputField ===

// Module 7279 (TextInputField)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4718 */;
import TextInput from "TextInput" /* 6799 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const MAX_TEXT_RESPONSE_LENGTH = fn(5228).MAX_TEXT_RESPONSE_LENGTH;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let closure_5 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TextInputField.tsx");

export default function TextInputField(field) {
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
};