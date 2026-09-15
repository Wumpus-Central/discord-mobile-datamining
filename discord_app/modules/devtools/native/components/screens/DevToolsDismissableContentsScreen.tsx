// === Module 15715: DevToolsDismissableContentsScreen ===

// Module 15715 (DevToolsDismissableContentsScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 1941 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import TrashIcon from "TrashIcon" /* 4597 */;
import Text_Text from "Text/Text" /* 4635 */;
import fuzzysearchDefault from "fuzzysearch" /* 5602 */;
import TableRow from "TableRow" /* 5690 */;
import TableRowArrow from "TableRowArrow" /* 5697 */;
import TableRowGroup from "TableRowGroup" /* 5772 */;
import SearchField from "SearchField" /* 7157 */;
import TableSwitchRow from "TableSwitchRow" /* 7307 */;
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators" /* 10368 */;
import SearchEmpty from "SearchEmpty" /* 10449 */;
import toggleDismissibleContentDismissStateDefault from "toggleDismissibleContentDismissState" /* 15716 */;
import DoubleCheckmarkIcon from "DoubleCheckmarkIcon" /* 15717 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 1948 */;

require = fn;
function DismissableContentsEmpty() {
  const obj = { style: closure_10().emptyState, children: null };
  const obj2 = { style: { marginBottom: nativeDefault.space.PX_16 }, variant: "heading-lg/semibold", children: "No results found" };
  const items = [React5(Text_Text.Text, obj2), React5(SearchEmpty.SearchEmpty, {})];
  obj.children = items;
  return React6(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4639);
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
let closure_11 = noop.memo((content) => {
  const label = content.content;
  ({ start, end } = content);
  ({ isDismissed, handleToggleDismissState } = toggleDismissibleContentDismissStateDefault(dismissible_content.DismissibleContent[label]));
  return React5(TableSwitchRow.TableSwitchRow, { start, end, onValueChange, value, label });
});
let closure_12 = noop.memo((arg0) => {
  ({ dailyCapOverridden, newUserMinAgeRequiredOverridden, initialSearchQuery, onSearchChange } = arg0);
  const tmp = closure_10();
  const obj = { children: null };
  const obj2 = { style: tmp.headerSection, children: null };
  const obj3 = { title: "Global Overrides", hasIcons: false, children: null };
  const items = [React5(TableSwitchRow.TableSwitchRow, { onValueChange: DismissibleContentFrameworkActionCreators.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" }), ];
  const obj4 = { onValueChange: DismissibleContentFrameworkActionCreators.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" };
  items[1] = React5(TableSwitchRow.TableSwitchRow, { onValueChange: DismissibleContentFrameworkActionCreators.overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" });
  obj3.children = items;
  obj2.children = React6(TableRowGroup.TableRowGroup, obj3);
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
  obj6.children = React6(TableRowGroup.TableRowGroup, obj7);
  items1[1] = React5(View, obj6);
  const obj10 = { label: "Dismiss all dismissible contents", onPress: UserSettingsProtoActionCreators.checkAllDismissedContents, icon: React5(DoubleCheckmarkIcon.DoubleCheckmarkIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) };
  items1[2] = React5(View, { style: tmp.search, children: React5(SearchField.SearchField, { size: "md", defaultValue: initialSearchQuery, onChange: onSearchChange }) });
  items1[3] = React5(Text_Text.Text, { style: tmp.sectionHeader, variant: "text-sm/semibold", color: "text-default", children: "Dismissible Contents" });
  obj.children = items1;
  return React6(React7, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx");

export default function DevToolsDismissableContentsScreen() {
  const tmp = callback1();
  const ref = initialSearchQuery.useRef(null);
  importDefault = initialSearchQuery.useRef(0);
  const tmp2 = useSafeAreaInsetsDefault();
  let obj = ref(10063);
  [dependencyMap, tmp5] = ref(10063).useLocalStorageState("devtools-dc-search", "");
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
  let tmp4 = _slicedToArray(ref(10063).useLocalStorageState("devtools-dc-search", ""), 2);
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
  obj4.ListEmptyComponent = DismissableContentsEmpty;
  obj4.keyExtractor = function keyExtractor(arg0) {
    return arg0;
  };
  obj4.renderItem = callback3;
  obj4.onScroll = callback2;
  obj3.children = dailyCapOverridden(ref(9006).FlashList, obj4);
  return dailyCapOverridden(first1, obj3);
};