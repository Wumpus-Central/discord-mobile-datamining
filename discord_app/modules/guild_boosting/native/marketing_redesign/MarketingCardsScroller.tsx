// === Module 12304: MarketingCardsScroller ===

// Module 12304 (MarketingCardsScroller)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;

require = fn;
let closure_3 = ["ref"];
get_ActivityIndicator = fn(17);
({ ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const previous = "previous";
const next = "next";
const createStyles = fn(5092);
let obj2 = { wrapper: { position: "relative" }, navigationButton: null, navigationButtonPrevious: null, navigationButtonNext: null };
let size = { alignItems: "center", backgroundColor: null, borderRadius: null, height: 44, justifyContent: "center", position: "absolute", top: "50%", transform: null, width: 44, zIndex: 1 };
const ColorUtils = fn(4967);
size.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.56);
size.borderRadius = nativeDefault.radii.round;
let items = [{ translateY: -22 }];
size.transform = items;
obj2.navigationButton = size;
obj2.navigationButtonPrevious = { left: 16 };
obj2.navigationButtonNext = { right: 16 };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx");

export const MarketingCardsScroller = ReactCompilerGating.isReactCompilerEnabled() ? (function MarketingCardsScroller(arg0) {
  const cResult = itemCount(num2[10]).c(65);
  let tmp4 = _objectWithoutProperties(arg0, ref);
  ({ contentContainerStyle, initialIndex, itemCount } = tmp4);
  const onScrollingChange = tmp4.onScrollingChange;
  let num = 0;
  num2 = 0;
  ({ cardMarginRight, cardWidth, children, style } = tmp4);
  if (undefined !== initialIndex) {
    num2 = initialIndex;
  }
  const tmp5 = closure_14();
  ref = first.useRef(null);
  const sum = cardWidth + cardMarginRight;
  _slicedToArray = sum;
  _objectWithoutProperties = first.useRef(Math.max(num, Math.min(itemCount - 1, num2)) * sum);
  [first, closure_7] = first.useState(() => Math.max(0, Math.min(itemCount - 1, num2)));
  let obj = itemCount(num2[10]);
  [tmp11, closure_8] = first.useState(num);
  const tmp10 = _slicedToArray(first.useState(num), 2);
  [tmp13, AccessibilityStore] = first.useState(num);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class C {
      constructor() {
        return closure_9.useReducedMotion;
      }
    }
    cResult[num] = items;
    cResult[1] = C;
    tmp14 = items;
  } else {
    [tmp14, tmp15] = cResult;
  }
  const tmp12 = _slicedToArray(first.useState(num), 2);
  const stateFromStores = itemCount(num2[11]).useStateFromStores(tmp14, C);
  const tmpResult = itemCount(num2[11]);
  itemCount(num2[12]);
  if (cResult[2] === tmp11) {
    if (cResult[3] === tmp13) {
      let tmp20 = cResult[4];
    }
    name = tmp20;
    class C {
      constructor() {
        return closure_9.useReducedMotion;
      }
    }
    name2 = tmp23;
    let tmp24 = tmp20;
    if (tmp20) {
      tmp24 = first < itemCount - 1;
    }
    closure_14 = tmp24;
    if (cResult[5] === itemCount) {
      if (cResult[6] === sum) {
        if (cResult[10] !== stateFromStores) {
          function oe() {
            closure_11.current = stateFromStores;
          }
          const items1 = [stateFromStores];
          class C {
            constructor() {
              return closure_9.useReducedMotion;
            }
          }
          cResult[10] = stateFromStores;
          cResult[11] = oe;
          cResult[12] = items1;
          let tmp33 = items1;
          let tmp32 = oe;
        } else {
          tmp32 = cResult[11];
          tmp33 = cResult[12];
        }
        const effect = obj2.useEffect(tmp32, tmp33);
        class C {
          constructor() {
            return closure_9.useReducedMotion;
          }
        }
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          function le() {
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
          class C {
            constructor() {
              return closure_9.useReducedMotion;
            }
          }
          cResult[14] = items2;
          let tmp36 = items2;
          let tmp35 = le;
        } else {
          tmp35 = cResult[13];
          tmp36 = cResult[14];
        }
        const effect1 = obj2.useEffect(tmp35, tmp36);
        if (cResult[15] === itemCount) {
          if (cResult[16] === sum) {
            let tmp38 = cResult[17];
          }
          const scrollToIndex = tmp38;
          if (cResult[18] !== tmp38) {
            function de() {
              return { scrollToIndex };
            }
            const items3 = [tmp38];
            class C {
              constructor() {
                return closure_9.useReducedMotion;
              }
            }
            cResult[18] = tmp38;
            cResult[19] = de;
            cResult[20] = items3;
          }
          class C {
            constructor() {
              return closure_9.useReducedMotion;
            }
          }
          if (cResult[21] === tmp24) {
            if (cResult[22] === tmp23) {
              let tmp41 = cResult[23];
            }
            if (cResult[26] === first) {
              if (cResult[27] === tmp23) {
                if (cResult[28] === tmp38) {
                  let tmp46 = cResult[29];
                }
                closure_16 = tmp46;
                if (cResult[30] === first) {
                  if (cResult[31] === tmp24) {
                    if (cResult[32] === tmp38) {
                      let tmp47 = cResult[33];
                    }
                    closure_17 = tmp47;
                    if (cResult[34] === tmp47) {
                      if (cResult[35] === tmp46) {
                        let tmp49 = cResult[36];
                      }
                      const _Symbol3 = Symbol;
                      class C {
                        constructor() {
                          return closure_9.useReducedMotion;
                        }
                      }
                      const _Symbol4 = Symbol;
                      if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                        function handleContentSizeChange(arg0) {
                          closure_1_8(arg0);
                        }
                        cResult[38] = handleContentSizeChange;
                        class C {
                          constructor() {
                            return closure_9.useReducedMotion;
                          }
                        }
                      }
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
                      let tmp55 = tmp20;
                      if (tmp20) {
                        tmp55 = !tmp19;
                      }
                      if (cResult[39] === first) {
                        if (cResult[40] === tmp20) {
                          let tmp56 = cResult[41];
                        }
                        function handleScrollBeginDrag() {
                          if (onScrollingChange != null) {
                            tmp(true);
                          }
                        }
                        function handleMomentumScrollEnd(arg0) {
                          handleScrollEnd(arg0);
                          if (onScrollingChange != null) {
                            tmp2(false);
                          }
                        }
                        class C {
                          constructor() {
                            return closure_9.useReducedMotion;
                          }
                        }
                        const mapped = arr7.map(children, tmp56);
                        if (cResult[42] === tmp54) {
                          if (cResult[43] === tmp41) {
                            if (cResult[44] === contentContainerStyle) {
                              if (cResult[45] === tmp49) {
                                if (cResult[46] === tmp53) {
                                  if (cResult[47] === tmp52) {
                                    if (cResult[48] === handleMomentumScrollEnd) {
                                      if (cResult[49] === handleScrollBeginDrag) {
                                        if (cResult[50] === handleScrollEnd) {
                                          if (cResult[51] === tmp25) {
                                            if (cResult[52] === tmp55) {
                                              if (cResult[53] === mapped) {
                                                let tmp58 = cResult[54];
                                              }
                                              if (cResult[55] === tmp23) {
                                                if (cResult[56] === tmp46) {
                                                  if (cResult[57] === tmp5.navigationButton) {
                                                    if (cResult[58] === tmp5.navigationButtonPrevious) {
                                                      let tmp61 = cResult[59];
                                                    }
                                                    if (cResult[60] === tmp24) {
                                                      if (cResult[61] === tmp47) {
                                                        if (cResult[62] === tmp5.navigationButton) {
                                                          if (cResult[63] === tmp5.navigationButtonNext) {
                                                            let tmp63 = cResult[64];
                                                          }
                                                          class C {
                                                            constructor() {
                                                              return closure_9.useReducedMotion;
                                                            }
                                                          }
                                                          const items4 = [style, tmp5.wrapper];
                                                          tmp67[0] = items4;
                                                          const items5 = [tmp58, tmp61, tmp63];
                                                          tmp67[1] = items5;
                                                          class Me {
                                                            constructor(arg0, arg1) {
                                                              tmp4 = closure_12;
                                                              tmp = jsx;
                                                              tmp2 = View;
                                                              tmp3 = closure_12;
                                                              if (closure_12) {
                                                                tmp5 = closure_6;
                                                                tmp4 = arg1 !== closure_6;
                                                              }
                                                              obj = { accessibilityElementsHidden: tmp4, importantForAccessibility: null, children: null };
                                                              str = undefined;
                                                              if (tmp3) {
                                                                tmp6 = closure_6;
                                                                if (arg1 !== closure_6) {
                                                                  str = "no-hide-descendants";
                                                                }
                                                              }
                                                              obj.importantForAccessibility = str;
                                                              obj.children = arg0;
                                                              return tmp(tmp2, obj);
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    class C {
                                                      constructor() {
                                                        return closure_9.useReducedMotion;
                                                      }
                                                    }
                                                    cResult[60] = tmp24;
                                                    cResult[61] = tmp47;
                                                    cResult[62] = tmp5.navigationButton;
                                                    cResult[63] = tmp5.navigationButtonNext;
                                                    class Me {
                                                      constructor(arg0, arg1) {
                                                        tmp4 = closure_12;
                                                        tmp = jsx;
                                                        tmp2 = View;
                                                        tmp3 = closure_12;
                                                        if (closure_12) {
                                                          tmp5 = closure_6;
                                                          tmp4 = arg1 !== closure_6;
                                                        }
                                                        obj = { accessibilityElementsHidden: tmp4, importantForAccessibility: null, children: null };
                                                        str = undefined;
                                                        if (tmp3) {
                                                          tmp6 = closure_6;
                                                          if (arg1 !== closure_6) {
                                                            str = "no-hide-descendants";
                                                          }
                                                        }
                                                        obj.importantForAccessibility = str;
                                                        obj.children = arg0;
                                                        return tmp(tmp2, obj);
                                                      }
                                                    }
                                                    tmp63 = tmp24;
                                                  }
                                                }
                                              }
                                              class C {
                                                constructor() {
                                                  return closure_9.useReducedMotion;
                                                }
                                              }
                                              cResult[55] = tmp23;
                                              cResult[56] = tmp46;
                                              cResult[57] = tmp5.navigationButton;
                                              cResult[58] = tmp5.navigationButtonPrevious;
                                              class Me {
                                                constructor(arg0, arg1) {
                                                  tmp4 = closure_12;
                                                  tmp = jsx;
                                                  tmp2 = View;
                                                  tmp3 = closure_12;
                                                  if (closure_12) {
                                                    tmp5 = closure_6;
                                                    tmp4 = arg1 !== closure_6;
                                                  }
                                                  obj = { accessibilityElementsHidden: tmp4, importantForAccessibility: null, children: null };
                                                  str = undefined;
                                                  if (tmp3) {
                                                    tmp6 = closure_6;
                                                    if (arg1 !== closure_6) {
                                                      str = "no-hide-descendants";
                                                    }
                                                  }
                                                  obj.importantForAccessibility = str;
                                                  obj.children = arg0;
                                                  return tmp(tmp2, obj);
                                                }
                                              }
                                              tmp61 = tmp23;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj3 = { accessibilityActions: tmp41, centerContent: true, contentContainerStyle, decelerationRate: 0.1, horizontal: true, onAccessibilityAction: tmp49, onContentSizeChange: tmp53, onLayout: tmp52, onMomentumScrollEnd: null, onScrollBeginDrag: null, onScrollEndDrag: null, ref: null, scrollEnabled: null, snapToOffsets: null, children: null };
                        class Me {
                          constructor(arg0, arg1) {
                            tmp4 = closure_12;
                            tmp = jsx;
                            tmp2 = View;
                            tmp3 = closure_12;
                            if (closure_12) {
                              tmp5 = closure_6;
                              tmp4 = arg1 !== closure_6;
                            }
                            obj = { accessibilityElementsHidden: tmp4, importantForAccessibility: null, children: null };
                            str = undefined;
                            if (tmp3) {
                              tmp6 = closure_6;
                              if (arg1 !== closure_6) {
                                str = "no-hide-descendants";
                              }
                            }
                            obj.importantForAccessibility = str;
                            obj.children = arg0;
                            return tmp(tmp2, obj);
                          }
                        }
                        obj3.onScrollBeginDrag = handleScrollBeginDrag;
                        obj3.onScrollEndDrag = handleScrollEnd;
                        obj3.ref = ref;
                        obj3.scrollEnabled = tmp55;
                        obj3.snapToOffsets = tmp25;
                        obj3.children = mapped;
                        const tmp60 = stateFromStores(tmp54, obj3);
                        cResult[42] = tmp54;
                        cResult[43] = tmp41;
                        cResult[44] = contentContainerStyle;
                        cResult[45] = tmp49;
                        cResult[46] = tmp53;
                        cResult[47] = tmp52;
                        cResult[48] = handleMomentumScrollEnd;
                        cResult[49] = handleScrollBeginDrag;
                        cResult[50] = handleScrollEnd;
                        cResult[51] = tmp25;
                        cResult[52] = tmp55;
                        cResult[53] = mapped;
                        cResult[54] = tmp60;
                        tmp58 = tmp60;
                      }
                      class Me {
                        constructor(arg0, arg1) {
                          tmp4 = closure_12;
                          tmp = jsx;
                          tmp2 = View;
                          tmp3 = closure_12;
                          if (closure_12) {
                            tmp5 = closure_6;
                            tmp4 = arg1 !== closure_6;
                          }
                          obj = { accessibilityElementsHidden: tmp4, importantForAccessibility: null, children: null };
                          str = undefined;
                          if (tmp3) {
                            tmp6 = closure_6;
                            if (arg1 !== closure_6) {
                              str = "no-hide-descendants";
                            }
                          }
                          obj.importantForAccessibility = str;
                          obj.children = arg0;
                          return tmp(tmp2, obj);
                        }
                      }
                      cResult[39] = first;
                      cResult[40] = tmp20;
                      cResult[41] = Me;
                      tmp56 = Me;
                    }
                    class C {
                      constructor() {
                        return closure_9.useReducedMotion;
                      }
                    }
                    cResult[34] = tmp47;
                    cResult[35] = tmp46;
                    cResult[36] = tmp50;
                    tmp49 = tmp50;
                  }
                }
                class C {
                  constructor() {
                    return closure_9.useReducedMotion;
                  }
                }
                cResult[30] = first;
                cResult[31] = tmp24;
                cResult[32] = tmp38;
                cResult[33] = tmp48;
                tmp47 = tmp48;
              }
            }
            function handleNavigatePrevious() {
              if (closure_13) {
                scrollToIndex(first - 1);
              }
            }
            class C {
              constructor() {
                return closure_9.useReducedMotion;
              }
            }
            cResult[26] = first;
            cResult[27] = tmp23;
            cResult[28] = tmp38;
            cResult[29] = handleNavigatePrevious;
            tmp46 = handleNavigatePrevious;
          }
          const items6 = [];
          if (!tmp23) {
            if (!tmp24) {
              cResult[21] = tmp24;
              class C {
                constructor() {
                  return closure_9.useReducedMotion;
                }
              }
              cResult[23] = items6;
              tmp41 = items6;
            } else {
              const _Symbol2 = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = { name: name2, label: null };
                class C {
                  constructor() {
                    return closure_9.useReducedMotion;
                  }
                }
                obj4.label = obj8.string(itemCount(tmp2[13]).t.XiOHRX);
                cResult[25] = obj4;
              }
              class C {
                constructor() {
                  return closure_9.useReducedMotion;
                }
              }
            }
          } else {
            const _Symbol = Symbol;
            if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { name, label: null };
              class C {
                constructor() {
                  return closure_9.useReducedMotion;
                }
              }
              obj5.label = obj6.string(itemCount(tmp2[13]).t.vgfxaA);
              cResult[24] = obj5;
            }
            class C {
              constructor() {
                return closure_9.useReducedMotion;
              }
            }
          }
        }
        function ce(arg0) {
          const bound = Math.max(0, Math.min(itemCount - 1, arg0));
          closure_7(bound);
          const current = ref.current;
          if (current != null) {
            const obj = { x: bound * sum, animated: !ref2.current };
            current.scrollTo(obj);
          }
        }
        cResult[15] = itemCount;
        cResult[16] = sum;
        cResult[17] = ce;
        tmp38 = ce;
      }
    }
    if (cResult[8] !== sum) {
      function ne(arg0, arg1) {
        return arg1 * sum;
      }
      cResult[8] = sum;
      class C {
        constructor() {
          return closure_9.useReducedMotion;
        }
      }
      cResult[9] = ne;
      let tmp26 = ne;
    } else {
      tmp26 = cResult[9];
    }
    const _Array = Array;
    const array = new Array(itemCount);
    const mapped1 = array.fill(num).map(tmp26);
    cResult[5] = itemCount;
    cResult[6] = sum;
    num = 7;
    cResult[7] = mapped1;
    const fillResult = array.fill(num);
  }
  if (tmp13 > num) {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.round(tmp11);
    class C {
      constructor() {
        return closure_9.useReducedMotion;
      }
    }
  }
  cResult[2] = tmp11;
  cResult[3] = tmp13;
  cResult[4] = tmp13 > num;
  tmp20 = tmp21;
  const ref2 = first.useRef(stateFromStores);
}) : (function MarketingCardsScroller(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let itemCount;
  let onScrollingChange;
  _slicedToArray = undefined;
  ref = undefined;
  first = undefined;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let stateFromStores;
  let ref2;
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
  const tmp2 = closure_14();
  first.useRef(null);
  const sum = cardWidth + cardMarginRight;
  _slicedToArray = sum;
  ref = first.useRef(Math.max(0, Math.min(itemCount - 1, num)) * sum);
  [first, closure_7] = first.useState(() => Math.max(0, Math.min(itemCount - 1, num)));
  [tmp8, c8] = first.useState(0);
  const tmp7 = _slicedToArray(first.useState(0), 2);
  [tmp10, c9] = first.useState(0);
  const tmp9 = _slicedToArray(first.useState(0), 2);
  let items = [c9];
  stateFromStores = num(onScrollingChange[11]).useStateFromStores(items, () => _undefined2.useReducedMotion);
  ref2 = first.useRef(stateFromStores);
  let obj2 = num(onScrollingChange[11]);
  let tmp15 = tmp10 > 0;
  const isScreenReaderEnabled = num(onScrollingChange[12]).useIsScreenReaderEnabled();
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
    accessibilityActions: first.useMemo(() => {
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
    onMomentumScrollEnd: function handleMomentumScrollEnd(arg0) {
      handleScrollEnd(arg0);
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
    return collapsed(closure_2_8, obj);
  });
  const items7 = [stateFromStores(closure_7, obj5), , ];
  if (tmp26Result) {
    function handleNavigatePrevious() {
      if (closure_13) {
        callback(first - 1);
      }
    }
    const obj6 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
    let intl = tmp11(tmp12[13]).intl;
    obj6.accessibilityLabel = intl.string(tmp11(tmp12[13]).t.vgfxaA);
    obj6.onPress = handleNavigatePrevious;
    const items8 = [, ];
    ({ navigationButton: arr10[0], navigationButtonPrevious: arr10[1] } = tmp2);
    obj6.style = items8;
    const obj7 = { color: itemCount(tmp12[8]).colors.WHITE, size: "sm" };
    obj6.children = tmp26(tmp11(tmp12[16]).ChevronLargeLeftIcon, obj7);
    tmp26Result = tmp26(tmp11(tmp12[15]).PressableOpacity, obj6);
  }
  items7[1] = tmp26Result;
  if (tmp26Result2) {
    function handleNavigateNext() {
      if (closure_14) {
        callback(first + 1);
      }
    }
    const obj8 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
    let intl2 = tmp11(tmp12[13]).intl;
    obj8.accessibilityLabel = intl2.string(tmp11(tmp12[13]).t.XiOHRX);
    obj8.onPress = handleNavigateNext;
    const items9 = [, ];
    ({ navigationButton: arr11[0], navigationButtonNext: arr11[1] } = tmp2);
    obj8.style = items9;
    const obj9 = { color: itemCount(tmp12[8]).colors.WHITE, size: "sm" };
    obj8.children = tmp26(tmp11(tmp12[17]).ChevronLargeRightIcon, obj9);
    tmp26Result2 = tmp26(tmp11(tmp12[15]).PressableOpacity, obj8);
  }
  items7[2] = tmp26Result2;
  obj4.children = items7;
  return ref2(c8, obj4);
});