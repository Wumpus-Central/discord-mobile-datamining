// discord_app/modules/messages/logMessageSendFailure.tsx
import Constants from "../../Constants.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const f94867 = (mimeType) => {
  let str = mimeType.mimeType;
  if (str == null) {
    str = "unknown";
  }
  return str;
};
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/messages/logMessageSendFailure.tsx");

export const logMessageSendFailure = function logMessageSendFailure(fileItems) {
  let mapped;
  if (null != fileItems.fileItems) {
    fileItems = fileItems.fileItems;
    mapped = fileItems.map(f94867);
  } else {
    mapped = [];
  }
  const errorMessage = fileItems.errorMessage;
  const failureCode = fileItems.failureCode;
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, {
    failure_code: failureCode,
    error_message: errorMessage,
    attachment_mimetypes: mapped,
  });
};
export const getAttachmentMimeTypes = function getAttachmentMimeTypes(items) {
  return items.map(f94867);
};
