// === Module 7615: TermsField ===

// Module 7615 (TermsField)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import TermsFieldListItemDefault from "TermsFieldListItem" /* 5508 */;
import TableCheckboxRow from "TableCheckboxRow" /* 7616 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsField.tsx");

export default function TermsField(field) {
  field = field.field;
  ({ onChange, rulesChannelId } = field);
  let flag = field.response;
  let obj = { style: callback2().container, children: null };
  const items = [callback(TermsFieldListItemDefault, { rules: field.values, rulesChannelId }), ];
  if (flag == null) {
    flag = false;
  }
  obj = { start: true, end: true, checked: flag, label: null, onPress: null };
  const intl = tmp5(1236).intl;
  obj[3] = intl.string(getSystemLocale.t["2EXfGJ"]);
  obj[4] = onChange;
  items[1] = callback(TableCheckboxRow.TableCheckboxRow, obj);
  obj[1] = items;
  return closure_5(View, obj);
};