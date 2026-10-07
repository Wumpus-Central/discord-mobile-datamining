// === Module 15461: DevToolsDismissableContentsScreen ===

// Module 15461 (DevToolsDismissableContentsScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2033 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import TrashIcon from "TrashIcon" /* 4853 */;
import Text_Text from "Text/Text" /* 4892 */;
import fuzzysearchDefault from "fuzzysearch" /* 5709 */;
import TableRow from "TableRow" /* 6000 */;
import TableRowArrow from "TableRowArrow" /* 6007 */;
import TableRowGroup from "TableRowGroup" /* 6081 */;
import SearchField from "SearchField" /* 6554 */;
import TableSwitchRow from "TableSwitchRow" /* 6705 */;
import SearchEmpty from "SearchEmpty" /* 9934 */;
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators" /* 10060 */;
import toggleDismissibleContentDismissStateDefault from "toggleDismissibleContentDismissState" /* 15462 */;
import DoubleCheckmarkIcon from "DoubleCheckmarkIcon" /* 15463 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 2039 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, contentContainer: null, headerSection: null, search: null, sectionHeader: null, emptyState: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj.headerSection = { paddingBottom: nativeDefault.space.PX_16 };
let obj5 = { paddingBottom: nativeDefault.space.PX_16 };
obj.search = { paddingBottom: nativeDefault.space.PX_8 };
let obj6 = { paddingBottom: nativeDefault.space.PX_8 };
obj.sectionHeader = { paddingBottom: nativeDefault.space.PX_8 };
let obj7 = { paddingBottom: nativeDefault.space.PX_8 };
obj.emptyState = { marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ content, start, end } = arg0);
  const tmp4 = dismissible_content.DismissibleContent[content];
  if (cResult[0] !== tmp4) {
    const tmp7 = toggleDismissibleContentDismissStateDefault(tmp4);
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  ({ isDismissed, handleToggleDismissState } = tmp5);
  if (cResult[2] === content) {
    if (cResult[3] === end) {
      if (cResult[4] === handleToggleDismissState) {
        if (cResult[5] === isDismissed) {
          if (cResult[6] === start) {
            let tmp8 = cResult[7];
          }
          return tmp8;
        }
      }
    }
  }
  const tmp9 = React5(TableSwitchRow.TableSwitchRow, { start, end, onValueChange: handleToggleDismissState, value: isDismissed, label: content });
  cResult[2] = content;
  cResult[3] = end;
  cResult[4] = handleToggleDismissState;
  cResult[5] = isDismissed;
  cResult[6] = start;
  cResult[7] = tmp9;
  tmp8 = tmp9;
}) : ((content) => {
  const label = content.content;
  ({ start, end } = content);
  ({ isDismissed, handleToggleDismissState } = toggleDismissibleContentDismissStateDefault(dismissible_content.DismissibleContent[label]));
  return React5(TableSwitchRow.TableSwitchRow, { start, end, onValueChange, value, label });
}));
ReactCompilerGating = fn(558);
let closure_12 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(28);
  ({ dailyCapOverridden, newUserMinAgeRequiredOverridden, initialSearchQuery, onSearchChange } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] !== dailyCapOverridden) {
    const obj2 = { onValueChange: DismissibleContentFrameworkActionCreators.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" };
    const tmp7 = React5(TableSwitchRow.TableSwitchRow, obj2);
    cResult[0] = dailyCapOverridden;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== newUserMinAgeRequiredOverridden) {
    const obj3 = { onValueChange: DismissibleContentFrameworkActionCreators.overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" };
    const tmp10 = React5(TableSwitchRow.TableSwitchRow, obj3);
    cResult[2] = newUserMinAgeRequiredOverridden;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === tmp8) {
      let tmp11 = cResult[6];
    }
    if (cResult[7] === tmp4.headerSection) {
      if (cResult[8] === tmp11) {
        let tmp13 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { label: "Clear all dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) };
        const tmp20 = React5(TableRow.TableRow, obj4);
        cResult[10] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { label: "Clear all guild dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearGuildDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) };
        const tmp23 = React5(TableRow.TableRow, obj5);
        cResult[11] = tmp23;
        let tmp21 = tmp23;
      } else {
        tmp21 = cResult[11];
      }
      const _Symbol3 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { title: "Bulk actions", hasIcons: true, children: null };
        const items = [tmp18, tmp21, ];
        const obj7 = { label: "Dismiss all dismissible contents", onPress: UserSettingsProtoActionCreators.checkAllDismissedContents, icon: React5(DoubleCheckmarkIcon.DoubleCheckmarkIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) };
        items[2] = React5(TableRow.TableRow, obj7);
        obj6.children = items;
        const tmp27 = closure_1_8(TableRowGroup.TableRowGroup, obj6);
        cResult[12] = tmp27;
        let tmp24 = tmp27;
      } else {
        tmp24 = cResult[12];
      }
      if (cResult[13] !== tmp4.headerSection) {
        const obj8 = { style: tmp4.headerSection, children: tmp24 };
        const tmp31 = React5(View, obj8);
        cResult[13] = tmp4.headerSection;
        cResult[14] = tmp31;
        let tmp28 = tmp31;
      } else {
        tmp28 = cResult[14];
      }
      if (cResult[15] === initialSearchQuery) {
        if (cResult[16] === onSearchChange) {
          let tmp32 = cResult[17];
        }
        if (cResult[18] === tmp4.search) {
          if (cResult[19] === tmp32) {
            let tmp35 = cResult[20];
          }
          if (cResult[21] !== tmp4.sectionHeader) {
            const obj9 = { style: tmp4.sectionHeader, variant: "text-sm/semibold", color: "text-default", children: "Dismissible Contents" };
            const tmp41 = React5(Text_Text.Text, obj9);
            cResult[21] = tmp4.sectionHeader;
            cResult[22] = tmp41;
            let tmp39 = tmp41;
          } else {
            tmp39 = cResult[22];
          }
          if (cResult[23] === tmp35) {
            if (cResult[24] === tmp39) {
              if (cResult[25] === tmp13) {
                if (cResult[26] === tmp28) {
                  let tmp42 = cResult[27];
                }
                return tmp42;
              }
            }
          }
          const obj10 = { children: null };
          const items1 = [tmp13, tmp28, tmp35, tmp39];
          obj10.children = items1;
          const tmp45 = closure_1_8(options, obj10);
          cResult[23] = tmp35;
          cResult[24] = tmp39;
          cResult[25] = tmp13;
          cResult[26] = tmp28;
          cResult[27] = tmp45;
          tmp42 = tmp45;
        }
        const obj11 = { style: tmp4.search, children: tmp32 };
        const tmp38 = React5(View, obj11);
        cResult[18] = tmp4.search;
        cResult[19] = tmp32;
        cResult[20] = tmp38;
        tmp35 = tmp38;
      }
      const obj12 = { size: "md", defaultValue: initialSearchQuery, onChange: onSearchChange };
      const tmp34 = React5(SearchField.SearchField, obj12);
      cResult[15] = initialSearchQuery;
      cResult[16] = onSearchChange;
      cResult[17] = tmp34;
      tmp32 = tmp34;
    }
    const obj13 = { style: tmp4.headerSection, children: tmp11 };
    const tmp16 = React5(View, obj13);
    cResult[7] = tmp4.headerSection;
    cResult[8] = tmp11;
    cResult[9] = tmp16;
    tmp13 = tmp16;
  }
  const obj14 = { title: "Global Overrides", hasIcons: false, children: null };
  const items2 = [tmp5, tmp8];
  obj14.children = items2;
  const tmp12 = closure_1_8(TableRowGroup.TableRowGroup, obj14);
  cResult[4] = tmp5;
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  ({ dailyCapOverridden, newUserMinAgeRequiredOverridden, initialSearchQuery, onSearchChange } = arg0);
  const tmp = closure_10();
  const obj = { children: null };
  const obj2 = { style: tmp.headerSection, children: null };
  const obj3 = { title: "Global Overrides", hasIcons: false, children: null };
  const items = [React5(TableSwitchRow.TableSwitchRow, { onValueChange: DismissibleContentFrameworkActionCreators.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" }), ];
  const obj4 = { onValueChange: DismissibleContentFrameworkActionCreators.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" };
  items[1] = React5(TableSwitchRow.TableSwitchRow, { onValueChange: DismissibleContentFrameworkActionCreators.overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" });
  obj3.children = items;
  obj2.children = closure_1_8(TableRowGroup.TableRowGroup, obj3);
  const items1 = [React5(View, obj2), , , ];
  const obj6 = { style: tmp.headerSection, children: null };
  const obj7 = { title: "Bulk actions", hasIcons: true, children: null };
  const obj5 = { onValueChange: DismissibleContentFrameworkActionCreators.overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" };
  const items2 = [React5(TableRow.TableRow, { label: "Clear all dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) }), , ];
  const obj8 = { label: "Clear all dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) };
  items2[1] = React5(TableRow.TableRow, { label: "Clear all guild dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearGuildDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) });
  const obj9 = { label: "Clear all guild dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearGuildDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) };
  items2[2] = React5(TableRow.TableRow, { label: "Dismiss all dismissible contents", onPress: UserSettingsProtoActionCreators.checkAllDismissedContents, icon: React5(DoubleCheckmarkIcon.DoubleCheckmarkIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) });
  obj7.children = items2;
  obj6.children = closure_1_8(TableRowGroup.TableRowGroup, obj7);
  items1[1] = React5(View, obj6);
  const obj10 = { label: "Dismiss all dismissible contents", onPress: UserSettingsProtoActionCreators.checkAllDismissedContents, icon: React5(DoubleCheckmarkIcon.DoubleCheckmarkIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) };
  items1[2] = React5(View, { style: tmp.search, children: React5(SearchField.SearchField, { size: "md", defaultValue: initialSearchQuery, onChange: onSearchChange }) });
  items1[3] = React5(Text_Text.Text, { style: tmp.sectionHeader, variant: "text-sm/semibold", color: "text-default", children: "Dismissible Contents" });
  obj.children = items1;
  return closure_1_8(options, obj);
}));
ReactCompilerGating = fn(558);
const ListEmptyComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: null, variant: "heading-lg/semibold", children: "No results found" };
    const obj3 = { marginBottom: nativeDefault.space.PX_16 };
    obj2.style = obj3;
    const tmp9 = React5(Text_Text.Text, obj2);
    const tmp10 = React5(SearchEmpty.SearchEmpty, {});
    cResult[0] = tmp9;
    cResult[1] = tmp10;
    tmp5 = tmp9;
    tmp6 = tmp10;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4.emptyState) {
    const obj4 = { style: tmp4.emptyState, children: null };
    const items = [tmp5, tmp6];
    obj4.children = items;
    const tmp14 = closure_1_8(View, obj4);
    cResult[2] = tmp4.emptyState;
    cResult[3] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[3];
  }
  return tmp11;
}) : (() => {
  const obj = { style: closure_10().emptyState, children: null };
  const obj2 = { style: { marginBottom: nativeDefault.space.PX_16 }, variant: "heading-lg/semibold", children: "No results found" };
  const items = [React5(Text_Text.Text, obj2), React5(SearchEmpty.SearchEmpty, {})];
  obj.children = items;
  return closure_1_8(View, obj);
});
ReactCompilerGating = fn(558);
let obj8 = { marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = ref(first[8]).c(31);
  closure_10();
  require("useSafeAreaInsets")();
  ref = noop.useRef(null);
  importDefault = noop.useRef(0);
  let obj = ref(first[8]);
  const tmp = ref;
  const tmp2 = first;
  const tmp8 = _slicedToArray(ref(first[24]).useLocalStorageState("devtools-dc-search", ""), 2);
  first = tmp8[0];
  _slicedToArray = tmp10;
  if (cResult[0] !== first) {
    const fn = function o() {
      let str = first;
      if (first == null) {
        str = "";
      }
      return str;
    };
    cResult[0] = first;
    cResult[1] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[1];
  }
  const first1 = tmp7(obj2.useState(tmp11), 1)[0];
  if (cResult[2] !== first) {
    class D {
      constructor() {
        str = closure_2;
        if (closure_2 == null) {
          str = "";
        }
        items = [];
        tmp = "" === str;
        for (const key10013 in closure_0(closure_2[9]).DismissibleContent) {
          tmp9 = key10013;
          tmp4Result = tmp;
          if (tmp) {
          } else {
            tmp2 = closure_1;
            tmp3 = closure_2;
            tmp4 = closure_1(closure_2[22]);
            formatted = str.toLowerCase();
            tmp4Result = tmp4(formatted, key10013.toLowerCase());
          }
          if (!tmp4Result) {
          } else {
            _isNaN = isNaN;
            _Number = Number;
            tmp4Result = isNaN(Number(key10013));
          }
          if (!tmp4Result) {
            continue;
          } else {
            arr1 = items.push(key10013);
            continue;
          }
          continue;
        }
        sorted = items.sort((localeCompare, arg1) => localeCompare.localeCompare(arg1));
        return items;
      }
    }
    cResult[2] = first;
    cResult[3] = D;
  } else {
    class D {
      constructor() {
        str = closure_2;
        if (closure_2 == null) {
          str = "";
        }
        items = [];
        tmp = "" === str;
        for (const key10013 in closure_0(closure_2[9]).DismissibleContent) {
          tmp9 = key10013;
          tmp4Result = tmp;
          if (tmp) {
          } else {
            tmp2 = closure_1;
            tmp3 = closure_2;
            tmp4 = closure_1(closure_2[22]);
            formatted = str.toLowerCase();
            tmp4Result = tmp4(formatted, key10013.toLowerCase());
          }
          if (!tmp4Result) {
          } else {
            _isNaN = isNaN;
            _Number = Number;
            tmp4Result = isNaN(Number(key10013));
          }
          if (!tmp4Result) {
            continue;
          } else {
            arr1 = items.push(key10013);
            continue;
          }
          continue;
        }
        sorted = items.sort((localeCompare, arg1) => localeCompare.localeCompare(arg1));
        return items;
      }
    }
  }
  [noop, closure_5] = noop.useState(D);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        str = closure_2;
        if (closure_2 == null) {
          str = "";
        }
        items = [];
        tmp = "" === str;
        for (const key10013 in closure_0(closure_2[9]).DismissibleContent) {
          tmp9 = key10013;
          tmp4Result = tmp;
          if (tmp) {
          } else {
            tmp2 = closure_1;
            tmp3 = closure_2;
            tmp4 = closure_1(closure_2[22]);
            formatted = str.toLowerCase();
            tmp4Result = tmp4(formatted, key10013.toLowerCase());
          }
          if (!tmp4Result) {
          } else {
            _isNaN = isNaN;
            _Number = Number;
            tmp4Result = isNaN(Number(key10013));
          }
          if (!tmp4Result) {
            continue;
          } else {
            arr1 = items.push(key10013);
            continue;
          }
          continue;
        }
        sorted = items.sort((localeCompare, arg1) => localeCompare.localeCompare(arg1));
        return items;
      }
    }
    let items = [DismissibleContentFrameworkStore];
    const fn2 = function k() {
      return { dailyCapOverridden: M.dailyCapOverridden, newUserMinAgeRequiredOverridden: M.newUserMinAgeRequiredOverridden };
    };
    cResult[4] = items;
    cResult[5] = fn2;
    let tmp16 = fn2;
    const tmp15 = items;
  } else {
    class D {
      constructor() {
        str = closure_2;
        if (closure_2 == null) {
          str = "";
        }
        items = [];
        tmp = "" === str;
        for (const key10013 in closure_0(closure_2[9]).DismissibleContent) {
          tmp9 = key10013;
          tmp4Result = tmp;
          if (tmp) {
          } else {
            tmp2 = closure_1;
            tmp3 = closure_2;
            tmp4 = closure_1(closure_2[22]);
            formatted = str.toLowerCase();
            tmp4Result = tmp4(formatted, key10013.toLowerCase());
          }
          if (!tmp4Result) {
          } else {
            _isNaN = isNaN;
            _Number = Number;
            tmp4Result = isNaN(Number(key10013));
          }
          if (!tmp4Result) {
            continue;
          } else {
            arr1 = items.push(key10013);
            continue;
          }
          continue;
        }
        sorted = items.sort((localeCompare, arg1) => localeCompare.localeCompare(arg1));
        return items;
      }
    }
    tmp16 = cResult[5];
  }
  const obj3 = ref(first[24]);
  const stateFromStoresObject = tmp(tmp2[25]).useStateFromStoresObject(tmp15, tmp16);
  ({ dailyCapOverridden, newUserMinAgeRequiredOverridden } = stateFromStoresObject);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        current = closure_1.current;
        animationFrame = requestAnimationFrame(() => {
          current = ref.current;
          if (current != null) {
            const obj = { offset: current, animated: false };
            current.scrollToOffset(obj);
          }
        });
        return;
      }
    }
    cResult[6] = M;
  } else {
    class M {
      constructor() {
        current = closure_1.current;
        animationFrame = requestAnimationFrame(() => {
          current = ref.current;
          if (current != null) {
            const obj = { offset: current, animated: false };
            current.scrollToOffset(obj);
          }
        });
        return;
      }
    }
  }
  DismissibleContentFrameworkStore = M;
  if (cResult[7] !== tmp8[1]) {
    class F {
      constructor(arg0) {
        tmp = closure_3(arg0);
        items = [];
        tmp2 = closure_5;
        tmp3 = "" === arg0;
        for (const key10015 in closure_0(closure_2[9]).DismissibleContent) {
          tmp13 = key10015;
          tmp6Result = tmp3;
          if (tmp3) {
          } else {
            tmp4 = closure_1;
            tmp5 = closure_2;
            tmp6 = closure_1(closure_2[22]);
            formatted = arg0.toLowerCase();
            tmp6Result = tmp6(formatted, key10015.toLowerCase());
          }
          if (!tmp6Result) {
          } else {
            _isNaN = isNaN;
            _Number = Number;
            tmp6Result = isNaN(Number(key10015));
          }
          if (!tmp6Result) {
            continue;
          } else {
            arr1 = items.push(key10015);
            continue;
          }
          continue;
        }
        sorted = items.sort((localeCompare, arg1) => localeCompare.localeCompare(arg1));
        tmp2Result = tmp2(items);
        tmp12 = closure_6();
        return;
      }
    }
    cResult[7] = tmp10;
    cResult[8] = F;
  } else {
    class F {
      constructor(arg0) {
        tmp = closure_3(arg0);
        items = [];
        tmp2 = closure_5;
        tmp3 = "" === arg0;
        for (const key10015 in closure_0(closure_2[9]).DismissibleContent) {
          tmp13 = key10015;
          tmp6Result = tmp3;
          if (tmp3) {
          } else {
            tmp4 = closure_1;
            tmp5 = closure_2;
            tmp6 = closure_1(closure_2[22]);
            formatted = arg0.toLowerCase();
            tmp6Result = tmp6(formatted, key10015.toLowerCase());
          }
          if (!tmp6Result) {
          } else {
            _isNaN = isNaN;
            _Number = Number;
            tmp6Result = isNaN(Number(key10015));
          }
          if (!tmp6Result) {
            continue;
          } else {
            arr1 = items.push(key10015);
            continue;
          }
          continue;
        }
        sorted = items.sort((localeCompare, arg1) => localeCompare.localeCompare(arg1));
        tmp2Result = tmp2(items);
        tmp12 = closure_6();
        return;
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor(arg0) {
        closure_1.current = arg0.nativeEvent.contentOffset.y;
        return;
      }
    }
    cResult[9] = N;
  } else {
    class N {
      constructor(arg0) {
        closure_1.current = arg0.nativeEvent.contentOffset.y;
        return;
      }
    }
  }
  if (cResult[10] === dailyCapOverridden) {
    class N {
      constructor(arg0) {
        closure_1.current = arg0.nativeEvent.contentOffset.y;
        return;
      }
    }
  }
  const tmpResult = tmp(tmp2[25]);
  cResult[10] = dailyCapOverridden;
  cResult[11] = F;
  cResult[12] = first1;
  cResult[13] = newUserMinAgeRequiredOverridden;
  cResult[14] = closure_7(closure_12, { dailyCapOverridden, newUserMinAgeRequiredOverridden, initialSearchQuery: first1, onSearchChange: F });
  const tmp21 = closure_7(closure_12, { dailyCapOverridden, newUserMinAgeRequiredOverridden, initialSearchQuery: first1, onSearchChange: F });
}) : (() => {
  const tmp = callback1();
  const ref = initialSearchQuery.useRef(null);
  importDefault = initialSearchQuery.useRef(0);
  const tmp2 = useSafeAreaInsetsDefault();
  let obj = ref(9606);
  [dependencyMap, tmp5] = ref(9606).useLocalStorageState("devtools-dc-search", "");
  _slicedToArray = tmp5;
  initialSearchQuery = _slicedToArray(initialSearchQuery.useState(() => {
    let str = dependencyMap;
    if (dependencyMap == null) {
      str = "";
    }
    return str;
  }), 1)[0];
  [first1, closure_6] = initialSearchQuery.useState(() => {
    let str = dependencyMap;
    if (dependencyMap == null) {
      str = "";
    }
    const items = [];
    for (const key10013 in dismissible_content.DismissibleContent) {
      let isNaNResult = tmp;
      if (!tmp) {
        let tmp4 = fuzzysearchDefault;
        let formatted = str.toLowerCase();
        isNaNResult = tmp4(formatted, key10013.toLowerCase());
      }
      if (isNaNResult) {
        let _isNaN = isNaN;
        let _Number = Number;
        isNaNResult = isNaN(Number(key10013));
      }
      if (!isNaNResult) {
        continue;
      } else {
        let arr = items.push(key10013);
        continue;
      }
      continue;
    }
    const sorted = items.sort((localeCompare, arg1) => localeCompare.localeCompare(arg1));
    return items;
  });
  let tmp4 = _slicedToArray(ref(9606).useLocalStorageState("devtools-dc-search", ""), 2);
  let items = [closure_6];
  const stateFromStoresObject = ref(504).useStateFromStoresObject(items, () => ({ dailyCapOverridden: closure_6.dailyCapOverridden, newUserMinAgeRequiredOverridden: closure_6.newUserMinAgeRequiredOverridden }));
  const dailyCapOverridden = stateFromStoresObject.dailyCapOverridden;
  const newUserMinAgeRequiredOverridden = stateFromStoresObject.newUserMinAgeRequiredOverridden;
  const callback = initialSearchQuery.useCallback(() => {
    let current = ref.current;
    const animationFrame = requestAnimationFrame(() => {
      current = ref.current;
      if (current != null) {
        const obj = { offset: current, animated: false };
        current.scrollToOffset(obj);
      }
    });
  }, []);
  const items1 = [tmp5, callback];
  callback1 = initialSearchQuery.useCallback((str) => {
    dependencyMap(str);
    const items = [];
    for (const key10015 in dismissible_content.DismissibleContent) {
      let isNaNResult = tmp3;
      if (!tmp3) {
        let tmp6 = fuzzysearchDefault;
        let formatted = arg0.toLowerCase();
        isNaNResult = tmp6(formatted, key10015.toLowerCase());
      }
      if (isNaNResult) {
        let _isNaN = isNaN;
        let _Number = Number;
        isNaNResult = isNaN(Number(key10015));
      }
      if (!isNaNResult) {
        continue;
      } else {
        let arr = items.push(key10015);
        continue;
      }
      continue;
    }
    const sorted = items.sort((localeCompare, arg1) => localeCompare.localeCompare(arg1));
    closure_6(items);
    callback();
  }, items1);
  const items2 = [dailyCapOverridden, newUserMinAgeRequiredOverridden, initialSearchQuery, callback1];
  const callback2 = initialSearchQuery.useCallback((nativeEvent) => {
    closure_1.current = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const items3 = [first1.length];
  const memo = initialSearchQuery.useMemo(() => React5(closure_12, { dailyCapOverridden, newUserMinAgeRequiredOverridden, initialSearchQuery, onSearchChange: callback1 }), items2);
  const obj3 = { style: tmp.container, children: null };
  const callback3 = initialSearchQuery.useCallback((content) => {
    const index = content.index;
    return React5(closure_11, { content: content.item, start: 0 === index, end: index === first1.length - 1 });
  }, items3);
  const obj4 = { ref, data: first1, contentContainerStyle: null, keyboardShouldPersistTaps: "handled", keyboardDismissMode: "on-drag", automaticallyAdjustKeyboardInsets: true, ListHeaderComponent: null, ListEmptyComponent: null, keyExtractor: null, renderItem: null, onScroll: null, scrollEventThrottle: 16 };
  const items4 = [tmp.contentContainer, ];
  const obj2 = ref(504);
  items4[1] = { paddingBottom: tmp2.bottom + nativeDefault.space.PX_16 };
  obj4.contentContainerStyle = items4;
  obj4.ListHeaderComponent = memo;
  obj4.ListEmptyComponent = ListEmptyComponent;
  obj4.keyExtractor = function keyExtractor(arg0) {
    return arg0;
  };
  obj4.renderItem = callback3;
  obj4.onScroll = callback2;
  obj3.children = dailyCapOverridden(ref(8404).FlashList, obj4);
  return dailyCapOverridden(first1, obj3);
});