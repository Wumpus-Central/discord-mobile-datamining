// discord_app/modules/qualtrics/QualtricsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

let obj = { surveys: new Map() };
const Store = initializeDefault.Store;
class QualtricsStore extends Store {}
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
  },
};
const qualtricsStore = new QualtricsStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/qualtrics/QualtricsStore.tsx");

export default qualtricsStore;
