// discord_app/design/components/Sheet/native/BottomSheet.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import useIsScreenReaderEnabled from "../../../../modules/a11y/native/useIsScreenReaderEnabled.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05391_LinearGradient.js";
import NavigatorConstants from "../../Navigator/native/NavigatorConstants.native.tsx";
import BottomSheetModal from "../../../../../_runtime/06306_BottomSheetModal.js";
import NavScrim from "../../Navigator/native/NavScrim.android.tsx";
import ActionSheetContextDefault from "../../../../modules/action_sheet/native/ActionSheetContext.tsx";
import ActionSheetHeaderBar from "ActionSheetHeaderBar.native.tsx";
import Sheet_BottomSheetBackdrop from "BottomSheetBackdrop.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const BottomSheetModalDefault = BottomSheetModal;

require = fn;
let closure_3 = [
  "startHeight",
  "hasEverExpanded",
  "windowDimensions",
  "wrapperStyle",
  "scrollViewStyle",
  "startExpanded",
  "onChange",
  "onExpand",
  "keyboardShouldPersistTaps",
  "children",
  "maxDynamicContentSize",
  "ref",
];
let closure_4 = [
  "startHeight",
  "contentHeight",
  "maxHeight",
  "hasEverExpanded",
  "windowDimensions",
  "wrapperStyle",
  "onChange",
  "onExpand",
  "children",
  "borderGradient",
  "extraContent",
  "ref",
];
let closure_5 = [
  "scrollable",
  "startHeight",
  "maxHeight",
  "containerHeight",
  "startExpanded",
  "backdropOpacity",
  "backdropChildren",
  "header",
  "handleComponent",
  "handleDisabled",
  "dismissAccessibilityLabel",
  "footer",
  "onExpand",
  "onDismiss",
  "keyboardShouldPersistTaps",
  "children",
  "backgroundStyles",
  "contentStyles",
  "bodyStyles",
  "borderGradient",
  "showGradient",
  "extraContent",
  "contentHeight",
  "ref",
];
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_9, View: c10, Platform } = get_ActivityIndicator);
const ActionSheetConstants = fn(6840);
({
  ACTION_SHEET_START_HEIGHT_RATIO: closure_11,
  ACTION_SHEET_MAX_WIDTH: closure_12,
  ACTION_SHEET_SPRING_CONFIG: map1,
  ACTION_SHEET_SPRING_CONFIG_REDUCED_MOTION: closure_14,
  ACTION_SHEET_GRADIENT_BORDER_WIDTH: closure_15,
  ACTION_SHEET_GRADIENT_BORDER_RADIUS: closure_16,
  ACTION_SHEET_BORDER_RADIUS: closure_17,
  ACTION_SHEET_INNER_BORDER_RADIUS: closure_18,
  ACTION_SHEET_MINIMUM_BOTTOM_PADDING: closure_19,
} = ActionSheetConstants);
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
const createStyles = fn(5092);
let closure_22 = createStyles.createStyles((arg0) => {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const obj = {
    background: {
      overflow: "hidden",
      borderTopLeftRadius: borderTopRightRadius,
      borderTopRightRadius,
      backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
    },
    wrapper: { overflow: "hidden", flex: 1 },
    wrapperWithBorder: null,
    content: null,
    gradient: null,
    handleIndicator: null,
    backgroundOverlay: null,
    header: null,
    body: null,
  };
  const obj2 = {
    overflow: "hidden",
    borderTopLeftRadius: borderTopRightRadius,
    borderTopRightRadius,
    backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  };
  obj.wrapperWithBorder = {
    overflow: "hidden",
    marginTop: marginHorizontal,
    marginHorizontal,
    borderTopLeftRadius: borderTopRightRadius,
    borderTopRightRadius,
    backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  };
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
  const obj3 = {
    overflow: "hidden",
    marginTop: marginHorizontal,
    marginHorizontal,
    borderTopLeftRadius: borderTopRightRadius,
    borderTopRightRadius,
    backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  };
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
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContentSizeBottomSheetInner(arg0) {
      const cResult = c.c(40);
      if (cResult[0] !== arg0) {
        ({
          startHeight,
          hasEverExpanded,
          windowDimensions,
          wrapperStyle,
          scrollViewStyle,
          startExpanded,
          onChange,
          onExpand,
          keyboardShouldPersistTaps,
          children,
          maxDynamicContentSize,
          ref,
        } = arg0);
        const tmp18 = _objectWithoutProperties(arg0, closure_3);
        closure_0 = onChange;
        closure_1 = onExpand;
        cResult[0] = arg0;
        cResult[1] = maxDynamicContentSize;
        cResult[2] = children;
        cResult[3] = keyboardShouldPersistTaps;
        cResult[4] = onChange;
        cResult[5] = onExpand;
        cResult[6] = tmp18;
        cResult[7] = ref;
        cResult[8] = scrollViewStyle;
        cResult[9] = startExpanded;
        cResult[10] = startHeight;
        cResult[11] = windowDimensions;
        cResult[12] = wrapperStyle;
        let tmp15 = wrapperStyle;
        let tmp14 = windowDimensions;
        let result = startHeight;
        let tmp12 = startExpanded;
        let tmp5 = children;
        let diff = maxDynamicContentSize;
      } else {
        diff = cResult[1];
        tmp5 = cResult[2];
        closure_0 = cResult[4];
        closure_1 = cResult[5];
        tmp12 = cResult[9];
        result = cResult[10];
        tmp14 = cResult[11];
        tmp15 = cResult[12];
      }
      const height = tmp14.height;
      const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
      if (result == null) {
        result = height * closure_1_11;
      }
      closure_3 = result;
      if (diff == null) {
        diff = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
      }
      if (cResult[13] === result) {
        if (cResult[14] === isScreenReaderEnabled) {
          if (cResult[15] === tmp12) {
            [r10082, closure_4] = noop.useState(cResult[16]);
            if (cResult[17] !== isScreenReaderEnabled) {
              class W {
                constructor() {
                  if (closure_2) {
                    tmp = closure_4;
                    tmp2 = closure_4([]);
                  }
                  return;
                }
              }
              const items = [isScreenReaderEnabled];
              cResult[17] = isScreenReaderEnabled;
              cResult[18] = W;
              cResult[19] = items;
              let tmp25 = items;
            } else {
              class W {
                constructor() {
                  if (closure_2) {
                    tmp = closure_4;
                    tmp2 = closure_4([]);
                  }
                  return;
                }
              }
              tmp25 = cResult[19];
            }
            const effect = noop.useEffect(W, tmp25);
            if (cResult[20] !== result) {
              class Y {
                constructor(arg0) {
                  if (arg0.nativeEvent.layout.height < closure_3) {
                    tmp = closure_4;
                    tmp2 = closure_4([]);
                  }
                  return;
                }
              }
              cResult[20] = result;
              cResult[21] = Y;
            } else {
              class Y {
                constructor(arg0) {
                  if (arg0.nativeEvent.layout.height < closure_3) {
                    tmp = closure_4;
                    tmp2 = closure_4([]);
                  }
                  return;
                }
              }
            }
            if (cResult[22] === onChange) {
              class Y {
                constructor(arg0) {
                  if (arg0.nativeEvent.layout.height < closure_3) {
                    tmp = closure_4;
                    tmp2 = closure_4([]);
                  }
                  return;
                }
              }
              if (cResult[25] === tmp5) {
                class Y {
                  constructor(arg0) {
                    if (arg0.nativeEvent.layout.height < closure_3) {
                      tmp = closure_4;
                      tmp2 = closure_4([]);
                    }
                    return;
                  }
                }
              }
              const obj2 = { onLayout: Y, style: tmp15, children: tmp5 };
              const tmp32 = constants2(collapsed, obj2);
              cResult[25] = tmp5;
              cResult[26] = Y;
              cResult[27] = tmp15;
              cResult[28] = tmp32;
            }
            const fn = function $(arg0, arg1, arg2) {
              if (closure_0 != null) {
                tmp(arg0, arg1, arg2);
              }
              if (0 === arg0) {
                if (closure_1 != null) {
                  tmp5();
                }
              }
            };
            cResult[22] = onChange;
            cResult[23] = onExpand;
            cResult[24] = fn;
            const tmp23 = _slicedToArray(noop.useState(cResult[16]), 2);
          }
        }
      }
      if (!isScreenReaderEnabled) {
        class Y {
          constructor(arg0) {
            if (arg0.nativeEvent.layout.height < closure_3) {
              tmp = closure_4;
              tmp2 = closure_4([]);
            }
            return;
          }
        }
        cResult[13] = result;
        cResult[14] = isScreenReaderEnabled;
        cResult[15] = tmp12;
        cResult[16] = items1;
      }
      items1 = [];
      const tmpResult = useIsScreenReaderEnabled;
    }
  : function ContentSizeBottomSheetInner(windowDimensions) {
      ({ startHeight, hasEverExpanded } = windowDimensions);
      const height = windowDimensions.windowDimensions.height;
      const onChange = windowDimensions.onChange;
      const onExpand = windowDimensions.onExpand;
      let maxDynamicContentSize = windowDimensions.maxDynamicContentSize;
      ({ wrapperStyle, scrollViewStyle, startExpanded, keyboardShouldPersistTaps, children, ref } = windowDimensions);
      const merged = Object.assign(
        windowDimensions,
        Object.assign({
          startHeight: 0,
          hasEverExpanded: 0,
          windowDimensions: 0,
          wrapperStyle: 0,
          scrollViewStyle: 0,
          startExpanded: 0,
          onChange: 0,
          onExpand: 0,
          keyboardShouldPersistTaps: 0,
          children: 0,
          maxDynamicContentSize: 0,
          ref: 0,
        }),
      );
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
        obj4.children = constants2(collapsed, obj5);
        obj3.children = constants2(BottomSheetModal.BottomSheetScrollView, obj4);
        return constants2(BottomSheetModalDefault, obj3);
      }
      items = [];
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ScrollableBottomSheetInner(onExpand) {
      const cResult = c.c(43);
      if (cResult[0] !== onExpand) {
        ({ startHeight, contentHeight, maxHeight, hasEverExpanded, windowDimensions, wrapperStyle, onChange } =
          onExpand);
        closure_0 = onChange;
        onExpand = onExpand.onExpand;
        closure_1 = onExpand;
        ({ children, borderGradient, extraContent, ref } = onExpand);
        const tmp19 = _objectWithoutProperties(onExpand, closure_4);
        cResult[0] = onExpand;
        cResult[1] = maxHeight;
        cResult[2] = borderGradient;
        cResult[3] = children;
        cResult[4] = contentHeight;
        cResult[5] = extraContent;
        cResult[6] = hasEverExpanded;
        cResult[7] = onChange;
        cResult[8] = onExpand;
        cResult[9] = tmp19;
        cResult[10] = ref;
        cResult[11] = startHeight;
        cResult[12] = windowDimensions;
        cResult[13] = wrapperStyle;
        let tmp16 = wrapperStyle;
        let tmp15 = windowDimensions;
        let result = startHeight;
        let tmp13 = ref;
        let tmp12 = tmp19;
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
        tmp13 = cResult[10];
        result = cResult[11];
        tmp15 = cResult[12];
        tmp16 = cResult[13];
      }
      const height = tmp15.height;
      const tmp20 = closure_22(false);
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
      if (cResult[14] === result) {
        if (cResult[15] === tmp9) {
          if (cResult[16] === isScreenReaderEnabled) {
            if (cResult[17] === diff) {
              let arr = cResult[18];
            }
            const diff1 = arr.length - 1;
            if (cResult[19] === diff1) {
              if (cResult[20] === onChange) {
                if (cResult[21] === tmp11) {
                  let tmp28 = cResult[22];
                }
                if (cResult[23] !== diff) {
                  const obj2 = { maxHeight: diff };
                  cResult[23] = diff;
                  class L {
                    constructor(arg0, arg1, arg2) {
                      if (closure_0 != null) {
                        tmp2 = arg1;
                        tmp3 = arg2;
                        tmpResult = tmp(onExpand, arg1, arg2);
                      }
                      if (onExpand === closure_2) {
                        if (closure_1 != null) {
                          tmp5Result = tmp5();
                        }
                      }
                      return;
                    }
                  }
                  let tmp29 = obj2;
                } else {
                  tmp29 = cResult[24];
                }
                if (cResult[25] === tmp29) {
                  if (cResult[26] === tmp16) {
                    let tmp30 = cResult[27];
                  }
                  if (cResult[28] === tmp6) {
                    if (cResult[29] === tmp30) {
                      let tmp31 = cResult[30];
                    }
                    if (cResult[31] === tmp5) {
                      if (cResult[32] === tmp31) {
                        if (cResult[33] === tmp20) {
                          let tmp35 = cResult[34];
                        }
                        if (cResult[35] === tmp7) {
                          if (cResult[36] === tmp8) {
                            if (cResult[37] === tmp28) {
                              if (cResult[38] === tmp12) {
                                if (cResult[39] === tmp13) {
                                  if (cResult[40] === arr) {
                                    if (cResult[41] === tmp35) {
                                      let tmp39 = cResult[42];
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
                              tmp2 = arg1;
                              tmp3 = arg2;
                              tmpResult = tmp(onExpand, arg1, arg2);
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
                        obj3.ref = tmp13;
                        obj3.enableDynamicSizing = false;
                        obj3.contentHeight = tmp7;
                        obj3.snapPoints = arr;
                        obj3.onChange = tmp28;
                        const items = [tmp35, tmp8];
                        obj3.children = items;
                        const tmp44 = guild(BottomSheetModalDefault, obj3);
                        cResult[35] = tmp7;
                        cResult[36] = tmp8;
                        cResult[37] = tmp28;
                        cResult[38] = tmp12;
                        cResult[39] = tmp13;
                        cResult[40] = arr;
                        cResult[41] = tmp35;
                        cResult[42] = tmp44;
                        tmp39 = tmp44;
                        const tmp21Result = BottomSheetModalDefault;
                      }
                    }
                    let tmp36 = tmp31;
                    if (null != tmp5) {
                      const obj4 = {
                        style: tmp20.gradient,
                        start: ConstantsIOS.VerticalGradient.START,
                        end: null,
                        colors: null,
                        children: null,
                      };
                      class L {
                        constructor(arg0, arg1, arg2) {
                          if (closure_0 != null) {
                            tmp2 = arg1;
                            tmp3 = arg2;
                            tmpResult = tmp(onExpand, arg1, arg2);
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
                      obj4.children = tmp31;
                      tmp36 = constants2(LinearGradientDefault, obj4);
                      const tmp21Result2 = LinearGradientDefault;
                    }
                    class L {
                      constructor(arg0, arg1, arg2) {
                        if (closure_0 != null) {
                          tmp2 = arg1;
                          tmp3 = arg2;
                          tmpResult = tmp(onExpand, arg1, arg2);
                        }
                        if (onExpand === closure_2) {
                          if (closure_1 != null) {
                            tmp5Result = tmp5();
                          }
                        }
                        return;
                      }
                    }
                    cResult[32] = tmp31;
                    cResult[33] = tmp20;
                    cResult[34] = tmp36;
                    tmp35 = tmp36;
                  }
                  const obj5 = { style: null, children: null };
                  class L {
                    constructor(arg0, arg1, arg2) {
                      if (closure_0 != null) {
                        tmp2 = arg1;
                        tmp3 = arg2;
                        tmpResult = tmp(onExpand, arg1, arg2);
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
                  const tmp34 = constants2(collapsed, obj5);
                  cResult[28] = tmp6;
                  cResult[29] = tmp30;
                  cResult[30] = tmp34;
                  tmp31 = tmp34;
                }
                const items1 = [tmp16];
                class L {
                  constructor(arg0, arg1, arg2) {
                    if (closure_0 != null) {
                      tmp2 = arg1;
                      tmp3 = arg2;
                      tmpResult = tmp(onExpand, arg1, arg2);
                    }
                    if (onExpand === closure_2) {
                      if (closure_1 != null) {
                        tmp5Result = tmp5();
                      }
                    }
                    return;
                  }
                }
                cResult[25] = tmp29;
                cResult[26] = tmp16;
                cResult[27] = items1;
                tmp30 = items1;
              }
            }
            class L {
              constructor(arg0, arg1, arg2) {
                if (closure_0 != null) {
                  tmp2 = arg1;
                  tmp3 = arg2;
                  tmpResult = tmp(onExpand, arg1, arg2);
                }
                if (onExpand === closure_2) {
                  if (closure_1 != null) {
                    tmp5Result = tmp5();
                  }
                }
                return;
              }
            }
            cResult[19] = diff1;
            cResult[20] = onChange;
            cResult[21] = tmp11;
            cResult[22] = L;
            tmp28 = L;
          }
        }
      }
      let tmp24 = !isScreenReaderEnabled;
      if (!isScreenReaderEnabled) {
        tmp24 = !tmp9;
      }
      if (tmp24) {
        tmp24 = result < diff;
      }
      const items2 = [];
      if (tmp24) {
        items2.push(result);
      }
      items2.push(diff);
      cResult[14] = result;
      cResult[15] = tmp9;
      cResult[16] = isScreenReaderEnabled;
      cResult[17] = diff;
      cResult[18] = items2;
      arr = items2;
      const tmpResult = useIsScreenReaderEnabled;
    }
  : function ScrollableBottomSheetInner(windowDimensions) {
      ({ startHeight, contentHeight, maxHeight, hasEverExpanded } = windowDimensions);
      const height = windowDimensions.windowDimensions.height;
      const onChange = windowDimensions.onChange;
      const onExpand = windowDimensions.onExpand;
      const borderGradient = windowDimensions.borderGradient;
      ({ wrapperStyle, children, extraContent, ref } = windowDimensions);
      const merged = Object.assign(
        windowDimensions,
        Object.assign({
          startHeight: 0,
          contentHeight: 0,
          maxHeight: 0,
          hasEverExpanded: 0,
          windowDimensions: 0,
          wrapperStyle: 0,
          onChange: 0,
          onExpand: 0,
          children: 0,
          borderGradient: 0,
          extraContent: 0,
          ref: 0,
        }),
      );
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
      const tmp11 = constants2(collapsed, obj2);
      const obj3 = {};
      const merged1 = Object.assign(merged);
      obj3.ref = ref;
      obj3.enableDynamicSizing = false;
      obj3.contentHeight = contentHeight;
      obj3.snapPoints = memo;
      obj3.onChange = callback;
      let tmp10Result = tmp11;
      if (null != borderGradient) {
        const obj4 = {
          style: tmp2.gradient,
          start: ConstantsIOS.VerticalGradient.START,
          end: ConstantsIOS.VerticalGradient.END,
          colors: borderGradient,
          children: tmp11,
        };
        tmp10Result = constants2(LinearGradientDefault, obj4);
        const tmp3Result2 = LinearGradientDefault;
      }
      const items3 = [tmp10Result, extraContent];
      obj3.children = items3;
      return guild(BottomSheetModalDefault, obj3);
    };
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Background(arg0) {
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        const obj2 = {};
        const merged = Object.assign(arg0);
        const tmp8 = constants2(collapsed, obj2);
        cResult[0] = arg0;
        cResult[1] = tmp8;
        let tmp2 = tmp8;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : function Background(arg0) {
      const merged = Object.assign(arg0);
      return constants2(collapsed, {});
    };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GradientBackground(arg0) {
      const cResult = c.c(5);
      const tmp2 = closure_22(false);
      if (cResult[0] !== tmp2.backgroundOverlay) {
        const obj2 = { style: tmp2.backgroundOverlay };
        const tmp6 = constants2(collapsed, obj2);
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
      const tmp9 = constants2(collapsed, obj3);
      cResult[2] = arg0;
      cResult[3] = tmp3;
      cResult[4] = tmp9;
      tmp7 = tmp9;
    }
  : function GradientBackground(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      const tmp = closure_22(false);
      obj.children = constants2(collapsed, { style: closure_22(false).backgroundOverlay });
      return constants2(collapsed, obj);
    };
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConstrainedContainerStyle(width) {
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
    }
  : function useConstrainedContainerStyle(width) {
      width = width.width;
      const items = [width];
      return noop.useMemo(() => ({ marginHorizontal: Math.max(width - __initData, 0) / 2 }), items);
    };
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAnimatedIndex(arg0) {
      let sharedValue = arg0;
      if (arg0 == null) {
        sharedValue = obj.useSharedValue(-1);
      }
      return sharedValue;
    }
  : function useAnimatedIndex(arg0) {
      let sharedValue = arg0;
      if (arg0 == null) {
        sharedValue = obj.useSharedValue(-1);
      }
      return sharedValue;
    };
const __initData = {
  code: "function BottomSheetNativeTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}",
};
const __initData2 = {
  code: "function BottomSheetNativeTsx2(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}",
};
const __initData3 = {
  code: 'function BottomSheetNativeTsx3(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState==="exiting"){runOnJS(onLeave)();}}',
};
const __initData4 = {
  code: "function BottomSheetNativeTsx4(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}",
};
const __initData5 = {
  code: "function BottomSheetNativeTsx5(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}",
};
const __initData6 = {
  code: "function BottomSheetNativeTsx6(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState==='exiting'){runOnJS(onLeave)();}}",
};
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheet.native.tsx");

export const BottomSheet = ReactCompilerGating.isReactCompilerEnabled()
  ? function BottomSheet(backdropChildren) {
      const cResult = require("c").c(102);
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
        ({
          keyboardShouldPersistTaps,
          children,
          backgroundStyles,
          contentStyles,
          bodyStyles,
          borderGradient,
          showGradient,
          extraContent,
          contentHeight,
          ref,
        } = backdropChildren);
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
        cResult[20] = ref;
        cResult[21] = showGradient;
        cResult[22] = startHeight;
        cResult[23] = scrollable;
        cResult[24] = startExpanded;
        cResult[25] = handleDisabled;
        let tmp7 = handleDisabled;
        let tmp8 = startExpanded;
        let tmp9 = scrollable;
        let tmp12 = ref;
        let tmp13 = tmp6;
        let tmp18 = header;
        let tmp23 = contentStyles;
        let tmp26 = children;
        let tmp28 = bodyStyles;
        let tmp29 = backgroundStyles;
      } else {
        _require = cResult[1];
        importDefault = cResult[2];
        tmp29 = cResult[3];
        tmp28 = cResult[4];
        tmp26 = cResult[6];
        tmp23 = cResult[9];
        dependencyMap = cResult[10];
        closure_3 = cResult[12];
        tmp18 = cResult[14];
        closure_4 = cResult[17];
        closure_5 = cResult[18];
        tmp13 = cResult[19];
        tmp12 = cResult[20];
        tmp9 = cResult[23];
        tmp8 = cResult[24];
        tmp7 = cResult[25];
      }
      const context = onLeave.useContext(ActionSheetContextDefault);
      const transitionState = context.transitionState;
      close = context.close;
      onLeave = context.onLeave;
      let obj = require("c");
      const tmp33 = undefined !== tmp8 && tmp8;
      const tmp38 = closure_22(
        undefined !== tmp7 && tmp7,
        Math.max(useSafeAreaInsetsDefault().bottom, closure_19),
        undefined !== tmp9 && tmp9,
      );
      const ref1 = onLeave.useRef(null);
      const tmp37 = useSafeAreaInsetsDefault();
      [r10121, closure_11] = transitionState(onLeave.useState(tmp33), 2);
      closure_12 = onLeave.useRef(false);
      ref = onLeave.useRef(true);
      onLeave.useContext(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext).reducedMotion
        .enabled
        ? closure_14
        : ref;
      if (cResult[26] === tmp15) {
        if (cResult[27] === registerDismissHandler) {
          let tmp42 = cResult[28];
          let tmp43 = cResult[29];
        }
        const layoutEffect = obj2.useLayoutEffect(tmp42, tmp43);
        const bottomSheetImperativeHandle = tmp(6842).useBottomSheetImperativeHandle(tmp12, ref1);
        if (cResult[30] === close) {
          if (cResult[31] === transitionState) {
            let tmp46 = cResult[32];
            let tmp47 = cResult[33];
          }
          const effect = obj2.useEffect(tmp46, tmp47);
          if (cResult[34] === tmp15) {
            if (cResult[35] === onLeave) {
              let tmp49 = cResult[36];
            }
            const unmountEffect = tmp(5396).useUnmountEffect(tmp49);
            if (cResult[37] !== close) {
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
                    const current2 = ref1.current;
                    if (current2 != null) {
                      current2.forceClose();
                    }
                  }
                }
              }
              cResult[37] = close;
              cResult[38] = ie;
            }
            if (cResult[39] !== tmp14) {
              class He {
                constructor() {
                  tmp = closure_11(true);
                  if (closure_5 != null) {
                    tmp2 = closure_5();
                  }
                  return;
                }
              }
              cResult[39] = tmp14;
              cResult[40] = He;
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
            const tmp54 = closure_28(tmp13.animatedIndex);
            closure_14 = tmp54;
            const tmpResult4 = tmp(5396);
            function ke() {
              return closure_14.get() <= -1;
            }
            const obj3 = { animatedIndex: tmp54 };
            ke.__closure = obj3;
            ke.__workletHash = 4341912681188;
            ke.__initData = __initData;
            const derivedValue = tmp(4850).useDerivedValue(ke);
            const tmpResult5 = tmp(4850);
            class Be {
              constructor() {
                return closure_15.get();
              }
            }
            const obj4 = { animatedIsVisuallyClosed: derivedValue };
            Be.__closure = obj4;
            Be.__workletHash = 6995719052506;
            Be.__initData = __initData2;
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
            const obj5 = { transitionState, runOnJS: tmp(4850).runOnJS, onLeave };
            De.__closure = obj5;
            De.__workletHash = 1921852093213;
            De.__initData = __initData3;
            const animatedReaction = tmp(4850).useAnimatedReaction(Be, De);
            if (cResult[41] !== dismissAccessibilityLabel) {
              class Oe {
                constructor() {
                  obj = {
                    accessibilityLabel: closure_2,
                    onPress() {
                      const current = ref.current;
                      if (current != null) {
                        current.close();
                      }
                    },
                  };
                  return jsx(closure_0(closure_2[22]).ActionSheetHeaderBar, obj);
                }
              }
              cResult[41] = dismissAccessibilityLabel;
              cResult[42] = Oe;
            } else {
              class Oe {
                constructor() {
                  obj = {
                    accessibilityLabel: closure_2,
                    onPress() {
                      const current = ref.current;
                      if (current != null) {
                        current.close();
                      }
                    },
                  };
                  return jsx(closure_0(closure_2[22]).ActionSheetHeaderBar, obj);
                }
              }
            }
            if (cResult[43] === tmp31) {
              class Oe {
                constructor() {
                  obj = {
                    accessibilityLabel: closure_2,
                    onPress() {
                      const current = ref.current;
                      if (current != null) {
                        current.close();
                      }
                    },
                  };
                  return jsx(closure_0(closure_2[22]).ActionSheetHeaderBar, obj);
                }
              }
              if (cResult[46] !== tmp20) {
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
                cResult[46] = tmp20;
                cResult[47] = Me;
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
              if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
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
                cResult[48] = tmp64;
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
              closure_27(tmp35(1497)(tmp64));
              tmp35(4972)();
              if (tmp13.backgroundComponent != null) {
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
                if (cResult[49] === tmp38.wrapper) {
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
                  if (cResult[52] === tmp29) {
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
                    if (tmp32) {
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
                    if (!tmp34) {
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
                    if (cResult[55] === tmp23) {
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
                      if (cResult[58] === tmp18) {
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
                        if (cResult[61] === tmp28) {
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
                          if (cResult[64] === tmp26) {
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
                            if (cResult[67] === tmp74) {
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
                            const obj7 = { style: tmp74, children: null };
                            let items = [tmp75, tmp79];
                            obj7.children = items;
                            obj6.children = closure_21(ref1, obj7);
                            const tmp87 = closure_20(tmp(6845).LayerScope, obj6);
                            cResult[67] = tmp74;
                            cResult[68] = tmp75;
                            class Be {
                              constructor() {
                                return closure_15.get();
                              }
                            }
                            cResult[70] = tmp87;
                          }
                          const obj8 = { style: tmp78, children: tmp26 };
                          const tmp82 = closure_20(ref1, obj8);
                          cResult[64] = tmp26;
                          cResult[65] = tmp78;
                          cResult[66] = tmp82;
                          tmp79 = tmp82;
                        }
                        let items1 = [tmp38.body, tmp28];
                        cResult[61] = tmp28;
                        cResult[62] = tmp38.body;
                        cResult[63] = items1;
                      }
                      let tmp76 = null != tmp18;
                      if (tmp76) {
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
                        const obj9 = { style: tmp38.header, children: tmp18 };
                        tmp76 = closure_20(ref1, obj9);
                      }
                      cResult[58] = tmp18;
                      cResult[59] = tmp38.header;
                      cResult[60] = tmp76;
                    }
                    const items2 = [tmp38.content, tmp23];
                    cResult[55] = tmp23;
                    cResult[56] = tmp38.content;
                    cResult[57] = items2;
                  }
                  const items3 = [tmp38.background, tmp29];
                  cResult[52] = tmp29;
                  cResult[53] = tmp38.background;
                  cResult[54] = items3;
                }
                const items4 = [tmp38.wrapper, tmp70];
                cResult[49] = tmp38.wrapper;
                cResult[50] = tmp70;
                cResult[51] = items4;
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
              const tmp65 = tmp35(1497)(tmp64);
            }
            class Le {
              constructor(arg0) {
                obj = { style: null, children: null };
                items = [,];
                items[0] = StyleSheet.absoluteFill;
                items[1] = backdropChildren.style;
                obj.style = items;
                obj1 = { animatedIndex: backdropChildren.animatedIndex, opacity: closure_1 };
                items1 = [,];
                items1[0] = jsx(closure_0(closure_2[23]).BottomSheetBackdrop, obj1);
                items1[1] = closure_0;
                obj.children = items1;
                return jsxs(View, obj);
              }
            }
            cResult[43] = tmp31;
            cResult[44] = backdropOpacity;
            cResult[45] = Le;
            const tmpResult6 = tmp(4850);
          }
          function oe() {
            if (ref.current) {
              if (closure_4 != null) {
                tmp();
              }
            }
            onLeave();
          }
          cResult[34] = tmp15;
          cResult[35] = onLeave;
          cResult[36] = oe;
          tmp49 = oe;
        }
        function re() {
          let current = "exiting" !== transitionState;
          if (!current) {
            current = closure_12.current;
          }
          if (!current) {
            closure_13.current = false;
            const current2 = ref1.current;
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
        cResult[30] = close;
        cResult[31] = transitionState;
        cResult[32] = re;
        cResult[33] = items5;
        tmp47 = items5;
        tmp46 = re;
        let tmpResult = tmp(6842);
      }
      function te() {
        registerDismissHandler(closure_4);
      }
      const items6 = [tmp15, context.registerDismissHandler];
      cResult[26] = tmp15;
      cResult[27] = context.registerDismissHandler;
      cResult[28] = te;
      cResult[29] = items6;
      tmp43 = items6;
      tmp42 = te;
      const tmp40 = transitionState(onLeave.useState(tmp33), 2);
    }
  : function BottomSheet(scrollable) {
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
      ({
        keyboardShouldPersistTaps,
        children,
        backgroundStyles,
        contentStyles,
        bodyStyles,
        extraContent,
        contentHeight,
        ref,
      } = scrollable);
      let merged = Object.assign(
        scrollable,
        Object.assign({
          scrollable: 0,
          startHeight: 0,
          maxHeight: 0,
          containerHeight: 0,
          startExpanded: 0,
          backdropOpacity: 0,
          backdropChildren: 0,
          header: 0,
          handleComponent: 0,
          handleDisabled: 0,
          dismissAccessibilityLabel: 0,
          footer: 0,
          onExpand: 0,
          onDismiss: 0,
          keyboardShouldPersistTaps: 0,
          children: 0,
          backgroundStyles: 0,
          contentStyles: 0,
          bodyStyles: 0,
          borderGradient: 0,
          showGradient: 0,
          extraContent: 0,
          contentHeight: 0,
          ref: 0,
        }),
      );
      let onLeave;
      closure_14 = undefined;
      const context = onLeave.useContext(backdropChildren(dismissAccessibilityLabel[18]));
      const transitionState = context.transitionState;
      const close = context.close;
      onLeave = context.onLeave;
      const registerDismissHandler = context.registerDismissHandler;
      const rect = backdropChildren(dismissAccessibilityLabel[11])();
      const tmp5 = closure_22(handleDisabled, Math.max(rect.bottom, closure_19), flag);
      const ref1 = onLeave.useRef(null);
      const tmp7 = transitionState(onLeave.useState(startExpanded), 2);
      closure_11 = tmp7[1];
      closure_12 = onLeave.useRef(false);
      ref = onLeave.useRef(true);
      let items = [onDismiss, registerDismissHandler];
      const layoutEffect = obj.useLayoutEffect(() => {
        registerDismissHandler(onDismiss);
      }, items);
      const tmp9 = onLeave.useContext(backdropOpacity(dismissAccessibilityLabel[19]).AccessibilityPreferencesContext)
        .reducedMotion.enabled
        ? closure_14
        : ref;
      const bottomSheetImperativeHandle = backdropOpacity(dismissAccessibilityLabel[20]).useBottomSheetImperativeHandle(
        ref,
        ref1,
      );
      let items1 = [transitionState, close];
      const effect = obj.useEffect(() => {
        let current = "exiting" !== transitionState;
        if (!current) {
          current = closure_12.current;
        }
        if (!current) {
          closure_13.current = false;
          const current2 = ref1.current;
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
            const current2 = ref1.current;
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
      const tmp8Result4 = backdropOpacity(dismissAccessibilityLabel[21]);
      function me() {
        return closure_14.get() <= -1;
      }
      me.__closure = { animatedIndex: tmp16 };
      me.__workletHash = 11856440255681;
      me.__initData = __initData4;
      const derivedValue = backdropOpacity(dismissAccessibilityLabel[17]).useDerivedValue(me);
      const tmp8Result5 = backdropOpacity(dismissAccessibilityLabel[17]);
      function pe() {
        return derivedValue.get();
      }
      pe.__closure = { animatedIsVisuallyClosed: derivedValue };
      pe.__workletHash = 888700167933;
      pe.__initData = __initData5;
      class Se {
        constructor(arg0) {
          tmp = scrollable;
          if (scrollable) {
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
      const tmp8Result6 = backdropOpacity(dismissAccessibilityLabel[17]);
      Se.__closure = { transitionState, runOnJS: backdropOpacity(dismissAccessibilityLabel[17]).runOnJS, onLeave };
      Se.__workletHash = 9237161324088;
      Se.__initData = __initData6;
      const animatedReaction = tmp8Result6.useAnimatedReaction(pe, Se);
      const items4 = [dismissAccessibilityLabel];
      const items5 = [backdropOpacity, backdropChildren];
      const callback2 = obj.useCallback(
        () =>
          constants2(ActionSheetHeaderBar.ActionSheetHeaderBar, {
            accessibilityLabel: dismissAccessibilityLabel,
            onPress() {
              const current = ref.current;
              if (current != null) {
                current.close();
              }
            },
          }),
        items4,
      );
      const items6 = [footer];
      const callback3 = obj.useCallback((animatedIndex) => {
        const obj = { style: null, children: null };
        const items = [options.absoluteFill, animatedIndex.style];
        obj.style = items;
        const items1 = [
          constants2(Sheet_BottomSheetBackdrop.BottomSheetBackdrop, {
            animatedIndex: animatedIndex.animatedIndex,
            opacity: backdropOpacity,
          }),
          backdropChildren,
        ];
        obj.children = items1;
        return guild(collapsed, obj);
      }, items5);
      const callback4 = obj.useCallback((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        let tmpResult = footer;
        if (footer == null) {
          tmpResult = constants2(NavScrim.NavScrim, {});
        }
        obj.children = tmpResult;
        return constants2(BottomSheetModal.BottomSheetFooter, obj);
      }, items6);
      const tmp22 = backdropChildren(dismissAccessibilityLabel[25])({ ignoreKeyboard: true });
      const obj2 = { transitionState, runOnJS: backdropOpacity(dismissAccessibilityLabel[17]).runOnJS, onLeave };
      const tmp25 = backdropChildren(dismissAccessibilityLabel[26])();
      const backgroundComponent = merged.backgroundComponent;
      if (backgroundComponent != null) {
        const obj3 = {
          ref: ref1,
          accessible: false,
          accessibilityRole: "none",
          accessibilityLabel: "",
          startHeight,
          contentHeight,
          maxHeight,
          containerHeight,
          startExpanded,
          hasEverExpanded: tmp7[0],
          windowDimensions: tmp22,
          wrapperStyle: null,
          onExpand: null,
          enablePanDownToClose: true,
          containerStyle: null,
          backgroundStyle: null,
          topInset: null,
          keyboardBehavior: null,
          keyboardBlurBehavior: "restore",
          keyboardShouldPersistTaps: null,
          animationConfigs: null,
          overrideReduceMotion: null,
          handleIndicatorStyle: null,
          handleComponent: null,
          backdropComponent: null,
          backgroundComponent: null,
          renderFooter: null,
          animatedIndex: null,
          onAnimate: null,
          onClose: null,
          borderGradient: null,
          extraContent: null,
          children: null,
        };
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
        let tmp28 = null;
        if (!handleDisabled) {
          if (handleComponent == null) {
            handleComponent = callback2;
          }
          tmp28 = handleComponent;
        }
        obj3.handleComponent = tmp28;
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
          tmp27Result = closure_20(tmp30, obj5);
        }
        const obj6 = { children: null };
        const items10 = [tmp27Result];
        const obj7 = { style: null, children: null };
        const items11 = [tmp5.body, bodyStyles];
        obj7.style = items11;
        obj7.children = children;
        items10[1] = closure_20(ref1, obj7);
        obj4.children = items10;
        obj6.children = closure_21(ref1, obj4);
        obj3.children = closure_20(tmp8(tmp3[27]).LayerScope, obj6);
        const tmp27Result3 = closure_20(tmp24, obj3);
        let tmp27Result4 = tmp27Result3;
        if (showGradient) {
          let tmp34 = tmp25;
          if (tmp25 == null) {
            tmp34 = null;
          }
          const obj8 = { gradient: tmp34, children: tmp27Result3 };
          tmp27Result4 = closure_20(tmp8(tmp3[28]).ThemeContextProvider, obj8);
        }
        return tmp27Result4;
      }
      tmp23 = closure_27(tmp22);
      tmp24 = flag ? closure_24 : closure_23;
    };
