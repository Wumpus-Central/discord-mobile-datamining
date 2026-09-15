// === Module 14277: Badge/Badge ===

// Module 14277 (Badge/Badge)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2026 */;

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
      obj1 = { pointerEvents: "none", style: null, accessible: null, accessibilityLabel: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
      obj1.style = tmp5;
      obj1.accessible = accessible;
      obj1.accessibilityLabel = accessibilityLabel;
      obj1.accessibilityElementsHidden = accessibilityElementsHidden;
      obj1.importantForAccessibility = str;
      if (flag2) {
        tmp9 = null;
        if (0 === value) {
          obj1.children = null;
          tmp7Result = tmp7(tmp8, obj1);
        }
      }
      if (flag) {
        obj9 = { style: null };
        items2 = [, ];
        items2[0] = items2.noCount;
        items2[1] = dotStyle;
        obj9.style = items2;
        tmp7Result1 = tmp7(tmp8, obj9);
      } else if (flag5) {
        obj10 = { variant: "experimental/body-xs/semibold", color: "none", style: null, lineClamp: 1, allowFontScaling: false, children: null };
        items3 = [, ];
        items3[0] = items2.experimentalBadgeText;
        items3[1] = textStyle;
        obj10.style = items3;
        tmpResult1 = tmp(tmp2[12]);
        tmp14 = globalThis;
        _Math2 = Math;
        obj10.children = tmpResult1.humanizeValue(Math.min(value, num), stateFromStores);
        tmp7Result1 = tmp7(tmp(tmp2[11]).Text, obj10);
      } else {
        tmp10 = style;
        obj11 = { style: null, numberOfLines: 1, allowFontScaling: false, children: null };
        items4 = [, ];
        items4[0] = items2.badgeText;
        items4[1] = textStyle;
        obj11.style = items4;
        tmp11 = style(tmp2[13]);
        tmpResult2 = tmp(tmp2[12]);
        tmp12 = globalThis;
        _Math = Math;
        obj11.children = tmpResult2.humanizeValue(Math.min(value, num), stateFromStores);
        tmp7Result1 = tmp7(tmp11, obj11);
      }
      tmp15 = tmp7Result1;
    } else {
      tmp7Result = null;
    }
    return tmp7Result;
  }
}
const View = fn(17).View;
const BadgeConstants = fn(1179);
({ BADGE_MASK_SIZE: metroRequire, BADGE_MASK_UNREAD_SIZE: closure_7, BADGE_PADDING, BADGE_SIZE } = BadgeConstants);
const BADGE_SIZE_UNREAD = BadgeConstants.BADGE_SIZE_UNREAD;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj2 = { badgeMask: { position: "absolute", bottom: -BADGE_PADDING, right: -BADGE_PADDING, padding: BADGE_PADDING, zIndex: 1 }, badge: { paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center", overflow: "hidden" }, badgeText: null, experimentalBadgeText: null, noCount: null, unread: null, mention: null, lowImportanceMention: null, eventsMentionBadge: null };
let obj4 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: nativeDefault.colors.WHITE, fontSize: 12, lineHeight: null, fontFamily: null, textAlign: "center", textAlignVertical: null };
let PlatformUtils = fn(1364);
PlatformUtils = PlatformUtils.isAndroid();
const space = nativeDefault.space;
obj4.lineHeight = PlatformUtils ? space.PX_12 : space.PX_16;
obj4.fontFamily = fn(1074).Fonts.PRIMARY_BOLD;
PlatformUtils = fn(1364);
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
    const obj2 = { style, textStyle, dotStyle, value, maxValue, hideCount, unreadIndicator: flag, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, isMentionLowImportance: maskStyle.isMentionLowImportance };
    obj.children = <Badge style={style} textStyle={textStyle} dotStyle={dotStyle} value={value} maxValue={maxValue} hideCount={hideCount} unreadIndicator={flag} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={accessibilityElementsHidden} importantForAccessibility={importantForAccessibility} isMentionLowImportance={maskStyle.isMentionLowImportance} />;
    let tmp3 = <View pointerEvents="none" style={tmp2} onLayout={onLayout}>{null}</View>;
  } else {
    tmp3 = null;
  }
  return tmp3;
};