// === Module 5090: QualtricsResponseStore ===

// Module 5090 (QualtricsResponseStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

let responses, set;

let obj = module_570.create((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    responses: {},
    displayedQuestions: {},
    setResponse(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      let closure_2 = arg2;
      closure_0((responses) => {
        let obj2;
        const obj = { responses: obj2 };
        obj2 = {};
        const merged = Object.assign(responses.responses);
        const obj3 = {};
        const merged1 = Object.assign(responses.responses[closure_0]);
        obj3[closure_1] = closure_2;
        obj2[closure_0] = obj3;
        return obj;
      });
    },
    getSurveyResponses(arg0) {
      let obj = closure_1().responses[arg0];
      if (obj == null) {
        obj = {};
      }
      return obj;
    },
    clearSurveyResponses(arg0) {
      closure_0 = arg0;
      closure_0((responses) => {
        responses = {};
        const merged = Object.assign(responses.responses);
        delete obj[closure_0];
        const obj3 = {};
        const merged1 = Object.assign(responses.displayedQuestions);
        delete obj2[closure_0];
        return { responses, displayedQuestions: obj3 };
      });
    },
    trackDisplayedQuestions(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_0(function(displayedQuestions) {
        let obj2;
        set = displayedQuestions.displayedQuestions[closure_0];
        if (set == null) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
        }
        const set1 = new Set(set);
        const item = closure_1.forEach((item) => set1.add(item));
        const obj = { displayedQuestions: obj2 };
        obj2 = {};
        const merged = Object.assign(displayedQuestions.displayedQuestions);
        obj2[closure_0] = set1;
        return obj;
      });
    },
    getDisplayedQuestions(arg0) {
      let items;
      const tmp = closure_1().displayedQuestions[arg0];
      if (null != tmp) {
        const _Array = Array;
        items = Array.from(tmp);
      } else {
        items = [];
      }
      return items;
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/qualtrics/QualtricsResponseStore.tsx");

export const useQualtricsResponseStore = obj;