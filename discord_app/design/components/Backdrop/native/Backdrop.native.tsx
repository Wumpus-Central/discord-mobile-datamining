// discord_app/design/components/Backdrop/native/Backdrop.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexportDefault from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = {};
const createStyles = fn(5092);
let obj2 = { fill: StyleSheet.absoluteFillObject, backdrop: { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM }, backdropOpaque: null, accessibilityDismiss: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
obj2.backdropOpaque = { backgroundColor: nativeDefault.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
obj2.accessibilityDismiss = { position: "absolute", top: 0, left: 0, right: 0, height: 16 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Backdrop/native/Backdrop.native.tsx");

export const Backdrop = ReactCompilerGating.isReactCompilerEnabled() ? (function Backdrop(arg0) {
  const cResult = c.c(28);
  ({ style, accessibleDismissStyle, animatedProps, opaque, blur, onDismiss, accessibilityLabel, aria-hidden: tmp4 } = arg0);
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
      const intl = util.intl;
      stringResult = intl.string(util.t.WAI6xu);
    }
    cResult[0] = accessibilityLabel;
    cResult[1] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  let fill = closure_7();
  const theme = native.useThemeContext().theme;
  const top = useSafeAreaInsetsDefault().top;
  const backgroundColor = fill.backdrop.backgroundColor;
  if (cResult[2] !== onDismiss) {
    const obj2 = { onPress: onDismiss, "aria-hidden": true };
    cResult[2] = onDismiss;
    cResult[3] = obj2;
    backdropOpaque = obj2;
  } else {
    backdropOpaque = cResult[3];
  }
  if (cResult[4] === style) {
    if (cResult[5] === fill.fill) {
      let tmp9 = cResult[6];
    }
    if (cResult[7] === tmp6) {
      if (cResult[8] === accessibleDismissStyle) {
        if (cResult[9] === tmp4) {
          if (cResult[10] === onDismiss) {
            if (cResult[11] === top) {
              if (cResult[12] === fill.accessibilityDismiss) {
                let tmp10 = cResult[13];
              }
              if (cResult[14] === backgroundColor) {
                if (cResult[15] === str) {
                  if (cResult[16] === tmp5) {
                    if (cResult[17] === backdropOpaque) {
                      if (cResult[18] === fill.backdrop) {
                        if (cResult[19] === fill.backdropOpaque) {
                          if (cResult[20] === fill.fill) {
                            if (cResult[21] === theme) {
                              if (cResult[23] === animatedProps) {
                                if (cResult[24] === tmp9) {
                                  if (cResult[25] === tmp10) {
                                    if (cResult[26] === tmp15) {
                                      let tmp28 = cResult[27];
                                    }
                                    return tmp28;
                                  }
                                }
                              }
                              const obj3 = { style: tmp9, pointerEvents: "box-none", animatedProps, children: null };
                              const items = [tmp10, cResult[22]];
                              obj3.children = items;
                              const tmp30 = hasOwnProperty(ReanimatedRexportDefault.View, obj3);
                              cResult[23] = animatedProps;
                              cResult[24] = tmp9;
                              cResult[25] = tmp10;
                              cResult[26] = cResult[22];
                              cResult[27] = tmp30;
                              tmp28 = tmp30;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              if ("none" === str) {
                const obj4 = {};
                const merged = Object.assign(backdropOpaque);
                const items1 = [fill.fill, tmp5 ? fill.backdropOpaque : fill.backdrop];
                obj4.style = items1;
                const tmp16Result = React4(tmp17, obj4);
                cResult[14] = backgroundColor;
                cResult[15] = str;
                cResult[16] = tmp5;
                cResult[17] = backdropOpaque;
                ({ backdrop: tmp3[18], backdropOpaque } = fill);
                cResult[19] = backdropOpaque;
                fill = fill.fill;
                cResult[20] = fill;
                cResult[21] = theme;
                cResult[22] = tmp16Result;
              }
              const obj5 = {};
              const merged1 = Object.assign(backdropOpaque);
              obj5.style = fill.fill;
              if ("none" === str) {
                let num12 = 0;
                const obj6 = { blurAmount: num12, style: fill.fill, blurTheme: theme, tintColor: backgroundColor, android_fallbackColor: fill.backdrop.backgroundColor };
                obj5.children = React4(tmp24, obj6);
              } else if ("subtle" !== str) {
                num12 = 0.25;
              }
              num12 = 0.05;
            }
          }
        }
      }
    }
    let tmp12 = null != onDismiss;
    if (tmp12) {
      const obj7 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, "aria-hidden": null };
      const items2 = [fill.accessibilityDismiss, , ];
      const obj8 = { top };
      items2[1] = obj8;
      items2[2] = accessibleDismissStyle;
      obj7.style = items2;
      obj7.onPress = onDismiss;
      obj7.accessibilityLabel = tmp6;
      obj7["aria-hidden"] = tmp4;
      tmp12 = React4(React3, obj7);
    }
    cResult[7] = tmp6;
    cResult[8] = accessibleDismissStyle;
    cResult[9] = tmp4;
    cResult[10] = onDismiss;
    cResult[11] = top;
    cResult[12] = fill.accessibilityDismiss;
    cResult[13] = tmp12;
    tmp10 = tmp12;
  }
  const items3 = [fill.fill, style];
  cResult[4] = style;
  cResult[5] = fill.fill;
  cResult[6] = items3;
  tmp9 = items3;
  const tmpResult = native;
}) : (function Backdrop(animatedProps) {
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
    const intl = util.intl;
    accessibilityLabel = intl.string(util.t.WAI6xu);
  }
  let backgroundColor = closure_7();
  const obj2 = { onPress: onDismiss, "aria-hidden": true };
  const obj3 = { style: null, pointerEvents: "box-none", animatedProps, children: null };
  const items = [backgroundColor.fill, style];
  obj3.style = items;
  let tmp4 = null != onDismiss;
  if (tmp4) {
    const obj4 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, "aria-hidden": null };
    const items1 = [backgroundColor.accessibilityDismiss, , ];
    const obj5 = { top: useSafeAreaInsetsDefault().top };
    items1[1] = obj5;
    items1[2] = accessibleDismissStyle;
    obj4.style = items1;
    obj4.onPress = onDismiss;
    obj4.accessibilityLabel = accessibilityLabel;
    obj4["aria-hidden"] = animatedProps["aria-hidden"];
    tmp4 = React4(React3, obj4);
  }
  const items2 = [tmp4, ];
  if ("none" !== str) {
    const obj6 = {};
    const merged = Object.assign(obj2);
    obj6.style = backgroundColor.fill;
    if ("none" === str) {
      let num = 0;
      const obj7 = { blurAmount: num, style: backgroundColor.fill, blurTheme: obj.useThemeContext().theme, tintColor: backgroundColor.backdrop.backgroundColor, android_fallbackColor: null };
      backgroundColor = backgroundColor.backdrop.backgroundColor;
      obj7.android_fallbackColor = backgroundColor;
      obj6.children = React4(tmp15, obj7);
    } else if ("subtle" !== str) {
      num = 0.25;
    }
    num = 0.05;
  } else {
    const obj8 = {};
    const merged1 = Object.assign(obj2);
    const items3 = [backgroundColor.fill, flag ? backgroundColor.backdropOpaque : backgroundColor.backdrop];
    obj8.style = items3;
    items2[1] = React4(tmp8, obj8);
    obj3.children = items2;
    return hasOwnProperty(ReanimatedRexportDefault.View, obj3);
  }
  obj = native;
});