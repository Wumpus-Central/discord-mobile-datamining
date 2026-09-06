// === Module 7083: TextInputField ===

// Module 7083 (TextInputField)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Text from "Text" /* 4556 */;
import TextInput from "TextInput" /* 6606 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MAX_TEXT_RESPONSE_LENGTH } from "items" /* 5059 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TextInputField.tsx");

export default function TextInputField(field) {
  field = field.field;
  let str = field.response;
  let obj = { style: callback().container, children: null };
  obj = { label: jsx(Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label }), maxLength: MAX_TEXT_RESPONSE_LENGTH, value: null, placeholder: null, onChange: null };
  if (str == null) {
    str = "";
  }
  obj[2] = str;
  const intl = tmp3(1114).intl;
  obj[3] = intl.string(getSystemLocale.t["Sqn+Wh"]);
  obj[4] = field.onChange;
  obj[1] = jsx(TextInput.TextInput, { label: jsx(Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label }), maxLength: MAX_TEXT_RESPONSE_LENGTH, value: null, placeholder: null, onChange: null });
  return <View label={jsx(Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label })} maxLength={MAX_TEXT_RESPONSE_LENGTH} value={null} placeholder={null} onChange={null} />;
};