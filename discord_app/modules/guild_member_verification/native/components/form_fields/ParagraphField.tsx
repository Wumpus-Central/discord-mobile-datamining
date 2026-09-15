// === Module 7191: ParagraphField ===

// Module 7191 (ParagraphField)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4635 */;
import TextArea from "TextArea" /* 7192 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const maxLength = fn(5143).MAX_PARAGRAPH_RESPONSE_LENGTH;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let closure_5 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx");

export default function ParagraphField(field) {
  field = field.field;
  let str = field.response;
  const obj = { style: closure_5().container, children: null };
  const obj2 = { label: jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label }), maxLength, value: null, placeholder: null, onChange: null };
  if (str == null) {
    str = "";
  }
  obj2.value = str;
  const intl = util.intl;
  obj2.placeholder = intl.string(util.t["Sqn+Wh"]);
  obj2.onChange = field.onChange;
  obj.children = jsx(TextArea.TextArea, { label: jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label }), maxLength, value: null, placeholder: null, onChange: null });
  return <View style={closure_5().container}>{null}</View>;
};