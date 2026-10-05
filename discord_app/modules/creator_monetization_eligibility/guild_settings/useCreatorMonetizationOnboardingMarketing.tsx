// discord_app/modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationOnboardingMarketing.tsx
import CreatorMonetizationEligibilityActionCreatorsAll from "../CreatorMonetizationEligibilityActionCreators.tsx";
import _asyncToGenerator_mod from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import size from "../../../../_runtime/metro/00002__.js";

let c5, c6;

let _asyncToGenerator = _asyncToGenerator_mod;
const result = size.fileFinishedImporting(
  "modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationOnboardingMarketing.tsx",
);

export default function useCreatorMonetizationOnboardingMarketing(arg0) {
  let callback;
  let closure_3;
  let tmp2;
  let tmp4;
  const tmp = callback(react.useState(true), 2);
  [tmp2, importAll] = tmp;
  const tmp3 = callback(react.useState(), 2);
  [tmp4, dependencyMap] = tmp3;
  const tmp5 = callback(react.useState(), 2);
  _asyncToGenerator = tmp5[1];
  const creatorMonetizationOnboardingMarketing = tmp5[0];
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async function (arg0) {
    let closure_2;
    let obj2;
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
            const obj5 = { value: obj2.getCreatorMonetizationOnboardingMarketing(closure_0), done: false };
            obj2 = CreatorMonetizationEligibilityActionCreatorsAll;
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_1(false);
          throw tmp39;
        } else {
          if (2 === c5) {
            c4 = 1;
            closure_1 = tmp39;
            const self = this;
            const self2 = this;
            const aPIError = new closure_0(dependencyMap[4]).APIError(closure_1);
            tmp(aPIError);
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
            tmp39(closure_0);
            c4 = 1;
          }
          c4 = 0;
          closure_1(false);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp39) {
        if (0 === c4) {
          c6 = 3;
          throw tmp39;
        } else if (1 === tmp41) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  callback = useCallback(function () {
    return closure_0(...arguments);
  }, []);
  const items = [arg0, callback];
  const effect = react.useEffect(() => {
    callback(closure_0);
  }, items);
  return { isLoading, error, creatorMonetizationOnboardingMarketing };
}
