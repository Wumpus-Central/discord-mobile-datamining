// === Module 5600: TermsField ===

// Module 5600 (TermsField)
import util from "util" /* 1114 */;
import TermsFieldListDefault from "TermsFieldList" /* 5601 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5604 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsField.tsx");

export default function TermsField(field) {
  field = field.field;
  ({ onChange, rulesChannelId } = field);
  let flag = field.response;
  let obj = { style: closure_6().container, children: null };
  const items = [React4(TermsFieldListDefault, { rules: field.values, rulesChannelId }), ];
  if (flag == null) {
    flag = false;
  }
  obj = { start: true, end: true, checked: flag, label: null, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["2EXfGJ"]);
  obj.onPress = onChange;
  items[1] = React4(TableCheckboxRow.TableCheckboxRow, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
};