// discord_app/design/void/Badge/native/Badge.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import _getSystemLocale from "_getSystemLocale";
import PX_16 from "PX_16";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import { space } from "Themes";
import set from "set";
import set from "_getSystemLocale";

let BADGE_PADDING;
let BADGE_SIZE;
let closure_6;
let error;
let require = arg1;
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
    c5 = undefined;
    items2 = jsx();
    c5 = items2;
    tmp2 = c2;
    tmp = closure_0;
    obj = require("initialize");
    items = [];
    items[0] = c5;
    items1 = [, , , , , ];
    items1[0] = items2;
    items1[1] = style;
    items1[2] = flag3;
    items1[3] = value;
    items1[4] = flag4;
    items1[5] = flag5;
    stateFromStores = obj.useStateFromStores(items, () => items2.locale);
    if (value > 0) {
      tmp6 = jsx;
      tmp7 = c4;
      obj = { pointerEvents: "none", style: null, accessible: null, accessibilityLabel: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
      obj[1] = tmp4;
      obj[2] = accessible;
      obj[3] = accessibilityLabel;
      obj[4] = flag;
      obj[5] = str;
      if (flag3) {
        tmp8 = null;
        if (0 === value) {
          obj[6] = null;
          tmp6Result = tmp6(tmp7, obj);
        }
      }
      if (flag2) {
        obj1 = { style: null };
        items2 = [, ];
        items2[0] = items2.noCount;
        items2[1] = dotStyle;
        obj1[0] = items2;
        tmp6Result1 = tmp6(tmp7, obj1);
      } else {
        tmp9 = style;
        obj2 = { style: null, numberOfLines: 1, allowFontScaling: false, children: null };
        items3 = [, ];
        items3[0] = items2.badgeText;
        items3[1] = textStyle;
        obj2[0] = items3;
        tmp10 = require("module_7674");
        tmpResult = require("shortenAndLocalizeNumber");
        tmp11 = globalThis;
        _Math = Math;
        obj2[3] = tmpResult.humanizeValue(Math.min(value, num), stateFromStores);
        tmp6Result1 = tmp6(tmp10, obj2);
      }
      tmp13 = tmp6Result1;
    } else {
      tmp6Result = null;
    }
    return tmp6Result;
  }
}
({ BADGE_MASK_SIZE: closure_6, BADGE_MASK_UNREAD_SIZE: error, BADGE_PADDING, BADGE_SIZE } = PX_16);
const BADGE_SIZE_UNREAD = PX_16.BADGE_SIZE_UNREAD;
createCacheKey = { badgeMask: createCacheKey, badge: null, badgeText: null, noCount: null, unread: null, mention: null, lowImportanceMention: null, eventsMentionBadge: null };
createCacheKey = { position: "absolute", bottom: -BADGE_PADDING, right: -BADGE_PADDING, padding: BADGE_PADDING, zIndex: 1 };
createCacheKey[1] = { paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: require("Themes").space.PX_8, justifyContent: "center", alignItems: "center", overflow: "hidden" };
const obj2 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: require("Themes").colors.WHITE, fontSize: 12, lineHeight: null, fontFamily: null, textAlign: "center", textAlignVertical: null };
set = set.isAndroid();
obj2[3] = set ? space.PX_12 : space.PX_16;
obj2[4] = require("ME").Fonts.PRIMARY_BOLD;
let str;
if (set.isAndroid()) {
  str = "center";
}
obj2[6] = str;
createCacheKey[2] = obj2;
let obj1 = { paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: require("Themes").space.PX_8, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createCacheKey[3] = { width: 5, height: 5, borderRadius: 2.5, backgroundColor: require("Themes").colors.WHITE };
const obj3 = { width: 5, height: 5, borderRadius: 2.5, backgroundColor: require("Themes").colors.WHITE };
createCacheKey[4] = { backgroundColor: require("Themes").colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
set = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_NOTIFICATION };
createCacheKey[5] = set;
set = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
createCacheKey[6] = set;
const obj4 = { backgroundColor: require("Themes").colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
createCacheKey[7] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("design/void/Badge/native/Badge.tsx");

export default Badge;
export const MaskedBadge = function MaskedBadge(maskStyle) {
  let accessibilityElementsHidden;
  let accessibilityLabel;
  let dotStyle;
  let hideCount;
  let importantForAccessibility;
  let maxValue;
  let onLayout;
  let style;
  let textStyle;
  maskStyle = maskStyle.maskStyle;
  const value = maskStyle.value;
  const importDefault = value;
  let flag = maskStyle.unreadIndicator;
  ({ style, dotStyle, textStyle, maxValue, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, onLayout, hideCount } = maskStyle);
  if (flag === undefined) {
    flag = false;
  }
  let c3;
  const tmp = createCacheKey();
  c3 = tmp;
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