// === Module 9458: map ===

// Module 9458 (map)
import { Store } from "initialize";

let obj = { surveys: null };
obj[0] = new Map();
class QualtricsStore extends Store {
}
QualtricsStore.prototype["getSurvey"] = function getSurvey(arg0) {
  const surveys = obj.surveys;
  let value = surveys.get(arg0);
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
const qualtricsStore = new QualtricsStore(require("dispatcher"), obj);
const map = new Map();
let result = require("set").fileFinishedImporting("modules/qualtrics/QualtricsStore.tsx");

export default qualtricsStore;