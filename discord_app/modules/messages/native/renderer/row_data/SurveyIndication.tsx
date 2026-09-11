// === Module 13282: SurveyIndication ===

// Module 13282 (SurveyIndication)
import util from "util" /* 1114 */;
import PushNotificationConstants from "PushNotificationConstants" /* 6667 */;
import _modDef13283 from "module_13283" /* 13283 */;
import _modDef13284 from "module_13284" /* 13284 */;
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
  const intl = tmp2(1114).intl;
  let obj = { action: "bindUserSurvey", message, notificationType: null };
  if (TOP_MESSAGE_PUSH == null) {
    TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
  }
  obj = { content: null, feedbackIconUrl: null, notificationType: TOP_MESSAGE_PUSH };
  obj.content = intl.formatToParts(GwWhce, { handleMessage: obj });
  tmp2(8020);
  const tmp2Result = tmp2(4458);
  if (tmp2Result.isThemeDark(forcedTheme)) {
    let tmp7Result = _modDef13283;
  } else {
    tmp7Result = _modDef13284;
  }
  obj.feedbackIconUrl = tmp2Result.getAssetUriForEmbed(tmp7Result);
  return obj;
};