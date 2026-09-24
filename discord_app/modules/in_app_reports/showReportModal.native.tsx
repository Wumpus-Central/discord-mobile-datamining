// === Module 8989: showReportModal ===

// Module 8989 (showReportModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _showReportModal(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          ({ onSubmit: closure_131_2, isEligibleForFeedback } = closure_2);
          if (isEligibleForFeedback === undefined) {
            isEligibleForFeedback = true;
          }
          closure_131_3 = isEligibleForFeedback;
          closure_131_4 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c5 = 1;
          const REPORT_TO_MOD = closure_132_0(closure_132_2[1]).ReportMenuTypeSets.REPORT_TO_MOD;
          const hasItem = REPORT_TO_MOD.has(closure_131_0.name);
          const obj10 = closure_132_0(closure_132_2[2]);
          if (hasItem) {
            c6 = 4;
            c7 = 1;
            const obj6 = { value: obj10.getReportMenuForModeratorReport(closure_131_0, closure_131_1), done: false };
            return obj6;
          } else {
            c6 = 3;
            c7 = 1;
            const obj7 = { value: obj10.getReportMenu(closure_131_0, closure_131_1), done: false };
            return obj7;
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
              throw value;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          }
          closure_131_4 = value;
          const obj8 = { menu: closure_131_4, reportType: closure_131_0, afterSubmit: closure_131_2, isEligibleForFeedback: closure_131_3 };
          closure_132_1(closure_132_2[3]).pushLazy(closure_132_0(closure_132_2[5])(closure_132_2[4], closure_132_2.paths), obj8, closure_132_4);
          c5 = 0;
          const obj2 = closure_132_1(closure_132_2[3]);
        }
        c5 = 0;
        c7 = 3;
        const obj9 = { value, done: true };
        return obj9;
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
};
const IN_APP_REPORT_MODAL_KEY = "IN_APP_REPORT_MODAL_KEY";
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/showReportModal.native.tsx");

export const showReportModal = function showReportModal() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const hideReportModal = function hideReportModal() {
  ModalActionCreatorsDefault.popWithKey(IN_APP_REPORT_MODAL_KEY);
};