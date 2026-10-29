// === Module 8518: MarkupParsers ===

// Module 8518 (MarkupParsers)
import Constants from "Constants" /* 1084 */;
import DurationsDefault from "Durations" /* 1101 */;
import SentryUtilsDefault from "SentryUtils" /* 1254 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5743 */;
import NativeMarkdownExperiment from "NativeMarkdownExperiment" /* 8519 */;
import ChangeLogStandardTemplate from "ChangeLogStandardTemplate" /* 8523 */;
import renderMessageMarkup from "renderMessageMarkup" /* 8540 */;
import parseNativeMarkupDefault from "parseNativeMarkup" /* 8549 */;
import priv from "priv" /* 1457 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
let obj = { max: Infinity, maxAge: 15 * DurationsDefault.Millis.MINUTE, updateAgeOnGet: true };
let closure_4 = new priv(obj);
const tmp2 = new priv(obj);
let closure_5 = new priv(obj);
let obj2 = {};
let merged = Object.assign(obj);
obj2.updateAgeOnGet = false;
const importDefaultResult1 = new priv(obj2);
const tmp3 = new priv(obj);
let closure_7 = new priv(obj);
let result = size.fileFinishedImporting("modules/messages/native/renderer/MarkupParsers.tsx");

export function parseEmbedTitleMarkup(rawName, channelId) {
  const combined = "" + rawName + "-" + channelId;
  value = closure_4.get(combined);
  if (null == value) {
    const obj3 = { channelId };
    const parseEmbedTitleToASTResult = MarkupUtilsDefault.parseEmbedTitleToAST(rawName, true, obj3);
    const result = closure_4.set(combined, parseEmbedTitleToASTResult);
    value = parseEmbedTitleToASTResult;
  }
  return value;
}
export function parseEmbedTitleMarkupWithoutLinks(arg0, channelId) {
  const combined = "" + arg0 + "-" + channelId + "-nolinks";
  value = closure_5.get(combined);
  if (null == value) {
    const obj3 = { channelId };
    const result = MarkupUtilsDefault.parseEmbedTitleWithoutLinksToAST(arg0, true, obj3);
    const result1 = closure_5.set(combined, result);
    value = result;
  }
  return value;
}
export function parseEmbedDescriptionMarkup(arg0) {
  ({ description, channelId, isField, replaceMap, showListsAndHeaders } = arg0);
  ({ ignoreCache, showMaskedLinks } = arg0);
  const combined = "" + description + "-" + channelId;
  value = importDefaultResult1.get(combined);
  if (null != value) {
    if (!ignoreCache) {
      return value;
    }
  }
  let replaced = description;
  let tmp4 = description;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp4 = replaced;
    while (keys[tmp] !== undefined) {
      replaced = replaced.replaceAll(tmp7, replaceMap[tmp7]);
      continue;
    }
  }
  const obj = { channelId, allowGameMentions: true, allowLinks: true, allowEmojiLinks: true, allowHeading: null, allowList: null, previewLinkTarget: null };
  let tmp8 = !isField;
  if (!isField) {
    tmp8 = showListsAndHeaders;
  }
  obj.allowHeading = tmp8;
  obj.allowList = showListsAndHeaders;
  obj.previewLinkTarget = showMaskedLinks;
  const parseToASTResult = MarkupUtilsDefault.parseToAST(tmp4, true, obj);
  const result = importDefaultResult1.set(combined, parseToASTResult);
  return parseToASTResult;
}
export function parseMessageMarkup(message, message2, forceHideSimpleEmbedContent) {
  let flag = isInlineReplyPreview;
  if (isInlineReplyPreview === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  let flag3 = result;
  if (result === undefined) {
    flag3 = false;
  }
  let flag4 = result2;
  if (result2 === undefined) {
    flag4 = false;
  }
  result = NativeMarkdownExperiment.isNativeMarkdownEnabled({ location: "parseMessageMarkup" });
  value = closure_7.get(message);
  if (null != value) {
    if (value.isInlineReplyPreview === flag) {
      if (value.nativeMarkdownEnabled === result) {
        return value;
      }
    }
  }
  if (message.type === MessageTypes.CHANGELOG) {
    if (null != message.changelogId) {
      const obj5 = MarkupUtilsDefault;
      const obj3 = { hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowHeading: null, allowList: null, allowLinks: null, previewLinkTarget: null };
      let tmp11 = flag2;
      const tmpResult = ChangeLogStandardTemplate;
      if (!flag2) {
        tmp11 = flag3;
      }
      obj3.allowHeading = tmp11;
      if (!flag2) {
        flag2 = flag3;
      }
      const obj4 = { content: null, isInlineReplyPreview: false, hasSpoilerEmbeds: false, hasBailedAst: false, nativeMarkdownEnabled: null };
      obj3.allowList = flag2;
      obj3.allowLinks = flag4;
      obj3.previewLinkTarget = flag4;
      obj4.content = obj5.astParserFor(ChangeLogStandardTemplate.changelogRules(message.changelogId, true))(message.content, false, obj3);
      obj4.nativeMarkdownEnabled = result;
      const result1 = closure_7.set(message, obj4);
      return obj4;
    }
  }
  const obj6 = { contentMessage: message2, hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowGameMentions: true, allowHeading: null, allowList: null, allowLinks: null, previewLinkTarget: null };
  let tmp5 = flag2;
  if (!flag2) {
    tmp5 = flag3;
  }
  obj6.allowHeading = tmp5;
  let tmp6 = flag2;
  if (!flag2) {
    tmp6 = flag3;
  }
  obj6.allowList = tmp6;
  obj6.allowLinks = flag4;
  obj6.previewLinkTarget = flag4;
  const obj7 = {};
  const merged = Object.assign((function parseMessageContentToAST(message, arg1, result) {
    if (!result) {
      return renderMessageMarkup.renderMessageMarkupToAST(message, arg1);
    } else {
      try {
        return renderMessageMarkup.renderMessageMarkupToASTWithParser(parseNativeMarkupDefault, message, arg1);
      } catch (tmp4) {
        SentryUtilsDefault.captureException(tmp4);
      }
    }
  })(message, obj6, result));
  obj7.isInlineReplyPreview = flag;
  obj7.nativeMarkdownEnabled = result;
  result2 = closure_7.set(message, obj7);
  return obj7;
}