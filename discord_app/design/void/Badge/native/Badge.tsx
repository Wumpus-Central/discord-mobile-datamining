// === Module 16311: Badge/Badge ===

// Module 16311 (Badge/Badge)
import nativeDefault from "native" /* 575 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2186 */;

let require = fn;
class Badge {
  constructor(arg0) {
    value = global.value;
    closure_0 = value;
    style = global.style;
    flag = global.accessibilityElementsHidden;
    ({ dotStyle, textStyle, accessible, accessibilityLabel } = global);
    if (flag === undefined) {
      flag = false;
    }
    str = global.importantForAccessibility;
    if (str === undefined) {
      str = "auto";
    }
    flag2 = global.hideCount;
    if (flag2 === undefined) {
      flag2 = false;
    }
    num = global.maxValue;
    if (num === undefined) {
      num = Infinity;
    }
    flag3 = global.unreadIndicator;
    if (flag3 === undefined) {
      flag3 = false;
    }
    c2 = flag3;
    flag4 = global.eventsMentionBadge;
    if (flag4 === undefined) {
      flag4 = false;
    }
    c3 = flag4;
    flag5 = global.isMentionLowImportance;
    if (flag5 === undefined) {
      flag5 = false;
    }
    c4 = flag5;
    closure_5 = undefined;
    items2 = closure_10();
    closure_5 = items2;
    tmp = closure_0;
    tmp2 = style;
    obj = closure_0(style[7]);
    items = [];
    items[0] = c4;
    items1 = [, , , , , ];
    items1[0] = items2;
    items1[1] = style;
    items1[2] = flag3;
    items1[3] = value;
    items1[4] = flag4;
    items1[5] = flag5;
    stateFromStores = obj.useStateFromStores(items, () => flag5.locale);
    if (value > 0) {
      tmp6 = jsx;
      tmp7 = c3;
      obj1 = { pointerEvents: "none", style: null, accessible: null, accessibilityLabel: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
      obj1.style = tmp4;
      obj1.accessible = accessible;
      obj1.accessibilityLabel = accessibilityLabel;
      obj1.accessibilityElementsHidden = flag;
      obj1.importantForAccessibility = str;
      if (flag3) {
        tmp8 = null;
        if (0 === value) {
          obj1.children = null;
          tmp6Result = tmp6(tmp7, obj1);
        }
      }
      if (flag2) {
        obj6 = { style: null };
        items2 = [, ];
        items2[0] = items2.noCount;
        items2[1] = dotStyle;
        obj6.style = items2;
        tmp6Result1 = tmp6(tmp7, obj6);
      } else {
        obj7 = { variant: "body-xs/semibold", color: "none", style: null, lineClamp: 1, allowFontScaling: false, children: null };
        items3 = [, ];
        items3[0] = items2.badgeText;
        items3[1] = textStyle;
        obj7.style = items3;
        tmpResult = tmp(tmp2[9]);
        tmp9 = globalThis;
        _Math = Math;
        obj7.children = tmpResult.humanizeValue(Math.min(value, num), stateFromStores);
        tmp6Result1 = tmp6(tmp(tmp2[8]).Text, obj7);
      }
      tmp11 = tmp6Result1;
    } else {
      tmp6Result = null;
    }
    return tmp6Result;
  }
}
const View = fn(17).View;
const BadgeConstants = fn(1189);
({ BADGE_MASK_SIZE: hasOwnProperty, BADGE_MASK_UNREAD_SIZE: closure_6, BADGE_PADDING, BADGE_SIZE } = BadgeConstants);
const BADGE_SIZE_UNREAD = BadgeConstants.BADGE_SIZE_UNREAD;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let obj2 = { badgeMask: { position: "absolute", bottom: -BADGE_PADDING, right: -BADGE_PADDING, padding: BADGE_PADDING, zIndex: 1 }, badge: { paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center", overflow: "hidden" }, badgeText: null, noCount: null, unread: null, mention: null, lowImportanceMention: null, eventsMentionBadge: null };
let obj3 = { paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj2.badgeText = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: nativeDefault.colors.WHITE, textAlign: "center" };
let size = { width: 5, height: 5, borderRadius: 2.5, backgroundColor: nativeDefault.colors.WHITE };
obj2.noCount = size;
let obj4 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: nativeDefault.colors.WHITE, textAlign: "center" };
obj2.unread = { backgroundColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
const obj5 = { backgroundColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
obj2.mention = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
const obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
obj2.lowImportanceMention = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
const obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.eventsMentionBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("design/void/Badge/native/Badge.tsx");

export default Badge;
export function MaskedBadge(maskStyle) {
  maskStyle = maskStyle.maskStyle;
  value = maskStyle.value;
  dependencyMap = value;
  let flag = maskStyle.unreadIndicator;
  ({ style, dotStyle, textStyle, maxValue, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, onLayout, hideCount } = maskStyle);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_10();
  const badgeMask = tmp;
  items = [tmp, maskStyle, flag, value];
  if (value > 0) {
    let obj = { pointerEvents: "none", style: tmp2, onLayout, children: null };
    const obj2 = { style, textStyle, dotStyle, value, maxValue, hideCount, unreadIndicator: flag, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, isMentionLowImportance: maskStyle.isMentionLowImportance };
    obj.children = <Badge style={style} textStyle={textStyle} dotStyle={dotStyle} value={value} maxValue={maxValue} hideCount={hideCount} unreadIndicator={flag} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={accessibilityElementsHidden} importantForAccessibility={importantForAccessibility} isMentionLowImportance={maskStyle.isMentionLowImportance} />;
    let tmp3 = <badgeMask pointerEvents="none" style={tmp2} onLayout={onLayout}>{null}</badgeMask>;
  } else {
    tmp3 = null;
  }
  return tmp3;
}