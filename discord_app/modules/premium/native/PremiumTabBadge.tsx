// discord_app/modules/premium/native/PremiumTabBadge.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import obj132 from "../../../utils/PlatformUtils.tsx";
import encodeProperties from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import keys from "../../../ConstantsIOS.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import AccessibilityAnnouncer from "../../../design/shared.tsx";
import DismissibleContent from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import getPremiumPlanItem from "../../../utils/PremiumUtils.tsx";
import UNSAFE_isDismissibleContentDismissed from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/04756_LinearGradient.js";
import useSelectedDismissibleContent from "../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import usePremiumTrialOffer from "../hooks/usePremiumTrialOffer.android.tsx";
import usePremiumDiscountOffer from "../hooks/usePremiumDiscountOffer.android.tsx";
import usePromotionMarketingComponent from "../hooks/usePromotionMarketingComponent.tsx";
import MarketingComponentType from "../../../../discord_common/js/shared/shared-constants/MarketingComponentType.tsx";
import getReferralTrialOfferExpirationCopy from "../referral_program/ReferralProgramUtils.tsx";
import useIsEligibleSenderForReferralProgram from "../referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx";
import trackImpressionDefault from "../../app_analytics/useTrackImpression.tsx";
import registerAssetDefault from "../../../../_runtime/14339_registerAsset.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import reset from "../../../stores/billing/SubscriptionStore.tsx";
import { PREMIUM_TIER_2_REFERRAL_TRIAL_ID as closure_6 } from "../PremiumConstants.tsx";
import { Gradients } from "../../colors/native/ColorConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function ThemedTabBadge(children) {
  const tmp = callback4();
  let obj = AccessibilityAnnouncer;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const items = [tmp.badge, ];
  obj = { style: items, children: null };
  items[1] = isThemeDarkResult ? tmp.badgeBackgroundDarkTheme : tmp.badgeBackgroundLightTheme;
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "text-overlay-dark";
  }
  const items1 = [, ];
  ({ uppercase: arr2[0], text: arr2[1] } = tmp);
  obj[1] = callback(Text.Text, { variant: "eyebrow", color: str, style: items1, children: children.label });
  return callback(View, obj);
}
function OfferBadge(componentId) {
  componentId = componentId.componentId;
  ({ acked, badgeCopy, ackedBadgeCopy, promotionId } = componentId);
  const tmp = callback4();
  let obj = { component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB, component_id: componentId, promotion_id: promotionId };
  obj[2] = obj;
  obj = { disableTrack: null == componentId };
  trackImpressionDefault(obj, obj);
  if (acked) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.acked;
    const obj2 = { source: null, size: null, color: null, style: null };
    obj2[0] = registerAssetDefault;
    obj2[1] = Button.Icon.Sizes.EXTRA_SMALL;
    obj2[2] = tmp.icon.color;
    obj2[3] = tmp.icon;
    const items = [callback2(Button.Icon, obj2), ];
    const obj3 = { variant: "eyebrow", color: "interactive-text-default", style: null, children: null };
    const items1 = [, ];
    ({ uppercase: arr2[0], text: arr2[1] } = tmp);
    obj3[2] = items1;
    obj3[3] = ackedBadgeCopy;
    items[1] = callback2(Text.Text, obj3);
    obj1[1] = items;
    let tmp9 = callback3(View, obj1);
  } else {
    const obj4 = { label: null };
    obj4[0] = badgeCopy;
    tmp9 = callback2(ThemedTabBadge, obj4);
  }
  return tmp9;
}
noopAll;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { paddingVertical: 4, paddingHorizontal: 8, borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: ThemesDefault.radii.round };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.WHITE };
createCacheKey[4] = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[6] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
createCacheKey[7] = { textTransform: "uppercase" };
createCacheKey[8] = { paddingBottom: 2 };
createCacheKey[9] = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: ThemesDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default function PremiumTabBadge() {
  let tmp = callback4();
  let obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  obj1 = usePremiumDiscountOffer;
  const premiumDiscountOffer = obj1.usePremiumDiscountOffer();
  let obj3 = getPremiumPlanItem;
  const hasTier2Premium = obj3.useHasTier2Premium();
  let obj4 = UNSAFE_isDismissibleContentDismissed;
  const result = obj4.useIsDismissibleContentDismissed_UNSAFE(DismissibleContent.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
  let tmp7 = !result;
  if (!result) {
    tmp7 = hasTier2Premium;
  }
  let tmp2Result = initialize;
  const items = [closure_5];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let trialId;
  if (stateFromStores != null) {
    trialId = stateFromStores.trialId;
  }
  tmp2Result = useSelectedDismissibleContent;
  if (trialId === closure_6) {
    if (!tmp7) {
      let items1 = [DismissibleContent.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
    }
    [tmp14, r10051] = callback(tmp11(items1, undefined, true), 2);
    useSelectedDismissibleContent;
    if (!tmp7) {
      if (hasTier2Premium) {
        let items2 = [DismissibleContent.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      let tmp12Result = callback(tmp16(items2, undefined, true), 2);
      [tmp18, r10063] = tmp12Result;
      const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram();
      const tmp2Result2 = useIsEligibleSenderForReferralProgram;
      const isReferralProgramEntrypointBadgeAcknowledged = getReferralTrialOfferExpirationCopy.useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmp2Result3 = getReferralTrialOfferExpirationCopy;
      const promotionMarketingComponent = usePromotionMarketingComponent.usePromotionMarketingComponent(MarketingComponentType.MarketingComponentType.PREMIUM_TAB);
      const tmp2Result5 = useSelectedDismissibleContent;
      let prop = null;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = DismissibleContent.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
      }
      let str2;
      if (promotionMarketingComponent != null) {
        str2 = promotionMarketingComponent.promotionId;
      }
      if (str2 == null) {
        str2 = "";
      }
      tmp12Result = callback(tmp2Result5.useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true), 2);
      if (null != promotionMarketingComponent) {
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          obj = { acked: null, badgeCopy: null, ackedBadgeCopy: null, componentId: null, promotionId: null };
          obj[0] = tmp27 !== DismissibleContent.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
          obj[1] = promotionMarketingComponent.properties.properties.premiumTab.badgeLabel;
          obj[2] = promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel;
          ({ id: obj24[3], promotionId: obj24[4] } = promotionMarketingComponent);
          return callback2(OfferBadge, obj);
        }
      }
      if (tmp14 === DismissibleContent.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        const intl2 = getSystemLocale.intl;
        let stringResult = intl2.string(getSystemLocale.t.uO4bXn);
      } else {
        stringResult = null;
        if (tmp18 === DismissibleContent.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          const intl = getSystemLocale.intl;
          stringResult = intl.string(getSystemLocale.t["jyYgZ+"]);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          obj = { label: null };
          const intl3 = getSystemLocale.intl;
          obj[0] = intl3.string(getSystemLocale.t.RDE0Sc);
          return callback2(ThemedTabBadge, obj);
        }
      }
      if (tmp7) {
        obj1 = { style: null, colors: null, start: null, end: null, children: null };
        obj1[0] = tmp.tag;
        obj1[1] = Gradients.PREMIUM_TIER_2;
        obj1[2] = keys.HorizontalGradient.START;
        obj1[3] = keys.HorizontalGradient.END;
        const items3 = [tmp.uppercase, ];
        const tmp52 = LinearGradientDefault;
        let text;
        if (tmp2Result6.isAndroid()) {
          text = tmp.text;
        }
        const obj2 = { variant: "eyebrow", color: "text-overlay-light", style: null, children: null };
        items3[1] = text;
        obj2[2] = items3;
        const intl8 = getSystemLocale.intl;
        obj2[3] = intl8.string(getSystemLocale.t.y2b7CA);
        tmp = callback2(Text.Text, obj2);
        obj1[4] = tmp;
        let tmp47Result = callback2(tmp52, obj1);
        tmp2Result6 = obj132;
      } else if (null != premiumTrialOffer) {
        let expiresAt;
        if (premiumTrialOffer != null) {
          expiresAt = premiumTrialOffer.expiresAt;
        }
        obj3 = { acked: null, badgeCopy: null, ackedBadgeCopy: null };
        obj3[0] = null != expiresAt;
        const intl6 = getSystemLocale.intl;
        obj3[1] = intl6.string(getSystemLocale.t.OS9KPu);
        const intl7 = getSystemLocale.intl;
        obj3[2] = intl7.string(getSystemLocale.t.OS9KPu);
        tmp47Result = callback2(OfferBadge, obj3);
      } else if (null != premiumDiscountOffer) {
        if (premiumDiscountOffer.hasAcknowledged()) {
          obj4 = { style: null, children: null };
          const items4 = [, ];
          ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = tmp);
          obj4[0] = items4;
          const obj5 = { source: null, size: null, color: null, style: null };
          obj5[0] = registerAssetDefault;
          obj5[1] = Button.Icon.Sizes.EXTRA_SMALL;
          obj5[2] = tmp.icon.color;
          obj5[3] = tmp.icon;
          const items5 = [callback2(Button.Icon, obj5), ];
          const obj6 = { variant: "eyebrow", color: "interactive-text-default", style: null, children: null };
          const items6 = [, ];
          ({ uppercase: arr8[0], text: arr8[1] } = tmp);
          obj6[2] = items6;
          const intl5 = getSystemLocale.intl;
          obj6[3] = intl5.string(getSystemLocale.t["/DTtr6"]);
          items5[1] = callback2(Text.Text, obj6);
          obj4[1] = items5;
          let tmp41 = callback3(View, obj4);
        } else {
          const obj7 = { style: null, colors: null, start: null, end: null, children: null };
          obj7[0] = tmp.premiumDiscountBadge;
          obj7[1] = ["#db00a4", "#5968f0"];
          obj7[2] = keys.HorizontalGradient.START;
          obj7[3] = keys.HorizontalGradient.END;
          const obj8 = { variant: "eyebrow", color: "text-overlay-light", style: null, children: null };
          const items7 = [, ];
          ({ uppercase: arr5[0], text: arr5[1] } = tmp);
          obj8[2] = items7;
          const intl4 = getSystemLocale.intl;
          obj8[3] = intl4.string(getSystemLocale.t["/DTtr6"]);
          obj7[4] = callback2(Text.Text, obj8);
          tmp41 = callback2(LinearGradientDefault, obj7);
        }
      } else {
        tmp47Result = null;
        if (null != stringResult) {
          const obj9 = { style: null, colors: null, start: null, end: null, children: null };
          obj9[0] = tmp.tag;
          obj9[1] = Gradients.PREMIUM_TIER_2;
          obj9[2] = keys.HorizontalGradient.START;
          obj9[3] = keys.HorizontalGradient.END;
          const items8 = [tmp.uppercase, ];
          const tmp34 = LinearGradientDefault;
          let text1;
          if (tmp2Result7.isAndroid()) {
            text1 = tmp.text;
          }
          const obj10 = { variant: "eyebrow", color: "text-overlay-light", style: null, children: null };
          items8[1] = text1;
          obj10[2] = items8;
          obj10[3] = stringResult;
          obj9[4] = callback2(Text.Text, obj10);
          tmp47Result = callback2(tmp34, obj9);
          tmp2Result7 = obj132;
        }
      }
      const tmp2Result4 = usePromotionMarketingComponent;
    }
    items2 = [];
    const tmp13 = callback(tmp11(items1, undefined, true), 2);
  }
  items1 = [];
};