// === Module 10469: GiftingBadgeProgressBanner ===

// Module 10469 (GiftingBadgeProgressBanner)
import noopAll from "noop" /* 19 */;
import encodeProperties from "encodeProperties" /* 503 */;
import ThemesDefault from "Themes" /* 712 */;
import messagesProxyDefault from "messagesProxy" /* 2466 */;
import Text from "Text" /* 4442 */;
import contextDefault from "context" /* 5918 */;
import trackImpressionDefault from "trackImpression" /* 8832 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, iconContainer: null };
createCacheKey = { flexDirection: "row", alignItems: "center", padding: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderStyle: "solid", borderColor: ThemesDefault.colors.BORDER_MUTED };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", justifyContent: "center", padding: ThemesDefault.space.PX_8, marginInlineEnd: ThemesDefault.space.PX_8 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignItems: "center", justifyContent: "center", padding: ThemesDefault.space.PX_8, marginInlineEnd: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgressBanner.tsx");

export default function GiftingBadgeProgressBanner(arg0) {
  ({ giftsToNextTier, nextTierName, nextTierIcon, analyticsLocation } = arg0);
  const tmp = callback();
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    let items1 = items;
  } else {
    items1 = [];
  }
  let obj = { name: null, type: null, properties: null };
  const tmp4 = contextDefault;
  obj[0] = encodeProperties.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER;
  obj[1] = encodeProperties.ImpressionTypes.VIEW;
  obj[2] = { gifts_to_next_tier: giftsToNextTier, next_tier: nextTierName, location_stack: tmp4(...items1).analyticsLocations };
  trackImpressionDefault(obj, { trackOnInitialLoad: true });
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.iconContainer, children: null };
  let tmp10Result = null != nextTierIcon;
  if (tmp10Result) {
    obj1 = { icon: null, size: 24 };
    obj1[0] = nextTierIcon;
    tmp10Result = tmp10(tmp2(10460), obj1);
  }
  obj[1] = tmp10Result;
  const items2 = [closure_4(View, obj), ];
  const obj2 = { variant: "text-md/semibold", children: null };
  const intl = tmp6(1236).intl;
  obj2[1] = intl.formatToPlainString(messagesProxyDefault["0+xfd9"], { giftsRemaining: giftsToNextTier, nextTier: nextTierName });
  items2[1] = closure_4(Text.Text, obj2);
  obj[1] = items2;
  return closure_5(View, obj);
};