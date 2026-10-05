// === Module 17909: useCreatorMonetizationEligibility ===

// Module 17909 (useCreatorMonetizationEligibility)
import CreatorMonetizationEligibilityConstants from "CreatorMonetizationEligibilityConstants" /* 17879 */;
import CreatorMonetizationEligibilityActionCreatorsAll from "CreatorMonetizationEligibilityActionCreators" /* 17882 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3;

let _asyncToGenerator = _asyncToGenerator_mod;
let closure_6 = CreatorMonetizationEligibilityConstants.CreatorMonetizationApplicationState;
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/useCreatorMonetizationEligibility.tsx");

export default function useCreatorMonetizationEligibility(arg0) {
  let callback;
  let items;
  let tmp2;
  let tmp4;
  const tmp = callback(react.useState(null != arg0), 2);
  [tmp2, importAll] = tmp;
  const tmp3 = callback(react.useState(), 2);
  [tmp4, dependencyMap] = tmp3;
  const tmp5 = callback(react.useState(), 2);
  _asyncToGenerator = tmp5[1];
  const first = tmp5[0];
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async function(arg0) {
    let closure_2;
    let communicators;
    let guild_size;
    let obj2;
    let perc_ret_w1;
    let state;
    let state1;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let closure_1;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp4;
            closure_0 = undefined;
            closure_1(true);
            tmp(undefined);
            c4 = 2;
            c5 = 3;
            c6 = 1;
            const obj5 = { value: obj2.getCreatorMonetizationEligibility(closure_0), done: false };
            obj2 = CreatorMonetizationEligibilityActionCreatorsAll;
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_1(false);
          throw closure_3;
        } else {
          if (2 === c5) {
            c4 = 1;
            closure_1 = closure_3;
            const self = this;
            const self2 = this;
            const tmp39 = new closure_0(dependencyMap[5])(closure_1);
            tmp(tmp39);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_1(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            const obj6 = { isEligibleForMonetization: closure_0.sufficient, hasSufficientMembers: closure_0.size, hasEnabled2FA: closure_0.mfa, meetsServerAgeRequirement: closure_0.age, meetsOwnerAgeRequirement: closure_0.owner_age, noRecentViolations: closure_0.safe_environment, weeklyCommunicators: closure_0.engagement_healthy, hasMemberRetention: closure_0.retention_healthy, notNSFW: 0 === Object.keys(closure_0.nsfw_properties).length, canApply: closure_0.can_apply, isApplicationPending: state === constants.OPEN, actionRequired: state1 === constants.ACTION_REQUIRED, minimumAgeInDays: closure_0.minimum_age_in_days, minimumOwnerAgeInYears: closure_0.minimum_owner_age_in_years, minimumSize: closure_0.minimum_size, latestRequest: closure_0.latest_request, rejection: closure_0.rejection, guildMemberCount: guild_size, communicatorCount: communicators, retentionScore: perc_ret_w1 };
            const _Object = Object;
            const latest_request2 = closure_0.latest_request;
            state = undefined;
            const tmp67 = closure_3;
            if (latest_request2 != null) {
              state = latest_request2.state;
            }
            const latest_request = closure_0.latest_request;
            state1 = undefined;
            if (latest_request != null) {
              state1 = latest_request.state;
            }
            const health_score = closure_0.health_score;
            guild_size = undefined;
            if (health_score != null) {
              guild_size = health_score.guild_size;
            }
            const health_score2 = closure_0.health_score;
            communicators = undefined;
            if (health_score2 != null) {
              communicators = health_score2.communicators;
            }
            const health_score3 = closure_0.health_score;
            perc_ret_w1 = undefined;
            if (health_score3 != null) {
              perc_ret_w1 = health_score3.perc_ret_w1;
            }
            tmp67(obj6);
            c4 = 1;
          }
          c4 = 0;
          closure_1(false);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp57) {
        closure_3 = tmp57;
        if (0 === c4) {
          c6 = 3;
          throw tmp57;
        } else if (1 === tmp59) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  let obj = {
    error: tmp4,
    loading: tmp2,
    eligibility: first,
    refresh: react.useCallback(() => {
      if (null != closure_0) {
        callback(tmp);
      }
    }, items)
  };
  items = [arg0, callback];
  return obj;
};