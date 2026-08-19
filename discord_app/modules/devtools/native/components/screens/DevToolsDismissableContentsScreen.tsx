// discord_app/modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import updateUserGuildSettings from "../../../../user_settings/UserSettingsProtoActionCreators.tsx";
import DismissibleContent from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import TrashIcon from "../../../../../design/components/Icon/native/redesign/generated/TrashIcon.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import TableRowGroupTitle from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRowInner from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowArrow from "../../../../../design/components/TableRow/native/TableRowArrow.native.tsx";
import TableSwitchRow from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import SearchField from "../../../../../design/components/TextField/native/SearchField.native.tsx";
import getSearchEmptySource from "../../../../../design/components/Illustration/native/redesign/generated/SearchEmpty.tsx";
import handleDCShownToUser from "../../../../dismissible_content/DismissibleContentFrameworkActionCreators.tsx";
import useToggleDismissibleContentDismissStateDefault from "../../../../dismissible_content/utils/toggleDismissibleContentDismissState.tsx";
import DoubleCheckmarkIcon from "../../../../../design/components/Icon/native/redesign/generated/DoubleCheckmarkIcon.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import set from "../../../../dismissible_content/DismissibleContentFrameworkStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function DismissableContentsEmpty() {
  { style: callback4().emptyState, children: null };
  const obj = { marginBottom: ThemesDefault.space.PX_16 };
  obj[0] = obj;
  const items = [callback2(Text.Text, obj), callback2(getSearchEmptySource.SearchEmpty, {})];
  obj[1] = items;
  return callback3(View, obj);
}
let c4 = importAllResult;
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj[0] = obj;
const createCacheKey = { padding: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
obj[2] = { paddingBottom: ThemesDefault.space.PX_16 };
obj[3] = { paddingBottom: ThemesDefault.space.PX_8 };
obj[4] = { paddingBottom: ThemesDefault.space.PX_8 };
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
  const obj = { title: "Global Overrides", hasIcons: false, children: null };
  const items = [callback2(TableSwitchRow.TableSwitchRow, { onValueChange: handleDCShownToUser.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" }), , ];
  items[1] = callback2(TableSwitchRow.TableSwitchRow, { onValueChange: handleDCShownToUser.overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" });
  items[2] = callback2(TableSwitchRow.TableSwitchRow, { onValueChange: onForceBountiesSwipeUpNuxChange, value: forceBountiesSwipeUpNux, label: "Force bounties swipe-up NUX", subLabel: "When enabled, treat bounties swipe-up NUX as shown so scroll affordances always appear. Reopen the bounties modal after toggling." });
  obj[2] = items;
  obj[1] = callback3(TableRowGroupTitle.TableRowGroup, obj);
  const items1 = [callback2(View, obj), , , ];
  const obj3 = { style: tmp.headerSection, children: null };
  const obj4 = { title: "Bulk actions", hasIcons: true, children: null };
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
let result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx");

export default function DevToolsDismissableContentsScreen() {
  const tmp = callback4();
  const ref = first.useRef(null);
  importDefault = first.useRef(0);
  let obj = ref(12529);
  const tmp2 = useSafeAreaInsetsDefault();
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
      let isNaNResult = tmp;
      if (!tmp) {
        let tmp4 = ref(dependencyMap[20]);
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
  obj1 = ref(589);
  let items = [closure_6];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ dailyCapOverridden: lib.dailyCapOverridden, newUserMinAgeRequiredOverridden: lib.newUserMinAgeRequiredOverridden }));
  const dailyCapOverridden = stateFromStoresObject.dailyCapOverridden;
  const newUserMinAgeRequiredOverridden = stateFromStoresObject.newUserMinAgeRequiredOverridden;
  let tmp4 = callback(obj.useLocalStorageState("devtools-dc-search", ""), 2);
  const tmp9 = callback(ref(14367).useForceBountiesSwipeUpNux(), 2);
  const first2 = tmp9[0];
  const items1 = [tmp9[1]];
  callback = first.useCallback((arg0) => {
    callback(arg0);
    if (arg0) {
      const result = ref(dependencyMap[25]).clearDismissedScrollAffordanceBountyIds();
      const obj = ref(dependencyMap[25]);
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
    dependencyMap(str);
    const items = [];
    for (const key10015 in ref(closure_1_2[7]).DismissibleContent) {
      let isNaNResult = tmp3;
      if (!tmp3) {
        let tmp6 = ref(dependencyMap[20]);
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
    lib(items);
    callback1();
  }, items2);
  const items3 = [dailyCapOverridden, newUserMinAgeRequiredOverridden, first2, first, callback, callback2];
  const callback3 = first.useCallback((nativeEvent) => {
    closure_1.current = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const items4 = [first1.length];
  const memo = first.useMemo(() => dailyCapOverridden(callback1, { dailyCapOverridden, newUserMinAgeRequiredOverridden, forceBountiesSwipeUpNux: true === first2, initialSearchQuery: first, onForceBountiesSwipeUpNuxChange: callback, onSearchChange: callback2 }), items3);
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
  obj[1] = dailyCapOverridden(ref(8029).FlashList, obj);
  return dailyCapOverridden(first1, obj);
};