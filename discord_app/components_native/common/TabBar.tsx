// discord_app/components_native/common/TabBar.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../_runtime/00576_react.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../Constants.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let onScrollToIndexFailed;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ View: closure_4, TouchableWithoutFeedback: hasOwnProperty, FlatList: metroRequire } = react_native);
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
let obj = {
  innerContainer: { flexDirection: "row", alignItems: "stretch" },
  tab: {
    flexGrow: 1,
    flexBasis: "auto",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 1,
    marginHorizontal: 1,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabActive: { backgroundColor: "rgba(0,0,0,0.1)" },
  tabSelected: obj2,
  container: { flex: 0 },
};
obj2 = { borderBottomColor: nativeDefault.unsafe_rawColors.BRAND_600 };
let closure_9 = createStyles.createStyles(obj);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let closure_129_2;
      let first;
      let index;
      let isSelected;
      let onSelect;
      let tabStyle;
      let tabStyleActive;
      let tabStyleSelected;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(19);
      ({ children, index } = arg0);
      ({ isSelected, tabStyle, onSelect } = arg0);
      ({ tabStyleActive, tabStyleSelected } = arg0);
      const tmp2 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          return false;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      [tmp5, closure_129_2] = react.useState(first);
      _slicedToArray(react.useState(first), 2);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return closure_1_2(true);
          }
        }
        cResult[1] = T;
      } else {
        class T {
          constructor() {
            return closure_1_2(true);
          }
        }
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            return closure_1_2(false);
          }
        }
        cResult[2] = B;
      } else {
        class B {
          constructor() {
            return closure_1_2(false);
          }
        }
      }
      if (cResult[3] === index) {
        class B {
          constructor() {
            return closure_1_2(false);
          }
        }
        if (isSelected) {
          class B {
            constructor() {
              return closure_1_2(false);
            }
          }
        }
        if (tmp5) {
          class B {
            constructor() {
              return closure_1_2(false);
            }
          }
        }
        if (isSelected) {
          class B {
            constructor() {
              return closure_1_2(false);
            }
          }
        }
        if (tmp5) {
          class B {
            constructor() {
              return closure_1_2(false);
            }
          }
        }
        if (cResult[6] === tmp2.tab) {
          class B {
            constructor() {
              return closure_1_2(false);
            }
          }
        }
        const items = [tmp2.tab, tabStyle, null, null, null, null];
        cResult[6] = tmp2.tab;
        cResult[7] = null;
        cResult[8] = null;
        cResult[9] = null;
        cResult[10] = null;
        cResult[11] = tabStyle;
        cResult[12] = items;
      }
      const fn2 = function w() {
        return onSelect(index);
      };
      cResult[3] = index;
      cResult[4] = onSelect;
      cResult[5] = fn2;
    }
  : (index) => {
      let children;
      let isSelected;
      let onSelect;
      let tabStyle;
      let tabStyleActive;
      let tabStyleSelected;
      let tmp3;
      let tmp4;
      const f102267 = () => false;
      index = index.index;
      ({ isSelected, onSelect } = index);
      ({ children, tabStyle, tabStyleActive, tabStyleSelected } = index);
      const tmp = closure_9();
      [tmp3, tmp4] = react.useState(f102267);
      let c2 = tmp4;
      const items = [tmp4];
      const items1 = [tmp4];
      _slicedToArray(react.useState(f102267), 2);
      const callback = react.useCallback(() => _undefined(true), items);
      const items2 = [onSelect, index];
      const callback1 = react.useCallback(() => _undefined(false), items1);
      const items3 = [tmp.tab, tabStyle, , , ,];
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
      return (
        <hasOwnProperty
          accessibilityRole="tab"
          onPressIn={callback}
          onPressOut={callback1}
          onPress={react.useCallback(() => onSelect(index), items2)}
        >
          {null}
        </hasOwnProperty>
      );
    };
const result = size.fileFinishedImporting("components_native/common/TabBar.tsx");

export default function TabBar(tabIndexSelected) {
  let GestureDetector;
  let closure_7;
  let containerStyle;
  let initialNumTabsToRender;
  let intl;
  let items4;
  let obj2;
  let obj3;
  let tabs;
  tabIndexSelected = tabIndexSelected.tabIndexSelected;
  const tabStyle = tabIndexSelected.tabStyle;
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
  tabIndexSelected = undefined;
  let first;
  const tmp = first();
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
  first = tabStyleActive(
    tabStyleSelected.useState(() => tabIndexSelected),
    1,
  )[0];
  const items2 = [first];
  const effect1 = tabStyleSelected.useEffect(() => {
    let closure_0;
    let ref2;
    const timeout = setTimeout(() => {
      if (ref2.current === first) {
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
    return (
      <closure_10
        index={index}
        isSelected={index === tabIndexSelected}
        tabStyle={tabStyle}
        tabStyleActive={tabStyleActive}
        tabStyleSelected={tabStyleSelected}
        onSelect={flag2 ? callback : onSelect}
      >
        {children.item}
      </closure_10>
    );
  }, items3);
  let obj = {
    style: tmp.container,
    accessibilityRole: "tablist",
    accessibilityLabel: intl.string(tabIndexSelected(tabStyle[10]).t.t1qXlK),
    children: tabIndexSelected(GestureDetector, obj2),
  };
  const memo = tabStyleSelected.useMemo(() => {
    const Gesture = tabIndexSelected(tabStyle[9]).Gesture;
    const NativeResult = Gesture.Native();
    return NativeResult.disallowInterruption(true);
  }, []);
  intl = tabIndexSelected(tabStyle[10]).intl;
  obj2 = { gesture: memo, children: tabIndexSelected(ref, obj3) };
  obj3 = {
    ref,
    contentContainerStyle: items4,
    horizontal: true,
    data: tabs,
    renderItem: callback2,
    keyExtractor: callback1,
    initialNumToRender: initialNumTabsToRender,
    onScrollToIndexFailed,
    showsHorizontalScrollIndicator: !flag,
  };
  items4 = [containerStyle, tmp.innerContainer];
  GestureDetector = tabIndexSelected(tabStyle[9]).GestureDetector;
  return tabIndexSelected(onSelect, obj);
}
