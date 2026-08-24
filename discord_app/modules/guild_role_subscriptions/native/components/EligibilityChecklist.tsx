// === Module 17005: EligibilityChecklistRow ===

// Module 17005 (EligibilityChecklistRow)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4739 */;
import preloadDefault from "preload" /* 5454 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
function EligibilityChecklistRow(item) {
  item = item.item;
  const tmp = callback2();
  const items = [tmp.row, ];
  let eligibleRow = item.checked;
  if (eligibleRow) {
    eligibleRow = tmp.eligibleRow;
  }
  let obj = { style: items, children: null };
  items[1] = eligibleRow;
  obj = { style: tmp.rowStatusIcon, source: null };
  if (item.checked) {
    let tmp6Result = tmp6(17006);
  } else {
    tmp6Result = tmp6(17007);
  }
  obj[1] = tmp6Result;
  const items1 = [closure_4(preloadDefault, obj), ];
  obj = { style: tmp.rowTextColumn, children: null };
  const items2 = [closure_4(Text.Text, { style: tmp.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: item.checked ? item.checkedLabel : item.uncheckedLabel }), closure_4(Text.Text, { variant: "text-sm/normal", color: "interactive-text-default", children: item.description }), ];
  let tmp5Result = null != item.actionHandler && null != item.actionLabel;
  if (tmp5Result) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.actionButtonWrapper;
    ({ actionLabel: obj7[0], actionHandler: obj7[1] } = item);
    obj3[1] = tmp5(tmp10(4750).Button, { text: null, onPress: null, grow: true });
    tmp5Result = tmp5(tmp4, obj3);
    const obj4 = { text: null, onPress: null, grow: true };
  }
  items2[2] = tmp5Result;
  obj[1] = items2;
  items1[1] = closure_5(View, obj);
  obj[1] = items1;
  const children = [closure_5(View, obj), ];
  if (item.isLast) {
    tmp5Result = tmp5(tmp10(1297).Spacer, { size: 16 });
  } else {
    const obj5 = { style: null };
    obj5[0] = tmp.divider;
    tmp5Result = tmp5(tmp6(14631), obj5);
  }
  children[1] = tmp5Result;
  return closure_5(closure_6, { children });
}
noopAll;
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ row: { paddingHorizontal: 24, paddingTop: 16, flex: 0, flexDirection: "row" }, eligibleRow: { opacity: 0.8 }, rowStatusIcon: { height: 20, width: 20, marginRight: 16 }, rowTextColumn: { flex: 1, flexDirection: "column" }, rowLabel: { marginBottom: 4 }, actionButtonWrapper: { marginTop: 12 }, divider: { marginHorizontal: 24 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx");

export default function EligibilityChecklist(items) {
  items = items.items;
  if (0 === items.length) {
    return null;
  } else {
    const obj = { style: null, children: null };
    obj[0] = tmp;
    obj[1] = items.map((checkedLabel) => closure_1_4(closure_1_8, { item: checkedLabel, isLast: arg1 === items.length - 1 }, checkedLabel.checkedLabel));
    return callback(View, obj);
  }
};