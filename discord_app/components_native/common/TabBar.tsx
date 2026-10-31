// === Module 10099: TabBar ===

// Module 10099 (TabBar)
import nativeDefault from "native" /* 575 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import _mod7294 from "module_7294" /* 7294 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function Tab(index) {
  index = index.index;
  ({ isSelected, onSelect } = index);
  ({ children, tabKey, tabStyle, tabStyleActive, tabStyleSelected } = index);
  const tmp = closure_8();
  const items = [tabKey];
  [tmp3, tmp4] = _mod7294.useRecyclingState(false, items);
  c2 = tmp4;
  const items1 = [tmp4];
  const items2 = [tmp4];
  const callback = noop.useCallback(() => _undefined(true), items1);
  const items3 = [onSelect, index];
  const callback1 = noop.useCallback(() => _undefined(false), items2);
  const obj2 = { accessibilityRole: "tab", onPressIn: callback, onPressOut: callback1, onPress: noop.useCallback(() => onSelect(index), items3), children: null };
  const items4 = [tmp.tab, tabStyle, , , , ];
  let tabSelected = null;
  if (isSelected) {
    tabSelected = tmp.tabSelected;
  }
  items4[2] = tabSelected;
  let tabActive = null;
  if (tmp3) {
    tabActive = tmp.tabActive;
  }
  items4[3] = tabActive;
  let tmp12 = null;
  if (isSelected) {
    tmp12 = tabStyleSelected;
  }
  items4[4] = tmp12;
  let tmp13 = null;
  if (tmp3) {
    tmp13 = tabStyleActive;
  }
  items4[5] = tmp13;
  obj2.children = <React4 style={items4}>{children}</React4>;
  return <hasOwnProperty accessibilityRole="tab" onPressIn={callback} onPressOut={callback1} onPress={noop.useCallback(() => onSelect(index), items3)}>{null}</hasOwnProperty>;
}
function TabBarScrollView(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const nativeGesture = LegacyBaseButton.useNativeGesture({ disallowInterruption: true });
  const obj2 = { gesture: nativeGesture, children: null };
  const obj3 = { ref: ref.ref };
  const merged1 = Object.assign(merged);
  obj3.nestedScrollEnabled = true;
  obj2.children = <timestampProducer ref={ref.ref} />;
  return jsx(LegacyBaseButton.GestureDetector, { gesture: nativeGesture, children: null });
}
get_ActivityIndicator = fn(17);
({ View: closure_4, TouchableWithoutFeedback: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
let jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = { tab: { flexBasis: "auto", flexShrink: 0, alignItems: "center", justifyContent: "center", marginBottom: 1, marginHorizontal: 1, padding: 10, borderBottomWidth: 2, borderBottomColor: "transparent" }, tabActive: { backgroundColor: "rgba(0,0,0,0.1)" }, tabSelected: { borderBottomColor: nativeDefault.unsafe_rawColors.BRAND_600 }, container: { flex: 0 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/TabBar.tsx");

export default function TabBar(tabIndexSelected) {
  tabIndexSelected = tabIndexSelected.tabIndexSelected;
  let tabStyle = tabIndexSelected.tabStyle;
  const tabStyleActive = tabIndexSelected.tabStyleActive;
  const tabStyleSelected = tabIndexSelected.tabStyleSelected;
  const onSelect = tabIndexSelected.onSelect;
  let flag = tabIndexSelected.hideHorizontalScrollbar;
  ({ tabs, containerStyle } = tabIndexSelected);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = tabIndexSelected.scrollToSelectedIndex;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const ref = tabStyleSelected.useRef(null);
  jsx = tabStyleSelected.useRef(tabIndexSelected);
  const items = [tabIndexSelected];
  const effect = tabStyleSelected.useEffect(() => {
    closure_7.current = tabIndexSelected;
  }, items);
  const items1 = [onSelect];
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
  const callback1 = tabStyleSelected.useCallback((key, arg1) => {
    if (tabStyleSelected.isValidElement(key)) {
      if (null != key.key) {
        const _String = String;
        let StringResult = String(key.key);
      }
      return StringResult;
    }
    StringResult = "tab-" + arg1;
  }, []);
  const items3 = [callback1, tabIndexSelected, tabStyle, tabStyleActive, tabStyleSelected, flag2, onSelect, callback];
  let obj = { style: callback().container, accessibilityRole: "tablist", accessibilityLabel: null, children: null };
  const callback2 = tabStyleSelected.useCallback((arg0) => {
    ({ item, index } = arg0);
    return <Tab tabKey={callback1(item, index)} index={index} isSelected={index === tabIndexSelected} tabStyle={tabStyle} tabStyleActive={tabStyleActive} tabStyleSelected={tabStyleSelected} onSelect={flag2 ? callback : onSelect}>{item}</Tab>;
  }, items3);
  const intl = tabIndexSelected(tabStyle[8]).intl;
  obj.accessibilityLabel = intl.string(tabIndexSelected(tabStyle[8]).t.t1qXlK);
  obj.children = jsx(tabIndexSelected(tabStyle[6]).FlashList, { ref, contentContainerStyle: containerStyle, horizontal: true, renderScrollComponent: TabBarScrollView, data: tabs, extraData: tabIndexSelected, renderItem: callback2, keyExtractor: callback1, showsHorizontalScrollIndicator: !flag });
  return <onSelect style={callback().container} accessibilityRole="tablist" accessibilityLabel={null}>{null}</onSelect>;
};