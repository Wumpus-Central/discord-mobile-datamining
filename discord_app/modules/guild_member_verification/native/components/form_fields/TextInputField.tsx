// discord_app/modules/guild_member_verification/native/components/form_fields/TextInputField.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import TextInput from "../../../../../design/components/TextInput/native/TextInput.native.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { MAX_TEXT_RESPONSE_LENGTH } from "../../../MemberVerificationConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importDefaultResult from "../../../../rebrand/native/TextStyles.tsx";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = {};
const merged = Object.assign(importDefaultResult(require("sum").Fonts.DISPLAY_SEMIBOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16, { uppercase: false }));
createCacheKey.paddingBottom = 16;
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TextInputField.tsx");

export default function TextInputField(field) {
  field = field.field;
  const tmp = callback2();
  let str = field.response;
  let obj = { style: tmp.formHeader, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label };
  const items = [callback(Text.Text, obj), ];
  obj = { maxLength: MAX_TEXT_RESPONSE_LENGTH, value: null, placeholder: null, onChange: null };
  if (str == null) {
    str = "";
  }
  obj[1] = str;
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["Sqn+Wh"]);
  obj[3] = field.onChange;
  items[1] = callback(TextInput.TextInput, obj);
  obj[1] = items;
  return callback(View, obj);
};