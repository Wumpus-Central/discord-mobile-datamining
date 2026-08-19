// === Module 16937: useCreatorMonetizationOnboardingMarketing ===

// Module 16937 (useCreatorMonetizationOnboardingMarketing)
import _createCreatorMonetizationEnableRequestAll from "_createCreatorMonetizationEnableRequest" /* 16906 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationOnboardingMarketing.tsx");

export default function useCreatorMonetizationOnboardingMarketing(arg0) {
  [tmp2, importAll] = callback(React.useState(true), 2);
  const tmp = callback(React.useState(true), 2);
  [tmp4, dependencyMap] = callback(React.useState(), 2);
  const creatorMonetizationOnboardingMarketing = callback(React.useState(), 2);
  callback = creatorMonetizationOnboardingMarketing[1];
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let callback2 = tmp8;
              callback = undefined;
              callback2(true);
              closure_1_2(undefined);
              c4 = 2;
              obj1 = _createCreatorMonetizationEnableRequestAll;
              c5 = 3;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.getCreatorMonetizationOnboardingMarketing(callback);
              return obj1;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            callback2(false);
            throw closure_3;
          } else {
            if (2 === tmp8) {
              c4 = 1;
              callback2 = closure_3;
              const aPIError = new callback(dependencyMap[4]).APIError(callback2);
              closure_1_2(aPIError);
              c4 = 0;
              callback2(false);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              callback = arg1;
              closure_1_3(callback);
              c4 = 1;
            }
            c4 = 0;
            callback2(false);
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp45) {
          closure_3 = tmp45;
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