// discord_app/modules/messages/useDMMessageToReport.tsx
const result = require("loadMessageRequestData").fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export const useDMMessageToReport = function useDMMessageToReport(channel, id, arg2) {
  let error;
  let loaded;
  let isReportable = arg2;
  if (!arg2) {
    isReportable = obj.useIsRelationshipTypeSpamReportable(id);
  }
  let tmp2Result = tmp2(11814);
  const longestChannelMessageBeforeReply = tmp2Result.useLongestChannelMessageBeforeReply(channel.id, id);
  tmp2Result = tmp2(11956);
  const messageRequestPreview = tmp2Result.useMessageRequestPreview(channel, { enabled: isReportable });
  let message = messageRequestPreview.message;
  message = longestChannelMessageBeforeReply;
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