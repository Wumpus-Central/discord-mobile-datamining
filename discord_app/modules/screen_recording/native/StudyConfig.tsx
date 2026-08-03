const obj = {};
const result = require("set").fileFinishedImporting("modules/screen_recording/native/StudyConfig.tsx");

export const SURVEY_CONFIGS = obj;
export const getSurveyConfig = function getSurveyConfig(closure_0) {
  let tmp = obj[closure_0];
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