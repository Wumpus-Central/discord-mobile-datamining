// discord_app/modules/video_calls/native/components/CallBarAction.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ChannelCallStore from "../ChannelCallStore.tsx";
import CircleWithCutoutUtils from "../../../voice_panel/native/shared/CircleWithCutoutUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const CircleWithCutoutUtilsDefault = CircleWithCutoutUtils;

let c9;
let closure_12;
let metroImportAll;
let obj2;
let obj3;
let rect;
let unpackModuleId;
let closure_3 = ["isActive", "disableTint", "showBadge", "isSmallSize", "backgroundColor", "tintColor"];
let closure_4 = ["isSmallSize"];
let closure_5 = ["notifications", "isMentioned"];
({ Image: metroImportAll, View: c9 } = react_native);
const resetFocusTimer = ChannelCallStore.resetFocusTimer;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
let c14 = 45;
let closure_15 = Object.freeze({ buttonRadius: 28, badgeRadius: 6, cutoutInset: 3 });
const frozen = Object.freeze({ buttonRadius: 24, badgeRadius: 4, cutoutInset: 2 });
let closure_17 = 24 + 2 * frozen.buttonRadius * 5 + 96;
let createStyles = createStyles_mod;
let obj = {
  buttonContainer: { position: "absolute" },
  iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center" },
  badge: { backgroundColor: "white", position: "absolute" },
  notificationArea: rect,
  notificationText: { lineHeight: 16 },
  notificationAreaMentioned: obj2,
  notificationAreaUnread: obj3,
};
rect = {
  position: "absolute",
  top: -4,
  right: -4,
  height: 24,
  minWidth: 24,
  paddingHorizontal: 4,
  borderRadius: 12,
  borderWidth: 4,
  borderColor: nativeDefault.unsafe_rawColors.PRIMARY_760,
  alignItems: "center",
  justifyContent: "center",
};
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
let closure_18 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let IconComponent;
      let accessibilityLabel;
      let accessibilityState;
      let appearsDisabled;
      let backgroundColor;
      let children;
      let imageStyle;
      let isSmallSize;
      let items;
      let items1;
      let lottieComponent;
      let lottieComponentColor;
      let onPress;
      let showBadge;
      let source;
      let tmp15;
      let tmpResult;
      let tmpResult2;
      const obj = onPress(576);
      const cResult = obj.c(52);
      ({ appearsDisabled, backgroundColor, imageStyle, onPress } = arg0);
      ({
        accessibilityLabel,
        accessibilityState,
        source,
        showBadge,
        isSmallSize,
        children,
        lottieComponent,
        lottieComponentColor,
        IconComponent,
      } = arg0);
      const tmp4 = undefined !== appearsDisabled && appearsDisabled;
      const tmp7 = closure_18();
      let num = 12;
      if (undefined !== isSmallSize && isSmallSize) {
        num = 12;
        if (tmp9 < closure_17) {
          num = 6;
        }
      }
      const tmp11 = undefined !== isSmallSize && isSmallSize ? frozen : closure_15;
      const result = 2 * tmp11.buttonRadius;
      const result1 = 2 * tmp11.badgeRadius;
      const sum = tmp11.badgeRadius + tmp11.cutoutInset;
      if (cResult[0] !== onPress) {
        const fn = function o() {
          resetFocusTimer();
          onPress();
        };
        cResult[0] = onPress;
        cResult[1] = fn;
        tmp15 = fn;
      } else {
        tmp15 = cResult[1];
      }
      if (cResult[2] === tmp11.buttonRadius) {
        if (cResult[3] === result) {
          let tmp16;
          if (cResult[4] === num) {
            tmp16 = cResult[5];
          }
          if (cResult[6] === tmp11.buttonRadius) {
            let tmp17;
            let tmp18;
            if (cResult[7] === result) {
              tmp17 = cResult[8];
            }
            let num7 = 1;
            if (tmp4) {
              num7 = 0.25;
            }
            if (cResult[9] !== num7) {
              const obj2 = { opacity: num7 };
              cResult[9] = num7;
              cResult[10] = obj2;
              tmp18 = obj2;
            } else {
              tmp18 = cResult[10];
            }
            if (cResult[11] === tmp7.buttonContainer) {
              if (cResult[12] === tmp17) {
                let tmp19;
                if (cResult[13] === tmp18) {
                  tmp19 = cResult[14];
                }
                if (null == backgroundColor) {
                  backgroundColor = closure_13;
                }
                if (cResult[15] === tmp11.buttonRadius) {
                  if (cResult[16] === sum) {
                    if (cResult[17] === (undefined !== showBadge && showBadge)) {
                      let tmp21;
                      let tmp25;
                      if (cResult[18] === backgroundColor) {
                        tmp21 = cResult[19];
                      }
                      if (cResult[20] !== result) {
                        size = { width: result, height: result };
                        cResult[20] = result;
                        cResult[21] = size;
                        tmp25 = size;
                      } else {
                        tmp25 = cResult[21];
                      }
                      if (cResult[22] === tmp7.iconContainer) {
                        let tmp26;
                        let cloneElementResult;
                        if (cResult[23] === tmp25) {
                          tmp26 = cResult[24];
                        }
                        if (cResult[25] === IconComponent) {
                          if (cResult[26] === imageStyle) {
                            if (cResult[27] === lottieComponent) {
                              if (cResult[28] === lottieComponentColor) {
                                let tmp27;
                                if (cResult[29] === source) {
                                  tmp27 = cResult[30];
                                }
                                if (cResult[31] === tmp26) {
                                  let tmp33;
                                  if (cResult[32] === tmp27) {
                                    tmp33 = cResult[33];
                                  }
                                  if (cResult[34] === tmp11.badgeRadius) {
                                    if (cResult[35] === tmp11.buttonRadius) {
                                      if (cResult[36] === result1) {
                                        if (cResult[37] === (undefined !== showBadge && showBadge)) {
                                          let tmp37;
                                          if (cResult[38] === tmp7.badge) {
                                            tmp37 = cResult[39];
                                          }
                                          if (cResult[40] === children) {
                                            if (cResult[41] === tmp21) {
                                              if (cResult[42] === tmp33) {
                                                if (cResult[43] === tmp37) {
                                                  let tmp42;
                                                  if (cResult[44] === tmp19) {
                                                    tmp42 = cResult[45];
                                                  }
                                                  if (cResult[46] === accessibilityLabel) {
                                                    if (cResult[47] === accessibilityState) {
                                                      if (cResult[48] === tmp42) {
                                                        if (cResult[49] === tmp15) {
                                                          let tmp46;
                                                          if (cResult[50] === tmp16) {
                                                            tmp46 = cResult[51];
                                                          }
                                                          return tmp46;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const obj3 = {
                                                    accessibilityLabel,
                                                    accessibilityRole: "button",
                                                    accessibilityState,
                                                    onPress: tmp15,
                                                    disabled: false,
                                                    style: tmp16,
                                                    children: tmp42,
                                                  };
                                                  const tmp48 = closure_11(onPress(5916).PressableOpacity, obj3);
                                                  cResult[46] = accessibilityLabel;
                                                  cResult[47] = accessibilityState;
                                                  cResult[48] = tmp42;
                                                  cResult[49] = tmp15;
                                                  cResult[50] = tmp16;
                                                  cResult[51] = tmp48;
                                                  tmp46 = tmp48;
                                                }
                                              }
                                            }
                                          }
                                          const obj4 = { style: tmp19, children: items };
                                          items = [tmp21, tmp33, tmp37, children];
                                          const tmp45 = closure_12(closure_9, obj4);
                                          cResult[40] = children;
                                          cResult[41] = tmp21;
                                          cResult[42] = tmp33;
                                          cResult[43] = tmp37;
                                          cResult[44] = tmp19;
                                          cResult[45] = tmp45;
                                          tmp42 = tmp45;
                                        }
                                      }
                                    }
                                  }
                                  let tmp38 = null;
                                  if (undefined !== showBadge && showBadge) {
                                    const obj5 = { style: items1 };
                                    items1 = [tmp7.badge];
                                    const size1 = {
                                      width: result1,
                                      height: result1,
                                      borderRadius: tmp11.badgeRadius,
                                      top: tmpResult.getBadgeTop(
                                        tmp11.badgeRadius,
                                        tmp11.buttonRadius,
                                        cutoutPositionInDegrees,
                                      ),
                                      left: tmpResult2.getBadgeLeft(
                                        tmp11.badgeRadius,
                                        tmp11.buttonRadius,
                                        cutoutPositionInDegrees,
                                      ),
                                    };
                                    tmpResult = onPress(9114);
                                    items1[1] = size1;
                                    tmpResult2 = onPress(9114);
                                    tmp38 = closure_11(closure_9, obj5);
                                  }
                                  cResult[34] = tmp11.badgeRadius;
                                  cResult[35] = tmp11.buttonRadius;
                                  cResult[36] = result1;
                                  cResult[37] = undefined !== showBadge && showBadge;
                                  cResult[38] = tmp7.badge;
                                  cResult[39] = tmp38;
                                  tmp37 = tmp38;
                                }
                                const obj6 = { style: tmp26, children: tmp27 };
                                const tmp36 = closure_11(closure_9, obj6);
                                cResult[31] = tmp26;
                                cResult[32] = tmp27;
                                cResult[33] = tmp36;
                                tmp33 = tmp36;
                              }
                            }
                          }
                        }
                        if (null != lottieComponent) {
                          const obj7 = { color: lottieComponentColor };
                          cloneElementResult = react.cloneElement(lottieComponent, obj7);
                        } else if (null != IconComponent) {
                          const obj8 = { style: imageStyle };
                          cloneElementResult = closure_11(IconComponent, obj8);
                        } else {
                          const obj9 = { source, style: imageStyle };
                          cloneElementResult = closure_11(closure_8, obj9);
                        }
                        cResult[25] = IconComponent;
                        cResult[26] = imageStyle;
                        cResult[27] = lottieComponent;
                        cResult[28] = lottieComponentColor;
                        cResult[29] = source;
                        cResult[30] = cloneElementResult;
                        tmp27 = cloneElementResult;
                      }
                      const items2 = [tmp7.iconContainer, tmp25];
                      cResult[22] = tmp7.iconContainer;
                      cResult[23] = tmp25;
                      cResult[24] = items2;
                      tmp26 = items2;
                    }
                  }
                }
                const obj10 = {
                  circleRadius: tmp11.buttonRadius,
                  cutoutRadius: sum,
                  enableCutout: undefined !== showBadge && showBadge,
                  cutoutPositionInDegrees,
                  circleFillColor: backgroundColor,
                };
                const tmp24 = closure_11(CircleWithCutoutUtilsDefault, obj10);
                cResult[15] = tmp11.buttonRadius;
                cResult[16] = sum;
                cResult[17] = undefined !== showBadge && showBadge;
                cResult[18] = backgroundColor;
                cResult[19] = tmp24;
                tmp21 = tmp24;
              }
            }
            const items3 = [tmp7.buttonContainer, tmp17, tmp18];
            cResult[11] = tmp7.buttonContainer;
            cResult[12] = tmp17;
            cResult[13] = tmp18;
            cResult[14] = items3;
            tmp19 = items3;
          }
          const size2 = { width: result, height: result, borderRadius: tmp11.buttonRadius };
          cResult[6] = tmp11.buttonRadius;
          cResult[7] = result;
          cResult[8] = size2;
          tmp17 = size2;
        }
      }
      const size3 = { width: result, height: result, borderRadius: tmp11.buttonRadius, marginHorizontal: num };
      cResult[2] = tmp11.buttonRadius;
      cResult[3] = result;
      cResult[4] = num;
      cResult[5] = size3;
      tmp16 = size3;
    }
  : (appearsDisabled) => {
      let IconComponent;
      let accessibilityLabel;
      let accessibilityState;
      let backgroundColor;
      let children;
      let cloneElementResult;
      let imageStyle;
      let items1;
      let items2;
      let items3;
      let lottieComponent;
      let lottieComponentColor;
      let obj2;
      let showBadge;
      let source;
      let tmp11Result;
      let tmp11Result2;
      let flag = appearsDisabled.appearsDisabled;
      if (flag === undefined) {
        flag = false;
      }
      ({
        backgroundColor,
        imageStyle,
        onPress: require,
        showBadge,
        accessibilityLabel,
        accessibilityState,
        source,
      } = appearsDisabled);
      if (showBadge === undefined) {
        showBadge = false;
      }
      let flag2 = appearsDisabled.isSmallSize;
      if (flag2 === undefined) {
        flag2 = false;
      }
      ({ lottieComponent, IconComponent } = appearsDisabled);
      ({ children, lottieComponentColor } = appearsDisabled);
      const tmp = closure_18();
      let num = 12;
      if (flag2) {
        num = 12;
        if (tmp4 < closure_17) {
          num = 6;
        }
      }
      const tmp6 = flag2 ? frozen : closure_15;
      const result = 2 * tmp6.buttonRadius;
      const result1 = 2 * tmp6.badgeRadius;
      const sum = tmp6.badgeRadius + tmp6.cutoutInset;
      const items = [tmp.buttonContainer, { width: result, height: result, borderRadius: tmp6.buttonRadius }];
      let num2 = 1;
      const obj = {
        accessibilityLabel,
        accessibilityRole: "button",
        accessibilityState,
        onPress() {
          resetFocusTimer();
          require();
        },
        disabled: false,
        style: { width: result, height: result, borderRadius: tmp6.buttonRadius, marginHorizontal: num },
        children: closure_12(closure_9, obj2),
      };
      const PressableOpacity = Pressables.PressableOpacity;
      if (flag) {
        num2 = 0.25;
      }
      obj2 = { style: items, children: items1 };
      items[2] = { opacity: num2 };
      const obj3 = {
        circleRadius: tmp6.buttonRadius,
        cutoutRadius: sum,
        enableCutout: showBadge,
        cutoutPositionInDegrees,
        circleFillColor: backgroundColor,
      };
      const tmp2Result = CircleWithCutoutUtilsDefault;
      if (null == backgroundColor) {
        backgroundColor = closure_13;
      }
      items1 = [closure_11(tmp2Result, obj3), , ,];
      const obj4 = { style: items2, children: cloneElementResult };
      items2 = [tmp.iconContainer, { width: result, height: result }];
      if (null != lottieComponent) {
        const obj5 = { color: lottieComponentColor };
        cloneElementResult = react.cloneElement(lottieComponent, obj5);
      } else if (null != IconComponent) {
        const obj6 = { style: imageStyle };
        cloneElementResult = closure_11(IconComponent, obj6);
      } else {
        const obj7 = { source, style: imageStyle };
        cloneElementResult = closure_11(closure_8, obj7);
      }
      items1[1] = closure_11(closure_9, obj4);
      let tmp10Result = null;
      if (showBadge) {
        const obj8 = { style: items3 };
        items3 = [tmp.badge];
        size = {
          width: result1,
          height: result1,
          borderRadius: tmp6.badgeRadius,
          top: tmp11Result.getBadgeTop(tmp6.badgeRadius, tmp6.buttonRadius, cutoutPositionInDegrees),
          left: tmp11Result2.getBadgeLeft(tmp6.badgeRadius, tmp6.buttonRadius, cutoutPositionInDegrees),
        };
        tmp11Result = CircleWithCutoutUtils;
        items3[1] = size;
        tmp11Result2 = CircleWithCutoutUtils;
        tmp10Result = closure_11(closure_9, obj8);
      }
      items1[2] = tmp10Result;
      items1[3] = children;
      return closure_11(PressableOpacity, obj);
    };
let closure_19 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let backgroundColor;
      let disableTint;
      let isActive;
      let isSmallSize;
      let showBadge;
      let tintColor;
      let tmp18;
      let tmp20;
      let tmp21;
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(20);
      if (cResult[0] !== arg0) {
        ({ isActive, disableTint, showBadge, isSmallSize, backgroundColor, tintColor } = arg0);
        const tmp12 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = backgroundColor;
        cResult[2] = isActive;
        cResult[3] = tmp12;
        cResult[4] = disableTint;
        cResult[5] = showBadge;
        cResult[6] = isSmallSize;
        cResult[7] = tintColor;
        tmp9 = tintColor;
        tmp8 = isSmallSize;
        tmp7 = showBadge;
        tmp6 = disableTint;
        tmp5 = tmp12;
        tmp4 = isActive;
        tmp3 = backgroundColor;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
        tmp5 = cResult[3];
        tmp6 = cResult[4];
        tmp7 = cResult[5];
        tmp8 = cResult[6];
        tmp9 = cResult[7];
      }
      let WHITE = null;
      const tmp13 = undefined !== tmp6 && tmp6;
      if (tmp4) {
        WHITE = nativeDefault.unsafe_rawColors.WHITE;
      }
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      if (!tmp13) {
        tmp18 = tmp4 ? unsafe_rawColors.PRIMARY_900 : unsafe_rawColors.WHITE;
      }
      if (tmp3 == null) {
        tmp3 = WHITE;
      }
      let tmp19 = tmp9;
      if (tmp9 == null) {
        tmp19 = tmp18;
      }
      if (cResult[8] !== tmp19) {
        const obj2 = { tintColor: tmp19 };
        cResult[8] = tmp19;
        cResult[9] = obj2;
        tmp20 = obj2;
      } else {
        tmp20 = cResult[9];
      }
      if (cResult[10] !== tmp4) {
        const obj3 = { selected: tmp4 };
        cResult[10] = tmp4;
        cResult[11] = obj3;
        tmp21 = obj3;
      } else {
        tmp21 = cResult[11];
      }
      if (tmp9 == null) {
        tmp9 = tmp18;
      }
      if (cResult[12] === (undefined !== tmp8 && tmp8)) {
        if (cResult[13] === tmp5) {
          if (cResult[14] === (undefined !== tmp7 && tmp7)) {
            if (cResult[15] === tmp3) {
              if (cResult[16] === tmp20) {
                if (cResult[17] === tmp21) {
                  let tmp22;
                  if (cResult[18] === tmp9) {
                    tmp22 = cResult[19];
                  }
                  return tmp22;
                }
              }
            }
          }
        }
      }
      const obj4 = {
        backgroundColor: tmp3,
        imageStyle: tmp20,
        accessibilityState: tmp21,
        isSmallSize: undefined !== tmp8 && tmp8,
        showBadge: undefined !== tmp7 && tmp7,
        lottieComponentColor: tmp9,
      };
      const merged = Object.assign(tmp5);
      const tmp24 = unpackModuleId(closure_19, obj4);
      cResult[12] = undefined !== tmp8 && tmp8;
      cResult[13] = tmp5;
      cResult[14] = undefined !== tmp7 && tmp7;
      cResult[15] = tmp3;
      cResult[16] = tmp20;
      cResult[17] = tmp21;
      cResult[18] = tmp9;
      cResult[19] = tmp24;
      tmp22 = tmp24;
    }
  : (showBadge) => {
      let backgroundColor;
      let disableTint;
      let isActive;
      let tintColor;
      let tmp5;
      let tmp8;
      ({ isActive, disableTint } = showBadge);
      if (disableTint === undefined) {
        disableTint = false;
      }
      let flag = showBadge.showBadge;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = showBadge.isSmallSize;
      if (flag2 === undefined) {
        flag2 = false;
      }
      ({ backgroundColor, tintColor } = showBadge);
      const merged = Object.assign(
        showBadge,
        Object.assign({ isActive: 0, disableTint: 0, showBadge: 0, isSmallSize: 0, backgroundColor: 0, tintColor: 0 }),
      );
      let WHITE = null;
      if (isActive) {
        WHITE = nativeDefault.unsafe_rawColors.WHITE;
      }
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      if (!disableTint) {
        tmp5 = isActive ? unsafe_rawColors.PRIMARY_900 : unsafe_rawColors.WHITE;
      }
      if (backgroundColor == null) {
        backgroundColor = WHITE;
      }
      const obj = {
        backgroundColor,
        imageStyle: { tintColor: tmp8 },
        accessibilityState: { selected: isActive },
        isSmallSize: flag2,
        showBadge: flag,
        lottieComponentColor: tintColor,
      };
      tmp8 = tintColor;
      if (tintColor == null) {
        tmp8 = tmp5;
      }
      const merged1 = Object.assign(merged);
      if (tintColor == null) {
        tintColor = tmp5;
      }
      return unpackModuleId(closure_19, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isSmallSize) => {
      let tmp3;
      let tmp4;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(7);
      if (cResult[0] !== isSmallSize) {
        isSmallSize = isSmallSize.isSmallSize;
        const tmp7 = _objectWithoutProperties(isSmallSize, closure_4);
        cResult[0] = isSmallSize;
        cResult[1] = tmp7;
        cResult[2] = isSmallSize;
        tmp4 = isSmallSize;
        tmp3 = tmp7;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const RED_400 = nativeDefault.unsafe_rawColors.RED_400;
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { tintColor: WHITE };
        cResult[3] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === (undefined !== tmp4 && tmp4)) {
        let tmp10;
        if (cResult[5] === tmp3) {
          tmp10 = cResult[6];
        }
        return tmp10;
      }
      const obj3 = { backgroundColor: RED_400, imageStyle: tmp9, isSmallSize: undefined !== tmp4 && tmp4 };
      const merged = Object.assign(tmp3);
      const tmp12 = unpackModuleId(closure_19, obj3);
      cResult[4] = undefined !== tmp4 && tmp4;
      cResult[5] = tmp3;
      cResult[6] = tmp12;
      tmp10 = tmp12;
    }
  : (isSmallSize) => {
      let flag = isSmallSize.isSmallSize;
      if (flag === undefined) {
        flag = false;
      }
      const merged = Object.assign(isSmallSize, Object.assign({ isSmallSize: 0 }));
      const obj = {
        backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
        imageStyle: { tintColor: nativeDefault.unsafe_rawColors.WHITE },
        isSmallSize: flag,
      };
      ({ tintColor: nativeDefault.unsafe_rawColors.WHITE });
      const merged1 = Object.assign(merged);
      return unpackModuleId(closure_19, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let isMentioned;
      let notifications;
      let obj3;
      let tmp4;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(16);
      if (cResult[0] !== arg0) {
        ({ notifications, isMentioned } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_5);
        cResult[0] = arg0;
        cResult[1] = isMentioned;
        cResult[2] = notifications;
        cResult[3] = tmp9;
        tmp6 = tmp9;
        tmp5 = notifications;
        tmp4 = isMentioned;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      const tmp10 = closure_18();
      if (true !== tmp4) {
        let notificationAreaMentioned;
        if (undefined !== tmp4) {
          notificationAreaMentioned = tmp10.notificationAreaUnread;
        }
        if (cResult[4] === tmp10.notificationArea) {
          let tmp11;
          if (cResult[5] === notificationAreaMentioned) {
            tmp11 = cResult[6];
          }
          if (cResult[7] === tmp5) {
            let tmp12;
            if (cResult[8] === tmp10.notificationText) {
              tmp12 = cResult[9];
            }
            if (cResult[10] === tmp11) {
              let tmp15;
              if (cResult[11] === tmp12) {
                tmp15 = cResult[12];
              }
              if (cResult[13] === tmp6) {
                let tmp19;
                if (cResult[14] === tmp15) {
                  tmp19 = cResult[15];
                }
                return tmp19;
              }
              const obj2 = { children: unpackModuleId(closure_19, obj3) };
              obj3 = { children: tmp15 };
              const merged = Object.assign(tmp6);
              const tmp26 = unpackModuleId(React4, obj2);
              cResult[13] = tmp6;
              cResult[14] = tmp15;
              cResult[15] = tmp26;
              tmp19 = tmp26;
            }
            const obj4 = { style: tmp11, children: tmp12 };
            const tmp18 = unpackModuleId(React4, obj4);
            cResult[10] = tmp11;
            cResult[11] = tmp12;
            cResult[12] = tmp18;
            tmp15 = tmp18;
          }
          const obj5 = {
            style: tmp10.notificationText,
            variant: "text-xs/semibold",
            color: "text-overlay-light",
            children: tmp5,
          };
          const tmp14 = unpackModuleId(Text_Text.Text, obj5);
          cResult[7] = tmp5;
          cResult[8] = tmp10.notificationText;
          cResult[9] = tmp14;
          tmp12 = tmp14;
        }
        const items = [tmp10.notificationArea, notificationAreaMentioned];
        cResult[4] = tmp10.notificationArea;
        cResult[5] = notificationAreaMentioned;
        cResult[6] = items;
        tmp11 = items;
      }
      notificationAreaMentioned = tmp10.notificationAreaMentioned;
    }
  : (isMentioned) => {
      let obj4;
      isMentioned = isMentioned.isMentioned;
      const notifications = isMentioned.notifications;
      const merged = Object.assign(isMentioned, Object.assign({ notifications: 0, isMentioned: 0 }));
      const tmp2 = closure_18();
      const obj = {};
      const merged1 = Object.assign(merged);
      const items = [tmp2.notificationArea];
      if (true !== isMentioned) {
        let notificationAreaMentioned;
        if (undefined !== isMentioned) {
          notificationAreaMentioned = tmp2.notificationAreaUnread;
        }
        const obj2 = { children: unpackModuleId(closure_19, obj) };
        items[1] = notificationAreaMentioned;
        const obj3 = { style: items, children: unpackModuleId(Text_Text.Text, obj4) };
        obj4 = {
          style: tmp2.notificationText,
          variant: "text-xs/semibold",
          color: "text-overlay-light",
          children: notifications,
        };
        obj.children = unpackModuleId(React4, obj3);
        return unpackModuleId(React4, obj2);
      }
      notificationAreaMentioned = tmp2.notificationAreaMentioned;
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/CallBarAction.tsx");

export const SMALL_ACTION_BUTTON_DIMENSIONS = frozen;
export const ActionButton = tmp6;
export const ToggledActionButton = tmp7;
export const PrimaryActionButton = tmp8;
export const NotifiedActionButton = tmp9;
