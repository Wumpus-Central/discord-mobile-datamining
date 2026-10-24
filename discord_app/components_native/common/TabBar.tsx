// === Module 9986: TabBar ===

// Module 9986 (TabBar)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5297 */;
import _mod7220 from "module_7220" /* 7220 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["ref"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, TouchableWithoutFeedback: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4971);
let obj2 = { tab: { flexBasis: "auto", flexShrink: 0, alignItems: "center", justifyContent: "center", marginBottom: 1, marginHorizontal: 1, padding: 10, borderBottomWidth: 2, borderBottomColor: "transparent" }, tabActive: { backgroundColor: "rgba(0,0,0,0.1)" }, tabSelected: { borderBottomColor: nativeDefault.unsafe_rawColors.BRAND_600 }, container: { flex: 0 } };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function Tab(arg0) {
  const cResult = c.c(24);
  ({ children, tabKey, index } = arg0);
  ({ isSelected, tabStyle, onSelect } = arg0);
  ({ tabStyleActive, tabStyleSelected } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] !== tabKey) {
    const items = [tabKey];
    cResult[0] = tabKey;
    cResult[1] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = _mod7220;
  [tmp7, tmp8] = _mod7220.useRecyclingState(false, tmp5);
  if (cResult[2] !== tmp8) {
    const fn = function k() {
      return tmp8(true);
    };
    cResult[2] = tmp8;
    cResult[3] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp8) {
    const fn2 = function _() {
      return tmp8(false);
    };
    cResult[4] = tmp8;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === index) {
    if (cResult[7] === onSelect) {
      let tmp11 = cResult[8];
    }
    let tabSelected = null;
    if (isSelected) {
      tabSelected = tmp4.tabSelected;
    }
    let tabActive = null;
    if (tmp7) {
      tabActive = tmp4.tabActive;
    }
    let tmp14 = null;
    if (isSelected) {
      tmp14 = tabStyleSelected;
    }
    let tmp15 = null;
    if (tmp7) {
      tmp15 = tabStyleActive;
    }
    if (cResult[9] === tmp4.tab) {
      if (cResult[10] === tabSelected) {
        if (cResult[11] === tabActive) {
          if (cResult[12] === tmp14) {
            if (cResult[13] === tmp15) {
              if (cResult[16] === children) {
                if (cResult[17] === tmp16) {
                  let tmp17 = cResult[18];
                }
                if (cResult[19] === tmp17) {
                  if (cResult[20] === tmp11) {
                    if (cResult[21] === tmp9) {
                      if (cResult[22] === tmp10) {
                        let tmp21 = cResult[23];
                      }
                      return tmp21;
                    }
                  }
                }
                const obj2 = { accessibilityRole: "tab", onPressIn: tmp9, onPressOut: tmp10, onPress: tmp11, children: tmp17 };
                const tmp24 = <React5 accessibilityRole="tab" onPressIn={tmp9} onPressOut={tmp10} onPress={tmp11}>{tmp17}</React5>;
                cResult[19] = tmp17;
                cResult[20] = tmp11;
                cResult[21] = tmp9;
                cResult[22] = tmp10;
                cResult[23] = tmp24;
                tmp21 = tmp24;
              }
              const obj3 = { style: tmp16, children };
              const tmp20 = <timestampProducer style={tmp16}>{children}</timestampProducer>;
              cResult[16] = children;
              cResult[17] = tmp16;
              cResult[18] = tmp20;
              tmp17 = tmp20;
            }
          }
        }
      }
    }
    const items1 = [tmp4.tab, tabStyle, tabSelected, tabActive, tmp14, tmp15];
    cResult[9] = tmp4.tab;
    cResult[10] = tabSelected;
    cResult[11] = tabActive;
    cResult[12] = tmp14;
    cResult[13] = tmp15;
    cResult[14] = tabStyle;
    cResult[15] = items1;
    class E {
      constructor() {
        return onSelect(index);
      }
    }
  }
  class E {
    constructor() {
      return onSelect(index);
    }
  }
  cResult[6] = index;
  cResult[7] = onSelect;
  cResult[8] = E;
  tmp11 = E;
  const tmp6 = _slicedToArray(_mod7220.useRecyclingState(false, tmp5), 2);
}) : (function Tab(index) {
  index = index.index;
  ({ isSelected, onSelect } = index);
  ({ children, tabKey, tabStyle, tabStyleActive, tabStyleSelected } = index);
  const tmp = closure_10();
  const items = [tabKey];
  [tmp3, tmp4] = _mod7220.useRecyclingState(false, items);
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
  obj2.children = <timestampProducer style={items4}>{children}</timestampProducer>;
  return <React5 accessibilityRole="tab" onPressIn={callback} onPressOut={callback1} onPress={noop.useCallback(() => onSelect(index), items3)}>{null}</React5>;
});
ReactCompilerGating = fn(558);
const renderScrollComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function TabBarScrollView(ref) {
  const cResult = c.c(10);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref.ref, closure_2);
    cResult[0] = ref.ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp5 = ref;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disallowInterruption: true };
    cResult[3] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[3];
  }
  const nativeGesture = LegacyBaseButton.useNativeGesture(tmp9);
  if (cResult[4] === tmp4) {
    if (cResult[5] === tmp5) {
      let tmp11 = cResult[6];
    }
    if (cResult[7] === nativeGesture) {
      if (cResult[8] === tmp11) {
        let tmp14 = cResult[9];
      }
      return tmp14;
    }
    const obj3 = { gesture: nativeGesture, children: tmp11 };
    const tmp16 = jsx(LegacyBaseButton.GestureDetector, { gesture: nativeGesture, children: tmp11 });
    cResult[7] = nativeGesture;
    cResult[8] = tmp11;
    cResult[9] = tmp16;
    tmp14 = tmp16;
  }
  const obj4 = { ref: tmp5 };
  const merged = Object.assign(tmp4);
  obj4.nestedScrollEnabled = true;
  const tmp13 = <closure_1_8 ref={tmp5} />;
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = tmp13;
  tmp11 = tmp13;
  const tmpResult = LegacyBaseButton;
}) : (function TabBarScrollView(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const nativeGesture = LegacyBaseButton.useNativeGesture({ disallowInterruption: true });
  const obj2 = { gesture: nativeGesture, children: null };
  const obj3 = { ref: ref.ref };
  const merged1 = Object.assign(merged);
  obj3.nestedScrollEnabled = true;
  obj2.children = <closure_1_8 ref={ref.ref} />;
  return jsx(LegacyBaseButton.GestureDetector, { gesture: nativeGesture, children: null });
});
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
  const ref = flag2.useRef(null);
  closure_7 = flag2.useRef(tabIndexSelected);
  const items = [tabIndexSelected];
  const effect = flag2.useEffect(() => {
    closure_7.current = tabIndexSelected;
  }, items);
  const items1 = [onSelect];
  const callback = flag2.useCallback((index) => {
    onSelect(index);
    const current = ref.current;
    if (current != null) {
      const obj = { index };
      current.scrollToIndex(obj);
    }
  }, items1);
  tabStyle = onSelect(flag2.useState(() => tabIndexSelected), 1)[0];
  const items2 = [tabStyle];
  const effect1 = flag2.useEffect(() => {
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
  const callback1 = flag2.useCallback((key, arg1) => {
    if (flag2.isValidElement(key)) {
      if (null != key.key) {
        const _String = String;
        let StringResult = String(key.key);
      }
      return StringResult;
    }
    StringResult = "tab-" + arg1;
  }, []);
  const items3 = [callback1, tabIndexSelected, tabStyle, tabStyleActive, tabStyleSelected, flag2, onSelect, callback];
  let obj = { style: closure_10().container, accessibilityRole: "tablist", accessibilityLabel: null, children: null };
  const callback2 = flag2.useCallback((arg0) => {
    ({ item, index } = arg0);
    return <closure_11 tabKey={callback1(item, index)} index={index} isSelected={index === tabIndexSelected} tabStyle={tabStyle} tabStyleActive={tabStyleActive} tabStyleSelected={tabStyleSelected} onSelect={flag2 ? callback : onSelect}>{item}</closure_11>;
  }, items3);
  const intl = tabIndexSelected(tabStyle[11]).intl;
  obj.accessibilityLabel = intl.string(tabIndexSelected(tabStyle[11]).t.t1qXlK);
  obj.children = callback1(tabIndexSelected(tabStyle[9]).FlashList, { ref, contentContainerStyle: containerStyle, horizontal: true, renderScrollComponent, data: tabs, extraData: tabIndexSelected, renderItem: callback2, keyExtractor: callback1, showsHorizontalScrollIndicator: !flag });
  return callback1(ref, obj);
};