// === Module 13961: Badge/Badge ===

// Module 13961 (Badge/Badge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import NumberUtils from "NumberUtils" /* 1888 */;
import shared from "shared" /* 4735 */;
import Text_Text from "Text/Text" /* 4892 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8941 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import BadgeConstants from "BadgeConstants" /* 1190 */;
import createStyles_mod from "createStyles" /* 4896 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let BADGE_PADDING;
let BADGE_SIZE;
let PlatformUtils;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let space;
let str;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ BADGE_MASK_SIZE: metroRequire, BADGE_MASK_UNREAD_SIZE: metroImportDefault, BADGE_PADDING, BADGE_SIZE } = BadgeConstants);
const BADGE_SIZE_UNREAD = BadgeConstants.BADGE_SIZE_UNREAD;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { badgeMask: { position: "absolute", bottom: -BADGE_PADDING, right: -BADGE_PADDING, padding: BADGE_PADDING, zIndex: 1 }, badge: obj2, badgeText: obj3, experimentalBadgeText: obj4, noCount: size, unread: obj5, mention: obj6, lowImportanceMention: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG }, eventsMentionBadge: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG } };
obj2 = { paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: nativeDefault.colors.WHITE, fontSize: 12, lineHeight: PlatformUtils ? space.PX_12 : space.PX_16, fontFamily: Fonts.PRIMARY_BOLD, textAlign: "center", textAlignVertical: str };
PlatformUtils = PlatformUtils_mod;
PlatformUtils.isAndroid();
space = nativeDefault.space;
PlatformUtils = PlatformUtils_mod;
str = undefined;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
obj4 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: nativeDefault.colors.WHITE, textAlign: "center" };
size = { width: 5, height: 5, borderRadius: 2.5, backgroundColor: nativeDefault.colors.WHITE };
obj5 = { backgroundColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG });
({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG });
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityElementsHidden;
  let accessibilityLabel;
  let accessible;
  let dotStyle;
  let eventsMentionBadge;
  let hideCount;
  let importantForAccessibility;
  let isMentionLowImportance;
  let locale;
  let maxValue;
  let style;
  let textStyle;
  let tmp10;
  let tmp11;
  let unreadIndicator;
  let value;
  const obj = react2;
  const cResult = obj.c(29);
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
  const tmp7 = undefined !== isMentionLowImportance && isMentionLowImportance;
  const tmp8 = closure_11();
  const tmpResult = shared;
  const themeContext = tmpResult.useThemeContext();
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
  const tmpResult4 = get_initialized;
  const stateFromStores = tmpResult4.useStateFromStores(tmp10, tmp11);
  if (undefined !== unreadIndicator && unreadIndicator) {
    let tmp14;
    let tmp15;
    if (0 === value) {
      tmp14 = BADGE_SIZE_UNREAD;
    }
    if (cResult[2] !== tmp14) {
      const obj2 = { height: tmp14, minWidth: tmp14 };
      cResult[2] = tmp14;
      cResult[3] = obj2;
      tmp15 = obj2;
    } else {
      tmp15 = cResult[3];
    }
    if (undefined !== unreadIndicator && unreadIndicator) {
      let unread;
      if (0 === value) {
        unread = tmp8.unread;
      }
      if (eventsMentionBadge2) {
        eventsMentionBadge2 = tmp8.eventsMentionBadge;
      }
      if (cResult[4] === style) {
        if (cResult[5] === tmp8.badge) {
          if (cResult[6] === tmp15) {
            if (cResult[7] === unread) {
              let tmp16;
              let tmp17;
              if (cResult[8] === eventsMentionBadge2) {
                tmp16 = cResult[9];
              }
              if (value > 0) {
                let tmp19;
                if (cResult[10] === dotStyle) {
                  if (cResult[11] === (undefined !== hideCount && hideCount)) {
                    if (cResult[12] === flag) {
                      if (cResult[13] === stateFromStores) {
                        if (cResult[14] === num) {
                          if (cResult[15] === tmp8.badgeText) {
                            if (cResult[16] === tmp8.experimentalBadgeText) {
                              if (cResult[17] === tmp8.noCount) {
                                if (cResult[18] === textStyle) {
                                  if (cResult[19] === (undefined !== unreadIndicator && unreadIndicator)) {
                                    let tmp18;
                                    if (cResult[20] === value) {
                                      tmp18 = cResult[21];
                                    }
                                    if (cResult[22] === (undefined !== accessibilityElementsHidden && accessibilityElementsHidden)) {
                                      if (cResult[23] === accessibilityLabel) {
                                        if (cResult[24] === accessible) {
                                          if (cResult[25] === tmp16) {
                                            if (cResult[26] === str) {
                                              let tmp25;
                                              if (cResult[27] === tmp18) {
                                                tmp25 = cResult[28];
                                              }
                                              tmp17 = tmp25;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const tmp28 = <View pointerEvents="none" style={tmp16} accessible={accessible} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={undefined !== accessibilityElementsHidden && accessibilityElementsHidden} importantForAccessibility={str}>{tmp18}</View>;
                                    cResult[22] = undefined !== accessibilityElementsHidden && accessibilityElementsHidden;
                                    cResult[23] = accessibilityLabel;
                                    cResult[24] = accessible;
                                    cResult[25] = tmp16;
                                    cResult[26] = str;
                                    cResult[27] = tmp18;
                                    cResult[28] = tmp28;
                                    tmp25 = tmp28;
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
                if (!(undefined !== unreadIndicator && unreadIndicator)) {
                  let tmp20Result;
                  if (undefined !== hideCount && hideCount) {
                    const items1 = [tmp8.noCount, dotStyle];
                    tmp20Result = <View style={items1} />;
                  } else if (flag) {
                    const items2 = [tmp8.experimentalBadgeText, textStyle];
                    const Text = Text_Text.Text;
                    const _Math2 = Math;
                    tmp20Result = <Text variant="experimental/body-xs/semibold" color="none" style={items2} lineClamp={1} allowFontScaling={false}>{NumberUtils.humanizeValue(Math.min(value, num), stateFromStores)}</Text>;
                    const tmpResult5 = NumberUtils;
                  } else {
                    const items3 = [tmp8.badgeText, textStyle];
                    LegacyText_LegacyTextDefault;
                    const _Math = Math;
                    tmp20Result = <tmp22 style={items3} numberOfLines={1} allowFontScaling={false}>{NumberUtils.humanizeValue(Math.min(value, num), stateFromStores)}</tmp22>;
                    const tmpResult6 = NumberUtils;
                  }
                  tmp19 = tmp20Result;
                } else {
                  tmp19 = null;
                }
                cResult[10] = dotStyle;
                cResult[11] = undefined !== hideCount && hideCount;
                cResult[12] = flag;
                cResult[13] = stateFromStores;
                cResult[14] = num;
                cResult[15] = tmp8.badgeText;
                cResult[16] = tmp8.experimentalBadgeText;
                cResult[17] = tmp8.noCount;
                cResult[18] = textStyle;
                cResult[19] = undefined !== unreadIndicator && unreadIndicator;
                cResult[20] = value;
                cResult[21] = tmp19;
                tmp18 = tmp19;
              } else {
                tmp17 = null;
              }
              return tmp17;
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
}) : ((value) => {
  let accessibilityElementsHidden;
  let accessibilityLabel;
  let accessible;
  let dotStyle;
  let textStyle;
  let tmp8Result2;
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
  const tmp = closure_11();
  let closure_5 = tmp;
  let tmp3 = flag2;
  let obj = require("shared");
  const themeContext = obj.useThemeContext();
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
  let items = [closure_5];
  const tmp2Result = require("get initialized");
  const stateFromStores = tmp2Result.useStateFromStores(items, () => closure_5.locale);
  const items1 = [tmp, style, flag2, value, flag3, flag4];
  if (value > 0) {
    let tmp10;
    if (!flag2) {
      let tmp8Result;
      if (flag) {
        const items2 = [tmp.noCount, dotStyle];
        tmp8Result = <tmp9 style={items2} />;
      } else if (flag5) {
        const items3 = [tmp.experimentalBadgeText, textStyle];
        const Text = tmp2(tmp3[13]).Text;
        const _Math2 = Math;
        tmp8Result = <Text variant="experimental/body-xs/semibold" color="none" style={items3} lineClamp={1} allowFontScaling={false}>{require("NumberUtils").humanizeValue(Math.min(value, num), stateFromStores)}</Text>;
        const tmp2Result3 = require("NumberUtils");
      } else {
        const items4 = [tmp.badgeText, textStyle];
        style(tmp3[15]);
        const _Math = Math;
        tmp8Result = <tmp12 style={items4} numberOfLines={1} allowFontScaling={false}>{require("NumberUtils").humanizeValue(Math.min(value, num), stateFromStores)}</tmp12>;
        const tmp2Result4 = require("NumberUtils");
      }
      tmp10 = tmp8Result;
    } else {
      tmp10 = null;
    }
    tmp8Result2 = <tmp9 pointerEvents="none" style={tmp6} accessible={accessible} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={accessibilityElementsHidden} importantForAccessibility={str}>{tmp10}</tmp9>;
  } else {
    tmp8Result2 = null;
  }
  return tmp8Result2;
});
let closure_12 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityElementsHidden;
  let accessibilityLabel;
  let dotStyle;
  let hideCount;
  let importantForAccessibility;
  let isMentionLowImportance;
  let maskStyle;
  let maxValue;
  let onLayout;
  let style;
  let textStyle;
  let unreadIndicator;
  let value;
  const obj = react2;
  const cResult = obj.c(23);
  ({ style, maskStyle, dotStyle, textStyle, value, maxValue, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, onLayout, hideCount, unreadIndicator, isMentionLowImportance } = arg0);
  const tmp3 = closure_11();
  if (undefined !== unreadIndicator && unreadIndicator) {
    let tmp4;
    if (0 === value) {
      tmp4 = metroImportDefault;
    }
    const result = tmp4 / 2;
    if (cResult[0] === tmp4) {
      let tmp6;
      if (cResult[1] === result) {
        tmp6 = cResult[2];
      }
      if (cResult[3] === maskStyle) {
        if (cResult[4] === tmp3.badgeMask) {
          let tmp7;
          let tmp8;
          if (cResult[5] === tmp6) {
            tmp7 = cResult[6];
          }
          if (value > 0) {
            if (cResult[7] === accessibilityElementsHidden) {
              if (cResult[8] === accessibilityLabel) {
                if (cResult[9] === dotStyle) {
                  if (cResult[10] === hideCount) {
                    if (cResult[11] === importantForAccessibility) {
                      if (cResult[12] === isMentionLowImportance) {
                        if (cResult[13] === maxValue) {
                          if (cResult[14] === style) {
                            if (cResult[15] === textStyle) {
                              if (cResult[16] === (undefined !== unreadIndicator && unreadIndicator)) {
                                let tmp9;
                                if (cResult[17] === value) {
                                  tmp9 = cResult[18];
                                }
                                if (cResult[19] === tmp7) {
                                  if (cResult[20] === onLayout) {
                                    let tmp13;
                                    if (cResult[21] === tmp9) {
                                      tmp13 = cResult[22];
                                    }
                                    tmp8 = tmp13;
                                  }
                                }
                                const tmp16 = <View pointerEvents="none" style={tmp7} onLayout={onLayout}>{tmp9}</View>;
                                cResult[19] = tmp7;
                                cResult[20] = onLayout;
                                cResult[21] = tmp9;
                                cResult[22] = tmp16;
                                tmp13 = tmp16;
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
            const tmp12 = <closure_12 style={style} textStyle={textStyle} dotStyle={dotStyle} value={value} maxValue={maxValue} hideCount={hideCount} unreadIndicator={undefined !== unreadIndicator && unreadIndicator} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={accessibilityElementsHidden} importantForAccessibility={importantForAccessibility} isMentionLowImportance={isMentionLowImportance} />;
            cResult[7] = accessibilityElementsHidden;
            cResult[8] = accessibilityLabel;
            cResult[9] = dotStyle;
            cResult[10] = hideCount;
            cResult[11] = importantForAccessibility;
            cResult[12] = isMentionLowImportance;
            cResult[13] = maxValue;
            cResult[14] = style;
            cResult[15] = textStyle;
            cResult[16] = undefined !== unreadIndicator && unreadIndicator;
            cResult[17] = value;
            cResult[18] = tmp12;
            tmp9 = tmp12;
          } else {
            tmp8 = null;
          }
          return tmp8;
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
  tmp4 = metroRequire;
}) : ((maskStyle) => {
  let accessibilityElementsHidden;
  let accessibilityLabel;
  let dotStyle;
  let hideCount;
  let importantForAccessibility;
  let maxValue;
  let onLayout;
  let style;
  let textStyle;
  let tmp3;
  maskStyle = maskStyle.maskStyle;
  const value = maskStyle.value;
  importDefault = value;
  let flag = maskStyle.unreadIndicator;
  ({ style, dotStyle, textStyle, maxValue, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, onLayout, hideCount } = maskStyle);
  if (flag === undefined) {
    flag = false;
  }
  const isMentionLowImportance = maskStyle.isMentionLowImportance;
  const tmp = closure_11();
  const badgeMask = tmp;
  let items = [tmp, maskStyle, flag, value];
  if (value > 0) {
    tmp3 = <View pointerEvents="none" style={tmp2} onLayout={onLayout}>{null}</View>;
  } else {
    tmp3 = null;
  }
  return tmp3;
});
size = size_mod;
let result = size.fileFinishedImporting("design/void/Badge/native/Badge.tsx");

export default tmp5;
export const MaskedBadge = tmp6;