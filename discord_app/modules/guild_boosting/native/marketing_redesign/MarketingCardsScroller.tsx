// === Module 14088: MarketingCardsScroller ===

// Module 14088 (MarketingCardsScroller)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const previous = "previous";
const next = "next";
const createStyles = fn(5009);
let obj2 = { wrapper: { position: "relative" }, navigationButton: null, navigationButtonPrevious: null, navigationButtonNext: null };
let size = { alignItems: "center", backgroundColor: null, borderRadius: null, height: 44, justifyContent: "center", position: "absolute", top: "50%", transform: null, width: 44, zIndex: 1 };
const ColorUtils = fn(5006);
size.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.56);
size.borderRadius = nativeDefault.radii.round;
let items = [{ translateY: -22 }];
size.transform = items;
obj2.navigationButton = size;
obj2.navigationButtonPrevious = { left: 16 };
obj2.navigationButtonNext = { right: 16 };
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx");

export function MarketingCardsScroller(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let itemCount;
  let onScrollingChange;
  noop = undefined;
  ref = undefined;
  let first;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let stateFromStores;
  closure_12 = undefined;
  closure_13 = undefined;
  closure_14 = undefined;
  let scrollToIndex;
  function handleScrollEnd(nativeEvent) {
    closure_7(Math.max(0, Math.min(itemCount - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / c4))));
    if (obj.isIOS()) {
      const velocity = nativeEvent.nativeEvent.velocity;
      let tmp3 = null == velocity;
      if (!tmp3) {
        tmp3 = 0 === velocity.x && 0 === velocity.y;
        const tmp4 = 0 === velocity.x && 0 === velocity.y;
      }
      if (tmp3) {
        if (onScrollingChange != null) {
          tmp5(false);
        }
      }
    }
  }
  const initialIndex = merged.initialIndex;
  let num = 0;
  ({ cardMarginRight, cardWidth, children, contentContainerStyle } = merged);
  if (undefined !== initialIndex) {
    num = initialIndex;
  }
  itemCount = merged.itemCount;
  onScrollingChange = merged.onScrollingChange;
  const tmp2 = closure_12();
  noop.useRef(null);
  const sum = cardWidth + cardMarginRight;
  noop = sum;
  ref = noop.useRef(Math.max(0, Math.min(itemCount - 1, num)) * sum);
  const tmp5 = ref(noop.useState(() => Math.max(0, Math.min(itemCount - 1, num))), 2);
  first = tmp5[0];
  closure_7 = tmp5[1];
  [tmp8, c8] = ref(noop.useState(0), 2);
  const tmp7 = ref(noop.useState(0), 2);
  [tmp10, c9] = ref(noop.useState(0), 2);
  const tmp9 = ref(noop.useState(0), 2);
  let items = [closure_7];
  stateFromStores = num(onScrollingChange[8]).useStateFromStores(items, () => closure_7.useReducedMotion);
  noop.useRef(stateFromStores);
  let obj2 = num(onScrollingChange[8]);
  let tmp15 = tmp10 > 0;
  const isScreenReaderEnabled = num(onScrollingChange[9]).useIsScreenReaderEnabled();
  if (tmp15) {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.round(tmp8);
    tmp15 = rounded > Math.round(tmp10);
  }
  closure_12 = tmp15;
  let tmp26Result = tmp15;
  if (tmp15) {
    tmp26Result = first > 0;
  }
  closure_13 = tmp26Result;
  let tmp26Result2 = tmp15;
  if (tmp15) {
    tmp26Result2 = first < itemCount - 1;
  }
  closure_14 = tmp26Result2;
  const items1 = [itemCount, sum];
  const items2 = [stateFromStores];
  const memo = obj.useMemo(() => {
    const array = new Array(itemCount);
    return array.fill(0).map((item, index) => index * closure_1_4);
  }, items1);
  const effect = obj.useEffect(() => {
    closure_11.current = stateFromStores;
  }, items2);
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    if (0 !== current) {
      const current2 = ref.current;
      if (current2 != null) {
        const obj = { x: current, animated: false };
        current2.scrollTo(obj);
      }
    }
  }, []);
  const items3 = [itemCount, sum];
  scrollToIndex = obj.useCallback((arg0) => {
    const bound = Math.max(0, Math.min(itemCount - 1, arg0));
    closure_7(bound);
    const current = ref.current;
    if (current != null) {
      const obj = { x: bound * c4, animated: !ref2.current };
      current.scrollTo(obj);
    }
  }, items3);
  const items4 = [scrollToIndex];
  const imperativeHandle = obj.useImperativeHandle(ref.ref, () => ({ scrollToIndex }), items4);
  const items5 = [tmp26Result2, tmp26Result];
  const obj4 = { style: null, children: null };
  const items6 = [merged.style, tmp2.wrapper];
  obj4.style = items6;
  const obj5 = {
    accessibilityActions: noop.useMemo(() => {
      const items = [];
      if (closure_13) {
        const obj = { name: previous, label: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.vgfxaA);
        items.push(obj);
      }
      if (closure_14) {
        const obj2 = { name: next, label: null };
        const intl2 = util.intl;
        obj2.label = intl2.string(util.t.XiOHRX);
        items.push(obj2);
      }
      return items;
    }, items5),
    centerContent: true,
    contentContainerStyle,
    decelerationRate: 0.1,
    horizontal: true,
    onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if (previous === actionName) {
        if (closure_13) {
          callback(first - 1);
        }
      } else if (next === actionName) {
        if (closure_14) {
          callback(first + 1);
        }
      }
    },
    onContentSizeChange: function handleContentSizeChange(arg0) {
      _undefined(arg0);
    },
    onLayout: function handleLayout(nativeEvent) {
      _undefined2(nativeEvent.nativeEvent.layout.width);
    },
    onMomentumScrollEnd: function handleMomentumScrollEnd(nativeEvent) {
      handleScrollEnd(nativeEvent);
      if (onScrollingChange != null) {
        tmp2(false);
      }
    },
    onScrollBeginDrag: function handleScrollBeginDrag() {
      if (onScrollingChange != null) {
        tmp(true);
      }
    },
    onScrollEndDrag: handleScrollEnd,
    ref,
    scrollEnabled: null,
    snapToOffsets: null,
    children: null
  };
  if (tmp15) {
    tmp15 = !isScreenReaderEnabled;
  }
  obj5.scrollEnabled = tmp15;
  obj5.snapToOffsets = memo;
  const Children = obj.Children;
  obj5.children = Children.map(children, (children, arg1) => {
    let tmp4 = closure_12;
    if (closure_12) {
      tmp4 = arg1 !== first;
    }
    const obj = { accessibilityElementsHidden: tmp4, importantForAccessibility: null, children: null };
    let str;
    if (closure_12) {
      if (arg1 !== first) {
        str = "no-hide-descendants";
      }
    }
    obj.importantForAccessibility = str;
    obj.children = children;
    return React6(timestampProducer, obj);
  });
  const items7 = [c8(ref, obj5), , ];
  if (tmp26Result) {
    function handleNavigatePrevious() {
      if (closure_13) {
        callback(first - 1);
      }
    }
    const obj6 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
    let intl = tmp11(tmp12[10]).intl;
    obj6.accessibilityLabel = intl.string(tmp11(tmp12[10]).t.vgfxaA);
    obj6.onPress = handleNavigatePrevious;
    const items8 = [, ];
    ({ navigationButton: arr10[0], navigationButtonPrevious: arr10[1] } = tmp2);
    obj6.style = items8;
    const obj7 = { color: itemCount(tmp12[7]).colors.WHITE, size: "sm" };
    obj6.children = tmp26(tmp11(tmp12[13]).ChevronLargeLeftIcon, obj7);
    tmp26Result = tmp26(tmp11(tmp12[12]).PressableOpacity, obj6);
  }
  items7[1] = tmp26Result;
  if (tmp26Result2) {
    function handleNavigateNext() {
      if (closure_14) {
        callback(first + 1);
      }
    }
    const obj8 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
    let intl2 = tmp11(tmp12[10]).intl;
    obj8.accessibilityLabel = intl2.string(tmp11(tmp12[10]).t.XiOHRX);
    obj8.onPress = handleNavigateNext;
    const items9 = [, ];
    ({ navigationButton: arr11[0], navigationButtonNext: arr11[1] } = tmp2);
    obj8.style = items9;
    const obj9 = { color: itemCount(tmp12[7]).colors.WHITE, size: "sm" };
    obj8.children = tmp26(tmp11(tmp12[14]).ChevronLargeRightIcon, obj9);
    tmp26Result2 = tmp26(tmp11(tmp12[12]).PressableOpacity, obj8);
  }
  items7[2] = tmp26Result2;
  obj4.children = items7;
  return c9(first, obj4);
}