// discord_app/modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRowInner from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import context from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function UserSettingsDebugLogsFiltersActionSheet(arg0) {
  ({ sortOrder, onSortOrderChanged, onRefresh } = arg0);
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["+B9e11"]);
  obj[0] = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { hasIcons: false, children: null };
  obj1 = { label: null, onPress: null };
  const intl2 = getSystemLocale.intl;
  obj1[0] = intl2.string(getSystemLocale.t.wzzjk9);
  obj1[1] = onRefresh;
  obj[1] = callback(TableRowInner.TableRow, obj1);
  const items = [callback(TableRowGroupTitle.TableRowGroup, obj), , ];
  const obj2 = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
  const intl3 = getSystemLocale.intl;
  obj2[0] = intl3.string(getSystemLocale.t.gePre2);
  obj2[1] = sortOrder;
  obj2[2] = onSortOrderChanged;
  const obj3 = { label: null, value: "newest" };
  const intl4 = getSystemLocale.intl;
  obj3[0] = intl4.string(getSystemLocale.t.eoXe0r);
  const items1 = [callback(TableRadioRow.TableRadioRow, obj3), ];
  const obj4 = { label: null, value: "oldest" };
  const intl5 = getSystemLocale.intl;
  obj4[0] = intl5.string(getSystemLocale.t.mmeWUF);
  items1[1] = callback(TableRadioRow.TableRadioRow, obj4);
  obj2[4] = items1;
  items[1] = callback2(context.TableRadioGroup, obj2);
  items[2] = callback(Button.Spacer, { size: 0 });
  obj[1] = items;
  return callback2(ActionSheet.ActionSheet, obj);
}
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx");

export const openUserSettingsDebugLogsFiltersActionSheet = function openUserSettingsDebugLogsFiltersActionSheet(arg0) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { default: UserSettingsDebugLogsFiltersActionSheet };
  obj.openLazy(Promise.resolve(obj), "UserSettingsDebugLogsFiltersActionSheet", arg0);
};