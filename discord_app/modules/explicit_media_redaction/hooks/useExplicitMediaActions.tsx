// === Module 9399: useExplicitMediaActions ===

// Module 9399 (useExplicitMediaActions)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitMediaActions.tsx");

export const useExplicitMediaActions = function useExplicitMediaActions(onError) {
  onError = onError.onError;
  const onSuccess = onError.onSuccess;
  const report = onError.report;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp2, c3] = _slicedToArray(noop.useState(false), 2);
  noop = tmp2;
  let obj = { reportFalsePositive: null, isReportFalsePositiveLoading: tmp2 };
  const items = [tmp2, onError, onSuccess, report];
  obj.reportFalsePositive = noop.useCallback(report(function*(arg0, value) {
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
            onError = tmp8;
            closure_128_0 = undefined;
            if (c4) {
              c5 = 3;
            } else {
              v0(true);
              v0 = 2;
              c4 = 3;
              c5 = 1;
              const obj1 = { value: report(), done: false };
              return obj1;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            v0 = 1;
            closure_128_1 = closure_2;
            const aPIError = new onError(tmp4[3]).APIError(closure_128_1);
            closure_128_0 = aPIError;
            if (closure_129_0 != null) {
              tmp25(closure_128_0);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            closure_129_3(false);
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (closure_129_1 != null) {
              closure_129_1();
            }
            v0 = 1;
          }
          v0 = 0;
          closure_129_3(false);
        }
        v0 = 0;
        closure_129_3(false);
        throw closure_2;
      } catch (tmp41) {
        closure_2 = tmp41;
        if (tmp5 === v0) {
          c5 = tmp3;
          throw tmp41;
        } else if (tmp2 === tmp43) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items);
  return obj;
};