import "noop";
import { View } from "get ActivityIndicator";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let HAPPENING_NOW_BADGE_SIZE;
let HAPPENING_NOW_PANELS_CONTAINER_PADDING;
let c10;
let c5;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_6;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
const HAPPENING_NOW_CARD_MARGIN_RIGHT = HAPPENING_NOW_PANELS_CONTAINER_PADDING.HAPPENING_NOW_CARD_MARGIN_RIGHT;
({ HAPPENING_NOW_CARD_PADDING: c5, HAPPENING_NOW_CARD_HEIGHT: closure_6, HAPPENING_NOW_BADGE_SIZE } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ HAPPENING_NOW_CARD_WIDTH_SMALL_MIN: metroImportAll, HAPPENING_NOW_CARD_WIDTH_SMALL_MAX: c9, HAPPENING_NOW_CARD_WIDTH_MEDIUM_MIN: c10, HAPPENING_NOW_CARD_WIDTH_MEDIUM_MAX: unpackModuleId, HAPPENING_NOW_CARD_WIDTH_LARGE_MIN: closure_12, HAPPENING_NOW_CARD_WIDTH_LARGE_MAX: map1, HAPPENING_NOW_CARD_PADDING_RIGHT: closure_14, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MIN: closure_15, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MAX: closure_16, HAPPENING_NOW_CARD_WIDTH_LARGE_PANELS_MAX: closure_17, HAPPENING_NOW_PANELS_CONTAINER_PADDING } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = HAPPENING_NOW_PANELS_CONTAINER_PADDING + HAPPENING_NOW_CARD_MARGIN_RIGHT;
let closure_21 = createCacheKey.createStyles((arg0, arg1, arg2, arg3) => {
  if ("small" === arg0) {
    let obj = { minWidth: null, maxWidth: null };
    obj[0] = closure_8;
    obj[1] = closure_9;
  } else if ("medium" === arg0) {
    obj = { minWidth: null, maxWidth: null };
    obj[0] = closure_10;
    obj[1] = closure_11;
  } else if ("large" === arg0) {
    const obj1 = { minWidth: null, maxWidth: null };
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
  const obj5 = { display: "flex", alignItems: "center", justifyContent: "center", width: HAPPENING_NOW_BADGE_SIZE, height: HAPPENING_NOW_BADGE_SIZE, backgroundColor: null, borderTopRightRadius: null, borderBottomLeftRadius: null };
  let prop;
  if (!arg3) {
    prop = importDefault(712).colors.BACKGROUND_MOD_SUBTLE;
  }
  obj5[5] = prop;
  let diff2;
  if (!arg3) {
    diff2 = importDefault(712).radii.lg - 1;
  }
  obj5[6] = diff2;
  let md;
  if (!arg3) {
    md = importDefault(712).radii.md;
  }
  obj5[7] = md;
  obj3[2] = obj5;
  return obj3;
});
createCacheKey = { marginRight: HAPPENING_NOW_BADGE_SIZE + 4 };
let closure_22 = createCacheKey.createStyles({ cardHeaderMargin: createCacheKey });
const result = require("HAPPENING_NOW_PANELS_CONTAINER_PADDING").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx");

export default function HappeningNowCard(IconComponent) {
  let accessibilityHint;
  let accessibilityLabel;
  let panelVariant;
  let width;
  const tmp4 = importDefault(1348)("HappeningNowCard");
  ({ width, panelVariant } = IconComponent);
  if (panelVariant == null) {
    panelVariant = false;
  }
  const tmp5Result = closure_21(width, panelVariant, importDefault(7550)(), tmp4);
  IconComponent = IconComponent.IconComponent;
  const tmp = importDefault;
  const tmp3 = importDefault(7550)();
  const tmp5 = closure_21;
  ({ accessibilityLabel, accessibilityHint } = IconComponent);
  let obj = { variant: "secondary", style: items, onPress: IconComponent.onPress, border: "faint", shadow: null, onLongPress: null, disabled: null, accessibilityLabel: null, accessibilityHint: null, children: null };
  items = [tmp5Result.card, IconComponent.style];
  let str;
  if (null == tmp7) {
    str = "low";
  }
  obj[4] = str;
  obj[5] = IconComponent.onLongPress;
  obj[6] = null == IconComponent.onPress;
  obj[7] = accessibilityLabel;
  obj[8] = accessibilityHint;
  const items1 = [IconComponent.children, ];
  let tmp10Result = null;
  if (null != IconComponent) {
    obj = { style: null, children: null };
    obj[0] = tmp5Result.cardBadgeWrapper;
    obj = { style: null, children: null };
    obj[0] = tmp5Result.cardBadge;
    let str2 = "xs";
    if (tmp4) {
      str2 = "xxs";
    }
    const obj1 = { size: null, color: null };
    obj1[0] = str2;
    let str3;
    if (tmp4) {
      str3 = "icon-voice-connected";
    }
    obj1[1] = str3;
    obj[1] = closure_18(IconComponent, obj1);
    obj[1] = closure_18(View, obj);
    tmp10Result = tmp10(tmp11, obj);
  }
  items1[1] = tmp10Result;
  obj[9] = items1;
  return closure_19(require(5288) /* PressableCard */.Card, obj);
};
export const HappeningNowCardHeader = function HappeningNowCardHeader(displayNameFont) {
  let children;
  let noMargin;
  displayNameFont = displayNameFont.displayNameFont;
  ({ children, noMargin } = displayNameFont);
  const merged = Object.assign(displayNameFont, Object.create(null));
  const tmp2 = callback();
  let str = "text-sm/semibold";
  if (tmp3) {
    str = "text-md/medium";
  }
  let obj = { variant: str, color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: null };
  let cardHeaderMargin = null;
  if (!noMargin) {
    cardHeaderMargin = tmp2.cardHeaderMargin;
  }
  const items = [cardHeaderMargin, ];
  let tmp6 = null;
  if (null != displayNameFont) {
    obj = { fontFamily: null };
    obj[0] = displayNameFont;
    tmp6 = obj;
  }
  items[1] = tmp6;
  obj[4] = items;
  const merged1 = Object.assign(merged);
  obj.children = children;
  return closure_18(require(4251) /* Text */.Text, obj);
};
export const HappeningNowCardSubtitle = function HappeningNowCardSubtitle(variant) {
  variant = variant.variant;
  const merged = Object.assign(variant, Object.create(null));
  const tmp2 = importDefault(1348)("HappeningNowCardSubtitle");
  if (variant == null) {
    let str = "text-xs/medium";
    if (tmp2) {
      str = "text-sm/normal";
    }
    variant = str;
  }
  const obj = { variant, color: null, lineClamp: 1, maxFontSizeMultiplier: 2 };
  let str2 = "text-default";
  if (tmp2) {
    str2 = "text-subtle";
  }
  obj[1] = str2;
  const merged1 = Object.assign(merged);
  obj.children = variant.children;
  return closure_18(require(4251) /* Text */.Text, obj);
};