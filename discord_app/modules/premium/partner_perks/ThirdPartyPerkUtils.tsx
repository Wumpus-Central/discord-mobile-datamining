// discord_app/modules/premium/partner_perks/ThirdPartyPerkUtils.tsx
import Constants from "../../../Constants.tsx";
import util from "../../../intl/index.native.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import themes from "../../../design/utils/shared/themes.tsx";
import getPartnerMarketingComponentDefault from "../promotions/third_party/getPartnerMarketingComponent.tsx";
import PremiumConstants from "../PremiumConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({
  PremiumTypes: c3,
  SubscriptionPlanInfo: closure_4,
  PREMIUM_TIER_2_AUTH3_TRIAL_ID,
  PREMIUM_TIER_2_GOOGLE_PLAY_SIX_MONTH_TRIAL_ID,
  PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID,
  PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID,
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID,
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID,
  PREMIUM_TIER_2_REFERRAL_TRIAL_ID,
  PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID,
} = PremiumConstants);
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
const items = [
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_REFERRAL_TRIAL_ID,
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID,
  PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID,
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID,
  PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID,
  PREMIUM_TIER_2_AUTH3_TRIAL_ID,
  PREMIUM_TIER_2_GOOGLE_PLAY_SIX_MONTH_TRIAL_ID,
  PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID,
];
const set = new Set(items);
const ThirdPartyPerkIneligibilityReason = {
  NO_SUBSCRIPTION: "no_subscription",
  NOT_TIER_2_SUBSCRIPTION: "not_tier_2_subscription",
  SUBSCRIPTION_STATUS_NOT_ALLOWED: "subscription_status_not_allowed",
  TRIAL_USER_NOT_ELIGIBLE: "trial_user_not_eligible",
};
let obj2 = { CAN_CLAIM: "CAN_CLAIM", BLOCK_CLAIM: "BLOCKED", UPSELL: "UPSELL" };
const result = size.fileFinishedImporting("modules/premium/partner_perks/ThirdPartyPerkUtils.tsx");

export const THIRD_PARTY_PERKS_ELIGIBLE_TRIAL_IDS = set;
export { ThirdPartyPerkIneligibilityReason };
export function isUserEligibleForThirdPartyPerks(stateFromStores, stateFromStores1) {
  if (null == stateFromStores1) {
    let isPremiumGroupMemberResult;
    if (stateFromStores != null) {
      isPremiumGroupMemberResult = stateFromStores.isPremiumGroupMember();
    }
    if (true === isPremiumGroupMemberResult) {
      obj2 = { isEligible: true, reason: null };
    } else {
      obj2 = { isEligible: false, reason: obj.NO_SUBSCRIPTION };
    }
    return obj2;
  } else {
    const premiumPlanItem = PremiumUtils.getPremiumPlanItem(stateFromStores1);
    if (null != premiumPlanItem) {
      let premiumType;
      if (React4[premiumPlanItem.planId] != null) {
        premiumType = tmp18.premiumType;
      }
      if (premiumType === TIER_2.TIER_2) {
        let tmp4 = stateFromStores1.status === SubscriptionStatusTypes.PAUSED;
        if (tmp4) {
          let isFractionalPremiumResult;
          if (stateFromStores != null) {
            isFractionalPremiumResult = stateFromStores.isFractionalPremium();
          }
          tmp4 = true === isFractionalPremiumResult;
        }
        if (!stateFromStores1.statusAllowsPerks) {
          if (!tmp4) {
            obj = { isEligible: false, reason: null };
            obj.reason = obj.SUBSCRIPTION_STATUS_NOT_ALLOWED;
            return obj;
          }
        }
        let hasItem = null == stateFromStores1.trialId || !stateFromStores1.hasActiveTrial;
        if (!hasItem) {
          hasItem = set.has(stateFromStores1.trialId);
        }
        if (hasItem) {
          let obj3 = { isEligible: true, reason: null };
        } else {
          obj3 = { isEligible: false, reason: obj.TRIAL_USER_NOT_ELIGIBLE };
        }
      }
    }
    const obj4 = { isEligible: false, reason: obj.NOT_TIER_2_SUBSCRIPTION };
    return obj4;
  }
}
export const ThirdPartyPerkClaimState = obj2;
export function getThirdPartyPerkClaimState(reason) {
  if (null === reason) {
    return obj2.CAN_CLAIM;
  } else {
    if (obj.NO_SUBSCRIPTION !== reason) {
      if (obj.NOT_TIER_2_SUBSCRIPTION !== reason) {
        if (obj.SUBSCRIPTION_STATUS_NOT_ALLOWED !== reason) {
          if (obj.TRIAL_USER_NOT_ELIGIBLE === reason) {
            return obj2.BLOCK_CLAIM;
          }
        }
      }
    }
    return obj2.UPSELL;
  }
}
export function formatThirdPartyPromotionEndDateForPerkCard(arg0) {
  if (null != arg0) {
    const _Intl = Intl;
    const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, {
      day: "numeric",
      month: "short",
      timeZone: "UTC",
    });
    return dateTimeFormat.format(arg0);
  }
}
export function getMarketingComponentAsset(properties) {
  properties = properties.properties.properties;
  const oneofKind = properties.oneofKind;
  if ("premiumHomeRewardsPerkCard" === oneofKind) {
    return properties.premiumHomeRewardsPerkCard.asset;
  } else if ("marketingPageRewardsBentoBox" === oneofKind) {
    return properties.marketingPageRewardsBentoBox.asset;
  } else if ("outboundPromotionPopover" === oneofKind) {
    return properties.outboundPromotionPopover.asset;
  } else {
    return "outboundPromotionClaimModalCard" === oneofKind
      ? properties.outboundPromotionClaimModalCard.asset
      : undefined;
  }
}
export function getPartnerMarketingComponentAssetUrl(arg0, arg1, theme) {
  const tmp2 = getPartnerMarketingComponentDefault(arg0, arg1);
  if (null == tmp2) {
    if (null != undefined) {
      return themes.isThemeDark(theme) ? undefined.darkUrl : undefined.lightUrl;
    }
  } else {
    premiumHomeRewardsPerkCard = tmp2.properties.properties;
    const oneofKind = premiumHomeRewardsPerkCard.oneofKind;
    if ("premiumHomeRewardsPerkCard" === oneofKind) {
      ({ premiumHomeRewardsPerkCard, asset } = premiumHomeRewardsPerkCard);
    } else {
      if ("marketingPageRewardsBentoBox" === oneofKind) {
        asset = premiumHomeRewardsPerkCard.marketingPageRewardsBentoBox.asset;
      } else if ("outboundPromotionPopover" !== oneofKind) {
        if ("outboundPromotionClaimModalCard" === oneofKind) {
          asset = premiumHomeRewardsPerkCard.outboundPromotionClaimModalCard.asset;
        }
      }
      asset = premiumHomeRewardsPerkCard.outboundPromotionPopover.asset;
    }
  }
}
