// === Module 8441: createSurveyIndication ===

// Module 8441 (createSurveyIndication)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import str2 from "str2" /* 5259 */;
import registerAssetDefault from "registerAsset" /* 8442 */;
import registerAssetDefault2 from "registerAsset" /* 8443 */;

const NotificationTypes = str2.NotificationTypes;
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/row_data/SurveyIndication.tsx");

export const createSurveyIndication = function createSurveyIndication(message, forcedTheme, pushFeedbackType) {
  let TOP_MESSAGE_PUSH = pushFeedbackType;
  if (pushFeedbackType === NotificationTypes.TOP_MESSAGE_PUSH) {
    let GwWhce = getSystemLocale.t.GwWhce;
    let tmp2 = require;
  } else {
    tmp2 = require;
    GwWhce = getSystemLocale.t["46+Iqc"];
  }
  const intl = tmp2(1236).intl;
  let obj = { action: "bindUserSurvey", message, notificationType: null };
  if (TOP_MESSAGE_PUSH == null) {
    TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
  }
  obj = { content: intl.formatToParts(GwWhce, { handleMessage: obj }), feedbackIconUrl: null };
  obj[2] = TOP_MESSAGE_PUSH;
  tmp2(8171);
  const tmp2Result = tmp2(1363);
  if (tmp2Result.isThemeDark(forcedTheme)) {
    let tmp7Result = registerAssetDefault;
  } else {
    tmp7Result = registerAssetDefault2;
  }
  obj[1] = tmp2Result.getAssetUriForEmbed(tmp7Result);
  return obj;
};