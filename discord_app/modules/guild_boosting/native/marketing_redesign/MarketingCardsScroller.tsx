// === Module 12242: MarketingCardsScroller ===

// Module 12242 (MarketingCardsScroller)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ColorUtils_mod from "ColorUtils" /* 4733 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let ColorUtils;
let c9;
let hasOwnProperty;
let items;
let metroImportAll;
let metroRequire;
let size;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
let AccessibilityStore = AccessibilityStore_mod;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const previous = "previous";
const next = "next";
let createStyles = createStyles_mod;
let obj = { wrapper: { position: "relative" }, navigationButton: size, navigationButtonPrevious: { left: 16 }, navigationButtonNext: { right: 16 } };
size = { alignItems: "center", backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.56), borderRadius: nativeDefault.radii.round, height: 44, justifyContent: "center", position: "absolute", top: "50%", transform: items, width: 44, zIndex: 1 };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
items = [{ translateY: -22 }];
let closure_12 = createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? (function(onScrollingChange, arg1) {
  let cardMarginRight;
  let cardWidth;
  let children;
  let closure_7;
  let closure_8;
  let closure_9;
  let contentContainerStyle;
  let initialIndex;
  let itemCount;
  let num;
  let tmp12;
  let tmp14;
  const tmp2 = num;
  let obj = itemCount(num[9]);
  const cResult = obj.c(86);
  ({ children, contentContainerStyle, initialIndex, itemCount } = onScrollingChange);
  onScrollingChange = onScrollingChange.onScrollingChange;
  num = 0;
  ({ cardMarginRight, cardWidth } = onScrollingChange);
  if (undefined !== initialIndex) {
    num = initialIndex;
  }
  const tmp4 = closure_12();
  react.useRef(null);
  const sum = cardWidth + cardMarginRight;
  react = sum;
  const ref = react.useRef(Math.max(0, Math.min(itemCount - 1, num)) * sum);
  if (cResult[0] === num) {
    let tmp7;
    let tmp16;
    let tmp15;
    if (cResult[1] === itemCount) {
      tmp7 = cResult[2];
    }
    const tmp9 = ref(react.useState(tmp7), 2);
    const first = tmp9[0];
    AccessibilityStore = tmp9[1];
    [tmp12, closure_8] = ref(react.useState(0), 2);
    ref(react.useState(0), 2);
    [tmp14, closure_9] = ref(react.useState(0), 2);
    const _Symbol = Symbol;
    let str = "react.memo_cache_sentinel";
    ref(react.useState(0), 2);
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      class L {
        constructor() {
          return closure_7.useReducedMotion;
        }
      }
      cResult[3] = items;
      cResult[4] = L;
      tmp16 = L;
      tmp15 = items;
    } else {
      tmp15 = cResult[3];
      tmp16 = cResult[4];
    }
    const tmpResult = itemCount(tmp2[10]);
    const stateFromStores = tmpResult.useStateFromStores(tmp15, tmp16);
    const ref2 = obj2.useRef(stateFromStores);
    itemCount(tmp2[11]);
    if (cResult[5] === tmp12) {
      let tmp20;
      if (cResult[6] === tmp14) {
        tmp20 = cResult[7];
      }
      closure_12 = tmp20;
      class L {
        constructor() {
          return closure_7.useReducedMotion;
        }
      }
      let closure_14 = tmp24;
      if (cResult[8] === itemCount) {
        let tmp32;
        let tmp31;
        let tmp35;
        let tmp34;
        if (cResult[13] !== stateFromStores) {
          function ie() {
            ref2.current = stateFromStores;
          }
          const items1 = [stateFromStores];
          class L {
            constructor() {
              return closure_7.useReducedMotion;
            }
          }
          cResult[13] = stateFromStores;
          cResult[14] = ie;
          cResult[15] = items1;
          tmp32 = items1;
          tmp31 = ie;
        } else {
          tmp31 = cResult[14];
          tmp32 = cResult[15];
        }
        const effect = obj2.useEffect(tmp31, tmp32);
        class L {
          constructor() {
            return closure_7.useReducedMotion;
          }
        }
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          function oe() {
            const current = ref.current;
            if (0 !== current) {
              const current2 = ref.current;
              if (current2 != null) {
                const obj = { x: current, animated: false };
                current2.scrollTo(obj);
              }
            }
          }
          const items2 = [];
          class L {
            constructor() {
              return closure_7.useReducedMotion;
            }
          }
          cResult[17] = items2;
          tmp35 = items2;
          tmp34 = oe;
        } else {
          tmp34 = cResult[16];
          tmp35 = cResult[17];
        }
        const effect1 = obj2.useEffect(tmp34, tmp35);
        if (cResult[18] === itemCount) {
          let tmp37;
          let tmp39;
          let tmp38;
          if (cResult[19] === sum) {
            tmp37 = cResult[20];
          }
          const scrollToIndex = tmp37;
          if (cResult[21] !== tmp37) {
            function ce() {
              return { scrollToIndex };
            }
            const items3 = [tmp37];
            class L {
              constructor() {
                return closure_7.useReducedMotion;
              }
            }
            cResult[21] = tmp37;
            cResult[22] = ce;
            cResult[23] = items3;
            tmp39 = items3;
            tmp38 = ce;
          } else {
            tmp38 = cResult[22];
            tmp39 = cResult[23];
          }
          class L {
            constructor() {
              return closure_7.useReducedMotion;
            }
          }
          const imperativeHandle = obj2.useImperativeHandle(arg1, tmp38, tmp39);
          if (cResult[24] === (tmp20 && first < itemCount - 1)) {
            if (cResult[29] === first) {
              if (cResult[30] === (tmp20 && first > 0)) {
                let tmp48;
                if (cResult[31] === tmp37) {
                  tmp48 = cResult[32];
                }
                let closure_16 = tmp48;
                if (cResult[33] === first) {
                  if (cResult[34] === (tmp20 && first < itemCount - 1)) {
                    let tmp49;
                    if (cResult[35] === tmp37) {
                      tmp49 = cResult[36];
                    }
                    let closure_17 = tmp49;
                    if (cResult[37] === tmp49) {
                      if (cResult[40] !== onScrollingChange) {
                        function xe() {
                          if (onScrollingChange != null) {
                            tmp(true);
                          }
                        }
                        cResult[40] = onScrollingChange;
                        class L {
                          constructor() {
                            return closure_7.useReducedMotion;
                          }
                        }
                        cResult[41] = xe;
                      }
                      const _Symbol2 = Symbol;
                      class L {
                        constructor() {
                          return closure_7.useReducedMotion;
                        }
                      }
                      if (tmp54 === Symbol.for("react.memo_cache_sentinel")) {
                        class Ie {
                          constructor(nativeEvent) {
                            closure_9(nativeEvent.nativeEvent.layout.width);
                          }
                        }
                        cResult[42] = Ie;
                        class L {
                          constructor() {
                            return closure_7.useReducedMotion;
                          }
                        }
                      } else {
                        class Ie {
                          constructor(nativeEvent) {
                            closure_9(nativeEvent.nativeEvent.layout.width);
                          }
                        }
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                        class Re {
                          constructor(arg0) {
                            closure_8(arg0);
                          }
                        }
                        cResult[43] = Re;
                        class L {
                          constructor() {
                            return closure_7.useReducedMotion;
                          }
                        }
                      } else {
                        class Re {
                          constructor(arg0) {
                            closure_8(arg0);
                          }
                        }
                      }
                      if (cResult[44] === itemCount) {
                        class Re {
                          constructor(arg0) {
                            closure_8(arg0);
                          }
                        }
                      }
                      class Pe {
                        constructor(nativeEvent) {
                          closure_7(Math.max(0, Math.min(itemCount - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / react))));
                          const obj = utils_PlatformUtils;
                          if (obj.isIOS()) {
                            const velocity = nativeEvent.nativeEvent.velocity;
                            let tmp3 = null == velocity;
                            if (!tmp3) {
                              tmp3 = 0 === velocity.x && 0 === velocity.y;
                            }
                            if (tmp3) {
                              if (onScrollingChange != null) {
                                tmp5(false);
                              }
                            }
                          }
                        }
                      }
                      cResult[44] = itemCount;
                      cResult[45] = sum;
                      cResult[46] = onScrollingChange;
                      cResult[47] = Pe;
                    }
                    class L {
                      constructor() {
                        return closure_7.useReducedMotion;
                      }
                    }
                    cResult[37] = tmp49;
                    cResult[38] = tmp48;
                  }
                }
                class L {
                  constructor() {
                    return closure_7.useReducedMotion;
                  }
                }
                cResult[33] = first;
                cResult[34] = tmp20 && first < itemCount - 1;
                cResult[36] = tmp50;
                tmp49 = tmp50;
              }
            }
            function me() {
              if (closure_1_13) {
                scrollToIndex(first - 1);
              }
            }
            class L {
              constructor() {
                return closure_7.useReducedMotion;
              }
            }
            cResult[29] = first;
            cResult[30] = tmp20 && first > 0;
            cResult[31] = tmp37;
            cResult[32] = me;
            tmp48 = me;
          }
          const items4 = [];
          if (tmp20 && first > 0) {
            class Re {
              constructor(arg0) {
                closure_8(arg0);
              }
            }
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              class Re {
                constructor(arg0) {
                  closure_8(arg0);
                }
              }
              tmp43[0] = stateFromStores;
              class L {
                constructor() {
                  return closure_7.useReducedMotion;
                }
              }
              tmp43[1] = obj5.string(itemCount(tmp2[12]).t.vgfxaA);
              cResult[27] = tmp43;
            } else {
              class Re {
                constructor(arg0) {
                  closure_8(arg0);
                }
              }
            }
            class L {
              constructor() {
                return closure_7.useReducedMotion;
              }
            }
          }
          if (tmp20 && first < itemCount - 1) {
            class Re {
              constructor(arg0) {
                closure_8(arg0);
              }
            }
            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
              class Re {
                constructor(arg0) {
                  closure_8(arg0);
                }
              }
              tmp46[0] = ref2;
              class L {
                constructor() {
                  return closure_7.useReducedMotion;
                }
              }
              tmp46[1] = obj6.string(itemCount(tmp2[12]).t.XiOHRX);
              cResult[28] = tmp46;
            } else {
              class Re {
                constructor(arg0) {
                  closure_8(arg0);
                }
              }
            }
            class L {
              constructor() {
                return closure_7.useReducedMotion;
              }
            }
          }
          cResult[24] = tmp20 && first < itemCount - 1;
          cResult[25] = tmp20 && first > 0;
          cResult[26] = items4;
        }
        function le(arg0) {
          const bound = Math.max(0, Math.min(itemCount - 1, arg0));
          closure_7(bound);
          const current = ref.current;
          if (current != null) {
            const obj = { x: bound * react, animated: !ref2.current };
            current.scrollTo(obj);
          }
        }
        cResult[18] = itemCount;
        cResult[19] = sum;
        cResult[20] = le;
        tmp37 = le;
      }
      if (cResult[11] !== sum) {
        class Re {
          constructor(arg0) {
            closure_8(arg0);
          }
        }
        cResult[11] = sum;
        class L {
          constructor() {
            return closure_7.useReducedMotion;
          }
        }
        cResult[12] = tmp27;
      } else {
        class Re {
          constructor(arg0) {
            closure_8(arg0);
          }
        }
      }
      const _Array = Array;
      const self = this;
      const array = new Array(itemCount);
      const fillResult = array.fill(0);
      const mapped = fillResult.map(tmp27);
      cResult[8] = itemCount;
      cResult[9] = sum;
      cResult[10] = mapped;
    }
    if (tmp14 > 0) {
      class Re {
        constructor(arg0) {
          closure_8(arg0);
        }
      }
      const _Math = Math;
      const rounded = Math.round(tmp12);
      class L {
        constructor() {
          return closure_7.useReducedMotion;
        }
      }
    }
    cResult[5] = tmp12;
    cResult[6] = tmp14;
    cResult[7] = tmp14 > 0;
    tmp20 = tmp21;
  }
  const fn = function p() {
    return Math.max(0, Math.min(itemCount - 1, num));
  };
  cResult[0] = num;
  cResult[1] = itemCount;
  cResult[2] = fn;
  tmp7 = fn;
}) : ((initialIndex, arg1) => {
  let ChevronLargeLeftIcon;
  let ChevronLargeRightIcon;
  let Children;
  let cardMarginRight;
  let cardWidth;
  let children;
  let closure_8;
  let closure_9;
  let contentContainerStyle;
  let intl;
  let intl2;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj7;
  let obj9;
  let tmp7;
  let tmp9;
  function handleScrollEnd(nativeEvent) {
    closure_7(Math.max(0, Math.min(itemCount - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / react))));
    const obj = utils_PlatformUtils;
    if (obj.isIOS()) {
      const velocity = nativeEvent.nativeEvent.velocity;
      let tmp3 = null == velocity;
      if (!tmp3) {
        tmp3 = 0 === velocity.x && 0 === velocity.y;
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
  const style = initialIndex.style;
  const tmp = closure_12();
  let obj = react;
  react.useRef(null);
  const sum = cardWidth + cardMarginRight;
  react = sum;
  const ref = react.useRef(Math.max(0, Math.min(itemCount - 1, num)) * sum);
  const tmp4 = ref(react.useState(() => Math.max(0, Math.min(itemCount - 1, num))), 2);
  const first = tmp4[0];
  let closure_7 = tmp4[1];
  [tmp7, closure_8] = ref(react.useState(0), 2);
  ref(react.useState(0), 2);
  [tmp9, closure_9] = ref(react.useState(0), 2);
  ref(react.useState(0), 2);
  let obj2 = num(onScrollingChange[10]);
  let items = [closure_7];
  const stateFromStores = obj2.useStateFromStores(items, () => closure_7.useReducedMotion);
  const ref2 = react.useRef(stateFromStores);
  let tmp14 = tmp9 > 0;
  const obj3 = num(onScrollingChange[11]);
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  if (tmp14) {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.round(tmp7);
    tmp14 = rounded > Math.round(tmp9);
  }
  closure_12 = tmp14;
  let tmp25Result = tmp14 && first > 0;
  let closure_13 = tmp25Result;
  let tmp25Result2 = tmp14 && first < itemCount - 1;
  let closure_14 = tmp25Result2;
  const items1 = [itemCount, sum];
  const items2 = [stateFromStores];
  const memo = obj.useMemo(() => {
    const array = new Array(itemCount);
    const fillResult = array.fill(0);
    return fillResult.map((item, index) => index * closure_1_4);
  }, items1);
  const effect = obj.useEffect(() => {
    ref2.current = stateFromStores;
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
      const obj = { x: bound * react, animated: !ref2.current };
      current.scrollTo(obj);
    }
  }, items3);
  const items4 = [scrollToIndex];
  const imperativeHandle = obj.useImperativeHandle(arg1, () => ({ scrollToIndex }), items4);
  const items5 = [tmp25Result2, tmp25Result];
  const obj4 = { style: items6, children: items7 };
  items6 = [style, tmp.wrapper];
  const obj5 = {
    accessibilityActions: obj.useMemo(() => {
      let intl;
      let intl2;
      const items = [];
      if (closure_13) {
        const push = items.push;
        const obj = { name: previous, label: intl.string(intl3.t.vgfxaA) };
        intl = intl3.intl;
        push(obj);
      }
      if (closure_14) {
        const push2 = items.push;
        const obj2 = { name: next, label: intl2.string(intl3.t.XiOHRX) };
        intl2 = intl3.intl;
        push2(obj2);
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
      closure_8(arg0);
    },
    onLayout(nativeEvent) {
      closure_9(nativeEvent.nativeEvent.layout.width);
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
    scrollEnabled: tmp14,
    snapToOffsets: memo,
    children: Children.map(children, (children, arg1) => {
      let str;
      const obj = { accessibilityElementsHidden: closure_12 && arg1 !== first, importantForAccessibility: str, children };
      str = undefined;
      if (closure_12) {
        if (arg1 !== first) {
          str = "no-hide-descendants";
        }
      }
      return metroImportAll(metroRequire, obj);
    })
  };
  const tmp24 = first;
  const tmp26 = ref;
  if (tmp14) {
    tmp14 = !isScreenReaderEnabled;
  }
  Children = obj.Children;
  items7 = [closure_8(tmp26, obj5), , ];
  if (tmp25Result) {
    function handleNavigatePrevious() {
      if (closure_13) {
        callback(first - 1);
      }
    }
    const obj6 = { accessibilityLabel: intl.string(num(onScrollingChange[12]).t.vgfxaA), accessibilityRole: "button", onPress: handleNavigatePrevious, style: items8, children: closure_8(ChevronLargeLeftIcon, obj7) };
    const PressableOpacity = tmp10(tmp11[14]).PressableOpacity;
    intl = tmp10(tmp11[12]).intl;
    items8 = [, ];
    ({ navigationButton: arr10[0], navigationButtonPrevious: arr10[1] } = tmp);
    obj7 = { color: itemCount(onScrollingChange[7]).colors.WHITE, size: "sm" };
    ChevronLargeLeftIcon = tmp10(tmp11[15]).ChevronLargeLeftIcon;
    tmp25Result = closure_8(PressableOpacity, obj6);
  }
  items7[1] = tmp25Result;
  if (tmp25Result2) {
    function handleNavigateNext() {
      if (closure_14) {
        callback(first + 1);
      }
    }
    const obj8 = { accessibilityLabel: intl2.string(num(onScrollingChange[12]).t.XiOHRX), accessibilityRole: "button", onPress: handleNavigateNext, style: items9, children: closure_8(ChevronLargeRightIcon, obj9) };
    const PressableOpacity2 = tmp10(tmp11[14]).PressableOpacity;
    intl2 = tmp10(tmp11[12]).intl;
    items9 = [, ];
    ({ navigationButton: arr11[0], navigationButtonNext: arr11[1] } = tmp);
    obj9 = { color: itemCount(onScrollingChange[7]).colors.WHITE, size: "sm" };
    ChevronLargeRightIcon = tmp10(tmp11[16]).ChevronLargeRightIcon;
    tmp25Result2 = closure_8(PressableOpacity2, obj8);
  }
  items7[2] = tmp25Result2;
  return closure_9(tmp24, obj4);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx");

export const MarketingCardsScroller = forwardRefResult;