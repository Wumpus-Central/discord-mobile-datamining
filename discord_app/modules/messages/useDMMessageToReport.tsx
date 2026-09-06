// discord_app/modules/messages/useDMMessageToReport.tsx
import useIsRelationshipTypeSpamReportable from "useIsRelationshipTypeSpamReportable.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export const useDMMessageToReport = function useDMMessageToReport(channel, id, arg2) {
  let isRelationshipTypeSpamReportable = arg2;
  let obj = useIsRelationshipTypeSpamReportable;
  if (!arg2) {
    isRelationshipTypeSpamReportable = obj.useIsRelationshipTypeSpamReportable(id);
  }
  let tmp2Result = tmp2(12450);
  const longestChannelMessageBeforeReply = tmp2Result.useLongestChannelMessageBeforeReply(channel.id, id);
  tmp2Result = tmp2(12594);
  const messageRequestPreview = tmp2Result.useMessageRequestPreview(channel, {
    enabled: isRelationshipTypeSpamReportable,
  });
  const message = messageRequestPreview.message;
  let tmp6 = longestChannelMessageBeforeReply;
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
    tmp6 = tmp8;
  }
  obj = { message: tmp6, isReportable: isRelationshipTypeSpamReportable, isLoaded: null != tmp6 || loaded || error };
  return obj;
};
