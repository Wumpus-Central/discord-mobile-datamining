// discord_app/modules/messages/native/renderer/row_data/SurveyIndication.tsx
import util from "../../../../../intl/index.native.tsx";
import PushNotificationConstants from "../../../../push_notifications/PushNotificationConstants.tsx";
import _modDef13488 from "../../../../../../_runtime/metro/13488__.js";
import _modDef13489 from "../../../../../../_runtime/metro/13489__.js";
import size from "../../../../../../_runtime/metro/00002__.js";

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
  const intl = tmp2(1115).intl;
  const obj = { action: "bindUserSurvey", message, notificationType: null };
  if (TOP_MESSAGE_PUSH == null) {
    TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
  }
  const obj2 = { content: intl.formatToParts(GwWhce, { handleMessage: obj }), feedbackIconUrl: null };
  obj.notificationType = TOP_MESSAGE_PUSH;
  const tmp2Result = tmp2(8203);
  if (tmp2Result2.isThemeDark(forcedTheme)) {
    let tmp7Result = _modDef13488;
  } else {
    tmp7Result = _modDef13489;
  }
  obj2.feedbackIconUrl = tmp2Result.getAssetUriForEmbed(tmp7Result);
  return obj2;
};
