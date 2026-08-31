// === Module 7774: TextInputField ===

// Module 7774 (TextInputField)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4444 */;
import TextInput from "TextInput" /* 7673 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MAX_TEXT_RESPONSE_LENGTH } from "items" /* 4977 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import importDefaultResult from "createTextStyle" /* 5429 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { marginVertical: 12, flexDirection: "column" }, formHeader: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(require("sum").Fonts.DISPLAY_SEMIBOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16, { uppercase: false }));
createCacheKey.paddingBottom = 16;
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TextInputField.tsx");

export default function TextInputField(field) {
  field = field.field;
  const tmp = callback2();
  let str = field.response;
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.formHeader, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label };
  const items = [callback(Text.Text, obj), ];
  obj = { maxLength: MAX_TEXT_RESPONSE_LENGTH, value: null, placeholder: null, onChange: null };
  if (str == null) {
    str = "";
  }
  obj[1] = str;
  const intl = tmp5(1236).intl;
  obj[2] = intl.string(getSystemLocale.t["Sqn+Wh"]);
  obj[3] = field.onChange;
  items[1] = callback(TextInput.TextInput, obj);
  obj[1] = items;
  return closure_5(View, obj);
};