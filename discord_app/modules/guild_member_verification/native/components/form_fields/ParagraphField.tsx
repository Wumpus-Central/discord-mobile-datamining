// discord_app/modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import TextArea from "../../../../../design/components/TextInput/native/TextArea.native.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { MAX_PARAGRAPH_RESPONSE_LENGTH as closure_3 } from "../../../MemberVerificationConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../../rebrand/native/TextStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { marginVertical: 12, flexDirection: "column" }, formHeader: null };
createCacheKey = {};
const merged = Object.assign(
  importDefaultResult(require("sum").Fonts.DISPLAY_SEMIBOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16, {
    uppercase: false,
  }),
);
createCacheKey.paddingBottom = 16;
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx",
);

export default function ParagraphField(field) {
  field = field.field;
  const tmp = callback2();
  let str = field.response;
  let obj = { style: tmp.container, children: null };
  obj = {
    style: tmp.formHeader,
    variant: "heading-md/semibold",
    color: "mobile-text-heading-primary",
    children: field.label,
  };
  const items = [callback(Text.Text, obj)];
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
}
