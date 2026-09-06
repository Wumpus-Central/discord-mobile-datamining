// discord_app/modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import TextArea from "../../../../../design/components/TextInput/native/TextArea.native.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { MAX_PARAGRAPH_RESPONSE_LENGTH as closure_3 } from "../../../MemberVerificationConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const result = require("set").fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx",
);

export default function ParagraphField(field) {
  field = field.field;
  let str = field.response;
  let obj = { style: callback().container, children: null };
  obj = {
    label: jsx(Text.Text, {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: field.label,
    }),
    maxLength: closure_3,
    value: null,
    placeholder: null,
    onChange: null,
  };
  if (str == null) {
    str = "";
  }
  obj[2] = str;
  const intl = tmp3(1114).intl;
  obj[3] = intl.string(getSystemLocale.t["Sqn+Wh"]);
  obj[4] = field.onChange;
  obj[1] = jsx(TextArea.TextArea, {
    label: jsx(Text.Text, {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: field.label,
    }),
    maxLength: closure_3,
    value: null,
    placeholder: null,
    onChange: null,
  });
  return (
    <View
      label={jsx(Text.Text, {
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: field.label,
      })}
      maxLength={closure_3}
      value={null}
      placeholder={null}
      onChange={null}
    />
  );
}
