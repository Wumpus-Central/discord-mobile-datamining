// discord_app/modules/explicit_media_redaction/hooks/useExplicitMediaActions.tsx
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import size from "../../../../_runtime/metro/00002__.js";

let c4, c5, closure_2;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitMediaActions.tsx");

export const useExplicitMediaActions = function useExplicitMediaActions(onError) {
  let c3;
  let items;
  let tmp2;
  onError = onError.onError;
  let onSuccess = onError.onSuccess;
  const report = onError.report;
  _slicedToArray = undefined;
  react = undefined;
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, c3] = tmp;
  react = tmp2;
  let obj = {
    reportFalsePositive: react.useCallback(
      report(function* () {
        let closure_0;
        let closure_1;
        let v0;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let aPIError;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                onSuccess = tmp;
                onError = tmp4;
                aPIError = undefined;
                const tmp31 = c4;
                if (!tmp31) {
                  v0(true);
                  v0 = 2;
                  c4 = 3;
                  c5 = 1;
                  const obj4 = { value: report(), done: false };
                  return obj4;
                }
              }
            } else if (1 === c4) {
              v0 = 0;
              closure_129_3(false);
              throw closure_2;
            } else {
              if (2 === c4) {
                v0 = 1;
                onSuccess = closure_2;
                const self = this;
                const self2 = this;
                aPIError = new onError(onSuccess[3]).APIError(onSuccess);
                if (closure_129_0 != null) {
                  tmp19(aPIError);
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                closure_129_3(false);
                c5 = 3;
                const obj = { value, done: true };
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
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp35) {
            closure_2 = tmp35;
            if (0 === v0) {
              c5 = 3;
              throw tmp35;
            } else if (1 === tmp37) {
              c4 = 1;
            } else {
              c4 = 2;
            }
          }
        }
      }),
      items,
    ),
    isReportFalsePositiveLoading: tmp2,
  };
  items = [tmp2, onError, onSuccess, report];
  return obj;
};
