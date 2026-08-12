// discord_app/modules/premium/gifting/native/views/GiftingBadgeProgressBanner.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { encodeProperties } from "../../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { context } from "../../../../app_analytics/useAnalyticsLocations.tsx";
import { trackImpression } from "../../../../app_analytics/useTrackImpression.tsx";
import { messagesProxy } from "../../GiftingBadge.messages.js";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, iconContainer: null };
createCacheKey = { flexDirection: "row", alignItems: "center", padding: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm, borderWidth: 1, borderStyle: "solid", borderColor: require("Themes").colors.BORDER_MUTED };
const merged = Object.assign(require("Themes").shadows.SHADOW_LOW);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", justifyContent: "center", padding: require("Themes").space.PX_8, marginInlineEnd: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignItems: "center", justifyContent: "center", padding: require("Themes").space.PX_8, marginInlineEnd: require("Themes").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgressBanner.tsx");

export default function GiftingBadgeProgressBanner(arg0) {
  let analyticsLocation;
  let giftsToNextTier;
  let nextTierIcon;
  let nextTierName;
  ({ giftsToNextTier, nextTierName, nextTierIcon, analyticsLocation } = arg0);
  const tmp = createCacheKey();
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    let items1 = items;
  } else {
    items1 = [];
  }
  let obj = { name: null, type: null, properties: null };
  const tmp4 = context;
  obj[0] = encodeProperties.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER;
  obj[1] = encodeProperties.ImpressionTypes.VIEW;
  obj[2] = { gifts_to_next_tier: giftsToNextTier, next_tier: nextTierName, location_stack: tmp4(...items1).analyticsLocations };
  trackImpression(obj, { trackOnInitialLoad: true });
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.iconContainer, children: null };
  let tmp10Result = null != nextTierIcon;
  if (tmp10Result) {
    const obj1 = { icon: null, size: 24 };
    obj1[0] = nextTierIcon;
    tmp10Result = tmp10(tmp2(10087), obj1);
  }
  obj[1] = tmp10Result;
  const items2 = [closure_4(View, obj), ];
  const obj2 = { variant: "text-md/semibold", children: null };
  const intl = tmp6(1236).intl;
  obj2[1] = intl.formatToPlainString(messagesProxy["0+xfd9"], { giftsRemaining: giftsToNextTier, nextTier: nextTierName });
  items2[1] = closure_4(Text.Text, obj2);
  obj[1] = items2;
  return closure_5(View, obj);
};