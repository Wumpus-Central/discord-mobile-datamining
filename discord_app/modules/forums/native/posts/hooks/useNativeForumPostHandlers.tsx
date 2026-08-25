// discord_app/modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import closure_5 from "../../../../action_sheet/native/ActionSheetStore.tsx";
import closure_6 from "../../../../../stores/ChannelStore.tsx";
import closure_7 from "../../../../../stores/RelationshipStore.tsx";
import closure_8 from "../../../../../stores/UserStore.tsx";
import closure_9 from "../../../ForumPostMessagesStore.tsx";
import closure_10 from "../../../ForumPostRecentMessageStore.tsx";
import ME from "../../../../../Constants.tsx";
import { OpenThreadAnalyticsLocations as closure_15 } from "../../../../threads/ThreadConstants.tsx";

const require = arg1;
({ AnalyticsObjectTypes: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1, EMPTY_STRING_SNOWFLAKE_ID: closure_14 } = ME);
let result = require("set").fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx");

export default function useNativeForumPostHandlers(threadId) {
  threadId = threadId.threadId;
  let NORMAL = threadId.reactionType;
  if (NORMAL === undefined) {
    NORMAL = threadId(7366).ReactionTypes.NORMAL;
  }
  let callback1;
  const items = [threadId];
  const items1 = [threadId];
  const callback = React.useCallback((containerRef) => {
    ({ messageId: threadId, mediaItems, initialIndex } = containerRef);
    if (initialIndex === undefined) {
      initialIndex = 0;
    }
    let channel;
    channel = closure_1_6.getChannel(threadId);
    NORMAL(closure_1_3[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    let obj = threadId(closure_1_3[11]);
    const channelName = obj.computeChannelName(channel, closure_1_8, closure_1_7, false);
    const channelIcon = threadId(closure_1_3[12]).getChannelIcon(channel);
    const mapped = mediaItems.map((src) => {
      src = src.src;
      let obj = channel(closure_1_3[13]);
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
          let isAttachmentPathUrlResult = src.type === closure_1_0(closure_1_3[14]).ForumPostMediaTypes.ATTACHMENT;
          if (isAttachmentPathUrlResult) {
            isAttachmentPathUrlResult = closure_1_2(closure_1_3[15]).isAttachmentPathUrl(str);
            const obj5 = closure_1_2(closure_1_3[15]);
          }
          if (!isAttachmentPathUrlResult) {
            let result = src.type === tmp6(closure_1_3[14]).ForumPostMediaTypes.EMBED;
            if (result) {
              result = closure_1_2(closure_1_3[15]).isExternalProxiedAttachmentUrl(str);
              const obj6 = closure_1_2(closure_1_3[15]);
            }
            isAttachmentPathUrlResult = result;
          }
          tmp = isAttachmentPathUrlResult;
          tmp6 = closure_1_0;
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
      let tmp18 = closure_0;
      if (closure_0 == null) {
        tmp18 = closure_1_14;
      }
      obj[2] = tmp18;
      obj[3] = channel.id;
      ({ mediaIndex: obj8[4], width: obj8[5], height: obj8[6], type: obj8[7], attachmentId: obj8[8] } = src);
      return obj;
    });
    const obj2 = threadId(closure_1_3[12]);
    obj = { initialIndex, initialSources: mapped, channelId: channel.id, contextName: channelName, contextIcon: channelIcon, originViewOrOriginLayout: containerRef.containerRef.current };
    threadId(closure_1_3[16]).openMediaModal(obj);
  }, items);
  callback1 = React.useCallback(() => {
    let obj = threadId(closure_1_3[17]);
    if (obj.isAndroid()) {
      let tmpResult = tmp(tmp2[18]);
      const result = tmpResult.triggerHapticFeedback(NORMAL(tmp2[19]).IMPACT_LIGHT);
    }
    const channel = closure_1_6.getChannel(threadId);
    NORMAL(closure_1_3[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = closure_1_6.getChannel(channel.parent_id);
    NORMAL(closure_1_3[10])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    tmpResult = tmp(tmp2[20]);
    obj = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: obj };
    obj = { page: closure_1_12.GUILD_CHANNEL, section: closure_1_13.FORUM_CHANNEL_POST };
    const result1 = tmpResult.trackForumPostClicked(obj);
    threadId(closure_1_3[21]).transitionToThread(channel, { source: closure_1_15.FORUM, navigationReplace: false });
  }, items1);
  const items2 = [callback1, threadId];
  const items3 = [threadId];
  const callback2 = React.useCallback(() => {
    const channel = closure_1_6.getChannel(threadId);
    NORMAL(closure_1_3[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = closure_1_6.getChannel(channel.parent_id);
    NORMAL(closure_1_3[10])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    const messageState = closure_1_10.getMessageState(threadId);
    const message = messageState.message;
    if (messageState.loaded) {
      if (null != message) {
        let obj = threadId(tmp3[20]);
        obj = { guildId: null, channelId: null, postId: null, location: null };
        ({ guild_id: obj2[0], id: obj2[1] } = channel1);
        obj[2] = threadId;
        obj = { page: null, section: null };
        obj[0] = closure_1_12.GUILD_CHANNEL;
        obj[1] = closure_1_13.FORUM_CHANNEL_POST;
        obj[3] = obj;
        const result = obj.trackForumPostClicked(obj);
        obj1 = { source: null, navigationReplace: false };
        obj1[0] = closure_1_15.FORUM;
        const result1 = threadId(tmp3[21]).transitionToThreadMessage(channel, message.id, obj1);
        const obj4 = threadId(tmp3[21]);
      }
    }
    callback1();
  }, items2);
  const items4 = [threadId];
  const callback3 = React.useCallback(() => {
    const channel = closure_1_6.getChannel(threadId);
    NORMAL(closure_1_3[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = closure_1_6.getChannel(channel.parent_id);
    NORMAL(closure_1_3[10])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    NORMAL(closure_1_3[10])(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
    let tmp8 = null != closure_1_5.getContent();
    if (!tmp8) {
      tmp8 = null == closure_1_8.getUser(channel.ownerId);
    }
    if (!tmp8) {
      threadId(tmp3[22]).dismissKeyboard();
      NORMAL(tmp3[23])(channel, channel1);
      const obj2 = threadId(tmp3[22]);
    }
  }, items3);
  const items5 = [threadId];
  const callback4 = React.useCallback((arg0) => {
    ({ reaction, reactionLocation } = arg0);
    ({ disableReactionCreates, disableReactionUpdates, locationAnalyticsObject } = arg0);
    const channel = closure_1_6.getChannel(threadId);
    NORMAL(closure_1_3[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const firstMessage = closure_1_9.getMessage(threadId).firstMessage;
    NORMAL(closure_1_3[10])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    if (disableReactionCreates) {
      if (disableReactionUpdates) {
        let obj = { messageId: null, channelId: null, reactions: null, location: null };
        obj[0] = firstMessage.id;
        obj[1] = threadId;
        obj[2] = firstMessage.reactions;
        obj = { object: null, objectType: null };
        obj[0] = locationAnalyticsObject;
        obj[1] = closure_1_11.CANT_ADD_OR_REMOVE;
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
    const firstMessage = closure_1_9.getMessage(threadId).firstMessage;
    NORMAL(closure_1_3[10])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    let obj = threadId(closure_1_3[24]);
    obj = { messageId: firstMessage.id, channelId: threadId, emoji: emoji.emoji, reactions: firstMessage.reactions };
    obj.handleViewReactions(obj);
  }, items5);
  const items7 = [threadId, NORMAL];
  const callback6 = React.useCallback(() => {
    const firstMessage = closure_1_9.getMessage(threadId).firstMessage;
    NORMAL(closure_1_3[10])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    let obj = threadId(closure_1_3[24]);
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
      const channel = closure_1_6.getChannel(threadId);
      NORMAL(closure_1_3[10])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
      const firstMessage = closure_1_9.getMessage(threadId).firstMessage;
      NORMAL(closure_1_3[10])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
      const result = threadId(closure_1_3[25]).handleAddOrRemoveReaction(firstMessage.id, channel, null, NORMAL === threadId(closure_1_3[9]).ReactionTypes.BURST);
    }, items7),
    onTapMostRecentMessage: callback2
  };
};