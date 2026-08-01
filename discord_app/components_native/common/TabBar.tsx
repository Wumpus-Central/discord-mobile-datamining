// === Module 9470: Tab ===

// Module 9470 (Tab)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { NOOP } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
const require = arg1;
function Tab(index) {
  let children;
  let isSelected;
  let onSelect;
  let tabStyle;
  let tabStyleActive;
  let tabStyleSelected;
  let tmp3;
  let tmp4;
  index = index.index;
  ({ isSelected, onSelect } = index);
  let callback;
  ({ children, tabStyle, tabStyleActive, tabStyleSelected } = index);
  const tmp = createCacheKey();
  [tmp3, tmp4] = callback(React.useState(() => false), 2);
  callback = tmp4;
  const items = [tmp4];
  const items1 = [tmp4];
  callback = React.useCallback(() => _undefined(true), items);
  const items2 = [onSelect, index];
  const callback1 = React.useCallback(() => _undefined(false), items1);
  const obj = { accessibilityRole: "tab", onPressIn: callback, onPressOut: callback1, onPress: React.useCallback(() => onSelect(index), items2), children: null };
  const items3 = [tmp.tab, tabStyle, , , , ];
  let tabSelected = null;
  if (isSelected) {
    tabSelected = tmp.tabSelected;
  }
  items3[2] = tabSelected;
  let tabActive = null;
  if (tmp3) {
    tabActive = tmp.tabActive;
  }
  items3[3] = tabActive;
  let tmp12 = null;
  if (isSelected) {
    tmp12 = tabStyleSelected;
  }
  items3[4] = tmp12;
  let tmp13 = null;
  if (tmp3) {
    tmp13 = tabStyleActive;
  }
  items3[5] = tmp13;
  obj[4] = <closure_4 style={items3}>{children}</closure_4>;
  return <closure_5 accessibilityRole="tab" onPressIn={callback} onPressOut={callback1} onPress={React.useCallback(() => onSelect(index), items2)}>{null}</closure_5>;
}
({ View: c4, TouchableWithoutFeedback: c5, FlatList: closure_6 } = get_ActivityIndicator);
createCacheKey = { innerContainer: { flexDirection: "row", alignItems: "stretch" }, tab: { flexGrow: 1, flexBasis: "auto", flexShrink: 0, alignItems: "center", justifyContent: "center", marginBottom: 1, marginHorizontal: 1, padding: 10, borderBottomWidth: 2, borderBottomColor: "transparent" }, tabActive: { backgroundColor: "rgba(0,0,0,0.1)" }, tabSelected: null, container: null };
createCacheKey = { borderBottomColor: require("Themes").unsafe_rawColors.BRAND_600 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { flex: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/common/TabBar.tsx");

export default function TabBar(tabIndexSelected) {
  let containerStyle;
  let initialNumTabsToRender;
  let tabs;
  tabIndexSelected = tabIndexSelected.tabIndexSelected;
  const tabStyle = tabIndexSelected.tabStyle;
  let first = tabStyle;
  const tabStyleActive = tabIndexSelected.tabStyleActive;
  const tabStyleSelected = tabIndexSelected.tabStyleSelected;
  const onSelect = tabIndexSelected.onSelect;
  let flag = tabIndexSelected.hideHorizontalScrollbar;
  ({ initialNumTabsToRender, tabs, containerStyle } = tabIndexSelected);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = tabIndexSelected.scrollToSelectedIndex;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let ref;
  let closure_7;
  let callback;
  const tmp = createCacheKey();
  ref = tabStyleSelected.useRef(null);
  closure_7 = tabStyleSelected.useRef(tabIndexSelected);
  const items = [tabIndexSelected];
  const effect = tabStyleSelected.useEffect(() => {
    closure_7.current = tabIndexSelected;
  }, items);
  const items1 = [ref, onSelect];
  callback = tabStyleSelected.useCallback((arg0) => {
    onSelect(arg0);
    const current = ref.current;
    if (current != null) {
      const obj = { index: null };
      obj[0] = arg0;
      current.scrollToIndex(obj);
    }
  }, items1);
  first = undefined;
  first = tabStyleActive(tabStyleSelected.useState(() => tabIndexSelected), 1)[0];
  const items2 = [first];
  const effect1 = tabStyleSelected.useEffect(() => {
    const timeout = setTimeout(() => {
      if (outer1_7.current === closure_1) {
        const current = outer1_6.current;
        if (current != null) {
          const obj = { index: null, viewPosition: 1 };
          obj[0] = tmp;
          current.scrollToIndex(obj);
        }
      }
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items2);
  const items3 = [tabIndexSelected, tabStyle, tabStyleActive, tabStyleSelected, flag2, onSelect, callback];
  const callback1 = tabStyleSelected.useCallback((arg0, arg1) => "tab-" + arg1, []);
  const callback2 = tabStyleSelected.useCallback((children) => {
    const index = children.index;
    return callback(outer1_10, { index, isSelected: index === tabIndexSelected, tabStyle: first, tabStyleActive, tabStyleSelected, onSelect: flag2 ? callback : onSelect, children: children.item });
  }, items3);
  let obj = { style: tmp.container, accessibilityRole: "tablist", accessibilityLabel: null, children: null };
  const memo = tabStyleSelected.useMemo(() => {
    const Gesture = tabIndexSelected(first[7]).Gesture;
    return Gesture.Native().disallowInterruption(true);
  }, []);
  const intl = tabIndexSelected(first[8]).intl;
  obj[2] = intl.string(tabIndexSelected(first[8]).t.t1qXlK);
  obj = { gesture: memo, children: null };
  obj = { ref, contentContainerStyle: items4, horizontal: true, data: tabs, renderItem: callback2, keyExtractor: callback1, initialNumToRender: initialNumTabsToRender, onScrollToIndexFailed: closure_7, showsHorizontalScrollIndicator: !flag };
  items4 = [containerStyle, tmp.innerContainer];
  obj[1] = callback(ref, obj);
  obj[3] = callback(tabIndexSelected(first[7]).GestureDetector, obj);
  return callback(onSelect, obj);
};