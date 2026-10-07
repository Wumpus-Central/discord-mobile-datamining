// === Module 15130: HappeningNowCard ===

// Module 15130 (HappeningNowCard)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import Card from "Card" /* 6002 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6440 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["children", "noMargin", "displayNameFont"];
let closure_4 = ["children", "variant"];
const View = fn(17).View;
const HappeningNowConstants = fn(15129);
const HAPPENING_NOW_CARD_MARGIN_RIGHT = HappeningNowConstants.HAPPENING_NOW_CARD_MARGIN_RIGHT;
({ HAPPENING_NOW_CARD_PADDING: closure_8, HAPPENING_NOW_CARD_HEIGHT: closure_9, HAPPENING_NOW_BADGE_SIZE } = HappeningNowConstants);
({ HAPPENING_NOW_CARD_WIDTH_SMALL_MIN: closure_11, HAPPENING_NOW_CARD_WIDTH_SMALL_MAX: closure_12, HAPPENING_NOW_CARD_WIDTH_MEDIUM_MIN: map1, HAPPENING_NOW_CARD_WIDTH_MEDIUM_MAX: closure_14, HAPPENING_NOW_CARD_WIDTH_LARGE_MIN: closure_15, HAPPENING_NOW_CARD_WIDTH_LARGE_MAX: closure_16, HAPPENING_NOW_CARD_PADDING_RIGHT: closure_17, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MIN: closure_18, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MAX: closure_19, HAPPENING_NOW_CARD_WIDTH_LARGE_PANELS_MAX: closure_20, HAPPENING_NOW_PANELS_CONTAINER_PADDING } = HappeningNowConstants);
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let closure_23 = HAPPENING_NOW_PANELS_CONTAINER_PADDING + HAPPENING_NOW_CARD_MARGIN_RIGHT;
let createStyles = fn(4896);
let closure_24 = createStyles.createStyles((arg0, arg1, arg2) => {
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
        let diff = 252 - closure_23;
      } else {
        diff = closure_1_20;
      }
    } else {
      obj4.maxWidth = maxWidth3;
      obj = obj4;
    }
  } else if ("stretchy" === arg0) {
    const obj5 = { minWidth: minWidth4, maxWidth: null };
    if (arg1) {
      if (arg2) {
        let diff1 = 252 - closure_23;
      } else {
        diff1 = closure_1_20;
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
fn(558);
createStyles = fn(4896);
let obj4 = { cardHeaderMargin: { marginRight: HAPPENING_NOW_BADGE_SIZE + 4 } };
let closure_25 = createStyles.createStyles(obj4);
let ReactCompilerGating = fn(558);
let obj5 = { marginRight: HAPPENING_NOW_BADGE_SIZE + 4 };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((panelVariant) => {
  const cResult = c.c(17);
  let flag = panelVariant.panelVariant;
  if (flag == null) {
    flag = false;
  }
  const tmp5Result = closure_24(panelVariant.width, flag, useIsWindowLargeDefault());
  ({ IconComponent, accessibilityLabel, accessibilityHint } = panelVariant);
  if (cResult[0] === panelVariant.style) {
    if (cResult[1] === tmp5Result.card) {
      let tmp8 = cResult[2];
    }
    if (cResult[3] === IconComponent) {
      if (cResult[4] === tmp5Result.cardBadge) {
        if (cResult[5] === tmp5Result.cardBadgeWrapper) {
          let tmp10 = cResult[6];
        }
        if (cResult[7] === accessibilityHint) {
          if (cResult[8] === accessibilityLabel) {
            if (cResult[9] === panelVariant.children) {
              if (cResult[10] === panelVariant.onLongPress) {
                if (cResult[11] === panelVariant.onPress) {
                  if (cResult[12] === tmp8) {
                    if (cResult[13] === str) {
                      if (cResult[14] === tmp9) {
                        if (cResult[15] === tmp10) {
                          let tmp14 = cResult[16];
                        }
                        return tmp14;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj2 = { variant: "secondary", style: tmp8, onPress: panelVariant.onPress, border: "faint", shadow: str, onLongPress: panelVariant.onLongPress, disabled: tmp9, accessibilityLabel, accessibilityHint, children: null };
        const items = [panelVariant.children, tmp10];
        obj2.children = items;
        const tmp16 = closure_1_22(Card.Card, obj2);
        cResult[7] = accessibilityHint;
        cResult[8] = accessibilityLabel;
        cResult[9] = panelVariant.children;
        cResult[10] = panelVariant.onLongPress;
        cResult[11] = panelVariant.onPress;
        cResult[12] = tmp8;
        cResult[13] = str;
        cResult[14] = tmp9;
        cResult[15] = tmp10;
        cResult[16] = tmp16;
        tmp14 = tmp16;
      }
    }
    let tmp11 = null;
    if (null != IconComponent) {
      const obj3 = { style: tmp5Result.cardBadgeWrapper, children: null };
      const obj4 = { style: tmp5Result.cardBadge, children: guild(IconComponent, { size: "xxs", color: "icon-voice-connected" }) };
      obj3.children = guild(View, obj4);
      tmp11 = guild(View, obj3);
    }
    cResult[3] = IconComponent;
    cResult[4] = tmp5Result.cardBadge;
    cResult[5] = tmp5Result.cardBadgeWrapper;
    cResult[6] = tmp11;
    tmp10 = tmp11;
  }
  const items1 = [tmp5Result.card, panelVariant.style];
  cResult[0] = panelVariant.style;
  cResult[1] = tmp5Result.card;
  cResult[2] = items1;
  tmp8 = items1;
  const tmp4 = useIsWindowLargeDefault();
}) : ((onPress) => {
  let flag = onPress.panelVariant;
  if (flag == null) {
    flag = false;
  }
  const tmp4Result = closure_24(onPress.width, flag, useIsWindowLargeDefault());
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
    const obj3 = { style: tmp4Result.cardBadge, children: guild(IconComponent, { size: "xxs", color: "icon-voice-connected" }) };
    obj2.children = guild(View, obj3);
    tmp8 = guild(View, obj2);
  }
  items1[1] = tmp8;
  obj.children = items1;
  return closure_1_22(Card.Card, obj);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  if (cResult[0] !== arg0) {
    ({ children, noMargin, displayNameFont } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = displayNameFont;
    cResult[3] = noMargin;
    cResult[4] = tmp10;
    let tmp7 = tmp10;
    let tmp6 = noMargin;
    let tmp5 = displayNameFont;
    let tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  let cardHeaderMargin = null;
  if (!tmp6) {
    cardHeaderMargin = closure_25().cardHeaderMargin;
  }
  if (cResult[5] !== tmp5) {
    let tmp13 = null;
    if (null != tmp5) {
      const obj2 = { fontFamily: tmp5 };
      tmp13 = obj2;
    }
    cResult[5] = tmp5;
    cResult[6] = tmp13;
    let tmp12 = tmp13;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] === cardHeaderMargin) {
    if (cResult[8] === tmp12) {
      let tmp14 = cResult[9];
    }
    if (cResult[10] === tmp4) {
      if (cResult[11] === tmp7) {
        if (cResult[12] === tmp14) {
          let tmp15 = cResult[13];
        }
        return tmp15;
      }
    }
    const obj3 = { variant: "text-md/medium", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: tmp14 };
    const merged = Object.assign(tmp7);
    obj3.children = tmp4;
    const tmp20 = guild(Text_Text.Text, obj3);
    cResult[10] = tmp4;
    cResult[11] = tmp7;
    cResult[12] = tmp14;
    cResult[13] = tmp20;
    tmp15 = tmp20;
  }
  const items = [cardHeaderMargin, tmp12];
  cResult[7] = cardHeaderMargin;
  cResult[8] = tmp12;
  cResult[9] = items;
  tmp14 = items;
}) : ((displayNameFont) => {
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
  return guild(Text_Text.Text, obj2);
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx");

export default tmp5;
export const HappeningNowCardHeader = tmp6;
export const HappeningNowCardSubtitle = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  if (cResult[0] !== arg0) {
    ({ children, variant } = arg0);
    const tmp8 = _objectWithoutProperties(arg0, closure_4);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp8;
    cResult[3] = variant;
    let str = variant;
    let tmp5 = tmp8;
    let tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    str = cResult[3];
  }
  if (str == null) {
    str = "text-sm/normal";
  }
  if (cResult[4] === tmp4) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === str) {
        let tmp9 = cResult[7];
      }
      return tmp9;
    }
  }
  const obj2 = { variant: str, color: "text-subtle", lineClamp: 1, maxFontSizeMultiplier: 2 };
  const merged = Object.assign(tmp5);
  obj2.children = tmp4;
  const tmp11 = guild(Text_Text.Text, obj2);
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = str;
  cResult[7] = tmp11;
  tmp9 = tmp11;
}) : ((variant) => {
  let str = variant.variant;
  const merged = Object.assign(variant, Object.assign({ children: 0, variant: 0 }));
  if (str == null) {
    str = "text-sm/normal";
  }
  const obj = { variant: str, color: "text-subtle", lineClamp: 1, maxFontSizeMultiplier: 2 };
  const merged1 = Object.assign(merged);
  obj.children = variant.children;
  return guild(Text_Text.Text, obj);
});