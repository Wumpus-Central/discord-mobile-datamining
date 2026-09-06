// === Module 16496: ICYMIMessageRowPreview ===

// Module 16496 (ICYMIMessageRowPreview)
import UserSettings from "UserSettings" /* 1935 */;
import createStyles from "createStyles" /* 4560 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7879 */;
import RowGeneratorDefault from "RowGenerator" /* 7932 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8126 */;
import noop from "module_19" /* 19 */;

require = fn;
function ICYMIMessageRowPreview(pointerEvents) {
  ({ lineClamp: require, messageOptions } = pointerEvents);
  let str = pointerEvents.pointerEvents;
  ({ message, messageSizeCacheRef, maxHeight } = pointerEvents);
  if (str === undefined) {
    str = "none";
  }
  let obj = { seeMoreLabelColor: messageOptions(576).colors.TEXT_DEFAULT };
  dependencyMap = obj.createNativeStyleProperties(obj)(messageOptions(4495)());
  const RenderEmbeds = UserSettings.RenderEmbeds;
  const setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  const setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2, messageOptions];
  const memo = setting.useMemo(() => {
    new RowGeneratorDefault();
    const obj = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay: false, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true };
    const merged = Object.assign(messageOptions);
    obj.setOptions(obj);
    return obj;
  }, items);
  obj = {
    pointerEvents: str,
    horizontalOffset: 0,
    modifyRow(arg0) {
      arg0.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
      if (null != closure_1_0) {
        const obj = { numberOfLines: tmp3, expandable: false, seeMoreLabel: null, seeMoreLabelColor: null };
        const intl = tmp(1114).intl;
        obj.seeMoreLabel = intl.string(tmp(1114).t.qCozu3);
        obj.seeMoreLabelColor = seeMoreLabelColor.seeMoreLabelColor;
        arg0.truncation = obj;
      }
    },
    message,
    rowGenerator: memo,
    messageSizeCacheRef,
    maxHeight
  };
  return setting2(messageOptions(8652), obj);
}
const MessageEmbedTypes = fn(1074).MessageEmbedTypes;
const jsx = fn(21).jsx;
const memoResult = noop.memo((message) => {
  message = message.message;
  const merged = Object.assign(message, Object.assign({ message: 0, messageOptions: 0 }));
  const items = [message];
  const memo = noop.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const result1 = result.set("embeds", embeds.filter((type) => {
      type = type.type;
      return type === constants.IMAGE || type === constants.GIFV;
    }));
    const attachments = result1.attachments;
    const result2 = result1.set("attachments", attachments.filter((item) => message(memo[3]).isMediaAttachment(item)));
    return result2.set("editedTimestamp", null);
  }, items);
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
  let obj = {};
  const merged1 = Object.assign(noop.useMemo(() => {
    const obj = { message: memo, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: null, lineClamp: null };
    let flag = merged.muted;
    if (flag == null) {
      flag = false;
    }
    obj.muted = flag;
    obj.lineClamp = merged.lineClamp;
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
const memoResult1 = noop.memo((message) => {
  message = message.message;
  const merged = Object.assign(message, Object.assign({ message: 0, messageOptions: 0 }));
  const items = [message];
  const memo = noop.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const found = embeds.filter((type) => {
      type = type.type;
      return !(type === constants.IMAGE || type === constants.GIFV);
    });
    const result1 = result.set("embeds", found.slice(0, 1));
    const attachments = result1.attachments;
    const found1 = attachments.filter((item) => !message(memo[3]).isMediaAttachment(item));
    const result2 = result1.set("attachments", found1.slice(0, 1));
    return result2.set("editedTimestamp", null);
  }, items);
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
  let obj = {};
  const merged1 = Object.assign(noop.useMemo(() => {
    const obj = { message: memo, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: null, lineClamp: null };
    let flag = merged.muted;
    if (flag == null) {
      flag = false;
    }
    obj.muted = flag;
    obj.lineClamp = merged.lineClamp;
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIMessageRowPreview.tsx");

export const MediaOnlyRowPreview = memoResult;
export const NonMediaEmbedsRowPreview = memoResult1;
export const MessageRowPreview = noop.memo((message) => {
  message = message.message;
  const merged = Object.assign(message, Object.assign({ message: 0, messageOptions: 0 }));
  const items = [message, , , ];
  ({ lineClamp: arr[1], muted: arr[2], pointerEvents: arr[3] } = merged);
  const memo = noop.useMemo(() => {
    const obj = { message, lineClamp: merged.lineClamp, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: null, pointerEvents: null };
    let flag = merged.muted;
    if (flag == null) {
      flag = false;
    }
    obj.muted = flag;
    obj.pointerEvents = merged.pointerEvents;
    return obj;
  }, items);
  const tmp3 = merged(7302)(message);
  let obj = {};
  const merged1 = Object.assign(memo);
  obj = {};
  const merged2 = Object.assign(message(7934).DEFAULT_OPTIONS);
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