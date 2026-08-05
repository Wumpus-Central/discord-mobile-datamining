// discord_app/modules/guild_member_verification/native/components/form_fields/TextInputField.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { MAX_TEXT_RESPONSE_LENGTH } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { TextInput } from "../../../../../design/components/TextInput/native/TextInput.native.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { marginVertical: 12, flexDirection: "column" }, formHeader: null };
createCacheKey = {};
const merged = Object.assign(require("createTextStyle")(require("sum").Fonts.DISPLAY_SEMIBOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 16, { uppercase: false }));
createCacheKey.paddingBottom = 16;
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("items").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TextInputField.tsx");

export default function TextInputField(field) {
  field = field.field;
  const tmp = createCacheKey();
  let str = field.response;
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.formHeader, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label };
  const items = [callback(Text /* Text */.Text, obj), ];
  obj = { maxLength: MAX_TEXT_RESPONSE_LENGTH, value: null, placeholder: null, onChange: null };
  if (str == null) {
    str = "";
  }
  obj[1] = str;
  const intl = tmp5(1236).intl;
  obj[2] = intl.string(getSystemLocale /* getSystemLocale */.t["Sqn+Wh"]);
  obj[3] = field.onChange;
  items[1] = callback(TextInput /* TextInput */.TextInput, obj);
  obj[1] = items;
  return closure_5(View, obj);
};