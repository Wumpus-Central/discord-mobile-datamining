// discord_app/modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx
import "noop";
import jsxProd from "jsxProd";
import { ActionSheet } from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { context } from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import { TableRadioRow } from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import { TableRowInner } from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import { TableRowGroupTitle } from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";

let c3;
let c4;
const require = arg1;
function UserSettingsDebugLogsFiltersActionSheet(arg0) {
  let onRefresh;
  let onSortOrderChanged;
  let sortOrder;
  ({ sortOrder, onSortOrderChanged, onRefresh } = arg0);
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["+B9e11"]);
  obj[0] = callback(RedesignBottomSheetTitleHeaderBase /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: false, children: null };
  const obj1 = { label: null, onPress: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj1[0] = intl2.string(getSystemLocale /* getSystemLocale */.t.wzzjk9);
  obj1[1] = onRefresh;
  obj[1] = callback(TableRowInner /* TableRowInner */.TableRow, obj1);
  const items = [callback(TableRowGroupTitle /* TableRowGroupTitle */.TableRowGroup, obj), , ];
  const obj2 = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj2[0] = intl3.string(getSystemLocale /* getSystemLocale */.t.gePre2);
  obj2[1] = sortOrder;
  obj2[2] = onSortOrderChanged;
  const obj3 = { label: null, value: "newest" };
  const intl4 = getSystemLocale /* getSystemLocale */.intl;
  obj3[0] = intl4.string(getSystemLocale /* getSystemLocale */.t.eoXe0r);
  const items1 = [callback(TableRadioRow /* TableRadioRow */.TableRadioRow, obj3), ];
  const obj4 = { label: null, value: "oldest" };
  const intl5 = getSystemLocale /* getSystemLocale */.intl;
  obj4[0] = intl5.string(getSystemLocale /* getSystemLocale */.t.mmeWUF);
  items1[1] = callback(TableRadioRow /* TableRadioRow */.TableRadioRow, obj4);
  obj2[4] = items1;
  items[1] = callback2(context /* context */.TableRadioGroup, obj2);
  items[2] = callback(Button /* Button */.Spacer, { size: 0 });
  obj[1] = items;
  return callback2(ActionSheet /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("ActionSheet").fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx");

export const openUserSettingsDebugLogsFiltersActionSheet = function openUserSettingsDebugLogsFiltersActionSheet(arg0) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { default: UserSettingsDebugLogsFiltersActionSheet };
  obj.openLazy(Promise.resolve(obj), "UserSettingsDebugLogsFiltersActionSheet", arg0);
};