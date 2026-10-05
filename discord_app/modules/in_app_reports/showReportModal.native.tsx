// discord_app/modules/in_app_reports/showReportModal.native.tsx
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c6, c7;

let obj = function _showReportModal() {
  obj = _asyncToGenerator(async (reportType, arg1, afterSubmit) => {
    let c2;
    let isEligibleForFeedback;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (reportType === 1) {
        throw value;
      } else if (reportType === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let menu;
        c7 = 2;
        if (0 === c6) {
          if (reportType === 1) {
            c7 = 3;
            throw value;
          } else if (reportType === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            menu = tmp;
            let closure_3 = tmp4;
            afterSubmit = undefined;
            isEligibleForFeedback = undefined;
            ({ onSubmit: c2, isEligibleForFeedback } = closure_2);
            if (isEligibleForFeedback === undefined) {
              isEligibleForFeedback = true;
            }
            menu = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c6) {
          if (reportType === 1) {
            c7 = 3;
            throw value;
          } else if (reportType === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c5 = 1;
            const REPORT_TO_MOD = closure_132_0(closure_132_2[1]).ReportMenuTypeSets.REPORT_TO_MOD;
            const hasItem = REPORT_TO_MOD.has(reportType.name);
            const obj10 = closure_132_0(closure_132_2[2]);
            if (hasItem) {
              c6 = 4;
              c7 = 1;
              const obj6 = { value: obj10.getReportMenuForModeratorReport(reportType, closure_1), done: false };
              return obj6;
            } else {
              c6 = 3;
              c7 = 1;
              const obj7 = { value: obj10.getReportMenu(reportType, closure_1), done: false };
              return obj7;
            }
          }
        } else {
          if (2 === c6) {
            c5 = 0;
          } else {
            if (3 === c6) {
              if (reportType === 1) {
                c7 = 3;
                throw value;
              } else if (reportType === 2) {
                c5 = 0;
                c7 = 3;
                const obj8 = { value, done: true };
                return obj8;
              }
            } else if (reportType === 1) {
              c7 = 3;
              throw value;
            } else if (reportType === 2) {
              c5 = 0;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            }
            menu = value;
            const obj9 = { menu, reportType, afterSubmit, isEligibleForFeedback };
            const obj2 = closure_132_1(closure_132_2[3]);
            obj2.pushLazy(closure_132_0(closure_132_2[5])(closure_132_2[4], closure_132_2.paths), obj9, closure_132_4);
            c5 = 0;
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp26) {
        if (0 === c5) {
          c7 = 3;
          throw tmp26;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const IN_APP_REPORT_MODAL_KEY = "IN_APP_REPORT_MODAL_KEY";
const result = size.fileFinishedImporting("modules/in_app_reports/showReportModal.native.tsx");

export const showReportModal = function showReportModal() {
  return obj(...arguments);
};
export const hideReportModal = function hideReportModal() {
  obj = ModalActionCreatorsDefault;
  obj.popWithKey(IN_APP_REPORT_MODAL_KEY);
};
