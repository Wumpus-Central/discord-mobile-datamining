// === Module 10516: useNativeForumPostHandlers ===

// Module 10516 (useNativeForumPostHandlers)
import IMPACT_LIGHT from "IMPACT_LIGHT";
import setContent from "setContent";
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleLoadThreadsSuccess from "handleLoadThreadsSuccess";
import closure_9 from "handleLoadThreadsSuccess";
import ME from "ME";
import { OpenThreadAnalyticsLocations as closure_14 } from "AbortCodes";

let c10;
let closure_12;
let map1;
let unpackModuleId;
const require = arg1;
({ AnalyticsObjectTypes: c10, AnalyticsPages: unpackModuleId, AnalyticsSections: closure_12, EMPTY_STRING_SNOWFLAKE_ID: map1 } = ME);
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx");

export default function useNativeForumPostHandlers(threadId) {
  threadId = threadId.threadId;
  let NORMAL = threadId.reactionType;
  if (NORMAL === undefined) {
    NORMAL = threadId(callback1[9]).ReactionTypes.NORMAL;
  }
  callback1 = undefined;
  const items = [threadId];
  const items1 = [threadId];
  const callback = React.useCallback((containerRef) => {
    let initialIndex;
    let mediaItems;
    let threadId;
    ({ messageId: threadId, mediaItems, initialIndex } = containerRef);
    if (initialIndex === undefined) {
      initialIndex = 0;
    }
    let channel;
    channel = outer1_5.getChannel(threadId);
    NORMAL(callback1[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    let obj = threadId(callback1[11]);
    const channelName = obj.computeChannelName(channel, outer1_7, outer1_6, false);
    const channelIcon = threadId(callback1[12]).getChannelIcon(channel);
    const mapped = mediaItems.map((src) => {
      src = src.src;
      let obj = channel(outer1_2[13]);
      let str = obj.toURLSafe(src);
      let tmp = null != str;
      if (src.srcIsAnimated) {
        if (tmp) {
          const formatted = str.pathname.toLowerCase();
          let endsWithResult = formatted.endsWith(".webp");
          if (!endsWithResult) {
            const formatted1 = str.pathname.toLowerCase();
            endsWithResult = formatted1.endsWith(".avif");
            const str8 = str.pathname;
          }
          tmp = endsWithResult;
          const str6 = str.pathname;
        }
        if (tmp) {
          let isAttachmentUrlResult = src.type === outer1_0(outer1_2[14]).ForumPostMediaTypes.ATTACHMENT;
          if (isAttachmentUrlResult) {
            let tmp6Result = tmp6(outer1_2[15]);
            isAttachmentUrlResult = tmp6Result.isAttachmentUrl(str);
          }
          if (!isAttachmentUrlResult) {
            let result = src.type === tmp6(outer1_2[14]).ForumPostMediaTypes.EMBED;
            if (result) {
              tmp6Result = tmp6(outer1_2[15]);
              result = tmp6Result.isExternalProxiedAttachmentUrl(str);
            }
            isAttachmentUrlResult = result;
          }
          tmp = isAttachmentUrlResult;
        }
        str = src;
        if (tmp) {
          const searchParams2 = str.searchParams;
          const result1 = searchParams2.set("animated", "true");
          const formatted2 = str.pathname.toLowerCase();
          if (formatted2.endsWith(".avif")) {
            const searchParams3 = str.searchParams;
            const result2 = searchParams3.set("format", "webp");
          }
          str = str.toString();
          const str12 = str.pathname;
        }
      } else {
        let endsWithResult1 = tmp;
        if (tmp) {
          const formatted3 = str.pathname.toLowerCase();
          endsWithResult1 = formatted3.endsWith(".avif");
          const str2 = str.pathname;
        }
        str = src;
        if (endsWithResult1) {
          const searchParams = str.searchParams;
          const result3 = searchParams.set("format", "webp");
          str = str.toString();
        }
      }
      obj = { uri: str, guildId: channel.guild_id, messageId: null, channelId: null, mediaIndex: null, width: null, height: null, accessoryType: null, attachmentId: null };
      let tmp16 = closure_0;
      if (closure_0 == null) {
        tmp16 = outer1_13;
      }
      obj[2] = tmp16;
      obj[3] = channel.id;
      ({ mediaIndex: obj8[4], width: obj8[5], height: obj8[6], type: obj8[7], attachmentId: obj8[8] } = src);
      return obj;
    });
    const obj2 = threadId(callback1[12]);
    obj = { initialIndex, initialSources: mapped, channelId: channel.id, contextName: channelName, contextIcon: channelIcon, originViewOrOriginLayout: containerRef.containerRef.current };
    threadId(callback1[16]).openMediaModal(obj);
  }, items);
  callback1 = React.useCallback(() => {
    let obj = threadId(callback1[17]);
    if (obj.isAndroid()) {
      let tmpResult = tmp(tmp2[18]);
      const result = tmpResult.triggerHapticFeedback(NORMAL(tmp2[19]).IMPACT_LIGHT);
    }
    const channel = outer1_5.getChannel(threadId);
    NORMAL(callback1[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = outer1_5.getChannel(channel.parent_id);
    NORMAL(callback1[10])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    tmpResult = tmp(tmp2[20]);
    obj = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: obj };
    obj = { page: outer1_11.GUILD_CHANNEL, section: outer1_12.FORUM_CHANNEL_POST };
    const result1 = tmpResult.trackForumPostClicked(obj);
    threadId(callback1[21]).transitionToThread(channel, { source: outer1_14.FORUM, navigationReplace: false });
  }, items1);
  const items2 = [callback1, threadId];
  const items3 = [threadId];
  const callback2 = React.useCallback(() => {
    const channel = outer1_5.getChannel(threadId);
    NORMAL(callback1[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = outer1_5.getChannel(channel.parent_id);
    NORMAL(callback1[10])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    const messageState = outer1_9.getMessageState(threadId);
    const message = messageState.message;
    if (messageState.loaded) {
      if (null != message) {
        let obj = threadId(tmp3[20]);
        obj = { guildId: null, channelId: null, postId: null, location: null };
        ({ guild_id: obj2[0], id: obj2[1] } = channel1);
        obj[2] = threadId;
        obj = { page: null, section: null };
        obj[0] = outer1_11.GUILD_CHANNEL;
        obj[1] = outer1_12.FORUM_CHANNEL_POST;
        obj[3] = obj;
        const result = obj.trackForumPostClicked(obj);
        const obj1 = { source: null, navigationReplace: false };
        obj1[0] = outer1_14.FORUM;
        const result1 = threadId(tmp3[21]).transitionToThreadMessage(channel, message.id, obj1);
        const obj4 = threadId(tmp3[21]);
      }
    }
    callback1();
  }, items2);
  const items4 = [threadId];
  const callback3 = React.useCallback(() => {
    const channel = outer1_5.getChannel(threadId);
    NORMAL(callback1[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = outer1_5.getChannel(channel.parent_id);
    NORMAL(callback1[10])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    NORMAL(callback1[10])(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
    let tmp8 = null != outer1_4.getContent();
    if (!tmp8) {
      tmp8 = null == outer1_7.getUser(channel.ownerId);
    }
    if (!tmp8) {
      threadId(tmp3[22]).dismissKeyboard();
      NORMAL(tmp3[23])(channel, channel1);
      const obj2 = threadId(tmp3[22]);
    }
  }, items3);
  const items5 = [threadId];
  const callback4 = React.useCallback((arg0) => {
    let disableReactionCreates;
    let disableReactionUpdates;
    let locationAnalyticsObject;
    let reaction;
    let reactionLocation;
    ({ reaction, reactionLocation } = arg0);
    ({ disableReactionCreates, disableReactionUpdates, locationAnalyticsObject } = arg0);
    const channel = outer1_5.getChannel(threadId);
    NORMAL(callback1[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const firstMessage = outer1_8.getMessage(threadId).firstMessage;
    NORMAL(callback1[10])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    if (disableReactionCreates) {
      if (disableReactionUpdates) {
        let obj = { messageId: null, channelId: null, reactions: null, location: null };
        obj[0] = firstMessage.id;
        obj[1] = threadId;
        obj[2] = firstMessage.reactions;
        obj = { object: null, objectType: null };
        obj[0] = locationAnalyticsObject;
        obj[1] = outer1_10.CANT_ADD_OR_REMOVE;
        obj[3] = obj;
        threadId(tmp3[24]).handleViewReactions(obj);
        const obj2 = threadId(tmp3[24]);
      }
    }
    let tmp6 = null != reaction;
    if (tmp6) {
      tmp6 = reaction.burst_count > 0;
    }
    obj = threadId(tmp3[25]);
    const result = obj.handleAddOrRemoveReaction(firstMessage.id, channel, reaction, tmp6, reactionLocation);
  }, items4);
  const items6 = [threadId];
  const callback5 = React.useCallback((emoji) => {
    const firstMessage = outer1_8.getMessage(threadId).firstMessage;
    NORMAL(callback1[10])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    let obj = threadId(callback1[24]);
    obj = { messageId: firstMessage.id, channelId: threadId, emoji: emoji.emoji, reactions: firstMessage.reactions };
    obj.handleViewReactions(obj);
  }, items5);
  const items7 = [threadId, NORMAL];
  const callback6 = React.useCallback(() => {
    const firstMessage = outer1_8.getMessage(threadId).firstMessage;
    NORMAL(callback1[10])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    let obj = threadId(callback1[24]);
    obj = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
    obj.handleViewReactions(obj);
  }, items6);
  return {
    onTapMedia: callback,
    onTapPost: callback1,
    onLongTapPost: callback3,
    onTapReaction: callback4,
    onLongTapReaction: callback5,
    onTapReactionCount: callback6,
    onTapAddReaction: React.useCallback(() => {
      const channel = outer1_5.getChannel(threadId);
      NORMAL(callback1[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
      const firstMessage = outer1_8.getMessage(threadId).firstMessage;
      NORMAL(callback1[10])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
      const result = threadId(callback1[25]).handleAddOrRemoveReaction(firstMessage.id, channel, null, NORMAL === threadId(callback1[9]).ReactionTypes.BURST);
    }, items7),
    onTapMostRecentMessage: callback2
  };
};