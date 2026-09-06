// discord_app/modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function EligibilityChecklistRow(item) {
  item = item.item;
  const tmp = closure_7();
  const items = [tmp.row];
  let eligibleRow = item.checked;
  if (eligibleRow) {
    eligibleRow = tmp.eligibleRow;
  }
  let obj = { style: items, children: null };
  items[1] = eligibleRow;
  obj = { style: tmp.rowStatusIcon, source: null };
  if (item.checked) {
    let tmp6Result = tmp6(17692);
  } else {
    tmp6Result = tmp6(17693);
  }
  obj.source = tmp6Result;
  const items1 = [React4(FastImageDefault, obj)];
  obj = { style: tmp.rowTextColumn, children: null };
  const items2 = [
    React4(Text_Text.Text, {
      style: tmp.rowLabel,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: item.checked ? item.checkedLabel : item.uncheckedLabel,
    }),
    React4(Text_Text.Text, {
      variant: "text-sm/normal",
      color: "interactive-text-default",
      children: item.description,
    }),
  ];
  let tmp5Result = null != item.actionHandler && null != item.actionLabel;
  if (tmp5Result) {
    const obj3 = { style: tmp.actionButtonWrapper, children: null };
    ({ actionLabel: obj7.text, actionHandler: obj7.onPress } = item);
    obj3.children = tmp5(tmp10(4975).Button, { text: null, onPress: null, grow: true });
    tmp5Result = tmp5(tmp4, obj3);
    const obj4 = { text: null, onPress: null, grow: true };
  }
  items2[2] = tmp5Result;
  obj.children = items2;
  items1[1] = hasOwnProperty(View, obj);
  obj.children = items1;
  const children = [hasOwnProperty(View, obj)];
  if (item.isLast) {
    tmp5Result = tmp5(tmp10(1178).Spacer, { size: 16 });
  } else {
    const obj5 = { style: tmp.divider };
    tmp5Result = tmp5(tmp6(15217), obj5);
  }
  children[1] = tmp5Result;
  return hasOwnProperty(timestampProducer, { children });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  row: { paddingHorizontal: 24, paddingTop: 16, flex: 0, flexDirection: "row" },
  eligibleRow: { opacity: 0.8 },
  rowStatusIcon: { height: 20, width: 20, marginRight: 16 },
  rowTextColumn: { flex: 1, flexDirection: "column" },
  rowLabel: { marginBottom: 4 },
  actionButtonWrapper: { marginTop: 12 },
  divider: { marginHorizontal: 24 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx",
);

export default function EligibilityChecklist(items) {
  items = items.items;
  if (0 === items.length) {
    return null;
  } else {
    const obj = {
      style: tmp,
      children: items.map((item, index) =>
        React4(EligibilityChecklistRow, { item, isLast: index === items.length - 1 }, item.checkedLabel),
      ),
    };
    return closure_4(View, obj);
  }
}
