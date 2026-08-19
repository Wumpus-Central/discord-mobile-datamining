// discord_app/modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button2 from "../../../../design/components/Button/native/Button.native.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import FormSeparatorDefault from "FormSeparator.tsx";
import registerAssetDefault from "../../../../../_runtime/16913_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/16914_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function EligibilityChecklistRow(item) {
  item = item.item;
  const tmp = callback2();
  const items = [tmp.row, ];
  let eligibleRow = item.checked;
  if (eligibleRow) {
    eligibleRow = tmp.eligibleRow;
  }
  items[1] = eligibleRow;
  let obj = { style: tmp.rowStatusIcon, source: null };
  if (item.checked) {
    let tmp6Result = registerAssetDefault;
  } else {
    tmp6Result = registerAssetDefault2;
  }
  obj[1] = tmp6Result;
  const items1 = [callback(preloadDefault, obj), ];
  obj = { style: tmp.rowTextColumn, children: null };
  const items2 = [callback(Text.Text, { style: tmp.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: item.checked ? item.checkedLabel : item.uncheckedLabel }), callback(Text.Text, { variant: "text-sm/normal", color: "interactive-text-default", children: item.description }), ];
  let tmp5Result = null != item.actionHandler && null != item.actionLabel;
  if (tmp5Result) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.actionButtonWrapper;
    ({ actionLabel: obj7[0], actionHandler: obj7[1] } = item);
    obj3[1] = callback(Button2.Button, { text: null, onPress: null, grow: true });
    tmp5Result = callback(View, obj3);
  }
  items2[2] = tmp5Result;
  obj[1] = items2;
  items1[1] = callback2(View, obj);
  obj[1] = items1;
  const children = [callback2(View, obj), ];
  if (item.isLast) {
    tmp5Result = callback(Button.Spacer, { size: 16 });
  } else {
    const obj5 = { style: null };
    obj5[0] = tmp.divider;
    tmp5Result = callback(FormSeparatorDefault, obj5);
  }
  children[1] = tmp5Result;
  return callback2(closure_6, { children });
}
noopAll;
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ row: { paddingHorizontal: 24, paddingTop: 16, flex: 0, flexDirection: "row" }, eligibleRow: { opacity: 0.8 }, rowStatusIcon: { height: 20, width: 20, marginRight: 16 }, rowTextColumn: { flex: 1, flexDirection: "column" }, rowLabel: { marginBottom: 4 }, actionButtonWrapper: { marginTop: 12 }, divider: { marginHorizontal: 24 } });
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx");

export default function EligibilityChecklist(items) {
  items = items.items;
  if (0 === items.length) {
    return null;
  } else {
    const obj = { style: null, children: null };
    obj[0] = tmp;
    obj[1] = items.map((item, index) => closure_1_4(EligibilityChecklistRow, { item, isLast: index === items.length - 1 }, item.checkedLabel));
    return callback(View, obj);
  }
};