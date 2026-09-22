// discord_app/modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import ChatInputUtils from "../../../../../utils/native/ChatInputUtils.tsx";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../../haptics/HapticFeedbackTypes.tsx";
import transitionToChannel from "../../../../routing/transitionToChannel.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import utils_ChannelUtils from "../../../../../utils/native/ChannelUtils.tsx";
import MessageReactionsTypes from "../../../../messages/MessageReactionsTypes.tsx";
import tracking_Tracking from "../../../tracking/Tracking.tsx";
import openMediaModal from "../../../../media_viewer/native/components/openMediaModal.tsx";
import showLongPressForumPostActionSheetDefault from "../../../../action_sheet/native/components/showLongPressForumPostActionSheet.tsx";
import messages_MessagesUtils from "../../../../messages/native/MessagesUtils.tsx";
import reactions_ReactionUtils from "../../../../reactions/native/ReactionUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../../../action_sheet/native/ActionSheetStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import ForumPostMessagesStore from "../../../ForumPostMessagesStore.tsx";
import ForumPostRecentMessageStore from "../../../ForumPostRecentMessageStore.tsx";

require = fn;
const Constants = fn(1074);
({
  AnalyticsObjectTypes: closure_11,
  AnalyticsPages: closure_12,
  AnalyticsSections: map1,
  EMPTY_STRING_SNOWFLAKE_ID: closure_14,
} = Constants);
let closure_15 = fn(1114).OpenThreadAnalyticsLocations;
let size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx");

