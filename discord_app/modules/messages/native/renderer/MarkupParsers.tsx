// discord_app/modules/messages/native/renderer/MarkupParsers.tsx
import Constants from "../../../../Constants.tsx";
import DurationsDefault from "../../../../utils/Durations.tsx";
import SentryUtilsDefault from "../../../../utils/SentryUtils.native.tsx";
import MarkupUtilsDefault from "../../../markup/MarkupUtils.tsx";
import renderMessageMarkup from "../../renderMessageMarkup.tsx";
import NativeMarkdownExperiment2 from "../../../markup_v2/NativeMarkdownExperiment.tsx";
import ChangeLogStandardTemplate from "../../../../components_native/ChangeLogStandardTemplate.tsx";
import trackMarkdownParse from "trackMarkdownParse.tsx";
import parseNativeMarkupDefault from "../../../markup_v2/native/parseNativeMarkup.tsx";
import priv from "../../../../../_runtime/01437_priv.js";
import size from "../../../../../_runtime/metro/00002__.js";

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

export const parseEmbedTitleMarkup = function parseEmbedTitleMarkup(rawName, channelId) {
  const combined = "" + rawName + "-" + channelId;
  value = closure_4.get(combined);
  if (null == value) {
    const obj3 = { channelId };
    const parseEmbedTitleToASTResult = MarkupUtilsDefault.parseEmbedTitleToAST(rawName, true, obj3);
    const result = closure_4.set(combined, parseEmbedTitleToASTResult);
    value = parseEmbedTitleToASTResult;
  }
  return value;
};
export const parseEmbedTitleMarkupWithoutLinks = function parseEmbedTitleMarkupWithoutLinks(arg0, channelId) {
  const combined = "" + arg0 + "-" + channelId + "-nolinks";
  value = closure_5.get(combined);
  if (null == value) {
    const obj3 = { channelId };
    const result = MarkupUtilsDefault.parseEmbedTitleWithoutLinksToAST(arg0, true, obj3);
    const result1 = closure_5.set(combined, result);
    value = result;
  }
  return value;
};
export const parseEmbedDescriptionMarkup = function parseEmbedDescriptionMarkup(arg0) {
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
  const obj = {
    channelId,
    allowGameMentions: true,
    allowLinks: true,
    allowEmojiLinks: true,
    allowHeading: null,
    allowList: null,
    previewLinkTarget: null,
  };
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
      const obj6 = MarkupUtilsDefault;
      const obj2 = {
        hideSimpleEmbedContent: forceHideSimpleEmbedContent,
        formatInline: flag,
        allowHeading: null,
        allowList: null,
        allowLinks: null,
        previewLinkTarget: null,
      };
      let tmp15 = flag2;
      const tmpResult = ChangeLogStandardTemplate;
      if (!flag2) {
        tmp15 = flag3;
      }
      obj2.allowHeading = tmp15;
      if (!flag2) {
        flag2 = flag3;
      }
      let obj3 = {
        content: null,
        isInlineReplyPreview: false,
        hasSpoilerEmbeds: false,
        hasBailedAst: false,
        nativeMarkdownEnabled: null,
      };
      obj2.allowList = flag2;
      obj2.allowLinks = flag4;
      obj2.previewLinkTarget = flag4;
      obj3.content = obj6.astParserFor(ChangeLogStandardTemplate.changelogRules(message.changelogId, true))(
        message.content,
        false,
        obj2,
      );
      obj3.nativeMarkdownEnabled = enabled;
      const result1 = closure_7.set(message, obj3);
      return obj3;
    }
  }
  let tmp4 = message2;
  let obj4 = {
    contentMessage: message2,
    hideSimpleEmbedContent: forceHideSimpleEmbedContent,
    formatInline: flag,
    allowGameMentions: true,
    allowHeading: null,
    allowList: null,
    allowLinks: null,
    previewLinkTarget: null,
  };
  let tmp6 = flag2;
  if (!flag2) {
    tmp6 = flag3;
  }
  obj4.allowHeading = tmp6;
  let tmp7 = flag2;
  if (!flag2) {
    tmp7 = flag3;
  }
  obj4.allowList = tmp7;
  obj4.allowLinks = flag4;
  obj4.previewLinkTarget = flag4;
  const nowResult = performance.now();
  ({ result, path } = (function parseMessageContentToAST(message, arg1, enabled) {
    if (!enabled) {
      const obj4 = { result: renderMessageMarkup.renderMessageMarkupToAST(message, arg1), path: "legacy" };
      return obj4;
    } else {
      try {
        const obj = {
          result: renderMessageMarkup.renderMessageMarkupToASTWithParser(parseNativeMarkupDefault, message, arg1),
          path: "native",
        };
        return obj;
      } catch (tmp4) {
        SentryUtilsDefault.captureException(tmp4);
      }
    }
  })(message, obj4, enabled));
  const obj5 = {};
  const diff = performance.now() - nowResult;
  const merged = Object.assign(result);
  obj5.isInlineReplyPreview = flag;
  obj5.nativeMarkdownEnabled = enabled;
  result2 = closure_7.set(message, obj5);
  const tmp8 = (function parseMessageContentToAST(message, arg1, enabled) {
    if (!enabled) {
      const obj4 = { result: renderMessageMarkup.renderMessageMarkupToAST(message, arg1), path: "legacy" };
      return obj4;
    } else {
      try {
        const obj = {
          result: renderMessageMarkup.renderMessageMarkupToASTWithParser(parseNativeMarkupDefault, message, arg1),
          path: "native",
        };
        return obj;
      } catch (tmp4) {
        SentryUtilsDefault.captureException(tmp4);
      }
    }
  })(message, obj4, enabled);
  const obj7 = { durationMs: diff, path, contentLength: null, hasBailedAst: null };
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
  obj7.contentLength = num;
  obj7.hasBailedAst = obj5.hasBailedAst;
  trackMarkdownParse.trackMarkdownParse(obj7);
  return obj5;
};
