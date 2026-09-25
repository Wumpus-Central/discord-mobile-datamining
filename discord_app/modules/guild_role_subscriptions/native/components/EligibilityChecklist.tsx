// === Module 17485: EligibilityChecklist ===

// Module 17485 (EligibilityChecklist)
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4825 */;
import components_Button_Button from "components/Button/Button" /* 5274 */;
import FastImageDefault from "FastImage" /* 5894 */;
import FormSeparatorDefault from "FormSeparator" /* 14736 */;
import _modDef17486 from "module_17486" /* 17486 */;
import _modDef17487 from "module_17487" /* 17487 */;
import noop from "module_19" /* 19 */;

require = fn;
function EligibilityChecklistRow(item) {
  item = item.item;
  const tmp = closure_7();
  const items = [tmp.row, ];
  let eligibleRow = item.checked;
  if (eligibleRow) {
    eligibleRow = tmp.eligibleRow;
  }
  const obj = { style: items, children: null };
  items[1] = eligibleRow;
  const obj2 = { style: tmp.rowStatusIcon, source: null };
  if (item.checked) {
    let tmp6Result = _modDef17486;
  } else {
    tmp6Result = _modDef17487;
  }
  obj2.source = tmp6Result;
  const items1 = [React4(FastImageDefault, obj2), ];
  const obj3 = { style: tmp.rowTextColumn, children: null };
  const items2 = [React4(Text_Text.Text, { style: tmp.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: item.checked ? item.checkedLabel : item.uncheckedLabel }), React4(Text_Text.Text, { variant: "text-sm/normal", color: "interactive-text-default", children: item.description }), ];
  let tmp5Result = null != item.actionHandler && null != item.actionLabel;
  if (tmp5Result) {
    const obj6 = { style: tmp.actionButtonWrapper, children: null };
    ({ actionLabel: obj7.text, actionHandler: obj7.onPress } = item);
    obj6.children = React4(components_Button_Button.Button, { text: null, onPress: null, grow: true });
    tmp5Result = React4(View, obj6);
    const obj8 = { text: null, onPress: null, grow: true };
  }
  items2[2] = tmp5Result;
  obj3.children = items2;
  items1[1] = hasOwnProperty(View, obj3);
  obj.children = items1;
  const children = [hasOwnProperty(View, obj), ];
  if (item.isLast) {
    let tmp5Result2 = React4(native.Spacer, { size: 16 });
  } else {
    const obj15 = { style: tmp.divider };
    tmp5Result2 = React4(FormSeparatorDefault, obj15);
  }
  children[1] = tmp5Result2;
  return hasOwnProperty(timestampProducer, { children });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(4829);
let closure_7 = createStyles.createStyles({ row: { paddingHorizontal: 24, paddingTop: 16, flex: 0, flexDirection: "row" }, eligibleRow: { opacity: 0.8 }, rowStatusIcon: { height: 20, width: 20, marginRight: 16 }, rowTextColumn: { flex: 1, flexDirection: "column" }, rowLabel: { marginBottom: 4 }, actionButtonWrapper: { marginTop: 12 }, divider: { marginHorizontal: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx");

export default function EligibilityChecklist(items) {
  items = items.items;
  if (0 === items.length) {
    return null;
  } else {
    const obj = { style: tmp, children: items.map((item, index) => React4(EligibilityChecklistRow, { item, isLast: index === items.length - 1 }, item.checkedLabel)) };
    return closure_4(View, obj);
  }
};