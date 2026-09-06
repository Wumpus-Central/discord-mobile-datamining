// === Module 4754: useQualtricsResponseStore ===

// Module 4754 (useQualtricsResponseStore)
import set2 from "set" /* 2 */;
import keys from "keys" /* 560 */;

let obj = keys.create((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  return {
    responses: {},
    displayedQuestions: {},
    setResponse(arg0, arg1, arg2) {
      const callback = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      callback((responses) => {
        let obj = { responses: null };
        obj = {};
        const merged = Object.assign(responses.responses);
        obj = {};
        const merged1 = Object.assign(responses.responses[closure_0]);
        obj[closure_1] = closure_2;
        obj[closure_0] = obj;
        obj[0] = obj;
        return obj;
      });
    },
    getSurveyResponses(arg0) {
      let obj = callback2().responses[arg0];
      if (obj == null) {
        obj = {};
      }
      return obj;
    },
    clearSurveyResponses(arg0) {
      const callback = arg0;
      callback((responses) => {
        responses = {};
        const merged = Object.assign(responses.responses);
        delete tmp3[tmp];
        const displayedQuestions = {};
        const merged1 = Object.assign(responses.displayedQuestions);
        delete tmp2[tmp];
        return { responses, displayedQuestions };
      });
    },
    trackDisplayedQuestions(arg0, arg1) {
      const callback = arg0;
      closure_1 = arg1;
      callback((displayedQuestions) => {
        let set = displayedQuestions.displayedQuestions[set1];
        if (set == null) {
          const _Set = Set;
          set = new Set();
        }
        set1 = new Set(set);
        const item = closure_1.forEach((arg0) => set1.add(arg0));
        let obj = { displayedQuestions: null };
        obj = {};
        const merged = Object.assign(displayedQuestions.displayedQuestions);
        obj[set1] = set1;
        obj[0] = obj;
        return obj;
      });
    },
    getDisplayedQuestions(closure_0) {
      const tmp = callback2().displayedQuestions[closure_0];
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
const result = set2.fileFinishedImporting("modules/qualtrics/QualtricsResponseStore.tsx");

export const useQualtricsResponseStore = obj;