// === Module 15392: UserSettingsDebugLogsActionSheet ===

// Module 15392 (UserSettingsDebugLogsActionSheet)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import TableRow from "TableRow" /* 5993 */;
import TableRadioRow from "TableRadioRow" /* 6071 */;
import TableRadioGroup from "TableRadioGroup" /* 6072 */;
import TableRowGroup from "TableRowGroup" /* 6074 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet from "ActionSheet" /* 6701 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ sortOrder, onSortOrderChanged, onRefresh } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t["+B9e11"]);
    const tmp6 = React3(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult = intl2.string(util.t.wzzjk9);
    cResult[1] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== onRefresh) {
    const obj3 = { hasIcons: false, children: null };
    const obj4 = { label: tmp7, onPress: onRefresh };
    obj3.children = React3(TableRow.TableRow, obj4);
    const tmp11 = React3(TableRowGroup.TableRowGroup, obj3);
    cResult[2] = onRefresh;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult1 = intl3.string(util.t.gePre2);
    cResult[4] = stringResult1;
    let tmp12 = stringResult1;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { label: null, value: "newest" };
    const intl4 = util.intl;
    obj5.label = intl4.string(util.t.eoXe0r);
    const tmp16 = React3(TableRadioRow.TableRadioRow, obj5);
    cResult[5] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { label: null, value: "oldest" };
    const intl5 = util.intl;
    obj6.label = intl5.string(util.t.mmeWUF);
    const tmp19 = React3(TableRadioRow.TableRadioRow, obj6);
    cResult[6] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === onSortOrderChanged) {
    if (cResult[8] === sortOrder) {
      let tmp20 = cResult[9];
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp24 = React3(native.Spacer, { size: 0 });
      cResult[10] = tmp24;
      let tmp22 = tmp24;
    } else {
      tmp22 = cResult[10];
    }
    if (cResult[11] === tmp9) {
      if (cResult[12] === tmp20) {
        let tmp25 = cResult[13];
      }
      return tmp25;
    }
    const obj7 = { header: first, children: null };
    const items = [tmp9, tmp20, tmp22];
    obj7.children = items;
    const tmp27 = React4(ActionSheet.ActionSheet, obj7);
    cResult[11] = tmp9;
    cResult[12] = tmp20;
    cResult[13] = tmp27;
    tmp25 = tmp27;
  }
  const obj8 = { title: tmp12, defaultValue: sortOrder, onChange: onSortOrderChanged, hasIcons: false, children: null };
  const items1 = [tmp14, tmp17];
  obj8.children = items1;
  const tmp21 = React4(TableRadioGroup.TableRadioGroup, obj8);
  cResult[7] = onSortOrderChanged;
  cResult[8] = sortOrder;
  cResult[9] = tmp21;
  tmp20 = tmp21;
}) : ((arg0) => {
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
  const items = [React3(TableRowGroup.TableRowGroup, obj3), , ];
  const obj5 = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
  const intl3 = util.intl;
  obj5.title = intl3.string(util.t.gePre2);
  obj5.defaultValue = sortOrder;
  obj5.onChange = onSortOrderChanged;
  const obj6 = { label: null, value: "newest" };
  const intl4 = util.intl;
  obj6.label = intl4.string(util.t.eoXe0r);
  const items1 = [React3(TableRadioRow.TableRadioRow, obj6), ];
  const obj7 = { label: null, value: "oldest" };
  const intl5 = util.intl;
  obj7.label = intl5.string(util.t.mmeWUF);
  items1[1] = React3(TableRadioRow.TableRadioRow, obj7);
  obj5.children = items1;
  items[1] = React4(TableRadioGroup.TableRadioGroup, obj5);
  items[2] = React3(native.Spacer, { size: 0 });
  obj.children = items;
  return React4(ActionSheet.ActionSheet, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx");

export const openUserSettingsDebugLogsFiltersActionSheet = function openUserSettingsDebugLogsFiltersActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_5 }), "UserSettingsDebugLogsFiltersActionSheet", arg0);
};