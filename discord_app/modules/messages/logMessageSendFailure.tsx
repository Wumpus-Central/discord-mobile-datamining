// === Module 7520: logMessageSendFailure ===

// Module 7520 (logMessageSendFailure)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 4653 */;

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
  collectGuildAnalyticsMetadata.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
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