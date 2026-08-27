// === Module 7930: parseEmbedTitleMarkup ===

// Module 7930 (parseEmbedTitleMarkup)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import setDefault from "set" /* 687 */;
import get_defaultRulesDefault from "get defaultRules" /* 4435 */;
import getInitialParserState from "getInitialParserState" /* 7564 */;
import LHeading from "LHeading" /* 7931 */;
import importDefaultResult from "priv" /* 1405 */;

const MessageTypes = ME.MessageTypes;
let obj = { max: Infinity, maxAge: 15 * setDefault.Millis.MINUTE, updateAgeOnGet: true };
let closure_4 = new importDefaultResult(obj);
const tmp2 = new importDefaultResult(obj);
let closure_5 = new importDefaultResult(obj);
obj = {};
let merged = Object.assign(obj);
obj.updateAgeOnGet = false;
importDefaultResult = new importDefaultResult(obj);
const tmp3 = new importDefaultResult(obj);
let closure_7 = new importDefaultResult(obj);
const tmp7 = new importDefaultResult(obj);
let result = set.fileFinishedImporting("modules/messages/native/renderer/MarkupParsers.tsx");

export const parseEmbedTitleMarkup = function parseEmbedTitleMarkup(rawName, closure_0) {
  const combined = "" + rawName + "-" + closure_0;
  let obj = closure_4;
  let value = closure_4.get(combined);
  if (null == value) {
    obj = { channelId: null };
    obj[0] = closure_0;
    const parseEmbedTitleToASTResult = get_defaultRulesDefault.parseEmbedTitleToAST(rawName, true, obj);
    const result = obj.set(combined, parseEmbedTitleToASTResult);
    value = parseEmbedTitleToASTResult;
    const obj2 = get_defaultRulesDefault;
  }
  return value;
};
export const parseEmbedTitleMarkupWithoutLinks = function parseEmbedTitleMarkupWithoutLinks(arg0, arg1) {
  const combined = "" + arg0 + "-" + arg1 + "-nolinks";
  let obj = closure_5;
  let value = closure_5.get(combined);
  if (null == value) {
    obj = { channelId: null };
    obj[0] = arg1;
    const result = get_defaultRulesDefault.parseEmbedTitleWithoutLinksToAST(arg0, true, obj);
    const result1 = obj.set(combined, result);
    value = result;
    const obj2 = get_defaultRulesDefault;
  }
  return value;
};
export const parseEmbedDescriptionMarkup = function parseEmbedDescriptionMarkup(arg0) {
  ({ description, channelId, isField, replaceMap, showListsAndHeaders } = arg0);
  ({ ignoreCache, showMaskedLinks } = arg0);
  const combined = "" + description + "-" + channelId;
  const value = importDefaultResult.get(combined);
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
      let tmp11 = tmp7;
      replaced = replaced.replaceAll(tmp7, replaceMap[tmp7]);
      continue;
    }
  }
  const obj = { channelId, allowGameMentions: true, allowLinks: true, allowEmojiLinks: true, allowHeading: null, allowList: null, previewLinkTarget: null };
  let tmp8 = !isField;
  if (!isField) {
    tmp8 = showListsAndHeaders;
  }
  obj[4] = tmp8;
  obj[5] = showListsAndHeaders;
  obj[6] = showMaskedLinks;
  const parseToASTResult = get_defaultRulesDefault.parseToAST(tmp4, true, obj);
  const result = importDefaultResult.set(combined, parseToASTResult);
  return parseToASTResult;
};
export const parseMessageMarkup = function parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, arg4, result, result2) {
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
  obj1 = closure_7;
  const value = closure_7.get(message);
  if (null != value) {
    if (value.isInlineReplyPreview === flag) {
      return value;
    }
  }
  if (message.type !== MessageTypes.CHANGELOG) {
    obj = { contentMessage: null, hideSimpleEmbedContent: null, formatInline: null, allowGameMentions: true, allowHeading: null, allowList: null, allowLinks: null, previewLinkTarget: null };
    obj[0] = message2;
    obj[1] = forceHideSimpleEmbedContent;
    obj[2] = flag;
    let tmp5 = flag2;
    if (!flag2) {
      tmp5 = obj;
    }
    obj[4] = tmp5;
    let tmp6 = flag2;
    if (!flag2) {
      tmp6 = obj;
    }
    obj = {};
    obj[5] = tmp6;
    obj[6] = flag3;
    obj[7] = flag3;
    const merged = Object.assign(getInitialParserState.renderMessageMarkupToAST(message, obj));
    obj.isInlineReplyPreview = flag;
    result = obj1.set(message, obj);
    const obj3 = getInitialParserState;
  }
  const obj6 = get_defaultRulesDefault;
  obj1 = { hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowHeading: null, allowList: null, allowLinks: null, previewLinkTarget: null };
  flag = flag2;
  const obj7 = LHeading;
  if (!flag2) {
    flag = obj;
  }
  obj1[2] = flag;
  if (!flag2) {
    flag2 = obj;
  }
  obj = { content: obj6.astParserFor(LHeading.changelogRules(message.changelogId, true))(message.content, false, obj1), isInlineReplyPreview: false, hasSpoilerEmbeds: false, hasBailedAst: false };
  obj1[3] = flag2;
  obj1[4] = flag3;
  obj1[5] = flag3;
  const result1 = obj1.set(message, obj);
};