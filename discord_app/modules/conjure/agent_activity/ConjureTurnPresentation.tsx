// === Module 17008: ConjureTurnPresentation ===

// Module 17008 (ConjureTurnPresentation)
import ConjureTimelineTree from "ConjureTimelineTree" /* 16965 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureTurnPresentation.tsx");

export const resolveAttachmentHost = function resolveAttachmentHost(hasAttachments) {
  let str = "none";
  if (hasAttachments.hasAttachments) {
    let str2 = "closing";
    if (!tmp) {
      let str3 = "standalone";
      if (tmp2) {
        str3 = "streamed";
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
};
export const resolveTurnPresentation = function resolveTurnPresentation(hasAttachments) {
  ({ steps, content, hasProposal } = hasAttachments);
  c0 = undefined;
  const streamedContentResult = ConjureTimelineTree.streamedContent(steps);
  const found = streamedContentResult.filter((type) => "message" === type.type);
  const atResult = found.at(-1);
  let tmp4 = null;
  if (!hasProposal) {
    tmp4 = null;
    if (null != atResult) {
      const trimmed = str.trim();
      const trimmed1 = content.trim();
      let tmp6 = "" !== trimmed && "" !== trimmed1;
      if (tmp6) {
        let tmp7 = trimmed === trimmed1;
        if (!tmp7) {
          tmp7 = str.length >= 16000 && trimmed1.startsWith(trimmed);
          const tmp8 = str.length >= 16000 && trimmed1.startsWith(trimmed);
        }
        tmp6 = tmp7;
      }
      tmp4 = null;
      if (tmp6) {
        tmp4 = atResult;
      }
    }
  }
  c0 = tmp4;
  const found1 = streamedContentResult.filter((item) => item !== c0);
  const found2 = found1.filter((type) => "message" === type.type);
  let tmp10 = !hasProposal;
  if (!hasProposal) {
    tmp10 = "" !== content.trim();
  }
  const obj2 = { streamed: found1, lastStreamedMessage: found2.at(-1), replyKey: null, showsClosingMessage: null, closingContent: null, attachmentsHost: null };
  let key;
  if (tmp4 != null) {
    key = tmp4.key;
  }
  obj2.replyKey = key;
  obj2.showsClosingMessage = tmp10;
  let str4 = "";
  if (tmp10) {
    str4 = content.trim();
  }
  obj2.closingContent = str4;
  ConjureTimelineTree;
  let str5 = "none";
  if (hasAttachments.hasAttachments) {
    let str6 = "closing";
    if (!tmp10) {
      let str7 = "standalone";
      if (tmp13) {
        str7 = "streamed";
      }
      str6 = str7;
    }
    str5 = str6;
  }
  obj2.attachmentsHost = str5;
  return obj2;
};
export const turnLeadsWithStretch = function turnLeadsWithStretch(arg0, turnPresentation) {
  let someResult = arg0;
  if (!arg0) {
    const streamed = turnPresentation.streamed;
    someResult = streamed.some((type) => "message" === type.type);
  }
  return someResult;
};