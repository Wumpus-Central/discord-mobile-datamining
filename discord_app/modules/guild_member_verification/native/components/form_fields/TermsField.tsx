// discord_app/modules/guild_member_verification/native/components/form_fields/TermsField.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import TermsFieldListItemDefault from "TermsFieldList.tsx";
import TableCheckboxRow from "../../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const result = require("set").fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/TermsField.tsx",
);

export default function TermsField(field) {
  field = field.field;
  ({ onChange, rulesChannelId } = field);
  let flag = field.response;
  let obj = { style: callback2().container, children: null };
  const items = [callback(TermsFieldListItemDefault, { rules: field.values, rulesChannelId })];
  if (flag == null) {
    flag = false;
  }
  obj = { start: true, end: true, checked: flag, label: null, onPress: null };
  const intl = tmp5(1233).intl;
  obj[3] = intl.string(getSystemLocale.t["2EXfGJ"]);
  obj[4] = onChange;
  items[1] = callback(TableCheckboxRow.TableCheckboxRow, obj);
  obj[1] = items;
  return closure_5(View, obj);
}
