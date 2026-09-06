// === Module 12564: MarketingCardsScroller ===

// Module 12564 (MarketingCardsScroller)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const previous = "previous";
const next = "next";
const createStyles = fn(4560);
let obj = { wrapper: { position: "relative" }, navigationButton: null, navigationButtonPrevious: null, navigationButtonNext: null };
let size = { alignItems: "center", backgroundColor: null, borderRadius: null, height: 44, justifyContent: "center", position: "absolute", top: "50%", transform: null, width: 44, zIndex: 1 };
const ColorUtils = fn(4409);
size.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.56);
size.borderRadius = nativeDefault.radii.round;
let items = [{ translateY: -22 }];
size.transform = items;
obj.navigationButton = size;
obj.navigationButtonPrevious = { left: 16 };
obj.navigationButtonNext = { right: 16 };
let closure_12 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx");

export const MarketingCardsScroller = noop.forwardRef((initialIndex, arg1) => {
  function handleScrollEnd(nativeEvent) {
    closure_7(Math.max(0, Math.min(itemCount - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / sum))));
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
  initialIndex = initialIndex.initialIndex;
  let num = 0;
  ({ cardMarginRight, cardWidth, children, contentContainerStyle } = initialIndex);
  if (undefined !== initialIndex) {
    num = initialIndex;
  }
  const itemCount = initialIndex.itemCount;
  const onScrollingChange = initialIndex.onScrollingChange;
  const tmp = closure_12();
  let obj = noop;
  noop.useRef(null);
  const sum = cardWidth + cardMarginRight;
  noop = sum;
  const ref = noop.useRef(Math.max(0, Math.min(itemCount - 1, num)) * sum);
  let tmp4 = ref(noop.useState(() => Math.max(0, Math.min(itemCount - 1, num))), 2);
  const first = tmp4[0];
  closure_7 = tmp4[1];
  [tmp7, closure_8] = ref(noop.useState(0), 2);
  const tmp6 = ref(noop.useState(0), 2);
  [tmp9, closure_9] = ref(noop.useState(0), 2);
  let obj1 = num(onScrollingChange[8]);
  let items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_7.useReducedMotion);
  noop.useRef(stateFromStores);
  let obj2 = num(onScrollingChange[9]);
  let tmp14 = tmp9 > 0;
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  if (tmp14) {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.round(tmp7);
    tmp14 = rounded > Math.round(tmp9);
  }
  closure_12 = tmp14;
  let tmp25Result = tmp14;
  if (tmp14) {
    tmp25Result = first > 0;
  }
  closure_13 = tmp25Result;
  tmp25Result = tmp14;
  if (tmp14) {
    tmp25Result = first < itemCount - 1;
  }
  closure_14 = tmp25Result;
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
  const scrollToIndex = obj.useCallback((arg0) => {
    const bound = Math.max(0, Math.min(itemCount - 1, arg0));
    closure_7(bound);
    const current = ref.current;
    if (current != null) {
      const obj = { x: bound * sum, animated: !ref2.current };
      current.scrollTo(obj);
    }
  }, items3);
  const items4 = [scrollToIndex];
  const imperativeHandle = obj.useImperativeHandle(arg1, () => ({ scrollToIndex }), items4);
  const items5 = [tmp25Result, tmp25Result];
  obj = { style: null, children: null };
  const items6 = [initialIndex.style, tmp.wrapper];
  obj.style = items6;
  obj = {
    accessibilityActions: obj.useMemo(() => {
      const items = [];
      if (closure_13) {
        let obj = { name: previous, label: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.vgfxaA);
        items.push(obj);
      }
      if (closure_14) {
        obj = { name: next, label: null };
        const intl2 = util.intl;
        obj.label = intl2.string(util.t.XiOHRX);
        items.push(obj);
      }
      return items;
    }, items5),
    centerContent: true,
    contentContainerStyle,
    decelerationRate: 0.1,
    horizontal: true,
    onAccessibilityAction(nativeEvent) {
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
    onContentSizeChange(arg0) {
      closure_1_8(arg0);
    },
    onLayout(nativeEvent) {
      closure_1_9(nativeEvent.nativeEvent.layout.width);
    },
    onMomentumScrollEnd(nativeEvent) {
      handleScrollEnd(nativeEvent);
      if (onScrollingChange != null) {
        tmp2(false);
      }
    },
    onScrollBeginDrag() {
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
  if (tmp14) {
    tmp14 = !isScreenReaderEnabled;
  }
  obj.scrollEnabled = tmp14;
  obj.snapToOffsets = memo;
  const Children = obj.Children;
  obj.children = Children.map(children, (children, arg1) => {
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
  const items7 = [closure_8(ref, obj), , ];
  if (tmp25Result) {
    function handleNavigatePrevious() {
      if (closure_13) {
        callback(first - 1);
      }
    }
    obj1 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
    let intl = tmp10(tmp11[10]).intl;
    obj1.accessibilityLabel = intl.string(tmp10(tmp11[10]).t.vgfxaA);
    obj1.onPress = handleNavigatePrevious;
    const items8 = [, ];
    ({ navigationButton: arr10[0], navigationButtonPrevious: arr10[1] } = tmp);
    obj1.style = items8;
    obj2 = { color: itemCount(tmp11[7]).colors.WHITE, size: "sm" };
    obj1.children = closure_8(tmp10(tmp11[13]).ChevronLargeLeftIcon, obj2);
    tmp25Result = closure_8(tmp10(tmp11[12]).PressableOpacity, obj1);
  }
  items7[1] = tmp25Result;
  if (tmp25Result) {
    function handleNavigateNext() {
      if (closure_14) {
        callback(first + 1);
      }
    }
    const obj3 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
    let intl2 = tmp10(tmp11[10]).intl;
    obj3.accessibilityLabel = intl2.string(tmp10(tmp11[10]).t.XiOHRX);
    obj3.onPress = handleNavigateNext;
    const items9 = [, ];
    ({ navigationButton: arr11[0], navigationButtonNext: arr11[1] } = tmp);
    obj3.style = items9;
    const obj4 = { color: itemCount(tmp11[7]).colors.WHITE, size: "sm" };
    obj3.children = closure_8(tmp10(tmp11[14]).ChevronLargeRightIcon, obj4);
    tmp25Result = closure_8(tmp10(tmp11[12]).PressableOpacity, obj3);
  }
  items7[2] = tmp25Result;
  obj.children = items7;
  return closure_9(first, obj);
});