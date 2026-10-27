// === Module 10517: GiftingBadgeProgressBanner ===

// Module 10517 (GiftingBadgeProgressBanner)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import _modDef2631 from "module_2631" /* 2631 */;
import Text_Text from "Text/Text" /* 5235 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7255 */;
import useTrackImpressionDefault from "useTrackImpression" /* 9360 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10508 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const PX_40 = nativeDefault.space.PX_40;
const createStyles = fn(4972);
let obj2 = { container: null, iconContainer: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.container = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_MUTED };
let size = { alignItems: "center", justifyContent: "center", width: PX_40, height: PX_40, marginInlineEnd: nativeDefault.space.PX_8 };
obj2.iconContainer = size;
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_MUTED };
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgressBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgeProgressBanner(arg0) {
  const cResult = c.c(21);
  ({ giftsToNextTier, nextTierName, nextTierIcon, analyticsLocation } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== analyticsLocation) {
    if (null != analyticsLocation) {
      const items = [analyticsLocation];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = analyticsLocation;
    cResult[1] = items1;
  } else {
    const items2 = [];
    HermesBuiltin.arraySpread(cResult[1], 0);
    const analyticsLocations = HermesBuiltin.apply(items2, undefined).analyticsLocations;
    if (cResult[2] === analyticsLocations) {
      if (cResult[3] === giftsToNextTier) {
        if (cResult[4] === nextTierName) {
          let tmp15 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { trackOnInitialLoad: true };
          cResult[6] = obj2;
          let tmp17 = obj2;
        } else {
          tmp17 = cResult[6];
        }
        useTrackImpressionDefault(tmp15, tmp17);
        if (cResult[7] !== nextTierIcon) {
          let tmp21 = null != nextTierIcon;
          if (tmp21) {
            const obj3 = { icon: nextTierIcon, size: PX_40 };
            tmp21 = React4(GiftingBadgeIconDefault, obj3);
          }
          cResult[7] = nextTierIcon;
          cResult[8] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[8];
        }
        if (cResult[9] === tmp4.iconContainer) {
          if (cResult[10] === tmp19) {
            let tmp24 = cResult[11];
          }
          if (cResult[12] === giftsToNextTier) {
            if (cResult[13] === nextTierName) {
              let tmp28 = cResult[14];
            }
            if (cResult[15] !== tmp28) {
              const obj4 = { variant: "text-md/semibold", children: tmp28 };
              const tmp32 = React4(Text_Text.Text, obj4);
              cResult[15] = tmp28;
              cResult[16] = tmp32;
              let tmp30 = tmp32;
            } else {
              tmp30 = cResult[16];
            }
            if (cResult[17] === tmp4.container) {
              if (cResult[18] === tmp24) {
                if (cResult[19] === tmp30) {
                  let tmp33 = cResult[20];
                }
                return tmp33;
              }
            }
            const obj5 = { style: tmp4.container, children: null };
            const items3 = [tmp24, tmp30];
            obj5.children = items3;
            const tmp36 = hasOwnProperty(View, obj5);
            cResult[17] = tmp4.container;
            cResult[18] = tmp24;
            cResult[19] = tmp30;
            cResult[20] = tmp36;
            tmp33 = tmp36;
          }
          const intl = util.intl;
          const obj6 = { giftsRemaining: giftsToNextTier, nextTier: nextTierName };
          const formatToPlainStringResult = intl.formatToPlainString(_modDef2631["0+xfd9"], obj6);
          cResult[12] = giftsToNextTier;
          cResult[13] = nextTierName;
          cResult[14] = formatToPlainStringResult;
          tmp28 = formatToPlainStringResult;
        }
        const obj7 = { style: tmp4.iconContainer, children: tmp19 };
        const tmp27 = React4(View, obj7);
        cResult[9] = tmp4.iconContainer;
        cResult[10] = tmp19;
        cResult[11] = tmp27;
        tmp24 = tmp27;
      }
    }
    const obj8 = { name: discord_common_AnalyticsUtils.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: null };
    const obj9 = { gifts_to_next_tier: giftsToNextTier, next_tier: nextTierName, location_stack: analyticsLocations };
    obj8.properties = obj9;
    cResult[2] = analyticsLocations;
    cResult[3] = giftsToNextTier;
    cResult[4] = nextTierName;
    cResult[5] = obj8;
    tmp15 = obj8;
  }
}) : (function GiftingBadgeProgressBanner(arg0) {
  ({ giftsToNextTier, nextTierName, nextTierIcon, analyticsLocation } = arg0);
  const tmp = closure_7();
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    let items1 = items;
  } else {
    items1 = [];
  }
  const obj = { name: null, type: null, properties: null };
  const tmp4 = useAnalyticsLocationsDefault;
  obj.name = discord_common_AnalyticsUtils.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER;
  obj.type = discord_common_AnalyticsUtils.ImpressionTypes.VIEW;
  obj.properties = { gifts_to_next_tier: giftsToNextTier, next_tier: nextTierName, location_stack: tmp4(...items1).analyticsLocations };
  useTrackImpressionDefault(obj, { trackOnInitialLoad: true });
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.iconContainer, children: null };
  let tmp10Result = null != nextTierIcon;
  if (tmp10Result) {
    const obj4 = { icon: nextTierIcon, size: PX_40 };
    tmp10Result = React4(GiftingBadgeIconDefault, obj4);
  }
  obj3.children = tmp10Result;
  const items2 = [React4(View, obj3), ];
  const obj5 = { variant: "text-md/semibold", children: null };
  const intl = util.intl;
  obj5.children = intl.formatToPlainString(_modDef2631["0+xfd9"], { giftsRemaining: giftsToNextTier, nextTier: nextTierName });
  items2[1] = React4(Text_Text.Text, obj5);
  obj2.children = items2;
  return hasOwnProperty(View, obj2);
});