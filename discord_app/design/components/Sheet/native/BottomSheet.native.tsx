// === Module 6645: Sheet/BottomSheet ===

// Module 6645 (Sheet/BottomSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5770 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import BottomSheetModal from "BottomSheetModal" /* 6112 */;
import NavScrim from "NavScrim" /* 6536 */;
import ActionSheetContextDefault from "ActionSheetContext" /* 6647 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 6649 */;
import Sheet_BottomSheetBackdrop from "Sheet/BottomSheetBackdrop" /* 6650 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const BottomSheetModalDefault = BottomSheetModal;

require = fn;
let closure_3 = ["startHeight", "hasEverExpanded", "windowDimensions", "wrapperStyle", "scrollViewStyle", "startExpanded", "onChange", "onExpand", "keyboardShouldPersistTaps", "children", "maxDynamicContentSize"];
let closure_4 = ["startHeight", "contentHeight", "maxHeight", "hasEverExpanded", "windowDimensions", "wrapperStyle", "onChange", "onExpand", "children", "borderGradient", "extraContent"];
let closure_5 = ["scrollable", "startHeight", "maxHeight", "containerHeight", "startExpanded", "backdropOpacity", "backdropChildren", "header", "handleComponent", "handleDisabled", "dismissAccessibilityLabel", "footer", "onExpand", "onDismiss", "keyboardShouldPersistTaps", "children", "backgroundStyles", "contentStyles", "bodyStyles", "borderGradient", "showGradient", "extraContent", "contentHeight"];
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_9, View: c10, Platform } = get_ActivityIndicator);
const ActionSheetConstants = fn(6646);
({ ACTION_SHEET_START_HEIGHT_RATIO: closure_11, ACTION_SHEET_MAX_WIDTH: closure_12, ACTION_SHEET_SPRING_CONFIG: map1, ACTION_SHEET_SPRING_CONFIG_REDUCED_MOTION: closure_14, ACTION_SHEET_GRADIENT_BORDER_WIDTH: closure_15, ACTION_SHEET_GRADIENT_BORDER_RADIUS: closure_16, ACTION_SHEET_BORDER_RADIUS: closure_17, ACTION_SHEET_INNER_BORDER_RADIUS: closure_18, ACTION_SHEET_MINIMUM_BOTTOM_PADDING: closure_19 } = ActionSheetConstants);
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
const createStyles = fn(4890);
let closure_22 = createStyles.createStyles((arg0) => {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const obj = { background: { overflow: "hidden", borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, wrapper: { overflow: "hidden", flex: 1 }, wrapperWithBorder: null, content: null, gradient: null, handleIndicator: null, backgroundOverlay: null, header: null, body: null };
  const obj2 = { overflow: "hidden", borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.wrapperWithBorder = { overflow: "hidden", marginTop: marginHorizontal, marginHorizontal, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  let tmp4;
  if (arg0) {
    tmp4 = borderTopRightRadius;
  }
  const obj4 = { borderTopLeftRadius: tmp4, borderTopRightRadius: null, overflow: null, marginBottom: null, flex: 1 };
  let tmp5;
  if (arg0) {
    tmp5 = borderTopRightRadius;
  }
  obj4.borderTopRightRadius = tmp5;
  let str;
  if (arg0) {
    str = "hidden";
  }
  obj4.overflow = str;
  let num2 = 0;
  if (!flag) {
    num2 = num + 4;
  }
  obj4.marginBottom = num2;
  obj.content = obj4;
  const obj3 = { overflow: "hidden", marginTop: marginHorizontal, marginHorizontal, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  let str2;
  if (obj5.isIOS()) {
    str2 = "hidden";
  }
  obj.gradient = { height: "100%", overflow: str2, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius };
  obj5 = PlatformUtils;
  const obj6 = { height: "100%", overflow: str2, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius };
  obj.handleIndicator = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
  const obj8 = {};
  const merged = Object.assign(options.absoluteFillObject);
  obj8.backgroundColor = nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
  obj.backgroundOverlay = obj8;
  obj.header = { marginBottom: 16 };
  obj.body = { flex: 1 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_23 = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = c.c(39);
  if (cResult[0] !== arg0) {
    ({ startHeight, hasEverExpanded, windowDimensions, wrapperStyle, scrollViewStyle, startExpanded, onChange, onExpand, keyboardShouldPersistTaps, children, maxDynamicContentSize } = arg0);
    const tmp17 = _objectWithoutProperties(arg0, closure_3);
    closure_0 = onChange;
    closure_1 = onExpand;
    cResult[0] = arg0;
    cResult[1] = maxDynamicContentSize;
    cResult[2] = children;
    cResult[3] = keyboardShouldPersistTaps;
    cResult[4] = onChange;
    cResult[5] = onExpand;
    cResult[6] = tmp17;
    cResult[7] = scrollViewStyle;
    cResult[8] = startExpanded;
    cResult[9] = startHeight;
    cResult[10] = windowDimensions;
    cResult[11] = wrapperStyle;
    let tmp14 = wrapperStyle;
    let tmp13 = windowDimensions;
    let result = startHeight;
    let tmp11 = startExpanded;
    let tmp5 = children;
    let diff = maxDynamicContentSize;
  } else {
    diff = cResult[1];
    tmp5 = cResult[2];
    closure_0 = cResult[4];
    closure_1 = cResult[5];
    tmp11 = cResult[8];
    result = cResult[9];
    tmp13 = cResult[10];
    tmp14 = cResult[11];
  }
  const height = tmp13.height;
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (result == null) {
    result = height * closure_1_11;
  }
  closure_3 = result;
  if (diff == null) {
    diff = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  }
  if (cResult[12] === result) {
    if (cResult[13] === isScreenReaderEnabled) {
      if (cResult[14] === tmp11) {
        [r10079, closure_4] = noop.useState(cResult[15]);
        if (cResult[16] !== isScreenReaderEnabled) {
          class K {
            constructor() {
              if (closure_2) {
                tmp = closure_4;
                tmp2 = closure_4([]);
              }
              return;
            }
          }
          const items = [isScreenReaderEnabled];
          cResult[16] = isScreenReaderEnabled;
          cResult[17] = K;
          cResult[18] = items;
          let tmp24 = items;
          class Z {
            constructor(arg0, arg1, arg2) {
              if (closure_0 != null) {
                tmp2 = arg1;
                tmp3 = arg2;
                tmpResult = tmp(arg0, arg1, arg2);
              }
              if (0 === arg0) {
                if (closure_1 != null) {
                  tmp5Result = tmp5();
                }
              }
              return;
            }
          }
        } else {
          class K {
            constructor() {
              if (closure_2) {
                tmp = closure_4;
                tmp2 = closure_4([]);
              }
              return;
            }
          }
          tmp24 = cResult[18];
        }
        const effect = noop.useEffect(tmp23, tmp24);
        if (cResult[19] !== result) {
          class K {
            constructor() {
              if (closure_2) {
                tmp = closure_4;
                tmp2 = closure_4([]);
              }
              return;
            }
          }
          cResult[19] = result;
          cResult[20] = tmp27;
        } else {
          class K {
            constructor() {
              if (closure_2) {
                tmp = closure_4;
                tmp2 = closure_4([]);
              }
              return;
            }
          }
        }
        if (cResult[21] === onChange) {
          class K {
            constructor() {
              if (closure_2) {
                tmp = closure_4;
                tmp2 = closure_4([]);
              }
              return;
            }
          }
          if (cResult[24] === tmp5) {
            class K {
              constructor() {
                if (closure_2) {
                  tmp = closure_4;
                  tmp2 = closure_4([]);
                }
                return;
              }
            }
          }
          const obj2 = { onLayout: tmp27, style: tmp14, children: tmp5 };
          const tmp32 = closure_1_20(v65535, obj2);
          class Z {
            constructor(arg0, arg1, arg2) {
              if (closure_0 != null) {
                tmp2 = arg1;
                tmp3 = arg2;
                tmpResult = tmp(arg0, arg1, arg2);
              }
              if (0 === arg0) {
                if (closure_1 != null) {
                  tmp5Result = tmp5();
                }
              }
              return;
            }
          }
          cResult[25] = tmp27;
          cResult[26] = tmp14;
          cResult[27] = tmp32;
        }
        class Z {
          constructor(arg0, arg1, arg2) {
            if (closure_0 != null) {
              tmp2 = arg1;
              tmp3 = arg2;
              tmpResult = tmp(arg0, arg1, arg2);
            }
            if (0 === arg0) {
              if (closure_1 != null) {
                tmp5Result = tmp5();
              }
            }
            return;
          }
        }
        cResult[21] = onChange;
        cResult[22] = onExpand;
        cResult[23] = Z;
        const tmp22 = _slicedToArray(noop.useState(cResult[15]), 2);
      }
    }
  }
  if (!isScreenReaderEnabled) {
    class K {
      constructor() {
        if (closure_2) {
          tmp = closure_4;
          tmp2 = closure_4([]);
        }
        return;
      }
    }
    cResult[12] = result;
    cResult[13] = isScreenReaderEnabled;
    cResult[14] = tmp11;
    cResult[15] = items1;
  }
  items1 = [];
  const tmpResult = useIsScreenReaderEnabled;
}) : ((windowDimensions, ref) => {
  ({ startHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  let maxDynamicContentSize = windowDimensions.maxDynamicContentSize;
  ({ wrapperStyle, scrollViewStyle, startExpanded, keyboardShouldPersistTaps, children } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.assign({ startHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, scrollViewStyle: 0, startExpanded: 0, onChange: 0, onExpand: 0, keyboardShouldPersistTaps: 0, children: 0, maxDynamicContentSize: 0 }));
  startHeight = undefined;
  closure_4 = undefined;
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (startHeight == null) {
    startHeight = height * closure_1_11;
  }
  if (!isScreenReaderEnabled) {
    if (!startExpanded) {
      let items = [startHeight];
    }
    [obj3.snapPoints, closure_4] = tmp7(items);
    const items1 = [isScreenReaderEnabled];
    const effect = noop.useEffect(() => {
      if (isScreenReaderEnabled) {
        closure_4([]);
      }
    }, items1);
    const items2 = [startHeight];
    const items3 = [onChange, onExpand];
    const callback = noop.useCallback((nativeEvent) => {
      if (nativeEvent.nativeEvent.layout.height < startHeight) {
        closure_4([]);
      }
    }, items2);
    const callback1 = noop.useCallback((arg0, arg1, arg2) => {
      if (onChange != null) {
        tmp(arg0, arg1, arg2);
      }
      if (0 === arg0) {
        if (onExpand != null) {
          tmp5();
        }
      }
    }, items3);
    const obj3 = {};
    const merged1 = Object.assign(merged);
    obj3.enableDynamicSizing = true;
    if (maxDynamicContentSize == null) {
      maxDynamicContentSize = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
    }
    obj3.maxDynamicContentSize = maxDynamicContentSize;
    obj3.ref = ref;
    obj3.onChange = callback1;
    const obj4 = { bounces: false, keyboardShouldPersistTaps, style: scrollViewStyle, children: null };
    const obj5 = { onLayout: callback, style: wrapperStyle, children };
    obj4.children = closure_1_20(v65535, obj5);
    obj3.children = closure_1_20(BottomSheetModal.BottomSheetScrollView, obj4);
    return closure_1_20(BottomSheetModalDefault, obj3);
  }
  items = [];
}));
ReactCompilerGating = fn(558);
let closure_24 = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((onExpand, ref) => {
  const cResult = c.c(42);
  if (cResult[0] !== onExpand) {
    ({ startHeight, contentHeight, maxHeight, hasEverExpanded, windowDimensions, wrapperStyle, onChange } = onExpand);
    closure_0 = onChange;
    onExpand = onExpand.onExpand;
    closure_1 = onExpand;
    ({ children, borderGradient, extraContent } = onExpand);
    const tmp18 = _objectWithoutProperties(onExpand, closure_4);
    cResult[0] = onExpand;
    cResult[1] = maxHeight;
    cResult[2] = borderGradient;
    cResult[3] = children;
    cResult[4] = contentHeight;
    cResult[5] = extraContent;
    cResult[6] = hasEverExpanded;
    cResult[7] = onChange;
    cResult[8] = onExpand;
    cResult[9] = tmp18;
    cResult[10] = startHeight;
    cResult[11] = windowDimensions;
    cResult[12] = wrapperStyle;
    let tmp15 = wrapperStyle;
    let tmp14 = windowDimensions;
    let result = startHeight;
    let tmp12 = tmp18;
    let tmp9 = hasEverExpanded;
    let tmp8 = extraContent;
    let tmp7 = contentHeight;
    let tmp6 = children;
    let tmp5 = borderGradient;
    let diff = maxHeight;
  } else {
    diff = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    closure_0 = cResult[7];
    closure_1 = cResult[8];
    tmp12 = cResult[9];
    result = cResult[10];
    tmp14 = cResult[11];
    tmp15 = cResult[12];
  }
  const height = tmp14.height;
  const tmp19 = closure_22(false);
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (result == null) {
    result = height * closure_1_11;
  }
  if (diff == null) {
    diff = tmp7;
  }
  if (diff == null) {
    diff = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  }
  if (cResult[13] === result) {
    if (cResult[14] === tmp9) {
      if (cResult[15] === isScreenReaderEnabled) {
        if (cResult[16] === diff) {
          let arr = cResult[17];
        }
        const diff1 = arr.length - 1;
        if (cResult[18] === diff1) {
          if (cResult[19] === onChange) {
            if (cResult[20] === tmp11) {
              let tmp27 = cResult[21];
            }
            if (cResult[22] !== diff) {
              const obj2 = { maxHeight: diff };
              cResult[22] = diff;
              class L {
                constructor(arg0, arg1, arg2) {
                  if (closure_0 != null) {
                    tmp2 = ref;
                    tmp3 = arg2;
                    tmpResult = tmp(onExpand, ref, arg2);
                  }
                  if (onExpand === closure_2) {
                    if (closure_1 != null) {
                      tmp5Result = tmp5();
                    }
                  }
                  return;
                }
              }
              let tmp28 = obj2;
            } else {
              tmp28 = cResult[23];
            }
            if (cResult[24] === tmp28) {
              if (cResult[25] === tmp15) {
                let tmp29 = cResult[26];
              }
              if (cResult[27] === tmp6) {
                if (cResult[28] === tmp29) {
                  let tmp30 = cResult[29];
                }
                if (cResult[30] === tmp5) {
                  if (cResult[31] === tmp30) {
                    if (cResult[32] === tmp19) {
                      let tmp34 = cResult[33];
                    }
                    if (cResult[34] === tmp7) {
                      if (cResult[35] === tmp8) {
                        if (cResult[36] === tmp27) {
                          if (cResult[37] === tmp12) {
                            if (cResult[38] === ref) {
                              if (cResult[39] === arr) {
                                if (cResult[40] === tmp34) {
                                  let tmp39 = cResult[41];
                                }
                                return tmp39;
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj3 = {};
                    class L {
                      constructor(arg0, arg1, arg2) {
                        if (closure_0 != null) {
                          tmp2 = ref;
                          tmp3 = arg2;
                          tmpResult = tmp(onExpand, ref, arg2);
                        }
                        if (onExpand === closure_2) {
                          if (closure_1 != null) {
                            tmp5Result = tmp5();
                          }
                        }
                        return;
                      }
                    }
                    const merged = Object.assign(tmp12);
                    obj3.ref = ref;
                    obj3.enableDynamicSizing = false;
                    obj3.contentHeight = tmp7;
                    obj3.snapPoints = arr;
                    obj3.onChange = tmp27;
                    const items = [tmp34, tmp8];
                    obj3.children = items;
                    const tmp44 = guild(BottomSheetModalDefault, obj3);
                    cResult[34] = tmp7;
                    cResult[35] = tmp8;
                    cResult[36] = tmp27;
                    cResult[37] = tmp12;
                    cResult[38] = ref;
                    cResult[39] = arr;
                    cResult[40] = tmp34;
                    cResult[41] = tmp44;
                    tmp39 = tmp44;
                    const tmp20Result = BottomSheetModalDefault;
                  }
                }
                let tmp35 = tmp30;
                if (null != tmp5) {
                  const obj4 = { style: tmp19.gradient, start: ConstantsIOS.VerticalGradient.START, end: null, colors: null, children: null };
                  class L {
                    constructor(arg0, arg1, arg2) {
                      if (closure_0 != null) {
                        tmp2 = ref;
                        tmp3 = arg2;
                        tmpResult = tmp(onExpand, ref, arg2);
                      }
                      if (onExpand === closure_2) {
                        if (closure_1 != null) {
                          tmp5Result = tmp5();
                        }
                      }
                      return;
                    }
                  }
                  obj4.colors = tmp5;
                  obj4.children = tmp30;
                  tmp35 = closure_1_20(LinearGradientDefault, obj4);
                  const tmp20Result2 = LinearGradientDefault;
                }
                class L {
                  constructor(arg0, arg1, arg2) {
                    if (closure_0 != null) {
                      tmp2 = ref;
                      tmp3 = arg2;
                      tmpResult = tmp(onExpand, ref, arg2);
                    }
                    if (onExpand === closure_2) {
                      if (closure_1 != null) {
                        tmp5Result = tmp5();
                      }
                    }
                    return;
                  }
                }
                cResult[31] = tmp30;
                cResult[32] = tmp19;
                cResult[33] = tmp35;
                tmp34 = tmp35;
              }
              const obj5 = { style: null, children: null };
              class L {
                constructor(arg0, arg1, arg2) {
                  if (closure_0 != null) {
                    tmp2 = ref;
                    tmp3 = arg2;
                    tmpResult = tmp(onExpand, ref, arg2);
                  }
                  if (onExpand === closure_2) {
                    if (closure_1 != null) {
                      tmp5Result = tmp5();
                    }
                  }
                  return;
                }
              }
              obj5.children = tmp6;
              const tmp33 = closure_1_20(v65535, obj5);
              cResult[27] = tmp6;
              cResult[28] = tmp29;
              cResult[29] = tmp33;
              tmp30 = tmp33;
            }
            const items1 = [tmp15, ];
            class L {
              constructor(arg0, arg1, arg2) {
                if (closure_0 != null) {
                  tmp2 = ref;
                  tmp3 = arg2;
                  tmpResult = tmp(onExpand, ref, arg2);
                }
                if (onExpand === closure_2) {
                  if (closure_1 != null) {
                    tmp5Result = tmp5();
                  }
                }
                return;
              }
            }
            cResult[24] = tmp28;
            cResult[25] = tmp15;
            cResult[26] = items1;
            tmp29 = items1;
          }
        }
        class L {
          constructor(arg0, arg1, arg2) {
            if (closure_0 != null) {
              tmp2 = ref;
              tmp3 = arg2;
              tmpResult = tmp(onExpand, ref, arg2);
            }
            if (onExpand === closure_2) {
              if (closure_1 != null) {
                tmp5Result = tmp5();
              }
            }
            return;
          }
        }
        cResult[18] = diff1;
        cResult[19] = onChange;
        cResult[20] = tmp11;
        cResult[21] = L;
        tmp27 = L;
      }
    }
  }
  let tmp23 = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp23 = !tmp9;
  }
  if (tmp23) {
    tmp23 = result < diff;
  }
  const items2 = [];
  if (tmp23) {
    items2.push(result);
  }
  items2.push(diff);
  cResult[13] = result;
  cResult[14] = tmp9;
  cResult[15] = isScreenReaderEnabled;
  cResult[16] = diff;
  cResult[17] = items2;
  arr = items2;
  const tmpResult = useIsScreenReaderEnabled;
}) : ((windowDimensions, ref) => {
  ({ startHeight, contentHeight, maxHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  const borderGradient = windowDimensions.borderGradient;
  ({ wrapperStyle, children, extraContent } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.assign({ startHeight: 0, contentHeight: 0, maxHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, onChange: 0, onExpand: 0, children: 0, borderGradient: 0, extraContent: 0 }));
  startHeight = undefined;
  maxHeight = undefined;
  c6 = undefined;
  const tmp2 = closure_22(false);
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (startHeight == null) {
    startHeight = height * closure_1_11;
  }
  if (maxHeight == null) {
    maxHeight = contentHeight;
  }
  if (maxHeight == null) {
    maxHeight = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  }
  let items = [hasEverExpanded, isScreenReaderEnabled, maxHeight, startHeight];
  const memo = noop.useMemo(() => {
    let tmp = !isScreenReaderEnabled;
    if (!isScreenReaderEnabled) {
      tmp = !hasEverExpanded;
    }
    if (tmp) {
      tmp = startHeight < maxHeight;
    }
    const items = [];
    if (tmp) {
      items.push(startHeight);
    }
    items.push(maxHeight);
    return items;
  }, items);
  const diff = memo.length - 1;
  c6 = diff;
  const items1 = [onChange, onExpand, diff];
  const obj2 = { style: null, children };
  const items2 = [wrapperStyle, { maxHeight }];
  obj2.style = items2;
  const callback = noop.useCallback((arg0, arg1, arg2) => {
    if (onChange != null) {
      tmp(arg0, arg1, arg2);
    }
    if (arg0 === c6) {
      if (onExpand != null) {
        tmp5();
      }
    }
  }, items1);
  const tmp11 = closure_1_20(v65535, obj2);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.ref = ref;
  obj3.enableDynamicSizing = false;
  obj3.contentHeight = contentHeight;
  obj3.snapPoints = memo;
  obj3.onChange = callback;
  let tmp10Result = tmp11;
  if (null != borderGradient) {
    const obj4 = { style: tmp2.gradient, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: borderGradient, children: tmp11 };
    tmp10Result = closure_1_20(LinearGradientDefault, obj4);
    const tmp3Result2 = LinearGradientDefault;
  }
  const items3 = [tmp10Result, extraContent];
  obj3.children = items3;
  return guild(BottomSheetModalDefault, obj3);
}));
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp8 = closure_1_20(v65535, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp8;
    let tmp2 = tmp8;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  const merged = Object.assign(arg0);
  return closure_1_20(v65535, {});
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  const tmp2 = closure_22(false);
  if (cResult[0] !== tmp2.backgroundOverlay) {
    const obj2 = { style: tmp2.backgroundOverlay };
    const tmp6 = closure_1_20(v65535, obj2);
    cResult[0] = tmp2.backgroundOverlay;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === arg0) {
    if (cResult[3] === tmp3) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj3 = {};
  const merged = Object.assign(arg0);
  obj3.children = tmp3;
  const tmp9 = closure_1_20(v65535, obj3);
  cResult[2] = arg0;
  cResult[3] = tmp3;
  cResult[4] = tmp9;
  tmp7 = tmp9;
}) : ((arg0) => {
  const obj = {};
  const merged = Object.assign(arg0);
  const tmp = closure_22(false);
  obj.children = closure_1_20(v65535, { style: closure_22(false).backgroundOverlay });
  return closure_1_20(v65535, obj);
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((width) => {
  const cResult = c.c(2);
  const result = Math.max(width.width - __initData, 0) / 2;
  if (cResult[0] !== result) {
    const obj2 = { marginHorizontal: result };
    cResult[0] = result;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : ((width) => {
  width = width.width;
  const items = [width];
  return noop.useMemo(() => ({ marginHorizontal: Math.max(width - __initData, 0) / 2 }), items);
});
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let sharedValue = arg0;
  if (arg0 == null) {
    sharedValue = obj.useSharedValue(-1);
  }
  return sharedValue;
}) : ((arg0) => {
  let sharedValue = arg0;
  if (arg0 == null) {
    sharedValue = obj.useSharedValue(-1);
  }
  return sharedValue;
});
const __initData = { code: "function BottomSheetNativeTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}" };
const __initData2 = { code: "function BottomSheetNativeTsx2(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}" };
const __initData3 = { code: "function BottomSheetNativeTsx3(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState===\"exiting\"){runOnJS(onLeave)();}}" };
const __initData4 = { code: "function BottomSheetNativeTsx4(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}" };
const __initData5 = { code: "function BottomSheetNativeTsx5(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}" };
const __initData6 = { code: "function BottomSheetNativeTsx6(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState==='exiting'){runOnJS(onLeave)();}}" };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheet.native.tsx");

export const BottomSheet = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((backdropChildren, arg1) => {
  const cResult = require("c").c(101);
  if (cResult[0] !== backdropChildren) {
    ({ scrollable, startHeight, maxHeight, containerHeight, startExpanded, backdropOpacity } = backdropChildren);
    importDefault = backdropOpacity;
    backdropChildren = backdropChildren.backdropChildren;
    _require = backdropChildren;
    ({ header, handleComponent, handleDisabled, dismissAccessibilityLabel } = backdropChildren);
    dependencyMap = dismissAccessibilityLabel;
    const footer = backdropChildren.footer;
    closure_3 = footer;
    const onExpand = backdropChildren.onExpand;
    closure_5 = onExpand;
    const onDismiss = backdropChildren.onDismiss;
    closure_4 = onDismiss;
    ({ keyboardShouldPersistTaps, children, backgroundStyles, contentStyles, bodyStyles, borderGradient, showGradient, extraContent, contentHeight } = backdropChildren);
    const tmp6 = close(backdropChildren, closure_5);
    cResult[0] = backdropChildren;
    cResult[1] = backdropChildren;
    cResult[2] = backdropOpacity;
    cResult[3] = backgroundStyles;
    cResult[4] = bodyStyles;
    cResult[5] = borderGradient;
    cResult[6] = children;
    cResult[7] = containerHeight;
    cResult[8] = contentHeight;
    cResult[9] = contentStyles;
    cResult[10] = dismissAccessibilityLabel;
    cResult[11] = extraContent;
    cResult[12] = footer;
    cResult[13] = handleComponent;
    cResult[14] = header;
    cResult[15] = keyboardShouldPersistTaps;
    cResult[16] = maxHeight;
    cResult[17] = onDismiss;
    cResult[18] = onExpand;
    cResult[19] = tmp6;
    cResult[20] = showGradient;
    cResult[21] = startHeight;
    cResult[22] = scrollable;
    cResult[23] = startExpanded;
    cResult[24] = handleDisabled;
    let tmp7 = handleDisabled;
    let tmp8 = startExpanded;
    let tmp9 = scrollable;
    let tmp12 = tmp6;
    let tmp17 = header;
    let tmp22 = contentStyles;
    let tmp25 = children;
    let tmp27 = bodyStyles;
    let tmp28 = backgroundStyles;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp28 = cResult[3];
    tmp27 = cResult[4];
    tmp25 = cResult[6];
    tmp22 = cResult[9];
    dependencyMap = cResult[10];
    closure_3 = cResult[12];
    tmp17 = cResult[14];
    closure_4 = cResult[17];
    closure_5 = cResult[18];
    tmp12 = cResult[19];
    tmp9 = cResult[22];
    tmp8 = cResult[23];
    tmp7 = cResult[24];
  }
  const context = onLeave.useContext(ActionSheetContextDefault);
  const transitionState = context.transitionState;
  close = context.close;
  onLeave = context.onLeave;
  let obj = require("c");
  const tmp32 = undefined !== tmp8 && tmp8;
  const tmp37 = closure_22(undefined !== tmp7 && tmp7, Math.max(useSafeAreaInsetsDefault().bottom, closure_19), undefined !== tmp9 && tmp9);
  onLeave.useRef(null);
  const tmp36 = useSafeAreaInsetsDefault();
  [r10118, closure_11] = transitionState(onLeave.useState(tmp32), 2);
  closure_12 = onLeave.useRef(false);
  const ref = onLeave.useRef(true);
  onLeave.useContext(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext).reducedMotion.enabled ? closure_14 : ref;
  if (cResult[25] === tmp14) {
    if (cResult[26] === registerDismissHandler) {
      let tmp41 = cResult[27];
      let tmp42 = cResult[28];
    }
    const layoutEffect = obj2.useLayoutEffect(tmp41, tmp42);
    const bottomSheetImperativeHandle = tmp(6648).useBottomSheetImperativeHandle(arg1, ref);
    if (cResult[29] === close) {
      if (cResult[30] === transitionState) {
        let tmp46 = cResult[31];
        let tmp47 = cResult[32];
      }
      const effect = obj2.useEffect(tmp46, tmp47);
      if (cResult[33] === tmp14) {
        if (cResult[34] === onLeave) {
          let tmp49 = cResult[35];
        }
        const unmountEffect = tmp(5590).useUnmountEffect(tmp49);
        if (cResult[36] !== close) {
          function ie(arg0, arg1, arg2, arg3, arg4) {
            if (arg4 !== BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
              if (-1 === arg1) {
                if (!closure_12.current) {
                  tmp2.current = true;
                  close();
                }
              }
              let current = arg1 > -1;
              if (current) {
                current = closure_12.current;
              }
              if (current) {
                const current2 = ref.current;
                if (current2 != null) {
                  current2.forceClose();
                }
              }
            }
          }
          cResult[36] = close;
          cResult[37] = ie;
        }
        if (cResult[38] !== tmp13) {
          class He {
            constructor() {
              tmp = closure_11(true);
              if (closure_5 != null) {
                tmp2 = closure_5();
              }
              return;
            }
          }
          cResult[38] = tmp13;
          cResult[39] = He;
        } else {
          class He {
            constructor() {
              tmp = closure_11(true);
              if (closure_5 != null) {
                tmp2 = closure_5();
              }
              return;
            }
          }
        }
        const tmp54 = closure_28(tmp12.animatedIndex);
        closure_14 = tmp54;
        const tmpResult4 = tmp(5590);
        function ke() {
          return closure_14.get() <= -1;
        }
        const obj3 = { animatedIndex: tmp54 };
        ke.__closure = obj3;
        ke.__workletHash = 4341912681188;
        ke.__initData = __initData;
        const derivedValue = tmp(4612).useDerivedValue(ke);
        const tmpResult5 = tmp(4612);
        class Oe {
          constructor() {
            return closure_15.get();
          }
        }
        const obj4 = { animatedIsVisuallyClosed: derivedValue };
        Oe.__closure = obj4;
        Oe.__workletHash = 6995719052506;
        Oe.__initData = __initData2;
        class De {
          constructor(arg0) {
            tmp = backdropChildren;
            if (backdropChildren) {
              tmp2 = transitionState;
              str = "exiting";
              tmp = "exiting" === transitionState;
            }
            if (tmp) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[17]);
              tmp5 = onLeave;
              tmp6 = obj.runOnJS(onLeave)();
            }
            return;
          }
        }
        const obj5 = { transitionState, runOnJS: tmp(4612).runOnJS, onLeave };
        De.__closure = obj5;
        De.__workletHash = 1921852093213;
        De.__initData = __initData3;
        const animatedReaction = tmp(4612).useAnimatedReaction(Oe, De);
        if (cResult[40] !== dismissAccessibilityLabel) {
          class He {
            constructor() {
              tmp = closure_11(true);
              if (closure_5 != null) {
                tmp2 = closure_5();
              }
              return;
            }
          }
          cResult[40] = dismissAccessibilityLabel;
          cResult[41] = tmp61;
        } else {
          class He {
            constructor() {
              tmp = closure_11(true);
              if (closure_5 != null) {
                tmp2 = closure_5();
              }
              return;
            }
          }
        }
        if (cResult[42] === tmp30) {
          class He {
            constructor() {
              tmp = closure_11(true);
              if (closure_5 != null) {
                tmp2 = closure_5();
              }
              return;
            }
          }
          if (cResult[45] !== tmp19) {
            class Me {
              constructor(arg0) {
                tmp = jsx;
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = {};
                merged = Object.assign(backdropChildren);
                tmpResult = closure_3;
                if (closure_3 == null) {
                  tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                }
                obj.children = tmpResult;
                return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
              }
            }
            cResult[45] = tmp19;
            cResult[46] = Me;
          } else {
            class Me {
              constructor(arg0) {
                tmp = jsx;
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = {};
                merged = Object.assign(backdropChildren);
                tmpResult = closure_3;
                if (closure_3 == null) {
                  tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                }
                obj.children = tmpResult;
                return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
            class Me {
              constructor(arg0) {
                tmp = jsx;
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = {};
                merged = Object.assign(backdropChildren);
                tmpResult = closure_3;
                if (closure_3 == null) {
                  tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                }
                obj.children = tmpResult;
                return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
              }
            }
            cResult[47] = tmp65;
          } else {
            class Me {
              constructor(arg0) {
                tmp = jsx;
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = {};
                merged = Object.assign(backdropChildren);
                tmpResult = closure_3;
                if (closure_3 == null) {
                  tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                }
                obj.children = tmpResult;
                return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
              }
            }
          }
          closure_27(tmp34(1484)(tmp65));
          tmp34(4732)();
          if (tmp12.backgroundComponent != null) {
            class Me {
              constructor(arg0) {
                tmp = jsx;
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = {};
                merged = Object.assign(backdropChildren);
                tmpResult = closure_3;
                if (closure_3 == null) {
                  tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                }
                obj.children = tmpResult;
                return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
              }
            }
            if (cResult[48] === tmp37.wrapper) {
              class Me {
                constructor(arg0) {
                  tmp = jsx;
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = {};
                  merged = Object.assign(backdropChildren);
                  tmpResult = closure_3;
                  if (closure_3 == null) {
                    tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                  }
                  obj.children = tmpResult;
                  return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
                }
              }
              if (cResult[51] === tmp28) {
                class Me {
                  constructor(arg0) {
                    tmp = jsx;
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = {};
                    merged = Object.assign(backdropChildren);
                    tmpResult = closure_3;
                    if (closure_3 == null) {
                      tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                    }
                    obj.children = tmpResult;
                    return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
                  }
                }
                if (tmp31) {
                  class Me {
                    constructor(arg0) {
                      tmp = jsx;
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      obj = {};
                      merged = Object.assign(backdropChildren);
                      tmpResult = closure_3;
                      if (closure_3 == null) {
                        tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                      }
                      obj.children = tmpResult;
                      return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
                    }
                  }
                }
                if (!tmp33) {
                  class Me {
                    constructor(arg0) {
                      tmp = jsx;
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      obj = {};
                      merged = Object.assign(backdropChildren);
                      tmpResult = closure_3;
                      if (closure_3 == null) {
                        tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                      }
                      obj.children = tmpResult;
                      return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
                    }
                  }
                }
                if (cResult[54] === tmp22) {
                  class Me {
                    constructor(arg0) {
                      tmp = jsx;
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      obj = {};
                      merged = Object.assign(backdropChildren);
                      tmpResult = closure_3;
                      if (closure_3 == null) {
                        tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                      }
                      obj.children = tmpResult;
                      return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
                    }
                  }
                  if (cResult[57] === tmp17) {
                    class Me {
                      constructor(arg0) {
                        tmp = jsx;
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = {};
                        merged = Object.assign(backdropChildren);
                        tmpResult = closure_3;
                        if (closure_3 == null) {
                          tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                        }
                        obj.children = tmpResult;
                        return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
                      }
                    }
                    if (cResult[60] === tmp27) {
                      class Me {
                        constructor(arg0) {
                          tmp = jsx;
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          obj = {};
                          merged = Object.assign(backdropChildren);
                          tmpResult = closure_3;
                          if (closure_3 == null) {
                            tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                          }
                          obj.children = tmpResult;
                          return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
                        }
                      }
                      if (cResult[63] === tmp25) {
                        class Me {
                          constructor(arg0) {
                            tmp = jsx;
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            obj = {};
                            merged = Object.assign(backdropChildren);
                            tmpResult = closure_3;
                            if (closure_3 == null) {
                              tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                            }
                            obj.children = tmpResult;
                            return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
                          }
                        }
                        if (cResult[66] === tmp75) {
                          class Me {
                            constructor(arg0) {
                              tmp = jsx;
                              tmp2 = closure_0;
                              tmp3 = closure_2;
                              obj = {};
                              merged = Object.assign(backdropChildren);
                              tmpResult = closure_3;
                              if (closure_3 == null) {
                                tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                              }
                              obj.children = tmpResult;
                              return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
                            }
                          }
                        }
                        const obj6 = { children: null };
                        const obj7 = { style: tmp75, children: null };
                        let items = [tmp76, tmp80];
                        obj7.children = items;
                        obj6.children = closure_21(ref, obj7);
                        const tmp88 = closure_20(tmp(6651).LayerScope, obj6);
                        cResult[66] = tmp75;
                        cResult[67] = tmp76;
                        class Oe {
                          constructor() {
                            return closure_15.get();
                          }
                        }
                        cResult[69] = tmp88;
                      }
                      const obj8 = { style: tmp79, children: tmp25 };
                      const tmp83 = closure_20(ref, obj8);
                      cResult[63] = tmp25;
                      cResult[64] = tmp79;
                      cResult[65] = tmp83;
                      tmp80 = tmp83;
                    }
                    let items1 = [tmp37.body, tmp27];
                    cResult[60] = tmp27;
                    cResult[61] = tmp37.body;
                    cResult[62] = items1;
                  }
                  let tmp77 = null != tmp17;
                  if (tmp77) {
                    class Me {
                      constructor(arg0) {
                        tmp = jsx;
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = {};
                        merged = Object.assign(backdropChildren);
                        tmpResult = closure_3;
                        if (closure_3 == null) {
                          tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                        }
                        obj.children = tmpResult;
                        return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
                      }
                    }
                    const obj9 = { style: tmp37.header, children: tmp17 };
                    tmp77 = closure_20(ref, obj9);
                  }
                  cResult[57] = tmp17;
                  cResult[58] = tmp37.header;
                  cResult[59] = tmp77;
                }
                const items2 = [tmp37.content, tmp22];
                cResult[54] = tmp22;
                cResult[55] = tmp37.content;
                cResult[56] = items2;
              }
              const items3 = [tmp37.background, tmp28];
              cResult[51] = tmp28;
              cResult[52] = tmp37.background;
              cResult[53] = items3;
            }
            const items4 = [tmp37.wrapper, tmp71];
            cResult[48] = tmp37.wrapper;
            cResult[49] = tmp71;
            cResult[50] = items4;
          } else {
            class Me {
              constructor(arg0) {
                tmp = jsx;
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = {};
                merged = Object.assign(backdropChildren);
                tmpResult = closure_3;
                if (closure_3 == null) {
                  tmpResult = tmp(tmp2(tmp3[24]).NavScrim, {});
                }
                obj.children = tmpResult;
                return tmp(closure_0(closure_2[14]).BottomSheetFooter, obj);
              }
            }
          }
          const tmp66 = tmp34(1484)(tmp65);
        }
        class Le {
          constructor(arg0) {
            obj = { style: null, children: null };
            items = [, ];
            items[0] = StyleSheet.absoluteFill;
            items[1] = backdropChildren.style;
            obj.style = items;
            obj1 = { animatedIndex: backdropChildren.animatedIndex, opacity: closure_1 };
            items1 = [, ];
            items1[0] = jsx(closure_0(closure_2[23]).BottomSheetBackdrop, obj1);
            items1[1] = closure_0;
            obj.children = items1;
            return jsxs(View, obj);
          }
        }
        cResult[42] = tmp30;
        cResult[43] = backdropOpacity;
        cResult[44] = Le;
        const tmpResult6 = tmp(4612);
      }
      function oe() {
        if (ref.current) {
          if (closure_4 != null) {
            tmp();
          }
        }
        onLeave();
      }
      cResult[33] = tmp14;
      cResult[34] = onLeave;
      cResult[35] = oe;
      tmp49 = oe;
    }
    function re() {
      let current = "exiting" !== transitionState;
      if (!current) {
        current = closure_12.current;
      }
      if (!current) {
        closure_13.current = false;
        const current2 = ref.current;
        if (current2 != null) {
          current2.forceClose();
        }
      }
      let current3 = "visible" === transitionState;
      if (current3) {
        current3 = closure_12.current;
      }
      if (current3) {
        close();
      }
    }
    const items5 = [transitionState, close];
    cResult[29] = close;
    cResult[30] = transitionState;
    cResult[31] = re;
    cResult[32] = items5;
    tmp47 = items5;
    tmp46 = re;
    let tmpResult = tmp(6648);
  }
  function te() {
    registerDismissHandler(closure_4);
  }
  const items6 = [tmp14, context.registerDismissHandler];
  cResult[25] = tmp14;
  cResult[26] = context.registerDismissHandler;
  cResult[27] = te;
  cResult[28] = items6;
  tmp42 = items6;
  tmp41 = te;
  const tmp39 = transitionState(onLeave.useState(tmp32), 2);
}) : ((scrollable, arg1) => {
  let flag = scrollable.scrollable;
  if (flag === undefined) {
    flag = false;
  }
  ({ startExpanded, startHeight, maxHeight, containerHeight } = scrollable);
  if (startExpanded === undefined) {
    startExpanded = false;
  }
  const backdropOpacity = scrollable.backdropOpacity;
  const backdropChildren = scrollable.backdropChildren;
  ({ header, handleComponent, handleDisabled } = scrollable);
  if (handleDisabled === undefined) {
    handleDisabled = false;
  }
  const dismissAccessibilityLabel = scrollable.dismissAccessibilityLabel;
  const footer = scrollable.footer;
  const onExpand = scrollable.onExpand;
  const onDismiss = scrollable.onDismiss;
  ({ borderGradient, showGradient } = scrollable);
  ({ keyboardShouldPersistTaps, children, backgroundStyles, contentStyles, bodyStyles, extraContent, contentHeight } = scrollable);
  let merged = Object.assign(scrollable, Object.assign({ scrollable: 0, startHeight: 0, maxHeight: 0, containerHeight: 0, startExpanded: 0, backdropOpacity: 0, backdropChildren: 0, header: 0, handleComponent: 0, handleDisabled: 0, dismissAccessibilityLabel: 0, footer: 0, onExpand: 0, onDismiss: 0, keyboardShouldPersistTaps: 0, children: 0, backgroundStyles: 0, contentStyles: 0, bodyStyles: 0, borderGradient: 0, showGradient: 0, extraContent: 0, contentHeight: 0 }));
  let onLeave;
  closure_14 = undefined;
  const context = onLeave.useContext(backdropChildren(dismissAccessibilityLabel[18]));
  const transitionState = context.transitionState;
  const close = context.close;
  onLeave = context.onLeave;
  const registerDismissHandler = context.registerDismissHandler;
  const rect = backdropChildren(dismissAccessibilityLabel[11])();
  const tmp5 = closure_22(handleDisabled, Math.max(rect.bottom, closure_19), flag);
  onLeave.useRef(null);
  const tmp7 = transitionState(onLeave.useState(startExpanded), 2);
  closure_11 = tmp7[1];
  closure_12 = onLeave.useRef(false);
  const ref = onLeave.useRef(true);
  let items = [onDismiss, registerDismissHandler];
  const layoutEffect = obj.useLayoutEffect(() => {
    registerDismissHandler(onDismiss);
  }, items);
  const tmp9 = onLeave.useContext(backdropOpacity(dismissAccessibilityLabel[19]).AccessibilityPreferencesContext).reducedMotion.enabled ? closure_14 : ref;
  const bottomSheetImperativeHandle = backdropOpacity(dismissAccessibilityLabel[20]).useBottomSheetImperativeHandle(arg1, ref);
  let items1 = [transitionState, close];
  const effect = obj.useEffect(() => {
    let current = "exiting" !== transitionState;
    if (!current) {
      current = closure_12.current;
    }
    if (!current) {
      closure_13.current = false;
      const current2 = ref.current;
      if (current2 != null) {
        current2.forceClose();
      }
    }
    let current3 = "visible" === transitionState;
    if (current3) {
      current3 = closure_12.current;
    }
    if (current3) {
      close();
    }
  }, items1);
  const tmp8Result = backdropOpacity(dismissAccessibilityLabel[20]);
  const unmountEffect = backdropOpacity(dismissAccessibilityLabel[21]).useUnmountEffect(() => {
    if (ref.current) {
      if (onDismiss != null) {
        tmp();
      }
    }
    onLeave();
  });
  const items2 = [close];
  const items3 = [onExpand];
  const callback = obj.useCallback((arg0, arg1, arg2, arg3, arg4) => {
    if (arg4 !== BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
      if (-1 === arg1) {
        if (!closure_12.current) {
          tmp2.current = true;
          close();
        }
      }
      let current = arg1 > -1;
      if (current) {
        current = closure_12.current;
      }
      if (current) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.forceClose();
        }
      }
    }
  }, items2);
  const callback1 = obj.useCallback(() => {
    closure_11(true);
    if (onExpand != null) {
      onExpand();
    }
  }, items3);
  const tmp16 = closure_28(merged.animatedIndex);
  closure_14 = tmp16;
  const tmp8Result5 = backdropOpacity(dismissAccessibilityLabel[21]);
  function pe() {
    return closure_14.get() <= -1;
  }
  pe.__closure = { animatedIndex: tmp16 };
  pe.__workletHash = 11856440255681;
  pe.__initData = __initData4;
  const derivedValue = backdropOpacity(dismissAccessibilityLabel[17]).useDerivedValue(pe);
  const tmp8Result6 = backdropOpacity(dismissAccessibilityLabel[17]);
  class Se {
    constructor() {
      return closure_15.get();
    }
  }
  Se.__closure = { animatedIsVisuallyClosed: derivedValue };
  Se.__workletHash = 888700167933;
  Se.__initData = __initData5;
  function me(arg0) {
    let tmp = arg0;
    if (arg0) {
      tmp = "exiting" === transitionState;
    }
    if (tmp) {
      ReanimatedRexport.runOnJS(onLeave)();
    }
  }
  const tmp8Result7 = backdropOpacity(dismissAccessibilityLabel[17]);
  me.__closure = { transitionState, runOnJS: backdropOpacity(dismissAccessibilityLabel[17]).runOnJS, onLeave };
  me.__workletHash = 9237161324088;
  me.__initData = __initData6;
  const animatedReaction = tmp8Result7.useAnimatedReaction(Se, me);
  const items4 = [dismissAccessibilityLabel];
  const items5 = [backdropOpacity, backdropChildren];
  const callback2 = obj.useCallback(() => closure_2_20(ActionSheetHeaderBar.ActionSheetHeaderBar, {
    accessibilityLabel: dismissAccessibilityLabel,
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.close();
      }
    }
  }), items4);
  const items6 = [footer];
  const callback3 = obj.useCallback((animatedIndex) => {
    const obj = { style: null, children: null };
    const items = [options.absoluteFill, animatedIndex.style];
    obj.style = items;
    const items1 = [closure_2_20(Sheet_BottomSheetBackdrop.BottomSheetBackdrop, { animatedIndex: animatedIndex.animatedIndex, opacity: backdropOpacity }), backdropChildren];
    obj.children = items1;
    return guild(v65535, obj);
  }, items5);
  const callback4 = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    let tmpResult = footer;
    if (footer == null) {
      tmpResult = closure_2_20(NavScrim.NavScrim, {});
    }
    obj.children = tmpResult;
    return closure_2_20(BottomSheetModal.BottomSheetFooter, obj);
  }, items6);
  const tmp22 = backdropChildren(dismissAccessibilityLabel[25])({ ignoreKeyboard: true });
  const obj2 = { transitionState, runOnJS: backdropOpacity(dismissAccessibilityLabel[17]).runOnJS, onLeave };
  const tmp25 = backdropChildren(dismissAccessibilityLabel[26])();
  const backgroundComponent = merged.backgroundComponent;
  if (backgroundComponent != null) {
    const obj3 = { ref, accessible: null, accessibilityRole: "none", accessibilityLabel: "", startHeight: null, contentHeight: null, maxHeight: null, containerHeight: null, startExpanded: null, hasEverExpanded: null, windowDimensions: null, wrapperStyle: null, onExpand: null, enablePanDownToClose: true, containerStyle: null, backgroundStyle: null, topInset: null, keyboardBehavior: null, keyboardBlurBehavior: "restore", keyboardShouldPersistTaps: null, animationConfigs: null, overrideReduceMotion: null, handleIndicatorStyle: null, handleComponent: null, backdropComponent: null, backgroundComponent: null, renderFooter: null, animatedIndex: null, onAnimate: null, onClose: null, borderGradient: null, extraContent: null, children: null };
    const tmp8Result8 = tmp8(tmp3[8]);
    const isIOSResult = tmp8(tmp3[8]).isIOS();
    obj3.accessible = !tmp8(tmp3[8]).isIOS();
    obj3.startHeight = startHeight;
    obj3.contentHeight = contentHeight;
    obj3.maxHeight = maxHeight;
    obj3.containerHeight = containerHeight;
    obj3.startExpanded = startExpanded;
    obj3.hasEverExpanded = tmp7[0];
    obj3.windowDimensions = tmp22;
    const items7 = [tmp5.wrapper, null != borderGradient && tmp5.wrapperWithBorder];
    obj3.wrapperStyle = items7;
    obj3.onExpand = callback1;
    obj3.containerStyle = tmp23;
    const items8 = [tmp5.background, backgroundStyles];
    obj3.backgroundStyle = items8;
    obj3.topInset = rect.top;
    let str = "interactive";
    if (flag) {
      str = "extend";
    }
    obj3.keyboardBehavior = str;
    obj3.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
    obj3.animationConfigs = tmp9;
    obj3.overrideReduceMotion = tmp8(tmp3[17]).ReduceMotion.Never;
    obj3.handleIndicatorStyle = tmp5.handleIndicator;
    let tmp30 = null;
    if (!handleDisabled) {
      if (handleComponent == null) {
        handleComponent = callback2;
      }
      tmp30 = handleComponent;
    }
    obj3.handleComponent = tmp30;
    obj3.backdropComponent = callback3;
    obj3.backgroundComponent = backgroundComponent;
    obj3.renderFooter = callback4;
    obj3.animatedIndex = tmp16;
    obj3.onAnimate = callback;
    obj3.onClose = onLeave;
    obj3.borderGradient = borderGradient;
    obj3.extraContent = extraContent;
    const obj4 = { style: null, children: null };
    const items9 = [tmp5.content, contentStyles];
    obj4.style = items9;
    let tmp27Result = null != header;
    if (tmp27Result) {
      const obj5 = { style: tmp5.header, children: header };
      tmp27Result = closure_20(tmp32, obj5);
    }
    const obj6 = { children: null };
    const items10 = [tmp27Result, ];
    const obj7 = { style: null, children: null };
    const items11 = [tmp5.body, bodyStyles];
    obj7.style = items11;
    obj7.children = children;
    items10[1] = closure_20(ref, obj7);
    obj4.children = items10;
    obj6.children = closure_21(ref, obj4);
    obj3.children = closure_20(tmp8(tmp3[27]).LayerScope, obj6);
    const tmp27Result3 = closure_20(tmp24, obj3);
    let tmp27Result4 = tmp27Result3;
    if (showGradient) {
      let tmp36 = tmp25;
      if (tmp25 == null) {
        tmp36 = null;
      }
      const obj8 = { gradient: tmp36, children: tmp27Result3 };
      tmp27Result4 = closure_20(tmp8(tmp3[28]).ThemeContextProvider, obj8);
    }
    return tmp27Result4;
  }
  tmp23 = closure_27(tmp22);
  tmp24 = flag ? closure_24 : closure_23;
}));