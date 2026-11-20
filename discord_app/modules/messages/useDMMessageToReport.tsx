// === Module 13365: useDMMessageToReport ===

// Module 13365 (useDMMessageToReport)
import useIsOwnedConjureApplicationDefault from "useIsOwnedConjureApplication" /* 10218 */;
import useLongestChannelMessageBeforeReply from "useLongestChannelMessageBeforeReply" /* 13215 */;
import useIsRelationshipTypeSpamReportable from "useIsRelationshipTypeSpamReportable" /* 13366 */;
import getApplicationFromBotUserIdDefault from "getApplicationFromBotUserId" /* 13367 */;
import useMessageRequestPreview from "useMessageRequestPreview" /* 13368 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export function useDMMessageToReport(channel, id, arg2) {
  let isRelationshipTypeSpamReportable = useIsRelationshipTypeSpamReportable.useIsRelationshipTypeSpamReportable(id);
  let tmp6 = null;
  if (arg2) {
    tmp6 = id;
  }
  const tmp5Result = getApplicationFromBotUserIdDefault(tmp6);
  useIsOwnedConjureApplicationDefault;
  if (arg2) {
    id = undefined;
    if (tmp5Result != null) {
      id = tmp5Result.id;
    }
  }
  if (arg2) {
    isRelationshipTypeSpamReportable = true !== tmp11;
  }
  const longestChannelMessageBeforeReply = useLongestChannelMessageBeforeReply.useLongestChannelMessageBeforeReply(channel.id, id);
  const tmpResult = useLongestChannelMessageBeforeReply;
  const messageRequestPreview = useMessageRequestPreview.useMessageRequestPreview(channel, { enabled: isRelationshipTypeSpamReportable });
  const message = messageRequestPreview.message;
  let tmp14 = longestChannelMessageBeforeReply;
  ({ loaded, error } = messageRequestPreview);
  if (longestChannelMessageBeforeReply == null) {
    let id1;
    if (message != null) {
      const author = message.author;
      if (author != null) {
        id1 = author.id;
      }
    }
    let tmp16 = null;
    if (id1 === id) {
      tmp16 = message;
    }
    tmp14 = tmp16;
  }
  return { message: tmp14, isReportable: isRelationshipTypeSpamReportable, isLoaded: null != tmp14 || loaded || error };
}