// === Module 15935: StudyConfig ===

// Module 15935 (StudyConfig)
import size from "module_2" /* 2 */;

const SURVEY_CONFIGS = {};
const result = size.fileFinishedImporting("modules/screen_recording/native/StudyConfig.tsx");

export { SURVEY_CONFIGS };
export const getSurveyConfig = function getSurveyConfig(currentSurveyId) {
  let tmp = obj[currentSurveyId];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
export const getSurveyConfigSafe = function getSurveyConfigSafe(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if ("" !== arg0) {
      let tmp3 = obj[arg0];
      if (tmp3 == null) {
        tmp3 = null;
      }
      tmp = tmp3;
    }
  }
  return tmp;
};
export const getAvailableSurveys = function getAvailableSurveys() {
  const values = Object.values(obj);
  return values.filter((predicate) => predicate.predicate());
};