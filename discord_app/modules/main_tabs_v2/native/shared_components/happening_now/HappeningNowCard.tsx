// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import PressableCard from "../../../../../design/components/Card/native/Card.native.tsx";
import useIsWindowLargeDefault from "../../../../screen/native/useIsWindowLarge.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HappeningNowConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
const HAPPENING_NOW_CARD_MARGIN_RIGHT = HAPPENING_NOW_PANELS_CONTAINER_PADDING.HAPPENING_NOW_CARD_MARGIN_RIGHT;
({ HAPPENING_NOW_CARD_PADDING: c5, HAPPENING_NOW_CARD_HEIGHT: closure_6, HAPPENING_NOW_BADGE_SIZE } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ HAPPENING_NOW_CARD_WIDTH_SMALL_MIN: closure_8, HAPPENING_NOW_CARD_WIDTH_SMALL_MAX: c9, HAPPENING_NOW_CARD_WIDTH_MEDIUM_MIN: c10, HAPPENING_NOW_CARD_WIDTH_MEDIUM_MAX: unpackModuleId, HAPPENING_NOW_CARD_WIDTH_LARGE_MIN: closure_12, HAPPENING_NOW_CARD_WIDTH_LARGE_MAX: map1, HAPPENING_NOW_CARD_PADDING_RIGHT: closure_14, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MIN: closure_15, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MAX: closure_16, HAPPENING_NOW_CARD_WIDTH_LARGE_PANELS_MAX: closure_17, HAPPENING_NOW_PANELS_CONTAINER_PADDING } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = HAPPENING_NOW_PANELS_CONTAINER_PADDING + HAPPENING_NOW_CARD_MARGIN_RIGHT;
let closure_21 = createCacheKey.createStyles((arg0, arg1, arg2) => {
  if ("small" === arg0) {
    let obj = { minWidth: null, maxWidth: null };
    obj[0] = closure_8;
    obj[1] = closure_9;
  } else if ("medium" === arg0) {
    obj = { minWidth: null, maxWidth: null };
    obj[0] = closure_10;
    obj[1] = closure_11;
  } else if ("large" === arg0) {
    obj1 = { minWidth: null, maxWidth: null };
    obj1[0] = closure_12;
    if (arg1) {
      if (arg2) {
        let diff = 252 - closure_20;
      } else {
        diff = closure_17;
      }
    } else {
      obj1[1] = closure_13;
      obj = obj1;
    }
  } else if ("stretchy" === arg0) {
    const obj2 = { minWidth: null, maxWidth: null };
    obj2[0] = closure_15;
    if (arg1) {
      if (arg2) {
        let diff1 = 252 - closure_20;
      } else {
        diff1 = closure_17;
      }
    } else {
      obj2[1] = closure_16;
      obj = obj2;
    }
  } else if ("full" === arg0) {
    obj = { width: "auto", marginLeft: 0, marginRight: 0 };
  }
  const obj3 = { card: null, cardBadgeWrapper: null, cardBadge: null };
  const merged = Object.assign(obj);
  obj3[0] = { padding: closure_5, paddingRight: closure_14, marginRight: HAPPENING_NOW_CARD_MARGIN_RIGHT, height: closure_6, flexDirection: "row", alignItems: "center" };
  obj3[1] = { position: "absolute", top: 0, right: 0 };
  obj3[2] = { display: "flex", alignItems: "center", justifyContent: "center", width: HAPPENING_NOW_BADGE_SIZE, height: HAPPENING_NOW_BADGE_SIZE };
  return obj3;
});
createCacheKey = { marginRight: HAPPENING_NOW_BADGE_SIZE + 4 };
let closure_22 = createCacheKey.createStyles({ cardHeaderMargin: createCacheKey });
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx");

export default function HappeningNowCard(onPress) {
  let flag = onPress.panelVariant;
  if (flag == null) {
    flag = false;
  }
  const tmp4Result = closure_21(onPress.width, flag, useIsWindowLargeDefault());
  const IconComponent = onPress.IconComponent;
  const tmp = importDefault;
  const tmp3 = useIsWindowLargeDefault();
  const tmp4 = closure_21;
  ({ accessibilityLabel, accessibilityHint } = onPress);
  let obj = { variant: "secondary", style: items, onPress: onPress.onPress, border: "faint", shadow: null, onLongPress: null, disabled: null, accessibilityLabel: null, accessibilityHint: null, children: null };
  items = [tmp4Result.card, onPress.style];
  let str;
  if (null == tmp6) {
    str = "low";
  }
  obj[4] = str;
  obj[5] = onPress.onLongPress;
  obj[6] = null == onPress.onPress;
  obj[7] = accessibilityLabel;
  obj[8] = accessibilityHint;
  const items1 = [onPress.children, ];
  let tmp8 = null;
  if (null != IconComponent) {
    obj = { style: null, children: null };
    obj[0] = tmp4Result.cardBadgeWrapper;
    obj = { style: null, children: null };
    obj[0] = tmp4Result.cardBadge;
    obj[1] = callback(IconComponent, { size: "xxs", color: "icon-voice-connected" });
    obj[1] = callback(View, obj);
    tmp8 = callback(View, obj);
  }
  items1[1] = tmp8;
  obj[9] = items1;
  return closure_19(PressableCard.Card, obj);
};
export const HappeningNowCardHeader = function HappeningNowCardHeader(displayNameFont) {
  displayNameFont = displayNameFont.displayNameFont;
  ({ children, noMargin } = displayNameFont);
  const merged = Object.assign(displayNameFont, Object.create(null));
  let cardHeaderMargin = null;
  if (!noMargin) {
    cardHeaderMargin = tmp2.cardHeaderMargin;
  }
  const items = [cardHeaderMargin, ];
  let tmp5 = null;
  if (null != displayNameFont) {
    let obj = { fontFamily: null };
    obj[0] = displayNameFont;
    tmp5 = obj;
  }
  obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: items };
  items[1] = tmp5;
  const merged1 = Object.assign(merged);
  obj.children = children;
  return closure_18(Text.Text, obj);
};
export const HappeningNowCardSubtitle = function HappeningNowCardSubtitle(variant) {
  let str = variant.variant;
  const merged = Object.assign(variant, Object.create(null));
  if (str == null) {
    str = "text-sm/normal";
  }
  const obj = { variant: str, color: "text-subtle", lineClamp: 1, maxFontSizeMultiplier: 2 };
  const merged1 = Object.assign(merged);
  obj.children = variant.children;
  return closure_18(Text.Text, obj);
};