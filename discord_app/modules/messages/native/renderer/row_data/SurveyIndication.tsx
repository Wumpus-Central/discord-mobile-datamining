// discord_app/modules/messages/native/renderer/row_data/SurveyIndication.tsx
import intl2 from "../../../../../intl/index.native.tsx";
import PushNotificationConstants from "../../../../push_notifications/PushNotificationConstants.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/13025_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../../_runtime/13026_AssetRegistry.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const NotificationTypes = PushNotificationConstants.NotificationTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/SurveyIndication.tsx");

export const createSurveyIndication = function createSurveyIndication(message, forcedTheme, pushFeedbackType) {
  let GwWhce;
  let getAssetUriForEmbed;
  let tmp2;
  let tmp8Result;
  let TOP_MESSAGE_PUSH = pushFeedbackType;
  if (pushFeedbackType === NotificationTypes.TOP_MESSAGE_PUSH) {
    GwWhce = intl2.t.GwWhce;
    tmp2 = require;
  } else {
    tmp2 = require;
    GwWhce = intl2.t["46+Iqc"];
  }
  const intl = tmp2(1126).intl;
  const formatToParts = intl.formatToParts;
  const obj = { action: "bindUserSurvey", message, notificationType: TOP_MESSAGE_PUSH };
  if (TOP_MESSAGE_PUSH == null) {
    TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
  }
  const obj2 = {
    content: formatToParts(GwWhce, { handleMessage: obj }),
    feedbackIconUrl: getAssetUriForEmbed(tmp8Result),
  };
  getAssetUriForEmbed = tmp2(7605).getAssetUriForEmbed;
  tmp2(7605);
  const tmp2Result2 = tmp2(4729);
  if (tmp2Result2.isThemeDark(forcedTheme)) {
    tmp8Result = AssetRegistryDefault;
  } else {
    tmp8Result = AssetRegistryDefault2;
  }
  return obj2;
};
