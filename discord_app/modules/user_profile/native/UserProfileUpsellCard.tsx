// === Module 14276: UserProfileUpsellCard ===

// Module 14276 (UserProfileUpsellCard)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { Gradients } from "items" /* 7177 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { upsellButton: null, titleContainer: null, linearGradient: null, outer: null, scroll: null, inner: null };
createCacheKey = { marginTop: 8, flexShrink: 0, borderRadius: ThemesDefault.radii.round, gap: 4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 };
createCacheKey[2] = { width: "100%", height: "100%", position: "absolute", overflow: "hidden" };
createCacheKey[3] = { marginHorizontal: require("ARBITRARY_LARGE_OFFSET").PROFILE_SIDE_PADDING - 1 };
let obj1 = { marginHorizontal: require("ARBITRARY_LARGE_OFFSET").PROFILE_SIDE_PADDING - 1 };
createCacheKey[4] = { borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[5] = { paddingVertical: 12, paddingHorizontal: 14 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj2 = { borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCard.tsx");

export default function UserProfileUpsellCard(headerText) {
  headerText = headerText.headerText;
  let _require;
  ({ style, children, ctaText, showLinearGradient, cardStyle, contentStyle, ctaStyle, onPress } = headerText);
  const tmp = callback();
  _require = tmp;
  let obj = { borderWidth: 1, style: items, direction: _require(1297).GradientBorder.Direction.HORIZONTAL, colors: Gradients.PREMIUM_TIER_2, borderRadius: ThemesDefault.radii.lg, children: null };
  items = [tmp.outer, style];
  obj = { bounces: false, style: items1, contentContainerStyle: items2, children: null };
  items1 = [tmp.scroll, cardStyle];
  items2 = [tmp.inner, contentStyle];
  let tmp6Result = null;
  if (null != headerText) {
    obj = { style: null, children: null };
    obj[0] = tmp.titleContainer;
    obj1 = { color: null, size: "xs" };
    obj1[0] = ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
    const items3 = [tmp2(tmp3(8096).NitroWheelIcon, obj1), ];
    const obj2 = { variant: "heading-sm/bold", children: null };
    obj2[1] = headerText;
    items3[1] = tmp2(tmp3(4474).Text, obj2);
    obj[1] = items3;
    tmp6Result = tmp6(closure_3, obj);
  }
  const items4 = [tmp6Result, children, ];
  const obj3 = {
    style: items5,
    onPress,
    text: ctaText,
    color: _require(1297).ButtonColors.GREEN,
    renderIcon() {
      return callback(lib(table[8]).NitroWheelIcon, { color: "white", size: "xs" });
    },
    renderLinearGradient: null
  };
  items5 = [tmp.upsellButton, ctaStyle];
  let fn;
  if (showLinearGradient) {
    fn = () => {
      const obj = { style: items, start: lib(closure_1_2[11]).HorizontalGradient.START, end: lib(closure_1_2[11]).HorizontalGradient.END, colors: closure_1_5.PREMIUM_TIER_2_TRI_COLOR };
      items = [lib.linearGradient];
      return closure_1_6(closure_1_1(closure_1_2[10]), obj);
    };
  }
  obj3[5] = fn;
  items4[2] = closure_6(_require(1297).ShinyButton, obj3);
  obj[3] = items4;
  obj[5] = closure_7(closure_4, obj);
  return closure_6(_require(1297).GradientBorder, obj);
};