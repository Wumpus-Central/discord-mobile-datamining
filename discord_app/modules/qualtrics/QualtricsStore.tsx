// === Module 5091: QualtricsStore ===

// Module 5091 (QualtricsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const obj = { surveys: new Map() };
new Map();
const Store = get_initializedDefault.Store;
class QualtricsStore extends Store {
  getSurvey(arg0) {
    const surveys = obj.surveys;
    let value = surveys.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = QualtricsStore.prototype;
QualtricsStore.displayName = "QualtricsStore";
const obj2 = {
  QUALTRICS_SURVEY_FETCH_SUCCESS: function handleSurveyFetchSuccess(surveyId) {
    const surveys = obj.surveys;
    const result = surveys.set(surveyId.surveyId, surveyId.surveyDetails);
  }
};
const qualtricsStore = new QualtricsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/qualtrics/QualtricsStore.tsx");

export default qualtricsStore;