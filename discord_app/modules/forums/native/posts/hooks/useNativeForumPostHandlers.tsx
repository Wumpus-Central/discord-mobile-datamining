// discord_app/modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import ChatInputUtils from "../../../../../utils/native/ChatInputUtils.tsx";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../../haptics/HapticFeedbackTypes.tsx";
import transitionToChannel from "../../../../routing/transitionToChannel.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import MessageReactionsTypes from "../../../../messages/MessageReactionsTypes.tsx";
import Tracking from "../../../tracking/Tracking.tsx";
import utils_ChannelUtils from "../../../../../utils/native/ChannelUtils.tsx";
import openMediaModal from "../../../../media_viewer/native/components/openMediaModal.tsx";
import messages_MessagesUtils from "../../../../messages/native/MessagesUtils.tsx";
import reactions_ReactionUtils from "../../../../reactions/native/ReactionUtils.tsx";
import showLongPressForumPostActionSheetDefault from "../../../../action_sheet/native/components/showLongPressForumPostActionSheet.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../../../action_sheet/native/ActionSheetStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import ForumPostMessagesStore from "../../../ForumPostMessagesStore.tsx";
import ForumPostRecentMessageStore from "../../../ForumPostRecentMessageStore.tsx";

require = fn;
const Constants = fn(1085);
({
  AnalyticsObjectTypes: closure_11,
  AnalyticsPages: closure_12,
  AnalyticsSections: map1,
  EMPTY_STRING_SNOWFLAKE_ID: closure_14,
} = Constants);
const constants4 = fn(1125).OpenThreadAnalyticsLocations;
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useNativeForumPostHandlers(threadId) {
      const cResult = threadId(576).c(27);
      threadId = threadId.threadId;
      let NORMAL = threadId.reactionType;
      if (undefined === NORMAL) {
        NORMAL = tmp(7882).ReactionTypes.NORMAL;
      }
      if (cResult[0] !== threadId) {
        const fn = function h(containerRef) {
          ({ messageId: threadId, mediaItems, initialIndex } = containerRef);
          let num = 0;
          if (undefined !== initialIndex) {
            num = initialIndex;
          }
          const channel = ChannelStore.getChannel(threadId);
          _modDef38(null != channel, "[Forum Post Handlers] Thread cannot be null.");
          const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore, false);
          const channelIcon = utils_ChannelUtils.getChannelIcon(channel);
          const mapped = mediaItems.map((src) => {
            src = src.src;
            const str = NORMAL(1384).toURLSafe(src);
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
                let isAttachmentPathUrlResult = src.type === threadId(8462).ForumPostMediaTypes.ATTACHMENT;
                if (isAttachmentPathUrlResult) {
                  isAttachmentPathUrlResult = closure_2(9290).isAttachmentPathUrl(str);
                  const obj5 = closure_2(9290);
                }
                if (!isAttachmentPathUrlResult) {
                  let result = src.type === threadId(8462).ForumPostMediaTypes.EMBED;
                  if (result) {
                    result = closure_2(9290).isExternalProxiedAttachmentUrl(str);
                    const obj6 = closure_2(9290);
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
            initialIndex: num,
            initialSources: mapped,
            channelId: channel.id,
            contextName: channelName,
            contextIcon: channelIcon,
            originViewOrOriginLayout: containerRef.containerRef.current,
          });
        };
        cResult[0] = threadId;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== threadId) {
        class F {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_3;
            obj = closure_0(closure_3[19]);
            if (obj.isAndroid()) {
              tmpResult = tmp(tmp2[20]);
              tmp3 = closure_1;
              result = tmpResult.triggerHapticFeedback(closure_1(tmp2[21]).IMPACT_LIGHT);
            }
            channel = closure_6.getChannel(threadId);
            tmp6 = closure_1(tmp2[12])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
            channel1 = closure_6.getChannel(channel.parent_id);
            tmp8 = closure_1(tmp2[12])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
            tmpResult1 = tmp(tmp2[22]);
            obj1 = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: null };
            obj8 = { page: AnalyticsPages.GUILD_CHANNEL, section: AnalyticsSections.FORUM_CHANNEL_POST };
            obj1.location = obj8;
            result1 = tmpResult1.trackForumPostClicked(obj1);
            tmpResult2 = tmp(tmp2[23]);
            obj9 = { source: closure_15.FORUM, navigationReplace: false };
            transitionToThreadResult = tmpResult2.transitionToThread(channel, obj9);
            return;
          }
        }
        cResult[2] = threadId;
        cResult[3] = F;
      } else {
        class F {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_3;
            obj = closure_0(closure_3[19]);
            if (obj.isAndroid()) {
              tmpResult = tmp(tmp2[20]);
              tmp3 = closure_1;
              result = tmpResult.triggerHapticFeedback(closure_1(tmp2[21]).IMPACT_LIGHT);
            }
            channel = closure_6.getChannel(threadId);
            tmp6 = closure_1(tmp2[12])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
            channel1 = closure_6.getChannel(channel.parent_id);
            tmp8 = closure_1(tmp2[12])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
            tmpResult1 = tmp(tmp2[22]);
            obj1 = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: null };
            obj8 = { page: AnalyticsPages.GUILD_CHANNEL, section: AnalyticsSections.FORUM_CHANNEL_POST };
            obj1.location = obj8;
            result1 = tmpResult1.trackForumPostClicked(obj1);
            tmpResult2 = tmp(tmp2[23]);
            obj9 = { source: closure_15.FORUM, navigationReplace: false };
            transitionToThreadResult = tmpResult2.transitionToThread(channel, obj9);
            return;
          }
        }
      }
      importAll = F;
      if (cResult[4] === F) {
        class F {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_3;
            obj = closure_0(closure_3[19]);
            if (obj.isAndroid()) {
              tmpResult = tmp(tmp2[20]);
              tmp3 = closure_1;
              result = tmpResult.triggerHapticFeedback(closure_1(tmp2[21]).IMPACT_LIGHT);
            }
            channel = closure_6.getChannel(threadId);
            tmp6 = closure_1(tmp2[12])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
            channel1 = closure_6.getChannel(channel.parent_id);
            tmp8 = closure_1(tmp2[12])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
            tmpResult1 = tmp(tmp2[22]);
            obj1 = { guildId: channel1.guild_id, channelId: channel1.id, postId: threadId, location: null };
            obj8 = { page: AnalyticsPages.GUILD_CHANNEL, section: AnalyticsSections.FORUM_CHANNEL_POST };
            obj1.location = obj8;
            result1 = tmpResult1.trackForumPostClicked(obj1);
            tmpResult2 = tmp(tmp2[23]);
            obj9 = { source: closure_15.FORUM, navigationReplace: false };
            transitionToThreadResult = tmpResult2.transitionToThread(channel, obj9);
            return;
          }
        }
        if (cResult[7] !== threadId) {
          class L {
            constructor() {
              channel = closure_6.getChannel(threadId);
              tmp3 = closure_3;
              tmp2 = closure_1;
              tmp4 = closure_1(closure_3[12])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
              channel1 = closure_6.getChannel(channel.parent_id);
              tmp5 = closure_1(closure_3[12])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
              tmp6 = closure_1(closure_3[12]);
              tmp6Result = tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
              tmp8 = null != closure_5.getContent();
              if (!tmp8) {
                tmp8 = null == closure_8.getUser(channel.ownerId);
              }
              if (!tmp8) {
                tmp9 = closure_0;
                obj2 = closure_0(tmp3[24]);
                dismissKeyboardResult = obj2.dismissKeyboard();
                tmp11 = tmp2(tmp3[25])(channel, channel1);
              }
              return;
            }
          }
          cResult[7] = threadId;
          cResult[8] = L;
        } else {
          class L {
            constructor() {
              channel = closure_6.getChannel(threadId);
              tmp3 = closure_3;
              tmp2 = closure_1;
              tmp4 = closure_1(closure_3[12])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
              channel1 = closure_6.getChannel(channel.parent_id);
              tmp5 = closure_1(closure_3[12])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
              tmp6 = closure_1(closure_3[12]);
              tmp6Result = tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
              tmp8 = null != closure_5.getContent();
              if (!tmp8) {
                tmp8 = null == closure_8.getUser(channel.ownerId);
              }
              if (!tmp8) {
                tmp9 = closure_0;
                obj2 = closure_0(tmp3[24]);
                dismissKeyboardResult = obj2.dismissKeyboard();
                tmp11 = tmp2(tmp3[25])(channel, channel1);
              }
              return;
            }
          }
        }
        if (cResult[9] !== threadId) {
          class L {
            constructor() {
              channel = closure_6.getChannel(threadId);
              tmp3 = closure_3;
              tmp2 = closure_1;
              tmp4 = closure_1(closure_3[12])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
              channel1 = closure_6.getChannel(channel.parent_id);
              tmp5 = closure_1(closure_3[12])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
              tmp6 = closure_1(closure_3[12]);
              tmp6Result = tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
              tmp8 = null != closure_5.getContent();
              if (!tmp8) {
                tmp8 = null == closure_8.getUser(channel.ownerId);
              }
              if (!tmp8) {
                tmp9 = closure_0;
                obj2 = closure_0(tmp3[24]);
                dismissKeyboardResult = obj2.dismissKeyboard();
                tmp11 = tmp2(tmp3[25])(channel, channel1);
              }
              return;
            }
          }
          cResult[9] = threadId;
          cResult[10] = tmp9;
        } else {
          class L {
            constructor() {
              channel = closure_6.getChannel(threadId);
              tmp3 = closure_3;
              tmp2 = closure_1;
              tmp4 = closure_1(closure_3[12])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
              channel1 = closure_6.getChannel(channel.parent_id);
              tmp5 = closure_1(closure_3[12])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
              tmp6 = closure_1(closure_3[12]);
              tmp6Result = tmp6(channel1.isForumLikeChannel(), "Forum parents must be forum channels");
              tmp8 = null != closure_5.getContent();
              if (!tmp8) {
                tmp8 = null == closure_8.getUser(channel.ownerId);
              }
              if (!tmp8) {
                tmp9 = closure_0;
                obj2 = closure_0(tmp3[24]);
                dismissKeyboardResult = obj2.dismissKeyboard();
                tmp11 = tmp2(tmp3[25])(channel, channel1);
              }
              return;
            }
          }
        }
        if (cResult[11] !== threadId) {
          class N {
            constructor(arg0) {
              firstMessage = closure_9.getMessage(threadId).firstMessage;
              tmp = closure_1(closure_3[12])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
              obj = closure_0(closure_3[26]);
              obj1 = {
                messageId: firstMessage.id,
                channelId: threadId,
                emoji: threadId.emoji,
                reactions: firstMessage.reactions,
              };
              handleViewReactionsResult = obj.handleViewReactions(obj1);
              return;
            }
          }
          cResult[11] = threadId;
          cResult[12] = N;
        } else {
          class N {
            constructor(arg0) {
              firstMessage = closure_9.getMessage(threadId).firstMessage;
              tmp = closure_1(closure_3[12])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
              obj = closure_0(closure_3[26]);
              obj1 = {
                messageId: firstMessage.id,
                channelId: threadId,
                emoji: threadId.emoji,
                reactions: firstMessage.reactions,
              };
              handleViewReactionsResult = obj.handleViewReactions(obj1);
              return;
            }
          }
        }
        if (cResult[13] !== threadId) {
          class U {
            constructor() {
              firstMessage = closure_9.getMessage(threadId).firstMessage;
              tmp = closure_1(closure_3[12])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
              obj = closure_0(closure_3[26]);
              obj1 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
              handleViewReactionsResult = obj.handleViewReactions(obj1);
              return;
            }
          }
          cResult[13] = threadId;
          cResult[14] = U;
        } else {
          class U {
            constructor() {
              firstMessage = closure_9.getMessage(threadId).firstMessage;
              tmp = closure_1(closure_3[12])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
              obj = closure_0(closure_3[26]);
              obj1 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
              handleViewReactionsResult = obj.handleViewReactions(obj1);
              return;
            }
          }
        }
        if (cResult[15] === NORMAL) {
          class U {
            constructor() {
              firstMessage = closure_9.getMessage(threadId).firstMessage;
              tmp = closure_1(closure_3[12])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
              obj = closure_0(closure_3[26]);
              obj1 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
              handleViewReactionsResult = obj.handleViewReactions(obj1);
              return;
            }
          }
          if (cResult[18] === L) {
            class U {
              constructor() {
                firstMessage = closure_9.getMessage(threadId).firstMessage;
                tmp = closure_1(closure_3[12])(null != firstMessage, "[Forum Post Handlers] Message cannot be null.");
                obj = closure_0(closure_3[26]);
                obj1 = { messageId: firstMessage.id, channelId: threadId, reactions: firstMessage.reactions };
                handleViewReactionsResult = obj.handleViewReactions(obj1);
                return;
              }
            }
          }
          let obj2 = {
            onTapMedia: tmp4,
            onTapPost: F,
            onLongTapPost: L,
            onTapReaction: tmp9,
            onLongTapReaction: N,
            onTapReactionCount: U,
            onTapAddReaction: tmp12,
            onTapMostRecentMessage: A,
          };
          cResult[18] = L;
          cResult[19] = N;
          class A {
            constructor() {
              tmp = threadId;
              channel = closure_6.getChannel(threadId);
              tmp3 = closure_3;
              tmp4 = closure_1(closure_3[12])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
              channel1 = closure_6.getChannel(channel.parent_id);
              tmp6 = closure_1(closure_3[12])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
              messageState = closure_10.getMessageState(threadId);
              message = messageState.message;
              if (messageState.loaded) {
                if (null != message) {
                  tmp9 = closure_0;
                  obj = closure_0(tmp3[22]);
                  obj1 = { guildId: null, channelId: null, postId: null, location: null };
                  ({ guild_id: obj2.guildId, id: obj2.channelId } = channel1);
                  obj1.postId = tmp;
                  obj6 = { page: null, section: null };
                  tmp10 = AnalyticsPages;
                  obj6.page = AnalyticsPages.GUILD_CHANNEL;
                  tmp11 = AnalyticsSections;
                  obj6.section = AnalyticsSections.FORUM_CHANNEL_POST;
                  obj1.location = obj6;
                  result = obj.trackForumPostClicked(obj1);
                  obj4 = closure_0(tmp3[23]);
                  obj7 = { source: null, navigationReplace: false };
                  tmp13 = closure_15;
                  obj7.source = closure_15.FORUM;
                  result1 = obj4.transitionToThreadMessage(channel, message.id, obj7);
                }
                return;
              }
              tmp8 = closure_2();
              return;
            }
          }
          cResult[21] = tmp4;
          cResult[22] = A;
          cResult[23] = F;
          cResult[24] = tmp9;
          cResult[25] = U;
          cResult[26] = obj2;
        }
        const fn2 = function k() {
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
        };
        cResult[15] = NORMAL;
        cResult[16] = threadId;
        cResult[17] = fn2;
        tmp12 = fn2;
      }
      class A {
        constructor() {
          tmp = threadId;
          channel = closure_6.getChannel(threadId);
          tmp3 = closure_3;
          tmp4 = closure_1(closure_3[12])(null != channel, "[Forum Post Handlers] Thread cannot be null.");
          channel1 = closure_6.getChannel(channel.parent_id);
          tmp6 = closure_1(closure_3[12])(null != channel1, "[Forum Post Handlers] Parent channel cannot be null.");
          messageState = closure_10.getMessageState(threadId);
          message = messageState.message;
          if (messageState.loaded) {
            if (null != message) {
              tmp9 = closure_0;
              obj = closure_0(tmp3[22]);
              obj1 = { guildId: null, channelId: null, postId: null, location: null };
              ({ guild_id: obj2.guildId, id: obj2.channelId } = channel1);
              obj1.postId = tmp;
              obj6 = { page: null, section: null };
              tmp10 = AnalyticsPages;
              obj6.page = AnalyticsPages.GUILD_CHANNEL;
              tmp11 = AnalyticsSections;
              obj6.section = AnalyticsSections.FORUM_CHANNEL_POST;
              obj1.location = obj6;
              result = obj.trackForumPostClicked(obj1);
              obj4 = closure_0(tmp3[23]);
              obj7 = { source: null, navigationReplace: false };
              tmp13 = closure_15;
              obj7.source = closure_15.FORUM;
              result1 = obj4.transitionToThreadMessage(channel, message.id, obj7);
            }
            return;
          }
          tmp8 = closure_2();
          return;
        }
      }
      cResult[4] = F;
      cResult[5] = threadId;
      cResult[6] = A;
      let obj = threadId(576);
      tmp = threadId;
    }
  : function useNativeForumPostHandlers(threadId) {
      threadId = threadId.threadId;
      let NORMAL = threadId.reactionType;
      if (NORMAL === undefined) {
        NORMAL = threadId(7882).ReactionTypes.NORMAL;
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
          const str = NORMAL(1384).toURLSafe(src);
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
              let isAttachmentPathUrlResult = src.type === threadId(8462).ForumPostMediaTypes.ATTACHMENT;
              if (isAttachmentPathUrlResult) {
                isAttachmentPathUrlResult = callback1(9290).isAttachmentPathUrl(str);
                const obj5 = callback1(9290);
              }
              if (!isAttachmentPathUrlResult) {
                let result = src.type === threadId(8462).ForumPostMediaTypes.EMBED;
                if (result) {
                  result = callback1(9290).isExternalProxiedAttachmentUrl(str);
                  const obj6 = callback1(9290);
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
        const result1 = Tracking.trackForumPostClicked(obj2);
        const obj3 = { page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_POST };
        const tmpResult3 = Tracking;
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
            const result = Tracking.trackForumPostClicked(obj3);
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
    };
