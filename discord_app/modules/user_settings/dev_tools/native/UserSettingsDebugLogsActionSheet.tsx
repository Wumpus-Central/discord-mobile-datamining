// === Module 15565: UserSettingsDebugLogsActionSheet ===

// Module 15565 (UserSettingsDebugLogsActionSheet)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import TableRow from "TableRow" /* 5605 */;
import TableRadioGroup from "TableRadioGroup" /* 5685 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import TableRadioRow from "TableRadioRow" /* 5688 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import noop from "module_19" /* 19 */;

require = fn;
function UserSettingsDebugLogsFiltersActionSheet(arg0) {
  ({ sortOrder, onSortOrderChanged, onRefresh } = arg0);
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["+B9e11"]);
  obj.header = React3(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj = { hasIcons: false, children: null };
  const obj1 = { label: null, onPress: null };
  const intl2 = util.intl;
  obj1.label = intl2.string(util.t.wzzjk9);
  obj1.onPress = onRefresh;
  obj.children = React3(TableRow.TableRow, obj1);
  const items = [React3(TableRowGroup.TableRowGroup, obj), , ];
  const obj2 = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
  const intl3 = util.intl;
  obj2.title = intl3.string(util.t.gePre2);
  obj2.defaultValue = sortOrder;
  obj2.onChange = onSortOrderChanged;
  const obj3 = { label: null, value: "newest" };
  const intl4 = util.intl;
  obj3.label = intl4.string(util.t.eoXe0r);
  const items1 = [React3(TableRadioRow.TableRadioRow, obj3), ];
  const obj4 = { label: null, value: "oldest" };
  const intl5 = util.intl;
  obj4.label = intl5.string(util.t.mmeWUF);
  items1[1] = React3(TableRadioRow.TableRadioRow, obj4);
  obj2.children = items1;
  items[1] = React4(TableRadioGroup.TableRadioGroup, obj2);
  items[2] = React3(native.Spacer, { size: 0 });
  obj.children = items;
  return React4(ActionSheet.ActionSheet, obj);
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx");

export const openUserSettingsDebugLogsFiltersActionSheet = function openUserSettingsDebugLogsFiltersActionSheet(arg0) {
  const obj = { default: UserSettingsDebugLogsFiltersActionSheet };
  obj.openLazy(Promise.resolve(obj), "UserSettingsDebugLogsFiltersActionSheet", arg0);
};