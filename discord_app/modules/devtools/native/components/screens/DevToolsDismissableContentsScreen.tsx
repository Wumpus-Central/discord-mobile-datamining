// === Module 14732: DismissableContentsEmpty ===

// Module 14732 (DismissableContentsEmpty)
import _slicedToArray from "_slicedToArray";
import importAllResult from "getSearchEmptySource";
import { View } from "SearchField";
import set from "set";
import jsxProd from "useSafeAreaInsets";
import createCacheKey from "createCacheKey";

let c9;
let error;
let metroImportAll;
const require = arg1;
function DismissableContentsEmpty() {
  let obj = { style: callback4().emptyState, children: null };
  obj = { style: null, variant: "heading-lg/semibold", children: "No results found" };
  obj = { marginBottom: null };
  obj[0] = importDefault(712).space.PX_16;
  obj[0] = obj;
  const items = [callback2(require(4189) /* Text */.Text, obj), callback2(require(9404) /* getSearchEmptySource */.SearchEmpty, {})];
  obj[1] = items;
  return callback3(View, obj);
}
let c4 = importAllResult;
({ jsx: error, jsxs: metroImportAll, Fragment: c9 } = jsxProd);
let obj = { container: null, contentContainer: null, headerSection: null, search: null, sectionHeader: null, emptyState: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
obj[0] = obj;
createCacheKey = { padding: require("Themes").space.PX_16 };
obj[1] = createCacheKey;
obj[2] = { paddingBottom: require("Themes").space.PX_16 };
let obj2 = { paddingBottom: require("Themes").space.PX_16 };
obj[3] = { paddingBottom: require("Themes").space.PX_8 };
let obj3 = { paddingBottom: require("Themes").space.PX_8 };
obj[4] = { paddingBottom: require("Themes").space.PX_8 };
let obj4 = { paddingBottom: require("Themes").space.PX_8 };
obj[5] = { marginVertical: require("Themes").space.PX_32, justifyContent: "center", alignItems: "center" };
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = importAllResult.memo((content) => {
  let end;
  let handleToggleDismissState;
  let isDismissed;
  let start;
  const label = content.content;
  ({ start, end } = content);
  ({ isDismissed, handleToggleDismissState } = importDefault(14733)(require(1358) /* DismissibleContent */.DismissibleContent[label]));
  return callback2(require(5559) /* TableSwitchRow */.TableSwitchRow, { start, end, onValueChange, value, label });
});
let closure_12 = importAllResult.memo((arg0) => {
  let dailyCapOverridden;
  let forceBountiesSwipeUpNux;
  let initialSearchQuery;
  let newUserMinAgeRequiredOverridden;
  let onForceBountiesSwipeUpNuxChange;
  let onSearchChange;
  ({ dailyCapOverridden, newUserMinAgeRequiredOverridden, forceBountiesSwipeUpNux, initialSearchQuery, onForceBountiesSwipeUpNuxChange, onSearchChange } = arg0);
  const tmp = callback4();
  let obj = { children: null };
  obj = { style: tmp.headerSection, children: null };
  obj = { title: "Global Overrides", hasIcons: false, children: null };
  const obj1 = { onValueChange: null, value: null, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" };
  obj1[0] = require(10233) /* handleDCShownToUser */.overrideDismissibleContentFramework;
  obj1[1] = dailyCapOverridden;
  const items = [callback2(require(5559) /* TableSwitchRow */.TableSwitchRow, obj1), , ];
  const obj2 = { onValueChange: null, value: null, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" };
  obj2[0] = require(10233) /* handleDCShownToUser */.overrideNewUserMinAgeRequired;
  obj2[1] = newUserMinAgeRequiredOverridden;
  items[1] = callback2(require(5559) /* TableSwitchRow */.TableSwitchRow, obj2);
  items[2] = callback2(require(5559) /* TableSwitchRow */.TableSwitchRow, { onValueChange: onForceBountiesSwipeUpNuxChange, value: forceBountiesSwipeUpNux, label: "Force bounties swipe-up NUX", subLabel: "When enabled, treat bounties swipe-up NUX as shown so scroll affordances always appear. Reopen the bounties modal after toggling." });
  obj[2] = items;
  obj[1] = callback3(require(5558) /* TableRowGroupTitle */.TableRowGroup, obj);
  const items1 = [callback2(View, obj), , , ];
  const obj3 = { style: tmp.headerSection, children: null };
  const obj4 = { title: "Bulk actions", hasIcons: true, children: null };
  const obj5 = { label: "Clear all dismissed dismissible contents", onPress: null, icon: null, trailing: null };
  obj5[1] = require(1355) /* updateUserGuildSettings */.clearDismissedContents;
  obj5[2] = callback2(require(4152) /* TrashIcon */.TrashIcon, {});
  obj5[3] = callback2(require(5231) /* TableRowArrow */.TableRowArrow, {});
  const items2 = [callback2(require(5224) /* TableRowInner */.TableRow, obj5), , ];
  const obj6 = { label: "Clear all guild dismissed dismissible contents", onPress: null, icon: null, trailing: null };
  obj6[1] = require(1355) /* updateUserGuildSettings */.clearGuildDismissedContents;
  obj6[2] = callback2(require(4152) /* TrashIcon */.TrashIcon, {});
  obj6[3] = callback2(require(5231) /* TableRowArrow */.TableRowArrow, {});
  items2[1] = callback2(require(5224) /* TableRowInner */.TableRow, obj6);
  const obj7 = { label: "Dismiss all dismissible contents", onPress: null, icon: null, trailing: null };
  obj7[1] = require(1355) /* updateUserGuildSettings */.checkAllDismissedContents;
  obj7[2] = callback2(require(14734) /* DoubleCheckmarkIcon */.DoubleCheckmarkIcon, {});
  obj7[3] = callback2(require(5231) /* TableRowArrow */.TableRowArrow, {});
  items2[2] = callback2(require(5224) /* TableRowInner */.TableRow, obj7);
  obj4[2] = items2;
  obj3[1] = callback3(require(5558) /* TableRowGroupTitle */.TableRowGroup, obj4);
  items1[1] = callback2(View, obj3);
  items1[2] = callback2(View, { style: tmp.search, children: callback2(require(9248) /* SearchField */.SearchField, { size: "md", defaultValue: initialSearchQuery, onChange: onSearchChange }) });
  items1[3] = callback2(require(4189) /* Text */.Text, { style: tmp.sectionHeader, variant: "text-sm/semibold", color: "text-default", children: "Dismissible Contents" });
  obj[0] = items1;
  return callback3(closure_9, obj);
});
let obj5 = { marginVertical: require("Themes").space.PX_32, justifyContent: "center", alignItems: "center" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx");

export default function DevToolsDismissableContentsScreen() {
  let dependencyMap;
  let tmp5;
  const tmp = callback4();
  const ref = first.useRef(null);
  const importDefault = first.useRef(0);
  let obj = ref(10743);
  let tmp2 = importDefault(1581)();
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
    for (const key10013 in ref(outer1_2[7]).DismissibleContent) {
      let tmp9 = key10013;
      let isNaNResult = tmp;
      if (!tmp) {
        let tmp2 = ref;
        let tmp3 = outer1_2;
        let tmp4 = ref(outer1_2[20]);
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
  let set = tmp7[1];
  let obj1 = ref(589);
  let items = [set];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ dailyCapOverridden: set.dailyCapOverridden, newUserMinAgeRequiredOverridden: set.newUserMinAgeRequiredOverridden }));
  const dailyCapOverridden = stateFromStoresObject.dailyCapOverridden;
  const newUserMinAgeRequiredOverridden = stateFromStoresObject.newUserMinAgeRequiredOverridden;
  let tmp4 = callback(obj.useLocalStorageState("devtools-dc-search", ""), 2);
  let tmp9 = callback(ref(14060).useForceBountiesSwipeUpNux(), 2);
  const first2 = tmp9[0];
  callback4 = tmp11;
  const items1 = [tmp9[1]];
  callback = first.useCallback((arg0) => {
    tmp11(arg0);
    if (arg0) {
      const result = ref(outer1_2[25]).clearDismissedScrollAffordanceBountyIds();
      const obj = ref(outer1_2[25]);
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
    for (const key10015 in ref(outer1_2[7]).DismissibleContent) {
      let tmp13 = key10015;
      let isNaNResult = tmp3;
      if (!tmp3) {
        let tmp4 = ref;
        tmp5 = outer1_2;
        let tmp6 = ref(outer1_2[20]);
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
    set(items);
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
  obj1 = { paddingBottom: null };
  obj1[0] = tmp2.bottom + importDefault(712).space.PX_16;
  items5[1] = obj1;
  obj[2] = items5;
  obj[6] = memo;
  obj[7] = callback2;
  obj[8] = function keyExtractor(arg0) {
    return arg0;
  };
  obj[9] = callback4;
  obj[10] = callback3;
  obj[1] = dailyCapOverridden(ref(6679).FlashList, obj);
  return dailyCapOverridden(first1, obj);
};