// === Module 13489: SurveyIndication ===

// Module 13489 (SurveyIndication)
import util from "util" /* 1126 */;
import PushNotificationConstants from "PushNotificationConstants" /* 5933 */;
import _modDef13490 from "module_13490" /* 13490 */;
import _modDef13491 from "module_13491" /* 13491 */;
import size from "module_2" /* 2 */;

const NotificationTypes = PushNotificationConstants.NotificationTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/SurveyIndication.tsx");

export const createSurveyIndication = function createSurveyIndication(message, forcedTheme, pushFeedbackType) {
  let TOP_MESSAGE_PUSH = pushFeedbackType;
  if (pushFeedbackType === NotificationTypes.TOP_MESSAGE_PUSH) {
    let GwWhce = util.t.GwWhce;
    let tmp2 = require;
  } else {
    tmp2 = require;
    GwWhce = util.t["46+Iqc"];
  }
  const intl = tmp2(1126).intl;
  const obj = { action: "bindUserSurvey", message, notificationType: null };
  if (TOP_MESSAGE_PUSH == null) {
    TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
  }
  const obj2 = { content: intl.formatToParts(GwWhce, { handleMessage: obj }), feedbackIconUrl: null };
  obj.notificationType = TOP_MESSAGE_PUSH;
  const tmp2Result = tmp2(7891);
  if (tmp2Result2.isThemeDark(forcedTheme)) {
    let tmp7Result = _modDef13490;
  } else {
    tmp7Result = _modDef13491;
  }
  obj2.feedbackIconUrl = tmp2Result.getAssetUriForEmbed(tmp7Result);
  return obj2;
};