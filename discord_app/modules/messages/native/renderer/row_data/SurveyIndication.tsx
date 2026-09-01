// === Module 8139: createSurveyIndication ===

// Module 8139 (createSurveyIndication)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import str2 from "str2" /* 6055 */;

const NotificationTypes = str2.NotificationTypes;
const result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/SurveyIndication.tsx");

export const createSurveyIndication = function createSurveyIndication(message, forcedTheme, pushFeedbackType) {
  let TOP_MESSAGE_PUSH = pushFeedbackType;
  if (pushFeedbackType === NotificationTypes.TOP_MESSAGE_PUSH) {
    let tmp2 = require;
  } else {
    tmp2 = require;
  }
  const intl = tmp2(1236).intl;
  let obj = { action: "bindUserSurvey", message, notificationType: null };
  if (TOP_MESSAGE_PUSH == null) {
    TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
  }
  obj = { content: intl.formatToParts(_46_Iqc, { handleMessage: obj }), feedbackIconUrl: null };
  obj[2] = TOP_MESSAGE_PUSH;
  let tmp2Result = tmp2(7855);
  tmp2Result = tmp2(1363);
  if (tmp2Result.isThemeDark(forcedTheme)) {
    let tmp6Result = tmp6(8140);
  } else {
    tmp6Result = tmp6(8141);
  }
  obj[1] = tmp2Result.getAssetUriForEmbed(tmp6Result);
  return obj;
};