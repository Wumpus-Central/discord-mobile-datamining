// discord_app/modules/user_profile/native/UserProfileUpsellCard.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { Gradients } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { Button } from "../../../design/void/native.tsx";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { upsellButton: null, titleContainer: null, linearGradient: null, outer: null, scroll: null, inner: null };
createCacheKey = { marginTop: 8, flexShrink: 0, borderRadius: require("Themes").radii.round, gap: 4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 };
createCacheKey[2] = { width: "100%", height: "100%", position: "absolute", overflow: "hidden" };
createCacheKey[3] = { marginHorizontal: require("ARBITRARY_LARGE_OFFSET").PROFILE_SIDE_PADDING - 1 };
let obj1 = { marginHorizontal: require("ARBITRARY_LARGE_OFFSET").PROFILE_SIDE_PADDING - 1 };
createCacheKey[4] = { borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[5] = { paddingVertical: 12, paddingHorizontal: 14 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
const result = require("ARBITRARY_LARGE_OFFSET").fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCard.tsx");

export default function UserProfileUpsellCard(headerText) {
  let cardStyle;
  let children;
  let contentStyle;
  let ctaStyle;
  let ctaText;
  let onPress;
  let showLinearGradient;
  let style;
  headerText = headerText.headerText;
  let _require;
  ({ style, children, ctaText, showLinearGradient, cardStyle, contentStyle, ctaStyle, onPress } = headerText);
  const tmp = createCacheKey();
  _require = tmp;
  let obj = { borderWidth: 1, style: items, direction: null, colors: null, borderRadius: null, children: null };
  items = [tmp.outer, style];
  obj[2] = _Button.GradientBorder.Direction.HORIZONTAL;
  obj[3] = Gradients.PREMIUM_TIER_2;
  obj[4] = Themes.radii.lg;
  obj = { bounces: false, style: items1, contentContainerStyle: items2, children: null };
  items1 = [tmp.scroll, cardStyle];
  items2 = [tmp.inner, contentStyle];
  let tmp6Result = null;
  if (null != headerText) {
    obj = { style: null, children: null };
    obj[0] = tmp.titleContainer;
    const obj1 = { color: null, size: "xs" };
    obj1[0] = Themes.colors.MOBILE_TEXT_HEADING_PRIMARY;
    const items3 = [tmp2(tmp3(7988).NitroWheelIcon, obj1), ];
    const obj2 = { variant: "heading-sm/bold", children: null };
    obj2[1] = headerText;
    items3[1] = tmp2(tmp3(4734).Text, obj2);
    obj[1] = items3;
    tmp6Result = tmp6(closure_3, obj);
  }
  const items4 = [tmp6Result, children, ];
  const obj3 = { style: items5, onPress, text: ctaText, color: null, renderIcon: null, renderLinearGradient: null };
  items5 = [tmp.upsellButton, ctaStyle];
  obj3[3] = _Button.ButtonColors.GREEN;
  obj3[4] = function renderIcon() {
    return callback(_undefined(table[8]).NitroWheelIcon, { color: "white", size: "xs" });
  };
  let fn;
  if (showLinearGradient) {
    fn = () => {
      const obj = { style: items, start: null, end: null, colors: null };
      items = [_undefined.linearGradient];
      obj[1] = _undefined(outer1_2[11]).HorizontalGradient.START;
      obj[2] = _undefined(outer1_2[11]).HorizontalGradient.END;
      obj[3] = outer1_5.PREMIUM_TIER_2_TRI_COLOR;
      return outer1_6(outer1_1(outer1_2[10]), obj);
    };
  }
  obj3[5] = fn;
  items4[2] = closure_6(_Button.ShinyButton, obj3);
  obj[3] = items4;
  obj[5] = closure_7(closure_4, obj);
  return closure_6(_Button.GradientBorder, obj);
};