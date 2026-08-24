// === Module 8698: ParagraphField ===

// Module 8698 (ParagraphField)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4739 */;
import TextArea from "TextArea" /* 8131 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MAX_PARAGRAPH_RESPONSE_LENGTH as closure_3 } from "items" /* 6898 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import importDefaultResult from "createTextStyle" /* 6819 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { marginVertical: 12, flexDirection: "column" }, formHeader: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(require("sum").Fonts.DISPLAY_SEMIBOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16, { uppercase: false }));
createCacheKey.paddingBottom = 16;
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx");

export default function ParagraphField(field) {
  field = field.field;
  const tmp = callback2();
  let str = field.response;
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.formHeader, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label };
  const items = [callback(Text.Text, obj), ];
  obj = { maxLength: closure_3, value: null, placeholder: null, onChange: null };
  if (str == null) {
    str = "";
  }
  obj[1] = str;
  const intl = tmp5(1236).intl;
  obj[2] = intl.string(getSystemLocale.t["Sqn+Wh"]);
  obj[3] = field.onChange;
  items[1] = callback(TextArea.TextArea, obj);
  obj[1] = items;
  return closure_5(View, obj);
};