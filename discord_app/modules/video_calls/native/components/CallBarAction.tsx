// discord_app/modules/video_calls/native/components/CallBarAction.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import CircleWithCutoutUtils from "../../../voice_panel/native/shared/CircleWithCutoutUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const CircleWithCutoutUtilsDefault = CircleWithCutoutUtils;

require = fn;
let closure_3 = ["isActive", "disableTint", "showBadge", "isSmallSize", "backgroundColor", "tintColor"];
let closure_4 = ["isSmallSize"];
let closure_5 = ["notifications", "isMentioned"];
const View = fn(17).View;
const resetFocusTimer = fn(10320).resetFocusTimer;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const ColorUtils = fn(4928);
let closure_12 = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
let c13 = 45;
let closure_14 = Object.freeze({ buttonRadius: 28, badgeRadius: 6, cutoutInset: 3 });
const frozen = Object.freeze({ buttonRadius: 24, badgeRadius: 4, cutoutInset: 2 });
let closure_16 = 24 + 2 * frozen.buttonRadius * 5 + 96;
const createStyles = fn(5091);
let obj3 = {
  buttonContainer: { position: "absolute" },
  iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center" },
  badge: { backgroundColor: "white", position: "absolute" },
  notificationArea: null,
  notificationText: null,
  notificationAreaMentioned: null,
  notificationAreaUnread: null,
};
const rect = {
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
obj3.notificationArea = rect;
obj3.notificationText = { lineHeight: 16 };
obj3.notificationAreaMentioned = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
let obj4 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
obj3.notificationAreaUnread = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
let closure_17 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ActionButton(arg0) {
      const cResult = onPress(576).c(52);
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
      const tmp7 = closure_17();
      let num = 12;
      if (undefined !== isSmallSize && isSmallSize) {
        num = 12;
        if (tmp9 < closure_16) {
          num = 6;
        }
      }
      const tmp11 = undefined !== isSmallSize && isSmallSize ? frozen : closure_14;
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
        let tmp15 = fn;
      } else {
        tmp15 = cResult[1];
      }
      if (cResult[2] === tmp11.buttonRadius) {
        if (cResult[3] === result) {
          if (cResult[4] === num) {
            let tmp16 = cResult[5];
          }
          if (cResult[6] === tmp11.buttonRadius) {
            if (cResult[7] === result) {
              let tmp17 = cResult[8];
            }
            let num7 = 1;
            if (tmp4) {
              num7 = 0.25;
            }
            if (cResult[9] !== num7) {
              const obj2 = { opacity: num7 };
              cResult[9] = num7;
              cResult[10] = obj2;
              let tmp18 = obj2;
            } else {
              tmp18 = cResult[10];
            }
            if (cResult[11] === tmp7.buttonContainer) {
              if (cResult[12] === tmp17) {
                if (cResult[13] === tmp18) {
                  let tmp19 = cResult[14];
                }
                if (null == backgroundColor) {
                  backgroundColor = closure_12;
                }
                if (cResult[15] === tmp11.buttonRadius) {
                  if (cResult[16] === sum) {
                    if (cResult[17] === tmp5) {
                      if (cResult[18] === backgroundColor) {
                        let tmp21 = cResult[19];
                      }
                      if (cResult[20] !== result) {
                        const size = { width: result, height: result };
                        cResult[20] = result;
                        cResult[21] = size;
                        let tmp25 = size;
                      } else {
                        tmp25 = cResult[21];
                      }
                      if (cResult[22] === tmp7.iconContainer) {
                        if (cResult[23] === tmp25) {
                          let tmp26 = cResult[24];
                        }
                        if (cResult[25] === IconComponent) {
                          if (cResult[26] === imageStyle) {
                            if (cResult[27] === lottieComponent) {
                              if (cResult[28] === lottieComponentColor) {
                                if (cResult[29] === source) {
                                  if (cResult[31] === tmp26) {
                                    if (cResult[32] === tmp27) {
                                      let tmp33 = cResult[33];
                                    }
                                    if (cResult[34] === tmp11.badgeRadius) {
                                      if (cResult[35] === tmp11.buttonRadius) {
                                        if (cResult[36] === result1) {
                                          if (cResult[37] === tmp5) {
                                            if (cResult[38] === tmp7.badge) {
                                              let tmp37 = cResult[39];
                                            }
                                            if (cResult[40] === children) {
                                              if (cResult[41] === tmp21) {
                                                if (cResult[42] === tmp33) {
                                                  if (cResult[43] === tmp37) {
                                                    if (cResult[44] === tmp19) {
                                                      let tmp42 = cResult[45];
                                                    }
                                                    if (cResult[46] === accessibilityLabel) {
                                                      if (cResult[47] === accessibilityState) {
                                                        if (cResult[48] === tmp42) {
                                                          if (cResult[49] === tmp15) {
                                                            if (cResult[50] === tmp16) {
                                                              let tmp46 = cResult[51];
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
                                                    const tmp48 = closure_10(onPress(6191).PressableOpacity, obj3);
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
                                            const obj4 = { style: tmp19, children: null };
                                            const items = [tmp21, tmp33, tmp37, children];
                                            obj4.children = items;
                                            const tmp45 = closure_11(View, obj4);
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
                                    if (tmp5) {
                                      const obj5 = { style: null };
                                      const items1 = [tmp7.badge];
                                      const size1 = {
                                        width: result1,
                                        height: result1,
                                        borderRadius: tmp11.badgeRadius,
                                        top: onPress(10833).getBadgeTop(
                                          tmp11.badgeRadius,
                                          tmp11.buttonRadius,
                                          cutoutPositionInDegrees,
                                        ),
                                        left: null,
                                      };
                                      const tmpResult = onPress(10833);
                                      size1.left = onPress(10833).getBadgeLeft(
                                        tmp11.badgeRadius,
                                        tmp11.buttonRadius,
                                        cutoutPositionInDegrees,
                                      );
                                      items1[1] = size1;
                                      obj5.style = items1;
                                      tmp38 = closure_10(View, obj5);
                                      const tmpResult2 = onPress(10833);
                                    }
                                    cResult[34] = tmp11.badgeRadius;
                                    cResult[35] = tmp11.buttonRadius;
                                    cResult[36] = result1;
                                    cResult[37] = tmp5;
                                    cResult[38] = tmp7.badge;
                                    cResult[39] = tmp38;
                                    tmp37 = tmp38;
                                  }
                                  const obj6 = { style: tmp26, children: cResult[30] };
                                  const tmp36 = closure_10(View, obj6);
                                  cResult[31] = tmp26;
                                  cResult[32] = cResult[30];
                                  cResult[33] = tmp36;
                                  tmp33 = tmp36;
                                }
                              }
                            }
                          }
                        }
                        if (null != lottieComponent) {
                          const obj7 = { color: lottieComponentColor };
                          let cloneElementResult = noop.cloneElement(lottieComponent, obj7);
                        } else if (null != IconComponent) {
                          const obj8 = { style: imageStyle };
                          cloneElementResult = closure_10(IconComponent, obj8);
                        } else {
                          const obj9 = { source, style: imageStyle };
                          cloneElementResult = closure_10(FastImageDefault, obj9);
                        }
                        cResult[25] = IconComponent;
                        cResult[26] = imageStyle;
                        cResult[27] = lottieComponent;
                        cResult[28] = lottieComponentColor;
                        cResult[29] = source;
                        cResult[30] = cloneElementResult;
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
                  enableCutout: tmp5,
                  cutoutPositionInDegrees,
                  circleFillColor: backgroundColor,
                };
                const tmp24 = closure_10(CircleWithCutoutUtilsDefault, obj10);
                cResult[15] = tmp11.buttonRadius;
                cResult[16] = sum;
                cResult[17] = tmp5;
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
      const obj = onPress(576);
      tmp4 = undefined !== appearsDisabled && appearsDisabled;
    }
  : function ActionButton(appearsDisabled) {
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
      const tmp = closure_17();
      let num = 12;
      if (flag2) {
        num = 12;
        if (tmp4 < closure_16) {
          num = 6;
        }
      }
      const tmp6 = flag2 ? frozen : closure_14;
      const result = 2 * tmp6.buttonRadius;
      const result1 = 2 * tmp6.badgeRadius;
      const sum = tmp6.badgeRadius + tmp6.cutoutInset;
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
        children: null,
      };
      const items = [tmp.buttonContainer, { width: result, height: result, borderRadius: tmp6.buttonRadius }];
      let num2 = 1;
      if (flag) {
        num2 = 0.25;
      }
      const obj2 = { style: items, children: null };
      items[2] = { opacity: num2 };
      const obj3 = {
        circleRadius: tmp6.buttonRadius,
        cutoutRadius: sum,
        enableCutout: showBadge,
        cutoutPositionInDegrees,
        circleFillColor: null,
      };
      if (null == backgroundColor) {
        backgroundColor = closure_12;
      }
      obj3.circleFillColor = backgroundColor;
      const items1 = [closure_10(CircleWithCutoutUtilsDefault, obj3), , ,];
      const obj4 = { style: null, children: null };
      const items2 = [tmp.iconContainer, { width: result, height: result }];
      obj4.style = items2;
      if (null != lottieComponent) {
        const obj5 = { color: lottieComponentColor };
        let cloneElementResult = noop.cloneElement(lottieComponent, obj5);
      } else if (null != IconComponent) {
        const obj6 = { style: imageStyle };
        cloneElementResult = closure_10(IconComponent, obj6);
      } else {
        const obj7 = { source, style: imageStyle };
        cloneElementResult = closure_10(FastImageDefault, obj7);
      }
      obj4.children = cloneElementResult;
      items1[1] = closure_10(View, obj4);
      let tmp10Result = null;
      if (showBadge) {
        const obj8 = { style: null };
        const items3 = [tmp.badge];
        const size = {
          width: result1,
          height: result1,
          borderRadius: tmp6.badgeRadius,
          top: CircleWithCutoutUtils.getBadgeTop(tmp6.badgeRadius, tmp6.buttonRadius, cutoutPositionInDegrees),
          left: null,
        };
        const tmp11Result = CircleWithCutoutUtils;
        size.left = CircleWithCutoutUtils.getBadgeLeft(tmp6.badgeRadius, tmp6.buttonRadius, cutoutPositionInDegrees);
        items3[1] = size;
        obj8.style = items3;
        tmp10Result = closure_10(View, obj8);
        const tmp11Result2 = CircleWithCutoutUtils;
      }
      items1[2] = tmp10Result;
      items1[3] = children;
      obj2.children = items1;
      obj.children = closure_11(View, obj2);
      return closure_10(Pressables.PressableOpacity, obj);
    };
let closure_18 = tmp4;
fn(558);
let obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ToggledActionButton(arg0) {
      const cResult = c.c(20);
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
        let tmp9 = tintColor;
        let tmp8 = isSmallSize;
        let tmp7 = showBadge;
        let tmp6 = disableTint;
        let tmp5 = tmp12;
        let tmp4 = isActive;
        let tmp3 = backgroundColor;
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
      if (tmp4) {
        WHITE = nativeDefault.unsafe_rawColors.WHITE;
      }
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      if (!tmp13) {
        const tmp18 = tmp4 ? unsafe_rawColors.PRIMARY_900 : unsafe_rawColors.WHITE;
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
        let tmp20 = obj2;
      } else {
        tmp20 = cResult[9];
      }
      if (cResult[10] !== tmp4) {
        const obj3 = { selected: tmp4 };
        cResult[10] = tmp4;
        cResult[11] = obj3;
        let tmp21 = obj3;
      } else {
        tmp21 = cResult[11];
      }
      if (tmp9 == null) {
        tmp9 = tmp18;
      }
      if (cResult[12] === (undefined !== tmp8 && tmp8)) {
        if (cResult[13] === tmp5) {
          if (cResult[14] === tmp14) {
            if (cResult[15] === tmp3) {
              if (cResult[16] === tmp20) {
                if (cResult[17] === tmp21) {
                  if (cResult[18] === tmp9) {
                    let tmp22 = cResult[19];
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
      };
      const merged = Object.assign(tmp5);
      obj4.showBadge = undefined !== tmp7 && tmp7;
      obj4.lottieComponentColor = tmp9;
      const tmp24 = collapsed(closure_18, obj4);
      cResult[12] = undefined !== tmp8 && tmp8;
      cResult[13] = tmp5;
      cResult[14] = undefined !== tmp7 && tmp7;
      cResult[15] = tmp3;
      cResult[16] = tmp20;
      cResult[17] = tmp21;
      cResult[18] = tmp9;
      cResult[19] = tmp24;
      tmp22 = tmp24;
      tmp13 = undefined !== tmp6 && tmp6;
    }
  : function ToggledActionButton(showBadge) {
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
        const tmp5 = isActive ? unsafe_rawColors.PRIMARY_900 : unsafe_rawColors.WHITE;
      }
      if (backgroundColor == null) {
        backgroundColor = WHITE;
      }
      const obj = { backgroundColor, imageStyle: null, accessibilityState: null, isSmallSize: null };
      let tmp8 = tintColor;
      if (tintColor == null) {
        tmp8 = tmp5;
      }
      obj.imageStyle = { tintColor: tmp8 };
      obj.accessibilityState = { selected: isActive };
      obj.isSmallSize = flag2;
      const merged1 = Object.assign(merged);
      obj.showBadge = flag;
      if (tintColor == null) {
        tintColor = tmp5;
      }
      obj.lottieComponentColor = tintColor;
      return collapsed(closure_18, obj);
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PrimaryActionButton(isSmallSize) {
      const cResult = c.c(7);
      if (cResult[0] !== isSmallSize) {
        isSmallSize = isSmallSize.isSmallSize;
        const tmp7 = _objectWithoutProperties(isSmallSize, closure_4);
        cResult[0] = isSmallSize;
        cResult[1] = tmp7;
        cResult[2] = isSmallSize;
        let tmp4 = isSmallSize;
        let tmp3 = tmp7;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { tintColor: nativeDefault.unsafe_rawColors.WHITE };
        cResult[3] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === (undefined !== tmp4 && tmp4)) {
        if (cResult[5] === tmp3) {
          let tmp10 = cResult[6];
        }
        return tmp10;
      }
      const merged = Object.assign(tmp3);
      const tmp12 = collapsed(closure_18, {
        backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
        imageStyle: tmp9,
        isSmallSize: undefined !== tmp4 && tmp4,
      });
      cResult[4] = undefined !== tmp4 && tmp4;
      cResult[5] = tmp3;
      cResult[6] = tmp12;
      tmp10 = tmp12;
      const obj3 = {
        backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
        imageStyle: tmp9,
        isSmallSize: undefined !== tmp4 && tmp4,
      };
    }
  : function PrimaryActionButton(isSmallSize) {
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
      const merged1 = Object.assign(merged);
      return collapsed(closure_18, obj);
    };
let size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/CallBarAction.tsx");

export const SMALL_ACTION_BUTTON_DIMENSIONS = frozen;
export const ActionButton = tmp4;
export const ToggledActionButton = tmp5;
export const PrimaryActionButton = tmp6;
export const NotifiedActionButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function NotifiedActionButton(arg0) {
      const cResult = c.c(16);
      if (cResult[0] !== arg0) {
        ({ notifications, isMentioned } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_5);
        cResult[0] = arg0;
        cResult[1] = isMentioned;
        cResult[2] = notifications;
        cResult[3] = tmp9;
        let tmp6 = tmp9;
        let tmp5 = notifications;
        let tmp4 = isMentioned;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      const tmp10 = closure_17();
      if (true !== tmp4) {
        if (undefined !== tmp4) {
          let notificationAreaMentioned = tmp10.notificationAreaUnread;
        }
        if (cResult[4] === tmp10.notificationArea) {
          if (cResult[5] === notificationAreaMentioned) {
            let tmp11 = cResult[6];
          }
          if (cResult[7] === tmp5) {
            if (cResult[8] === tmp10.notificationText) {
              let tmp12 = cResult[9];
            }
            if (cResult[10] === tmp11) {
              if (cResult[11] === tmp12) {
                let tmp15 = cResult[12];
              }
              if (cResult[13] === tmp6) {
                if (cResult[14] === tmp15) {
                  let tmp19 = cResult[15];
                }
                return tmp19;
              }
              const obj2 = { children: null };
              const obj3 = {};
              const merged = Object.assign(tmp6);
              obj3.children = tmp15;
              obj2.children = collapsed(closure_18, obj3);
              const tmp26 = collapsed(View, obj2);
              cResult[13] = tmp6;
              cResult[14] = tmp15;
              cResult[15] = tmp26;
              tmp19 = tmp26;
            }
            const obj4 = { style: tmp11, children: tmp12 };
            const tmp18 = collapsed(View, obj4);
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
          const tmp14 = collapsed(Text_Text.Text, obj5);
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
  : function NotifiedActionButton(isMentioned) {
      isMentioned = isMentioned.isMentioned;
      const merged = Object.assign(isMentioned, Object.assign({ notifications: 0, isMentioned: 0 }));
      const tmp2 = closure_17();
      const obj = {};
      const merged1 = Object.assign(merged);
      const items = [tmp2.notificationArea];
      if (true !== isMentioned) {
        if (undefined !== isMentioned) {
          let notificationAreaMentioned = tmp2.notificationAreaUnread;
        }
        const obj2 = { children: null };
        const obj3 = { style: null, children: null };
        items[1] = notificationAreaMentioned;
        obj3.style = items;
        const obj4 = {
          style: tmp2.notificationText,
          variant: "text-xs/semibold",
          color: "text-overlay-light",
          children: isMentioned.notifications,
        };
        obj3.children = collapsed(Text_Text.Text, obj4);
        obj.children = collapsed(View, obj3);
        obj2.children = collapsed(closure_18, obj);
        return collapsed(View, obj2);
      }
      notificationAreaMentioned = tmp2.notificationAreaMentioned;
    };
