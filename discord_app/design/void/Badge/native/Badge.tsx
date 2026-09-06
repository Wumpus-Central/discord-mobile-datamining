// === Module 14179: Badge/Badge ===

// Module 14179 (Badge/Badge)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;

let require = fn;
class Badge {
  constructor(arg0) {
    value = global.value;
    closure_0 = value;
    style = global.style;
    ({ textStyle, accessibilityElementsHidden } = global);
    ({ dotStyle, accessible, accessibilityLabel } = global);
    if (accessibilityElementsHidden === undefined) {
      accessibilityElementsHidden = false;
    }
    str = global.importantForAccessibility;
    if (str === undefined) {
      str = "auto";
    }
    flag = global.hideCount;
    if (flag === undefined) {
      flag = false;
    }
    num = global.maxValue;
    if (num === undefined) {
      num = Infinity;
    }
    flag2 = global.unreadIndicator;
    if (flag2 === undefined) {
      flag2 = false;
    }
    c2 = flag2;
    flag3 = global.eventsMentionBadge;
    if (flag3 === undefined) {
      flag3 = false;
    }
    c3 = flag3;
    flag4 = global.isMentionLowImportance;
    if (flag4 === undefined) {
      flag4 = false;
    }
    c4 = flag4;
    closure_5 = undefined;
    items2 = closure_11();
    closure_5 = items2;
    tmp = closure_0;
    tmp2 = c2;
    obj = closure_0(c2[9]);
    themeContext = obj.useThemeContext();
    flag5 = undefined;
    if (themeContext != null) {
      enabledExperiments = themeContext.enabledExperiments;
      if (enabledExperiments != null) {
        str2 = "mana-type-consolidation";
        flag5 = enabledExperiments.includes("mana-type-consolidation");
      }
    }
    if (flag5 == null) {
      flag5 = false;
    }
    tmpResult = tmp(tmp2[10]);
    items = [];
    items[0] = closure_5;
    stateFromStores = tmpResult.useStateFromStores(items, () => items2.locale);
    items1 = [, , , , , ];
    items1[0] = items2;
    items1[1] = style;
    items1[2] = flag2;
    items1[3] = value;
    items1[4] = flag3;
    items1[5] = flag4;
    if (value > 0) {
      tmp7 = jsx;
      tmp8 = c4;
      obj = { pointerEvents: "none", style: null, accessible: null, accessibilityLabel: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
      obj.style = tmp5;
      obj.accessible = accessible;
      obj.accessibilityLabel = accessibilityLabel;
      obj.accessibilityElementsHidden = accessibilityElementsHidden;
      obj.importantForAccessibility = str;
      if (flag2) {
        tmp9 = null;
        if (0 === value) {
          obj.children = null;
          tmp7Result = tmp7(tmp8, obj);
        }
      }
      if (flag) {
        obj1 = { style: null };
        items2 = [, ];
        items2[0] = items2.noCount;
        items2[1] = dotStyle;
        obj1.style = items2;
        tmp7Result1 = tmp7(tmp8, obj1);
      } else if (flag5) {
        obj2 = { variant: "experimental/body-xs/semibold", color: "none", style: null, lineClamp: 1, allowFontScaling: false, children: null };
        items3 = [, ];
        items3[0] = items2.experimentalBadgeText;
        items3[1] = textStyle;
        obj2.style = items3;
        tmpResult1 = tmp(tmp2[12]);
        tmp14 = globalThis;
        _Math2 = Math;
        obj2.children = tmpResult1.humanizeValue(Math.min(value, num), stateFromStores);
        tmp7Result1 = tmp7(tmp(tmp2[11]).Text, obj2);
      } else {
        tmp10 = style;
        obj3 = { style: null, numberOfLines: 1, allowFontScaling: false, children: null };
        items4 = [, ];
        items4[0] = items2.badgeText;
        items4[1] = textStyle;
        obj3.style = items4;
        tmp11 = style(tmp2[13]);
        tmpResult2 = tmp(tmp2[12]);
        tmp12 = globalThis;
        _Math = Math;
        obj3.children = tmpResult2.humanizeValue(Math.min(value, num), stateFromStores);
        tmp7Result1 = tmp7(tmp11, obj3);
      }
      tmp15 = tmp7Result1;
    } else {
      tmp7Result = null;
    }
    return tmp7Result;
  }
}
const View = fn(17).View;
const BadgeConstants = fn(1180);
({ BADGE_MASK_SIZE: metroRequire, BADGE_MASK_UNREAD_SIZE: closure_7, BADGE_PADDING, BADGE_SIZE } = BadgeConstants);
const BADGE_SIZE_UNREAD = BadgeConstants.BADGE_SIZE_UNREAD;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { badgeMask: { position: "absolute", bottom: -BADGE_PADDING, right: -BADGE_PADDING, padding: BADGE_PADDING, zIndex: 1 }, badge: null, badgeText: null, experimentalBadgeText: null, noCount: null, unread: null, mention: null, lowImportanceMention: null, eventsMentionBadge: null };
createStyles = { paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createStyles.badge = createStyles;
let obj1 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: nativeDefault.colors.WHITE, fontSize: 12, lineHeight: null, fontFamily: null, textAlign: "center", textAlignVertical: null };
let PlatformUtils = fn(1115);
PlatformUtils = PlatformUtils.isAndroid();
const space = nativeDefault.space;
obj1.lineHeight = PlatformUtils ? space.PX_12 : space.PX_16;
obj1.fontFamily = fn(1074).Fonts.PRIMARY_BOLD;
PlatformUtils = fn(1115);
let str;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
obj1.textAlignVertical = str;
createStyles.badgeText = obj1;
let obj2 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: nativeDefault.colors.WHITE };
PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  const obj3 = { lineHeight: nativeDefault.space.PX_12, textAlignVertical: "center" };
  PlatformUtils = obj3;
} else {
  PlatformUtils = {};
}
Object.assign(PlatformUtils);
obj2.textAlign = "center";
createStyles.experimentalBadgeText = obj2;
let size = { width: 5, height: 5, borderRadius: 2.5, backgroundColor: nativeDefault.colors.WHITE };
createStyles.noCount = size;
PlatformUtils = { backgroundColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
createStyles.unread = PlatformUtils;
createStyles.mention = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
PlatformUtils = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
createStyles.lowImportanceMention = PlatformUtils;
const obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
createStyles.eventsMentionBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("design/void/Badge/native/Badge.tsx");

export default Badge;
export const MaskedBadge = function MaskedBadge(maskStyle) {
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
    obj = { style, textStyle, dotStyle, value, maxValue, hideCount, unreadIndicator: flag, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, isMentionLowImportance: maskStyle.isMentionLowImportance };
    obj.children = <Badge style={style} textStyle={textStyle} dotStyle={dotStyle} value={value} maxValue={maxValue} hideCount={hideCount} unreadIndicator={flag} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={accessibilityElementsHidden} importantForAccessibility={importantForAccessibility} isMentionLowImportance={maskStyle.isMentionLowImportance} />;
    let tmp3 = <View style={style} textStyle={textStyle} dotStyle={dotStyle} value={value} maxValue={maxValue} hideCount={hideCount} unreadIndicator={flag} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={accessibilityElementsHidden} importantForAccessibility={importantForAccessibility} isMentionLowImportance={maskStyle.isMentionLowImportance} />;
  } else {
    tmp3 = null;
  }
  return tmp3;
};