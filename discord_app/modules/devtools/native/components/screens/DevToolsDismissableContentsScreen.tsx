// === Module 15457: DismissableContentsEmpty ===

// Module 15457 (DismissableContentsEmpty)
import ThemesDefault from "Themes" /* 709 */;
import updateUserGuildSettings from "updateUserGuildSettings" /* 1369 */;
import DismissibleContent from "DismissibleContent" /* 1372 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import TrashIcon from "TrashIcon" /* 4436 */;
import Text from "Text" /* 4474 */;
import TableRowInner from "TableRowInner" /* 5608 */;
import TableRowArrow from "TableRowArrow" /* 5615 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6001 */;
import TableSwitchRow from "TableSwitchRow" /* 6002 */;
import SearchField from "SearchField" /* 6231 */;
import getSearchEmptySource from "getSearchEmptySource" /* 9173 */;
import handleDCShownToUser from "handleDCShownToUser" /* 10342 */;
import useToggleDismissibleContentDismissStateDefault from "useToggleDismissibleContentDismissState" /* 15458 */;
import DoubleCheckmarkIcon from "DoubleCheckmarkIcon" /* 15459 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "set" /* 1376 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function DismissableContentsEmpty() {
  let obj = { style: callback4().emptyState, children: null };
  obj = { style: null, variant: "heading-lg/semibold", children: "No results found" };
  obj = { marginBottom: ThemesDefault.space.PX_16 };
  obj[0] = obj;
  const items = [callback2(Text.Text, obj), callback2(getSearchEmptySource.SearchEmpty, {})];
  obj[1] = items;
  return callback3(View, obj);
}
let c4 = importAllResult;
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let obj = { container: null, contentContainer: null, headerSection: null, search: null, sectionHeader: null, emptyState: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj[0] = obj;
createCacheKey = { padding: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
obj[2] = { paddingBottom: ThemesDefault.space.PX_16 };
let obj2 = { paddingBottom: ThemesDefault.space.PX_16 };
obj[3] = { paddingBottom: ThemesDefault.space.PX_8 };
let obj3 = { paddingBottom: ThemesDefault.space.PX_8 };
obj[4] = { paddingBottom: ThemesDefault.space.PX_8 };
let obj4 = { paddingBottom: ThemesDefault.space.PX_8 };
obj[5] = { marginVertical: ThemesDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = importAllResult.memo((content) => {
  const label = content.content;
  ({ start, end } = content);
  ({ isDismissed, handleToggleDismissState } = useToggleDismissibleContentDismissStateDefault(DismissibleContent.DismissibleContent[label]));
  return callback2(TableSwitchRow.TableSwitchRow, { start, end, onValueChange, value, label });
});
let closure_12 = importAllResult.memo((arg0) => {
  ({ dailyCapOverridden, newUserMinAgeRequiredOverridden, forceBountiesSwipeUpNux, initialSearchQuery, onForceBountiesSwipeUpNuxChange, onSearchChange } = arg0);
  const tmp = callback4();
  let obj = { children: null };
  obj = { style: tmp.headerSection, children: null };
  obj = { title: "Global Overrides", hasIcons: false, children: null };
  const items = [callback2(TableSwitchRow.TableSwitchRow, { onValueChange: handleDCShownToUser.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" }), , ];
  obj1 = { onValueChange: handleDCShownToUser.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" };
  items[1] = callback2(TableSwitchRow.TableSwitchRow, { onValueChange: handleDCShownToUser.overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" });
  items[2] = callback2(TableSwitchRow.TableSwitchRow, { onValueChange: onForceBountiesSwipeUpNuxChange, value: forceBountiesSwipeUpNux, label: "Force bounties swipe-up NUX", subLabel: "When enabled, treat bounties swipe-up NUX as shown so scroll affordances always appear. Reopen the bounties modal after toggling." });
  obj[2] = items;
  obj[1] = callback3(TableRowGroupTitle.TableRowGroup, obj);
  const items1 = [callback2(View, obj), , , ];
  const obj3 = { style: tmp.headerSection, children: null };
  const obj4 = { title: "Bulk actions", hasIcons: true, children: null };
  const obj2 = { onValueChange: handleDCShownToUser.overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" };
  const items2 = [callback2(TableRowInner.TableRow, { label: "Clear all dismissed dismissible contents", onPress: updateUserGuildSettings.clearDismissedContents, icon: callback2(TrashIcon.TrashIcon, {}), trailing: callback2(TableRowArrow.TableRowArrow, {}) }), , ];
  const obj5 = { label: "Clear all dismissed dismissible contents", onPress: updateUserGuildSettings.clearDismissedContents, icon: callback2(TrashIcon.TrashIcon, {}), trailing: callback2(TableRowArrow.TableRowArrow, {}) };
  items2[1] = callback2(TableRowInner.TableRow, { label: "Clear all guild dismissed dismissible contents", onPress: updateUserGuildSettings.clearGuildDismissedContents, icon: callback2(TrashIcon.TrashIcon, {}), trailing: callback2(TableRowArrow.TableRowArrow, {}) });
  const obj6 = { label: "Clear all guild dismissed dismissible contents", onPress: updateUserGuildSettings.clearGuildDismissedContents, icon: callback2(TrashIcon.TrashIcon, {}), trailing: callback2(TableRowArrow.TableRowArrow, {}) };
  items2[2] = callback2(TableRowInner.TableRow, { label: "Dismiss all dismissible contents", onPress: updateUserGuildSettings.checkAllDismissedContents, icon: callback2(DoubleCheckmarkIcon.DoubleCheckmarkIcon, {}), trailing: callback2(TableRowArrow.TableRowArrow, {}) });
  obj4[2] = items2;
  obj3[1] = callback3(TableRowGroupTitle.TableRowGroup, obj4);
  items1[1] = callback2(View, obj3);
  const obj7 = { label: "Dismiss all dismissible contents", onPress: updateUserGuildSettings.checkAllDismissedContents, icon: callback2(DoubleCheckmarkIcon.DoubleCheckmarkIcon, {}), trailing: callback2(TableRowArrow.TableRowArrow, {}) };
  items1[2] = callback2(View, { style: tmp.search, children: callback2(SearchField.SearchField, { size: "md", defaultValue: initialSearchQuery, onChange: onSearchChange }) });
  items1[3] = callback2(Text.Text, { style: tmp.sectionHeader, variant: "text-sm/semibold", color: "text-default", children: "Dismissible Contents" });
  obj[0] = items1;
  return callback3(closure_9, obj);
});
let obj5 = { marginVertical: ThemesDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
let result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx");

export default function DevToolsDismissableContentsScreen() {
  const tmp = callback4();
  const ref = first.useRef(null);
  importDefault = first.useRef(0);
  let obj = ref(10048);
  let tmp2 = useSafeAreaInsetsDefault();
  [dependencyMap, tmp5] = callback(obj.useLocalStorageState("devtools-dc-search", ""), 2);
  callback = tmp5;
  first = callback(first.useState(() => {
    let str = closure_2;
    if (closure_2 == null) {
      str = "";
    }
    return str;
  }), 1)[0];
  const tmp7 = callback(first.useState(() => {
    let str = closure_2;
    if (closure_2 == null) {
      str = "";
    }
    const items = [];
    for (const key10013 in ref(closure_1_2[7]).DismissibleContent) {
      let tmp9 = key10013;
      let isNaNResult = tmp;
      if (!tmp) {
        let tmp2 = ref;
        let tmp3 = closure_1_2;
        let tmp4 = ref(closure_1_2[20]);
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
    const sorted = items.sort((localeCompare) => localeCompare.localeCompare(arg1));
    return items;
  }), 2);
  const first1 = tmp7[0];
  closure_6 = tmp7[1];
  obj1 = ref(586);
  let items = [closure_6];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ dailyCapOverridden: closure_6.dailyCapOverridden, newUserMinAgeRequiredOverridden: closure_6.newUserMinAgeRequiredOverridden }));
  const dailyCapOverridden = stateFromStoresObject.dailyCapOverridden;
  const newUserMinAgeRequiredOverridden = stateFromStoresObject.newUserMinAgeRequiredOverridden;
  let tmp4 = callback(obj.useLocalStorageState("devtools-dc-search", ""), 2);
  let tmp9 = callback(ref(14855).useForceBountiesSwipeUpNux(), 2);
  const first2 = tmp9[0];
  callback4 = tmp11;
  const items1 = [tmp9[1]];
  callback = first.useCallback((arg0) => {
    callback(arg0);
    if (arg0) {
      const result = ref(closure_1_2[25]).clearDismissedScrollAffordanceBountyIds();
      const obj = ref(closure_1_2[25]);
    }
  }, items1);
  const callback1 = first.useCallback(() => {
    let current = ref.current;
    const animationFrame = requestAnimationFrame(() => {
      current = current.current;
      if (current != null) {
        const obj = { offset: null, animated: false };
        obj[0] = current;
        current.scrollToOffset(obj);
      }
    });
  }, []);
  const items2 = [tmp5, callback1];
  const callback2 = first.useCallback((str) => {
    let tmp5;
    tmp5(str);
    const items = [];
    for (const key10015 in ref(closure_1_2[7]).DismissibleContent) {
      let tmp13 = key10015;
      let isNaNResult = tmp3;
      if (!tmp3) {
        let tmp4 = ref;
        tmp5 = closure_1_2;
        let tmp6 = ref(closure_1_2[20]);
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
    const sorted = items.sort((localeCompare) => localeCompare.localeCompare(arg1));
    closure_6(items);
    callback1();
  }, items2);
  const items3 = [dailyCapOverridden, newUserMinAgeRequiredOverridden, first2, first, callback, callback2];
  const callback3 = first.useCallback((nativeEvent) => {
    closure_1.current = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const items4 = [first1.length];
  const memo = first.useMemo(() => dailyCapOverridden(callback1, { dailyCapOverridden, newUserMinAgeRequiredOverridden, forceBountiesSwipeUpNux: true === first2, initialSearchQuery: first, onForceBountiesSwipeUpNuxChange: callback, onSearchChange: callback2 }), items3);
  obj = { style: tmp.container, children: null };
  callback4 = first.useCallback((content) => {
    const index = content.index;
    return dailyCapOverridden(callback, { content: content.item, start: 0 === index, end: index === first1.length - 1 });
  }, items4);
  obj = { ref, data: first1, contentContainerStyle: null, keyboardShouldPersistTaps: "handled", keyboardDismissMode: "on-drag", automaticallyAdjustKeyboardInsets: true, ListHeaderComponent: null, ListEmptyComponent: null, keyExtractor: null, renderItem: null, onScroll: null, scrollEventThrottle: 16 };
  const items5 = [tmp.contentContainer, ];
  obj1 = { paddingBottom: tmp2.bottom + ThemesDefault.space.PX_16 };
  items5[1] = obj1;
  obj[2] = items5;
  obj[6] = memo;
  obj[7] = callback2;
  obj[8] = function keyExtractor(arg0) {
    return arg0;
  };
  obj[9] = callback4;
  obj[10] = callback3;
  obj[1] = dailyCapOverridden(ref(8116).FlashList, obj);
  return dailyCapOverridden(first1, obj);
};