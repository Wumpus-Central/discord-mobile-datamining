// === Module 15407: UserSettingsDebugLogsActionSheet ===

// Module 15407 (UserSettingsDebugLogsActionSheet)
import react2 from "react" /* 576 */;
import intl6 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import TableRow2 from "TableRow" /* 6000 */;
import TableRadioRow3 from "TableRadioRow" /* 6078 */;
import TableRadioGroup2 from "TableRadioGroup" /* 6079 */;
import TableRowGroup2 from "TableRowGroup" /* 6081 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6651 */;
import ActionSheet2 from "ActionSheet" /* 6708 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let intl;
  let intl4;
  let intl5;
  let items;
  let items1;
  let obj4;
  let onRefresh;
  let onSortOrderChanged;
  let sortOrder;
  let tmp12;
  let tmp14;
  let tmp17;
  let tmp7;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(14);
  ({ sortOrder, onSortOrderChanged, onRefresh } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(intl6.t["+B9e11"]) };
    const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    intl = intl6.intl;
    const tmp6 = _false(BottomSheetTitleHeader, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl6.intl;
    const stringResult = intl2.string(intl6.t.wzzjk9);
    cResult[1] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== onRefresh) {
    const obj3 = { hasIcons: false, children: _false(TableRow2.TableRow, obj4) };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    obj4 = { label: tmp7, onPress: onRefresh };
    const tmp11 = _false(TableRowGroup, obj3);
    cResult[2] = onRefresh;
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl6.intl;
    const stringResult1 = intl3.string(intl6.t.gePre2);
    cResult[4] = stringResult1;
    tmp12 = stringResult1;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { label: intl4.string(intl6.t.eoXe0r), value: "newest" };
    const TableRadioRow = TableRadioRow3.TableRadioRow;
    intl4 = intl6.intl;
    const tmp16 = _false(TableRadioRow, obj5);
    cResult[5] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { label: intl5.string(intl6.t.mmeWUF), value: "oldest" };
    const TableRadioRow2 = TableRadioRow3.TableRadioRow;
    intl5 = intl6.intl;
    const tmp19 = _false(TableRadioRow2, obj6);
    cResult[6] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === onSortOrderChanged) {
    let tmp20;
    let tmp22;
    if (cResult[8] === sortOrder) {
      tmp20 = cResult[9];
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp24 = _false(native.Spacer, { size: 0 });
      cResult[10] = tmp24;
      tmp22 = tmp24;
    } else {
      tmp22 = cResult[10];
    }
    if (cResult[11] === tmp9) {
      let tmp25;
      if (cResult[12] === tmp20) {
        tmp25 = cResult[13];
      }
      return tmp25;
    }
    const obj7 = { header: first, children: items };
    items = [tmp9, tmp20, tmp22];
    const tmp27 = React3(ActionSheet2.ActionSheet, obj7);
    cResult[11] = tmp9;
    cResult[12] = tmp20;
    cResult[13] = tmp27;
    tmp25 = tmp27;
  }
  const obj8 = { title: tmp12, defaultValue: sortOrder, onChange: onSortOrderChanged, hasIcons: false, children: items1 };
  items1 = [tmp14, tmp17];
  const tmp21 = React3(TableRadioGroup2.TableRadioGroup, obj8);
  cResult[7] = onSortOrderChanged;
  cResult[8] = sortOrder;
  cResult[9] = tmp21;
  tmp20 = tmp21;
}) : ((arg0) => {
  let BottomSheetTitleHeader;
  let TableRow;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let obj2;
  let obj4;
  let onRefresh;
  let onSortOrderChanged;
  let sortOrder;
  ({ sortOrder, onSortOrderChanged, onRefresh } = arg0);
  const obj = { header: _false(BottomSheetTitleHeader, obj2), children: items };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(intl6.t["+B9e11"]) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl6.intl;
  const obj3 = { hasIcons: false, children: _false(TableRow, obj4) };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  obj4 = { label: intl2.string(intl6.t.wzzjk9), onPress: onRefresh };
  TableRow = TableRow2.TableRow;
  intl2 = intl6.intl;
  items = [_false(TableRowGroup, obj3), , ];
  const obj5 = { title: intl3.string(intl6.t.gePre2), defaultValue: sortOrder, onChange: onSortOrderChanged, hasIcons: false, children: items1 };
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  intl3 = intl6.intl;
  const obj6 = { label: intl4.string(intl6.t.eoXe0r), value: "newest" };
  const TableRadioRow = TableRadioRow3.TableRadioRow;
  intl4 = intl6.intl;
  items1 = [_false(TableRadioRow, obj6), ];
  const obj7 = { label: intl5.string(intl6.t.mmeWUF), value: "oldest" };
  const TableRadioRow2 = TableRadioRow3.TableRadioRow;
  intl5 = intl6.intl;
  items1[1] = _false(TableRadioRow2, obj7);
  items[1] = React3(TableRadioGroup, obj5);
  items[2] = _false(native.Spacer, { size: 0 });
  return React3(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx");

export const openUserSettingsDebugLogsFiltersActionSheet = function openUserSettingsDebugLogsFiltersActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { default: closure_5 };
  obj.openLazy(Promise.resolve(obj2), "UserSettingsDebugLogsFiltersActionSheet", arg0);
};