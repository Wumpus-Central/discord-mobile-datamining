// discord_app/modules/messages/logMessageSendFailure.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import collectGuildAnalyticsMetadata from "../app_analytics/AppAnalyticsUtils.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/messages/logMessageSendFailure.tsx");

export const logMessageSendFailure = function logMessageSendFailure(fileItems) {
  if (null != fileItems.fileItems) {
    fileItems = fileItems.fileItems;
    let mapped = fileItems.map((mimeType) => {
      let str = mimeType.mimeType;
      if (str == null) {
        str = "unknown";
      }
      return str;
    });
  } else {
    mapped = [];
  }
  const errorMessage = fileItems.errorMessage;
  const failureCode = fileItems.failureCode;
  collectGuildAnalyticsMetadata.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, {
    failure_code: failureCode,
    error_message: errorMessage,
    attachment_mimetypes: mapped,
  });
};
export const getAttachmentMimeTypes = function getAttachmentMimeTypes(items) {
  return items.map((mimeType) => {
    let str = mimeType.mimeType;
    if (str == null) {
      str = "unknown";
    }
    return str;
  });
};
