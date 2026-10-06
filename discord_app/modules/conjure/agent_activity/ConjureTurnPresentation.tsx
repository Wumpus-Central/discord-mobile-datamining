// === Module 16733: ConjureTurnPresentation ===

// Module 16733 (ConjureTurnPresentation)
import ConjureTimelineTree from "ConjureTimelineTree" /* 16692 */;
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
  let content;
  let hasProposal;
  let key;
  let steps;
  let str4;
  let str5;
  ({ steps, content, hasProposal } = hasAttachments);
  let c0;
  hasAttachments = hasAttachments.hasAttachments;
  const obj = ConjureTimelineTree;
  const streamedContentResult = obj.streamedContent(steps);
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
          tmp7 = atResult.content.length >= 16000 && trimmed1.startsWith(trimmed);
          atResult.content.length >= 16000 && trimmed1.startsWith(trimmed);
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
  const atResult1 = found2.at(-1);
  if (!hasProposal) {
    tmp10 = "" !== content.trim();
  }
  const obj2 = { streamed: found1, lastStreamedMessage: atResult1, replyKey: key, showsClosingMessage: tmp10, closingContent: str4, attachmentsHost: str5 };
  key = undefined;
  if (tmp4 != null) {
    key = tmp4.key;
  }
  str4 = "";
  if (tmp10) {
    str4 = content.trim();
  }
  ConjureTimelineTree;
  str5 = "none";
  if (hasAttachments) {
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
  return obj2;
};
export const turnLeadsWithStretch = function turnLeadsWithStretch(arg0, turnPresentation) {
  let someResult = arg0;
  if (!someResult) {
    const streamed = turnPresentation.streamed;
    someResult = streamed.some((type) => "message" === type.type);
  }
  return someResult;
};