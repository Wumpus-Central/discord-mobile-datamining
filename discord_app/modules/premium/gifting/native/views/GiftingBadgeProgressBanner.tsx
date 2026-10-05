// === Module 10490: GiftingBadgeProgressBanner ===

// Module 10490 (GiftingBadgeProgressBanner)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import _modDef2589 from "module_2589" /* 2589 */;
import Text_Text from "Text/Text" /* 4886 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8422 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10481 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, iconContainer: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_MUTED };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj3 = { alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8, marginInlineEnd: nativeDefault.space.PX_8 };
let closure_6 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocation;
  let giftsToNextTier;
  let items2;
  let nextTierIcon;
  let nextTierName;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(21);
  ({ giftsToNextTier, nextTierName, nextTierIcon, analyticsLocation } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] !== analyticsLocation) {
    let items1;
    if (null != analyticsLocation) {
      const items = [analyticsLocation];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = analyticsLocation;
    cResult[1] = items1;
    tmp5 = items1;
  } else {
    tmp5 = cResult[1];
  }
  const tmp8 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp8(...tmp5).analyticsLocations;
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === giftsToNextTier) {
      let tmp9;
      let tmp11;
      let tmp13;
      if (cResult[4] === nextTierName) {
        tmp9 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { trackOnInitialLoad: true };
        cResult[6] = obj2;
        tmp11 = obj2;
      } else {
        tmp11 = cResult[6];
      }
      useTrackImpressionDefault(tmp9, tmp11);
      const container = tmp4.container;
      if (cResult[7] !== nextTierIcon) {
        let tmp15 = null != nextTierIcon;
        if (tmp15) {
          const obj3 = { icon: nextTierIcon, size: 24 };
          tmp15 = React3(GiftingBadgeIconDefault, obj3);
        }
        cResult[7] = nextTierIcon;
        cResult[8] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === tmp4.iconContainer) {
        let tmp17;
        if (cResult[10] === tmp13) {
          tmp17 = cResult[11];
        }
        if (cResult[12] === giftsToNextTier) {
          let tmp21;
          let tmp23;
          if (cResult[13] === nextTierName) {
            tmp21 = cResult[14];
          }
          if (cResult[15] !== tmp21) {
            const obj4 = { variant: "text-md/semibold", children: tmp21 };
            const tmp25 = React3(Text_Text.Text, obj4);
            cResult[15] = tmp21;
            cResult[16] = tmp25;
            tmp23 = tmp25;
          } else {
            tmp23 = cResult[16];
          }
          if (cResult[17] === tmp4.container) {
            if (cResult[18] === tmp17) {
              let tmp26;
              if (cResult[19] === tmp23) {
                tmp26 = cResult[20];
              }
              return tmp26;
            }
          }
          const obj5 = { style: container, children: items2 };
          items2 = [tmp17, tmp23];
          const tmp29 = hasOwnProperty(View, obj5);
          cResult[17] = tmp4.container;
          cResult[18] = tmp17;
          cResult[19] = tmp23;
          cResult[20] = tmp29;
          tmp26 = tmp29;
        }
        const intl = intl2.intl;
        const obj6 = { giftsRemaining: giftsToNextTier, nextTier: nextTierName };
        const formatToPlainStringResult = intl.formatToPlainString(_modDef2589["0+xfd9"], obj6);
        cResult[12] = giftsToNextTier;
        cResult[13] = nextTierName;
        cResult[14] = formatToPlainStringResult;
        tmp21 = formatToPlainStringResult;
      }
      const obj7 = { style: tmp4.iconContainer, children: tmp13 };
      const tmp20 = React3(View, obj7);
      cResult[9] = tmp4.iconContainer;
      cResult[10] = tmp13;
      cResult[11] = tmp20;
      tmp17 = tmp20;
    }
  }
  const obj8 = { name: discord_common_AnalyticsUtils.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: { gifts_to_next_tier: giftsToNextTier, next_tier: nextTierName, location_stack: analyticsLocations } };
  cResult[2] = analyticsLocations;
  cResult[3] = giftsToNextTier;
  cResult[4] = nextTierName;
  cResult[5] = obj8;
  tmp9 = obj8;
}) : ((arg0) => {
  let analyticsLocation;
  let giftsToNextTier;
  let intl;
  let items1;
  let items2;
  let nextTierIcon;
  let nextTierName;
  let tmp10Result;
  ({ giftsToNextTier, nextTierName, nextTierIcon, analyticsLocation } = arg0);
  const tmp = closure_6();
  const tmp4 = useAnalyticsLocationsDefault;
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    items1 = items;
  } else {
    items1 = [];
  }
  const analyticsLocations = tmp4(...items1).analyticsLocations;
  const obj = { name: discord_common_AnalyticsUtils.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: { gifts_to_next_tier: giftsToNextTier, next_tier: nextTierName, location_stack: analyticsLocations } };
  const tmp2Result = useTrackImpressionDefault;
  tmp2Result(obj, { trackOnInitialLoad: true });
  const obj3 = { style: tmp.iconContainer, children: tmp10Result };
  tmp10Result = null != nextTierIcon;
  const obj2 = { style: tmp.container, children: items2 };
  if (tmp10Result) {
    const obj4 = { icon: nextTierIcon, size: 24 };
    tmp10Result = React3(GiftingBadgeIconDefault, obj4);
  }
  items2 = [React3(View, obj3), ];
  const obj5 = { variant: "text-md/semibold", children: intl.formatToPlainString(_modDef2589["0+xfd9"], { giftsRemaining: giftsToNextTier, nextTier: nextTierName }) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items2[1] = React3(Text, obj5);
  return hasOwnProperty(View, obj2);
});
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgressBanner.tsx");

export default tmp6;