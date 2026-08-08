// discord_app/modules/guild_role_subscriptions/useFetchHighlightedCreatorGuildDetails.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const result = require("noop").fileFinishedImporting("modules/guild_role_subscriptions/useFetchHighlightedCreatorGuildDetails.tsx");

export default function useFetchHighlightedCreatorGuildDetails(arg0) {
  let asyncGeneratorStep;
  let dependencyMap;
  let tmp2;
  let tmp4;
  let closure_0 = arg0;
  [tmp2, dependencyMap] = callback2(callback.useState(true), 2);
  const tmp = callback2(callback.useState(true), 2);
  [tmp4, asyncGeneratorStep] = callback2(callback.useState(), 2);
  const highlightedCreatorDetails = callback2(callback.useState(), 2);
  callback2 = highlightedCreatorDetails[1];
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
              let asyncGeneratorStep = tmp4;
              let closure_1 = tmp8;
              let callback;
              outer1_1(true);
              outer1_2(undefined);
              let c4 = 2;
              let obj1 = callback(outer2_1[3]);
              c5 = 3;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.fetchHighlightedCreatorGuildDetails(callback);
              return obj1;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            outer1_1(false);
            throw _slicedToArray;
          } else {
            if (2 === tmp8) {
              c4 = 1;
              outer1_2(_slicedToArray);
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
        } catch (tmp37) {
          _slicedToArray = tmp37;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp37;
          } else if (tmp2 === tmp39) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  callback = callback.useCallback(function() {
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
  const effect = callback.useEffect(() => {
    callback(closure_0);
  }, items);
  return { isLoading, error, highlightedCreatorDetails: highlightedCreatorDetails[0] };
};