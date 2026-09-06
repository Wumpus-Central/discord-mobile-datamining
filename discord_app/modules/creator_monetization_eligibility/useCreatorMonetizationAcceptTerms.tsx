// discord_app/modules/creator_monetization_eligibility/useCreatorMonetizationAcceptTerms.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = fn;
const isGuildOwner = fn(1975).isGuildOwner;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/creator_monetization_eligibility/useCreatorMonetizationAcceptTerms.tsx",
);

export default function useCreateCreatorMonetizationAcceptTermsRequest(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let obj = require("initialize");
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const tmp2 = isExpeditedOnboardingGuild(noop.useState(), 2);
  dependencyMap = tmp2[1];
  [tmp4, asyncGeneratorStep] = isExpeditedOnboardingGuild(noop.useState(false), 2);
  let tmp3 = isExpeditedOnboardingGuild(noop.useState(false), 2);
  isExpeditedOnboardingGuild = require("CreatorMonetizationEligibilityExperimentUtils").useIsExpeditedOnboardingGuild(
    stateFromStores,
  );
  obj = { canSubmitAcceptance: null, error: null, loading: null, submitAcceptTermsRequest: null };
  let obj2 = require("CreatorMonetizationEligibilityExperimentUtils");
  const items1 = [UserStore];
  const items2 = [stateFromStores];
  obj.canSubmitAcceptance = require("initialize").useStateFromStores(
    items1,
    () => {
      let tmp3 = null != stateFromStores;
      if (tmp3) {
        tmp3 = isGuildOwner(tmp2, tmp);
      }
      return tmp3;
    },
    items2,
  );
  obj.error = tmp2[0];
  obj.loading = tmp4;
  const items3 = [arg0, arg1, isExpeditedOnboardingGuild];
  obj.submitAcceptTermsRequest = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp8;
              if (null != closure_0) {
                asyncGeneratorStep(true);
                dependencyMap(undefined);
                dependencyMap = 2;
                if (null != tmp4) {
                  c4 = 4;
                  c5 = 1;
                  const obj1 = { value: tmp47(17685).acceptCreatorMonetizationTerms(tmp55, tmp42), done: false };
                  return obj1;
                } else {
                  let obj2 = tmp47(17685);
                  c4 = 3;
                  c5 = 1;
                  obj2 = { value: null, done: false };
                  obj2.value = obj2.acceptCreatorMonetizationTermsV2(tmp55);
                  return obj2;
                }
              }
              c5 = 3;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              dependencyMap = 1;
              closure_128_0 = tmp47;
              const tmp25 = new tmp4(4462)(closure_128_0);
              closure_129_3(tmp25);
            } else {
              if (3 === tmp8) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  dependencyMap = 0;
                  closure_129_4(false);
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                closure_129_4(false);
                c5 = 3;
                obj = { value, done: true };
                return obj;
              }
              dependencyMap = 1;
            }
            dependencyMap = 0;
            closure_129_4(false);
          }
          dependencyMap = 0;
          closure_129_4(false);
          throw tmp47;
        } catch (tmp47) {
          if (tmp5 === dependencyMap) {
            c5 = tmp3;
            throw tmp47;
          } else if (tmp2 === tmp49) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items3,
  );
  return obj;
}
