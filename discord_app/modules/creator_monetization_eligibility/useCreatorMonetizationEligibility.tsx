// === Module 17209: useCreatorMonetizationEligibility ===

// Module 17209 (useCreatorMonetizationEligibility)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { CreatorMonetizationApplicationState as closure_6 } from "CreatorMonetizationApplicationState" /* 17179 */;

const result = require("set").fileFinishedImporting("modules/creator_monetization_eligibility/useCreatorMonetizationEligibility.tsx");

export default function useCreatorMonetizationEligibility(arg0) {
  closure_0 = arg0;
  [tmp2, importAll] = callback(React.useState(null != arg0), 2);
  const tmp = callback(React.useState(null != arg0), 2);
  [tmp4, dependencyMap] = callback(React.useState(), 2);
  const tmp5 = callback(React.useState(), 2);
  callback = tmp5[1];
  closure_0 = undefined;
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              callback = tmp8;
              let lib;
              callback(true);
              closure_1_2(undefined);
              c4 = 2;
              obj1 = closure_2_1(closure_2_2[4]);
              c5 = 3;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.getCreatorMonetizationEligibility(lib);
              return obj1;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            callback(false);
            throw closure_3;
          } else {
            if (2 === tmp8) {
              c4 = 1;
              callback = closure_3;
              const tmp45 = new lib(closure_2_2[5])(callback);
              closure_1_2(tmp45);
              c4 = 0;
              callback(false);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              const obj2 = { isEligibleForMonetization: null, hasSufficientMembers: null, hasEnabled2FA: null, meetsServerAgeRequirement: null, meetsOwnerAgeRequirement: null, noRecentViolations: null, weeklyCommunicators: null, hasMemberRetention: null, notNSFW: null, canApply: null, isApplicationPending: null, actionRequired: null, minimumAgeInDays: null, minimumOwnerAgeInYears: null, minimumSize: null, latestRequest: null, rejection: null, guildMemberCount: null, communicatorCount: null, retentionScore: null };
              obj2[0] = lib.sufficient;
              obj2[1] = lib.size;
              obj2[2] = lib.mfa;
              obj2[3] = lib.age;
              obj2[4] = lib.owner_age;
              obj2[5] = lib.safe_environment;
              obj2[6] = lib.engagement_healthy;
              obj2[7] = lib.retention_healthy;
              const _Object = Object;
              obj2[8] = 0 === Object.keys(lib.nsfw_properties).length;
              obj2[9] = lib.can_apply;
              const latest_request2 = lib.latest_request;
              let state;
              if (latest_request2 != null) {
                state = latest_request2.state;
              }
              obj2[10] = state === closure_2_6.OPEN;
              const latest_request = lib.latest_request;
              let state1;
              if (latest_request != null) {
                state1 = latest_request.state;
              }
              obj2[11] = state1 === closure_2_6.ACTION_REQUIRED;
              obj2[12] = lib.minimum_age_in_days;
              obj2[13] = lib.minimum_owner_age_in_years;
              obj2[14] = lib.minimum_size;
              obj2[15] = lib.latest_request;
              obj2[16] = lib.rejection;
              const health_score = lib.health_score;
              let guild_size;
              if (health_score != null) {
                guild_size = health_score.guild_size;
              }
              obj2[17] = guild_size;
              const health_score2 = lib.health_score;
              let communicators;
              if (health_score2 != null) {
                communicators = health_score2.communicators;
              }
              obj2[18] = communicators;
              const health_score3 = lib.health_score;
              let perc_ret_w1;
              if (health_score3 != null) {
                perc_ret_w1 = health_score3.perc_ret_w1;
              }
              obj2[19] = perc_ret_w1;
              closure_1_3(obj2);
              c4 = 1;
              const tmp75 = closure_1_3;
            }
            c4 = 0;
            callback(false);
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp63) {
          closure_3 = tmp63;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp63;
          } else if (tmp2 === tmp65) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  callback = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  const tmp3 = callback(React.useState(), 2);
  const items = [arg0, callback];
  return {
    error: tmp4,
    loading: tmp2,
    eligibility: tmp5[0],
    refresh: React.useCallback(() => {
      if (null != closure_0) {
        callback(tmp);
      }
    }, items)
  };
};