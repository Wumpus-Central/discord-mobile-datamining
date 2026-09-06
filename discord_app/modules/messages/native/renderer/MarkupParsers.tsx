// === Module 8089: MarkupParsers ===

// Module 8089 (MarkupParsers)
import Constants from "Constants" /* 1074 */;
import DurationsDefault from "Durations" /* 1090 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4550 */;
import renderMessageMarkup from "renderMessageMarkup" /* 7888 */;
import ChangeLogStandardTemplate from "ChangeLogStandardTemplate" /* 8090 */;
import priv from "priv" /* 1437 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
let obj = { max: Infinity, maxAge: 15 * DurationsDefault.Millis.MINUTE, updateAgeOnGet: true };
let closure_4 = new priv(obj);
const tmp2 = new priv(obj);
let closure_5 = new priv(obj);
obj = {};
let merged = Object.assign(obj);
obj.updateAgeOnGet = false;
priv = new priv(obj);
const tmp3 = new priv(obj);
let closure_7 = new priv(obj);
let result = size.fileFinishedImporting("modules/messages/native/renderer/MarkupParsers.tsx");

export const parseEmbedTitleMarkup = function parseEmbedTitleMarkup(rawName, channelId) {
  const combined = "" + rawName + "-" + channelId;
  let obj = closure_4;
  value = closure_4.get(combined);
  if (null == value) {
    obj = { channelId };
    const parseEmbedTitleToASTResult = MarkupUtilsDefault.parseEmbedTitleToAST(rawName, true, obj);
    const result = obj.set(combined, parseEmbedTitleToASTResult);
    value = parseEmbedTitleToASTResult;
  }
  return value;
};
export const parseEmbedTitleMarkupWithoutLinks = function parseEmbedTitleMarkupWithoutLinks(arg0, channelId) {
  const combined = "" + arg0 + "-" + channelId + "-nolinks";
  let obj = closure_5;
  value = closure_5.get(combined);
  if (null == value) {
    obj = { channelId };
    const result = MarkupUtilsDefault.parseEmbedTitleWithoutLinksToAST(arg0, true, obj);
    const result1 = obj.set(combined, result);
    value = result;
  }
  return value;
};
export const parseEmbedDescriptionMarkup = function parseEmbedDescriptionMarkup(arg0) {
  ({ description, channelId, isField, replaceMap, showListsAndHeaders } = arg0);
  ({ ignoreCache, showMaskedLinks } = arg0);
  const combined = "" + description + "-" + channelId;
  value = priv.get(combined);
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
  const result = priv.set(combined, parseToASTResult);
  return parseToASTResult;
};
export const parseMessageMarkup = function parseMessageMarkup(message, message2, forceHideSimpleEmbedContent) {
  let flag = isInlineReplyPreview;
  if (isInlineReplyPreview === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  let obj = result;
  if (result === undefined) {
    obj = false;
  }
  let flag3 = result2;
  if (result2 === undefined) {
    flag3 = false;
  }
  let obj1 = closure_7;
  value = closure_7.get(message);
  if (null != value) {
    if (value.isInlineReplyPreview === flag) {
      return value;
    }
  }
  if (message.type !== MessageTypes.CHANGELOG) {
    obj = { contentMessage: message2, hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowGameMentions: true, allowHeading: null, allowList: null, allowLinks: null, previewLinkTarget: null };
    let tmp5 = flag2;
    if (!flag2) {
      tmp5 = obj;
    }
    obj.allowHeading = tmp5;
    let tmp6 = flag2;
    if (!flag2) {
      tmp6 = obj;
    }
    obj = { allowList: tmp6, allowLinks: flag3, previewLinkTarget: flag3 };
    const merged = Object.assign(renderMessageMarkup.renderMessageMarkupToAST(message, obj));
    obj.isInlineReplyPreview = flag;
    result = obj1.set(message, obj);
  }
  const obj6 = MarkupUtilsDefault;
  obj1 = { hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowHeading: null, allowList: null, allowLinks: null, previewLinkTarget: null };
  flag = flag2;
  if (!flag2) {
    flag = obj;
  }
  obj1.allowHeading = flag;
  if (!flag2) {
    flag2 = obj;
  }
  obj = { content: obj6.astParserFor(ChangeLogStandardTemplate.changelogRules(message.changelogId, true))(message.content, false, obj1), isInlineReplyPreview: false, hasSpoilerEmbeds: false, hasBailedAst: false };
  obj1.allowList = flag2;
  obj1.allowLinks = flag3;
  obj1.previewLinkTarget = flag3;
  const result1 = obj1.set(message, obj);
  const astParserForResult = obj6.astParserFor(ChangeLogStandardTemplate.changelogRules(message.changelogId, true));
};