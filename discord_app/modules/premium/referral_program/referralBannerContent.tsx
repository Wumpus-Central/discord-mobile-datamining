// discord_app/modules/premium/referral_program/referralBannerContent.tsx
import Constants2 from "../../../Constants.tsx";
import util from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import ReferralTrialActionCreators from "../ReferralTrialActionCreators.tsx";
import useReferralProgramBannerDetails from "hooks/useReferralProgramBannerDetails.tsx";
import PremiumReferralIncentivesExperiment from "../experiments/PremiumReferralIncentivesExperiment.tsx";
import Constants from "Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ REFERRAL_INCENTIVE_DISCOUNT_PERCENTAGE: c3, REFERRAL_INCENTIVE_ORBS_PER_CONVERSION: closure_4 } = Constants);
const HelpdeskArticles = Constants2.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/premium/referral_program/referralBannerContent.tsx");

export const getAllReferralsSent = function getAllReferralsSent(size) {
  return size.size === useReferralProgramBannerDetails.MAX_REFERRALS_SENT;
};
export const getShouldShowSpendOrbsCta = function getShouldShowSpendOrbsCta(numSent, referralRewardType) {
  let tmp3 = referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS;
  if (tmp3) {
    tmp3 = numSent.numSent === useReferralProgramBannerDetails.MAX_REFERRALS_SENT;
  }
  if (tmp3) {
    tmp3 = numSent.numConverted >= 1;
  }
  return tmp3;
};
export const getReferralStatus = function getReferralStatus(numSent) {
  _require = 0;
  importDefault = 0;
  dependencyMap = 0;
  const item = numSent.forEach((item) => {
    if (item === ReferralTrialActionCreators.ReferralOfferStatus.REFERRER_REWARD_GRANTED) {
      closure_0 = closure_0 + 1;
      closure_1 = closure_1 + 1;
      closure_2 = closure_2 + 1;
    } else if (item === ReferralTrialActionCreators.ReferralOfferStatus.CONVERTED) {
      closure_1 = closure_1 + 1;
      closure_2 = closure_2 + 1;
    } else if (item === ReferralTrialActionCreators.ReferralOfferStatus.REDEEMED) {
      closure_2 = closure_2 + 1;
    }
  });
  return { numRewardGranted: _require, numConverted: importDefault, numRedeemed: dependencyMap, numSent: numSent.size };
};
export const getReferralBannerHeadingText = function getReferralBannerHeadingText(arg0) {
  if (arg0 === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t.tAlkl4);
  } else if (arg0 === PremiumReferralIncentivesExperiment.ReferralRewardType.DISCOUNT) {
    const intl2 = util.intl;
    const obj = { discountPercent };
    stringResult = intl2.formatToPlainString(util.t["/JJ9I5"], obj);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.USo4s7);
  }
  return stringResult;
};
export const getReferralBannerBodyText = function getReferralBannerBodyText(arg0, numSent, arg2) {
  let obj = dependencyMap;
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
  if (arg0) {
    if (null == arg2) {
      let v1aEjsH = require;
      if (numSent.numSent === useReferralProgramBannerDetails.MAX_REFERRALS_SENT) {
        if (numSent.numRedeemed === v1aEjsH(13698).MAX_REFERRALS_SENT) {
          const intl4 = v1aEjsH(1115).intl;
          v1aEjsH = v1aEjsH(1115).t["1aEjsH"];
          const obj3 = { helpdeskArticle: articleURL };
          let formatResult = intl4.format(v1aEjsH, obj3);
        } else {
          const intl3 = v1aEjsH(1115).intl;
          const obj4 = { helpdeskArticle: articleURL };
          formatResult = intl3.format(v1aEjsH(1115).t["+u3AOO"], obj4);
        }
      } else {
        const intl2 = v1aEjsH(1115).intl;
        const obj5 = { helpdeskArticle: articleURL };
        intl2.format(v1aEjsH(1115).t["omMr+V"], obj5);
      }
    }
    let OluhLp = require;
    if (numSent.numRewardGranted !== useReferralProgramBannerDetails.MAX_REFERRALS_SENT) {
      if (numSent.numSent === OluhLp(13698).MAX_REFERRALS_SENT) {
        if (arg2 === OluhLp(13699).ReferralRewardType.ORBS) {
          const intl9 = OluhLp(1115).intl;
          const obj6 = { helpdeskArticle: articleURL };
          let formatResult2 = intl9.format(OluhLp(1115).t["1aV1j9"], obj6);
        } else {
          const intl8 = OluhLp(1115).intl;
          const obj7 = { helpdeskArticle: articleURL };
          formatResult2 = intl8.format(OluhLp(1115).t.QNrPuS, obj7);
        }
      } else if (arg0) {
        if (arg2 === OluhLp(13699).ReferralRewardType.ORBS) {
          const intl7 = OluhLp(1115).intl;
          const obj8 = { numOrbs, helpdeskArticle: articleURL };
          let formatResult3 = intl7.format(OluhLp(1115).t.cfE0uG, obj8);
        } else {
          const intl6 = OluhLp(1115).intl;
          const obj9 = { helpdeskArticle: articleURL };
          formatResult3 = intl6.format(OluhLp(1115).t["+fcvlI"], obj9);
        }
      } else {
        const intl5 = OluhLp(1115).intl;
        const obj10 = { helpdeskArticle: articleURL };
        intl5.format(OluhLp(1115).t["a0+Jwv"], obj10);
      }
    }
    if (arg2 === OluhLp(13699).ReferralRewardType.ORBS) {
      const intl11 = OluhLp(1115).intl;
      OluhLp = OluhLp(1115).t.OluhLp;
      obj = { helpdeskArticle: articleURL };
      let formatResult5 = intl11.format(OluhLp, obj);
    } else {
      const intl10 = OluhLp(1115).intl;
      const obj11 = { helpdeskArticle: articleURL };
      formatResult5 = intl10.format(OluhLp(1115).t["8BYihN"], obj11);
    }
  } else {
    const intl = util.intl;
    const obj12 = { helpdeskArticle: articleURL };
    return intl.format(util.t["zWhX/Q"], obj12);
  }
};
