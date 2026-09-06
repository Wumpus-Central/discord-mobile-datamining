// === Module 17709: useFetchHighlightedCreatorGuildDetails ===

// Module 17709 (useFetchHighlightedCreatorGuildDetails)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useFetchHighlightedCreatorGuildDetails.tsx");

export default function useFetchHighlightedCreatorGuildDetails(arg0) {
  [tmp2, dependencyMap] = _slicedToArray(callback.useState(true), 2);
  const tmp = _slicedToArray(callback.useState(true), 2);
  [tmp4, asyncGeneratorStep] = _slicedToArray(callback.useState(), 2);
  const highlightedCreatorDetails = _slicedToArray(callback.useState(), 2);
  _slicedToArray = highlightedCreatorDetails[1];
  closure_0 = asyncGeneratorStep(async (arg0, value) => {
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
            let obj1 = closure_0(dependencyMap[3]);
            c5 = 3;
            c6 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.fetchHighlightedCreatorGuildDetails(closure_0);
            return obj1;
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_1(false);
          throw tmp37;
        } else {
          if (2 === tmp8) {
            c4 = 1;
            tmp4(tmp37);
            c4 = 0;
            closure_1(false);
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_0 = value;
            tmp37(closure_129_0);
            c4 = 1;
          }
          c4 = 0;
          closure_1(false);
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp37) {
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