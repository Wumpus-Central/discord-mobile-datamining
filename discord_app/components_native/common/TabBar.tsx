// === Module 11262: TabBar ===

// Module 11262 (TabBar)
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
function Tab(index) {
  index = index.index;
  ({ isSelected, onSelect } = index);
  ({ children, tabStyle, tabStyleActive, tabStyleSelected } = index);
  const tmp = closure_9();
  [tmp3, tmp4] = _slicedToArray(noop.useState(() => false), 2);
  c2 = tmp4;
  const items = [tmp4];
  const items1 = [tmp4];
  const callback = noop.useCallback(() => _undefined(true), items);
  const items2 = [onSelect, index];
  const callback1 = noop.useCallback(() => _undefined(false), items1);
  const obj = { accessibilityRole: "tab", onPressIn: callback, onPressOut: callback1, onPress: noop.useCallback(() => onSelect(index), items2), children: null };
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
  obj.children = <React4 style={items3}>{children}</React4>;
  return <hasOwnProperty accessibilityRole="tab" onPressIn={callback} onPressOut={callback1} onPress={noop.useCallback(() => onSelect(index), items2)}>{null}</hasOwnProperty>;
}
get_ActivityIndicator = fn(17);
({ View: closure_4, TouchableWithoutFeedback: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const NOOP = fn(1074).NOOP;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { innerContainer: { flexDirection: "row", alignItems: "stretch" }, tab: { flexGrow: 1, flexBasis: "auto", flexShrink: 0, alignItems: "center", justifyContent: "center", marginBottom: 1, marginHorizontal: 1, padding: 10, borderBottomWidth: 2, borderBottomColor: "transparent" }, tabActive: { backgroundColor: "rgba(0,0,0,0.1)" }, tabSelected: null, container: null };
createStyles = { borderBottomColor: nativeDefault.unsafe_rawColors.BRAND_600 };
createStyles.tabSelected = createStyles;
createStyles.container = { flex: 0 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/TabBar.tsx");

export default function TabBar(tabIndexSelected) {
  tabIndexSelected = tabIndexSelected.tabIndexSelected;
  let tabStyle = tabIndexSelected.tabStyle;
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
  const tmp = closure_9();
  const ref = tabStyleSelected.useRef(null);
  onScrollToIndexFailed = tabStyleSelected.useRef(tabIndexSelected);
  const items = [tabIndexSelected];
  const effect = tabStyleSelected.useEffect(() => {
    closure_7.current = tabIndexSelected;
  }, items);
  const items1 = [ref, onSelect];
  const callback = tabStyleSelected.useCallback((index) => {
    onSelect(index);
    const current = ref.current;
    if (current != null) {
      const obj = { index };
      current.scrollToIndex(obj);
    }
  }, items1);
  tabStyle = tabStyleActive(tabStyleSelected.useState(() => tabIndexSelected), 1)[0];
  const items2 = [tabStyle];
  const effect1 = tabStyleSelected.useEffect(() => {
    const timeout = setTimeout(() => {
      if (ref.current === tabStyle) {
        const current = ref.current;
        if (current != null) {
          const obj = { index: tmp, viewPosition: 1 };
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
    return <Tab index={index} isSelected={index === tabIndexSelected} tabStyle={tabStyle} tabStyleActive={tabStyleActive} tabStyleSelected={tabStyleSelected} onSelect={flag2 ? callback : onSelect}>{arg0.item}</Tab>;
  }, items3);
  let obj = { style: tmp.container, accessibilityRole: "tablist", accessibilityLabel: null, children: null };
  const memo = tabStyleSelected.useMemo(() => {
    const Gesture = tabIndexSelected(first[7]).Gesture;
    return Gesture.Native().disallowInterruption(true);
  }, []);
  const intl = tabIndexSelected(tabStyle[8]).intl;
  obj.accessibilityLabel = intl.string(tabIndexSelected(tabStyle[8]).t.t1qXlK);
  obj = { gesture: memo, children: callback(tabIndexSelected(tabStyle[7]).GestureDetector, obj) };
  obj = { ref, contentContainerStyle: null, horizontal: true, data: tabs, renderItem: callback2, keyExtractor: callback1, initialNumToRender: initialNumTabsToRender, onScrollToIndexFailed, showsHorizontalScrollIndicator: !flag };
  const items4 = [containerStyle, tmp.innerContainer];
  obj.contentContainerStyle = items4;
  obj.children = callback(ref, obj);
  return callback(onSelect, obj);
};