export default function useNativeForumPostHandlers(threadId) {
  threadId = threadId.threadId;
  let NORMAL = threadId.reactionType;
  if (NORMAL === undefined) {
    NORMAL = threadId(8008).ReactionTypes.NORMAL;
  }
  const items = [threadId];
  const items1 = [threadId];
  const callback = noop.useCallback((containerRef) => {
    ({ messageId: threadId, mediaItems, initialIndex } = containerRef);
    if (initialIndex === undefined) {
      initialIndex = 0;
    }
    const channel = ChannelStore.getChannel(threadId);
    _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore, false);
    const channelIcon = utils_ChannelUtils.getChannelIcon(channel);
    const mapped = mediaItems.map((src) => {
      src = src.src;
      const str = NORMAL(1366).toURLSafe(src);
      let tmp = null != str;
      if (src.srcIsAnimated) {
        if (tmp) {
          const formatted = str.pathname.toLowerCase();
          let endsWithResult = formatted.endsWith(".webp");
          if (!endsWithResult) {
            const formatted1 = str.pathname.toLowerCase();
            endsWithResult = formatted1.endsWith(".avif");
          }
          tmp = endsWithResult;
        }
        if (tmp) {
          let isAttachmentPathUrlResult = src.type === threadId(8145).ForumPostMediaTypes.ATTACHMENT;
          if (isAttachmentPathUrlResult) {
            isAttachmentPathUrlResult = callback1(10206).isAttachmentPathUrl(str);
            const obj5 = callback1(10206);
          }
          if (!isAttachmentPathUrlResult) {
            let result = src.type === threadId(8145).ForumPostMediaTypes.EMBED;
            if (result) {
              result = callback1(10206).isExternalProxiedAttachmentUrl(str);
              const obj6 = callback1(10206);
            }
            isAttachmentPathUrlResult = result;
          }
          tmp = isAttachmentPathUrlResult;
        }
        let str1 = src;
        if (tmp) {
          const searchParams2 = str.searchParams;
          const result1 = searchParams2.set("animated", "true");
          const formatted2 = str.pathname.toLowerCase();
          if (formatted2.endsWith(".avif")) {
            const searchParams3 = str.searchParams;
            const result2 = searchParams3.set("format", "webp");
          }
          str1 = str.toString();
        }
      } else {
        let endsWithResult1 = tmp;
        if (tmp) {
          const formatted3 = str.pathname.toLowerCase();
          endsWithResult1 = formatted3.endsWith(".avif");
        }
        str1 = src;
        if (endsWithResult1) {
          const searchParams = str.searchParams;
          const result3 = searchParams.set("format", "webp");
          str1 = str.toString();
        }
      }
      const size = {
        uri: str1,
        guildId: channel.guild_id,
        messageId: null,
        channelId: null,
        mediaIndex: null,
        width: null,
        height: null,
        accessoryType: null,
        attachmentId: null,
      };
      let tmp18 = closure_1_0;
      if (closure_1_0 == null) {
        tmp18 = closure_2_14;
      }
      size.messageId = tmp18;
      size.channelId = channel.id;
      ({
        mediaIndex: obj8.mediaIndex,
        width: obj8.width,
        height: obj8.height,
        type: obj8.accessoryType,
        attachmentId: obj8.attachmentId,
      } = src);
      return size;
    });
    openMediaModal.openMediaModal({
      initialIndex,
      initialSources: mapped,
      channelId: channel.id,
      contextName: channelName,
      contextIcon: channelIcon,
      originViewOrOriginLayout: containerRef.containerRef.current,
    });
  }, items);
  const callback1 = noop.useCallback(() => {
    if (obj.isAndroid()) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const tmpResult = HapticUtils;
    }
    const channel = ChannelStore.getChannel(threadId);
    _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = ChannelStore.getChannel(channel.parent_id);
    _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    obj = PlatformUtils;
    const obj2 = {
      guildId: channel1.guild_id,
      channelId: channel1.id,
      postId: threadId,
      location: { page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_POST },
    };
    const result1 = tracking_Tracking.trackForumPostClicked(obj2);
    const obj3 = { page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_POST };
    const tmpResult3 = tracking_Tracking;
    transitionToChannel.transitionToThread(channel, { source: constants.FORUM, navigationReplace: false });
    const obj4 = { source: constants.FORUM, navigationReplace: false };
    const tmpResult4 = transitionToChannel;
  }, items1);
  const items2 = [callback1, threadId];
  const items3 = [threadId];
  const callback2 = noop.useCallback(() => {
    const channel = ChannelStore.getChannel(threadId);
    _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = ChannelStore.getChannel(channel.parent_id);
    _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    const messageState = ForumPostRecentMessageStore.getMessageState(threadId);
    const message = messageState.message;
    if (messageState.loaded) {
      if (null != message) {
        const obj3 = { guildId: null, channelId: null, postId: null, location: null };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = channel1);
        obj3.postId = threadId;
        const obj5 = { page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_POST };
        obj3.location = obj5;
        const result = tracking_Tracking.trackForumPostClicked(obj3);
        const obj8 = { source: constants.FORUM, navigationReplace: false };
        const result1 = transitionToChannel.transitionToThreadMessage(channel, message.id, obj8);
      }
    }
    callback1();
  }, items2);
  const items4 = [threadId];
  const callback3 = noop.useCallback(() => {
    const channel = ChannelStore.getChannel(threadId);
    _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const channel1 = ChannelStore.getChannel(channel.parent_id);
    _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
    _modDef38(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
    let tmp8 = null != ActionSheetStore.getContent();
    if (!tmp8) {
      tmp8 = null == UserStore.getUser(channel.ownerId);
    }
    if (!tmp8) {
      ChatInputUtils.dismissKeyboard();
      showLongPressForumPostActionSheetDefault(channel, channel1);
    }
  }, items3);
  const items5 = [threadId];
  const callback4 = noop.useCallback((arg0) => {
    ({ reaction, reactionLocation } = arg0);
    ({ disableReactionCreates, disableReactionUpdates, locationAnalyticsObject } = arg0);
    const channel = ChannelStore.getChannel(threadId);
    _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
    const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
    _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    if (disableReactionCreates) {
      if (disableReactionUpdates) {
        const obj3 = {
          messageId: firstMessage.id,
          channelId: threadId,
          reactions: firstMessage.reactions,
          location: null,
        };
        const obj4 = { object: locationAnalyticsObject, objectType: constants.CANT_ADD_OR_REMOVE };
        obj3.location = obj4;
        reactions_ReactionUtils.handleViewReactions(obj3);
      }
    }
    let tmp6 = null != reaction;
    if (tmp6) {
      tmp6 = reaction.burst_count > 0;
    }
    const result = messages_MessagesUtils.handleAddOrRemoveReaction(
      firstMessage.id,
      channel,
      reaction,
      tmp6,
      reactionLocation,
    );
  }, items4);
  const items6 = [threadId];
  const callback5 = noop.useCallback((emoji) => {
    const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
    _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    reactions_ReactionUtils.handleViewReactions({
      messageId: firstMessage.id,
      channelId: threadId,
      emoji: emoji.emoji,
      reactions: firstMessage.reactions,
    });
  }, items5);
  const items7 = [threadId, NORMAL];
  const callback6 = noop.useCallback(() => {
    const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
    _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
    reactions_ReactionUtils.handleViewReactions({
      messageId: firstMessage.id,
      channelId: threadId,
      reactions: firstMessage.reactions,
    });
  }, items6);
  return {
    onTapMedia: callback,
    onTapPost: callback1,
    onLongTapPost: callback3,
    onTapReaction: callback4,
    onLongTapReaction: callback5,
    onTapReactionCount: callback6,
    onTapAddReaction: noop.useCallback(() => {
      const channel = ChannelStore.getChannel(threadId);
      _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
      const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
      _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
      const result = messages_MessagesUtils.handleAddOrRemoveReaction(
        firstMessage.id,
        channel,
        null,
        NORMAL === MessageReactionsTypes.ReactionTypes.BURST,
      );
    }, items7),
    onTapMostRecentMessage: callback2,
  };
}
