// discord_app/modules/user_profile/native/UserProfileUpsellCard.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../_runtime/04756_LinearGradient.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { Gradients } from "../../colors/native/ColorConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { marginTop: 8, flexShrink: 0, borderRadius: ThemesDefault.radii.round, gap: 4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 };
createCacheKey[2] = { width: "100%", height: "100%", position: "absolute", overflow: "hidden" };
createCacheKey[3] = { marginHorizontal: require("ARBITRARY_LARGE_OFFSET").PROFILE_SIDE_PADDING - 1 };
let obj1 = { marginHorizontal: require("ARBITRARY_LARGE_OFFSET").PROFILE_SIDE_PADDING - 1 };
createCacheKey[4] = { borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[5] = { paddingVertical: 12, paddingHorizontal: 14 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCard.tsx");

export default function UserProfileUpsellCard(headerText) {
  headerText = headerText.headerText;
  ({ style, children, ctaText, showLinearGradient, cardStyle, contentStyle, ctaStyle, onPress } = headerText);
  const tmp = callback();
  const _require = tmp;
  { borderWidth: 1, style: items, direction: require("../../../design/void/native.tsx").GradientBorder.Direction.HORIZONTAL, colors: Gradients.PREMIUM_TIER_2, borderRadius: ThemesDefault.radii.lg, children: null };
  items = [tmp.outer, style];
  let obj = { bounces: false, style: items1, contentContainerStyle: items2, children: null };
  items1 = [tmp.scroll, cardStyle];
  items2 = [tmp.inner, contentStyle];
  let tmp6Result = null;
  if (null != headerText) {
    obj = { style: null, children: null };
    obj[0] = tmp.titleContainer;
    obj1 = { color: null, size: "xs" };
    obj1[0] = ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
    const items3 = [callback(tmp3(7988).NitroWheelIcon, obj1), ];
    const obj2 = { variant: "heading-sm/bold", children: null };
    obj2[1] = headerText;
    items3[1] = callback(tmp3(4734).Text, obj2);
    obj[1] = items3;
    tmp6Result = callback2(closure_3, obj);
  }
  const items4 = [tmp6Result, children, ];
  const obj3 = {
    style: items5,
    onPress,
    text: ctaText,
    color: require("../../../design/void/native.tsx").ButtonColors.GREEN,
    renderIcon() {
      return callback(lib(table[8]).NitroWheelIcon, { color: "white", size: "xs" });
    },
    renderLinearGradient: null
  };
  items5 = [tmp.upsellButton, ctaStyle];
  let fn;
  if (showLinearGradient) {
    fn = () => {
      const obj = { style: items, start: lib(dependencyMap[11]).HorizontalGradient.START, end: lib(dependencyMap[11]).HorizontalGradient.END, colors: Gradients.PREMIUM_TIER_2_TRI_COLOR };
      items = [lib.linearGradient];
      return closure_1_6(LinearGradientDefault, obj);
    };
  }
  obj3[5] = fn;
  items4[2] = callback(require("../../../design/void/native.tsx").ShinyButton, obj3);
  obj[3] = items4;
  obj[5] = callback2(closure_4, obj);
  return callback(require("../../../design/void/native.tsx").GradientBorder, obj);
};