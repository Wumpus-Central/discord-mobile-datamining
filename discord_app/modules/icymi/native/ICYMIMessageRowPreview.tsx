// discord_app/modules/icymi/native/ICYMIMessageRowPreview.tsx
import explicitContentFromProto from "../../user_settings/UserSettings.tsx";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { MessageEmbedTypes } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
function ICYMIMessageRowPreview(pointerEvents) {
  ({ lineClamp: require, messageOptions } = pointerEvents);
  let str = pointerEvents.pointerEvents;
  ({ message, messageSizeCacheRef, maxHeight } = pointerEvents);
  if (str === undefined) {
    str = "none";
  }
  let obj = { seeMoreLabelColor: messageOptions(712).colors.TEXT_DEFAULT };
  dependencyMap = obj.createNativeStyleProperties(obj)(messageOptions(4310)());
  const RenderEmbeds = explicitContentFromProto.RenderEmbeds;
  const setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = explicitContentFromProto.InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = explicitContentFromProto.InlineAttachmentMedia;
  const setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2, messageOptions];
  const memo = setting.useMemo(() => {
    new messageOptions(seeMoreLabelColor[11])();
    const obj = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay: false, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true };
    const merged = Object.assign(messageOptions);
    obj.setOptions(obj);
    return obj;
  }, items);
  obj = {
    pointerEvents: str,
    horizontalOffset: 0,
    modifyRow(arg0) {
      arg0.contextType = require(seeMoreLabelColor[13]).MessageContextType.SEARCH;
      if (null != closure_0) {
        const obj = { numberOfLines: null, expandable: false, seeMoreLabel: null, seeMoreLabelColor: null };
        obj[0] = tmp3;
        const intl = require(seeMoreLabelColor[14]).intl;
        obj[2] = intl.string(require(seeMoreLabelColor[14]).t.qCozu3);
        obj[3] = seeMoreLabelColor.seeMoreLabelColor;
        arg0.truncation = obj;
      }
    },
    message,
    rowGenerator: memo,
    messageSizeCacheRef,
    maxHeight
  };
  return setting2(messageOptions(10066), obj);
}
let c3 = importAllResult;
const memoResult = importAllResult.memo((message) => {
  message = message.message;
  const merged = Object.assign(message, Object.create(null));
  const items = [message];
  const memo = importAllResult.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const result1 = result.set("embeds", embeds.filter((item, index) => {
      const type = item.type;
      return type === constants.IMAGE || type === constants.GIFV;
    }));
    const attachments = result1.attachments;
    const result2 = result1.set("attachments", attachments.filter((item, index) => callback(table[3]).isMediaAttachment(item)));
    return result2.set("editedTimestamp", null);
  }, items);
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
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
  let obj = {};
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
  const items = [message];
  const memo = importAllResult.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const found = embeds.filter((item, index) => {
      const type = item.type;
      return !(type === constants.IMAGE || type === constants.GIFV);
    });
    const result1 = result.set("embeds", found.slice(0, 1));
    const attachments = result1.attachments;
    const found1 = attachments.filter((item, index) => !callback(table[3]).isMediaAttachment(item));
    const result2 = result1.set("attachments", found1.slice(0, 1));
    return result2.set("editedTimestamp", null);
  }, items);
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
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
  let obj = {};
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
    const obj = { message, lineClamp: merged.lineClamp, layout: message(dependencyMap[4]).ChannelListLayoutTypes.COZY, muted: null, pointerEvents: null };
    let flag = merged.muted;
    if (flag == null) {
      flag = false;
    }
    obj[3] = flag;
    obj[4] = merged.pointerEvents;
    return obj;
  }, items);
  const tmp3 = merged(5026)(message);
  const merged1 = Object.assign(memo);
  let obj = {};
  const merged2 = Object.assign(message(8159).DEFAULT_OPTIONS);
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
let result = require("obj132").fileFinishedImporting("modules/icymi/native/ICYMIMessageRowPreview.tsx");

export const MediaOnlyRowPreview = memoResult;
export const NonMediaEmbedsRowPreview = memoResult1;
export const MessageRowPreview = memoResult2;