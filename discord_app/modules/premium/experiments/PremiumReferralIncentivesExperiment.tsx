// discord_app/modules/premium/experiments/PremiumReferralIncentivesExperiment.tsx
import react from "../../../../_runtime/00576_react.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj3;
let obj = { ORBS: "orbs", DISCOUNT: "discount" };
let obj2 = {
  name: "2026-07-premium-referral-incentives",
  kind: "user",
  defaultConfig: { referralRewardType: null, useAltReferralCardArt: false },
  variations: obj3,
};
obj3 = {
  0: { referralRewardType: null, useAltReferralCardArt: false },
  1: { referralRewardType: obj.ORBS, useAltReferralCardArt: false },
  2: { referralRewardType: obj.DISCOUNT, useAltReferralCardArt: false },
  3: { referralRewardType: obj.ORBS, useAltReferralCardArt: true },
  4: { referralRewardType: obj.DISCOUNT, useAltReferralCardArt: true },
};
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp2;
      const obj = react;
      const cResult = obj.c(6);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      const config = apexExperiment.useConfig(tmp2);
      if (cResult[2] === config.referralRewardType) {
        if (cResult[3] === config.useAltReferralCardArt) {
          let tmp5;
          if ((cResult[4] === null) != config.referralRewardType) {
            tmp5 = cResult[5];
          }
          return tmp5;
        }
      }
      const obj3 = {
        referralRewardType: config.referralRewardType,
        useAltReferralCardArt: config.useAltReferralCardArt,
        isInReferralIncentivesTreatment: null != config.referralRewardType,
      };
      cResult[2] = config.referralRewardType;
      cResult[3] = config.useAltReferralCardArt;
      cResult[4] = null != config.referralRewardType;
      cResult[5] = obj3;
      tmp5 = obj3;
    }
  : (location) => {
      const obj = { location };
      const config = apexExperiment.useConfig(obj);
      return {
        referralRewardType: config.referralRewardType,
        useAltReferralCardArt: config.useAltReferralCardArt,
        isInReferralIncentivesTreatment: null != config.referralRewardType,
      };
    };
const result = size.fileFinishedImporting("modules/premium/experiments/PremiumReferralIncentivesExperiment.tsx");

export default apexExperiment;
export const ReferralRewardType = obj;
export const usePremiumReferralIncentivesVariant = tmp3;
