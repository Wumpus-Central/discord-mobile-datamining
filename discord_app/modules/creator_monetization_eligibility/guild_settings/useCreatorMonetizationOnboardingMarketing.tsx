import set from "set";
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationOnboardingMarketing.tsx");

export default function useCreatorMonetizationOnboardingMarketing(arg0) {
  let dependencyMap;
  let importAll;
  let tmp2;
  let tmp4;
  let closure_0 = arg0;
  [tmp2, importAll] = callback(React.useState(true), 2);
  const tmp = callback(React.useState(true), 2);
  [tmp4, dependencyMap] = callback(React.useState(), 2);
  const creatorMonetizationOnboardingMarketing = callback(React.useState(), 2);
  callback = creatorMonetizationOnboardingMarketing[1];
  closure_0 = undefined;
  closure_0 = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
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
              let closure_2 = tmp4;
              let closure_1 = tmp8;
              let callback;
              outer1_1(true);
              outer1_2(undefined);
              let c4 = 2;
              let obj1 = outer2_1(outer2_2[3]);
              c5 = 3;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.getCreatorMonetizationOnboardingMarketing(callback);
              return obj1;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            outer1_1(false);
            throw set;
          } else {
            if (2 === tmp8) {
              c4 = 1;
              outer1_1 = set;
              const aPIError = new callback(outer2_2[4]).APIError(outer1_1);
              outer1_2(aPIError);
              c4 = 0;
              outer1_1(false);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              callback = arg1;
              outer1_3(callback);
              c4 = 1;
            }
            c4 = 0;
            outer1_1(false);
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp45) {
          set = tmp45;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp45;
          } else if (tmp2 === tmp47) {
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
  const items = [arg0, callback];
  const effect = React.useEffect(() => {
    callback(closure_0);
  }, items);
  return { isLoading, error, creatorMonetizationOnboardingMarketing: creatorMonetizationOnboardingMarketing[0] };
};