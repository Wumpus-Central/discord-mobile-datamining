// === Module 8194: MarkupParsers ===

// Module 8194 (MarkupParsers)
import Constants from "Constants" /* 1074 */;
import DurationsDefault from "Durations" /* 1090 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4626 */;
import renderMessageMarkup from "renderMessageMarkup" /* 7992 */;
import NativeMarkdownExperiment2 from "NativeMarkdownExperiment" /* 8195 */;
import ChangeLogStandardTemplate from "ChangeLogStandardTemplate" /* 8196 */;
import trackMarkdownParse from "trackMarkdownParse" /* 8210 */;
import parseNativeMarkupDefault from "parseNativeMarkup" /* 8212 */;
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
  let obj = closure_7;
  value = closure_7.get(message);
  if (null != value) {
    if (value.isInlineReplyPreview === flag) {
      if (value.nativeMarkdownEnabled === enabled) {
        return value;
      }
    }
  }
  if (message.type === MessageTypes.CHANGELOG) {
    if (null != message.changelogId) {
      let tmpResult = ChangeLogStandardTemplate;
      obj = { hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowHeading: null, allowList: null, allowLinks: null, previewLinkTarget: null };
      let tmp15 = flag2;
      if (!flag2) {
        tmp15 = flag3;
      }
      obj.allowHeading = tmp15;
      if (!flag2) {
        flag2 = flag3;
      }
      obj = { content: null, isInlineReplyPreview: false, hasSpoilerEmbeds: false, hasBailedAst: false, nativeMarkdownEnabled: null, allowList: flag2, allowLinks: flag4, previewLinkTarget: flag4 };
      obj.content = MarkupUtilsDefault.astParserFor(tmpResult.changelogRules(message.changelogId, true))(message.content, false, obj);
      obj.nativeMarkdownEnabled = enabled;
      result = obj.set(message, obj);
      return obj;
    }
  }
  let tmp4 = message2;
  const obj1 = { contentMessage: message2, hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowGameMentions: true, allowHeading: null, allowList: null, allowLinks: null, previewLinkTarget: null };
  let tmp6 = flag2;
  if (!flag2) {
    tmp6 = flag3;
  }
  obj1.allowHeading = tmp6;
  let tmp7 = flag2;
  if (!flag2) {
    tmp7 = flag3;
  }
  obj1.allowList = tmp7;
  obj1.allowLinks = flag4;
  obj1.previewLinkTarget = flag4;
  const nowResult = performance.now();
  ({ result, path } = (function parseMessageContentToAST(message, arg1, enabled) {
    if (!enabled) {
      let obj = { result: renderMessageMarkup.renderMessageMarkupToAST(message, arg1), path: "legacy" };
      return obj;
    } else {
      try {
        obj = { result: renderMessageMarkup.renderMessageMarkupToASTWithParser(parseNativeMarkupDefault, message, arg1), path: "native" };
        return obj;
      } catch (tmp4) {
        SentryUtilsDefault.captureException(tmp4);
      }
    }
  })(message, obj1, enabled));
  const obj2 = {};
  const diff = performance.now() - nowResult;
  const merged = Object.assign(result);
  obj2.isInlineReplyPreview = flag;
  obj2.nativeMarkdownEnabled = enabled;
  const result1 = obj.set(message, obj2);
  tmpResult = trackMarkdownParse;
  let obj3 = { durationMs: diff, path, contentLength: null, hasBailedAst: null };
  if (tmp4 == null) {
    tmp4 = message;
  }
  const content = tmp4.content;
  let num;
  if (content != null) {
    num = content.length;
  }
  if (num == null) {
    num = 0;
  }
  obj3.contentLength = num;
  obj3.hasBailedAst = obj2.hasBailedAst;
  tmpResult.trackMarkdownParse(obj3);
  return obj2;
};