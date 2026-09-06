// === Module 17712: useCreatorMonetizationEligibility ===

// Module 17712 (useCreatorMonetizationEligibility)
import CreatorMonetizationEligibilityActionCreatorsAll from "CreatorMonetizationEligibilityActionCreators" /* 17685 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

let closure_6 = fn(17682).CreatorMonetizationApplicationState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/useCreatorMonetizationEligibility.tsx");

export default function useCreatorMonetizationEligibility(arg0) {
  [tmp2, importAll] = callback(noop.useState(null != arg0), 2);
  const tmp = callback(noop.useState(null != arg0), 2);
  [tmp4, dependencyMap] = callback(noop.useState(), 2);
  const tmp5 = callback(noop.useState(), 2);
  asyncGeneratorStep = tmp5[1];
  closure_0 = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp8;
            closure_129_0 = undefined;
            closure_1(true);
            tmp4(undefined);
            c4 = 2;
            let obj1 = CreatorMonetizationEligibilityActionCreatorsAll;
            c5 = 3;
            c6 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.getCreatorMonetizationEligibility(closure_0);
            return obj1;
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_1(false);
          throw closure_3;
        } else {
          if (2 === tmp8) {
            c4 = 1;
            closure_129_1 = closure_3;
            const tmp45 = new closure_0(4462)(closure_129_1);
            tmp4(tmp45);
            c4 = 0;
            closure_1(false);
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_0 = value;
            const obj2 = { isEligibleForMonetization: closure_129_0.sufficient, hasSufficientMembers: closure_129_0.size, hasEnabled2FA: closure_129_0.mfa, meetsServerAgeRequirement: closure_129_0.age, meetsOwnerAgeRequirement: closure_129_0.owner_age, noRecentViolations: closure_129_0.safe_environment, weeklyCommunicators: closure_129_0.engagement_healthy, hasMemberRetention: closure_129_0.retention_healthy, notNSFW: null, canApply: null, isApplicationPending: null, actionRequired: null, minimumAgeInDays: null, minimumOwnerAgeInYears: null, minimumSize: null, latestRequest: null, rejection: null, guildMemberCount: null, communicatorCount: null, retentionScore: null };
            const _Object = Object;
            obj2.notNSFW = 0 === Object.keys(closure_129_0.nsfw_properties).length;
            obj2.canApply = closure_129_0.can_apply;
            const latest_request2 = closure_129_0.latest_request;
            let state;
            if (latest_request2 != null) {
              state = latest_request2.state;
            }
            obj2.isApplicationPending = state === constants.OPEN;
            const latest_request = closure_129_0.latest_request;
            let state1;
            if (latest_request != null) {
              state1 = latest_request.state;
            }
            obj2.actionRequired = state1 === constants.ACTION_REQUIRED;
            obj2.minimumAgeInDays = closure_129_0.minimum_age_in_days;
            obj2.minimumOwnerAgeInYears = closure_129_0.minimum_owner_age_in_years;
            obj2.minimumSize = closure_129_0.minimum_size;
            obj2.latestRequest = closure_129_0.latest_request;
            obj2.rejection = closure_129_0.rejection;
            const health_score = closure_129_0.health_score;
            let guild_size;
            if (health_score != null) {
              guild_size = health_score.guild_size;
            }
            obj2.guildMemberCount = guild_size;
            const health_score2 = closure_129_0.health_score;
            let communicators;
            if (health_score2 != null) {
              communicators = health_score2.communicators;
            }
            obj2.communicatorCount = communicators;
            const health_score3 = closure_129_0.health_score;
            let perc_ret_w1;
            if (health_score3 != null) {
              perc_ret_w1 = health_score3.perc_ret_w1;
            }
            obj2.retentionScore = perc_ret_w1;
            closure_3(obj2);
            c4 = 1;
          }
          c4 = 0;
          closure_1(false);
          c6 = 3;
          obj = { value, done: true };
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
  });
  callback = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  let obj = { error: tmp4, loading: tmp2, eligibility: tmp5[0], refresh: null };
  const items = [arg0, callback];
  obj.refresh = noop.useCallback(() => {
    if (null != closure_0) {
      callback(tmp);
    }
  }, items);
  return obj;
};