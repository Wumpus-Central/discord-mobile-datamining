// === Module 15455: ICYMIMessageRowPreview ===

// Module 15455 (ICYMIMessageRowPreview)
import importAllResult from "noop";
import { MessageEmbedTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function ICYMIMessageRowPreview(pointerEvents) {
  let maxHeight;
  let message;
  let messageOptions;
  let messageSizeCacheRef;
  let require;
  ({ lineClamp: require, messageOptions } = pointerEvents);
  let str = pointerEvents.pointerEvents;
  ({ message, messageSizeCacheRef, maxHeight } = pointerEvents);
  if (str === undefined) {
    str = "none";
  }
  let dependencyMap;
  let setting;
  let setting1;
  let setting2;
  let obj = require(4255) /* createCacheKey */;
  obj = { seeMoreLabelColor: messageOptions(712).colors.TEXT_DEFAULT };
  dependencyMap = obj.createNativeStyleProperties(obj)(messageOptions(4191)());
  const RenderEmbeds = require(3928) /* explicitContentFromProto */.RenderEmbeds;
  setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = require(3928) /* explicitContentFromProto */.InlineEmbedMedia;
  setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = require(3928) /* explicitContentFromProto */.InlineAttachmentMedia;
  setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2, messageOptions];
  const memo = setting.useMemo(() => {
    let obj = new messageOptions(seeMoreLabelColor[11])();
    obj = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay: false, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true };
    const merged = Object.assign(messageOptions);
    obj.setOptions(obj);
    return obj;
  }, items);
  obj = {
    pointerEvents: str,
    horizontalOffset: 0,
    modifyRow(arg0) {
      arg0.contextType = outer1_0(seeMoreLabelColor[13]).MessageContextType.SEARCH;
      if (null != closure_0) {
        const obj = { numberOfLines: null, expandable: false, seeMoreLabel: null, seeMoreLabelColor: null };
        obj[0] = tmp3;
        const intl = tmp(tmp2[14]).intl;
        obj[2] = intl.string(tmp(tmp2[14]).t.qCozu3);
        obj[3] = seeMoreLabelColor.seeMoreLabelColor;
        arg0.truncation = obj;
      }
    },
    message,
    rowGenerator: memo,
    messageSizeCacheRef,
    maxHeight
  };
  return setting2(messageOptions(9473), obj);
}
let c3 = importAllResult;
const memoResult = importAllResult.memo((message) => {
  message = message.message;
  const merged = Object.assign(message, Object.create(null));
  let memo;
  const items = [message];
  memo = importAllResult.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const result1 = result.set("embeds", embeds.filter((type) => {
      type = type.type;
      return type === constants.IMAGE || type === constants.GIFV;
    }));
    const attachments = result1.attachments;
    const result2 = result1.set("attachments", attachments.filter((filename) => callback(table[3]).isMediaAttachment(filename)));
    return result2.set("editedTimestamp", null);
  }, items);
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
  let obj = {};
  const merged1 = Object.assign(importAllResult.useMemo(() => {
    const obj = { message: memo, layout: message(memo[4]).ChannelListLayoutTypes.COZY, muted: null, lineClamp: null };
    let flag = merged.muted;
    if (flag == null) {
      flag = false;
    }
    obj[2] = flag;
    obj[3] = merged.lineClamp;
    return obj;
  }, items1));
  obj = {};
  const merged2 = Object.assign(message(memo[5]).DEFAULT_OPTIONS);
  obj.ignoreMentioned = true;
  obj.renderReplies = false;
  obj.renderThreadEmbeds = false;
  obj.renderReactions = false;
  obj.renderEmbeds = true;
  obj.gifAutoPlay = true;
  obj.animateEmoji = true;
  obj.renderPolls = true;
  obj.inlineEmbedMedia = true;
  obj.renderForumPostActions = false;
  obj.renderAttachments = true;
  const merged3 = Object.assign(message.messageOptions);
  obj.messageOptions = obj;
  return <ICYMIMessageRowPreview />;
});
const memoResult1 = importAllResult.memo((message) => {
  message = message.message;
  const merged = Object.assign(message, Object.create(null));
  let memo;
  const items = [message];
  memo = importAllResult.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const found = embeds.filter((type) => {
      type = type.type;
      return !(type === constants.IMAGE || type === constants.GIFV);
    });
    const result1 = result.set("embeds", found.slice(0, 1));
    const attachments = result1.attachments;
    const found1 = attachments.filter((filename) => !callback(table[3]).isMediaAttachment(filename));
    const result2 = result1.set("attachments", found1.slice(0, 1));
    return result2.set("editedTimestamp", null);
  }, items);
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
  let obj = {};
  const merged1 = Object.assign(importAllResult.useMemo(() => {
    const obj = { message: memo, layout: message(memo[4]).ChannelListLayoutTypes.COZY, muted: null, lineClamp: null };
    let flag = merged.muted;
    if (flag == null) {
      flag = false;
    }
    obj[2] = flag;
    obj[3] = merged.lineClamp;
    return obj;
  }, items1));
  obj = {};
  const merged2 = Object.assign(message(memo[5]).DEFAULT_OPTIONS);
  obj.ignoreMentioned = true;
  obj.renderReplies = false;
  obj.renderThreadEmbeds = false;
  obj.renderReactions = false;
  obj.renderEmbeds = true;
  obj.renderAttachments = true;
  const merged3 = Object.assign(message.messageOptions);
  obj.messageOptions = obj;
  return <ICYMIMessageRowPreview />;
});
const memoResult2 = importAllResult.memo((message) => {
  message = message.message;
  const merged = Object.assign(message, Object.create(null));
  const items = [message, , , ];
  ({ lineClamp: arr[1], muted: arr[2], pointerEvents: arr[3] } = merged);
  const memo = importAllResult.useMemo(() => {
    const obj = { message, lineClamp: merged.lineClamp, layout: message(outer1_2[4]).ChannelListLayoutTypes.COZY, muted: null, pointerEvents: null };
    let flag = merged.muted;
    if (flag == null) {
      flag = false;
    }
    obj[3] = flag;
    obj[4] = merged.pointerEvents;
    return obj;
  }, items);
  const tmp3 = merged(5798)(message);
  let obj = {};
  const merged1 = Object.assign(memo);
  obj = {};
  const merged2 = Object.assign(message(7841).DEFAULT_OPTIONS);
  obj.ignoreMentioned = true;
  obj.renderReplies = false;
  obj.renderThreadEmbeds = false;
  obj.renderReactions = false;
  obj.gifAutoPlay = true;
  obj.animateEmoji = true;
  obj.renderPolls = true;
  obj.renderForumPostActions = false;
  obj.renderAttachments = tmp3;
  obj.renderEmbeds = tmp3;
  obj.inlineEmbedMedia = tmp3;
  const merged3 = Object.assign(message.messageOptions);
  obj.messageOptions = obj;
  obj.seeMoreLabel = "...";
  return <ICYMIMessageRowPreview />;
});
let result = require("jsxProd").fileFinishedImporting("modules/icymi/native/ICYMIMessageRowPreview.tsx");

export const MediaOnlyRowPreview = memoResult;
export const NonMediaEmbedsRowPreview = memoResult1;
export const MessageRowPreview = memoResult2;