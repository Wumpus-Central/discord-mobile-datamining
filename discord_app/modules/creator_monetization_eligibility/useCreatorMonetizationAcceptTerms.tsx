// === Module 16905: useCreateCreatorMonetizationAcceptTermsRequest ===

// Module 16905 (useCreateCreatorMonetizationAcceptTermsRequest)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { isGuildOwner } from "GuildNSFWContentLevel" /* 1434 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/creator_monetization_eligibility/useCreatorMonetizationAcceptTerms.tsx");

export default function useCreateCreatorMonetizationAcceptTermsRequest(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let obj = _require(589);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getGuild(closure_0));
  const tmp2 = isExpeditedOnboardingGuild(React.useState(), 2);
  dependencyMap = tmp2[1];
  [tmp4, closure_4] = isExpeditedOnboardingGuild(React.useState(false), 2);
  let tmp3 = isExpeditedOnboardingGuild(React.useState(false), 2);
  isExpeditedOnboardingGuild = _require(7227).useIsExpeditedOnboardingGuild(stateFromStores);
  obj = { canSubmitAcceptance: null, error: null, loading: null, submitAcceptTermsRequest: null };
  let obj2 = _require(7227);
  const items1 = [closure_9];
  const items2 = [stateFromStores];
  obj[0] = _require(589).useStateFromStores(items1, () => {
    let tmp3 = null != stateFromStores;
    if (tmp3) {
      tmp3 = isGuildOwner(tmp2, tmp);
    }
    return tmp3;
  }, items2);
  obj[1] = tmp2[0];
  obj[2] = tmp4;
  const items3 = [arg0, arg1, isExpeditedOnboardingGuild];
  obj[3] = React.useCallback(callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp4;
            closure_0 = tmp8;
            if (null != closure_1_0) {
              v0(true);
              dependencyMap(undefined);
              dependencyMap = 2;
              if (null != closure_1_1) {
                v0 = 4;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = stateFromStores(16906).acceptCreatorMonetizationTerms(closure_1_0, tmp42);
                return obj1;
              } else {
                let obj2 = stateFromStores(16906);
                v0 = 3;
                c5 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = obj2.acceptCreatorMonetizationTermsV2(closure_1_0);
                return obj2;
              }
            }
            c5 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            dependencyMap = 1;
            closure_0 = closure_2;
            const tmp25 = new closure_1_1(4274)(closure_0);
            dependencyMap(tmp25);
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                v0(false);
                c5 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              v0(false);
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            dependencyMap = 1;
          }
          dependencyMap = 0;
          v0(false);
        }
        dependencyMap = 0;
        v0(false);
        throw closure_2;
      } catch (tmp47) {
        closure_2 = tmp47;
        if (tmp5 === dependencyMap) {
          c5 = tmp3;
          throw tmp47;
        } else if (tmp2 === tmp49) {
          v0 = tmp2;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items3);
  return obj;
};