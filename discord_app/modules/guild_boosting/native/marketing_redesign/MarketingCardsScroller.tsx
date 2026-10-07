// === Module 12242: MarketingCardsScroller ===

// Module 12242 (MarketingCardsScroller)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const previous = "previous";
const next = "next";
const createStyles = fn(4896);
let obj = { wrapper: { position: "relative" }, navigationButton: null, navigationButtonPrevious: null, navigationButtonNext: null };
let size = { alignItems: "center", backgroundColor: null, borderRadius: null, height: 44, justifyContent: "center", position: "absolute", top: "50%", transform: null, width: 44, zIndex: 1 };
const ColorUtils = fn(4733);
size.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.56);
size.borderRadius = nativeDefault.radii.round;
let items = [{ translateY: -22 }];
size.transform = items;
obj.navigationButton = size;
obj.navigationButtonPrevious = { left: 16 };
obj.navigationButtonNext = { right: 16 };
let closure_12 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx");

export const MarketingCardsScroller = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((onScrollingChange, arg1) => {
  const cResult = itemCount(num2[9]).c(86);
  ({ children, contentContainerStyle, initialIndex, itemCount } = onScrollingChange);
  onScrollingChange = onScrollingChange.onScrollingChange;
  let num = 0;
  num2 = 0;
  ({ cardMarginRight, cardWidth } = onScrollingChange);
  if (undefined !== initialIndex) {
    num2 = initialIndex;
  }
  closure_12();
  noop.useRef(null);
  const sum = cardWidth + cardMarginRight;
  noop = sum;
  const ref = noop.useRef(Math.max(num, Math.min(itemCount - 1, num2)) * sum);
  if (cResult[0] === num2) {
    if (cResult[1] === itemCount) {
      let tmp7 = cResult[2];
    }
    const tmp9 = ref(obj2.useState(tmp7), 2);
    const first = tmp9[0];
    AccessibilityStore = tmp9[1];
    [tmp12, closure_8] = ref(obj2.useState(num), 2);
    const tmp11 = ref(obj2.useState(num), 2);
    [tmp14, closure_9] = ref(obj2.useState(num), 2);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      class L {
        constructor() {
          return closure_7.useReducedMotion;
        }
      }
      cResult[3] = items;
      cResult[4] = L;
      let tmp16 = L;
      let tmp15 = items;
    } else {
      tmp15 = cResult[3];
      tmp16 = cResult[4];
    }
    const tmp13 = ref(obj2.useState(num), 2);
    const stateFromStores = itemCount(tmp2[10]).useStateFromStores(tmp15, tmp16);
    obj2.useRef(stateFromStores);
    itemCount(tmp2[11]);
    if (cResult[5] === tmp12) {
      if (cResult[6] === tmp14) {
        let tmp20 = cResult[7];
      }
      closure_12 = tmp20;
      class L {
        constructor() {
          return closure_7.useReducedMotion;
        }
      }
      closure_13 = tmp23;
      let tmp24 = tmp20;
      if (tmp20) {
        tmp24 = first < itemCount - 1;
      }
      closure_14 = tmp24;
      if (cResult[8] === itemCount) {
        if (cResult[9] === sum) {
          if (cResult[13] !== stateFromStores) {
            function ie() {
              closure_11.current = stateFromStores;
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
            let tmp34 = items1;
            let tmp33 = ie;
          } else {
            tmp33 = cResult[14];
            tmp34 = cResult[15];
          }
          const effect = obj2.useEffect(tmp33, tmp34);
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
            let tmp37 = items2;
            let tmp36 = oe;
          } else {
            tmp36 = cResult[16];
            tmp37 = cResult[17];
          }
          const effect1 = obj2.useEffect(tmp36, tmp37);
          if (cResult[18] === itemCount) {
            if (cResult[19] === sum) {
              let tmp39 = cResult[20];
            }
            const scrollToIndex = tmp39;
            if (cResult[21] !== tmp39) {
              function ce() {
                return { scrollToIndex };
              }
              const items3 = [tmp39];
              class L {
                constructor() {
                  return closure_7.useReducedMotion;
                }
              }
              cResult[21] = tmp39;
              cResult[22] = ce;
              cResult[23] = items3;
              let tmp41 = items3;
              let tmp40 = ce;
            } else {
              tmp40 = cResult[22];
              tmp41 = cResult[23];
            }
            class L {
              constructor() {
                return closure_7.useReducedMotion;
              }
            }
            const imperativeHandle = obj2.useImperativeHandle(arg1, tmp40, tmp41);
            if (cResult[24] === tmp24) {
              if (cResult[29] === first) {
                if (cResult[30] === tmp23) {
                  if (cResult[31] === tmp39) {
                    let tmp47 = cResult[32];
                  }
                  closure_16 = tmp47;
                  if (cResult[33] === first) {
                    if (cResult[34] === tmp24) {
                      if (cResult[35] === tmp39) {
                        let tmp48 = cResult[36];
                      }
                      closure_17 = tmp48;
                      if (cResult[37] === tmp48) {
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
                        if (tmp53 === Symbol.for("react.memo_cache_sentinel")) {
                          class Ie {
                            constructor(arg0) {
                              tmp = closure_9(onScrollingChange.nativeEvent.layout.width);
                              return;
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
                            constructor(arg0) {
                              tmp = closure_9(onScrollingChange.nativeEvent.layout.width);
                              return;
                            }
                          }
                        }
                        const _Symbol3 = Symbol;
                        if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                          class Re {
                            constructor(arg0) {
                              tmp = closure_8(onScrollingChange);
                              return;
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
                              tmp = closure_8(onScrollingChange);
                              return;
                            }
                          }
                        }
                        if (cResult[44] === itemCount) {
                          class Re {
                            constructor(arg0) {
                              tmp = closure_8(onScrollingChange);
                              return;
                            }
                          }
                        }
                        class Pe {
                          constructor(arg0) {
                            tmp = closure_7(Math.max(0, Math.min(itemCount - 1, Math.round(onScrollingChange.nativeEvent.contentOffset.x / closure_4))));
                            obj = closure_0(closure_2[13]);
                            if (obj.isIOS()) {
                              velocity = onScrollingChange.nativeEvent.velocity;
                              tmp2 = null;
                              tmp3 = null == velocity;
                              if (!tmp3) {
                                tmp4 = 0 === velocity.x && 0 === velocity.y;
                                tmp3 = tmp4;
                              }
                              if (tmp3) {
                                if (onScrollingChange != null) {
                                  flag = false;
                                  tmp5Result = tmp5(false);
                                }
                              }
                            }
                            return;
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
                      cResult[37] = tmp48;
                      cResult[38] = tmp47;
                    }
                  }
                  class L {
                    constructor() {
                      return closure_7.useReducedMotion;
                    }
                  }
                  cResult[33] = first;
                  cResult[34] = tmp24;
                  cResult[36] = tmp49;
                  tmp48 = tmp49;
                }
              }
              function me() {
                if (closure_13) {
                  scrollToIndex(first - 1);
                }
              }
              class L {
                constructor() {
                  return closure_7.useReducedMotion;
                }
              }
              cResult[29] = first;
              cResult[30] = tmp23;
              cResult[31] = tmp39;
              cResult[32] = me;
              tmp47 = me;
            }
            const items4 = [];
            if (!tmp23) {
              class Re {
                constructor(arg0) {
                  tmp = closure_8(onScrollingChange);
                  return;
                }
              }
            } else {
              class Re {
                constructor(arg0) {
                  tmp = closure_8(onScrollingChange);
                  return;
                }
              }
              if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                class Re {
                  constructor(arg0) {
                    tmp = closure_8(onScrollingChange);
                    return;
                  }
                }
                tmp45[0] = stateFromStores;
                class L {
                  constructor() {
                    return closure_7.useReducedMotion;
                  }
                }
                tmp45[1] = obj5.string(itemCount(tmp2[12]).t.vgfxaA);
                cResult[27] = tmp45;
              } else {
                class Re {
                  constructor(arg0) {
                    tmp = closure_8(onScrollingChange);
                    return;
                  }
                }
              }
              class L {
                constructor() {
                  return closure_7.useReducedMotion;
                }
              }
            }
          }
          function le(arg0) {
            const bound = Math.max(0, Math.min(itemCount - 1, arg0));
            closure_7(bound);
            const current = ref.current;
            if (current != null) {
              const obj = { x: bound * sum, animated: !ref2.current };
              current.scrollTo(obj);
            }
          }
          cResult[18] = itemCount;
          cResult[19] = sum;
          cResult[20] = le;
          tmp39 = le;
        }
      }
      const _Array = Array;
      const array = new Array(itemCount);
      const mapped = array.fill(num).map(tmp26);
      cResult[8] = itemCount;
      cResult[9] = sum;
      num = 10;
      cResult[10] = mapped;
      const fillResult = array.fill(num);
    }
    if (tmp14 > num) {
      class Re {
        constructor(arg0) {
          tmp = closure_8(onScrollingChange);
          return;
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
    cResult[7] = tmp14 > num;
    tmp20 = tmp21;
    const tmpResult = itemCount(tmp2[10]);
  }
  const fn = function p() {
    return Math.max(0, Math.min(itemCount - 1, num2));
  };
  cResult[num] = num2;
  cResult[1] = itemCount;
  cResult[2] = fn;
  tmp7 = fn;
  let obj = itemCount(num2[9]);
}) : ((initialIndex, arg1) => {
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
  const tmp8 = ref(noop.useState(0), 2);
  let items = [closure_7];
  const stateFromStores = num(onScrollingChange[10]).useStateFromStores(items, () => closure_7.useReducedMotion);
  noop.useRef(stateFromStores);
  let obj2 = num(onScrollingChange[10]);
  let tmp14 = tmp9 > 0;
  const isScreenReaderEnabled = num(onScrollingChange[11]).useIsScreenReaderEnabled();
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
  let tmp25Result2 = tmp14;
  if (tmp14) {
    tmp25Result2 = first < itemCount - 1;
  }
  closure_14 = tmp25Result2;
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
  const items5 = [tmp25Result2, tmp25Result];
  const obj4 = { style: null, children: null };
  const items6 = [initialIndex.style, tmp.wrapper];
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
  obj5.scrollEnabled = tmp14;
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
    return closure_2_8(timestampProducer, obj);
  });
  const items7 = [closure_8(ref, obj5), , ];
  if (tmp25Result) {
    function handleNavigatePrevious() {
      if (closure_13) {
        callback(first - 1);
      }
    }
    const obj6 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
    let intl = tmp10(tmp11[12]).intl;
    obj6.accessibilityLabel = intl.string(tmp10(tmp11[12]).t.vgfxaA);
    obj6.onPress = handleNavigatePrevious;
    const items8 = [, ];
    ({ navigationButton: arr10[0], navigationButtonPrevious: arr10[1] } = tmp);
    obj6.style = items8;
    const obj7 = { color: itemCount(tmp11[7]).colors.WHITE, size: "sm" };
    obj6.children = closure_8(tmp10(tmp11[15]).ChevronLargeLeftIcon, obj7);
    tmp25Result = closure_8(tmp10(tmp11[14]).PressableOpacity, obj6);
  }
  items7[1] = tmp25Result;
  if (tmp25Result2) {
    function handleNavigateNext() {
      if (closure_14) {
        callback(first + 1);
      }
    }
    const obj8 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
    let intl2 = tmp10(tmp11[12]).intl;
    obj8.accessibilityLabel = intl2.string(tmp10(tmp11[12]).t.XiOHRX);
    obj8.onPress = handleNavigateNext;
    const items9 = [, ];
    ({ navigationButton: arr11[0], navigationButtonNext: arr11[1] } = tmp);
    obj8.style = items9;
    const obj9 = { color: itemCount(tmp11[7]).colors.WHITE, size: "sm" };
    obj8.children = closure_8(tmp10(tmp11[16]).ChevronLargeRightIcon, obj9);
    tmp25Result2 = closure_8(tmp10(tmp11[14]).PressableOpacity, obj8);
  }
  items7[2] = tmp25Result2;
  obj4.children = items7;
  return closure_9(first, obj4);
}));