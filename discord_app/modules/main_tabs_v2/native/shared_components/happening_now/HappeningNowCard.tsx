// === Module 15561: HappeningNowCard ===

// Module 15561 (HappeningNowCard)
import Text_Text from "Text/Text" /* 4752 */;
import Card from "Card" /* 5819 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7183 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HappeningNowConstants = fn(15560);
const HAPPENING_NOW_CARD_MARGIN_RIGHT = HappeningNowConstants.HAPPENING_NOW_CARD_MARGIN_RIGHT;
({ HAPPENING_NOW_CARD_PADDING: hasOwnProperty, HAPPENING_NOW_CARD_HEIGHT: metroRequire, HAPPENING_NOW_BADGE_SIZE } = HappeningNowConstants);
({ HAPPENING_NOW_CARD_WIDTH_SMALL_MIN: closure_8, HAPPENING_NOW_CARD_WIDTH_SMALL_MAX: closure_9, HAPPENING_NOW_CARD_WIDTH_MEDIUM_MIN: c10, HAPPENING_NOW_CARD_WIDTH_MEDIUM_MAX: closure_11, HAPPENING_NOW_CARD_WIDTH_LARGE_MIN: closure_12, HAPPENING_NOW_CARD_WIDTH_LARGE_MAX: map1, HAPPENING_NOW_CARD_PADDING_RIGHT: closure_14, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MIN: closure_15, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MAX: closure_16, HAPPENING_NOW_CARD_WIDTH_LARGE_PANELS_MAX: closure_17, HAPPENING_NOW_PANELS_CONTAINER_PADDING } = HappeningNowConstants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = HAPPENING_NOW_PANELS_CONTAINER_PADDING + HAPPENING_NOW_CARD_MARGIN_RIGHT;
let createStyles = fn(4756);
let closure_21 = createStyles.createStyles((arg0, arg1, arg2) => {
  if ("small" === arg0) {
    const obj2 = { minWidth, maxWidth };
    let obj = obj2;
  } else if ("medium" === arg0) {
    const obj3 = { minWidth: minWidth2, maxWidth: maxWidth2 };
    obj = obj3;
  } else if ("large" === arg0) {
    const obj4 = { minWidth: minWidth3, maxWidth: null };
    if (arg1) {
      if (arg2) {
        let diff = 252 - closure_20;
      } else {
        diff = closure_1_17;
      }
    } else {
      obj4.maxWidth = maxWidth3;
      obj = obj4;
    }
  } else if ("stretchy" === arg0) {
    const obj5 = { minWidth: minWidth4, maxWidth: null };
    if (arg1) {
      if (arg2) {
        let diff1 = 252 - closure_20;
      } else {
        diff1 = closure_1_17;
      }
    } else {
      obj5.maxWidth = maxWidth4;
      obj = obj5;
    }
  } else if ("full" === arg0) {
    obj = { width: "auto", marginLeft: 0, marginRight: 0 };
  }
  const obj6 = { card: null, cardBadgeWrapper: null, cardBadge: null };
  const merged = Object.assign(obj);
  obj6.card = { padding, paddingRight, marginRight: HAPPENING_NOW_CARD_MARGIN_RIGHT, height, flexDirection: "row", alignItems: "center" };
  obj6.cardBadgeWrapper = { position: "absolute", top: 0, right: 0 };
  const size = { display: "flex", alignItems: "center", justifyContent: "center", width: HAPPENING_NOW_BADGE_SIZE, height: HAPPENING_NOW_BADGE_SIZE };
  obj6.cardBadge = size;
  return obj6;
});
createStyles = fn(4756);
let obj3 = { cardHeaderMargin: { marginRight: HAPPENING_NOW_BADGE_SIZE + 4 } };
let closure_22 = createStyles.createStyles(obj3);
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx");

export default function HappeningNowCard(onPress) {
  let flag = onPress.panelVariant;
  if (flag == null) {
    flag = false;
  }
  const tmp4Result = closure_21(onPress.width, flag, useIsWindowLargeDefault());
  const IconComponent = onPress.IconComponent;
  const tmp3 = useIsWindowLargeDefault();
  ({ accessibilityLabel, accessibilityHint } = onPress);
  const obj = { variant: "secondary", style: null, onPress: onPress.onPress, border: "faint", shadow: null, onLongPress: null, disabled: null, accessibilityLabel: null, accessibilityHint: null, children: null };
  const items = [tmp4Result.card, onPress.style];
  obj.style = items;
  let str;
  if (null == tmp6) {
    str = "low";
  }
  obj.shadow = str;
  obj.onLongPress = onPress.onLongPress;
  obj.disabled = null == onPress.onPress;
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityHint = accessibilityHint;
  const items1 = [onPress.children, ];
  let tmp8 = null;
  if (null != IconComponent) {
    const obj2 = { style: tmp4Result.cardBadgeWrapper, children: null };
    const obj3 = { style: tmp4Result.cardBadge, children: collapsedCategories(IconComponent, { size: "xxs", color: "icon-voice-connected" }) };
    obj2.children = collapsedCategories(View, obj3);
    tmp8 = collapsedCategories(View, obj2);
  }
  items1[1] = tmp8;
  obj.children = items1;
  return closure_1_19(Card.Card, obj);
};
export const HappeningNowCardHeader = function HappeningNowCardHeader(displayNameFont) {
  displayNameFont = displayNameFont.displayNameFont;
  ({ children, noMargin } = displayNameFont);
  const merged = Object.assign(displayNameFont, Object.assign({ children: 0, noMargin: 0, displayNameFont: 0 }));
  let cardHeaderMargin = null;
  if (!noMargin) {
    cardHeaderMargin = tmp2.cardHeaderMargin;
  }
  const items = [cardHeaderMargin, ];
  let tmp5 = null;
  if (null != displayNameFont) {
    const obj = { fontFamily: displayNameFont };
    tmp5 = obj;
  }
  const obj2 = { variant: "text-md/medium", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: items };
  items[1] = tmp5;
  const merged1 = Object.assign(merged);
  obj2.children = children;
  return collapsedCategories(Text_Text.Text, obj2);
};
export const HappeningNowCardSubtitle = function HappeningNowCardSubtitle(variant) {
  let str = variant.variant;
  const merged = Object.assign(variant, Object.assign({ children: 0, variant: 0 }));
  if (str == null) {
    str = "text-sm/normal";
  }
  const obj = { variant: str, color: "text-subtle", lineClamp: 1, maxFontSizeMultiplier: 2 };
  const merged1 = Object.assign(merged);
  obj.children = variant.children;
  return collapsedCategories(Text_Text.Text, obj);
};