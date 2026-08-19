// === Module 11761: useDMMessageToReport ===

// Module 11761 (useDMMessageToReport)
import obj132 from "obj132" /* 2 */;
import useLongestChannelMessageBeforeReply from "useLongestChannelMessageBeforeReply" /* 11618 */;
import loadMessageRequestData from "loadMessageRequestData" /* 11763 */;

const result = obj132.fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export const useDMMessageToReport = function useDMMessageToReport(channel, id, arg2) {
  let isReportable = arg2;
  if (!arg2) {
    isReportable = obj.useIsRelationshipTypeSpamReportable(id);
  }
  let tmp2Result = useLongestChannelMessageBeforeReply;
  const longestChannelMessageBeforeReply = tmp2Result.useLongestChannelMessageBeforeReply(channel.id, id);
  tmp2Result = loadMessageRequestData;
  const messageRequestPreview = tmp2Result.useMessageRequestPreview(channel, { enabled: isReportable });
  let message = longestChannelMessageBeforeReply;
  ({ loaded, error } = messageRequestPreview);
  if (longestChannelMessageBeforeReply == null) {
    id = undefined;
    if (message != null) {
      const author = message.author;
      if (author != null) {
        id = author.id;
      }
    }
    let tmp8 = null;
    if (id === id) {
      tmp8 = message;
    }
    message = tmp8;
  }
  const isLoaded = null != message || loaded || error;
  return { message, isReportable, isLoaded };
};