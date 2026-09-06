// === Module 10756: GiftingBadgeProgressBanner ===

// Module 10756 (GiftingBadgeProgressBanner)
import nativeDefault from "native" /* 576 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import _modDef2492 from "module_2492" /* 2492 */;
import Text_Text from "Text/Text" /* 4556 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8768 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, iconContainer: null };
createStyles = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_MUTED };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
createStyles.container = createStyles;
createStyles.iconContainer = { alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8, marginInlineEnd: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgressBanner.tsx");

export default function GiftingBadgeProgressBanner(arg0) {
  ({ giftsToNextTier, nextTierName, nextTierIcon, analyticsLocation } = arg0);
  const tmp = closure_6();
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    let items1 = items;
  } else {
    items1 = [];
  }
  let obj = { name: null, type: null, properties: null };
  const tmp4 = useAnalyticsLocationsDefault;
  obj.name = discord_common_AnalyticsUtils.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER;
  obj.type = discord_common_AnalyticsUtils.ImpressionTypes.VIEW;
  obj.properties = { gifts_to_next_tier: giftsToNextTier, next_tier: nextTierName, location_stack: tmp4(...items1).analyticsLocations };
  useTrackImpressionDefault(obj, { trackOnInitialLoad: true });
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.iconContainer, children: null };
  let tmp10Result = null != nextTierIcon;
  if (tmp10Result) {
    const obj1 = { icon: nextTierIcon, size: 24 };
    tmp10Result = tmp10(tmp2(10749), obj1);
  }
  obj.children = tmp10Result;
  const items2 = [React4(View, obj), ];
  const obj2 = { variant: "text-md/semibold", children: null };
  const intl = tmp6(1114).intl;
  obj2.children = intl.formatToPlainString(_modDef2492["0+xfd9"], { giftsRemaining: giftsToNextTier, nextTier: nextTierName });
  items2[1] = React4(Text_Text.Text, obj2);
  obj.children = items2;
  return hasOwnProperty(View, obj);
};