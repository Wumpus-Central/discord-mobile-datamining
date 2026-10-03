// === Module 13941: Badge/Badge ===

// Module 13941 (Badge/Badge)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import NumberUtils from "NumberUtils" /* 1888 */;
import shared from "shared" /* 4729 */;
import Text_Text from "Text/Text" /* 4886 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8912 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;

require = fn;
const View = fn(17).View;
const BadgeConstants = fn(1190);
({ BADGE_MASK_SIZE: metroRequire, BADGE_MASK_UNREAD_SIZE: closure_7, BADGE_PADDING, BADGE_SIZE } = BadgeConstants);
const BADGE_SIZE_UNREAD = BadgeConstants.BADGE_SIZE_UNREAD;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { badgeMask: { position: "absolute", bottom: -BADGE_PADDING, right: -BADGE_PADDING, padding: BADGE_PADDING, zIndex: 1 }, badge: { paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center", overflow: "hidden" }, badgeText: null, experimentalBadgeText: null, noCount: null, unread: null, mention: null, lowImportanceMention: null, eventsMentionBadge: null };
let obj4 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: nativeDefault.colors.WHITE, fontSize: 12, lineHeight: null, fontFamily: null, textAlign: "center", textAlignVertical: null };
let PlatformUtils = fn(1369);
PlatformUtils = PlatformUtils.isAndroid();
const space = nativeDefault.space;
obj4.lineHeight = PlatformUtils ? space.PX_12 : space.PX_16;
obj4.fontFamily = fn(1085).Fonts.PRIMARY_BOLD;
PlatformUtils = fn(1369);
let str;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
obj4.textAlignVertical = str;
obj2.badgeText = obj4;
let obj3 = { paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj2.experimentalBadgeText = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: nativeDefault.colors.WHITE, textAlign: "center" };
let size = { width: 5, height: 5, borderRadius: 2.5, backgroundColor: nativeDefault.colors.WHITE };
obj2.noCount = size;
const obj7 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: nativeDefault.colors.WHITE, textAlign: "center" };
obj2.unread = { backgroundColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
const obj8 = { backgroundColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
obj2.mention = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
const obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
obj2.lowImportanceMention = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
const obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.eventsMentionBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(29);
  ({ value, style, dotStyle, textStyle, accessible, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, hideCount, maxValue, unreadIndicator, eventsMentionBadge, isMentionLowImportance } = arg0);
  let str = "auto";
  if (undefined !== importantForAccessibility) {
    str = importantForAccessibility;
  }
  let num = Infinity;
  if (undefined !== maxValue) {
    num = maxValue;
  }
  let eventsMentionBadge2 = undefined !== eventsMentionBadge && eventsMentionBadge;
  const tmp8 = closure_11();
  const tmp7 = undefined !== isMentionLowImportance && isMentionLowImportance;
  const themeContext = shared.useThemeContext();
  let flag;
  if (themeContext != null) {
    const enabledExperiments = themeContext.enabledExperiments;
    if (enabledExperiments != null) {
      flag = enabledExperiments.includes("mana-type-consolidation");
    }
  }
  if (flag == null) {
    flag = false;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function s() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult = shared;
  const stateFromStores = initialize.useStateFromStores(tmp10, tmp11);
  if (undefined !== unreadIndicator && unreadIndicator) {
    if (0 === value) {
      let tmp14 = BADGE_SIZE_UNREAD;
    }
    if (cResult[2] !== tmp14) {
      const obj2 = { height: tmp14, minWidth: tmp14 };
      cResult[2] = tmp14;
      cResult[3] = obj2;
      let tmp15 = obj2;
    } else {
      tmp15 = cResult[3];
    }
    if (tmp6) {
      if (0 === value) {
        let unread = tmp8.unread;
      }
      if (eventsMentionBadge2) {
        eventsMentionBadge2 = tmp8.eventsMentionBadge;
      }
      if (cResult[4] === style) {
        if (cResult[5] === tmp8.badge) {
          if (cResult[6] === tmp15) {
            if (cResult[7] === unread) {
              if (cResult[8] === eventsMentionBadge2) {
                let tmp16 = cResult[9];
              }
              if (value <= 0) {
                if (!tmp6) {
                  return null;
                }
              }
              if (cResult[10] === dotStyle) {
                if (cResult[11] === tmp5) {
                  if (cResult[12] === flag) {
                    if (cResult[13] === stateFromStores) {
                      if (cResult[14] === num) {
                        if (cResult[15] === tmp8.badgeText) {
                          if (cResult[16] === tmp8.experimentalBadgeText) {
                            if (cResult[17] === tmp8.noCount) {
                              if (cResult[18] === textStyle) {
                                if (cResult[19] === tmp6) {
                                  if (cResult[20] === value) {
                                    let tmp18 = cResult[21];
                                  }
                                  if (cResult[22] === tmp4) {
                                    if (cResult[23] === accessibilityLabel) {
                                      if (cResult[24] === accessible) {
                                        if (cResult[25] === tmp16) {
                                          if (cResult[26] === str) {
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj3 = { pointerEvents: "none", style: tmp16, accessible, accessibilityLabel, accessibilityElementsHidden: tmp4, importantForAccessibility: str, children: tmp18 };
                                  const tmp29 = <View pointerEvents="none" style={tmp16} accessible={accessible} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={tmp4} importantForAccessibility={str}>{tmp18}</View>;
                                  cResult[22] = tmp4;
                                  cResult[23] = accessibilityLabel;
                                  cResult[24] = accessible;
                                  cResult[25] = tmp16;
                                  cResult[26] = str;
                                  cResult[27] = tmp18;
                                  cResult[28] = tmp29;
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
              if (tmp6) {
                if (0 === value) {
                  cResult[10] = dotStyle;
                  cResult[11] = tmp5;
                  cResult[12] = flag;
                  cResult[13] = stateFromStores;
                  cResult[14] = num;
                  cResult[15] = tmp8.badgeText;
                  cResult[16] = tmp8.experimentalBadgeText;
                  cResult[17] = tmp8.noCount;
                  cResult[18] = textStyle;
                  cResult[19] = tmp6;
                  cResult[20] = value;
                  cResult[21] = null;
                  tmp18 = null;
                }
              }
              if (tmp5) {
                const obj4 = { style: null };
                const items1 = [tmp8.noCount, dotStyle];
                obj4.style = items1;
                let tmp20Result = <View style={null} />;
              } else if (flag) {
                const obj5 = { variant: "experimental/body-xs/semibold", color: "none", style: null, lineClamp: 1, allowFontScaling: false, children: null };
                const items2 = [tmp8.experimentalBadgeText, textStyle];
                obj5.style = items2;
                const _Math2 = Math;
                obj5.children = NumberUtils.humanizeValue(Math.min(value, num), stateFromStores);
                tmp20Result = jsx(Text_Text.Text, { variant: "experimental/body-xs/semibold", color: "none", style: null, lineClamp: 1, allowFontScaling: false, children: null });
                const tmpResult5 = NumberUtils;
              } else {
                const obj6 = { style: null, numberOfLines: 1, allowFontScaling: false, children: null };
                const items3 = [tmp8.badgeText, textStyle];
                obj6.style = items3;
                const _Math = Math;
                obj6.children = NumberUtils.humanizeValue(Math.min(value, num), stateFromStores);
                tmp20Result = <tmp22 style={null} numberOfLines={1} allowFontScaling={false}>{null}</tmp22>;
                const tmpResult6 = NumberUtils;
              }
            }
          }
        }
      }
      const items4 = [tmp8.badge, tmp15, unread, eventsMentionBadge2, style];
      cResult[4] = style;
      cResult[5] = tmp8.badge;
      cResult[6] = tmp15;
      cResult[7] = unread;
      cResult[8] = eventsMentionBadge2;
      cResult[9] = items4;
      tmp16 = items4;
    }
    unread = tmp7 ? tmp8.lowImportanceMention : tmp8.mention;
  }
  tmp14 = BADGE_SIZE;
  const tmpResult4 = initialize;
}) : ((value) => {
  value = value.value;
  require = value;
  const style = value.style;
  ({ textStyle, accessibilityElementsHidden } = value);
  ({ dotStyle, accessible, accessibilityLabel } = value);
  if (accessibilityElementsHidden === undefined) {
    accessibilityElementsHidden = false;
  }
  let str = value.importantForAccessibility;
  if (str === undefined) {
    str = "auto";
  }
  let flag = value.hideCount;
  if (flag === undefined) {
    flag = false;
  }
  let num = value.maxValue;
  if (num === undefined) {
    num = Infinity;
  }
  let flag2 = value.unreadIndicator;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = value.eventsMentionBadge;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = value.isMentionLowImportance;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let items2 = closure_11();
  const themeContext = require("shared").useThemeContext();
  let flag5;
  if (themeContext != null) {
    const enabledExperiments = themeContext.enabledExperiments;
    if (enabledExperiments != null) {
      flag5 = enabledExperiments.includes("mana-type-consolidation");
    }
  }
  if (flag5 == null) {
    flag5 = false;
  }
  let obj = require("shared");
  let items = [items2];
  const stateFromStores = require("initialize").useStateFromStores(items, () => items2.locale);
  const items1 = [items2, style, flag2, value, flag3, flag4];
  if (value > 0) {
    const obj2 = { pointerEvents: "none", style: tmp5, accessible, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility: str, children: null };
    if (flag2) {
      if (0 === value) {
        obj2.children = null;
        let tmp7Result = <tmp8 {...obj2} />;
      }
    }
    if (flag) {
      const obj3 = { style: null };
      items2 = [, ];
      items2[0] = items2.noCount;
      items2[1] = dotStyle;
      obj3.style = items2;
      let tmp7Result2 = <tmp8 style={null} />;
    } else if (flag5) {
      const obj4 = { variant: "experimental/body-xs/semibold", color: "none", style: null, lineClamp: 1, allowFontScaling: false, children: null };
      const items3 = [items2.experimentalBadgeText, textStyle];
      obj4.style = items3;
      const _Math2 = Math;
      obj4.children = tmp(tmp2[14]).humanizeValue(Math.min(value, num), stateFromStores);
      tmp7Result2 = jsx(tmp(tmp2[13]).Text, { variant: "experimental/body-xs/semibold", color: "none", style: null, lineClamp: 1, allowFontScaling: false, children: null });
      const tmpResult3 = tmp(tmp2[14]);
    } else {
      const obj5 = { style: null, numberOfLines: 1, allowFontScaling: false, children: null };
      const items4 = [items2.badgeText, textStyle];
      obj5.style = items4;
      const tmp11 = style(tmp2[15]);
      const _Math = Math;
      obj5.children = tmp(tmp2[14]).humanizeValue(Math.min(value, num), stateFromStores);
      tmp7Result2 = <tmp11 style={null} numberOfLines={1} allowFontScaling={false}>{null}</tmp11>;
      const tmpResult4 = tmp(tmp2[14]);
    }
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
});
let closure_12 = tmp4;
ReactCompilerGating = fn(558);
const obj11 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
size = fn(2);
let result = size.fileFinishedImporting("design/void/Badge/native/Badge.tsx");

export default tmp4;
export const MaskedBadge = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(23);
  ({ style, maskStyle, dotStyle, textStyle, value, maxValue, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, onLayout, hideCount, unreadIndicator, isMentionLowImportance } = arg0);
  const tmp3 = closure_11();
  if (undefined !== unreadIndicator && unreadIndicator) {
    if (0 === value) {
      let tmp4 = React5;
    }
    const result = tmp4 / 2;
    if (cResult[0] === tmp4) {
      if (cResult[1] === result) {
        let tmp6 = cResult[2];
      }
      if (cResult[3] === maskStyle) {
        if (cResult[4] === tmp3.badgeMask) {
          if (cResult[5] === tmp6) {
            let tmp7 = cResult[6];
          }
          if (value <= 0) {
            if (!tmp2) {
              return null;
            }
          }
          if (cResult[7] === accessibilityElementsHidden) {
            if (cResult[8] === accessibilityLabel) {
              if (cResult[9] === dotStyle) {
                if (cResult[10] === hideCount) {
                  if (cResult[11] === importantForAccessibility) {
                    if (cResult[12] === isMentionLowImportance) {
                      if (cResult[13] === maxValue) {
                        if (cResult[14] === style) {
                          if (cResult[15] === textStyle) {
                            if (cResult[16] === tmp2) {
                              if (cResult[17] === value) {
                                let tmp9 = cResult[18];
                              }
                              if (cResult[19] === tmp7) {
                                if (cResult[20] === onLayout) {
                                }
                              }
                              const obj2 = { pointerEvents: "none", style: tmp7, onLayout, children: tmp9 };
                              const tmp16 = <View pointerEvents="none" style={tmp7} onLayout={onLayout}>{tmp9}</View>;
                              cResult[19] = tmp7;
                              cResult[20] = onLayout;
                              cResult[21] = tmp9;
                              cResult[22] = tmp16;
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
          const obj3 = { style, textStyle, dotStyle, value, maxValue, hideCount, unreadIndicator: tmp2, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, isMentionLowImportance };
          const tmp12 = <closure_12 style={style} textStyle={textStyle} dotStyle={dotStyle} value={value} maxValue={maxValue} hideCount={hideCount} unreadIndicator={tmp2} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={accessibilityElementsHidden} importantForAccessibility={importantForAccessibility} isMentionLowImportance={isMentionLowImportance} />;
          cResult[7] = accessibilityElementsHidden;
          cResult[8] = accessibilityLabel;
          cResult[9] = dotStyle;
          cResult[10] = hideCount;
          cResult[11] = importantForAccessibility;
          cResult[12] = isMentionLowImportance;
          cResult[13] = maxValue;
          cResult[14] = style;
          cResult[15] = textStyle;
          cResult[16] = tmp2;
          cResult[17] = value;
          cResult[18] = tmp12;
          tmp9 = tmp12;
        }
      }
      const items = [tmp3.badgeMask, tmp6, maskStyle];
      cResult[3] = maskStyle;
      cResult[4] = tmp3.badgeMask;
      cResult[5] = tmp6;
      cResult[6] = items;
      tmp7 = items;
    }
    const obj4 = { minWidth: tmp4, height: tmp4, borderRadius: result };
    cResult[0] = tmp4;
    cResult[1] = result;
    cResult[2] = obj4;
    tmp6 = obj4;
  }
  tmp4 = timestampProducer;
}) : ((maskStyle) => {
  maskStyle = maskStyle.maskStyle;
  value = maskStyle.value;
  importDefault = value;
  let flag = maskStyle.unreadIndicator;
  ({ style, dotStyle, textStyle, maxValue, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, onLayout, hideCount } = maskStyle);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_11();
  const badgeMask = tmp;
  let items = [tmp, maskStyle, flag, value];
  if (value > 0) {
    let obj = { pointerEvents: "none", style: tmp2, onLayout, children: null };
    const obj2 = { style, textStyle, dotStyle, value, maxValue, hideCount, unreadIndicator: flag, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, isMentionLowImportance: maskStyle.isMentionLowImportance };
    obj.children = <closure_12 style={style} textStyle={textStyle} dotStyle={dotStyle} value={value} maxValue={maxValue} hideCount={hideCount} unreadIndicator={flag} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={accessibilityElementsHidden} importantForAccessibility={importantForAccessibility} isMentionLowImportance={maskStyle.isMentionLowImportance} />;
    let tmp3 = <View pointerEvents="none" style={tmp2} onLayout={onLayout}>{null}</View>;
  } else {
    tmp3 = null;
  }
  return tmp3;
});