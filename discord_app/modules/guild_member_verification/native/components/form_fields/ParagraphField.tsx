// === Module 7084: ParagraphField ===

// Module 7084 (ParagraphField)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import TextArea from "TextArea" /* 7085 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const maxLength = fn(5059).MAX_PARAGRAPH_RESPONSE_LENGTH;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx");

export default function ParagraphField(field) {
  field = field.field;
  let str = field.response;
  let obj = { style: closure_5().container, children: null };
  obj = { label: jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label }), maxLength, value: null, placeholder: null, onChange: null };
  if (str == null) {
    str = "";
  }
  obj.value = str;
  const intl = tmp3(1114).intl;
  obj.placeholder = intl.string(util.t["Sqn+Wh"]);
  obj.onChange = field.onChange;
  obj.children = jsx(TextArea.TextArea, { label: jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label }), maxLength, value: null, placeholder: null, onChange: null });
  return <View label={jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label })} maxLength={maxLength} value={null} placeholder={null} onChange={null} />;
};