// discord_app/modules/in_app_reports/showReportModal.native.tsx
import _modDef5260 from "../../actions/ModalActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
function _showReportModal() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0, arg1, arg2) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              isEligibleForFeedback = tmp7;
              let paths;
              isEligibleForFeedback = undefined;
              ({ onSubmit: c2, isEligibleForFeedback } = paths);
              if (isEligibleForFeedback === undefined) {
                isEligibleForFeedback = true;
              }
              closure_4 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c5 = 1;
              const REPORT_TO_MOD = lib(paths[1]).ReportMenuTypeSets.REPORT_TO_MOD;
              const hasItem = REPORT_TO_MOD.has(lib.name);
              const obj10 = lib(paths[2]);
              if (hasItem) {
                c6 = 4;
                c7 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj10.getReportMenuForModeratorReport(lib, callback);
                return obj2;
              } else {
                c6 = 3;
                c7 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj10.getReportMenu(lib, callback);
                return obj3;
              }
            }
          } else {
            if (2 === tmp7) {
              c5 = 0;
              c7 = 3;
            } else {
              if (3 === tmp7) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              closure_4 = arg1;
              obj1 = callback(paths[3]);
              const obj4 = { menu: null, reportType: null, afterSubmit: null, isEligibleForFeedback: null };
              obj4[0] = closure_4;
              obj4[1] = lib;
              obj4[2] = paths;
              obj4[3] = isEligibleForFeedback;
              obj1.pushLazy(lib(paths[5])(paths[4], paths.paths), obj4, closure_4);
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          }
        } catch (tmp29) {
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp29;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const IN_APP_REPORT_MODAL_KEY = "IN_APP_REPORT_MODAL_KEY";
const result = require("obj132").fileFinishedImporting("modules/in_app_reports/showReportModal.native.tsx");

export const showReportModal = function showReportModal(arg0, arg1, arg2) {
  const self = this;
  const apply = _showReportModal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const hideReportModal = function hideReportModal() {
  _modDef5260.popWithKey(IN_APP_REPORT_MODAL_KEY);
};