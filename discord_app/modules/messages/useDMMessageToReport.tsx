// === Module 12285: useDMMessageToReport ===

// Module 12285 (useDMMessageToReport)
import c from "c" /* 576 */;
import useLongestChannelMessageBeforeReply from "useLongestChannelMessageBeforeReply" /* 12124 */;
import useIsRelationshipTypeSpamReportable from "useIsRelationshipTypeSpamReportable" /* 12286 */;
import getApplicationFromBotUserIdDefault from "getApplicationFromBotUserId" /* 12287 */;
import useIsOwnedConjureApplicationDefault from "useIsOwnedConjureApplication" /* 12288 */;
import useMessageRequestPreview from "useMessageRequestPreview" /* 12289 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export const useDMMessageToReport = ReactCompilerGating.isReactCompilerEnabled() ? (function useDMMessageToReport(id, arg1, arg2) {
  const cResult = c.c(6);
  let isRelationshipTypeSpamReportable = useIsRelationshipTypeSpamReportable.useIsRelationshipTypeSpamReportable(arg1);
  let tmp7 = null;
  if (arg2) {
    tmp7 = arg1;
  }
  const tmp6Result = getApplicationFromBotUserIdDefault(tmp7);
  useIsOwnedConjureApplicationDefault;
  if (arg2) {
    id = undefined;
    if (tmp6Result != null) {
      id = tmp6Result.id;
    }
    if (id == null) {
      id = arg1;
    }
  }
  if (arg2) {
    isRelationshipTypeSpamReportable = true !== tmp12;
  }
  let longestChannelMessageBeforeReply = useLongestChannelMessageBeforeReply.useLongestChannelMessageBeforeReply(id.id, arg1);
  if (cResult[0] !== isRelationshipTypeSpamReportable) {
    const obj3 = { enabled: isRelationshipTypeSpamReportable };
    cResult[0] = isRelationshipTypeSpamReportable;
    cResult[1] = obj3;
    let tmp14 = obj3;
  } else {
    tmp14 = cResult[1];
  }
  const tmpResult = useLongestChannelMessageBeforeReply;
  const messageRequestPreview = useMessageRequestPreview.useMessageRequestPreview(id, tmp14);
  ({ message, loaded, error } = messageRequestPreview);
  if (longestChannelMessageBeforeReply == null) {
    let id1;
    if (message != null) {
      const author = message.author;
      if (author != null) {
        id1 = author.id;
      }
    }
    let tmp17 = null;
    if (id1 === arg1) {
      tmp17 = message;
    }
    longestChannelMessageBeforeReply = tmp17;
  }
  if (cResult[2] === (null != longestChannelMessageBeforeReply || loaded || error)) {
    if (cResult[3] === isRelationshipTypeSpamReportable) {
      if (cResult[4] === longestChannelMessageBeforeReply) {
        let tmp19 = cResult[5];
      }
      return tmp19;
    }
  }
  const obj4 = { message: longestChannelMessageBeforeReply, isReportable: isRelationshipTypeSpamReportable, isLoaded: null != longestChannelMessageBeforeReply || loaded || error };
  cResult[2] = null != longestChannelMessageBeforeReply || loaded || error;
  cResult[3] = isRelationshipTypeSpamReportable;
  cResult[4] = longestChannelMessageBeforeReply;
  cResult[5] = obj4;
  tmp19 = obj4;
  const tmpResult2 = useMessageRequestPreview;
}) : (function useDMMessageToReport(id, arg1, arg2) {
  let isRelationshipTypeSpamReportable = useIsRelationshipTypeSpamReportable.useIsRelationshipTypeSpamReportable(arg1);
  let tmp6 = null;
  if (arg2) {
    tmp6 = arg1;
  }
  const tmp5Result = getApplicationFromBotUserIdDefault(tmp6);
  useIsOwnedConjureApplicationDefault;
  if (arg2) {
    id = undefined;
    if (tmp5Result != null) {
      id = tmp5Result.id;
    }
    if (id == null) {
      id = arg1;
    }
  }
  if (arg2) {
    isRelationshipTypeSpamReportable = true !== tmp11;
  }
  const longestChannelMessageBeforeReply = useLongestChannelMessageBeforeReply.useLongestChannelMessageBeforeReply(id.id, arg1);
  const tmpResult = useLongestChannelMessageBeforeReply;
  const messageRequestPreview = useMessageRequestPreview.useMessageRequestPreview(id, { enabled: isRelationshipTypeSpamReportable });
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
    if (id1 === arg1) {
      tmp16 = message;
    }
    tmp14 = tmp16;
  }
  return { message: tmp14, isReportable: isRelationshipTypeSpamReportable, isLoaded: null != tmp14 || loaded || error };
});