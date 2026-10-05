// === Module 5771: Backdrop ===

// Module 5771 (Backdrop)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import native from "native" /* 4589 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 5772 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
({ Pressable: c3, StyleSheet } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = {};
let createStyles = createStyles_mod;
let obj = { fill: StyleSheet.absoluteFillObject, backdrop: obj2, backdropOpaque: obj3, accessibilityDismiss: { position: "absolute", top: 0, left: 0, right: 0, height: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
let closure_7 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let accessibleDismissStyle;
  let animatedProps;
  let blur;
  let items;
  let items1;
  let items2;
  let obj5;
  let onDismiss;
  let opaque;
  let style;
  let tmp10;
  let tmp4;
  let tmp6;
  let tmp9Result;
  const obj = react2;
  const cResult = obj.c(28);
  ({ style, accessibleDismissStyle, animatedProps, opaque, blur, onDismiss, accessibilityLabel, "aria-hidden": tmp4 } = arg0);
  if (undefined === animatedProps) {
    animatedProps = closure_6;
  }
  let str = "none";
  if (undefined !== blur) {
    str = blur;
  }
  if (cResult[0] !== accessibilityLabel) {
    let stringResult = accessibilityLabel;
    if (undefined === accessibilityLabel) {
      const intl = intl2.intl;
      stringResult = intl.string(intl2.t.WAI6xu);
    }
    cResult[0] = accessibilityLabel;
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  const tmp8 = closure_7();
  const tmpResult = native;
  const theme = tmpResult.useThemeContext().theme;
  const top = useSafeAreaInsetsDefault().top;
  const backgroundColor = tmp8.backdrop.backgroundColor;
  if (cResult[2] !== onDismiss) {
    const obj2 = { onPress: onDismiss, "aria-hidden": true };
    cResult[2] = onDismiss;
    cResult[3] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === style) {
    let tmp11;
    if (cResult[5] === tmp8.fill) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp6) {
      if (cResult[8] === accessibleDismissStyle) {
        if (cResult[9] === tmp4) {
          if (cResult[10] === onDismiss) {
            if (cResult[11] === top) {
              let tmp12;
              let obj6;
              if (cResult[12] === tmp8.accessibilityDismiss) {
                tmp12 = cResult[13];
              }
              if (cResult[14] === backgroundColor) {
                if (cResult[15] === str) {
                  if (cResult[16] === (undefined !== opaque && opaque)) {
                    if (cResult[17] === tmp10) {
                      if (cResult[18] === tmp8.backdrop) {
                        if (cResult[19] === tmp8.backdropOpaque) {
                          if (cResult[20] === tmp8.fill) {
                            let tmp17;
                            if (cResult[21] === theme) {
                              tmp17 = cResult[22];
                            }
                            if (cResult[23] === animatedProps) {
                              if (cResult[24] === tmp11) {
                                if (cResult[25] === tmp12) {
                                  let tmp28;
                                  if (cResult[26] === tmp17) {
                                    tmp28 = cResult[27];
                                  }
                                  return tmp28;
                                }
                              }
                            }
                            const obj3 = { style: tmp11, pointerEvents: "box-none", animatedProps, children: items };
                            items = [tmp12, tmp17];
                            const tmp30 = hasOwnProperty(ReanimatedRexportDefault.View, obj3);
                            cResult[23] = animatedProps;
                            cResult[24] = tmp11;
                            cResult[25] = tmp12;
                            cResult[26] = tmp17;
                            cResult[27] = tmp30;
                            tmp28 = tmp30;
                          }
                        }
                      }
                    }
                  }
                }
              }
              if ("none" !== str) {
                let num12;
                const obj4 = { style: tmp8.fill, children: React3(tmp9Result, obj5) };
                const merged = Object.assign(tmp10);
                tmp9Result = VisualEffectViewAnimatedDefault;
                if ("none" === str) {
                  num12 = 0;
                } else if ("subtle" === str) {
                  num12 = 0.05;
                } else {
                  num12 = 0.25;
                }
                obj6 = obj4;
                obj5 = { blurAmount: num12, style: tmp8.fill, blurTheme: theme, tintColor: backgroundColor, android_fallbackColor: tmp8.backdrop.backgroundColor };
              } else {
                obj6 = { style: items1 };
                const merged1 = Object.assign(tmp10);
                items1 = [tmp8.fill, undefined !== opaque && opaque ? tmp8.backdropOpaque : tmp8.backdrop];
              }
              const tmp18Result = React3(_false, obj6);
              cResult[14] = backgroundColor;
              cResult[15] = str;
              cResult[16] = undefined !== opaque && opaque;
              cResult[17] = tmp10;
              cResult[18] = tmp8.backdrop;
              cResult[19] = tmp8.backdropOpaque;
              cResult[20] = tmp8.fill;
              cResult[21] = theme;
              cResult[22] = tmp18Result;
              tmp17 = tmp18Result;
            }
          }
        }
      }
    }
    let tmp14 = null != onDismiss;
    if (tmp14) {
      const obj7 = { style: items2, onPress: onDismiss, accessibilityRole: "button", accessibilityLabel: tmp6, "aria-hidden": tmp4 };
      items2 = [tmp8.accessibilityDismiss, , ];
      const obj8 = { top };
      items2[1] = obj8;
      items2[2] = accessibleDismissStyle;
      tmp14 = React3(_false, obj7);
    }
    cResult[7] = tmp6;
    cResult[8] = accessibleDismissStyle;
    cResult[9] = tmp4;
    cResult[10] = onDismiss;
    cResult[11] = top;
    cResult[12] = tmp8.accessibilityDismiss;
    cResult[13] = tmp14;
    tmp12 = tmp14;
  }
  const items3 = [tmp8.fill, style];
  cResult[4] = style;
  cResult[5] = tmp8.fill;
  cResult[6] = items3;
  tmp11 = items3;
}) : ((animatedProps) => {
  let accessibilityLabel;
  let accessibleDismissStyle;
  let items;
  let items1;
  let items2;
  let items3;
  let obj7;
  let obj8;
  let onDismiss;
  let style;
  let tmp6Result;
  animatedProps = animatedProps.animatedProps;
  ({ style, accessibleDismissStyle } = animatedProps);
  if (animatedProps === undefined) {
    animatedProps = closure_6;
  }
  let flag = animatedProps.opaque;
  if (flag === undefined) {
    flag = false;
  }
  let str = animatedProps.blur;
  if (str === undefined) {
    str = "none";
  }
  ({ onDismiss, accessibilityLabel } = animatedProps);
  if (accessibilityLabel === undefined) {
    const intl = intl2.intl;
    accessibilityLabel = intl.string(intl2.t.WAI6xu);
  }
  const prop = animatedProps["aria-hidden"];
  const tmp4 = closure_7();
  const obj = native;
  const theme = obj.useThemeContext().theme;
  const obj2 = { onPress: onDismiss, "aria-hidden": true };
  const top = useSafeAreaInsetsDefault().top;
  const backgroundColor = tmp4.backdrop.backgroundColor;
  const obj3 = { style: items, pointerEvents: "box-none", animatedProps, children: items2 };
  items = [tmp4.fill, style];
  let tmp8 = null != onDismiss;
  const View = ReanimatedRexportDefault.View;
  if (tmp8) {
    const obj4 = { style: items1, onPress: onDismiss, accessibilityRole: "button", accessibilityLabel, "aria-hidden": prop };
    items1 = [tmp4.accessibilityDismiss, , ];
    const obj5 = { top };
    items1[1] = obj5;
    items1[2] = accessibleDismissStyle;
    tmp8 = React3(_false, obj4);
  }
  items2 = [tmp8, ];
  if ("none" !== str) {
    let num;
    const obj6 = { style: tmp4.fill, children: React3(tmp6Result, obj7) };
    const merged = Object.assign(obj2);
    tmp6Result = VisualEffectViewAnimatedDefault;
    if ("none" === str) {
      num = 0;
    } else if ("subtle" === str) {
      num = 0.05;
    } else {
      num = 0.25;
    }
    obj8 = obj6;
    obj7 = { blurAmount: num, style: tmp4.fill, blurTheme: theme, tintColor: backgroundColor, android_fallbackColor: tmp4.backdrop.backgroundColor };
  } else {
    obj8 = { style: items3 };
    const merged1 = Object.assign(obj2);
    items3 = [tmp4.fill, flag ? tmp4.backdropOpaque : tmp4.backdrop];
  }
  items2[1] = React3(_false, obj8);
  return hasOwnProperty(View, obj3);
});
const result = size.fileFinishedImporting("design/components/Backdrop/native/Backdrop.native.tsx");

export const Backdrop = tmp6;