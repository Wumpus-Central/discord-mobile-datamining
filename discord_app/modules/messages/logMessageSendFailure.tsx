// discord_app/modules/messages/logMessageSendFailure.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import collectGuildAnalyticsMetadata from "../app_analytics/AppAnalyticsUtils.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/messages/logMessageSendFailure.tsx");

export const logMessageSendFailure = function logMessageSendFailure(fileItems) {
  if (null != fileItems.fileItems) {
    fileItems = fileItems.fileItems;
    let mapped = fileItems.map((item, index) => {
      let str = item.mimeType;
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
  collectGuildAnalyticsMetadata.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
};
export const getAttachmentMimeTypes = function getAttachmentMimeTypes(items) {
  return items.map((item, index) => {
    let str = item.mimeType;
    if (str == null) {
      str = "unknown";
    }
    return str;
  });
};