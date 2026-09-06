// === Module 4755: QualtricsStore ===

// Module 4755 (QualtricsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let obj = { surveys: new Map() };
const Store = initializeDefault.Store;
class QualtricsStore extends Store {
}
QualtricsStore.prototype["getSurvey"] = function getSurvey(arg0) {
  const surveys = obj.surveys;
  value = surveys.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
QualtricsStore.displayName = "QualtricsStore";
obj = {
  QUALTRICS_SURVEY_FETCH_SUCCESS: function handleSurveyFetchSuccess(surveyId) {
    const surveys = obj.surveys;
    const result = surveys.set(surveyId.surveyId, surveyId.surveyDetails);
  }
};
const qualtricsStore = new QualtricsStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/qualtrics/QualtricsStore.tsx");

export default qualtricsStore;