// discord_app/modules/user_profile/native/UserProfileUpsellCard.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { Gradients } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  let children;
  let ctaText;
  let onPress;
  let showLinearGradient;
  let style;
  headerText = headerText.headerText;
  let _require;
  ({ style, children, ctaText, showLinearGradient, onPress } = headerText);
  const tmp = createCacheKey();
  _require = tmp;
  let obj = { borderWidth: 1, style: items, direction: null, colors: null, borderRadius: null, children: null };
  items = [tmp.outer, style];
  obj[2] = _require(1297).GradientBorder.Direction.HORIZONTAL;
  obj[3] = Gradients.PREMIUM_TIER_2;
  obj[4] = importDefault(712).radii.lg;
  obj = { bounces: false, style: tmp.scroll, contentContainerStyle: tmp.inner, children: null };
  let tmp6Result = null;
  if (null != headerText) {
    obj = { style: null, children: null };
    obj[0] = tmp.titleContainer;
    const obj1 = { color: null, size: "xs" };
    obj1[0] = importDefault(712).colors.MOBILE_TEXT_HEADING_PRIMARY;
    const items1 = [tmp2(tmp3(7625).NitroWheelIcon, obj1), ];
    const obj2 = { variant: "heading-sm/bold", children: null };
    obj2[1] = headerText;
    items1[1] = tmp2(tmp3(4281).Text, obj2);
    obj[1] = items1;
    tmp6Result = tmp6(closure_3, obj);
  }
  const items2 = [tmp6Result, children, ];
  const obj3 = { style: tmp.upsellButton, onPress, text: ctaText, color: null, renderIcon: null, renderLinearGradient: null };
  obj3[3] = _require(1297).ButtonColors.GREEN;
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
  items2[2] = closure_6(_require(1297).ShinyButton, obj3);
  obj[3] = items2;
  obj[5] = closure_7(closure_4, obj);
  return closure_6(_require(1297).GradientBorder, obj);
};