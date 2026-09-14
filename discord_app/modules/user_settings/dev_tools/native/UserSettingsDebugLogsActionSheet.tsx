// discord_app/modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function UserSettingsDebugLogsFiltersActionSheet(arg0) {
  ({ sortOrder, onSortOrderChanged, onRefresh } = arg0);
  const obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["+B9e11"]);
  obj.header = React3(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  const obj3 = { hasIcons: false, children: null };
  const obj4 = { label: null, onPress: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t.wzzjk9);
  obj4.onPress = onRefresh;
  obj3.children = React3(TableRow.TableRow, obj4);
  const items = [React3(TableRowGroup.TableRowGroup, obj3), ,];
  const obj5 = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
  const intl3 = util.intl;
  obj5.title = intl3.string(util.t.gePre2);
  obj5.defaultValue = sortOrder;
  obj5.onChange = onSortOrderChanged;
  const obj6 = { label: null, value: "newest" };
  const intl4 = util.intl;
  obj6.label = intl4.string(util.t.eoXe0r);
  const items1 = [React3(TableRadioRow.TableRadioRow, obj6)];
  const obj7 = { label: null, value: "oldest" };
  const intl5 = util.intl;
  obj7.label = intl5.string(util.t.mmeWUF);
  items1[1] = React3(TableRadioRow.TableRadioRow, obj7);
  obj5.children = items1;
  items[1] = React4(TableRadioGroup.TableRadioGroup, obj5);
  items[2] = React3(native.Spacer, { size: 0 });
  obj.children = items;
  return React4(ActionSheet.ActionSheet, obj);
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx",
);

export const openUserSettingsDebugLogsFiltersActionSheet = function openUserSettingsDebugLogsFiltersActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(
    Promise.resolve({ default: UserSettingsDebugLogsFiltersActionSheet }),
    "UserSettingsDebugLogsFiltersActionSheet",
    arg0,
  );
};
