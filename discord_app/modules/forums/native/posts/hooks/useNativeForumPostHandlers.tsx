// discord_app/modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import ThreadConstants from "../../../../threads/ThreadConstants.tsx";
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
import messages_MessagesUtils from "../../../../messages/native/MessagesUtils.tsx";
import reactions_ReactionUtils from "../../../../reactions/native/ReactionUtils.tsx";
import showLongPressForumPostActionSheetDefault from "../../../../action_sheet/native/components/showLongPressForumPostActionSheet.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ActionSheetStore from "../../../../action_sheet/native/ActionSheetStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import ForumPostMessagesStore from "../../../ForumPostMessagesStore.tsx";
import ForumPostRecentMessageStore from "../../../ForumPostRecentMessageStore.tsx";
import Constants from "../../../../../Constants.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let src, threadId;

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
({
  AnalyticsObjectTypes: unpackModuleId,
  AnalyticsPages: closure_12,
  AnalyticsSections: map1,
  EMPTY_STRING_SNOWFLAKE_ID: closure_14,
} = Constants);
const constants4 = ThreadConstants.OpenThreadAnalyticsLocations;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (threadId) => {
      let tmp12;
      let tmp4;
      let tmp = threadId;
      let obj = threadId(576);
      const cResult = obj.c(27);
      threadId = threadId.threadId;
      let NORMAL = threadId.reactionType;
      if (undefined === NORMAL) {
        NORMAL = tmp(7259).ReactionTypes.NORMAL;
      }
      if (cResult[0] !== threadId) {
        const fn = function h(containerRef) {
          let closure_129_0;
          let initialIndex;
          let mediaItems;
          ({ messageId: closure_129_0, mediaItems, initialIndex } = containerRef);
          let num = 0;
          containerRef = containerRef.containerRef;
          if (undefined !== initialIndex) {
            num = initialIndex;
          }
          const channel = ChannelStore.getChannel(threadId);
          _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
          let obj = useChannelName;
          const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, false);
          const obj2 = utils_ChannelUtils;
          const channelIcon = obj2.getChannelIcon(channel);
          const mapped = mediaItems.map((src) => {
            let str1;
            let tmp18;
            src = src.src;
            const srcIsAnimated = src.srcIsAnimated;
            const obj = NORMAL(closure_2_3[15]);
            const str = obj.toURLSafe(src);
            let tmp = null != str;
            if (srcIsAnimated) {
              if (tmp) {
                const str6 = str.pathname;
                const formatted = str6.toLowerCase();
                let endsWithResult = formatted.endsWith(".webp");
                if (!endsWithResult) {
                  const str8 = str.pathname;
                  const formatted1 = str8.toLowerCase();
                  endsWithResult = formatted1.endsWith(".avif");
                }
                tmp = endsWithResult;
              }
              if (tmp) {
                let isAttachmentPathUrlResult = src.type === threadId(closure_2_3[16]).ForumPostMediaTypes.ATTACHMENT;
                if (isAttachmentPathUrlResult) {
                  const obj5 = closure_2_2(closure_2_3[17]);
                  isAttachmentPathUrlResult = obj5.isAttachmentPathUrl(str);
                }
                if (!isAttachmentPathUrlResult) {
                  let result = src.type === threadId(closure_2_3[16]).ForumPostMediaTypes.EMBED;
                  if (result) {
                    const obj6 = closure_2_2(closure_2_3[17]);
                    result = obj6.isExternalProxiedAttachmentUrl(str);
                  }
                  isAttachmentPathUrlResult = result;
                }
                tmp = isAttachmentPathUrlResult;
              }
              str1 = src;
              if (tmp) {
                const searchParams2 = str.searchParams;
                const result1 = searchParams2.set("animated", "true");
                const str12 = str.pathname;
                const formatted2 = str12.toLowerCase();
                if (formatted2.endsWith(".avif")) {
                  const searchParams3 = str.searchParams;
                  const result2 = searchParams3.set("format", "webp");
                }
                str1 = str.toString();
              }
            } else {
              let endsWithResult1 = tmp;
              if (endsWithResult1) {
                const str2 = str.pathname;
                const formatted3 = str2.toLowerCase();
                endsWithResult1 = formatted3.endsWith(".avif");
              }
              str1 = src;
              if (endsWithResult1) {
                const searchParams = str.searchParams;
                const result3 = searchParams.set("format", "webp");
                str1 = str.toString();
              }
            }
            size = {
              uri: str1,
              guildId: channel.guild_id,
              messageId: tmp18,
              channelId: channel.id,
              mediaIndex: null,
              width: null,
              height: null,
              accessoryType: null,
              attachmentId: null,
            };
            tmp18 = closure_1_0;
            if (closure_1_0 == null) {
              tmp18 = closure_2_14;
            }
            ({
              mediaIndex: obj8.mediaIndex,
              width: obj8.width,
              height: obj8.height,
              type: obj8.accessoryType,
              attachmentId: obj8.attachmentId,
            } = src);
            return size;
          });
          const obj3 = openMediaModal;
          const obj4 = {
            initialIndex: num,
            initialSources: mapped,
            channelId: channel.id,
            contextName: channelName,
            contextIcon: channelIcon,
            originViewOrOriginLayout: containerRef.current,
          };
          obj3.openMediaModal(obj4);
        };
        let num = 0;
        cResult[0] = threadId;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== threadId) {
        class F {
          constructor() {
            let obj3;
            const obj = PlatformUtils;
            if (obj.isAndroid()) {
              const tmpResult = HapticUtils;
              const result = tmpResult.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            }
            const channel = ChannelStore.getChannel(threadId);
            _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
            const channel1 = ChannelStore.getChannel(channel.parent_id);
            _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
            const obj2 = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: obj3 };
            obj3 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
            const tmpResult3 = tracking_Tracking;
            const result1 = tmpResult3.trackForumPostClicked(obj2);
            const obj4 = { source: constants.FORUM, navigationReplace: false };
            const tmpResult4 = transitionToChannel;
            tmpResult4.transitionToThread(channel, obj4);
          }
        }
        cResult[2] = threadId;
        cResult[3] = F;
      } else {
        class F {
          constructor() {
            let obj3;
            const obj = PlatformUtils;
            if (obj.isAndroid()) {
              const tmpResult = HapticUtils;
              const result = tmpResult.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            }
            const channel = ChannelStore.getChannel(threadId);
            _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
            const channel1 = ChannelStore.getChannel(channel.parent_id);
            _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
            const obj2 = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: obj3 };
            obj3 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
            const tmpResult3 = tracking_Tracking;
            const result1 = tmpResult3.trackForumPostClicked(obj2);
            const obj4 = { source: constants.FORUM, navigationReplace: false };
            const tmpResult4 = transitionToChannel;
            tmpResult4.transitionToThread(channel, obj4);
          }
        }
      }
      F = tmp5;
      if (cResult[4] === tmp5) {
        class F {
          constructor() {
            let obj3;
            const obj = PlatformUtils;
            if (obj.isAndroid()) {
              const tmpResult = HapticUtils;
              const result = tmpResult.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            }
            const channel = ChannelStore.getChannel(threadId);
            _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
            const channel1 = ChannelStore.getChannel(channel.parent_id);
            _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
            const obj2 = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: obj3 };
            obj3 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
            const tmpResult3 = tracking_Tracking;
            const result1 = tmpResult3.trackForumPostClicked(obj2);
            const obj4 = { source: constants.FORUM, navigationReplace: false };
            const tmpResult4 = transitionToChannel;
            tmpResult4.transitionToThread(channel, obj4);
          }
        }
        if (cResult[7] !== threadId) {
          class L {
            constructor() {
              const channel = ChannelStore.getChannel(threadId);
              _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
              const channel1 = ChannelStore.getChannel(channel.parent_id);
              _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
              const tmp6 = _modDef38;
              tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
              const tmp8 = null != ActionSheetStore.getContent() || null == UserStore.getUser(channel.ownerId);
              if (!tmp8) {
                const obj2 = ChatInputUtils;
                obj2.dismissKeyboard();
                showLongPressForumPostActionSheetDefault(channel, channel1);
              }
            }
          }
          cResult[7] = threadId;
          cResult[8] = L;
        } else {
          class L {
            constructor() {
              const channel = ChannelStore.getChannel(threadId);
              _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
              const channel1 = ChannelStore.getChannel(channel.parent_id);
              _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
              const tmp6 = _modDef38;
              tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
              const tmp8 = null != ActionSheetStore.getContent() || null == UserStore.getUser(channel.ownerId);
              if (!tmp8) {
                const obj2 = ChatInputUtils;
                obj2.dismissKeyboard();
                showLongPressForumPostActionSheetDefault(channel, channel1);
              }
            }
          }
        }
        if (cResult[9] !== threadId) {
          class L {
            constructor() {
              const channel = ChannelStore.getChannel(threadId);
              _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
              const channel1 = ChannelStore.getChannel(channel.parent_id);
              _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
              const tmp6 = _modDef38;
              tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
              const tmp8 = null != ActionSheetStore.getContent() || null == UserStore.getUser(channel.ownerId);
              if (!tmp8) {
                const obj2 = ChatInputUtils;
                obj2.dismissKeyboard();
                showLongPressForumPostActionSheetDefault(channel, channel1);
              }
            }
          }
          cResult[9] = threadId;
          cResult[10] = tmp9;
        } else {
          class L {
            constructor() {
              const channel = ChannelStore.getChannel(threadId);
              _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
              const channel1 = ChannelStore.getChannel(channel.parent_id);
              _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
              const tmp6 = _modDef38;
              tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
              const tmp8 = null != ActionSheetStore.getContent() || null == UserStore.getUser(channel.ownerId);
              if (!tmp8) {
                const obj2 = ChatInputUtils;
                obj2.dismissKeyboard();
                showLongPressForumPostActionSheetDefault(channel, channel1);
              }
            }
          }
        }
        if (cResult[11] !== threadId) {
          class N {
            constructor(emoji) {
              const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
              _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
              const obj = reactions_ReactionUtils;
              const obj2 = {
                messageId: firstMessage.id,
                channelId: threadId,
                emoji: emoji.emoji,
                reactions: firstMessage.reactions,
              };
              obj.handleViewReactions(obj2);
            }
          }
          cResult[11] = threadId;
          cResult[12] = N;
        } else {
          class N {
            constructor(emoji) {
              const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
              _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
              const obj = reactions_ReactionUtils;
              const obj2 = {
                messageId: firstMessage.id,
                channelId: threadId,
                emoji: emoji.emoji,
                reactions: firstMessage.reactions,
              };
              obj.handleViewReactions(obj2);
            }
          }
        }
        if (cResult[13] !== threadId) {
          class U {
            constructor() {
              const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
              _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
              const obj = reactions_ReactionUtils;
              const obj2 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
              obj.handleViewReactions(obj2);
            }
          }
          cResult[13] = threadId;
          cResult[14] = U;
        } else {
          class U {
            constructor() {
              const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
              _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
              const obj = reactions_ReactionUtils;
              const obj2 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
              obj.handleViewReactions(obj2);
            }
          }
        }
        if (cResult[15] === NORMAL) {
          class U {
            constructor() {
              const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
              _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
              const obj = reactions_ReactionUtils;
              const obj2 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
              obj.handleViewReactions(obj2);
            }
          }
          if (cResult[18] === L) {
            class U {
              constructor() {
                const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
                _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
                const obj = reactions_ReactionUtils;
                const obj2 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
                obj.handleViewReactions(obj2);
              }
            }
          }
          let obj2 = {
            onTapMedia: tmp4,
            onTapPost: tmp5,
            onLongTapPost: L,
            onTapReaction: tmp9,
            onLongTapReaction: N,
            onTapReactionCount: U,
            onTapAddReaction: tmp12,
            onTapMostRecentMessage: H,
          };
          cResult[18] = L;
          cResult[19] = N;
          class H {
            constructor() {
              let obj5;
              const channel = ChannelStore.getChannel(threadId);
              _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
              const channel1 = ChannelStore.getChannel(channel.parent_id);
              _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
              const messageState = ForumPostRecentMessageStore.getMessageState(threadId);
              const message = messageState.message;
              if (messageState.loaded) {
                if (null != message) {
                  const obj3 = { guildId: null, channelId: null, postId: threadId, location: obj5 };
                  ({ guild_id: obj2.guildId, id: obj2.channelId } = channel1);
                  obj5 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
                  const obj = tracking_Tracking;
                  const result = obj.trackForumPostClicked(obj3);
                  const obj8 = { source: constants.FORUM, navigationReplace: false };
                  const obj4 = transitionToChannel;
                  const result1 = obj4.transitionToThreadMessage(channel, message.id, obj8);
                }
              }
              F();
            }
          }
          cResult[21] = tmp4;
          cResult[22] = H;
          cResult[23] = tmp5;
          cResult[24] = tmp9;
          cResult[25] = U;
          cResult[26] = obj2;
        }
        const fn2 = function k() {
          const channel = ChannelStore.getChannel(threadId);
          _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
          const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
          _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
          const obj = messages_MessagesUtils;
          const result = obj.handleAddOrRemoveReaction(
            firstMessage.id,
            channel,
            null,
            NORMAL === MessageReactionsTypes.ReactionTypes.BURST,
          );
        };
        cResult[15] = NORMAL;
        cResult[16] = threadId;
        cResult[17] = fn2;
        tmp12 = fn2;
      }
      class H {
        constructor() {
          let obj5;
          const channel = ChannelStore.getChannel(threadId);
          _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
          const channel1 = ChannelStore.getChannel(channel.parent_id);
          _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
          const messageState = ForumPostRecentMessageStore.getMessageState(threadId);
          const message = messageState.message;
          if (messageState.loaded) {
            if (null != message) {
              const obj3 = { guildId: null, channelId: null, postId: threadId, location: obj5 };
              ({ guild_id: obj2.guildId, id: obj2.channelId } = channel1);
              obj5 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
              const obj = tracking_Tracking;
              const result = obj.trackForumPostClicked(obj3);
              const obj8 = { source: constants.FORUM, navigationReplace: false };
              const obj4 = transitionToChannel;
              const result1 = obj4.transitionToThreadMessage(channel, message.id, obj8);
            }
          }
          F();
        }
      }
      cResult[4] = tmp5;
      cResult[5] = threadId;
      cResult[6] = H;
    }
  : (threadId) => {
      threadId = threadId.threadId;
      let NORMAL = threadId.reactionType;
      if (NORMAL === undefined) {
        let tmp = threadId;
        NORMAL = threadId(7259).ReactionTypes.NORMAL;
      }
      const items = [threadId];
      const items1 = [threadId];
      const callback = react.useCallback((containerRef) => {
        let closure_129_0;
        let initialIndex;
        let mediaItems;
        ({ messageId: closure_129_0, mediaItems, initialIndex } = containerRef);
        containerRef = containerRef.containerRef;
        if (initialIndex === undefined) {
          initialIndex = 0;
        }
        const channel = ChannelStore.getChannel(threadId);
        _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
        let obj = useChannelName;
        const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, false);
        const obj2 = utils_ChannelUtils;
        const channelIcon = obj2.getChannelIcon(channel);
        const mapped = mediaItems.map((src) => {
          let str1;
          let tmp18;
          src = src.src;
          const srcIsAnimated = src.srcIsAnimated;
          const obj = NORMAL(closure_2_3[15]);
          const str = obj.toURLSafe(src);
          let tmp = null != str;
          if (srcIsAnimated) {
            if (tmp) {
              const str6 = str.pathname;
              const formatted = str6.toLowerCase();
              let endsWithResult = formatted.endsWith(".webp");
              if (!endsWithResult) {
                const str8 = str.pathname;
                const formatted1 = str8.toLowerCase();
                endsWithResult = formatted1.endsWith(".avif");
              }
              tmp = endsWithResult;
            }
            if (tmp) {
              let isAttachmentPathUrlResult = src.type === threadId(closure_2_3[16]).ForumPostMediaTypes.ATTACHMENT;
              if (isAttachmentPathUrlResult) {
                const obj5 = callback1(closure_2_3[17]);
                isAttachmentPathUrlResult = obj5.isAttachmentPathUrl(str);
              }
              if (!isAttachmentPathUrlResult) {
                let result = src.type === threadId(closure_2_3[16]).ForumPostMediaTypes.EMBED;
                if (result) {
                  const obj6 = callback1(closure_2_3[17]);
                  result = obj6.isExternalProxiedAttachmentUrl(str);
                }
                isAttachmentPathUrlResult = result;
              }
              tmp = isAttachmentPathUrlResult;
            }
            str1 = src;
            if (tmp) {
              const searchParams2 = str.searchParams;
              const result1 = searchParams2.set("animated", "true");
              const str12 = str.pathname;
              const formatted2 = str12.toLowerCase();
              if (formatted2.endsWith(".avif")) {
                const searchParams3 = str.searchParams;
                const result2 = searchParams3.set("format", "webp");
              }
              str1 = str.toString();
            }
          } else {
            let endsWithResult1 = tmp;
            if (endsWithResult1) {
              const str2 = str.pathname;
              const formatted3 = str2.toLowerCase();
              endsWithResult1 = formatted3.endsWith(".avif");
            }
            str1 = src;
            if (endsWithResult1) {
              const searchParams = str.searchParams;
              const result3 = searchParams.set("format", "webp");
              str1 = str.toString();
            }
          }
          size = {
            uri: str1,
            guildId: channel.guild_id,
            messageId: tmp18,
            channelId: channel.id,
            mediaIndex: null,
            width: null,
            height: null,
            accessoryType: null,
            attachmentId: null,
          };
          tmp18 = closure_1_0;
          if (closure_1_0 == null) {
            tmp18 = closure_2_14;
          }
          ({
            mediaIndex: obj8.mediaIndex,
            width: obj8.width,
            height: obj8.height,
            type: obj8.accessoryType,
            attachmentId: obj8.attachmentId,
          } = src);
          return size;
        });
        const obj3 = openMediaModal;
        const obj4 = {
          initialIndex,
          initialSources: mapped,
          channelId: channel.id,
          contextName: channelName,
          contextIcon: channelIcon,
          originViewOrOriginLayout: containerRef.current,
        };
        obj3.openMediaModal(obj4);
      }, items);
      const callback1 = react.useCallback(() => {
        let obj3;
        const obj = PlatformUtils;
        if (obj.isAndroid()) {
          const tmpResult = HapticUtils;
          const result = tmpResult.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        }
        const channel = ChannelStore.getChannel(threadId);
        _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
        const channel1 = ChannelStore.getChannel(channel.parent_id);
        _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
        const obj2 = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: obj3 };
        obj3 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
        const tmpResult3 = tracking_Tracking;
        const result1 = tmpResult3.trackForumPostClicked(obj2);
        const obj4 = { source: constants.FORUM, navigationReplace: false };
        const tmpResult4 = transitionToChannel;
        tmpResult4.transitionToThread(channel, obj4);
      }, items1);
      const items2 = [callback1, threadId];
      const items3 = [threadId];
      const callback2 = react.useCallback(() => {
        let obj5;
        const channel = ChannelStore.getChannel(threadId);
        _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
        const channel1 = ChannelStore.getChannel(channel.parent_id);
        _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
        const messageState = ForumPostRecentMessageStore.getMessageState(threadId);
        const message = messageState.message;
        if (messageState.loaded) {
          if (null != message) {
            const obj3 = { guildId: null, channelId: null, postId: threadId, location: obj5 };
            ({ guild_id: obj2.guildId, id: obj2.channelId } = channel1);
            obj5 = { page: constants.GUILD_CHANNEL, section: map1.FORUM_CHANNEL_POST };
            const obj = tracking_Tracking;
            const result = obj.trackForumPostClicked(obj3);
            const obj8 = { source: constants.FORUM, navigationReplace: false };
            const obj4 = transitionToChannel;
            const result1 = obj4.transitionToThreadMessage(channel, message.id, obj8);
          }
        }
        callback1();
      }, items2);
      const items4 = [threadId];
      const callback3 = react.useCallback(() => {
        const channel = ChannelStore.getChannel(threadId);
        _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
        const channel1 = ChannelStore.getChannel(channel.parent_id);
        _modDef38(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
        const tmp6 = _modDef38;
        tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
        const tmp8 = null != ActionSheetStore.getContent() || null == UserStore.getUser(channel.ownerId);
        if (!tmp8) {
          const obj2 = ChatInputUtils;
          obj2.dismissKeyboard();
          showLongPressForumPostActionSheetDefault(channel, channel1);
        }
      }, items3);
      const items5 = [threadId];
      const callback4 = react.useCallback((arg0) => {
        let disableReactionCreates;
        let disableReactionUpdates;
        let locationAnalyticsObject;
        let obj4;
        let reaction;
        let reactionLocation;
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
              location: obj4,
            };
            obj4 = { object: locationAnalyticsObject, objectType: unpackModuleId.CANT_ADD_OR_REMOVE };
            const obj2 = reactions_ReactionUtils;
            obj2.handleViewReactions(obj3);
          }
        }
        const tmp6 = null != reaction && reaction.burst_count > 0;
        const obj = messages_MessagesUtils;
        const result = obj.handleAddOrRemoveReaction(firstMessage.id, channel, reaction, tmp6, reactionLocation);
      }, items4);
      const items6 = [threadId];
      const callback5 = react.useCallback((emoji) => {
        const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
        _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
        const obj = reactions_ReactionUtils;
        const obj2 = {
          messageId: firstMessage.id,
          channelId: threadId,
          emoji: emoji.emoji,
          reactions: firstMessage.reactions,
        };
        obj.handleViewReactions(obj2);
      }, items5);
      const items7 = [threadId, NORMAL];
      const callback6 = react.useCallback(() => {
        const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
        _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
        const obj = reactions_ReactionUtils;
        const obj2 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
        obj.handleViewReactions(obj2);
      }, items6);
      let obj = {
        onTapMedia: callback,
        onTapPost: callback1,
        onLongTapPost: callback3,
        onTapReaction: callback4,
        onLongTapReaction: callback5,
        onTapReactionCount: callback6,
        onTapAddReaction: react.useCallback(() => {
          const channel = ChannelStore.getChannel(threadId);
          _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
          const firstMessage = ForumPostMessagesStore.getMessage(threadId).firstMessage;
          _modDef38(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
          const obj = messages_MessagesUtils;
          const result = obj.handleAddOrRemoveReaction(
            firstMessage.id,
            channel,
            null,
            NORMAL === MessageReactionsTypes.ReactionTypes.BURST,
          );
        }, items7),
        onTapMostRecentMessage: callback2,
      };
      return obj;
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx");

export default tmp3;
