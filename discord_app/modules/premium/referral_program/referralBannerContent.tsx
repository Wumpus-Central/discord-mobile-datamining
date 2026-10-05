// === Module 13255: referralBannerContent ===

// Module 13255 (referralBannerContent)
import Constants2 from "Constants" /* 1085 */;
import intl12 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import ReferralTrialActionCreators from "ReferralTrialActionCreators" /* 6962 */;
import useReferralProgramBannerDetails from "useReferralProgramBannerDetails" /* 13242 */;
import PremiumReferralIncentivesExperiment from "PremiumReferralIncentivesExperiment" /* 13243 */;
import Constants from "Constants" /* 13241 */;
import size from "module_2" /* 2 */;

let _require, closure_0, closure_1, closure_2, dependencyMap, importDefault;

let c3;
let closure_4;
({ REFERRAL_INCENTIVE_DISCOUNT_PERCENTAGE: c3, REFERRAL_INCENTIVE_ORBS_PER_CONVERSION: closure_4 } = Constants);
const HelpdeskArticles = Constants2.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/premium/referral_program/referralBannerContent.tsx");

export const getAllReferralsSent = function getAllReferralsSent(size) {
  return size.size === useReferralProgramBannerDetails.MAX_REFERRALS_SENT;
};
export const getShouldShowSpendOrbsCta = function getShouldShowSpendOrbsCta(numSent, referralRewardType) {
  const tmp3 = referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS && numSent.numSent === useReferralProgramBannerDetails.MAX_REFERRALS_SENT && numSent.numConverted >= 1;
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
  let stringResult;
  if (arg0 === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS) {
    const intl3 = intl12.intl;
    stringResult = intl3.string(intl12.t.tAlkl4);
  } else if (arg0 === PremiumReferralIncentivesExperiment.ReferralRewardType.DISCOUNT) {
    const intl2 = intl12.intl;
    const obj = { discountPercent };
    stringResult = intl2.formatToPlainString(intl12.t["/JJ9I5"], obj);
  } else {
    const intl = intl12.intl;
    stringResult = intl.string(intl12.t.USo4s7);
  }
  return stringResult;
};
export const getReferralBannerBodyText = function getReferralBannerBodyText(arg0, numRewardGranted, arg2) {
  let formatResult6;
  const obj = HelpdeskUtilsDefault;
  const articleURL = obj.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
  if (arg0) {
    let formatResult5;
    if (null != arg2) {
      let formatResult3;
      if (numRewardGranted.numRewardGranted === useReferralProgramBannerDetails.MAX_REFERRALS_SENT) {
        let formatResult;
        if (arg2 === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS) {
          const intl11 = intl12.intl;
          const obj2 = { helpdeskArticle: articleURL };
          formatResult = intl11.format(intl12.t.OluhLp, obj2);
        } else {
          const intl10 = intl12.intl;
          const obj3 = { helpdeskArticle: articleURL };
          formatResult = intl10.format(intl12.t["8BYihN"], obj3);
        }
        formatResult3 = formatResult;
      } else if (numRewardGranted.numSent === useReferralProgramBannerDetails.MAX_REFERRALS_SENT) {
        let formatResult1;
        if (arg2 === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS) {
          const intl9 = intl12.intl;
          const obj4 = { helpdeskArticle: articleURL };
          formatResult1 = intl9.format(intl12.t["1aV1j9"], obj4);
        } else {
          const intl8 = intl12.intl;
          const obj5 = { helpdeskArticle: articleURL };
          formatResult1 = intl8.format(intl12.t.QNrPuS, obj5);
        }
        formatResult3 = formatResult1;
      } else if (arg0) {
        let formatResult2;
        if (arg2 === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS) {
          const intl7 = intl12.intl;
          const obj6 = { numOrbs, helpdeskArticle: articleURL };
          formatResult2 = intl7.format(intl12.t.cfE0uG, obj6);
        } else {
          const intl6 = intl12.intl;
          const obj7 = { helpdeskArticle: articleURL };
          formatResult2 = intl6.format(intl12.t["+fcvlI"], obj7);
        }
        formatResult3 = formatResult2;
      } else {
        const intl5 = intl12.intl;
        const obj8 = { helpdeskArticle: articleURL };
        formatResult3 = intl5.format(intl12.t["a0+Jwv"], obj8);
      }
      formatResult5 = formatResult3;
    } else if (numRewardGranted.numSent === useReferralProgramBannerDetails.MAX_REFERRALS_SENT) {
      let formatResult4;
      if (numRewardGranted.numRedeemed === useReferralProgramBannerDetails.MAX_REFERRALS_SENT) {
        const intl4 = intl12.intl;
        const obj9 = { helpdeskArticle: articleURL };
        formatResult4 = intl4.format(intl12.t["1aEjsH"], obj9);
      } else {
        const intl3 = intl12.intl;
        const obj10 = { helpdeskArticle: articleURL };
        formatResult4 = intl3.format(intl12.t["+u3AOO"], obj10);
      }
      formatResult5 = formatResult4;
    } else {
      const intl2 = intl12.intl;
      const obj11 = { helpdeskArticle: articleURL };
      formatResult5 = intl2.format(intl12.t["omMr+V"], obj11);
    }
    formatResult6 = formatResult5;
  } else {
    const intl = intl12.intl;
    const obj12 = { helpdeskArticle: articleURL };
    formatResult6 = intl.format(intl12.t["zWhX/Q"], obj12);
  }
  return formatResult6;
};