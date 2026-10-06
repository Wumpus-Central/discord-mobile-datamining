// === Module 13116: IconActionButton ===

// Module 13116 (IconActionButton)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Text_Text from "Text/Text" /* 4892 */;
import useFontScale from "useFontScale" /* 5609 */;
import Pressables from "Pressables" /* 5916 */;
import shared_components_Badge from "shared_components/Badge" /* 7514 */;
import _readOnlyError from "_readOnlyError" /* 377 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const shared_components_BadgeDefault = shared_components_Badge;
let dependencyMap;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles(() => {
  let num;
  let obj2;
  const obj = { actionIconButtonPressable: { minWidth: 32, minHeight: 32, borderRadius: 20, marginEnd: 12, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 12 }, withoutMargin: { marginEnd: 0 }, filled: {}, outlined: obj2, roundButton: { maxWidth: 32, maxHeight: 32 }, actionIcon: { tintColor: nativeDefault.colors.ICON_SUBTLE }, actionText: { marginLeft: 4, marginTop: num }, unreadBadgeLeft: { position: "absolute", left: -2, top: -1 }, unreadBadgeRight: { position: "absolute", right: -2, top: -1 }, unreadBadgeMask: { color: nativeDefault.colors.BACKGROUND_BASE_LOW }, countStyle: { position: "relative", marginLeft: nativeDefault.space.PX_8 } };
  obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  ({ tintColor: nativeDefault.colors.ICON_SUBTLE });
  num = 0;
  const obj4 = PlatformUtils;
  if (obj4.isAndroid()) {
    num = -2;
  }
  ({ color: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ position: "relative", marginLeft: nativeDefault.space.PX_8 });
  return obj;
});
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function IconComponent(color) {
  let IconComponent;
  let actionIcon;
  let source;
  const tmp = dependencyMap;
  let obj = source(576);
  const cResult = obj.c(7);
  ({ IconComponent, source } = color);
  color = color.color;
  const tmp3 = closure_6();
  dependencyMap = tmp3;
  if (cResult[0] === color) {
    if (cResult[1] === source) {
      let tmp4;
      let tmp4Result;
      if (cResult[2] === tmp3) {
        tmp4 = cResult[3];
      }
      if (cResult[4] === IconComponent) {
        let tmp5;
        if (cResult[5] === tmp4) {
          tmp5 = cResult[6];
        }
        return tmp5;
      }
      if (null != IconComponent) {
        const obj2 = { size: "sm", color: color(587).colors.ICON_SUBTLE };
        tmp4Result = closure_4(IconComponent, obj2);
      } else {
        tmp4Result = tmp4();
      }
      cResult[4] = IconComponent;
      cResult[5] = tmp4;
      cResult[6] = tmp4Result;
      tmp5 = tmp4Result;
    }
  }
  const fn = function n() {
    let tintColor;
    let tmp3Result = null;
    if (null != source) {
      const obj = { size: native.Icon.Sizes.SMALL, source: tmp, color: tintColor };
      const Icon = native.Icon;
      tintColor = color;
      if (color == null) {
        tintColor = actionIcon.actionIcon.tintColor;
      }
      tmp3Result = React3(Icon, obj);
    }
    return tmp3Result;
  };
  cResult[0] = color;
  cResult[1] = source;
  cResult[2] = tmp3;
  cResult[3] = fn;
  tmp4 = fn;
}) : ((color) => {
  let IconComponent;
  let actionIcon;
  let source;
  let tmp2Result;
  ({ IconComponent, source } = color);
  color = color.color;
  const tmp = closure_6();
  dependencyMap = tmp;
  const items = [tmp, color, source];
  if (null != IconComponent) {
    let obj = { size: "sm", color: color(587).colors.ICON_SUBTLE };
    tmp2Result = closure_4(IconComponent, obj);
  } else {
    tmp2Result = tmp2();
  }
  return tmp2Result;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((noMargin) => {
  let IconComponent;
  let accessibilityLabel;
  let badge;
  let badgePosition;
  let buttonText;
  let buttonTextColor;
  let color;
  let count;
  let disabled;
  let hitSlop;
  let items;
  let onLongPress;
  let onPress;
  let source;
  let style;
  let variant;
  const obj = react2;
  const cResult = obj.c(32);
  ({ source, IconComponent, variant, color, buttonText, buttonTextColor, accessibilityLabel, style, badge, badgePosition, count, hitSlop, disabled, onPress, onLongPress } = noMargin);
  let str = "filled";
  noMargin = noMargin.noMargin;
  if (undefined !== variant) {
    str = variant;
  }
  let str2 = "left";
  if (undefined !== badgePosition) {
    str2 = badgePosition;
  }
  let num = 0;
  if (undefined !== count) {
    num = count;
  }
  const tmp4 = closure_6();
  useFontScale;
  const tmp8 = "outlined" === str ? tmp4.outlined : tmp4.filled;
  let roundButton;
  if (!(null != buttonText && tmp6 <= 1.2)) {
    roundButton = tmp4.roundButton;
  }
  let withoutMargin;
  if (noMargin) {
    withoutMargin = tmp4.withoutMargin;
  }
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.actionIconButtonPressable) {
      if (cResult[2] === tmp8) {
        if (cResult[3] === roundButton) {
          let tmp11;
          if (cResult[4] === withoutMargin) {
            tmp11 = cResult[5];
          }
          if (cResult[6] === IconComponent) {
            if (cResult[7] === color) {
              let tmp12;
              if (cResult[8] === source) {
                tmp12 = cResult[9];
              }
              if (cResult[10] === buttonText) {
                if (cResult[11] === buttonTextColor) {
                  if (cResult[12] === (null != buttonText && tmp6 <= 1.2)) {
                    let tmp16;
                    if (cResult[13] === tmp4.actionText) {
                      tmp16 = cResult[14];
                    }
                    if (cResult[15] === num) {
                      let tmp19;
                      if (cResult[16] === tmp4.countStyle) {
                        tmp19 = cResult[17];
                      }
                      if (cResult[18] === badge) {
                        let tmp22;
                        if (cResult[19] === str2) {
                          tmp22 = cResult[20];
                        }
                        if (cResult[21] === accessibilityLabel) {
                          if (cResult[22] === disabled) {
                            if (cResult[23] === hitSlop) {
                              if (cResult[24] === onLongPress) {
                                if (cResult[25] === onPress) {
                                  if (cResult[26] === tmp19) {
                                    if (cResult[27] === tmp22) {
                                      if (cResult[28] === tmp11) {
                                        if (cResult[29] === tmp12) {
                                          let tmp26;
                                          if (cResult[30] === tmp16) {
                                            tmp26 = cResult[31];
                                          }
                                          return tmp26;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj2 = { hitSlop, onPress, onLongPress, disabled, accessibilityRole: "button", accessibilityLabel, style: tmp11, children: items };
                        items = [tmp12, tmp16, tmp19, tmp22];
                        const tmp28 = hasOwnProperty(Pressables.PressableOpacity, obj2);
                        cResult[21] = accessibilityLabel;
                        cResult[22] = disabled;
                        cResult[23] = hitSlop;
                        cResult[24] = onLongPress;
                        cResult[25] = onPress;
                        cResult[26] = tmp19;
                        cResult[27] = tmp22;
                        cResult[28] = tmp11;
                        cResult[29] = tmp12;
                        cResult[30] = tmp16;
                        cResult[31] = tmp28;
                        tmp26 = tmp28;
                      }
                      let tmp23 = badge;
                      if (tmp23) {
                        const obj3 = { badgePosition: str2 };
                        tmp23 = React3(closure_8, obj3);
                      }
                      cResult[18] = badge;
                      cResult[19] = str2;
                      cResult[20] = tmp23;
                      tmp22 = tmp23;
                    }
                    let tmp20 = null;
                    if (num > 0) {
                      const obj4 = { style: tmp4.countStyle, value: num };
                      tmp20 = React3(native.Badge, obj4);
                    }
                    cResult[15] = num;
                    cResult[16] = tmp4.countStyle;
                    cResult[17] = tmp20;
                    tmp19 = tmp20;
                  }
                }
              }
              let tmp17 = tmp7;
              if (tmp17) {
                const obj5 = { variant: "text-sm/bold", color: buttonTextColor, style: tmp4.actionText, children: buttonText };
                tmp17 = React3(Text_Text.Text, obj5);
              }
              cResult[10] = buttonText;
              cResult[11] = buttonTextColor;
              cResult[12] = null != buttonText && tmp6 <= 1.2;
              cResult[13] = tmp4.actionText;
              cResult[14] = tmp17;
              tmp16 = tmp17;
            }
          }
          const obj6 = { IconComponent, color, source };
          const tmp15 = React3(closure_7, obj6);
          cResult[6] = IconComponent;
          cResult[7] = color;
          cResult[8] = source;
          cResult[9] = tmp15;
          tmp12 = tmp15;
        }
      }
    }
  }
  const items1 = [tmp4.actionIconButtonPressable, tmp8, roundButton, withoutMargin, style];
  cResult[0] = style;
  cResult[1] = tmp4.actionIconButtonPressable;
  cResult[2] = tmp8;
  cResult[3] = roundButton;
  cResult[4] = withoutMargin;
  cResult[5] = items1;
  tmp11 = items1;
}) : ((variant) => {
  let IconComponent;
  let accessibilityLabel;
  let badge;
  let badgePosition;
  let buttonText;
  let buttonTextColor;
  let color;
  let disabled;
  let hitSlop;
  let items;
  let items1;
  let noMargin;
  let onLongPress;
  let onPress;
  let source;
  let style;
  let str = variant.variant;
  ({ source, IconComponent } = variant);
  if (str === undefined) {
    str = "filled";
  }
  ({ buttonText, badge, badgePosition, color, buttonTextColor, accessibilityLabel, style } = variant);
  if (badgePosition === undefined) {
    badgePosition = "left";
  }
  let num = variant.count;
  if (num === undefined) {
    num = 0;
  }
  ({ noMargin, hitSlop, disabled, onPress, onLongPress } = variant);
  const tmp = closure_6();
  useFontScale;
  let tmp10Result = null != buttonText && tmp5 <= 1.2;
  const obj = { hitSlop, onPress, onLongPress, disabled, accessibilityRole: "button", accessibilityLabel, style: items, children: items1 };
  items = [tmp.actionIconButtonPressable, "outlined" === str ? tmp.outlined : tmp.filled, , , ];
  let roundButton;
  const PressableOpacity = Pressables.PressableOpacity;
  if (!tmp10Result) {
    roundButton = tmp.roundButton;
  }
  items[2] = roundButton;
  let withoutMargin;
  if (noMargin) {
    withoutMargin = tmp.withoutMargin;
  }
  items[3] = withoutMargin;
  items[4] = style;
  items1 = [React3(closure_7, { IconComponent, color, source }), , , ];
  if (tmp10Result) {
    const obj2 = { variant: "text-sm/bold", color: buttonTextColor, style: tmp.actionText, children: buttonText };
    tmp10Result = React3(Text_Text.Text, obj2);
  }
  items1[1] = tmp10Result;
  let tmp10Result2 = null;
  if (num > 0) {
    const obj3 = { style: tmp.countStyle, value: num };
    tmp10Result2 = React3(native.Badge, obj3);
  }
  items1[2] = tmp10Result2;
  if (badge) {
    const obj4 = { badgePosition };
    badge = React3(closure_8, obj4);
  }
  items1[3] = badge;
  return hasOwnProperty(PressableOpacity, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((badgePosition) => {
  const obj = react2;
  const cResult = obj.c(3);
  badgePosition = badgePosition.badgePosition;
  let str = "left";
  if (undefined !== badgePosition) {
    str = badgePosition;
  }
  const tmp4 = closure_6();
  const tmp5 = "left" === str ? tmp4.unreadBadgeLeft : tmp4.unreadBadgeRight;
  if (cResult[0] === tmp4.unreadBadgeMask.color) {
    let tmp6;
    if (cResult[1] === tmp5) {
      tmp6 = cResult[2];
    }
    return tmp6;
  }
  const obj2 = { size: shared_components_Badge.CHANNEL_BADGE_SIZE, maskSize: 2, style: tmp5, maskColor: tmp4.unreadBadgeMask.color };
  const tmp7 = shared_components_BadgeDefault;
  const tmp8 = React3(tmp7, obj2);
  cResult[0] = tmp4.unreadBadgeMask.color;
  cResult[1] = tmp5;
  cResult[2] = tmp8;
  tmp6 = tmp8;
}) : ((badgePosition) => {
  let str = badgePosition.badgePosition;
  if (str === undefined) {
    str = "left";
  }
  const tmp = closure_6();
  const obj = { size: shared_components_Badge.CHANNEL_BADGE_SIZE, maskSize: 2, style: "left" === str ? tmp.unreadBadgeLeft : tmp.unreadBadgeRight, maskColor: tmp.unreadBadgeMask.color };
  const tmp3 = shared_components_BadgeDefault;
  return React3(tmp3, obj);
});
let closure_8 = tmp6;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/IconActionButton.tsx");

export default tmp5;
export const ICON_ACTION_BUTTON_SIZE = 32;
export const ButtonBadge = tmp6;