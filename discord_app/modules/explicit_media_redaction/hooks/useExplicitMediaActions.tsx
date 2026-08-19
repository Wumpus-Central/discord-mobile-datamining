// discord_app/modules/explicit_media_redaction/hooks/useExplicitMediaActions.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitMediaActions.tsx");

export const useExplicitMediaActions = function useExplicitMediaActions(onError) {
  onError = onError.onError;
  const onSuccess = onError.onSuccess;
  const report = onError.report;
  let callback;
  let React;
  [tmp2, c3] = callback(React.useState(false), 2);
  React = tmp2;
  const tmp = callback(React.useState(false), 2);
  const items = [tmp2, onError, onSuccess, report];
  return {
    reportFalsePositive: React.useCallback(report(function*() {
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
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback = tmp4;
              let aPIError = tmp8;
              aPIError = undefined;
              if (c4) {
                c5 = 3;
              } else {
                v0(true);
                v0 = 2;
                c4 = 3;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = report();
                return obj1;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              v0 = 1;
              callback = closure_2;
              aPIError = new onError(onSuccess[3]).APIError(callback);
              if (aPIError != null) {
                tmp25(aPIError);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 0;
              v0(false);
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (callback != null) {
                callback();
              }
              v0 = 1;
            }
            v0 = 0;
            v0(false);
          }
          v0 = 0;
          v0(false);
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
    }), items),
    isReportFalsePositiveLoading: tmp2
  };
};