// discord_app/modules/guild_member_verification/native/components/form_fields/TermsField.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsField.tsx");

export default function TermsField(field) {
  let onChange;
  let rulesChannelId;
  field = field.field;
  ({ onChange, rulesChannelId } = field);
  let flag = field.response;
  let obj = { style: callback2().container, children: null };
  const items = [callback(require("TermsFieldList.tsx"), { rules: field.values, rulesChannelId }), ];
  if (flag == null) {
    flag = false;
  }
  obj = { start: true, end: true, checked: flag, label: null, onPress: null };
  const intl = tmp5(1236).intl;
  obj[3] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t["2EXfGJ"]);
  obj[4] = onChange;
  items[1] = callback(require("../../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx") /* TableCheckboxRow */.TableCheckboxRow, obj);
  obj[1] = items;
  return closure_5(View, obj);
};