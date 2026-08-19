// === Module 13543: Badge ===

// Module 13543 (Badge)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import PX_16 from "PX_16" /* 1299 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import obj132 from "obj132" /* 500 */;

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
    obj = require("AccessibilityAnnouncer");
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
    tmpResult = require("initialize");
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
      obj[1] = tmp5;
      obj[2] = accessible;
      obj[3] = accessibilityLabel;
      obj[4] = accessibilityElementsHidden;
      obj[5] = str;
      if (flag2) {
        tmp9 = null;
        if (0 === value) {
          obj[6] = null;
          tmp7Result = tmp7(tmp8, obj);
        }
      }
      if (flag) {
        obj1 = { style: null };
        items2 = [, ];
        items2[0] = items2.noCount;
        items2[1] = dotStyle;
        obj1[0] = items2;
        tmp7Result1 = tmp7(tmp8, obj1);
      } else if (flag5) {
        obj2 = { variant: "experimental/body-xs/semibold", color: "none", style: null, lineClamp: 1, allowFontScaling: false, children: null };
        items3 = [, ];
        items3[0] = items2.experimentalBadgeText;
        items3[1] = textStyle;
        obj2[2] = items3;
        tmpResult1 = require("shortenAndLocalizeNumber");
        tmp14 = globalThis;
        _Math2 = Math;
        obj2[5] = tmpResult1.humanizeValue(Math.min(value, num), stateFromStores);
        tmp7Result1 = tmp7(require("Text").Text, obj2);
      } else {
        tmp10 = style;
        obj3 = { style: null, numberOfLines: 1, allowFontScaling: false, children: null };
        items4 = [, ];
        items4[0] = items2.badgeText;
        items4[1] = textStyle;
        obj3[0] = items4;
        tmp11 = require("module_8115");
        tmpResult2 = require("shortenAndLocalizeNumber");
        tmp12 = globalThis;
        _Math = Math;
        obj3[3] = tmpResult2.humanizeValue(Math.min(value, num), stateFromStores);
        tmp7Result1 = tmp7(tmp11, obj3);
      }
      tmp15 = tmp7Result1;
    } else {
      tmp7Result = null;
    }
    return tmp7Result;
  }
}
({ BADGE_MASK_SIZE: closure_6, BADGE_MASK_UNREAD_SIZE: error, BADGE_PADDING, BADGE_SIZE } = PX_16);
const BADGE_SIZE_UNREAD = PX_16.BADGE_SIZE_UNREAD;
createCacheKey = { position: "absolute", bottom: -BADGE_PADDING, right: -BADGE_PADDING, padding: BADGE_PADDING, zIndex: 1 };
createCacheKey[1] = { paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: ThemesDefault.space.PX_8, justifyContent: "center", alignItems: "center", overflow: "hidden" };
let obj2 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: ThemesDefault.colors.WHITE, fontSize: 12, lineHeight: null, fontFamily: null, textAlign: "center", textAlignVertical: null };
obj132 = obj132.isAndroid();
const space = ThemesDefault.space;
obj2[3] = obj132 ? space.PX_12 : space.PX_16;
obj2[4] = require("ME").Fonts.PRIMARY_BOLD;
let str;
if (obj132.isAndroid()) {
  str = "center";
}
obj2[6] = str;
createCacheKey[2] = obj2;
const obj3 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: ThemesDefault.colors.WHITE };
if (obj132.isAndroid()) {
  const obj4 = { lineHeight: null, textAlignVertical: "center" };
  obj4[0] = ThemesDefault.space.PX_12;
  obj132 = obj4;
} else {
  obj132 = {};
}
Object.assign(obj132);
obj3.textAlign = "center";
createCacheKey[3] = obj3;
obj132 = { width: 5, height: 5, borderRadius: 2.5, backgroundColor: ThemesDefault.colors.WHITE };
createCacheKey[4] = obj132;
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
obj132 = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
createCacheKey[6] = obj132;
createCacheKey[7] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
createCacheKey[8] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = obj132.fileFinishedImporting("design/void/Badge/native/Badge.tsx");

export default Badge;
export const MaskedBadge = function MaskedBadge(maskStyle) {
  maskStyle = maskStyle.maskStyle;
  const value = maskStyle.value;
  importDefault = value;
  let flag = maskStyle.unreadIndicator;
  ({ style, dotStyle, textStyle, maxValue, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, onLayout, hideCount } = maskStyle);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  closure_3 = tmp;
  let items = [tmp, maskStyle, flag, value];
  if (value > 0) {
    let obj = { pointerEvents: "none", style: null, onLayout: null, children: null };
    obj[1] = tmp2;
    obj[2] = onLayout;
    obj = { style: null, textStyle: null, dotStyle: null, value: null, maxValue: null, hideCount: null, unreadIndicator: null, accessibilityLabel: null, accessibilityElementsHidden: null, importantForAccessibility: null, isMentionLowImportance: null };
    obj[0] = style;
    obj[1] = textStyle;
    obj[2] = dotStyle;
    obj[3] = value;
    obj[4] = maxValue;
    obj[5] = hideCount;
    obj[6] = flag;
    obj[7] = accessibilityLabel;
    obj[8] = accessibilityElementsHidden;
    obj[9] = importantForAccessibility;
    obj[10] = maskStyle.isMentionLowImportance;
    obj[3] = <Badge style={null} textStyle={null} dotStyle={null} value={null} maxValue={null} hideCount={null} unreadIndicator={null} accessibilityLabel={null} accessibilityElementsHidden={null} importantForAccessibility={null} isMentionLowImportance={null} />;
    let tmp3 = <View style={null} textStyle={null} dotStyle={null} value={null} maxValue={null} hideCount={null} unreadIndicator={null} accessibilityLabel={null} accessibilityElementsHidden={null} importantForAccessibility={null} isMentionLowImportance={null} />;
  } else {
    tmp3 = null;
  }
  return tmp3;
};