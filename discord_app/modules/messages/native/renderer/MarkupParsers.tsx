// === Module 7761: MarkupParsers ===

// Module 7761 (MarkupParsers)
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4877 */;
import renderMessageMarkup from "renderMessageMarkup" /* 7531 */;
import NativeMarkdownExperiment2 from "NativeMarkdownExperiment" /* 7762 */;
import ChangeLogStandardTemplate from "ChangeLogStandardTemplate" /* 7763 */;
import trackMarkdownParse2 from "trackMarkdownParse" /* 7775 */;
import parseNativeMarkupDefault from "parseNativeMarkup" /* 7777 */;
import LRUCache_mod from "LRUCache" /* 1444 */;
import size from "module_2" /* 2 */;

let LRUCache;
const MessageTypes = Constants.MessageTypes;
let obj = { max: Infinity, maxAge: 15 * DurationsDefault.Millis.MINUTE, updateAgeOnGet: true };
let closure_4 = new LRUCache(obj);
new LRUCache(obj);
let closure_5 = new LRUCache(obj);
let obj2 = { updateAgeOnGet: false };
new LRUCache(obj);
LRUCache = LRUCache_mod;
let merged = Object.assign(obj);
const importDefaultResult1 = new LRUCache(obj2);
const tmp7 = new LRUCache(obj);
let closure_7 = tmp7;
let result = size.fileFinishedImporting("modules/messages/native/renderer/MarkupParsers.tsx");

export const parseEmbedTitleMarkup = function parseEmbedTitleMarkup(rawName, channelId) {
  const combined = "" + rawName + "-" + channelId;
  let value = closure_4.get(combined);
  if (null == value) {
    const obj3 = { channelId };
    const obj2 = MarkupUtilsDefault;
    const parseEmbedTitleToASTResult = obj2.parseEmbedTitleToAST(rawName, true, obj3);
    const result = closure_4.set(combined, parseEmbedTitleToASTResult);
    value = parseEmbedTitleToASTResult;
  }
  return value;
};
export const parseEmbedTitleMarkupWithoutLinks = function parseEmbedTitleMarkupWithoutLinks(arg0, channelId) {
  const combined = "" + arg0 + "-" + channelId + "-nolinks";
  let value = closure_5.get(combined);
  if (null == value) {
    const obj3 = { channelId };
    const obj2 = MarkupUtilsDefault;
    const result = obj2.parseEmbedTitleWithoutLinksToAST(arg0, true, obj3);
    const result1 = closure_5.set(combined, result);
    value = result;
  }
  return value;
};
export const parseEmbedDescriptionMarkup = function parseEmbedDescriptionMarkup(arg0) {
  let channelId;
  let description;
  let ignoreCache;
  let isField;
  let replaceMap;
  let showListsAndHeaders;
  let showMaskedLinks;
  let tmp9;
  ({ description, channelId, isField, replaceMap, showListsAndHeaders } = arg0);
  ({ ignoreCache, showMaskedLinks } = arg0);
  const combined = "" + description + "-" + channelId;
  const value = importDefaultResult1.get(combined);
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
  const obj = { channelId, allowGameMentions: true, allowLinks: true, allowEmojiLinks: true, allowHeading: tmp9, allowList: showListsAndHeaders, previewLinkTarget: showMaskedLinks };
  tmp9 = !isField;
  const parseToAST = MarkupUtilsDefault.parseToAST;
  MarkupUtilsDefault;
  if (!isField) {
    tmp9 = showListsAndHeaders;
  }
  const parseToASTResult = parseToAST(tmp4, true, obj);
  const result = importDefaultResult1.set(combined, parseToASTResult);
  return parseToASTResult;
};
export const parseMessageMarkup = function parseMessageMarkup(message, message2, forceHideSimpleEmbedContent) {
  let num;
  let path;
  let result;
  let result2;
  let tmp16;
  let tmp6;
  function parseMessageContentToAST(message, arg1, enabled) {
    let obj2;
    let obj5;
    const tmp = enabled;
    if (!tmp) {
      const obj4 = { result: obj5.renderMessageMarkupToAST(message, arg1), path: "legacy" };
      obj5 = renderMessageMarkup;
      return obj4;
    } else {
      try {
        const obj = { result: obj2.renderMessageMarkupToASTWithParser(parseNativeMarkupDefault, message, arg1), path: "native" };
        obj2 = renderMessageMarkup;
        return obj;
      } catch (tmp5) {
        const obj3 = SentryUtilsDefault;
        obj3.captureException(tmp5);
      }
    }
  }
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
  const NativeMarkdownExperiment = NativeMarkdownExperiment2.NativeMarkdownExperiment;
  const enabled = NativeMarkdownExperiment.getConfig({ location: "parseMessageMarkup" }).enabled;
  const value = closure_7.get(message);
  if (null != value) {
    if (value.isInlineReplyPreview === flag) {
      if (value.nativeMarkdownEnabled === enabled) {
        return value;
      }
    }
  }
  if (message.type === MessageTypes.CHANGELOG) {
    if (null != message.changelogId) {
      const astParserFor = MarkupUtilsDefault.astParserFor;
      MarkupUtilsDefault;
      let obj2 = { hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowHeading: tmp16, allowList: flag2, allowLinks: flag4, previewLinkTarget: flag4 };
      tmp16 = flag2;
      const content = message.content;
      const tmpResult = ChangeLogStandardTemplate;
      const astParserForResult = astParserFor(tmpResult.changelogRules(message.changelogId, true));
      if (!flag2) {
        tmp16 = flag3;
      }
      if (!flag2) {
        flag2 = flag3;
      }
      let obj3 = { content: astParserForResult(content, false, obj2), isInlineReplyPreview: false, hasSpoilerEmbeds: false, hasBailedAst: false, nativeMarkdownEnabled: enabled };
      const result1 = closure_7.set(message, obj3);
      return obj3;
    }
  }
  let tmp4 = message2;
  let obj4 = { contentMessage: message2, hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowGameMentions: true, allowHeading: tmp6, allowList: flag2 || flag3, allowLinks: flag4, previewLinkTarget: flag4 };
  tmp6 = flag2;
  const nowResult = performance.now();
  if (!flag2) {
    tmp6 = flag3;
  }
  ({ result, path } = parseMessageContentToAST(message, obj4, enabled));
  let obj5 = { isInlineReplyPreview: flag, nativeMarkdownEnabled: enabled };
  parseMessageContentToAST(message, obj4, enabled);
  const diff = performance.now() - nowResult;
  const merged = Object.assign(result);
  result2 = closure_7.set(message, obj5);
  const obj6 = { durationMs: diff, path, contentLength: num, hasBailedAst: obj5.hasBailedAst };
  const trackMarkdownParse = trackMarkdownParse2.trackMarkdownParse;
  trackMarkdownParse2;
  if (tmp4 == null) {
    tmp4 = message;
  }
  const content1 = tmp4.content;
  num = undefined;
  if (content1 != null) {
    num = content1.length;
  }
  if (num == null) {
    num = 0;
  }
  trackMarkdownParse(obj6);
  return obj5;
};