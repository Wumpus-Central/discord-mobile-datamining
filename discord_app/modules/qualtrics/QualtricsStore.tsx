// discord_app/modules/qualtrics/QualtricsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const qualtricsStore = new QualtricsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/qualtrics/QualtricsStore.tsx");

export default qualtricsStore;
