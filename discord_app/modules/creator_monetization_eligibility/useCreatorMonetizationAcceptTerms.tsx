import mergeGuildAvatar from "mergeGuildAvatar";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { isGuildOwner } from "GuildNSFWContentLevel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import closure_9 from "mergeGuildAvatar";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/creator_monetization_eligibility/useCreatorMonetizationAcceptTerms.tsx");

export default function useCreateCreatorMonetizationAcceptTermsRequest(arg0, arg1) {
  let mergeGuildAvatar;
  let tmp4;
  const _require = arg0;
  let closure_1 = arg1;
  let obj = _require(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(closure_0));
  const tmp2 = isExpeditedOnboardingGuild(React.useState(), 2);
  let dependencyMap = tmp2[1];
  [tmp4, mergeGuildAvatar] = isExpeditedOnboardingGuild(React.useState(false), 2);
  let tmp3 = isExpeditedOnboardingGuild(React.useState(false), 2);
  isExpeditedOnboardingGuild = _require(12642).useIsExpeditedOnboardingGuild(stateFromStores);
  obj = { canSubmitAcceptance: null, error: null, loading: null, submitAcceptTermsRequest: null };
  let obj2 = _require(12642);
  const items1 = [closure_9];
  const items2 = [stateFromStores];
  obj[0] = _require(589).useStateFromStores(items1, () => {
    let tmp3 = null != stateFromStores;
    if (tmp3) {
      tmp3 = outer1_7(tmp2, tmp);
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
        return { value: "HermesInternal", done: null };
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
            let closure_1 = tmp4;
            let closure_0 = tmp8;
            if (null != outer1_0) {
              v0(true);
              dependencyMap(undefined);
              dependencyMap = 2;
              if (null != outer1_1) {
                v0 = 4;
                c5 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_2(16548).acceptCreatorMonetizationTerms(tmp56, tmp42);
                return obj1;
              } else {
                let obj2 = outer1_2(16548);
                v0 = 3;
                c5 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = obj2.acceptCreatorMonetizationTermsV2(tmp56);
                return obj2;
              }
            }
            c5 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            dependencyMap = 1;
            closure_0 = closure_2;
            const tmp25 = new outer1_1(4093)(closure_0);
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