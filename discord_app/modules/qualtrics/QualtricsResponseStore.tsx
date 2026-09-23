// === Module 5021: QualtricsResponseStore ===

// Module 5021 (QualtricsResponseStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/qualtrics/QualtricsResponseStore.tsx");

export const useQualtricsResponseStore = module_560.create((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  return {
    responses: {},
    displayedQuestions: {},
    setResponse(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      closure_0((responses) => {
        const obj = { responses: null };
        const obj2 = {};
        const merged = Object.assign(responses.responses);
        const obj3 = {};
        const merged1 = Object.assign(responses.responses[closure_0]);
        obj3[closure_1] = closure_2;
        obj2[closure_0] = obj3;
        obj.responses = obj2;
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
        delete tmp3[tmp];
        const merged1 = Object.assign(responses.displayedQuestions);
        delete tmp2[tmp];
        return { responses, displayedQuestions: {} };
      });
    },
    trackDisplayedQuestions(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_0((displayedQuestions) => {
        let set = displayedQuestions.displayedQuestions[closure_0];
        if (set == null) {
          const _Set = Set;
          set = new Set();
        }
        const item = closure_1.forEach((item) => set1.add(item));
        const obj = { displayedQuestions: null };
        const obj2 = {};
        const merged = Object.assign(displayedQuestions.displayedQuestions);
        obj2[closure_0] = new Set(set);
        obj.displayedQuestions = obj2;
        return obj;
      });
    },
    getDisplayedQuestions(arg0) {
      const tmp = closure_1().displayedQuestions[arg0];
      if (null != tmp) {
        const _Array = Array;
        let items = Array.from(tmp);
      } else {
        items = [];
      }
      return items;
    }
  };
});