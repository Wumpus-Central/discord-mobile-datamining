// discord_app/modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import hexToRgba from "../../../../utils/ColorUtils.tsx";

const require = arg1;
let c4 = importAllResult;
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const previous = "previous";
const next = "next";
let obj = { wrapper: { position: "relative" }, navigationButton: null, navigationButtonPrevious: null, navigationButtonNext: null };
obj = { alignItems: "center", backgroundColor: null, borderRadius: null, height: 44, justifyContent: "center", position: "absolute", top: "50%", transform: null, width: 44, zIndex: 1 };
obj[1] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.BLACK, 0.56);
obj[2] = ThemesDefault.radii.round;
let items = [{ translateY: -22 }];
obj[7] = items;
obj[1] = obj;
obj[2] = { left: 16 };
obj[3] = { right: 16 };
let closure_12 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((initialIndex, ref) => {
  function handleScrollEnd(nativeEvent) {
    lib(Math.max(0, Math.min(itemCount - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / closure_4))));
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
  const tmp = callback();
  let obj = importAllResult;
  ref = importAllResult.useRef(null);
  const sum = cardWidth + cardMarginRight;
  closure_5 = importAllResult.useRef(Math.max(0, Math.min(itemCount - 1, num)) * sum);
  let tmp4 = ref(sum.useState(() => Math.max(0, Math.min(itemCount - 1, num))), 2);
  const first = tmp4[0];
  closure_7 = tmp4[1];
  [tmp7, closure_8] = ref(sum.useState(0), 2);
  const tmp6 = ref(sum.useState(0), 2);
  [tmp9, closure_9] = ref(sum.useState(0), 2);
  obj1 = num(onScrollingChange[8]);
  let items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => lib.useReducedMotion);
  closure_11 = importAllResult.useRef(stateFromStores);
  let obj2 = num(onScrollingChange[9]);
  let tmp14 = tmp9 > 0;
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  if (tmp14) {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.round(tmp7);
    tmp14 = rounded > Math.round(tmp9);
  }
  callback = tmp14;
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
    return array.fill(0).map((arg0, arg1) => arg1 * closure_4);
  }, items1);
  const effect = obj.useEffect(() => {
    closure_11.current = stateFromStores;
  }, items2);
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    if (0 !== current) {
      const current2 = ref.current;
      if (current2 != null) {
        const obj = { x: null, animated: false };
        obj[0] = current;
        current2.scrollTo(obj);
      }
    }
  }, []);
  const items3 = [itemCount, sum];
  callback = obj.useCallback((arg0) => {
    const bound = Math.max(0, Math.min(itemCount - 1, arg0));
    lib(bound);
    const current = ref.current;
    if (current != null) {
      const obj = { x: null, animated: null };
      obj[0] = bound * closure_4;
      obj[1] = !ref2.current;
      current.scrollTo(obj);
    }
  }, items3);
  const items4 = [callback];
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({ scrollToIndex: callback }), items4);
  const items5 = [tmp25Result, tmp25Result];
  obj = { style: items6, children: null };
  items6 = [initialIndex.style, tmp.wrapper];
  obj = {
    accessibilityActions: obj.useMemo(() => {
      const items = [];
      if (closure_13) {
        let obj = { name: null, label: null };
        obj[0] = stateFromStores;
        const intl = num(onScrollingChange[10]).intl;
        obj[1] = intl.string(num(onScrollingChange[10]).t.vgfxaA);
        items.push(obj);
      }
      if (closure_14) {
        obj = { name: null, label: null };
        obj[0] = closure_11;
        const intl2 = num(onScrollingChange[10]).intl;
        obj[1] = intl2.string(num(onScrollingChange[10]).t.XiOHRX);
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
      if (stateFromStores === actionName) {
        if (closure_13) {
          callback(first - 1);
        }
      } else if (closure_11 === actionName) {
        if (closure_14) {
          callback(first + 1);
        }
      }
    },
    onContentSizeChange(arg0) {
      callback(arg0);
    },
    onLayout(nativeEvent) {
      callback2(nativeEvent.nativeEvent.layout.width);
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
  obj[12] = tmp14;
  obj[13] = memo;
  const Children = obj.Children;
  obj[14] = Children.map(children, (arg0, arg1) => {
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
    obj[1] = str;
    obj[2] = arg0;
    return closure_1_8(first, obj);
  });
  const items7 = [closure_8(closure_5, obj), , ];
  if (tmp25Result) {
    function handleNavigatePrevious() {
      if (closure_13) {
        callback(first - 1);
      }
    }
    obj1 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
    let intl = tmp10(tmp11[10]).intl;
    obj1[0] = intl.string(tmp10(tmp11[10]).t.vgfxaA);
    obj1[2] = handleNavigatePrevious;
    const items8 = [, ];
    ({ navigationButton: arr10[0], navigationButtonPrevious: arr10[1] } = tmp);
    obj1[3] = items8;
    obj2 = { color: null, size: "sm" };
    obj2[0] = itemCount(tmp11[7]).colors.WHITE;
    obj1[4] = tmp25(tmp10(tmp11[13]).ChevronLargeLeftIcon, obj2);
    tmp25Result = tmp25(tmp10(tmp11[12]).PressableOpacity, obj1);
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
    obj3[0] = intl2.string(tmp10(tmp11[10]).t.XiOHRX);
    obj3[2] = handleNavigateNext;
    const items9 = [, ];
    ({ navigationButton: arr11[0], navigationButtonNext: arr11[1] } = tmp);
    obj3[3] = items9;
    const obj4 = { color: null, size: "sm" };
    obj4[0] = itemCount(tmp11[7]).colors.WHITE;
    obj3[4] = tmp25(tmp10(tmp11[14]).ChevronLargeRightIcon, obj4);
    tmp25Result = tmp25(tmp10(tmp11[12]).PressableOpacity, obj3);
  }
  items7[2] = tmp25Result;
  obj[1] = items7;
  return closure_9(first, obj);
});
const result = require("set").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx");

export const MarketingCardsScroller = forwardRefResult;