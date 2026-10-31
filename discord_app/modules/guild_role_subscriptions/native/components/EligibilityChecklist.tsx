// === Module 19879: EligibilityChecklist ===

// Module 19879 (EligibilityChecklist)
import nativeDefault from "native" /* 575 */;
import CircleXIcon from "CircleXIcon" /* 7092 */;
import CircleCheckIcon from "CircleCheckIcon" /* 7340 */;
import noop from "module_19" /* 19 */;

require = fn;
function EligibilityChecklistRow(item) {
  item = item.item;
  const tmp = closure_7();
  const obj = { style: tmp.row, children: null };
  if (item.checked) {
    const obj2 = { style: tmp.rowStatusIcon, size: "custom", color: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, secondaryColor: nativeDefault.colors.WHITE };
    let tmp5Result = React4(CircleCheckIcon.CircleCheckIcon, obj2);
    let tmp10 = require;
    let tmp12 = importDefault;
    let tmp13 = React4;
  } else {
    const obj3 = { style: tmp.rowStatusIcon, size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, secondaryColor: nativeDefault.colors.WHITE };
    tmp5Result = React4(CircleXIcon.CircleXIcon, obj3);
    tmp10 = require;
    tmp12 = importDefault;
    tmp13 = React4;
  }
  const items = [tmp5Result, ];
  const items1 = [tmp.rowTextColumn, ];
  const obj4 = { style: items1, children: null };
  items1[1] = item.checked && tmp.eligibleRow;
  const items2 = [tmp13(tmp10(5624).Text, { style: tmp.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: item.checked ? item.checkedLabel : item.uncheckedLabel }), tmp13(tmp10(5624).Text, { variant: "text-sm/normal", color: "interactive-text-default", children: item.description }), ];
  let tmp13Result = null != item.actionHandler && null != item.actionLabel;
  if (tmp13Result) {
    const obj7 = { style: tmp.actionButtonWrapper, children: null };
    ({ actionLabel: obj8.text, actionHandler: obj8.onPress } = item);
    obj7.children = tmp13(tmp10(5634).Button, { text: null, onPress: null, grow: true });
    tmp13Result = tmp13(View, obj7);
    const obj9 = { text: null, onPress: null, grow: true };
  }
  items2[2] = tmp13Result;
  obj4.children = items2;
  items[1] = hasOwnProperty(View, obj4);
  obj.children = items;
  const children = [hasOwnProperty(View, obj), ];
  const obj17 = { style: null };
  if (item.isLast) {
    obj17.style = tmp.lastRowSpacer;
    let tmp13Result2 = tmp13(View, obj17);
  } else {
    obj17.style = tmp.divider;
    tmp13Result2 = tmp13(tmp12(17195), obj17);
  }
  children[1] = tmp13Result2;
  return hasOwnProperty(timestampProducer, { children });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(5014);
let closure_7 = createStyles.createStyles({ row: { paddingHorizontal: 24, paddingTop: 16, flex: 0, flexDirection: "row" }, eligibleRow: { opacity: 0.8 }, rowStatusIcon: { height: 20, width: 20, marginRight: 16 }, rowTextColumn: { flex: 1, flexDirection: "column" }, rowLabel: { marginBottom: 4 }, actionButtonWrapper: { marginTop: 12 }, divider: { marginHorizontal: 24 }, lastRowSpacer: { height: 16 } });
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