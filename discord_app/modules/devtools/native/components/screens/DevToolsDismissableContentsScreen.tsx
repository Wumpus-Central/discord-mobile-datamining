// === Module 15615: DevToolsDismissableContentsScreen ===

// Module 15615 (DevToolsDismissableContentsScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 1940 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import TrashIcon from "TrashIcon" /* 4518 */;
import Text_Text from "Text/Text" /* 4556 */;
import fuzzysearchDefault from "fuzzysearch" /* 5517 */;
import TableRow from "TableRow" /* 5605 */;
import TableRowArrow from "TableRowArrow" /* 5612 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import SearchField from "SearchField" /* 7050 */;
import TableSwitchRow from "TableSwitchRow" /* 7201 */;
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators" /* 10237 */;
import SearchEmpty from "SearchEmpty" /* 10317 */;
import useBountiesAutoScroll from "useBountiesAutoScroll" /* 15012 */;
import toggleDismissibleContentDismissStateDefault from "toggleDismissibleContentDismissState" /* 15616 */;
import DoubleCheckmarkIcon from "DoubleCheckmarkIcon" /* 15617 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 1947 */;

require = fn;
function DismissableContentsEmpty() {
  let obj = { style: closure_10().emptyState, children: null };
  obj = { style: null, variant: "heading-lg/semibold", children: "No results found" };
  obj = { marginBottom: nativeDefault.space.PX_16 };
  obj.style = obj;
  const items = [React5(Text_Text.Text, obj), React5(SearchEmpty.SearchEmpty, {})];
  obj.children = items;
  return React6(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
fn(4560);
let obj = { container: null, contentContainer: null, headerSection: null, search: null, sectionHeader: null, emptyState: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
const createStyles = { padding: nativeDefault.space.PX_16 };
obj.contentContainer = createStyles;
obj.headerSection = { paddingBottom: nativeDefault.space.PX_16 };
let obj2 = { paddingBottom: nativeDefault.space.PX_16 };
obj.search = { paddingBottom: nativeDefault.space.PX_8 };
let obj3 = { paddingBottom: nativeDefault.space.PX_8 };
obj.sectionHeader = { paddingBottom: nativeDefault.space.PX_8 };
let obj4 = { paddingBottom: nativeDefault.space.PX_8 };
obj.emptyState = { marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = noop.memo((content) => {
  const label = content.content;
  ({ start, end } = content);
  ({ isDismissed, handleToggleDismissState } = toggleDismissibleContentDismissStateDefault(dismissible_content.DismissibleContent[label]));
  return React5(TableSwitchRow.TableSwitchRow, { start, end, onValueChange, value, label });
});
let closure_12 = noop.memo((arg0) => {
  ({ dailyCapOverridden, newUserMinAgeRequiredOverridden, forceBountiesSwipeUpNux, initialSearchQuery, onForceBountiesSwipeUpNuxChange, onSearchChange } = arg0);
  const tmp = closure_10();
  let obj = { children: null };
  obj = { style: tmp.headerSection, children: null };
  obj = { title: "Global Overrides", hasIcons: false, children: null };
  const items = [React5(TableSwitchRow.TableSwitchRow, { onValueChange: DismissibleContentFrameworkActionCreators.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" }), , ];
  const obj1 = { onValueChange: DismissibleContentFrameworkActionCreators.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" };
  items[1] = React5(TableSwitchRow.TableSwitchRow, { onValueChange: DismissibleContentFrameworkActionCreators.overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" });
  items[2] = React5(TableSwitchRow.TableSwitchRow, { onValueChange: onForceBountiesSwipeUpNuxChange, value: forceBountiesSwipeUpNux, label: "Force bounties swipe-up NUX", subLabel: "When enabled, treat bounties swipe-up NUX as shown so scroll affordances always appear. Reopen the bounties modal after toggling." });
  obj.children = items;
  obj.children = React6(TableRowGroup.TableRowGroup, obj);
  const items1 = [React5(View, obj), , , ];
  const obj3 = { style: tmp.headerSection, children: null };
  const obj4 = { title: "Bulk actions", hasIcons: true, children: null };
  const obj2 = { onValueChange: DismissibleContentFrameworkActionCreators.overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" };
  const items2 = [React5(TableRow.TableRow, { label: "Clear all dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) }), , ];
  const obj5 = { label: "Clear all dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) };
  items2[1] = React5(TableRow.TableRow, { label: "Clear all guild dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearGuildDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) });
  const obj6 = { label: "Clear all guild dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearGuildDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) };
  items2[2] = React5(TableRow.TableRow, { label: "Dismiss all dismissible contents", onPress: UserSettingsProtoActionCreators.checkAllDismissedContents, icon: React5(DoubleCheckmarkIcon.DoubleCheckmarkIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) });
  obj4.children = items2;
  obj3.children = React6(TableRowGroup.TableRowGroup, obj4);
  items1[1] = React5(View, obj3);
  const obj7 = { label: "Dismiss all dismissible contents", onPress: UserSettingsProtoActionCreators.checkAllDismissedContents, icon: React5(DoubleCheckmarkIcon.DoubleCheckmarkIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) };
  items1[2] = React5(View, { style: tmp.search, children: React5(SearchField.SearchField, { size: "md", defaultValue: initialSearchQuery, onChange: onSearchChange }) });
  items1[3] = React5(Text_Text.Text, { style: tmp.sectionHeader, variant: "text-sm/semibold", color: "text-default", children: "Dismissible Contents" });
  obj.children = items1;
  return React6(React7, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx");

export default function DevToolsDismissableContentsScreen() {
  const tmp = closure_10();
  const ref = initialSearchQuery.useRef(null);
  importDefault = initialSearchQuery.useRef(0);
  let obj = ref(9931);
  let tmp2 = useSafeAreaInsetsDefault();
  [dependencyMap, tmp5] = _slicedToArray(obj.useLocalStorageState("devtools-dc-search", ""), 2);
  _slicedToArray = tmp5;
  initialSearchQuery = _slicedToArray(initialSearchQuery.useState(() => {
    let str = dependencyMap;
    if (dependencyMap == null) {
      str = "";
    }
    return str;
  }), 1)[0];
  const tmp7 = _slicedToArray(initialSearchQuery.useState(() => {
    let str = closure_1_2;
    if (closure_1_2 == null) {
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
  }), 2);
  const first1 = tmp7[0];
  closure_6 = tmp7[1];
  let obj1 = ref(504);
  let items = [closure_6];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ dailyCapOverridden: closure_6.dailyCapOverridden, newUserMinAgeRequiredOverridden: closure_6.newUserMinAgeRequiredOverridden }));
  const dailyCapOverridden = stateFromStoresObject.dailyCapOverridden;
  const newUserMinAgeRequiredOverridden = stateFromStoresObject.newUserMinAgeRequiredOverridden;
  let tmp4 = _slicedToArray(obj.useLocalStorageState("devtools-dc-search", ""), 2);
  let tmp9 = _slicedToArray(ref(15011).useForceBountiesSwipeUpNux(), 2);
  const first2 = tmp9[0];
  closure_10 = tmp11;
  const items1 = [tmp9[1]];
  const onForceBountiesSwipeUpNuxChange = initialSearchQuery.useCallback((arg0) => {
    closure_10(arg0);
    if (arg0) {
      const result = useBountiesAutoScroll.clearDismissedScrollAffordanceBountyIds();
    }
  }, items1);
  const callback1 = initialSearchQuery.useCallback(() => {
    let current = ref.current;
    const animationFrame = requestAnimationFrame(() => {
      current = ref.current;
      if (current != null) {
        const obj = { offset: current, animated: false };
        current.scrollToOffset(obj);
      }
    });
  }, []);
  const items2 = [tmp5, callback1];
  const callback2 = initialSearchQuery.useCallback((str) => {
    let tmp5;
    tmp5(str);
    const items = [];
    for (const key10015 in dismissible_content.DismissibleContent) {
      let isNaNResult = tmp3;
      if (!tmp3) {
        tmp5 = dependencyMap;
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
    callback1();
  }, items2);
  const items3 = [dailyCapOverridden, newUserMinAgeRequiredOverridden, first2, initialSearchQuery, onForceBountiesSwipeUpNuxChange, callback2];
  const callback3 = initialSearchQuery.useCallback((nativeEvent) => {
    closure_1.current = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const items4 = [first1.length];
  const memo = initialSearchQuery.useMemo(() => React5(closure_12, { dailyCapOverridden, newUserMinAgeRequiredOverridden, forceBountiesSwipeUpNux: true === first2, initialSearchQuery, onForceBountiesSwipeUpNuxChange, onSearchChange: callback2 }), items3);
  obj = { style: tmp.container, children: null };
  const callback4 = initialSearchQuery.useCallback((content) => {
    const index = content.index;
    return React5(closure_11, { content: content.item, start: 0 === index, end: index === first1.length - 1 });
  }, items4);
  obj = { ref, data: first1, contentContainerStyle: null, keyboardShouldPersistTaps: "handled", keyboardDismissMode: "on-drag", automaticallyAdjustKeyboardInsets: true, ListHeaderComponent: null, ListEmptyComponent: null, keyExtractor: null, renderItem: null, onScroll: null, scrollEventThrottle: 16 };
  const items5 = [tmp.contentContainer, ];
  obj1 = { paddingBottom: tmp2.bottom + nativeDefault.space.PX_16 };
  items5[1] = obj1;
  obj.contentContainerStyle = items5;
  obj.ListHeaderComponent = memo;
  obj.ListEmptyComponent = callback2;
  obj.keyExtractor = function keyExtractor(arg0) {
    return arg0;
  };
  obj.renderItem = callback4;
  obj.onScroll = callback3;
  obj.children = dailyCapOverridden(ref(8874).FlashList, obj);
  return dailyCapOverridden(first1, obj);
};